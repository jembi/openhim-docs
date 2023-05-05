---
id: channels
title: Channels
sidebar_label: Channels
keywords:
  - openhim
  - channel
  - config
description: Manage OpenHIM channels
---

A channel defines a path that a request will take through the OpenHIM. It describes one or more routes for the request to be forwarded to, which clients are allowed to use the channel, which requests are to be directed to this channel and many more options that allows you to control what happens for a particular request.
The management of clients and channels are discussed later in the document. Only an OpenHIM administrative user has the permission to `Add`, `Edit` and `Delete` a Client or Channel

Using an OpenHIM administrative account, you will be able to add, edit and remove channels by following the steps below.

Two of the most important fields are the URL pattern field and the allowed roles and clients field. The URL pattern field describes which incoming requests should be sent down a channel. It does this by looking at the URL of the incoming request and tests to verify that it matches the Regular Expression (RegEx) that you supplied in this field.

> **Note**: Only the first matched channel that is found will receive the request for processing.

The allowed roles and clients field identifies which clients are allowed to send requests to a channel. If a request matches a channel but the client system is not specified in the field, or where a role that the client belongs to is not specified in this field, then the request will be denied access to the channel.

The following is an explanation of the fields that are used in the `Add Channels` form.

## Basic Info Tab

1. **Channel Name** - This is a descriptive name of the Channel.
1. **Channel Type** - The type of channel to be configured:

   - **_Hypertext Transfer Protocol (HTTP)_** - Default channel type.
   - **_Transmission Control Protocol (TCP)_** - Supply a TCP host and port number.
   - **_Transport Layer Security (TLS)_** - Supply a TLS host and port number.
   - **_Polling_** - Supply a Polling schedule in a cron format: `*/10 * * * *` or written format: `10 minutes`.

     > **Note**: The module called `Agenda` is used to accomplish the polling. Please visit the [Agenda documentation](https://github.com/agenda/agenda) for more information.

1. **_Status_** - Enable or disable the channel.

## Request Matching Tab

1. URL Pattern - Supply a URL pattern to match an incoming transaction.
   > **Note**: this field accepts a RegEx value. This field is not applicable for Channel Type of TCP or TLS.
1. Priority - If a transaction matches the URL patterns of two or more channels, then the channel with higher priority will be picked. A value of 1 is the highest possible priority (first priority). Larger numbers therefore indicate that a channel should take lower priority.
1. Authentication Type - Set whether this channel is private or public.
1. Whitelisted IP Addresses - A list of IP addresses that will be given access without authentication required.
1. Allowed Roles and Clients - Only applicable when Authentication Type is set to private. Supply the Roles and Clients allowed to make requests to this channel.
1. Match Content Types - Supply what content type to match to. (e.g text/json).
1. Matching Options - These options allow a Channel to be used if the request body matches certain conditions.
   - No Matching - No matching applicable.
   - RegEx Matching - Supply a RegEx to match.
   - XML Matching - Supply an X Path as well as a value to match.
   - JSON Matching - Supply a JSON property as well as a value to match.

## Routes Tab

1. **Mediator Route** - Select a mediator route if any, to populate the required route fields.
1. **Name** - This is a descriptive name of the route.
1. **Route Type** - Select whether this route is an HTTP or Kafka request.

   **HTTP** routes additionally require
   * **Host** - The host where this route should go to.
   * **Port** - The port where this route should go to.
   * **Basic Auth Username** - Supply a username if the route requires basic authentication.
   * **Basic Auth Password** - Supply a password if the route requires basic authentication.
   * **Path** - Supply a path the route should follow. If none supplied, then the Channel URL pattern will be used.
   * **Path Transform** - Applies a said-like expression to the path string - multiple endpoints can be reached using the same route.

   **Kafka** rotues additionally require
   * **Client ID** - The kafka client id to group the operation under.
   * **Topic Name** - The topic name to which the request details will be published to.

1. **Is this the primary route?** - Set whether the route is primary - setting a route to primary indicates that this is the first route to check and is the primary endpoint to reach.
1. **Wait for the response of the primary route** - Set whether or not this route should wait for the primary route to complete before trying to run this route
   * **Send request when matching status code** - If a route has been set to wait for the primary route's response, then this option can be used to only send the request to this route if the status code from the primary route's response matches. By default it will match any response status code  
1. **Status** - Set whether the route is enabled/disabled.
1. '**+ Save**' - All required fields need to be supplied before the blue `+ Save` button becomes active.

   > **Note**: At least one route needs to be added to the Channel and only one route is allowed to be set to primary.

## Data Control Tab

1. **Store Request Body** - Select whether to store the request body.

   > **Note**: If a transaction is made through a POST/PUT/PATCH method and request body is NOT saved, then the transaction cannot be rerun.

1. **Store Response Body** - Select whether to store the response body.
1. **Auto Retry** - A feature that allows the OpenHIM to periodically resend failed transactions. Only transactions that have failed due to a connection type error, e.g. if a server is unavailable, or an internal OpenHIM error will be retried. I.e. if a target server responds with a status of 500, then that transaction won’t be retried since the transaction was delivered by the OpenHIM.

   - _Automatically resend failed transactions_ - Enable/disable auto retry for the channel.
   - _How often_ - A minimum period to wait (in minutes) before retrying a transaction.
   - _Enabled max number of attempts_ - Enable/disable a limit for the number of times a transaction should be retried.
   - _Time_ - Value for maximum number of retries.

1. **URL Rewriting Enabled** - URL rewriting allows the OpenHIM to look for URLs in a response and rewrite them so that they point to the correct location.
   - _From Host/Port_ - Supply the host and port value you are looking to rewrite.
   - *To Host/Port* - Supply the host and port value that will replace the ‘From Host/Port’ matches.
   - _Path Transform_ - Applies a said-like expression to the path string - multiple endpoints can be reached using the same route.
1. **Add Auto Rewrite Rules** - Determines whether automatic rewrite rules are used. These rules enabled URLs to be automatically rewritten for any URLs that points to a host that the OpenHIM proxies (any host on a primary route). These can be overridden by user specified rules if need be.

## User Access Tab

1. **User groups allowed to view this channel’s transactions** - Supply the groups allowed to view this Channel’s transactions.
1. **User groups allowed to view this channel’s transactions' request/response bodies** - Supply the groups allowed to view the request/response bodies of this Channel’s transactions.
1. **User groups allowed to rerun this channel’s transactions** - Supply the groups allowed to rerun this Channel’s transactions.

## Alerts Tab

1. **Status** - Supply the status of a transaction when the alert should be sent. This can be supplied in a range format (e.g 2xx or 4xx).
1. **Failure Rate (%)** - Supply the failure rate of when to start sending the alerts (e.g 50 - once failure rate above 50% then alerts will be sent).
1. **Add Users** - Add individual users to receive alerts.
   - _User_ - Select a user from the drop down to receive an alert.
   - _Method_ - Select the method of how the alert should be delivered [Email | SMS].
   - _Max Alerts_ - Select the frequency of how often to send an alert [no max | 1 per hour | 1 per day].
1. **Add Groups** - Add an entire group to receive alerts.
1. **Add a new group** - Select a group from the drop down to be added to alerts.
1. '**+ Alert**' - All required fields need to be supplied before the blue `+ Save` button becomes active.

## How to add a channel

> **Note**: All fields marked with a \* or \*\* indicates a mandatory field.

    * - Indicates a required field which means that it cannot be left blank.
    ** - Indicates that one of the fields are required, no both.

1. Log in to your OpenHIM console.
1. Click on `Channels` found in the left navigation menu.
1. Click on the green `+ Channel` button.
1. Supply all the required fields and click the blue `Save changes` button when completed. See the above section which may assist with this process.

## How to remove a channel

1. Log in to your OpenHIM console.
1. Click on `Channels` found in the left navigation menu.
1. Locate the channel to be deleted.
1. Click on the red `X` button.
1. You will be prompted to confirm your action to delete the chosen channel.

## How to edit a channel

1. Log in to your OpenHIM console.
1. Click on `Channels` found in the left navigation menu.
1. Locate the channel to be edited.
1. Click on the amber button that looks like a pencil on the far right.
1. Update the channel information as required.
1. Click on the `Save Changes` button to update the channel.

## How to copy a channel’s config

1. Log in to your OpenHIM console.
1. Click on `Channels` found in the left navigation menu.
1. Locate the channel to be copied.
1. Click on the blue button that looks like an A4 paper icon on the far right.
1. Give your channel a unique name.
1. Click on the `Save Changes` button to create the new channel using the same config as the channel being copied.
