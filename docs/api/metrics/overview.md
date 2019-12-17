---
id: overview
title: Metrics overview
sidebar_label: Overview
keywords:
  - OpenHIM
  - API
  - Metrics
  - Overview
description: An overview of the OpenHIM transaction metrics
---

import ExternalContentSyntaxHighlighter from '../../_react_components/ExternalContentSyntaxHighlighter.jsx';
import GetCurrentVersion from '../../_react_components/GetCurrentVersion.jsx';

This resource enables transaction metrics to be retrieved from the OpenHIM in a flexible way. There are various forms of the endpoint depending on the format of the metrics that you want to retrieve. Metrics are only returned for the channels that the API user has access to.

## Schema Model

<GetCurrentVersion>
  <ExternalContentSyntaxHighlighter
    url="https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/events.js"
    language="javascript"
  />
</GetCurrentVersion>
