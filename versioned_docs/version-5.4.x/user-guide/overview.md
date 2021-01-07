---
id: overview
title: OpenHIM Overview
sidebar_label: OpenHIM Overview
keywords:
  - OpenHIM
  - Overview
description: An overview of the OpenHIM
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The OpenHIM consists of the following major components:

- Core
- Mediators
- Console

_Core_ provides the OpenHIM's main functionality; it processes the transactions from client systems. Its functionality is enhanced via _Mediators_, which are loosely coupled services that can add business logic to the transaction flow.

Core by default listens on ports 5000 (HTTPS) and 5001 (HTTP). These ports are therefore the **front door** that external client systems use to communicate with the OpenHIM. Core also provides an API, by default on port 8080. The _Console_ makes use of this API to manage and view the OpenHIM data. Mediators also use the API for tasks such as registration and heartbeats.

The following diagram summarizes the components:
<img alt="OpenHIM Ports" src={useBaseUrl('img/overview/openhim-ports.png')} />
