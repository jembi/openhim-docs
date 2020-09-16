---
id: db-functions
title: Database upgrade functions
sidebar_label: Database upgrade functions
keywords:
  - openhim
  - upgrade
  - database
description: Running database upgrade functions
---

When upgrading an OpenHIM instance from one version to another, a couple of upgrade functions might be triggered.
The functions run in the background and might take a significant amount of time depending on the the amount of data being migrated.

## Clients link to Certs

A function might be triggered to convert a client's link to certificates via their domain to use the certificate fingerprint instead.

## Visualizer Setting

Upgrading to from OpenHIM core v2.0.0 triggers a migration of the visualizer settings from  a user's profile to a shared MongoDB collection.

## Transactions Upgrade

From version 6.x.x transaction request bodies, response bodies, orchestrations and route request/response bodies are being stored in GridFS collections. When running an OpenHIM version 6.x.x instance for the first time, it attempts to migrate all existing transaction data to GridFS.
