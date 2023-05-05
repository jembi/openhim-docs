---
id: update
title: Update an existing client
sidebar_label: Update
keywords:
  - OpenHIM
  - API
  - Client
  - Update
description: Update an OpenHIM Client via the API
---

## Update client

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To update an existing client record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the client record.


```curl
Method: PUT
Endpoint: {openhim_url}:8080/clients/:clientId
Payload: JSON object of the client record
```

## Example

***Note:*** *In the examples below, we are using the token authentication type to authenticate requests*

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

  Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit

  ```javascript
  // append below code to the "openhim-api.js" script containing the authentication methods.
  // This is described within the authentication section

  const genClientPassword = (password) => {
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
      apiEndpoint: '/clients/clientId',
      username: 'root@openhim.org',
      password: 'openhim-password',
      rejectUnauthorized: false
    }
    const clientPassword = "client-password"
    const clientPasswordDetails = await genClientPassword(clientPassword)

    const SampleData = 'SampleData'

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

  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the updated client object.

  #### generate a valid password hash and salt

  ```bash
  # gen-client-password.sh

  #!/bin/bash
  if (( $# < 1)); then
      echo "OpenHIM Client Password: Curl wrapper that generates the client Password details";
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

  and execute the above bash script with the below command

  ```curl
  ./gen-client-password.sh <CLIENT_PASSWORD>
  ```

  Once you have generated the hash and salt for the password, supply it into the `SampleData.json` payload to be submitted

  Execute the below command in your terminal to create the client

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/clients/clientId -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status code will be `200` if successful.
</TabItem>
<TabItem value="sample">

  ```json
  {
    "_id": "57a4a09078ae562b26d5b2b0",
    "roles": [
      "testing",
      "another-role"
    ],
    "clientID": "testing",
    "name": "Testing",
    "passwordAlgorithm": "sha512",
    "passwordSalt": "94b37205cb460a3a7193a3071021a4eb",
    "passwordHash": "c3d24c5708c7eebe6ec6d900dd713d1c96fd0f45a731c9ae92cbd7f010981b9259cecca2cae415005c02dbfec734ca5c61dc44d150651b94711e121f14465bf6"
  }
  ```

</TabItem>
</Tabs>
