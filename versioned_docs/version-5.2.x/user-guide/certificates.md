---
id: certificates-keystore
title: Certificates & Keystore
sidebar_label: Certificates & Keystore
keywords:
  - OpenHIM
  - Certificates
  - Keystore
description: Manage OpenHIM certificates and keystore
---

The OpenHIM has a built-in capability to manage TLS certificates and keys through its keystore. You can upload a certificate and key that you have bought from a certificate authority such as Thwate or you can even generate your self-signed certificate to use in your private OpenHIM implementation. Both mechanisms are secure, however, we suggest that you purchase a certificate from a trusted certificate authority to save you some pain with self-signed certificates.

The OpenHIM also allows you to trust particular certificates. This allows you to specify exactly which client or external hosts you trust and it ties in with the OpenHIM's authentication mechanism for clients.

## Server certificate & key

To upload an OpenHIM server certificate, simply drag and drop the certificate and key onto the correct boxes within the certificates page. You will be asked to restart the OpenHIM for this to take effect. The OpenHIM will also warn you if the key and certificate pair that you have uploaded do not match. **DO NOT** restart the server if these don't match. It will prevent the server from being able to startup correctly and you will have to fix this manually in the database. If your key requires a passphrase be sure to submit that in the field provided as well.

### Generating a server certificate

To generate a self-signed certificate click on the '+ Create Server Certificate' button in the top right. This will guide you through the process of creating a certificate and key and it will automatically add this to the server once you are done. Make sure you download the certificate and key when prompted. For security reasons, the key is not stored on the server.

## Client certificates

If you have client or host certificates for the OpenHIM, drop them into the bottom box on the certificates page to upload them. These certificates may be attached to clients when you edit a particular client from the client's page. This allows clients to be authenticated when using mutual TLS. They may also be used on a route when editing a channel to trust a particular host's certificate.

### Generating a trusted client certificate

You may generate a client certificate by clicking the '+ Create Client Certificate' button and following the steps. Download the certificate and key when prompted as the key is not stored on the server for security reasons.
