---
id: configuration
title: Configuration
sidebar_label: Configuration
---

Once you have successfully installed the OpenHIM core and console and you are able to successfully access the console at [http://localhost:9000](http://localhost:9000) we can proceed to create a basic channel and client so that we can send a test request through the OpenHIM core successfully

A **Client** is usually some system that you want to able to send request to the OpenHIM. Setting up a **client** allows the OpenHIM to authenticate requests. A **Channel** defines a path that a request will take through the OpenHIM. It describes one more **routes** for the request to be forwarded to, which **clients** are allowed to use this **channel**, which requests are to be directed to this **channel** and many more options that allow you to controls what happens for a particular request.

To manage **clients** and **channels** you will need to log into the OpenHIM console and then you may follow the steps below.

**Note** - Only an Admin user has the permission to Add/Edit/Delete a **Client** or **Channel**

## Adding Clients

Follow the below steps to successfully create/update a **Client**

- Navigate to the **Clients** menu option found in the left sidebar.
- On the **Clients** page you will be presented with a list of all the created **Clients**
- Click on the blue "**+ Client**" button to open a popup modal box where you will supply the **Client** details **OR** click on one of the existing **Clients** to open up the popup modal with the **Clients'** saved details.
- Supply all the required fields (marked with a \*) and click the blue "**Save changes**" button when completed.

There are many fields that you may supply, to find a detailed explanation of all the available fields, please refer to the Clients documentation page

## Adding Channels

Follow the below steps to successfully create/update a **Channel**

- Navigate to the **Channels** menu option found in the left sidebar.
- On the **Channels** page you will be presented with a list of all the created **Channels**
- Click on the blue "**+ Channel**" button to open a popup modal box where you will supply the **Channel** details **OR** click on one of the existing **Channels** to open up the popup modal with the **Channels'** saved details.
- Supply all the required fields and click the blue "**Save changes**" button when completed.

The two _most_ important fields to supply are the **URL Pattern** field and the **Allowed roles and clients** field. The **URL Pattern** field describes which incoming requests should be send down this **channel**. It does this by looking at the URL of the incoming request and testing if it matches the RegEx that you supply in this field. Note, only the first matched **channel** that is found receives the request for processing. The **Allowed roles and clients** field identifies which **clients** are allowed to send requests to this **channel**. If a request matches a **channel** but the **client** system is not specified in this field or a **role** containing that the **client** belongs to is not specified in this field then the request will be denied access to the **channel**.

