---
id: overview
title: Transactions overview
sidebar_label: Overview
keywords:
  - OpenHIM
  - API
  - Transactions
  - Overview
description: An overview of the OpenHIM Transaction
---

import ExternalContentSyntaxHighlighter from '../../_react_components/ExternalContentSyntaxHighlighter.jsx';
import GetCurrentVersion from '../../_react_components/GetCurrentVersion.jsx';

Allows for the management of OpenHIM transactions. Transactions store the details about request and responses sent through specific channels.

An important concept to grasp with a transaction is the meaning of a transaction's status. Here is a description of what each state means:

- `Processing` - We are waiting for responses from one or more routes
- `Successful` - The primary route and all other routes returned successful http response codes (2xx).
- `Failed` - The primary route has returned a failed http response code (5xx)
- `Completed` - The primary route and the other routes did not return a failure http response code (5xx) but some weren't successful (2xx).
- `Completed with error(s)` - The primary route did not return a failure http response code (5xx) but one of the routes did.

## Schema Model

<GetCurrentVersion>
  <ExternalContentSyntaxHighlighter
    url="https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/transactions.js"
    language="javascript"
  />
</GetCurrentVersion>
