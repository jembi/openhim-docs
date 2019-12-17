---
id: create
title: Create Transaction
sidebar_label: Create
keywords:
  - OpenHIM
  - API
  - Transaction
  - Routing
  - Create
description: Create an OpenHIM Transaction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Create Transaction via the server

The OpenHIM routes through the ports `5000 (https)`, `5001 (http)` and `7786 tcp`. Any request that passes through the OpenHIM is a transaction. For the routing to happen, there has to be a channel that has the route(s) to the upstream server(s). The request has to have a path that matches the channel's `urlPattern`.

To route using the OpenHIM, create a channel on the OpenHIM console or through the [API](../channels/create). If the channel is configured to be a private channel, a client will need to be [created](../clients/create). The client and the channel should be configured such that they are linked. This is done by ensuring that one of the `roles` created in client matches one of the `roles` in channel's `allow` property. The client id and password will be used for authentication. The transaction is created irregardless of whether the upstream server (mediator) being routed to exists or not.

## Example routing

Create the channel.

<Tabs
  defaultValue="nodejs"
  values={[
    { label: 'NodeJS', value: 'nodejs' },
    { label: 'Bash', value: 'bash' }
  ]
}>
<TabItem value="nodejs">

Ensure that request's `<PATH>` matches the channel's `urlPattern`. If the channel is private the client's Id and password will have to be passed in for the username and password.

Copy the below code into a file titled `router.js` and supply the correct implementation details.

```javascript
const request = require('request');

(async () => {
  const options = {
    method: 'GET',
    url: `https://localhost:5000/<PATH>`,
    rejectUnauthorized: false,
    auth: {
      user: 'root@openhim.org',
      pass: 'openhim-password'
    },
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

Execute the below commands in your terminal to run the nodejs script

```node
npm install request && node router.js
```

</TabItem>
<TabItem value="bash">

Copy the below code and replace the `<PATH>`, `<CLIENT_ID>` and `<CLIENT_PASSWORD>` values with correct implementation details. If the channel is public the username and password can be passed in for the `<CLIENT_ID>` and `<CLIENT_PASSWORD>` respectively.

```curl
curl -k -u <CLIENT_ID>:<CLIENT_PASSWORD> https://localhost:5000/<PATH>
```

</TabItem>
</Tabs>

The response body will be returned. If the upstream server (server being routed to) is down the response status will be `500` and the response body will be `An internal server error occurred`.
