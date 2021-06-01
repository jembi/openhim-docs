---
id: read
title: Read Transaction/s
sidebar_label: Read
keywords:
  - OpenHIM
  - API
  - Transactions
  - Read
description: Read OpenHIM Transactions via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To read existing transaction records you will need to make a TLS request to the OpenHIM API for the below method and endpoint.

## Read all transactions

```curl
Method: GET
Endpoint: {openhim_url}:8080/transactions?[filters]
```

The following query parameters are supported:

- `filterLimit`: The max number of transactions to return
- `filterPage`: The page to return (used in conjunction with `filterLimit`)
- `filterRepresentation`: Determines how much information for a transaction to return; options are
  - `simple`: minimal transaction information
  - `simpledetails`: minimal transaction information, but with more fields than simple
  - `bulkrerun`: minimal transaction information required in order to determine rerun status
  - `full`: Full transaction information
  - `fulltruncate`: The same as full except that large transaction bodies will be truncated
- `channelID`: Only return transactions that are linked to the specified channel
- `filters`: Advanced filters specified as an object. Transaction fields can be specified based on the [transaction schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/transactions.js#L40-L56). For example, in order to filter by response status 200 and a property called `prop` with a value `val`, the following query could be used: `/transactions?filterLimit=100&filterPage=0&filters=%7B%22response.status%22:%22200%22,%22properties%22:%7B%22prop%22:%22val%22%7D%7D`

### Read client's transactions

```curl
Method: GET
Endpoint: {openhim_url}:8080/transactions/clients/:clientId
```

## Read a specific transaction

```curl
Method: GET
Endpoint: {openhim_url}:8080/transactions/:transactionId
```

## Example Fetch transactions

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
    apiEndpoint: '/transactions',
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
      filterLimit: 5,
      filterPage: 0,
      filterRepresentation: 'full'
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

Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details.

```curl
./openhim-api.sh root@openhim.org openhim-password -v "https://localhost:8080/transactions?filterLimit=5&filterPage=0&filterRepresentation=full"
```

</TabItem>
</Tabs>

The response status code will be `200` if successful.
