---
id: update
title: Update Channel
sidebar_label: Update
keywords:
  - OpenHIM
  - API
  - Channel
  - Update
description: Update an OpenHIM Channel via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To update an existing channel record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the channel record.


```curl
Method: PUT
Endpoint: {openhim_url}:8080/channels/:channelId
Payload: JSON object of the channel record
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
      apiEndpoint: '/channels/channelId',
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

  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the updated channel object.

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/channels/channelId -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status code will be `200` if successful.
</TabItem>
<TabItem value="sample">

  ```json
  {
    "_id": "5dd7a1b3b9c6ba497227e88b",
    "type": "http",
    "authType": "public",
    "status": "enabled",
    "routes": [
      {
        "name": "FHIR Server",
        "secured": false,
        "host": "localhost",
        "port": "3447",
        "path": "",
        "pathTransform": "",
        "primary": true,
        "username": "",
        "password": "",
        "type": "http",
        "status": "enabled",
        "forwardAuthHeader": false
      }
    ],
    "requestBody": true,
    "responseBody": true,
    "rewriteUrlsConfig": [],
    "rewriteUrls": false,
    "addAutoRewriteRules": true,
    "name": "FHIR Server",
    "urlPattern": "^/fhir/.*$",
    "methods": [
      "GET",
      "POST",
      "DELETE",
      "PUT",
      "OPTIONS",
      "HEAD",
      "TRACE",
      "CONNECT",
      "PATCH"
    ],
    "matchContentRegex": null,
    "matchContentXpath": null,
    "matchContentValue": null,
    "matchContentJson": null,
    "pollingSchedule": null,
    "tcpHost": null,
    "tcpPort": null
  }
  ```

</TabItem>
</Tabs>
