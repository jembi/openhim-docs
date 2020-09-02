---
id: read
title: Read Server Uptime
sidebar_label: Read
keywords:
  - OpenHIM
  - API
  - Server
  - Uptime
  - Heartbeat
description: Read the OpenHIM server's uptime in seconds
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To read the OpenHIM uptime you will need to make a TLS request to the OpenHIM API for the below method and endpoint.

```curl
Method: GET
Endpoint: {openhim_url}:8080/heartbeat
```

## Example

<Tabs
  defaultValue="nodejs"
  values={[
    { label: 'NodeJS', value: 'nodejs', },
    { label: 'Bash', value: 'bash', }
  ]
}>

<TabItem value="nodejs">

Copy the below code into a file titled openhim-api.js

```javascript
(async () => {
  const openhimOptions = {
    apiURL: 'https://localhost:8080',
    apiEndpoint: '/heartbeat',
    rejectUnauthorized: false
  }
  
  const options = { method: 'GET',
    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,
    rejectUnauthorized: openhimOptions.rejectUnauthorized
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

Execute the below command in your terminal where the file is located with the required arguments.

```curl
  curl -k https://localhost:8080/heartbeat
```

</TabItem>
</Tabs>

The response status code will be `200` if successful.
