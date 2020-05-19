---
id: authentication-configuration
title: Authentication Configuration
sidebar_label: Authentication Configuration
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
    "jwtSecretOrPublicKey": "randomUUID",
    "jwtAlgorithms": ["HS256", "HS384", "HS512"],
    "jwtAudience": ["UUID_representing_downstream_service"],
    "jwtIssuer": "UUID_representing_issuer"
  }
```

## Custom Token Auth
