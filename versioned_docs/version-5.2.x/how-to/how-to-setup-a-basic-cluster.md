---
id: setup-basic-cluster
title: Setup a basic cluster
sidebar_label: Setup a basic cluster
keywords:
  - OpenHIM
  - Basic cluster
description: Setup a basic cluster for the OpenHIM
---

The OpenHIM Core is designed to be horizontally scalable. This means that if you need better performance, you can easily fire up more core instances. In this tutorial we will look at setting up a small, basic cluster of core instances.

## Background

The OpenHIM Core is built in Node.js and it is important to note that node uses a [single threaded model](http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/). The threading model is designed for I/O bound processes - perfect for the OpenHIM - however this can lead to a single instance of core quickly becoming a bottleneck on very high transaction loads. In addition, a core single instance wouldn't take advantage of multiple cores on a CPU. We recommend that one OpenHIM instance, on a dedicated server, is used for every available CPU core. Besides, it would be useful to be able to run multiple core instances on multiple servers as well.

## Clustering on a single server

Luckily, since v1.2.0 of the OpenHIM, clustering on a single server is supported out of the box. So, setup is easy. All you need to do is run the OpenHIM with a flag to let it know you want to cluster:

```sh
openhim-core --cluster={n}
```

`n` is the number of instances that you want to run (eg, 2, 4 or 6) or it can be the special value of **auto** where the OpenHIM will determine how many core your server has and run that many instances. Each instance that the OpenHIM starts shares the same ports and the OpenHIM will share load between all of these instances.

## Clustering over multiple servers

The approach we are taking towards scaling out the OpenHIM Core to multiple server is also straight forward. We will start up 4 instances on separate servers and setup load-balancing between them. For this tutorial we will look at using [LVS](http://www.linuxvirtualserver.org/) on Ubuntu for load-balancing, but other options exist as well:

- [NGINX](http://nginx.com/) - A very powerful load-balancer and web server. Note however that TCP load-balancing is only supported in their NGINX Plus commercial product. However http load-balancing can still be used, but can become more complex if you want to use https channels on the HIM.
- [node-harmony](https://www.npmjs.com/package/node-harmony)
- [loadbalancer](https://www.npmjs.com/package/loadbalancer)

First, install the OpenHIM on each server and grab a copy of the config file if you wish to use a non-default configuration:

```sh
npm install -g openhim-core $ wget https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json
```

Next, startup each instance on each server, you may also use the `--cluster` option if you require.

```sh
nohup openhim-core --cluster=auto
```

Now we can setup the load-balancer. If not already available, install the LVS Admin tool on the server that will act as you load balancer:

```sh
sudo apt-get install ipvsadm
```

Now we'll setup round-robin balancing and add each node to the cluster:

```sh
sudo ipvsadm -A -t 10.0.0.1:5000 -s rr

sudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.2:5000 -m

sudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.3:5000 -m

sudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.4:5000 -m

sudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.5:5000 -m

```

Replace the 10.0.0.x addresses with your servers' IP addresses. You can also follow these steps for the HTTP ports and the API ports (although another good strategy with regard to the API is to run another dedicated core instance and point the Console there). And that's it! Try running several transactions against your server on HTTPS - they should be load-balanced between the four instances AND each instance will itself be clustered on the server that it is running! This should allow you to handle MASSIVE load with ease.
