---
id: manual
title: Install Manually
sidebar_label: Install Manually
keywords:
  - openhim
  - manual
  - install
description: Install the OpenHIM manually
---

This guide is for manually installing an OpenHIM instance using the built zipped application releases available on their respective github pages.

> This method is useful for on-site implementation without internet access.

## Prerequisites

This guide assumes that you are installing on an ubuntu server and that the following is already installed and setup:

- NodeJS (v12 or later)
- NPM
- MongoDB (v3.6 or later)

> **Note**: `libappstream3` may cause problems with the npm package manager if your ubuntu instance is not fully updated.

## Installing the OpenHIM Core

1. Download the latest OpenHIM Core release

  ```sh
  wget https://github.com/jembi/openhim-core-js/releases/download/vX.X.X/build.openhim-core.vX.X.X.zip
  ```

  > See [here for all released versions](https://github.com/jembi/openhim-core-js/releases)

1. Unzip the file

  ```sh
  unzip build.openhim-core.vX.X.X -d {destination_folder}
  ```

To make use of your own custom configurations, you have two options:

1. You can copy the default.json config file and override the default settings: `wget https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json`. Then, depending on your environment instance, rename the file. For example, in the production setup name the file `production.json`. Move your new file into the `/config` directory of the project.

1. You can use environment variables to set specific parameters. Environment variables use a \_ as a separator for nested keys. For example, to change the port that the Application Programming Interface (API) listens on and to change the ports that the router listens on you could do the following: `api_httpsPort=8081 router_httpsPort=50456 router_httpPort=50457 npm start`

> **Note**: The environment variables are case sensitive.

For more information about the config options see our [config overview page](../configuration/overview).

Finally start the OpenHIM Core with the following:

```sh
npm start
```

> When you start up the OpenHIM Core make sure the `NODE_ENV` matches the setup environment. ie: If you name the config file `production.json` make sure the `NODE_ENV` is set to `production`

## Installing the OpenHIM Console

Before installing the OpenHIM console, it is required that you first have the OpenHIM core server up and running. The OpenHIM console communicates with the OpenHIM core via its API to pull and display data.

> We **recommended** that as soon as the OpenHIM core is up and running that you setup a properly signed TLS certificate. However, it is possible to do this later through the OpenHIM console on the **Certificates** page.

1. Download the latest OpenHIM Console release

  ```sh
  wget https://github.com/jembi/openhim-console/releases/download/vX.X.X/build.openhim-console.vX.X.X.zip
  ```

  > See [here for all released versions](https://github.com/jembi/openhim-console/releases)

1. Unzip the file

  ```sh
  unzip build.openhim-console.vX.X.X -d {destination_folder}
  ```

1. The next step is vital for the successful setup of the OpenHIM console. First configure the console to point to your OpenHIM core server and then navigate to the config/default.js file in the extracted folder and edit it as follows:

```json
{
  "version": "x.x.x", //Replace the x's with the latest release
  "minimumCoreVersion": "7.0.0",
  "protocol": "https",
  "host": "localhost", // change this to the hostname for your OpenHIM-core server (This hostname _MUST_ be publicly accessible)
  "port": 8080, // change this to the API port of the OpenHIM-core server, default is 8080 (This port _MUST_ be publicly accessible)
  "title": "OpenHIM Admin Console", // You may change this to customise the title of the OpenHIM-console instance
  "footerTitle": "OpenHIM Administration Console", // You may change this to customise the footer of the OpenHIM-console instance
  "footerPoweredBy": "<a href='http://openhim.org/' target='_blank'>Powered by OpenHIM</a>",
  "loginBanner": "", // add text here that you want to appear on the login screen, if any.
  "mediatorLastHeartbeatWarningSeconds": 60,
  "mediatorLastHeartbeatDangerSeconds": 120,
  "showLoginForm": true,
  "ssoEnabled": false, // Enable this if you want to be able to log in using SSO keycloak
  "keyCloakUrl": "http://localhost:9088", // Change this to the Keycloak URL if you enabled SSO
  "keyCloakRealm": "platform-realm", // Change this to the realm name configured in Keycloak if you enabled SSO
  "keyCloakClientId": "openhim-oauth" // Change this to the client ID of Keycloak if you enabled SSO
}
```

1. Finally, start the OpenHIM Console with the following:

```sh
npm start
```

## Ensure communication between the OpenHIM Console and Core

Login to the console. Defaults to <http://localhost:9000>
 
If you enabled SSO, please make sure that Keycloak is up and running, and the openid authentication type if enabled in the openhim-core.
