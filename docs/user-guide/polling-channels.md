---
id: polling-channels
title: Polling Channels (scheduled tasks)
sidebar_label: Polling Channels (scheduled tasks)
keywords:
  - OpenHIM
  - Polling channel
description: OpenHIM polling channels feature
---

A great feature of the OpenHIM is the ability to trigger tasks in other systems.
This is made possible by the polling channel. Polling channels are channels that the OpenHIM can trigger internally on a schedule. When a channel is triggered it will cause each of the routes that are configured for that channel to execute.

The OpenHIM will trigger the polling channel with a `GET` request to the `/trigger`
path on the defined schedule. Each route can override the path with their own as
long as they are configured with a path. External systems can be triggered by
pointing a route at them. The external systems will have to expose an HTTP
endpoint for them to be triggered. The triggering will always happen as an HTTP
`GET` request.

To configure a polling channel in the console, navigate to the 'Channels' page,
select add channel and set the type of the channel to 'polling'. You will be able
to provide a schedule for the polling channel to be executed. You may provide this
in cron format (ie. 0 4 \* \* \* ) or in a descriptive format (ie. 5 minutes). See
[the agenda documentation](https://github.com/rschmukler/agenda#everyinterval-name-data-options-cb)
for a more complete description of this format. From there you may configure the
rest of the channel as usual and add routes for each external system that is to
be triggered.

> When using cron format, it is important to note that the server's timezone will be used to action the trigger
