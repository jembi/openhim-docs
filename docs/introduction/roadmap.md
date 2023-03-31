---
id: roadmap
title: Roadmap
sidebar_label: Roadmap
keywords:
  - OpenHIM
  - Roadmap
description: The OpenHIM's roadmap
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## OpenHIM Roadmap

### Scope

The OpenHIM roadmap covers four key functional areas, aiming to serve the needs of both new and existing implementations and ensuring that project-specific features and support requests are built into the core product to be made available across implementations.

#### Console and Core

This covers features of the core OpenHIM product, including user experience improvements, improvements to containerizing and orchestrating deployment of the OpenHIM, routing engine refactoring to allow for optimisation of transaction handling and processing towards improved performance, support for alerting and transaction replays to rerun past messages in the stream and perform new calculations or re-execute logic that failed previously.

#### Mediator Library

This covers features related to improved development and deployment of OpenHIM mediators, including advancements to the OpenHIM mapping mediator, DHIS2 Tracker mediators, and others to support common HIE use cases and alignment with the OpenHIE specification, containerizing and orchestrating deployment of OpenHIM mediators, and improved support for HL7 FHIR data exchange in line with the increased maturity of FHIR and adoption of the standard by the OpenHIE community.

#### Modernization

Product modernization is aimed at keeping the OpenHIM technology and dependency stack up to date, ensuring application security and leveraging performance and reliability improvements as the tools in the technology stack advance. This includes updating packages and interdependencies in the OpenHIM to patch potential security flaws and vulnerabilities, and enable compatibility with newer versions of underlying software e.g. Node.js and MongoDB. These efforts aim to improve the scalability of the OpenHIM, and allow for more secure handling of payloads using fewer resources in support of the rollout and ongoing maintenance of OpenHIM implementations.

#### Support and Maintenance

This covers ongoing support for OpenHIM implementations and the user community, including updates to OpenHIM deployment processes and end user documentation, support channels and tutorials that allow implementers to more easily and effectively set up, configure and maintain their instances of the OpenHIM.

### Timeline or 2023

<img alt="OpenHIM Roadmap" src={useBaseUrl('img/roadmap2023.png')} />
