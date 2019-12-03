---
id: read
title: Read Metrics
sidebar_label: Read
keywords:
  - OpenHIM
  - API
  - Metrics
  - Read
description: Read OpenHIM Metrics via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To read existing metrics, you will need to make a TLS request to the OpenHIM API for the below method and endpoint. The two query parameters `startDate` and `endDate` have to be supplied (datetime format).

## Read all metrics

```curl
Method: GET
Endpoint: {openhim_url}:8080/metrics?startDate=<START_DATE>&endDate=<END_DATE>
```

## Read metrics broken down by channel

```curl
Method: GET
Endpoint: {openhim_url}:8080/metrics/channels?startDate=<START_DATE>&endDate=<END_DATE>
```

## Read metrics for a specific channel

```curl
Method: GET
Endpoint: {openhim_url}:8080/metrics/channels/:channelId?startDate=<START_DATE>&endDate=<END_DATE>
```

## Read metrics in a specified timeSeries

```curl
Method: GET
Endpoint: {openhim_url}:8080/metrics/timeseries/:timeSeries?startDate=<START_DATE>&endDate=<END_DATE>
```

Time series values are one of 'minute', 'hour', 'day', 'month', 'year'.

## Read metrics broken down by channel in a specified timeSeries

```curl
Method: GET
Endpoint: {openhim_url}:8080/metrics/timeseries/:timeSeries/channels?startDate=<START_DATE>&endDate=<END_DATE>
```

## Read metrics for a specific channel in a specified timeSeries

```curl
Method: GET
Endpoint: {openhim_url}:8080/metrics/timeseries/:timeSeries/channels/:channelId?startDate=<START_DATE>&endDate=<END_DATE>
```

The metrics API always returns a JSON array with the metrics. If the channel does not exist the api responds with a status of `401`, and `200` on success.

## Example

Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API.

<Tabs
  defaultValue="nodejs"
  values={[
    { label: 'NodeJS', value: 'nodejs', },
    { label: 'Bash', value: 'bash', }
  ]
}>

<TabItem value="nodejs">

Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the [authentication section](../introduction/authentication).

Replace the `openhimOptions` values with the correct implementation details

```javascript
// append below code to the "openhim-api.js" script containing the authentication methods.
// This is described within the authentication section

(async () => {
  const openhimOptions = {
    apiURL: 'https://localhost:8080',
    apiEndpoint: '/metrics',
    username: 'root@openhim.org',
    password: 'openhim-password',
    rejectUnauthorized: false
  }

  const headers = await genAuthHeaders(openhimOptions)
  
  const options = { method: 'GET',
    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,
    rejectUnauthorized: openhimOptions.rejectUnauthorized,
    headers: headers,
    qs: {
      startDate: new Date(Date.now() - 3.154e+10),
      endDate: new Date()
    }
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

</TabItem>
<TabItem value="bash">

Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the [authentication section](../introduction/authentication).

Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details. Make sure to pass valid dates for the `startDate` and `endDate`.

```curl
./openhim-api.sh root@openhim.org password -v "https://localhost:8080/metrics?startDate
=<START_DATE>&endDate=<END_DATE>"
```

</TabItem>
</Tabs>

The response status code will be `200` if successful.
