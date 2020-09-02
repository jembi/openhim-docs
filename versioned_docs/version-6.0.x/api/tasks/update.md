---
id: update
title: Update an existing task
sidebar_label: Update
keywords:
  - OpenHIM
  - API
  - Task
  - Update
description: Update an OpenHIM Task via the API
---

## Update task

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To update an existing task record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the task record.

```curl
Method: PUT
Endpoint: {openhim_url}:8080/task/:taskId
Payload: JSON object of the task record
```

Tasks can be paused, resumed or cancelled by sending through an update with status equal to `Paused`, `Queued` or `Cancelled` respectively.

## Example

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
      apiEndpoint: '/tasks/taskId',
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

  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the updated task object.

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/tasks/taskId -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status code will be `200` if successful.
</TabItem>
<TabItem value="sample">

  ```json
  {
    "tids": [
      "5bb777777bbb66cc5d4444ee",
      "5ceec0bb3ca344f9a30df633",
      "5kl732d1cbf94ba88b8f0bc6",
      "5af744d1cbf94ba88b8f0bc8",
      "5be732d1cbf94ba88b8f0bc7"
    ],
    "batchSize": 2,
    "paused": true
  }
  ```

</TabItem>
</Tabs>
