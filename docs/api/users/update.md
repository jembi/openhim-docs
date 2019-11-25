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

  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the [authentication section](../introduction/authentication.md). 

  Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit


  ```javascript
  // append below code to the "openhim-api.js" script containing the authentication methods. 
  // This is described within the authentication section

  (async () => {
    const openhimOptions = {
      apiURL: 'https://localhost:8080',
      apiEndpoint: '/users/userEmail',
      username: 'root@openhim.org',
      password: 'openhim-password',
      rejectUnauthorized: false
    }
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

  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the [authentication section](../introduction/authentication.md). 

  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the updated user object.

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
