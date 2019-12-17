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

## Exporting

Follow the steps below to export and import the server metadata configuration manually. By default, the Users, Channels, Clients, ContactGroups and Mediators collections will be exported.
Copy the file [openhim-configuration-export.sh](https://github.com/jembi/openhim-core-js/blob/master/resources/openhim-configuration-export.sh) to a folder where you wish your export to be saved. Run the shell scrip by executing the following command:

```sh
./openhim-configuration-export.sh
```

Your exported collections should be located in the folder structure '/dump/openhim/'.

> For full import/export API details see [here](../api/import-export/overview).

## Importing

To import you data successfully ensure that you are in the correct folder where the dump files are located. Execute the below command to import your collections.

```sh
mongorestore --db openhim dump/openhim
```

NB! if you have changed your database name, then do so for the export/import as well.
NB! Please ensure that you stop the server before exporting and importing.

## Export/import from the OpenHIM Console

Export/import can now be done directly from the OpenHIM console which may be easier.

Navigate to the `Export/Import` page on the console.

### Export

To export your configuration, open the relevant drop downs to check that the desired configs are selected (all configs are selected by default). Deselect any unwanted settings. Then `click Generate Export Script`. See below for expected screen.

<img alt="export/import screen" src={useBaseUrl('img/tutorial/import-export.png')}/>

### Import

To import config drag and drop your export file, generated from the desired OpenHIM instance, into the specified box.
