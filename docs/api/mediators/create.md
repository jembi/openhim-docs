---
id: create
title: Create Mediator
sidebar_label: Create
keywords:
  - OpenHIM
  - API
  - Mediator
  - Create
description: Add an OpenHIM mediator via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Add Mediator

To add a mediator, you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object of the mediator.

```curl
Method: POST
Endpoint: {openhim_url}:8080/mediators
Payload: JSON object of the mediator
```

## Adding Mediator Example

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

Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the mediator object.

```curl
./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/mediators -d @SampleData.json -H "Content-Type:application/json"
```

</TabItem>
</Tabs>

The response status code will be `201` if successful.

</TabItem>
<TabItem value="sample">

```json
{
  "urn": "urn:uuid:EEA84E13-1C92-467C-B0BD-7C480462D1ED",
  "version": "1.0.0",
  "name": "Test Mediator",
  "description": "A mediator for testing",
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
    },
    {
      "name": "Save Encounter 2",
      "urlPattern": "/encounters2",
      "type": "http",
      "allow": [],
      "routes": [
        {
          "name": "Save Encounter 2",
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

## Send heartbeat to the OpenHIM

To send a heartbeat to the OpenHIM, you need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object containing the mediator's uptime and config (an optional boolean which is used to determine whether the OpenHIM should return the latest config).

```curl
Method: POST
Endpoint: {openhim_url}:8080/mediators/:urn/heartbeat
Payload: JSON object containing mediator's uptime and config
```

The `urn` parameter is the unique resource name of the mediator. The heartbeat endpoint can only be accessed by an admin user.

The response will always have a `200` status if successful or a `404` if the mediator specified by the urn cannot be found. The response body will contain the latest mediator config that has been set on the OpenHIM-core server only if the config has changed since the last time a heartbeat was received from this mediator. Otherwise, the response body is left empty.

## Sending Heartbeat Example

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
    apiEndpoint: '/mediators/:urn/heartbeat',
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

Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the mediator's uptime and config. Make sure to pass the correct `urn`.

```curl
./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/mediators/:urn/heartbeat -d @SampleData.json -H "Content-Type:application/json"
```

</TabItem>
</Tabs>

The response status code will be `200` if successful.

</TabItem>
<TabItem value="sample">

```js
{
  "uptime": 50.25, // in seconds
  "config": true // (Optional) a flag to force the OpenHIM-core to send back the latest config
}
```

</TabItem>
</Tabs>

## Install mediator channels

To install channels that are listed in the mediator's config ( `defaultChannelConfig` property ), you need to make a TLS request to the below method and endpoint and supply an array with the names of the channels to install.

```curl
Method: POST
Endpoint: {openhim_url}:8080/mediators/:urn/channels
Payload: An JSON array containing the channel names
```

**Note:** If the JSON array  is not supplied all the channels in the `defaultChannelConfig` will be installed.

## Install Channels Example

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
    apiEndpoint: '/mediators/:urn/channels',
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

Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the JSON array containing the channel names.

```curl
./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/mediators/:urn/channels -d @SampleData.json -H "Content-Type:application/json"
```

</TabItem>
</Tabs>

The response status code will be `201` if the channels were successfully created and `400` if you provide a channel name that doesn't exist.

</TabItem>
<TabItem value="sample">

Ensure that the channels name supplied in the JSON array match the names of the channels supplied in the `defaultChannelConfig`, when the mediator was created.

```json
  ["Save Encounter 1"]
```

</TabItem>
</Tabs>
