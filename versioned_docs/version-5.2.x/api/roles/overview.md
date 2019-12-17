---
id: overview
title: Roles overview
sidebar_label: Overview
keywords:
  - OpenHIM
  - API
  - Role
  - Overview
description: An overview of the OpenHIM Roles
---

Allows for the management of client access control to channels.

It should be noted that there is no actual roles collection in the database. The API is a facade on top of the `allow` and `roles` fields from Channels and Clients respectively. Roles can therefore also be altered by changing values for those fields directly.
