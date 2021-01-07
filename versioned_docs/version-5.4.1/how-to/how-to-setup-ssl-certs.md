---
id: setup-ssl
title: Setup SSL
sidebar_label: Setup SSL
keywords:
  - OpenHIM
  - Setup SSL
description: Setup SSL certificates for the OpenHIM-core
---

## Install SSL certificates for Openhim-core

This can be accomplished directly from the OpenHIM console, where you can upload a new certificate for openhim-core through the console.

Openhim-core can be set to automatically watch a path which contains its certificates. The settings for which path and whether or not it should be automatically monitored, can be configured in the openhim-core config file under: `certificateManagement`.

If the config gets updated, openhim-core will need to be restarted.

## Install SSL certificates for Openhim-console

We recommend setting up NGINX in front of openhim-console which is where SSL certificates should then be used. Here is a [blog](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04) to introduce you to how that could work.

Certificates can be purchased or are freely available by using [Letsencrypt](https://letsencrypt.org/).
