---
id: polling-trigger
title: Trigger a Polling Channel
sidebar_label: Trigger Polling
keywords:
  - OpenHIM
  - API
  - Channel
  - Polling
  - Trigger
description: Manually trigger a polling channel request
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Manually trigger a polling channel

The polling is configured in the same way as we do for normal channel configuration, however, we don't supply a `urlPattern` to match an incoming request on as the polling channel is triggered internally from the OpenHIM core based on the supplied cron pattern. 

To manually trigger a polling channel request you will need to make a TLS request to the OpenHIM API for the below method and endpoint.


```curl
Method: POST
Endpoint: {openhim_url}:8080/channels/:channelId/trigger
```

## Example

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

Replace the `openhimOptions` values with the correct implementation details

```javascript
// append below code to the "openhim-api.js" script containing the authentication methods. 
// This is described within the authentication section

(async () => {
  const openhimOptions = {
    apiURL: 'https://localhost:8080',
    apiEndpoint: '/channels/channelId/trigger',
    username: 'root@openhim.org',
    password: 'openhim-password',
    rejectUnauthorized: false
  }

  const headers = await genAuthHeaders(openhimOptions)
  
  const options = { 
    method: 'POST',
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

Execute the below command in your terminal to run the nodejs script

```bash
node openhim-api.js
```

</TabItem>
<TabItem value="bash">

Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the [authentication section](../introduction/authentication).

Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details

```curl
./openhim-api.sh root@openhim.org openhim-password -v -X POST https://localhost:8080/channels/channelId/trigger
```

</TabItem>
</Tabs>

The response status code will be `201` if successful.
