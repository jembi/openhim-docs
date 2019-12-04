---
id: create
title: Create Role
sidebar_label: Create
keywords:
  - OpenHIM
  - API
  - Role
  - Create
description: Create an OpenHIM Role via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Create role

To create a new role record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the role record.


```curl
Method: POST
Endpoint: {openhim_url}:8080/roles
Payload: JSON object of the role record
```

With a json body containing the role name and channels and clients to apply to. At least one channel or client has to be specified. Channels and clients can be specified either by their `_id` or `name` for a channel and `clientID` for a client.

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

  Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit

  ```javascript
  // append below code to the "openhim-api.js" script containing the authentication methods. 
  // This is described within the authentication section

  (async () => {
    const openhimOptions = {
      apiURL: 'https://localhost:8080',
      apiEndpoint: '/roles',
      username: 'root@openhim.org',
      password: 'openhim-password',
      rejectUnauthorized: false
    }
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

  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the role object.

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/roles -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status code will be `201` if successful.

</TabItem>
<TabItem value="sample">

  An example role that will give a client named _jembi_ permission to access _channel1_ and _channel2_.

  ```json
  {
    "name": "Role1",
    "channels": [
      {
        "name": "channel1"
      },
      {
        "name": "channel2"
      }
    ],
    "clients": [
      {
        "clientID": "jembi"
      }
    ]
  }
  ```  

</TabItem>
</Tabs>
