---
id: authentication
title: API Authentication
sidebar_label: Authentication
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Construct authentication headers

Each and every API call that is made to the OpenHIM has to be authenticated. The authentication mechanism that is used can be fairly complex to work with however it provides decent security.

The authentication mechanism is based on <http://stackoverflow.com/a/9387289/588776>.

## Initial authentication notification

The user notifies the API that it wants to use its authenticated service:

`GET https://<server>:8080/authenticate/<user_email>`

If you don't have a user account yet, you can use the root user. The default root user details are as follows:

username: root
password: openhim-password (you should change this on a production installation!)

The server will respond with the salt that was used to calculate the clients passwordHash (during user registration):

```json
{
  "salt": "xxx",
  "ts": "xxx"
}
```

You must calculate a passwordhash using the received salt and the supplied user password. `passwordhash = (sha512(salt + password))`

## For subsequent requests to the API

For every request you must add the following additional HTTP headers to the request:

```http
auth-username: <username>
auth-ts: <the current timestamp - in the following format '2014-10-20T13:19:32.380Z' - user time must be in sync with server time for request to work>
auth-salt: <random uuid salt that you generate>
auth-token: <= sha512(passwordhash + auth-salt + auth-ts) >
```

The server will authorise this request by calculating sha512(passwordhash + auth-salt + auth-ts) using the passwordhash from its own database and ensuring that:

- this is equal to auth-token
- the auth-ts isn't more than 2 seconds old

If these 2 conditions true the request is allowed.

## Examples

Below are a few examples of how to achieve the correct request headers to authenticate to the OpenHIM API

<Tabs
  defaultValue="nodejs"
  values={[
    { label: 'NodeJS', value: 'nodejs', },
    { label: 'Bash', value: 'bash', }
  ]
}>

<TabItem value="nodejs">

```javascript
// openhim-api.js

const crypto = require('crypto')
const request = require('request')

// authenticate the username is valid
const authenticate = async (options) => {
  return new Promise((resolve, reject) => {
    // authenticate the username
    let reqOptions = {
      url: `${options.apiURL}/authenticate/${options.username}`,
      rejectUnauthorized: options.rejectUnauthorized
    }

    request.get(reqOptions, (err, resp, body) => {
      if (err){
        return reject(err)
      }
      // if user isn't found
      if (resp.statusCode !== 200) {
        return reject(new Error(`User ${options.username} not found when authenticating with core API`))
      }
      try {
        body = JSON.parse(body)
        resolve(body)
      } catch (err) {
        reject(err)
      }
    })
  })
}

// Generate the relevant auth headers
const genAuthHeaders = async (options) => {
  const authDetails = await authenticate(options)

  const salt = authDetails.salt
  const now = new Date()

  // create passhash
  let shasum = crypto.createHash('sha512')
  shasum.update(salt + options.password)
  const passhash = shasum.digest('hex')

  // create token
  shasum = crypto.createHash('sha512')
  shasum.update(passhash + salt + now)
  const token = shasum.digest('hex')

  // define request headers with auth credentials
  return {
    'auth-username': options.username,
    'auth-ts': now,
    'auth-salt': salt,
    'auth-token': token
  }
}
```

</TabItem>
<TabItem value="bash">

When creating your bash file, ensure the bash script is executable

```bash
# openhim-api.sh

#!/bin/bash

if (( $# < 2)); then
	echo "OpenHIM API: Curl wrapper that sets up the appropriate OpenHIM authentication headers";
	echo "Usage: $0 USERNAME PASSWORD [CURL_ARGS...]";
	exit 0;
fi

username=$1;
pass=$2;
shift;
shift;

# which server?
server=""
for arg in $@; do
    match=`echo $arg | grep http | perl -pe 's|(https?://.*?)/.*|\1|'`;
    if [ "$match" ]; then
        server=$match;
    fi
done

if [ ! "$server" ]; then
    echo "OpenHIM server not specified";
    exit 0;
fi

auth=`curl -k -s $server/authenticate/$username`;
salt=`echo $auth | perl -pe 's|.*"salt":"(.*?)".*|\1|'`;
ts=`echo $auth | perl -pe 's|.*"ts":"(.*?)".*|\1|'`;

passhash=`echo -n "$salt$pass" | shasum -a 512 | awk '{print $1}'`;
token=`echo -n "$passhash$salt$ts" | shasum -a 512 | awk '{print $1}'`;

curl -k -H "auth-username: $username" -H "auth-ts: $ts" -H "auth-salt: $salt" -H "auth-token: $token" $@;
echo "";
```

</TabItem>
</Tabs>
