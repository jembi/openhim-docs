---
id: read
title: Read Logs
sidebar_label: Read
keywords:
  - OpenHIM
  - API
  - Logs
  - Read
description: Read OpenHIM server logs via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Read logs

To read existing logs you will need to make a TLS request to the OpenHIM API for the below method and endpoint.

```curl
Method: GET
Endpoint: {openhim_url}:8080/logs?[filters]
```

By default the logs with level info and above for the last 5 minutes are returned. The logs will be returned as an ordered array. A maximum of 100 000 log messages are returned (hint: use pagination).

The following filters are available:

- `from` - an ISO8601 formatted date to query from. Defaults to 5 mins ago.
- `until` - an ISO8601 formatted date to query until. Defaults to now.
- `start` - a number n: the log message to start from, if specified the first `n` message are NOT returned. Useful along with limit for pagination. Defaults to 0.
- `limit` - a number n: the max number of log messages to return. Useful along with `start` for pagination. Defaults to 100 000.
- `level` - The log level to return. Possible values are `debug`, `info`, `warn` and `error`. All messages with a level equal to or of higher severity to the specified value will be returned. Defaults to `info`.

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
    apiEndpoint: '/logs',
    username: 'root@openhim.org',
    password: 'openhim-password',
    rejectUnauthorized: false
  }

  const headers = await genAuthHeaders(openhimOptions)
  
  const options = { method: 'GET',
    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,
    rejectUnauthorized: openhimOptions.rejectUnauthorized,
    headers: headers
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

Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details.

```curl
./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/logs
```

</TabItem>
</Tabs>

The response status code will be `200` if successful.
