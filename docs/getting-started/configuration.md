---
id: configuration
title: Configuration
sidebar_label: Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Once you have successfully installed the OpenHIM core and console and you are able to successfully access the console at [http://localhost:9000](http://localhost:9000) we can proceed to create a basic channel and client so that we can send a test request through the OpenHIM core successfully

A **Client** is usually some system that you want to able to send request to the OpenHIM. Setting up a **client** allows the OpenHIM to authenticate requests. A **Channel** defines a path that a request will take through the OpenHIM. It describes one more **routes** for the request to be forwarded to, which **clients** are allowed to use this **channel**, which requests are to be directed to this **channel** and many more options that allow you to controls what happens for a particular request.

To manage **clients** and **channels** you will need to log into the OpenHIM console and then you may follow the steps below.

**Note** - Only an Admin user has the permission to Add/Edit/Delete a **Client** or **Channel**

## Adding Clients

Follow the below steps to successfully create/update a **Client**

- Navigate to the **Clients** menu option found in the left sidebar.
- On the **Clients** page you will be presented with a list of all the created **Clients**
- Click on the blue "**+ Client**" button to open a popup modal box where you will supply the **Client** details **OR** click on one of the existing **Clients** to open up the popup modal with the **Clients'** saved details.
- Supply all the required fields (marked with a \*) and click the blue "**Save changes**" button when completed.

There are many fields that you may supply, to find a detailed explanation of all the available fields, please refer to the [Clients documentation](/configuration/clients.md) page

## Adding Channels

Follow the below steps to successfully create/update a **Channel**

- Navigate to the **Channels** menu option found in the left sidebar.
- On the **Channels** page you will be presented with a list of all the created **Channels**
- Click on the blue "**+ Channel**" button to open a popup modal box where you will supply the **Channel** details **OR** click on one of the existing **Channels** to open up the popup modal with the **Channels'** saved details.
- Supply all the required fields and click the blue "**Save changes**" button when completed.

The two _most_ important fields to supply are the **URL Pattern** field and the **Allowed roles and clients** field. The **URL Pattern** field describes which incoming requests should be send down this **channel**. It does this by looking at the URL of the incoming request and testing if it matches the RegEx that you supply in this field. Note, only the first matched **channel** that is found receives the request for processing. The **Allowed roles and clients** field identifies which **clients** are allowed to send requests to this **channel**. If a request matches a **channel** but the **client** system is not specified in this field or a **role** containing that the **client** belongs to is not specified in this field then the request will be denied access to the **channel**.

There are many fields that you may supply, to find a detailed explanation of all the available fields, please refer to the [Channels documentation](/configuration/channels.md) page

## Example

For this example, we will be creating a very basic channel that requires client authentication details to verify the request is authorized for the specific channel being requested.

<Tabs
  defaultValue="manual"
  values={[
    { label: 'Manual', value: 'manual', },
    { label: 'Import Config', value: 'import', }
  ]
}>

<TabItem value="manual">

Lets proceed by supplying the below details within our relevant sections to complete this configuration of our channel and client.

**Client:**

- clientID: `HL7`
- client Name: `Health Level 7`
- Add new Role: `HL7`
- Basic Auth Password: `hl7password`


**Channel:**

- Basic Info Tab: 
  - name: `HL7 Patient example Channel`
- Request Matching Tab: 
  - urlPatten: `/hl7-patient-example`
  - Channel Authentication: `Private`
  - Client to access this channel: `HL7`
- Routes Tab: Add new route: 
  - Name: `HL7 patient example Route`
  - Route Secured: `yes`
  - Host: `www.hl7.org`
  - Port: `443`
  - Route Path: `/fhir/patient-example.json`

</TabItem>
<TabItem value="import">

Import the below JSON object into the OpenHIM as described within the [Import/Export](/api/import-export/create.md) section

```json
{
  "Clients": [
    {
      "roles": [
        "HL7"
      ],
      "clientID": "HL7",
      "name": "Health Level 7",
      "passwordAlgorithm": "sha512",
      "passwordSalt": "cbdd2b7cc46bc713b439b352c8c09b49",
      "passwordHash": "3cbd8a269cca1b42afa2b19fc9cd1b844229fadd0ff1ac1b66ed614f30e2056ccf47f0c92b4723a77a87aeb9688c5af76f5b3f0e1b2dbc88988a36320f326a23"
    }
  ],
  "Channels": [
    {
      "methods": [
        "GET",
        "POST",
        "DELETE",
        "PUT",
        "OPTIONS",
        "HEAD",
        "TRACE",
        "CONNECT",
        "PATCH"
      ],
      "type": "http",
      "allow": [
        "HL7"
      ],
      "whitelist": [],
      "authType": "private",
      "matchContentTypes": [],
      "properties": [],
      "txViewAcl": [],
      "txViewFullAcl": [],
      "txRerunAcl": [],
      "status": "enabled",
      "rewriteUrls": false,
      "addAutoRewriteRules": true,
      "autoRetryEnabled": false,
      "autoRetryPeriodMinutes": 60,
      "routes": [
        {
          "type": "http",
          "status": "enabled",
          "forwardAuthHeader": false,
          "name": "HL7 patient example Route",
          "secured": true,
          "host": "www.hl7.org",
          "port": 443,
          "path": "/fhir/patient-example.json",
          "pathTransform": "",
          "primary": true,
          "username": "",
          "password": ""
        }
      ],
      "requestBody": true,
      "responseBody": true,
      "rewriteUrlsConfig": [],
      "name": "HL7 Patient example Channel",
      "urlPattern": "^/hl7-patient-example$",
      "matchContentRegex": null,
      "matchContentXpath": null,
      "matchContentValue": null,
      "matchContentJson": null,
      "pollingSchedule": null,
      "tcpHost": null,
      "tcpPort": null,
      "updatedBy": {
        "id": "5dee04aadf48ea0011e3a1fa",
        "name": "Super User"
      },
      "alerts": []
    }
  ]
}
```

</TabItem>
</Tabs>

Once you have configured your client and channel as described in the above example, you should now be able to successfully make a authenticated request through the OpenHIM to fetch the example HL7 FHIR Patient object.

Execute the below command in your terminal to see the output of the request. 

```bash
curl "http://localhost:5001/hl7-patient-example" -H "Authorization: Basic $(echo -n HL7:hl7password | base64)"
```

You can also use any alternative 3rd party client to send this request through the OpenHIM. An example of a 3rd party client is [Postman](https://www.getpostman.com/)
