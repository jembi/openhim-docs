---
id: manually-install-on-windows
title: Manually install on Windows
sidebar_label: Manually install on Windows
keywords:
  - OpenHIM
  - Windows
description: Install OpenHIM on windows
---

> **<span style={{color: "rgb(153,51,0)"}}>ATTENTION</span>**: This guide describes how to install the OpenHIM on **Windows Server 2012**. Later versions of Windows are currently unsupported due to incompatible SSL ciphers.

The following is a tutorial to help guide you through the steps required for a new OpenHIM installation on a Windows Server 2012 instance.

## Prerequisites

### Non-Sucking Service Manager (NSSM)

1. Download [NSSM](http://nssm.cc/download)
1. Open the archive and extract the `win32` or `win64` directory (depending on your Windows architecture) to a location on disk, for example `c:\nssm`
1. Add the location `c:\nssm` to your `PATH` environment variable so that `nssm` is accessible without knowing and typing the whole path to the file on the command line

### Node.js LTS

Install the latest LTS version of Node.js from their [official site](http://nodejs.org/). Note that the OpenHIM only officially supports current LTS editions of node, which such as 10.x and 12.x.

The official process should be suitable for the OpenHIM; simply download and run the installer msi.

### MongoDB

Install the latest version of MongoDB from their [official site](https://www.mongodb.org/)

As with Node.js, the official process should be suitable for the OpenHIM. However, MongoDB requires some additional steps after running the installer - in particular it would be a good idea to setup MongoDB as a service.

[This guide](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/) should help you get fully setup.

### OpenSSL

Install with [Chocolatey](https://chocolatey.org/packages/OpenSSL.Light)

---

## OpenHIM Core

### Install

To install the OpenHIM Core, launch a Node.js command prompt via **Start > All Programs > Node.js > Node.js command prompt**. From here you can install Core using the following command

```sh
npm install -g openhim-core
```

You may see some warnings during the install process, especially if you do not have a C++ compiler installed, but this is not a problem and you can ignore these.

### Configuration

Create a folder for storing the OpenHIM config, e.g. `C:\openhim\core` and grab a copy of the [default config](https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json) from github and save it to locally, e.g. `C:\openhim\core\production.json`. Change this config to suit your needs.

You should now be able to run the OpenHIM Core. In a Node.js command prompt, run the following:

```sh
openhim-core --conf=C:\openhim\core\production.json
```

or with whichever file location you chose to create for the config.

### Run as a Windows Service

To ensure the OpenHIM runs all the time, we will install it as a Windows Service using NSSM.

1. Open a command window with administrator privileges
1. Install the OpenHIM core on nssm with the following command:

    ```sh
    nssm install openhim-core "C:\Program Files\nodejs\node.exe" "<global-npm-path>\node_modules\openhim-core\bin\openhim-core.js" "--conf=C:\openhim\core\production.json"
    ```

    The `global-npm-path` defaults to the following:

    ```txt
    C:\Users\<user>\AppData\Roaming\npm\
    ```

    If the path to the openhim contains any spaces in the name the command parameter will require triple quotes to be interpreted by nssm properly. For example:

    ```sh
    nssm install openhim-core "C:\Program Files\nodejs\node.exe" """C:\Users\Test User\AppData\Roaming\npm\node_modules\openhim-core\bin\openhim-core.js""" "--conf=C:\openhim\core\production.json"
    ```

    > The triple quotes aren't needed for the `Program Files` directory.

1. To capture the log output, type `nssm set openhim-core AppStdout "c:\OpenHIM\stdout.log"`
1. To capture the error output, type `nssm set openhim-core AppStderr "c:\OpenHIM\stderr.log"`
1. Type `net start openhim-core` to start the service or start it from the service manager.
1. To test whether the Core is available navigate to <https://localhost:8080/heartbeat>. This may bring up a warning about self signed certificates. You can bypass this issue for testing. See the docs section on implementing [SSL certs](./setup-ssl) to deal with this issue properly.

You’re done. You’ve installed the OpenHIM as a windows service.

---

## OpenHIM Console

A web server will be required to host the OpenHIM Console and in this guide we will use IIS and as an alternative we will also explain how to use Nginx. However, any good web server will be suitable, e.g. Apache.

### Install IIS

Go to the [microsoft docs](http://www.iis.net/learn/install) for articles on how to install IIS for your particular flavour of Windows OS.

If you want to check if IIS is installed, browse to <http://localhost> in your browser. If an image pops up, then IIS has been installed correctly.

### Setup Console

Download the [latest Console release](https://github.com/jembi/openhim-console/releases/latest) and extract the contents into a folder such as `C:\openhim\console`.

> You will need to use a utility such as [7-Zip](http://www.7-zip.org/) to extract the `.tar.gz` archive.

Console contains a config file located in `console\config\default.json`. You will need to edit the `host` and `port` fields to point to the _public_ address that the `OpenHIM Core` is running on. If you are only using the OpenHIM locally, then it is fine to leave the setting on localhost, however if you wish to make the Console accessible to other hosts, you will need to change the setting to either the machine's public IP address or domain name.

#### Configure the Console for IIS

Create a new site in Internet Information Services Manager. You can name it whatever you want. I've called it Console in these instructions.

1. Start IIS Manager.
1. In the Connections panel, expand Sites
1. Right-click Sites and then click Add Web Site.
1. In the Add Web Site dialog box, fill in the required fields, for example:

   - Site name: `Console`
   - Physical path: `C:\openhim\console`
   - Port: Make sure the port is something other than 80, as this will conflict with "Default Web Site" in IIS

---

### Alternative Web Server Instructions

#### Install Nginx

A web server will be required to host the OpenHIM Console and in this guide we will use Nginx. However any good web server will be suitable, e.g. Apache or IIS.

As per [this guide](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/), download and extract the Nginx windows binary. You don't need to start nginx yet however.

#### Setup Console

Download the [latest Console release](https://github.com/jembi/openhim-console/releases/latest) and extract the contents into a folder such as `C:\openhim\console`. Note that you will need to use a utility such as [7-Zip](http://www.7-zip.org/) to extract the .tar.gz archive.

Console contains a config file located in `console\config\default.json`. You will need to edit the `host` and `port` fields to point to the _public_ address that the OpenHIM Core is running on. If you are only using the OpenHIM locally, then it is fine to leave the setting on localhost, however if you wish to make the Console accessible to other hosts, you will need to change the setting to either the machine's public IP address or domain name.

Next locate the Nginx configuration file `<nginx location>\conf\nginx.conf` and change the root context to point to the Console:

```sh
location / {
    root   C:\openhim\console;
    index  index.html index.htm;
}
```

Also change any other settings as required, e.g. port numbers.

Now you can startup Nginx from a command prompt by running:

```sh
cd <nginx location>
start nginx
```

## Finally

The OpenHIM Core and Console should now be up and running!

Access the console on <http://yourserver:port_number> and login with **root@openhim.org** using the password: **openhim-password**
