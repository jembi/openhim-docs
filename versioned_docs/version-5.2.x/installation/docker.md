---
id: docker
title: Install via Docker
sidebar_label: Install via Docker
keywords:
  - openhim
  - docker
  - docker-compose
  - install
---

The following steps will guide you through the process of installing the OpenHIM using docker images.

1. Install **Docker** via terminal `curl https://get.docker.com/ | sh -` Or install Docker using the link below, follow all the steps and most importantly, ensure that there is no previous docker installed while following these instructions. (<https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#install-using-the-repository>)
1. Install **Docker Compose**, follow all the steps and use the recommend example version to install which is their latest stable release: <https://docs.docker.com/compose/install/#install-compose>
1. Install Git `sudo apt-get install git`
1. Clone the repository for setting up a docker image `git clone https://github.com/jembi/openhim-common.git`
1. Navigate into the repo `cd openhim-common`
1. Build the docker images `docker-compose build && docker-compose up -d`
1. Access the OpenHIM Console on <http://localhost:9000>

> **Note**: To configure the IP address the user must do the following `sudo nano default.json` edit the hostname to be that of the IP address of the docker image.
