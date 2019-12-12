---
id: manual
title: Install Manually
sidebar_label: Install Manually
keywords:
  - openhim
  - manual
  - install
---

This guide is for manually installing an OpenHIM instance using the built zipped application releases available on their respective github pages.

> This method is useful for on-site implementation without internet access.

## Prerequisites

This guide assumes that you are installing on an ubuntu server and that the following is already installed and setup:

- NodeJS (v8 or later)
- MongoDB (v3.6 or later)

> **Note**: `libappstream3` may cause problems with the npm package manager if your ubuntu instance is not fully updated.

## Installing the OpenHIM Core

1. Download the latest OpenHIM Core release

  ```sh
  wget https://github.com/jembi/openhim-core-js/releases/download/{version_number}/build.openhim-core.{version_number}.zip
  ```

  > See [here for released versions](https://github.com/jembi/openhim-core-js/releases)

1. Unzip the file

  ```sh
  unzip build.openhim-core.{version_number} -d {destination_folder}
  ```

To make use of your own custom configurations, you have two options:

1. You can copy the default.json config file and override the default settings: `wget https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json`. Then, depending on your environment instance, rename the file. For example, in the production setup name the file `production.json`. Move your new file into the `/config` directory of the project.

  > When you start up the OpenHIM Core make sure the `NODE_ENV` matches the setup environment. ie: If you name the config file `production.json` make sure the `NODE_ENV` is set to `production`

1. You can use environment variables to set specific parameters. Environment variables use a \_ as a separator for nested keys. For example, to change the port that the Application Programming Interface (API) listens on and to change the ports that the router listens on you could do the following: `api_httpsPort=8081 router_httpsPort=50456 router_httpPort=50457 npm start`

> **Note**: The environment variables are case sensitive.
