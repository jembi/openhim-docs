---
id: transaction-list
title: Transaction List
sidebar_label: Transaction List
keywords:
  - OpenHIM
  - Transactions
description: OpenHIM transactions
---

The **transactions** page is pretty straight forward. It shows a list of the most recent transactions that the OpenHIM has received. You are presented with a number of different filters (more are accessible by clicking the 'Toggle Advanced Filters' button).

You may select any transaction in the list to get more details on it. From here you can view the request and response details, re-run that transaction or view the different routes that it was sent to (if there are multiple).

If this transaction was routed though a mediator you may see some additional details such as the orchestrations that the mediator performed.

Each transaction is marked with a status that shows its processing state and whether the transaction was successful or not. Here is what each status means for a particular transaction:

- Processing - Waiting for a response from one or more routes
- Successful - The primary route and all other routes returned successful http response codes (2xx).
- Failed - The primary route has returned a failed http response code (5xx)
- Completed - The primary route or the other routes did not return a failure http response code (5xx) but some weren't successful (2xx).
- Completed with error(s) - The primary route did not return a failure http response code (5xx) but one of the routes did.

## Error resolution

If a transaction has failed or needs to be re-run, you may do so by either clicking on the transaction and choosing 're-run transaction' or you can perform a bulk re-run by selecting the desired transactions and choosing 're-run selected transactions'. You may also choose to re-run all transactions that match a particular filter. Filter by the desired parameters and click 're-run all transaction that match current filters'.

All bulk re-runs can be monitored on the Console's **Task** page.

> **Note:** the original transaction is always stored when a transaction is re-run, it is just marked as re-run. You will be warned if you try to re-run a transaction that has already been re-run as this could cause duplicate data in your system.
