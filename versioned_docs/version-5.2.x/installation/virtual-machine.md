---
id: virtual-machine
title: Install on a Virtual Machine
sidebar_label: Install on a Virtual Machine
keywords:
  - openhim
  - virtual machine
  - installation
  - ubuntu
description: Install the OpenHIM on a virtual machine
---

When installing the OpenHIM on a VM that is running on your local machine, please take note of the following.

> Oracle's [VirtualBox](https://www.virtualbox.org/) is **recommended** for the setup of VMs.

## Server Edition Linux

If you are running a server edition of Linux such as Ubuntu 16.04 LTS as a VM, you will need to configure a static IP address (or use DHCP if your network has a DHCP server) that falls within the same network block as the rest of your network. If your local machine is not part of a network, make sure that the network block for your local machine matches that of the VM.

For example, if your local machine IP address is 192.168.1.5 then the network block is 192.168.1.0 with a subnet mask of 255.255.255.0. This means that the hostname for the OpenHIM must contain the first three octets that is 192.168.1. The last octet must be unique such as 192.168.1.6.

When asked to configure the OpenHIM console during the OpenHIM installation process, you will need to specify the IP address which is the same IP address that has been assigned to the VMs eth0 interface.

- To verify the `eth0` IP address, run the command `ifconfig -a`
- To change your `eth0` network configuration, run the command `sudo vi /etc/network/interfaces`

You may also need to configure your local machine (the machine running the VM instance) network settings for the VM by changing the network adapter type to 'bridged' so that internet services will be possible as well as to access the OpenHIM console via your local machine internet browser.

> **Note**: This happens within the VM software itself, not in the installed server edition of linux.

## Desktop Edition Linux

If you are running a desktop edition of Linux such as Ubuntu 14.04 LTS as a VM, you will be able to logon to the OpenHIM console directly from the VM by using localhost as your configured hostname.

Should you wish to access the OpenHIM console from your local machine, please follow the steps in [Server Edition Linux](#server-edition-linux).
