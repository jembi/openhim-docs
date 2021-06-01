---
id: openhim-development
title: Getting started with OpenHIM development
sidebar_label: Getting started with OpenHIM development
keywords:
  - openhim
  - getting started
  - development
description: Getting started with the OpenHIM
---

This guide describes how to get a development environment up for the OpenHIM-core and the OpenHIM-console.
This guide assumes you are running a **Linux** environment.

> If you're only interested in playing around with the OpenHIM perhaps checkout our **sandbox environments**! Links in the footer.

## Setting up your OpenHIM-core dev environment

### Prerequisites

To follow this guide you will need internet access and the following software installed:

- NodeJS v12
- npm
- git
- MongoDB v4.0

### Setup

#### Clone the OpenHIM Core

> If you are planning to contribute to the OpenHIM Core please fork the repository and create a pull request!

Clone the repo onto your local machine with the following:

```sh
git clone https://github.com/jembi/openhim-core-js.git
```

Next, download all the required dependencies using `npm`. Navigate into the openhim-core-js directory and run the following:

```sh
npm install
```

Then start the project (MongoDB should already be running with the default port exposed):

```sh
npm start
```

The server will by default start in production mode using the mongodb database 'openhim'. To start the serve in development mode use the following:

`NODE_ENV=development npm start`

This uses of the development mongodb database called 'openhim-development'.

This project uses [mocha](https://mochajs.org/) as a unit testing framework with [should.js](https://github.com/visionmedia/should.js/) for assertions and [sinon.js](http://sinonjs.org/) for spies and mocks. The tests can be run using:

 ```sh
 npm test

 npm run test:unit // Unit tests

 npm run test:int // Integration tests
 ```

## Setting up your OpenHIM-console dev environment

### Prerequisites

To follow this guide you will need internet access and the following software installed:

- NodeJS v12
- npm
- git
- MongoDB v4.0

### Setup

#### Clone the OpenHIM Console

> If you are planning to contribute to the OpenHIM Core please fork the repository and create a pull request!

Clone the repo onto your local machine with the following:

```sh
git clone https://github.com/jembi/openhim-console.git
```

Next, download all the required dependencies using `npm`. Navigate into the openhim-console directory and run the following:

```sh
npm install
```

Then start the project (OpenHIM Core should already be running):

```sh
npm start
```

Navigate to the default console development url at <http://localhost:9000>. and login.

```txt
username: root@openhim.org
password: openhim-password
```
