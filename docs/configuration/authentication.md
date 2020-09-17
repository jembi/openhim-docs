---
id: authentication
title: Authentication
sidebar_label: Authentication
keywords:
  - openhim
  - auth
  - config
  - authentication
  - token
  - jwt
description: OpenHIM authentication configuration
---

The OpenHIM offers a few authentication mechanisms namely, Basic, JWT Token, and Custom Token auth.
These Authentication mechanisms can be configured via JSON config files (see [overview for more](./overview)) or environment variables.

## Basic Auth

For this authentication mechanism a user's email and password are used. The OpenHim core will have to be configured to allow this type of authentication as below

```json
  "authentication": {
    "enableMutualTLSAuthentication": true,
    "enableBasicAuthentication": true,
  }
```

## JWT Token

Useful Links:

- [JWT Docs](https://jwt.io/)

See below for an example of a JWT token auth config.

```json
  "authentication": {
    "enableMutualTLSAuthentication": true,
    "enableBasicAuthentication": false,
    "enableCustomTokenAuthentication": false,
    "enableJWTAuthentication": true,
    "jwtSecretOrPrivateKey": "randomUUID",
    "jwtAlgorithms": ["HS256", "HS384", "HS512"],
    "jwtAudience": ["UUID_representing_downstream_service"],
    "jwtIssuer": "UUID_representing_issuer"
  }
```

## Custom Token Auth

A custom token can be used for authentication. A user will have to generate the token and add it to a channel on the OpenHim console. The OpenHim core will have to be configured to enable this authentication mechanism as below.

```json
  "authentication": {
    "enableMutualTLSAuthentication": true,
    "enableBasicAuthentication": false,
    "enableCustomTokenAuthentication": true
  }
```

This token will be added to the authorizaton header of a request as follows `Custom <TOKEN>`
