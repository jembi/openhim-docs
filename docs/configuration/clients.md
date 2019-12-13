---
id: clients
title: Clients
sidebar_label: Clients
keywords:
  - OpenHIM
  - Clients
description: Manage OpenHIM clients
---

A client is usually some system that you want to able to send request to the OpenHIM. Setting up a client allows the OpenHIM to authenticate requests.

Using an OpenHIM administrative account, you will be able to add, edit and remove clients by following a few easy steps.

The following is an explanation of the fields that are used in the `Add Client` form:

- **Client ID** - This is a unique ID which a client will use as a reference when adding channels as well as for authorisation checking.
- **Client Name** - This is a descriptive name of the client.
- **Domain** - A domain that is associated with a client.
  > **Note**: The domain needs to match the CN of the certificate if a certificate is used otherwise the client won’t be authorised successfully.
- **Roles** - The client roles field is a list of authorized user groups that are allowed to access this channel. You can either select a role from the suggested roles that appear when you start typing, or you can add a new role to the list by typing in the role and pressing Enter.
  > **Note**: suggested roles will only appear as you type, if they already exist in the OpenHIM.
- **Certificate** - The certificate field is used when the OpenHIM core is running using mutual TLS authentication and needs to authenticate requests coming from the client. By default, the OpenHIM core uses mutual TLS authentication.
- **Basic Auth Password** - The password field is used when the OpenHIM core is running in basic auth mode and does not require a certificate, it does however require a password.

## How to add clients

> **Note**: All fields marked with a * or ** indicates a mandatory field.

    * - Indicates a required field which means that it cannot be left blank.
    ** - Indicates that one of the fields are required.

1. Log in to your OpenHIM console.
1. Click on `Clients` found in the left navigation menu.
1. Click on the button labelled `+ Client` to open a popup window where you will be able to supply the client details.
1. Capture the client details.
1. Assign an existing role or enter a name for a new role which will be created and linked to this client.
1. You may choose to make use of a basic auth password or client certificate, depending on your OpenHIM configuration. If basic auth is enabled in the OpenHIM core configuration, then only a password is required and if mutual TLS authentication is enabled, then only a client certificate is required:
   - _Certificate_: You may choose one of the available client certificates from the `Client Certificate` drop down.
     > **Note**: This will only be possible if you have already configured one or more client certificates in the OpenHIM Console.
   - _Basic Auth Password_: Enter a `Basic Auth Password` and confirm it by retyping it in the confirm password textbox.
1. Click on the `Save Changes` button to save your new client.

> **Note**: When a client certificate is added or updated in the certificates component of the OpenHIM, the OpenHIM console will inform the OpenHIM administrator that a server restart is required. This is for the new certificate to be applied correctly. The user can either decide to manually restart the server at a later time or to click the red `Restart Server Now!` button.

## How to remove clients

1. Log in to your OpenHIM console.
1. Click on `Clients` found in the left navigation menu.
1. Locate the client to be removed and click on the red `X` button on the far right.
1. You will be prompted to confirm your action to delete the chosen client.
1. Click on the `Delete` button.

> **Note**: This action automatically deletes the role if the role was created primarily for the client that is busy being deleted with no other clients sharing the same role.

## How to edit clients

1. Log in to your OpenHIM console.
1. Click on `Clients` found in the left navigation menu.
1. Locate the client to be edited.
1. Click on the amber button that looks like a pencil on the far right.
1. Update the client information as required.
1. Click on the `Save Changes` button to update the client.

## Client Roles

The purpose of these roles is to act as a list of authorised user groups which are allowed to access and use a given channel. These roles are generally assigned during the creation process when adding a new client.

The following rules apply to roles:

- A role may be assigned to one or more clients.
- When a role is deleted, all clients referencing this role will be automatically updated by unlinking the role.
- A client may be associated with one or more roles.

### How to use roles

`Roles` allow the OpenHIM administrator to quickly and effortlessly enable or disable channels to which a role has access. The purpose and use of channels will be covered a little later in this document.

### How to add roles

1. Log in to your OpenHIM console.
1. Click on `Clients` found in the left navigation menu.
1. Click on the green `+ Role` button.
1. Notice the creation of the new line item.
1. Specify a name for the role in the empty white box.
1. Enable any of the available channels that the role needs to use.
1. Click on the yellow button that looks like a floppy disk to save the role.

> **Note**: By default all channels are disabled at the point of creation.

### How to remove roles

1. Log in to your OpenHIM console.
1. Click on `Clients` found in the left navigation menu.
1. Locate the role to be deleted under the Roles section.
1. Click on the red `X` button.
1. You will be prompted to confirm your action to delete the chosen client.
1. Click on the `Delete` button.

> **Note**: All clients referencing this role will be automatically updated by unlinking the role.

### How to edit roles

1. Log in to your OpenHIM console.
1. Click on `Clients` found in the left navigation menu.
1. Under the Roles section, Enable or disable channels to be used by the role by clicking on either the green `✓` or the red `X`.
   > **Note**: You will not see the green `✓` or the red `X` if you don't have any channels configured.
1. The changes are automatically saved.

> **Note**: A `✓` means enabled whereas a `X` means disabled.
