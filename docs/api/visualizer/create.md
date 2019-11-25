---
id: create
title: Create Visualizer
sidebar_label: Create
keywords:
  - OpenHIM
  - API
  - Visualizer
  - Create
description: Create an OpenHIM Visualizer via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Create visualizer

To create a new visualizer record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the visualizer record.


```curl
Method: POST
Endpoint: {openhim_url}:8080/visualizers
Payload: JSON object of the visualizer record
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

  Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit

  ```javascript
  // append below code to the "openhim-api.js" script containing the authentication methods. 
  // This is described within the authentication section

  (async () => {
    const openhimOptions = {
      apiURL: 'https://localhost:8080',
      apiEndpoint: '/visualizers',
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

  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the visualizer object.

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/visualizers -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status code will be `201` if successful.

</TabItem>
<TabItem value="sample">

  ```json
  {
    "name": "Visualizer1",
    "time": {
      "updatePeriod": 200
    },
    "size": {
      "padding": 20,
      "height": 400,
      "width": 1000,
      "responsive": true
    },
    "color": {
      "text": "#4a4254",
      "error": "#a84b5c",
      "active": "#10e057",
      "inactive": "#c8cacf"
    },
    "mediators": [
      {
        "mediator": "urn:mediator:fhir-proxy",
        "name": "OpenHIM Mediator FHIR Proxy",
        "display": "OpenHIM Mediator FHIR Proxy",
        "_id": "57a4a09078ae562b26d5b2b2"
      },
      {
        "mediator": "urn:mediator:shell-script",
        "name": "OpenHIM Shell Script Mediator",
        "display": "OpenHIM Shell Script Mediator",
        "_id": "57a4a09078ae562b26d5b2b1"
      }
    ],
    "channels": [
      {
        "eventType": "channel",
        "eventName": "FHIR Proxy",
        "display": "FHIR Proxy",
        "_id": "57a4a09078ae562b26d5b2b4"
      },
      {
        "eventType": "channel",
        "eventName": "Echo",
        "display": "Echo",
        "_id": "57a4a09078ae562b26d5b2b3"
      }
    ],
    "components": [
      {
        "eventType": "primary",
        "eventName": "OpenHIM Mediator FHIR Proxy Route",
        "display": "FHIR Server",
        "_id": "57a4a09078ae562b26d5b2b6"
      },
      {
        "eventType": "primary",
        "eventName": "echo",
        "display": "Echo",
        "_id": "57a4a09078ae562b26d5b2b5"
      }
    ]
  }
  ```  

</TabItem>
</Tabs>
