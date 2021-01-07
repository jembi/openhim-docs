---
id: key-components
title: Key Components and What They Do
sidebar_label: Key Components
keywords:
  - OpenHIM
  - Key components
description: The OpenHIM key components
---

The OpenHIM logically consists of three components:

* The OpenHIM Core provides the main functions and services
* The Administration Console provides an easy to use interface for system administrators to configure and manage the OpenHIM, giving a window into the workings of the HIE.
* Mediators are additional services used to extend the functionality of the OpenHIM by transforming and orchestrating transactions.

## The OpenHIM Core

The OpenHIM Core provides the key functions and services required for an interoperability layer that are useful in a Service Oriented Architecture (SOA) environment. A service-oriented architecture is essentially a collection of services that communicate with each other. The communication can involve either simple data passing or it could involve two or more services coordinating an activity. The OpenHIM is used to connect these services to each other: it provides an interface that point of service applications (clients) are able to contact in order to reach the services provided in the SOA. You can think of this interface as a reverse proxy for your applications but with some special features.
The functions of the OpenHIM Core are identified as follows:

* Basic Routing - A routing mechanism that routes requests received to the correct upstream service.
* Log Service and Audit Repository- This service stores each message in its entirety along with metadata about the message, such as the time and the date the message was received, who sent the message, what information was requested  and the response that the service returned, as well as error information when available.
* Authorization and Authentication - The OpenHIM Core ensures that the client system requesting or submitting information is known and has the correct privileges to do so.
* Error Monitoring - Displaying and monitoring errors that occur between the services, including email and SMS alerting.
* Transaction ReRunning - Replays transactions by resending them to its target service(s). Transactions can also be rerun automatically if a service is unavailable.
* Transaction Metrics -  Calculations of statistics such as the number of transactions in a specific period.
* Mediator framework - The OpenHIM-core also provides a framework to add and manage your own implementation specific mediators in the system.

## Mediators

OpenHIM mediators are separate micro services that run independently from the OpenHIM Core and perform additional mediation tasks for a particular use case. Mediators can be built using any platform or language fit for the requirement. The Core defines interfaces that mediators use to communicate and exchange metadata with the Core, both at a transaction-level as well as general configuration for the mediator. Mediators can also use these interfaces to send their "availability" status to Core for monitoring purposes.
There are three types of mediators:

* Pass-through mediator - Accepts a request and passes it on unchanged.
* Adaptor mediator - Accepts a request and transforms/adapts the request into another format before sending the request on to its final destination e.g. transform HL7 v2 to HL7 v3 or transform MHD to XDS.b.  Adapters are used to simplify communication with the domain services and also to adapt a standards-based interface to a custom domain service interface.
* Orchestration mediator - Accepts a request and uses that request to execute a business function that may need to call out to other service endpoints on other systems e.g. enriching a message with a client’s unique identifier retrieved from a client registry.
These services are invoked whenever there is a need to orchestrate or adapt a certain transaction. If they are not needed the OpenHIM core component will call the domain service directly.  Orchestrators may use other adapters to send messages to other services.
As the architecture is designed to evolve as the environment changes, designing these orchestrators and adapters as independent services allows for additional logic or business processes to be added as the need arises.  Mediators are often implementation specific so they will change to meet the specific needs and business processes of the system.  A mediator library is available so that existing mediators can be re-used or adapted as needed.
Both the orchestrator and adapter services are also expected to log and audit messages that they send out to the domain services.
These services are implemented as mediators within the OpenHIM.

## OpenHIM Administration Console

The admin console is a web-based user interface that provides visual tools to assist administrators interacting with the OpenHIM Core.
for maintenance and monitoring. Administrators use the console to set up users and roles for the client systems that will be sending.
and receiving the information, and to configure the channels and routes that the information will pass through. Administrators can also monitor the OpenHIM transactions via the console and re-run failed transactions if necessary.
The main functions of the OpenHIM console are:

* Creation and management of client users and groups
* Configuration  of  clients, channels and routes
* Transaction monitoring
* Auditing of system interactions
* Error management

The OpenHIM console consists of:

1. Dashboard - This is the first page that an administrator sees when launching the OpenHIM console. The dashboard provides metrics about activities taking place in the system such as:

    * The number of active channels that transactions pass through
    * The transaction load
    * The average response time the system took to complete a transaction
    * The transaction statuses, which reflect the successful transactions as well as those unsuccessful transactions that have been flagged
    as failed or completed with errors.

2. Transaction Log
    This is where the administrator monitors transactions for each server in the domain. The transaction log provides transactions details such as timestamps, transaction ID, status, channel, client, etc. The administrator can filter through the transaction log using the status of the transaction, channels, date range, units and transactions that were re-run after they failed.

3. Audit Log
    The audit log registers system interactions and shows a history of every task performed.
    Event Action/Outcome - the action the administrator performed and the outcomes generated from the action
    Event Type - details about the change, such as the new group's email address or the user account name that was deleted.
    Event ID - the ID of the administrator who performed the event.
    Source ID - the internet protocol (IP) address used by the administrator to sign in to the admin console. This might reflect the administrator's physical location, but not necessarily. For example, it could instead be a proxy server or a virtual private network (VPN) address.
    Event Date and Time - The date and time the event occurred.

4. Manage Clients, Channels, Tasks and Contacts
    This is where administrators manage clients and their roles. Clients are any external system that is authorised to send requests to and receive information from the OpenHIM e.g. laboratory systems, medical record systems, financial systems, etc.  Clients may be added for each system that needs  to access the OpenHIM's routing capabilities. Clients may also be assigned  to roles for easier channel access management.
    Client’s details will reflect the ID, Name, Organisation, Description, Contact Person, Domain and the Roles of the client system.
    A channel in the OpenHIM captures a request that matches the channel configuration and routes those requests to one or more routes as defined. The response from the primary route will be returned to the request sender as soon as the OpenHIM receives it.
    The administrator is able to view current and previous tasks that rerun a set of selected transactions. Transaction reruns can be executed from the transaction log. These tasks track the current task status and display information about which transactions are part of each rerun task.

5. Visualiser
    The visualizer displays a live view of how transactions are being routed through the OpenHIM. Multiple visualizers can be created and these can be  shared among admin users.

6. View Mediators from the Console
    Mediators are add on services that run separately from the OpenHIM. They register themselves with the OpenHIM and once that is done they will be displayed here and their configuration details may be modified. If a mediator is registered it is possible to add routes that point to it in the channel configuration.
    Mediation modules operate on messages that are on-boarded between service requesters and service providers. The administrator is able to route messages to different service providers and to amend message content or form. Mediation modules can provide functions such as message logging and error processing that is tailored to specific requirements.

7. Manage Users and Certificates
    Administrators can add, view, edit and delete users and manage the groups that a user is assigned to. A summary of the user’s channel permissions is also displayed. Channel permissions can be altered in each channel's configuration. A user can have these permissions:

    * Allowed to View Transactions
    * Allowed to View a Transaction's Body
    * Allowed to Rerun Transactions

    Some users may be required to authenticate their credentials using a digital certificate instead of using passwords.
    A new OpenHIM server certificate may be added or generated and trusted client certificates can also be added or edited.

8. Export and Import OpenHIM configuration.
    It is possible to import and export the OpenHIM's configuration in the form of a JSON file.
