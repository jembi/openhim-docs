---
id: prerequisites
title: Prerequisites
sidebar_label: Prerequisites
keywords:
  - OpenHIM
  - Prerequisites
description: OpenHIM installation prerequisites
---

To easily get started with implementing the OpenHIM Core and Console and to start playing with the various features we can follow the below steps to get a local OpenHIM environment setup.

> Don't have time to setup? Try our **sandbox** environments! See the links in the footer.

The below method of spinning up the OpenHIM makes use of [Docker containers](https://www.docker.com/resources/what-container) that allows for easier deployments of the OpenHIM.

We will need to install some software that will allow us to spin up the OpenHIM with ease. We will be using [Docker](https://www.docker.com/) which is a container management service to create our OpenHIM instance.

## Install Docker

Docker is the engine that will be running our entire local OpenHIM instance by using the publicly available OpenHIM core and console images. To install Docker please follow the relevant steps based on the operating system you are using as described in the below link

To [install Docker](https://docs.docker.com/install/) please follow the relevant steps as described within the install documentation

## Install Docker Compose

Now that we have Docker installed on our machine, we will also need to install Docker Compose which is an additional service that makes use of our below `docker-compose.yml` file and builds the relevant containers for us to have our OpenHIM instance up and running. The OpenHIM can be setup and configured without these steps however manually creating the relevant Docker containers requires more advanced knowledge of Docker.

To [install Docker Compose](https://docs.docker.com/compose/install/) please follow the relevant steps as described within the install documentation.

## Docker Compose file

Before we can use Docker to build our OpenHIM instance, we need to create a `docker-compose.yml` that will contain our instructions for pulling the correct OpenHIM [Core](https://hub.docker.com/r/jembi/openhim-core) and [Console](https://hub.docker.com/r/jembi/openhim-console) images from [Jembi's Dockerhub profile](https://hub.docker.com/r/jembi/)

The `docker-compose.yml` can be downloaded from the [OpenHIM core repository](https://github.com/jembi/openhim-core-js/blob/master/infrastructure/docker-compose.yml), or you can copy/paste the below yaml code into a file named `docker-compose.yml`

```yml
version: '3'

networks:
  openhim:

services:
  mongo-db:
    container_name: mongo-db
    image: mongo:4.0
    networks:
      - openhim
    volumes:
      - "mongo-data:/data/db"
    restart: unless-stopped

  openhim-core:
    container_name: openhim-core
    image: jembi/openhim-core:latest
    restart: unless-stopped
    environment:
      mongo_url: "mongodb://mongo-db/openhim-development"
      mongo_atnaUrl: "mongodb://mongo-db/openhim-development"
      NODE_ENV: "development"
    ports:
      - "8080:8080"
      - "5000:5000"
      - "5001:5001"
    networks:
      - openhim
    healthcheck:
     test: "curl -sSk https://openhim-core:8080/heartbeat || exit 1"
     interval: 30s
     timeout: 30s
     retries: 3

  openhim-console:
    container_name: openhim-console
    image: jembi/openhim-console:latest
    restart: unless-stopped
    networks:
      - openhim
    ports:
      - "9000:80"
    healthcheck:
     test: "curl -sS http://openhim-console || exit 1"
     interval: 30s
     timeout: 30s
     retries: 3

volumes:
  mongo-data:
```
