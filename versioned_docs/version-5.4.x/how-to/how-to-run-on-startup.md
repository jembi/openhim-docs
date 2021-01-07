---
id: run-openhim-on-startup
title: Run the OpenHIM on startup
sidebar_label: Run the OpenHIM on startup
keywords:
  - OpenHIM
  - Startup
  - systemd
description: Running OpenHIM on startup
---

import ExternalContentSyntaxHighlighter from '../_react_components/ExternalContentSyntaxHighlighter.jsx';
import GetCurrentVersion from '../_react_components/GetCurrentVersion.jsx';

This how to guide assumes the following

- You are working on an Ubuntu server
- The OpenHIM Core is already installed using `npm`
- NodeJS is installed

> Make sure the OpenHIM Core is not currently running on your machine before proceeding.

## systemd

To help you get the OpenHIM server running on boot we supply a script for `systemd`.

<GetCurrentVersion>
  <ExternalContentSyntaxHighlighter
    url="https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/resources/openhim-core.service"
    language="service"
  />
</GetCurrentVersion>

To setup the service create the following file with your editor of choice (vim in this example) and put in the above content:

```sh
sudo vim /lib/systemd/system/openhim-core.service
```

For the `ExecStart` field fill in the correct paths to NodeJS and your OpenHIM Core module. To find these directory paths try the following:

```sh
which node
```

This will show you where NodeJS is installed. The OpenHIM npm module will be installed nearby (usually within `../../lib/node_modules/openhim-core` in relation to node).

Your `ExecStart` field should look something like this:

```service
ExecStart=/usr/local/bin/node /usr/local/lib/node_modules/openhim-core/lib/server.js
```

> If you have installed NodeJS using `nvm` the directory base will be `/home/<user>/.nvm/versions/node/<node-version>/` instead of `/usr/local/`

Once your script is complete reload systemd with the following command:

```sh
sudo systemctl daemon-reload
```

Then, start the service:

```sh
sudo systemctl start openhim-core
```

Next check the service status:

```sh
sudo systemctl status openhim-core
```

You can confirm that the OpenHIM is accessible by navigating to <https://localhost:8080/heartbeat> on a browser. The browser will give you a security warning as SSL has not been setup yet. Accept the risk and the browser should return the OpenHIM uptime.

To diagnose any problems you can view the OpenHIM logs from the service with the following:

```sh
journalctl -u openhim-core.service -b
```

To configure the OpenHIM to run on server startup type the following:

```sh
sudo systemctl enable openhim-core
```
