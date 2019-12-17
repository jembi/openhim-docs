---
id: mediators
title: Mediators
sidebar_label: Mediators
keywords:
  - OpenHIM
  - Mediators
description: Manage OpenHIM mediators
---

`Mediators` can be built using any platform that is desired. The only restriction is that the mediator MUST communicate with the OpenHIM core in a particular way. Mediators must register themselves with the OpenHIM core, accept request from the OpenHIM core and return a specialised response to the OpenHIM core in order to explain what that mediator did.

## Add a mediator

Mediators are add-on services that run separately from the OpenHIM. They register themselves with the OpenHIM and once that is done, they will be displayed in the OpenHIM where their configuration details may be modified. Also, if a mediator is registered it will allow you to easily add routes that point to it in the channel configuration.

Mediators may be developed in any language and only talk to the OpenHIM via its RESTful API. Therefore, the installation instructions will differ for each mediator. Please refer to the documentation of that mediator for details on how to install it. However, there are best practices that apply to all mediators.

The following are best practices in regard to the setup of mediators:

1. Mediators do not have to be installed on the same server as the OpenHIM.
1. Ensure that the mediator is able to reach the OpenHIM core servers’ RESTful API endpoint.
1. Ensure that the OpenHIM is able to reach the mediator’s endpoint for receiving requests.
1. Ensure that you configure the mediator with correct credentials so that it may access the OpenHIMs RESTful API as an admin user.
1. Ensure that the mediator trusts the OpenHIMs core certificate (if it is self signed) as API communication must take place over https.
