---
id: update
title: Update an existing user
sidebar_label: Update
keywords:
  - OpenHIM
  - API
  - User
  - Update
description: Update an OpenHIM User via the API
---

## Update user

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To update an existing user record, you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the user record.

```curl
Method: PUT
Endpoint: {openhim_url}:8080/users/:userEmail
Payload: JSON object of the user record
```

## Example

<Tabs
  defaultValue="lang"
  values={[
    { label: 'Languages', value: 'lang' },
    { label: 'Sample Data', value: 'sample' }
  ]
}>
<TabItem value="lang">

  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API.

  <Tabs
    defaultValue="nodejs"
    values={[
      { label: 'NodeJS', value: 'nodejs' },
      { label: 'Bash', value: 'bash' }
    ]
  }>
  <TabItem value="nodejs">

  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the [authentication section](../introduction/authentication).

  Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit. You will also need to update the userPassword variable to your desired password. The password will be used to create the passwordHash and passwordSalt which are added to the `SampleData` payload.

  ```javascript
  // append below code to the "openhim-api.js" script containing the authentication methods.
  // This is described within the authentication section

   const genUserPassword = (password) => {
    return new Promise((resolve) => {
      const passwordSalt = crypto.randomBytes(16)

      // create passhash
      let shasum = crypto.createHash('sha512')
      shasum.update(password)
      shasum.update(passwordSalt.toString('hex'))
      const passwordHash = shasum.digest('hex')

      resolve({
        "passwordSalt": passwordSalt.toString('hex'),
        "passwordHash": passwordHash
      })
    })
  }

  (async () => {
    const openhimOptions = {
      apiURL: 'https://localhost:8080',
      apiEndpoint: '/users/userEmail',
      username: 'root@openhim.org',
      password: 'openhim-password',
      rejectUnauthorized: false
    }

    const userPassword = "user-password"
    const userPasswordDetails = await genUserPassword(userPassword)

    const SampleData = 'SampleData'

    SampleData.passwordHash = userPasswordDetails.passwordHash
    SampleData.passwordSalt = userPasswordDetails.passwordSalt

    const headers = await genAuthHeaders(openhimOptions)

    const options = {
      method: 'PUT',
      url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,
      rejectUnauthorized: openhimOptions.rejectUnauthorized,
      headers: headers,
      body: SampleData,
      json: true
    }

    request(options, (error, response, body) => {
      if (error) throw new Error(error)

      console.log({
        statusCode: response.statusCode,
        body
      })
    })
  })()
  ```

  Execute the below command in your terminal to run the nodejs script

  ```bash
  node openhim-api.js
  ```

  </TabItem>
    <TabItem value="bash">

  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the [authentication section](../introduction/authentication).

  To update a user's password details, you first need to generate a password hash and salt. The script below can be used for this

  ```curl
  # gen-user-password.sh

  #!/bin/bash
  if (( $# < 1)); then
      echo "OpenHIM User Password: Curl wrapper that generates the user Password details";
      echo "Usage: $0 PASSWORD";
      exit 0;
  fi
  pass=$1;
  shift;
  shift;

  salt=`cat /dev/urandom | tr -dc 'abcdef0-9' | fold -w 32 | head -n 1`;
  passhash=`echo -n "$pass$salt" | shasum -a 512 | awk '{print $1}'`;

  echo Password Salt: $salt
  echo Password Hash: $passhash

  echo "";
  ```

  Copy and execute the bash script above with the below command. Substitute the <USER_PASSWORD> with your desired password before executing.

  ```curl
  ./gen-user-password.sh <USER_PASSWORD>
  ```

  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the updated user object. If you are updating the password details, add the generated passwordHash and passwordSalt to the `SampleData.json` before executing the command.

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/users/userEmail -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status code will be `200` if successful.
</TabItem>
<TabItem value="sample">

  ```json
  {
    "_id": "123e4567-e89b-12d3-a456-426655440000",
    "settings": {
      "list": {},
      "filter": {
        "limit":100
      }
    },
    "groups": ["root@openhim.org"],
    "email": "root2@openhim.org",
    "firstname": "Klod",
    "surname": "Klester",
    "msisdn": "",
    "passwordAlgorithm": "sha512",
    "passwordSalt": "32d0efc6add6dbd29ed46060a2744e0f",
    "passwordHash": "9362d691a255ffa5c3d1c4992c31d96ea1f3cf71edc4f17685a29d634eaf9849e2d7a4f7237b7b2bca2fb17cee7ec05b4b9cae82c50a81158c45117136c9b3b7"
  }
  ```

</TabItem>
</Tabs>
