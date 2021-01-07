---
id: alerting-reports
title: Alerting and reports
sidebar_label: Alerting and reports
keywords:
  - OpenHIM
  - Alerts
  - Reports
description: Alerting and reporting on the OpenHIM
---

The OpenHIM supports alerting users via email or sms under specific conditions. It is also able to send out daily and weekly reports about the transactions that it has processed. In the following section we explore these functions in more detail.

## Failure alerting

Alerts can be sent out to a group of users when a particular http status code is received as a response to a transaction. To setup alerts, edit the channel that you wish to enable alerts for and select the 'Alerts' tab. On this tab you can add rules for when alerts are sent out. You must specify on which http status code you want the alerts to trigger (eg. 401). You can even specify a range like 4xx for any status codes in the 400-499 range. You may also optionally set a failure rate. This allows you to only trigger alerts if the rate of failure is above the percentage that you specify. Alerts are sampled at 1 min intervals.

To ensure that alerts are sent to the right group of people, you must specify the users or contact list. You may choose individual users or choose to add an entire contact list of users. Contact lists can be managed through the 'Contact lists' option on the main menu.

You may add as many alerts as you need and as many users and contact lists as you require for each alert.

## Reports

The OpenHIM can also produce daily and weekly reports for users. These will contain information such as how many requests were processed and how many of those were successful or how many failed. There are two ways to setup reporting. A user may enable reporting on their profile (click on the username on the top right and choose profile, then enable the reports that you wish to receive) or an admin user can enable reporting for any other user. By default, the daily reports are sent at 7am the following day and the weekly reports are sent out at 7am each Monday for the previous week.
