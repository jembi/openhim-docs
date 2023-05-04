---
id: overview
title: Users overview
sidebar_label: Overview
keywords:
  - OpenHIM
  - API
  - User
  - Overview
description: An overview of the OpenHIM Users
---

import ExternalContentSyntaxHighlighter from '../../_react_components/ExternalContentSyntaxHighlighter.jsx';
import GetCurrentVersion from '../../_react_components/GetCurrentVersion.jsx';

Allows for the management of the OpenHIM users.

## Schema Model

```js
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passports: {type: Schema.Types.ObjectId, ref: 'Passport'},
  /* --- @deprecated --- */
  passwordAlgorithm: String,
  passwordHash: String,
  passwordSalt: String,
  /* --- ----------- --- */
  provider: {
    type: String,
    enum: ['openid', 'local', 'token'], // token is deprecated
    default: 'local'
  },
  groups: [String],
  msisdn: String,
  dailyReport: Boolean,
  weeklyReport: Boolean,
  settings: Object,
  token: String,
  tokenType: {
    type: String,
    enum: ['newUser', 'existingUser', null]
  }, // null is needed as we used nulls to clear to token and tokenType
  expiry: Date,
  locked: Boolean
})
```
