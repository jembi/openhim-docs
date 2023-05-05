---
id: read
title: Read Client/s
sidebar_label: Read
keywords:
  - OpenHIM
  - API
  - Client
  - Read
description: Read OpenHIM Clients via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To read existing client records you will need to make a TLS request to the OpenHIM API for the below method and endpoint.

## Read all clients

```curl
Method: GET
Endpoint: {openhim_url}:8080/clients
```

## Read a specific client

```curl
Method: GET
Endpoint: {openhim_url}:8080/clients/:clientId
```

## Read a specific client by domain

```curl
Method: GET
Endpoint: {openhim_url}:8080/clients/domain/:clientDomain
```

`:clientDomain` is the `domain` property of the client to fetch.

## Example

***Note:*** *In the examples below, we are using the token authentication type to authenticate requests*

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
    apiEndpoint: '/clients/clientId',
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
./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/clients/clientId
```

</TabItem>
</Tabs>

The response status code will be `200` if successful.
