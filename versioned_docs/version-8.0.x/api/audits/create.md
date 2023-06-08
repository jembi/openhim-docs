---
id: create
title: Create Audit
sidebar_label: Create
keywords:
  - OpenHIM
  - API
  - Audit
  - Create
description: Create an OpenHIM Audit via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Create audit

To create a new audit record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the audit record.

```curl
Method: POST
Endpoint: {openhim_url}:8080/audits
Payload: JSON object of the audit record
```

## Example

***Note:*** *In the examples below, we are using the token authentication type to authenticate requests*

<Tabs
  defaultValue="lang"
  values={[
    { label: 'Languages', value: 'lang' },
    { label: 'Sample Data', value: 'sample' }
  ]}
>
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
      apiEndpoint: '/audits',
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

  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the audit object.

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/audits -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status code will be `201` if successful.

</TabItem>
<TabItem value="sample">

  ```js
  {
    "rawMessage": "This will be the raw ATNA message that gets received to be used as a backup reference",
    "eventIdentification": {
      "eventDateTime": "2019-12-12T15:38:25.282+02:00",
      "eventOutcomeIndicator": "0",
      "eventActionCode": "R",
      "eventID": {
        "code": "222",
        "displayName": "Read",
        "codeSystemName": "DCM"
      },
      "eventTypeCode": {
        "code": "ITI-9",
        "displayName": "PIX Read",
        "codeSystemName": "IHE Transactions"
      }
    },
    "activeParticipant": [
      {
        "userID": "pix|pix",
        "alternativeUserID": "2100",
        "userIsRequestor": "false",
        "networkAccessPointID": "localhost",
        "networkAccessPointTypeCode": "1",
        "roleIDCode": {
          "code": "110152",
          "displayName": "Destination",
          "codeSystemName": "DCM"
        }
      }, {
        "userID": "pix|pix",
        "alternativeUserID": "2100",
        "userIsRequestor": "false",
        "networkAccessPointID": "localhost",
        "networkAccessPointTypeCode": "1",
        "roleIDCode": {
          "code": "110152",
          "displayName": "Destination",
          "codeSystemName": "DCM"
        }
      }
    ],
    "auditSourceIdentification": {
      "auditSourceID": "openhim"
    },
    "participantObjectIdentification": [
      {
        "participantObjectID": "975cac30-68e5-11e4-bf2a-04012ce65b02^^^ECID&amp;ECID&amp;ISO",
        "participantObjectTypeCode": "1",
        "participantObjectTypeCodeRole": "1",
        "participantObjectIDTypeCode": {
          "code": "2",
          "displayName": "PatientNumber",
          "codeSystemName": "RFC-3881"
        }
      }, {
        "participantObjectID": "dca6c09e-cc92-4bc5-8741-47bd938fa405",
        "participantObjectTypeCode": "2",
        "participantObjectTypeCodeRole": "24",
        "participantObjectIDTypeCode": {
          "code": "ITI-9",
          "displayName": "PIX Query",
          "codeSystemName": "IHE Transactions"
        },
        "participantObjectQuery": "TVNIfF5+XCZ8b3BlbmhpbXxvcGVuaGltLW1lZGlhdG9yLW9oaWUteGRzfHBpeHxwaXh8MjAxNTAyMjAxNTM4MjUrMDIwMHx8UUJQXlEyM15RQlBfUTIxfDEwMDQxYWQ5LTkyNDAtNDEyNS04ZDMwLWZiYzczNGEwOTMwMXxQfDIuNQ1RUER8SUhFIFBJWCBRdWVyeXw1OTRhNDVkYS0zOTY5LTQzOTAtODE2Ni01MjhkZDFmNWU0ZTF8NzZjYzc2NWE0NDJmNDEwXl5eJjEuMy42LjEuNC4xLjIxMzY3LjIwMDUuMy43JklTT15QSXxeXl5FQ0lEJkVDSUQmSVNPXlBJDVJDUHxJDQ==",
        "participantObjectDetail": {
          "type": "MSH-10",
          "value": "MTAwNDFhZDktOTI0MC00MTI1LThkMzAtZmJjNzM0YTA5MzAx"
        }
      }
    ]
  }
  ```

</TabItem>
</Tabs>
