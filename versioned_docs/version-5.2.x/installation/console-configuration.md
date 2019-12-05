---
id: console-configuration
title: Console Configuration
sidebar_label: Console Configuration
---

The OpenHIM console is accessible by navigating to your web server.

> **Note**: The default port for the OpenHIM console is port **80**. It is possible to change this port in your NGINX configuration file. See [How to update your NGINX Config file](#how-to-update-your-nginx-config-file) for instructions on how to do this.

For example, assuming your web server host is your local machine, the Uniform resource Locator (URL) will be <http://localhost:80/>. The default OpenHIM administrator login credentials are as follows. Upon logging in, you will be prompted to customize your credentials so that it is more secure:

- Username: root@openhim.org
- Password: openhim-password

> **Note**: You will have problems logging in if your OpenHIM server is still setup to use a self-signed certificate (the default). Please see section **How to Generate a free Let’s Encrypt (letsencrypt) certificate** which identifies the steps necessary to generate a free certificate. If you choose to do this later, you may get around this by following these steps:

1. Visit the following link: <https://localhost:8080/authenticate/root@openhim.org> in Chrome.
   > **Note**: Make sure you are visiting this link from the system that is running the OpenHIM core. Otherwise, replace localhost and 8080 with the appropriate OpenHIM core server hostname (or IP Address) and API port.
1. You should see a message saying “Your connection is not private”. Click “Advanced” and then click “Proceed”.
1. Once you have done this, you should see some JSON text displayed on the screen, you can ignore this and close the page. This will ignore the fact that the certificate is self-signed.
1. Now, you should be able to go back to the OpenHIM console login page and login. This problem will occur every now and then until you load a properly signed certificate into the OpenHIM core server.

> The credentials used from this point will be considered the OpenHIM administrative account and is therefore highly recommended that you apply a strong password. General best practices in password creation that have been identified in this [article](https://www.symantec.com/connect/articles/simplest-security-guide-better-password-practices) may help you.

---

## How to update your NGINX Config file

The following steps guides you through the process of updating your NGINX config file for the purpose of changing the default listening port for the OpenHIM console:

1. Navigate to the NGINX config file `vim /etc/nginx/sites-enabled/openhim-console`
1. Add the following line directly after the curly bracket: listen 12345; // Where 12345 is the port number that you have chosen to use
1. Save and exit with the command :wq
1. Check your configuration for syntax errors `sudo nginx -t`
1. Refresh the NGINX config `service nginx reload`

Your NGINX configuration will then appear as follows:

```nginx
server {
  listen 12345;
  root /usr/share/openhim-console;
  index index.html;

  location / {
    try_files $uri $url/ =404;
  }
}
```

---

## How to Generate a free Let’s Encrypt (letsencrypt) certificate

> **Note**: This section only applies to OpenHIM installations that have a public facing domain name. If you are running the OpenHIM on your local machine or on a virtual machine, you may continue with the self-signed certificate.

You are able to generate a free certificate by following these steps:

1. Fetch letsencrypt certbot script and make it executable (These commands assume you are running as the root user):

   ```sh
   wget https://dl.eff.org/certbot-auto
   chmod a+x certbot-auto
   ```

1. Install certbot dependencies (If this fails and you have a small amount of ram then you may need to add a swapfile):

   ```sh
   ./certbot-auto
   ./certbot-auto certonly --webroot -w /usr/share/openhim-console -d <your_hostname>
   ```

1. Allow the openhim the ability to read the generated certificate and key:

   ```sh
   chmod 750 /etc/letsencrypt/live/
   chmod 750 /etc/letsencrypt/archive/
   chown :openhim /etc/letsencrypt/live/ /etc/letsencrypt/archive/
   ```

1. Change your OpenHIM cert config in /etc/openhim/config.json to the following:

   ```json
   "certificateManagement": {
     "watchFSForCert": true,
     "certPath": "/etc/letsencrypt/live/<your_hostname>/fullchain.pem",
     "keyPath": "/etc/letsencrypt/live/<your_hostname>/privkey.pem"
   }

   (or enter these details when asked during the OpenHIM installation)
   ```

1. setup auto renewal of the certificate:

   ```sh
   crontab -e
   ```

1. append the following line at the end of your crontab:

   ```text
   0 0 * * * /root/certbot-auto renew --no-self-upgrade >> /var/log/letsencrypt-renewal.log
   ```
