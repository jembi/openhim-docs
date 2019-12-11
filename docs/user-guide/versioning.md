---
id: openhim-core-versioning-and-compatibility
title: OpenHIM Core versioning and compatibility
sidebar_label: OpenHIM Core versioning and compatibility
---

The [OpenHIM Core component](https://github.com/jembi/openhim-core-js) uses [Semantic Versioning](http://semver.org/). This means that if a specific software component, such as the OpenHIM Console or a Mediator states that it is compatible with Core version 5.2 for example, it means that:

- At a minimum the component is compatible with Core version 5.2 but is NOT guaranteed to work with a lower version of Core such 5.1
- The component WILL be compatible with any patch version in its release range, such as Core 5.2.1 or Core 5.2.2, even if the component was developed against a higher patch number such as 5.2.3
- The component WILL be compatible with Core 5.x, such as version 5.3 or 5.4, since these versions are backwards compatible with lower versions
- The software component is NOT guaranteed to work with Core 6.0 or higher, however this doesn’t preclude the possibility that it CAN work.
