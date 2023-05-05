---
id: create
title: Create Client
sidebar_label: Create
keywords:
  - OpenHIM
  - API
  - Client
  - Create
description: Create a OpenHIM Client via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Create client

To create a new client record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the client record.


```curl
Method: POST
Endpoint: {openhim_url}:8080/clients
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

  Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit. You will also need to update the `clientPassword` variable to your desired password as well as to ensure you set the `passwordSalt` / `passwordHash` values in your `SampleData` payload

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
      apiEndpoint: '/clients',
      username: 'root@openhim.org',
      password: 'openhim-password',
      rejectUnauthorized: false
    }
    const clientPassword = "client-password"
    const clientPasswordDetails = await genClientPassword(clientPassword)

    const SampleData = 'SampleData'

    const headers = await genAuthHeaders(openhimOptions)

    const options = {
      method: 'POST',
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

  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the client object.

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
  ./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/clients -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status code will be `201` if successful.

</TabItem>
<TabItem value="sample">

  **Client Roles:** if the supplied values in the array do not yet exist, it will be created and added to the client, but if the supplied role already exist, it will just be assigned to the client.

  **Client password details:** To generate the the client password details (Salt/hash) you can follow the same steps as described within the [authentication section](../introduction/authentication)

  ```json
  {
    "roles": [
      "fhir"
    ],
    "clientID": "fhir-server",
    "name": "FHIR Server",
    "passwordAlgorithm": "sha512",
    "passwordSalt": "3e74a280c568f27241e48e938edf21bf",
    "passwordHash": "9a5158dc87a25da9d8822d48ed831a88bb4ba7fa636ddb6d6a725f73688546052cb7f2c355758e4839f9416e6cc0e37e1e3070f597af2836d39768a5ecc050db"
  }
  ```

</TabItem>
</Tabs>

