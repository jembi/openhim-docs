---
id: restful-api
title: RESTful API
sidebar_label: RESTful API
---

### Transactions resource

Transactions store details about request and responses send through specifc channels.

`https://<server>:<api_port>/transactions`

An important concept to grasp with a transaction is the meaning of a transactions status. Here is a description of what each state means:

- Processing - We are waiting for responses from one or more routes
- Successful - The primary route and all other routes returned successful http response codes (2xx).
- Failed - The primary route has returned a failed http response code (5xx)
- Completed - The primary route and the other routes did not return a failure http response code (5xx) but some weren't successful (2xx).
- Completed with error(s) - The primary route did not return a failure http response code (5xx) but one of the routes did.

#### Fetch all transactions

`GET /transactions`

The response status code will be `200` if successful and the response body will contain an array of transaction objects. See the [transaction schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/transactions.js).

The following query parameters are supported:

- `filterLimit`: The max number of transactions to return
- `filterPage`: The page to return (used in conjunction with `filterLimit`)
- `filterRepresentation`: Determines how much information for a transaction to return; options are
  - `simple`: minimal transaction information
  - `simpledetails`: minimal transaction information, but with more fields than simple
  - `bulkrerun`: minimal transaction information required in order to determine rerun status
  - `full`: Full transaction information
  - `fulltruncate`: The same as full except that large transaction bodies will be truncated
- `channelID`: Only return transactions that are linked to the specified channel
- `filters`: Advanced filters specified as an object. Transaction fields can be specified based on the [transaction schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/transactions.js#L40-L56). For example, in order to filter by response status 200 and a property called `prop` with a value `val`, the following query could be used: `/transactions?filterLimit=100&filterPage=0&filters=%7B%22response.status%22:%22200%22,%22properties%22:%7B%22prop%22:%22val%22%7D%7D`

#### Add a transaction

`POST /transactions`

with a json body representing the transaction to be added. See the [transactions schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/transactions.js).

The response code will be `201` if successful.

#### Fetch a specific transaction

`GET /transactions/:transactionId`

where `:transactionId` is the `_id` property of the user to fetch.

The response status code will be `200` if successful and the response body will contain a transaction object. See the [transaction schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/transactions.js).

#### Find transactions by client Id

`GET /transactions/clients/:clientId`

where `:clientId` is the `clientID` property of the client we wish to find transaction for.

The response status code will be `200` if successful and the response body will contain an array of transaction objects. See the [transaction schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/transactions.js).

#### Update a transaction

`PUT /transactions/:transactionId`

where `:transactionId` is the `_id` property of the transaction to update and with a json body representing the transaction updates. See the [transaction schema](https://github.com/jembi/openhim-core-js/blob/master/src/model/transactions.js).

The response code will be `200` if successful.

#### Delete a transaction

`DELETE /transactions/:transactionId`

where `:transactionId` is the `_id` property of the transaction to delete.

The response code will be `200` if successful.

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
