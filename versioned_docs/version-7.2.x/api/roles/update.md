---
id: update
title: Update an existing role
sidebar_label: Update
keywords:
  - OpenHIM
  - API
  - Role
  - Update
description: Update an OpenHIM Role via the API
---

## Update role

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To update an existing role record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the role record.


```curl
Method: PUT
Endpoint: {openhim_url}:8080/roles/:roleId
Payload: JSON object of the role record
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

  (async () => {
    const openhimOptions = {
      apiURL: 'https://localhost:8080',
      apiEndpoint: '/roles/roleId',
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

  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the [authentication section](../introduction/authentication).

  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the updated role object.

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/roles/roleId -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status code will be `200` if successful.
</TabItem>
<TabItem value="sample">

  with a json body containing any updates to channels and clients. As with the [create a new role](../roles/create) operation, channels and clients can be specified either by their `_id` or `name` for a channel and `clientID` for a client.

  Note that the channel and client arrays, if specified, must contain the complete list of items to apply to, i.e. roles will be removed if they exist on any channels and clients that are not contained in the respective arrays. This also means that if `channels` and `clients` are specified as empty arrays, the result will be the same as deleting the role. If the fields are not specified, then the existing setup will be left as is.

  The following example will change `Role1` by giving the clients _jembi_ and _client-service_ permission to access _channel1_. Any other channels will be removed, e.g. following from the [create a new role](../roles/create) example, access to _channel2_ will be removed:

  ```json
  {
    "name": "Role-name-updated",
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

  Roles can also be renamed by specifying the `name` field.

</TabItem>
</Tabs>
