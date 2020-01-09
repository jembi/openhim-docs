---
id: export-import-configuration
title: Export/import Configuration
sidebar_label: Export/import Configuration
keywords:
  - OpenHIM
  - Export
  - Import
  - Configuration
description: Export/import OpenHIM configuration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Export/import metadata from MongoDB

Follow the steps below to export and import the **server metadata configuration** manually. By default, the Users, Channels, Clients, ContactGroups and Mediators collections will be exported.

> Ensure that you **stop** the server before exporting and importing.

### Export

Copy the file [openhim-configuration-export.sh](https://github.com/jembi/openhim-core-js/blob/master/resources/openhim-configuration-export.sh) to a folder where you wish your export to be saved. Run the shell script by executing the following command:

```sh
./openhim-configuration-export.sh
```

> If your MongoDB Server and Mongo Client are different versions your may need to add `--forceTableScan` to the `mongodump` command in the script.

Your exported collections should be located in the folder structure '/dump/openhim/'.

> For full import/export API details see [here](../api/import-export/overview).

### Import

To import you data ensure that you are in the correct folder where the dump files are located. Execute the below command to import your collections.

```sh
mongorestore --db openhim dump/openhim
```

**Note:** If you have changed your database name, then do so for the export/import as well.

## Export/import metadata from the OpenHIM Console

Export/import can now be done directly from the OpenHIM console which may be easier.

Navigate to the `Export/Import` page on the console.

### Export

To export your configuration, open the relevant drop downs to check that the desired configs are selected (all configs are selected by default). Deselect any unwanted settings. Then `click Generate Export Script`. See below for expected screen.

<img alt="export/import screen" src={useBaseUrl('img/tutorial/import-export.png')}/>

### Import

To import config drag and drop your export file, generated from the desired OpenHIM instance, into the specified box.

## Export More Data

If you need to export more data from your OpenHIM instance, add the desired mongo collection names to the list in the export script using the export method described [above](#Export/import-metadata-from-MongoDB).

List of all OpenHIM MongoDb collections:

- agendaJobs
- alerts
- auditMeta
- audits
- autoretries
- channelAudits
- channels
- clients
- contactgroups
- dbversions
- events
- keystores
- log
- mediators
- metrics
- tasks
- transactions
- users
- visualizers

To add transactions to the data dump for example append the name `transactions` to the list in the script:

```bash
// openhim-configuration-export.sh

collections=(users channels clients contactGroups mediators transactions)
```
