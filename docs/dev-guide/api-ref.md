---
id: restful-api
title: RESTful API
sidebar_label: RESTful API
---

### Tasks resource

Tasks are used to submit transactions to be re-run.

`https://<server>:<api_port>/tasks`

#### Fetch all tasks

`GET /tasks`

The response status code will be `200` if successful and the response body will contain an array of task objects. See the [tasks schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/tasks.js).

#### Add a task

`POST /tasks`

with a json body representing the task to be added in the following format:

```json
{
  "tids": [
    "id#1",
    "id#2",
    ...
    "id#N"
  ],
  "batchSize": 4,   //optional
  "paused": true    //optional
}
```

The `tids` field should contain an array of transaction identifiers indicating the transactions that need to be rerun. The `batchSize` field indicates the number of transactions that the core should run concurrently. To prevent a task from immediately starting upon add, the `paused` field can be added. In this case the task will simply be scheduled with a `Paused` status, ready to be started at any later stage.

The response code will be `201` if successful.

#### Fetch a specific task

`GET /tasks/:taskId`

where `:taskId` is the `_id` property of the task to fetch.

The response status code will be `200` if successful and the response body will contain a task object. See the [task schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/tasks.js).

#### Update a task

`PUT /tasks/:taskId`

where `:taskId` is the `_id` property of the task to update.

Tasks can be paused, resumed or cancelled by sending through an update with status equal to `Paused`, `Queued` or `Cancelled` respectively.

The response code will be `200` if successful.

#### Delete a task

`DELETE /tasks/:taskId`

where `:taskId` is the `_id` property of the task to delete.

The response code will be `200` if successful.

### Mediators

`https://<server>:<api_port>/mediators`

#### Fetch all mediators

`GET /mediators`

The response status code will be `200` if successful and the response body will contain an array of mediator objects. See the [mediators schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/mediators.js).

**Note:** All password types returned in a mediator's config will be masked. To view the password, the heartbeat endpoint must be used by a mediator to retrieve config.

#### Add a mediator

`POST /mediators`

with a json body representing the mediator to be added. See the [mediators schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/mediators.js).

The response code will be `201` if successful.

#### Fetch a specific mediator

`GET /mediators/:urn`

where `:urn` is the `urn` property of the mediator to fetch.

The response status code will be `200` if successful and the response body will contain a mediator object. See the [mediator schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/mediators.js).

**Note:** All password types returned in a mediator's config will be masked. To view the password, the heartbeat endpoint must be used by a mediator to retrieve config.

#### Mediator heartbeat endpoint

This endpoint allows a mediator to send a heartbeat to the OpenHIM-core. This serves two purposes:

1. It allows the mediator to demonstrate its alive-ness and submit an uptime property
2. It allows the mediator to fetch the latest configuration from the OpenHIM-core

This endpoint only returns mediator config if the config has changed between the time the previous heartbeat was received and the current time. You may force the endpoint to return the latest config via the `config: true` property.

`POST /mediators/:urn/heartbeat`

where `:urn` is the `urn` property of the mediator that is sending in a heartbeat.

with an http body of:

```js
{
  "uptime": 50.25 // The uptime is seconds
  "config": true // (Optional) a flag to force the OpenHIM-core to send back the latest config
}
```

The response will always have a `200` status if successful or a `404` if the mediator specified by the urn cannot be found. The response body will contain the latest mediator config that has been set on the OpenHIM-core server only if the config has changed since the last time a heartbeat was received from this mediator. Otherwise, the response body is left empty.

This endpoint can only be called by an admin user.

#### Set mediator config

Sets the current configuration values for this mediator. The received configuration must conform to the configuration definition that the mediator defined in its registration message.

`POST /mediators/:urn/config`

where `:urn` is the `urn` property of the mediator that is sending in the heartbeat.

with an http body of:

```js
{
  paramName: "value",
  paramName: "value"
}
```

The response will have an http status code of `201` if successful, `404` if the mediator referenced by urn cannot be found and `400` if the config supplied cannot be validated against the configuration definition supplied in the mediator registration message.

This endpoint can only be called by an admin user.

#### Install mediator channels

Installs channels that are listed in the mediator's config (`defaultChannelConfig` property). This endpoint can install all listed channels or a subset of channels depending on the post body the of request.

`POST /mediators/:urn/channels`

where `:urn` is the `urn` property of the mediator that is installing the channels.

with an http body that contains a JSON array of channel names to install. These names must match the names of channels in the mediators `defaultChannelConfig` property. If no body is sent, all channel are added by default.

e.g.

```js
;['Channel 1', 'Channel 2']
```

The response will be an http status code of `201` if the channels were successfully created and `400` if you provide a channel name that doesn't exist.

### Logs resource

The logs resource allows you to get access to the server logs. This resource is only accessible by admin users and only works if you have [database logging](https://github.com/jembi/openhim-core-js/blob/master/config/config.md) enabled (This is enabled by default).

#### Get logs

`GET logs?[filters]`

Fetches server logs. You may apply a number of filters to fetch the logs that you require. By default the logs with level `info` and above for the last 5 mins with be returned. The logs will be returned as an ordered array with the latest message at the end of the array.

A maximum of 100 000 log messages will ever be returned. So don't make unreasonable queries as you won't get all the results (hint: use pagination).

The following filters are available:

- `from` - an ISO8601 formatted date to query from. Defaults to 5 mins ago.
- `until` - an ISO8601 formatted date to query until. Defaults to now.
- `start` - a number n: the log message to start from, if specified the first `n` message are NOT returned. Useful along with limit for pagination. Defaults to 0.
- `limit` - a number n: the max number of log messages to return. Useful along with `start` for pagination. Defaults to 100 000.
- `level` - The log level to return. Possible values are `debug`, `info`, `warn` and `error`. All messages with a level equal to or of higher severity to the specified value will be returned. Defaults to `info`.

The logs will be returned in the following format with a `200` status code:

```js
;[
  {
    label: 'worker1',
    meta: {},
    level: 'info',
    timestamp: '2015-10-29T09:40:31.536Z',
    message: 'Some message'
  },
  {
    label: 'worker1',
    meta: {},
    level: 'info',
    timestamp: '2015-10-29T09:40:39.128Z',
    message: 'Another message'
  }
  // ...
]
```

For example a sample request could look like this:

```http
https://localhost:8080/logs?from=2015-10-28T12:31:46&until=2015-10-28T12:38:55&limit=100&start=10&level=error`
```
