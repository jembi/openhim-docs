---
id: users
title: Users
sidebar_label: Users
keywords:
  - openhim
  - users
  - config
description: Manage OpenHIM users
---

As an OpenHIM administrator, you may create other users. These too may belong to the admin group or may belong to other groups. Non-admin users cannot create clients and channels, however, they may view transactions for certain channels that they are given access to.

The following is an explanation of the fields that are used in the `Add a Channel` form:

- **Email** - Email address for the user.
- **First Name** - User first name.
- **Surname** - User surname/family name.
- **Phone Number** - Mobile contact number in the MSISDN format (eg. 27825555555) should you want to receive sms alerts.
- **Permissions Group** - The group name to which the user will be assigned. You may use an existing group or create a new group.

  > **Note**: While typing in the textbox, the OpenHIM will validate each keystroke to lookup any matching group names.

- **Password** - The user's password.

  > **Note**: Confirmation for a user account will need activation via email. A user's account will remain disabled/locked until he/she has confirmed.

- **Reports** - Choose which reports the user needs to receive via email. These reports include the following transaction statuses:

  - Completed
  - Completed with errors
  - Failed
  - Processing
  - Successful

- **List Settings and General Settings** - You may pre-define how you want the user to view transactions.

## How are `Users` different from `Clients`

Clients are different from users in that they **represent systems** that can route transactions through the OpenHIM. Users are people accessing and configuring the OpenHIM whereas clients are the systems that are allowed to send requests to the OpenHIM.

## User Groups

`Groups` are created automatically by just adding a new group name in the user form. You do not need to add a group explicitly. When you go on to create the channel, you just need to make sure the group name matches the one you specified when you created the `User`.

There are two kinds of groups:

1. Admin - This is a special group that grants users all permissions.

   > Note: The Admin group is created automatically.

1. The rest are defined by a system administrator.

> **Note**: When creating a channel, an administrator can set the level of user access by specifying the user groups which may have the necessary rights to view a channel, view a channels transactions, view the transactions request and response body, and rerun failed transactions.

### Group Permissions

Users can be assigned custom permissions on a channel. This is done by adding the group to which they belong to that particular permission in the channel's configuration. By default, all custom user groups do not have permissions on any channel and will need the permission to be set. Please see [OpenHIM Channels](#openhim-channels) for more information regarding channels.

User permissions comprise of the following:

1. View channel transactions.
1. View channel transaction bodies.
   > **Note**: bodies may contain private patient data
1. Re-run transactions.
   > **Note**: enabling this permission needs to be done with care because it may cause downstream duplicates and data corruption if the user hasn’t received sufficient training around this process.

## How to add users

> **Note**: All fields marked with a \* indicates a mandatory field.

1. Log in to your OpenHIM console.
1. Click on the `Users` option found in the left navigation menu.
1. Click on the green `+ User` button.
1. Supply all the required fields and click the blue `Save changes` button when completed. See the above section which may assist with this process.

## How to remove users

1. Log in to your OpenHIM console.
1. Click on `Users` found in the left navigation menu.
1. Locate the user to be deleted.
1. Click on the red `X` button.
1. You will be prompted to confirm your action to delete the chosen user.

## How to edit users

1. Log in to your OpenHIM console.
1. Click on `Users` found in the left navigation menu.
1. Locate the user to be edited.
1. Click on the amber button that looks like a pencil.
1. Update the user information as required.
1. Click on the `Save Changes` button to update the user.
