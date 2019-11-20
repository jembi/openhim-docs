/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  "docs": {
    "Introduction": [
      "introduction/about", 
      "introduction/key-components", 
      "introduction/roadmap", 
      "introduction/community"
    ],
    "Installation": [
      "installation/manual", 
      "installation/docker", 
      "installation/npm", 
      "installation/virtual-machine", 
      "installation/console-configuration"
    ],
    "Tutorial": [
      "tutorial/prerequisite", 
      "tutorial/installation", 
      "tutorial/configuration", 
      "tutorial/mediator"
    ],
    "User Guide": [
      "user-guide/overview",
      "user-guide/basic-configuration",
      "user-guide/adding-users",
      "user-guide/transaction-list",
      "user-guide/alerting-reports",
      "user-guide/polling-channels",
      "user-guide/certificates-keystore",
      "user-guide/mediators",
      "user-guide/sample-disaster-recovery-procedure",
      "user-guide/openhim-core-versioning-and-compatibility",
      "user-guide/auditing"
    ],
    "Developer Guide": [
      "dev-guide/design-overview",
      "dev-guide/design-details",
      "dev-guide/openhim-development",
      "dev-guide/developing-mediators",
      "dev-guide/restful-api",
      "dev-guide/contributing"
    ],
    "Implementations": [
      "implementations/datim", 
      "implementations/mhero", 
      "implementations/momconnect", 
      "implementations/openhie"
    ],
    "How to": [
      "how-to/setup-and-configure",
      "how-to/openhim-core-release",
      "how-to/openhim-console-release",
      "how-to/build-centos-rpm-package",
      "how-to/install-on-centos",
      "how-to/setup-ssl",
      "how-to/pre-package-offline-release",
      "how-to/run-openhim-using-vagrant",
      "how-to/run-openhim-on-startup",
      "how-to/export-import-configuration",
      "how-to/setup-basic-cluster",
      "how-to/manually-install-on-ubuntu-trusty",
      "how-to/manually-install-on-windows",
      "how-to/build-openhim-documentation"
    ]
  },
  "api": {
    "Introduction": ["api/introduction/welcome"],
    "Audits": [
      "api/audits/create", 
      "api/audits/read", 
      "api/audits/update", 
      "api/audits/delete"
    ],
    "Certificates": [
      "api/certificates/create", 
      "api/certificates/read", 
      "api/certificates/update", 
      "api/certificates/delete"
    ],
    "Channels": [
      "api/channels/create", 
      "api/channels/read", 
      "api/channels/update", 
      "api/channels/delete"
    ],
    "Clients": [
      "api/clients/create", 
      "api/clients/read", 
      "api/clients/update", 
      "api/clients/delete"
    ],
    "Import/Export": [
      "api/import-export/create", 
      "api/import-export/read", 
      "api/import-export/update", 
      "api/import-export/delete"
    ],
    "Roles": [
      "api/roles/create", 
      "api/roles/read", 
      "api/roles/update", 
      "api/roles/delete"
    ],
    "Tasks": [
      "api/tasks/create", 
      "api/tasks/read", 
      "api/tasks/update", 
      "api/tasks/delete"
    ],
    "Transactions": [
      "api/transactions/create", 
      "api/transactions/read", 
      "api/transactions/update", 
      "api/transactions/delete"
    ],
    "Users": [
      "api/users/create", 
      "api/users/read", 
      "api/users/update", 
      "api/users/delete"
    ]
  }
};