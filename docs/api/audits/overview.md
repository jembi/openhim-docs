---
id: overview
title: Audits overview
sidebar_label: Overview
keywords:
  - OpenHIM
  - API
  - Audit
  - Overview
description: An overview of the OpenHIM Audits
---

import ExternalContentSyntaxHighlighter from '../../../src/components/ExternalContentSyntaxHighlighter.jsx';

Allows for the management of OpenHIM audits.

The OpenHIM will generate audit events on application start/stop, as well as user authentication. These events can either be sent to the OpenHIM’s own internal audit repository, or to an external repository.

## ATNA Audit

The OpenHIM provides full support as an Audit Repository actor in the IHE [ATNA](https://wiki.ihe.net/index.php/Audit_Trail_and_Node_Authentication) profile.

## Schema Model

<ExternalContentSyntaxHighlighter 
  url="https://raw.githubusercontent.com/jembi/openhim-core-js/v5.2.5/src/model/audits.js"
  language="javascript"
/>
