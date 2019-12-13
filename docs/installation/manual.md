---
id: manual
title: Install Manually
sidebar_label: Install Manually
keywords:
  - OpenHIM
  - Manual
  - Install
description: Install the OpenHIM manually
---

If you don’t have ubuntu or prefer to proceed with the installation manually, please follow the following steps.

## Installing the OpenHIM Core

The latest active LTS is **recommended**.

> **Note**: libappstream3 may cause problems with the npm package manager if your ubuntu instance is not fully updated.

1. Install the latest stable Node.js v8 or greater `curl -sL https://deb.nodesource.com/setup_6.x| sudo -E bash` then `sudo apt-get install -y nodejs`
1. Install and start MongoDB 3.6 or greater. (If you are running Ubuntu 16.04, you may want to configure MongoDB as a systemd service that will automatically start on boot)
1. Install Git `apt-get install git`
1. Install npm `sudo apt install npm`
1. Install the OpenHIM-core package globally (this will also install an OpenHIM-core binary to your PATH) `sudo npm install openhim-core -g`
1. Start the server by executing `openhim-core` from anywhere.

To make use of your own custom configurations, you have two options:

1. You can copy the default.json config file and override the default settings: `wget https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json` edit default.json, then `openhim-core --conf=path/to/default.json`

1. You can use environment variables to set specific parameters. Environment variables use a \_ as a separator for nested keys. For example, to change the port that the Application Programming Interface (API) listens on and to change the ports that the router listens on you could do the following: `api_httpsPort=8081 router_httpsPort=50456 router_httpPort=50457 npm start`

> **Note**: The environment variables are case sensitive.

For more information about the config options, please visit [OpenHIM Config Options](https://github.com/jembi/openhim-core-js/blob/master/config/config.md).

## Installing the OpenHIM Console

Before installing the OpenHIM console, it is required that you first have the OpenHIM core server up and running. The OpenHIM console communicates with the OpenHIM core via its API to pull and display data.

> It is **recommended** that as soon as the OpenHIM core is up and running that you setup a properly signed TLS certificate. However, it is possible to do this later through the OpenHIM console under ‘Certificates’ on the left navigation pane.

Next, you need to download the latest release of the web app and deploy it to a web server (Replace the X’s in the below command to the latest release):

1. Get the latest release `sh wget https://github.com/jembi/openhim-console/releases/download/vX.X.X/openhim-console-vX.X.X.tar.gz`
1. Navigate to the path `cd /var`
1. Create the /var/www/ path (If it does not already exist) `sudo mkdir www`
1. Navigate to the path `cd www/`
1. Create the /var/www/html path (If it does not already exist) `sudo mkdir html`
1. Export the contents of the download `tar -vxzf openhim-console-vX.X.X.tar.gz --directory /var/www/html`

> The next step is vital for the successful setup of the OpenHIM console. Firstly, you need to configure the console to point to your OpenHIM core server and lastly, navigate to the config/default.js file in the folder that you extracted the OpenHIM console’s contents to and edit it as follows:

```json
{
  "version": "x.x.x", //Replace the x's with the latest release
  "minimumCoreVersion": "5.2.3",
  "protocol": "https",
  "host": "localhost", // change this to the hostname for your OpenHIM-core server (This hostname _MUST_ be publicly accessible)
  "port": 8080, // change this to the API port of the OpenHIM-core server, default is 8080 (This port _MUST_ be publicly accessible)
  "title": "OpenHIM Admin Console", // You may change this to customise the title of the OpenHIM-console instance
  "footerTitle": "OpenHIM Administration Console", // You may change this to customise the footer of the OpenHIM-console instance
  "footerPoweredBy": "<a href='http://openhim.org/' target='_blank'>Powered by OpenHIM</a>",
  "loginBanner": "", // add text here that you want to appear on the login screen, if any.
  "mediatorLastHeartbeatWarningSeconds": 60,
  "mediatorLastHeartbeatDangerSeconds": 120
}
```

## Ensure communication between the OpenHIM Console and Core

Make sure you have the latest Apache server installed `sudo apt-get install apache2`
Make sure the apache service is up and running `sudo service apache2 status`
