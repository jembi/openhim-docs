---
id: create
title: Create metadata
sidebar_label: Create/Update
keywords:
  - OpenHIM
  - API
  - Metadata
  - Export
  - Create
  - Update
description: Create or update OpenHIM's metadata via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Create/Update metadata

To create or update a metadata record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the metadata record.

```curl
Method: POST
Endpoint: {openhim_url}:8080/metadata
Payload: JSON object of the metadata record
```

### Example

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
      apiEndpoint: '/metadata',
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

  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the metadata object.

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/metadata -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status code will be `201` if successful.

</TabItem>
<TabItem value="sample">

  ```json
{
  "Channels": [{
    "name": "TestChannel1",
    "urlPattern": "test/sample",
    "allow": ["PoC", "Test1", "Test2"],
    "routes": [{ "name": "test route", "host": "localhost", "port": 9876, "primary": true }],
    "txViewAcl": "group1",
    "updatedBy": {
      "id": "12344444444",
      "name": "Test"
    }
  }],
  "Mediators": [{
    "urn": "urn:uuid:EEA84E13-1C92-467C-B0BD-7C480462D1ED",
    "version": "1.0.0",
    "name": "Save Encounter Mediator",
    "description": "A mediator for testing",
    "endpoints": [{ "name": "Save Encounter", "host": "localhost", "port": "8005", "type": "http" }],
    "defaultChannelConfig": [{
      "name": "Save Encounter 1",
      "urlPattern": "/encounters",
      "type": "http",
      "allow": [],
      "routes": [{ "name": "Save Encounter 1", "host": "localhost", "port": "8005", "type": "http" }]
    }]
  }],
  "ContactGroups": [{
    "group": "Group 1",
    "users": [
      { "user": "User 1", "method": "sms", "maxAlerts": "no max" },
      { "user": "User 2", "method": "email", "maxAlerts": "1 per hour"}
    ]
  }]
}
  ```

</TabItem>
</Tabs>

## Validate Metadata

To validate the metadata, you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the metadata record

```curl
Method: POST
Endpoint: {openhim_url}:8080/metadata/validate
Payload: JSON object of the metadata record
```

### Example

<Tabs
  defaultValue="lang"
  values={[
    { label: 'Languages', value: 'lang' }
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

Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit. The sample data in the example above can be used here.

```javascript
// append below code to the "openhim-api.js" script containing the authentication methods.
// This is described within the authentication section

(async () => {
  const openhimOptions = {
    apiURL: 'https://localhost:8080',
    apiEndpoint: '/metadata/validate',
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

Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the metadata object. The sample data in the example above can be used here.

```curl
./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/metadata/validate -d @SampleData.json -H "Content-Type:application/json"
```

</TabItem>
</Tabs>

The response status code will be `201` if successful.
</TabItem>
</Tabs>
