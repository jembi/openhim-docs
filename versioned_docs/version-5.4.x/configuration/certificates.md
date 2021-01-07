---
id: certificates
title: Certificates
sidebar_label: Certificates
keywords:
  - openhim
  - certificates
  - config
description: Manage OpenHIM certificates
---

The OpenHIM has a built in capability to manage TLS certificates and keys through its keystore. You can upload a certificate and key that you have bought from a certificate authority such as [Thwate](https://www.thawte.com/) or you can generate your own self signed certificate to use in your private OpenHIM implementation. While both mechanisms are secure, it is suggested that you purchase a certificate from a trusted certificate authority to save you some unwanted difficulty with self signed certificates.

The OpenHIM also allows you to trust particular certificates. This allows you to specify exactly which client or external hosts you trust and it ties in with the OpenHIMs authentication mechanism for clients.

## How to add certificates

### Server Certificate & Key

To upload an OpenHIM server certificate, simply drag and drop both the certificate and key into the correct boxes on the certificates page. Once done, you will be asked to restart the OpenHIM for this to take effect. The OpenHIM will also warn you if the key and certificate pair that you have uploaded do not match.

> **Note**: Do not restart the server if the certificate and key don’t match as this will prevent the server from being able to startup correctly and force you to fix this manually in the database. If your key requires a passphrase, be sure to submit that in the field provided as well.

### Generating a Server Certificate

To generate a self signed certificate, click on the `+ Create Server Certificate` button in the top right. This will guide you through the process of creating a certificate and key. It will also automatically add this to the server once you are done. Make sure you download the certificate and key when prompted as the key is not stored on the server for security reasons.

### Client Certificates

If you have some client certificates or host certificates that you want the OpenHIM to trust, you can add them by simply dropping them in the bottom box to have them uploaded. These certificates may be attached to clients when you edit a particular client from the clients page and enable clients to be authenticated when using mutual TLS. They may also be used on a route when editing a channel to trust a particular hosts certificate.

You may also add a client certificate by clicking on the `+ Create Client Certificate` button. You will be presented with a 8 fields to fill in (only two are required). Once you've clicked `Create Certificate`, two buttons will be available for you to download the key and cert files respectively. Store these files somewhere safe then close the prompt. To use these new certs the OpenHIM Core will need to be restarted. The restart button will be available at the top of the **Certificates** page.

## How to remove certificates

1. Log in to your OpenHIM console.
1. Click on `Certificates` found in the left navigation menu.
1. Locate the certificate to be deleted.
1. Click on the red `X` button.
1. You will be prompted to confirm your action to delete the chosen certificate.
