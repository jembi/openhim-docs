---
id: authentication
title: Authentication
sidebar_label: Authentication
keywords:
  - auth
  - config
  - authentication
  - token
  - jwt
  - tls
description: OpenHIM authentication configuration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The OpenHIM offers a few authentication mechanisms to verify client interactions with the OpenHIM Core. These mechanisms are JWT Tokens, Custom Tokens, Mutual TLS and Basic Auth.
These Authentication mechanisms can be configured via JSON config files (see [overview for more](./overview)) or environment variables. The configured auth mechanisms will be displayed in the `Client` details section of the OpenHIM Console - screenshot below.

<img alt="OpenHIM Console Client Auth" src={useBaseUrl('img/client_auth.png')}/>

## JSON Web Token(JWT)

Useful Links:

- [JWT Docs](https://jwt.io/introduction)

See below for an example of a JWT token auth config.

```json
"authentication": {
  "enableJWTAuthentication": true,
  "jwtSecretOrPrivateKey": "randomUUID",
  "jwtAlgorithms": ["HS256", "HS384", "HS512"],
  "jwtAudience": ["UUID_representing_downstream_service"],
  "jwtIssuer": "UUID_representing_issuer"
}
```

> JWT Auth is **disabled** by default

Tokens can be created in the [JWT Sandbox](https://jwt.io/) for testing. The details from the JSON above are used in the screenshot below:

<img alt="JWT Example" src={useBaseUrl('img/jwt_example.png')}/>

> Remember to include your `client_id` in the `sub` (subject) field of the JWT payload

The encoded token generated would then be used in the `Authorization` request header for requests to the OpenHIM Core:

```sh
curl --location --request POST 'https://localhost:5000/test' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVVUlEX3JlcHJlc2VudGluZ19kb3duc3RyZWFtX3NlcnZpY2UiLCJpc3MiOiJVVUlEX3JlcHJlc2VudGluZ19pc3N1ZXIiLCJzdWIiOiJ5b3VyX29wZW5oaW1fY2xpZW50In0.I_2PLl7gmi4D26EZ_OuFOVM3fI4sJxjnZGmKxdSdxKA' \
--header 'Content-Type: application/json' \
--data-raw '{ "test": "test" }'
```

## Custom Token

The Custom Token is a string value associated with a specific client. This value is sent in the request header to verify the client's identity. To enable Custom Tokens, the following config line is required:

```json
"authentication": {
  "enableCustomTokenAuthentication": true
}
```

> Custom Token Auth is **disabled** by default

A user will have to add the token in the `Clients` section on the OpenHIM Console. This token will then be added to the authorizaton header of a request as follows:

```sh
curl --location --request POST 'https://localhost:5000/test' \
--header 'Authorization: Custom MY_UNIQUE_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{ "test": "test" }'
```

## Mutual TLS

To enable Mutual TLS, the following config line is required:

```json
"authentication": {
  "enableMutualTLSAuthentication": true,
}
```

> Mutual TLS Auth is **enabled** by default

To make use of this Auth mechanism for a Client, you will first need to add your certificate to the OpenHIM in the `Certificates` section. You could also generate your own trusted client certs from the OpenHIM Console. See the [certificates](./certificates) section for details. You may then choose one of the available client certificates from the `Client Certificate` drop down. To send through a test request via Postman, see [this guide](https://learning.postman.com/docs/sending-requests/certificates/).

> When sending secure requests to the OpenHIM Core remember that the **default HTTPS port** is `5000`

## Basic Auth

For this authentication mechanism, the username and password are used. The OpenHIM Core JSON config must contain the following line in the `authentication` section.

```json
"authentication": {
  "enableBasicAuthentication": true,
}
```

> Basic Auth is **enabled** by default

From the OpenHIM Console, Clients can be added and their Basic Auth details managed from the **Clients** section.

The request should look something like this:

```sh
curl --location --request POST 'https://localhost:5000/test' \
--header 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=' \
--header 'Content-Type: application/json' \
--data-raw '{ "test": "test" }'
```
