---
id: update
title: Update Mediator
sidebar_label: Update
keywords:
  - OpenHIM
  - API
  - Mediator
  - Update
description: Update an OpenHIM mediator via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Update Mediator

To update a mediator, you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object of the mediator.

```curl
Method: POST
Endpoint: {openhim_url}:8080/mediators
Payload: JSON object of the mediator
```

**Note:** For a mediator to be updated the version number in the update object has to be greater than current one for that mediator. If the mediator does not exist a new one is created.

## Update Example

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

Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit.

```javascript
// append below code to the "openhim-api.js" script containing the authentication methods.
// This is described within the authentication section

(async () => {
  const openhimOptions = {
    apiURL: 'https://localhost:8080',
    apiEndpoint: '/mediators',
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

Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the mediator update object.

```curl
./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/mediators -d @SampleData.json -H "Content-Type:application/json"
```

</TabItem>
</Tabs>

The response status code will be `201` whether the update succeeds or not. To check the status of the update, fetch the updated mediator or check the console.

</TabItem>
<TabItem value="sample">

```json
 {
   "urn": "urn:uuid:EEA84E13-1C92-467C-B0BD-7C480462D1ED",
   "version": "1.0.1",
   "name": "Updated Mediator",
   "description": "An updated mediator for testing",
   "endpoints": [
      {
         "name": "Save Encounter",
         "host": "localhost",
         "port": "8005",
         "type": "http"
      }
   ],
   "defaultChannelConfig": [
      {
         "name": "Save Encounter 1",
         "urlPattern": "/encounters",
         "type": "http",
         "allow": [],
         "routes": [
            {
               "name": "Save Encounter 1",
               "host": "localhost",
               "port": "8005",
               "type": "http"
            }
         ]
      }
   ],
   "configDefs": [
     {
      "param": "param1",
      "type": "string"
     },
     {
      "param": "param2",
      "type": "string"
     }
   ]
 }
```

</TabItem>
</Tabs>

## Set Mediator configuration

To set a mediator's configuration, you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object of the mediator's configuration.

```curl
Method: PUT
Endpoint: {openhim_url}:8080/mediators/:urn/config
Payload: JSON object of the mediator's config
```

The response will have an http status code of `201` if successful, `404` if the mediator referenced by `urn` cannot be found and `400` if the config supplied cannot be validated against the configuration definition supplied in the mediator registration message.

This endpoint can only be called by an admin user.

## Setting Mediator's configuration Example

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

Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit.

```javascript
// append below code to the "openhim-api.js" script containing the authentication methods.
// This is described within the authentication section

(async () => {
  const openhimOptions = {
    apiURL: 'https://localhost:8080',
    apiEndpoint: '/mediators/:urn/config',
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

Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the mediator's config object.

```curl
./openhim-api.sh root@openhim.org openhim-password -v -X PUT "https://localhost:8080/mediators/:urn/config" -d @SampleData.json -H "Content-Type:application/json"
```

</TabItem>
</Tabs>

The response status code will be `200` if successful.

</TabItem>
<TabItem value="sample">

```json
{
  "param1": "Config Test parameter 1",
  "param2": "Config Test parameter 2"
}
```

</TabItem>
</Tabs>
