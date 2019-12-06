---
id: create
title: Create Certificates
sidebar_label: Create
keywords:
  - OpenHIM
  - API
  - Certificate
  - Key
  - Create
description: Create OpenHIM Certificates and Keys via the API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Create Certificates and keys

### Set the OpenHIM key

To set the OpenHIM server key, you need to make a TLS request to the OpenHIM API for the below method and endpoint and supply a JSON object with the key.

```curl
Method: POST
Endpoint: {openhim_url}:8080/keystore/key
Payload: JSON object with the key
```

### Key Example

<Tabs
  defaultValue="lang"
  values={[
    { label: 'Languages', value: 'lang' },
    { label: 'Sample Data', value: 'sample' }
  ]
}>
<TabItem value="lang">

  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API.

  <Tabs
    defaultValue="nodejs"
    values={[
      { label: 'NodeJS', value: 'nodejs' },
      { label: 'Bash', value: 'bash' }
    ]
  }>
  <TabItem value="nodejs">

  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the [authentication section](../introduction/authentication).

  Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit.

  ```javascript
  // append below code to the "openhim-api.js" script containing the authentication methods.
  // This is described within the authentication section

  (async () => {
    const openhimOptions = {
      apiURL: 'https://localhost:8080',
      apiEndpoint: '/keystore/key',
      username: 'root@openhim.org',
      password: 'openhim-password',
      rejectUnauthorized: false
    }

    const SampleData = 'SampleData'

    const headers = await genAuthHeaders(openhimOptions)

    const options = {
      method: 'POST',
      url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,
      rejectUnauthorized: openhimOptions.rejectUnauthorized,
      headers: headers,
      body: SampleData,
      json: true
    }

    request(options, (error, response, body) => {
      if (error) throw new Error(error)

      console.log({
        statusCode: response.statusCode,
        body
      })
    })
  })()
  ```

  Execute the below command in your terminal to run the nodejs script

  ```bash
  node openhim-api.js
  ```

  </TabItem>
  <TabItem value="bash">

  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the [authentication section](../introduction/authentication).

  Execute the below command in your terminal where the file is located with the required arguments to set the key. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the key object.

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/keystore/key -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status will be `201` if successful.

</TabItem>
<TabItem value="sample">

  ```json
  {
    "key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAvjzjg5W0f7znVALhvJnGdQSqOjGP+4PFUQoSJ+UNnLYGkL3H\nIE29cn/sDxlxTG5V395INHtI88SppcFjCLgEWufDZVLQZ+B1MhaVNueHEZnVZAxb\nJqtxbp1mmageuUIpcWZq4PH9O20Do3wUi1qCfZdfgO1NDIbZl7XOH0RWETdk74yx\nIHHtEKWqjbGHdchVaktD3Ty6Ch9nDCZio38df2pudp3XcTtRsankq+FxCzLHRvs/\nsb1BeT3jkLypuWeM5B1xkQuVolpzvtvW/PkGSnrqoeZfC6pRg3zVG1rxNs/SZUlg\n+BNPu6akxjcxGq84F460P+FGbjmnNzYhzNHhWwIDAQABAoIBADF4viXTAaySYIod\ncbzNNKnru6UEjI/41ZBckRok2+RcBdsQLz98V/71u1q14BvjOZvNP3O+d9tE0mVT\npEB5MlC9orev0Jii63dKHiW4Eg0Gt1KcT/v/a7E7Z5of+VVuGj7uRm8XHyacE+0o\n8GLI99RXUDPEAlx2mRF16xOAfu1cycf8ym4I7AcC/rtckUD16a4HZWuitqEnj5AU\nyKvU5i9+KO0p/BRHcApUHvSQUq1Lcp9kOx1BQpwx+CY8DcBf7IAQCEiEy8o5M+Bh\njaSAQvn7AYfHvaFbnr5JfjHg+eu2axBuwPfCEBiuyq0bXdpizyofcMw23cjEkKIH\nrMc1/QkCgYEA+jyjOYatIGrgOLxRNFML+ztc2zfmPjjmA+0ZyZdvbkKfjOQQ519O\nGqDy4r3P9KugXpCf6bWit6ClZ9DfsnNCl4Djfhmal8Ey92vFra3UJtYMCKwN0GXk\nQNRWpW89jg65DY40z14q6FUi5RkdaTRR0kAlVJGBVVUSrFp70w5JyU8CgYEAwp6B\nTnYS79PLdO/Vgg2GGjm66R5X93xahwLszW42vQklTNyDskFeofEnWBRDGJSnVZQF\neB6tDby1UXZ35BYB6rU/Q2JV/qFYisu+EFf+JFoKs3ldPrw5387LZKFTx+A9PZhH\n7xkiQFXIeols86jE/PtoTvfYwRy403+rSiZMjDUCgYEAhKJ5Xbdtsl4TxN7EJ/jQ\nw/Q+Do/9gQOFn5Uf8wNKc+XqTbJg51JTwreGpfo37Ja/pQABUs4MlkoXAgTrXNnM\n9SLC8ga+MyubSRudpqYZahBQRpRzqf8n0dj6qCtjNBXHrlCu2y8tjQH7QfVi6m1p\n5QhNARsyszkpcaNwOHk9UO8CgYANBlKdD6XgywnYv5xIYeNRqf9qTo+Qjo/4bSev\n7+pV6GDIrhFaQqm0qND7Qg/jez9fqNJc4aCvRKvV0dngN+DU9mBPgCtFKUMlttD3\ngwwNHsGMlVi6NBqjcdGG4I0c2VL/5ksaI1J5f8Q0/zF9dRQJ4kFu14N4GRX9gZPT\nGJES6QKBgDAz6qJyqBIo+/PMugHCYl/fTB15BLs1eAK2qGc+XC69Laynptzg8gpQ\nrt7kH0tYccutDt9IQGRr2JPoHNjuo1UMlJnWm+U+twsxzahPRrN2zx8rEESzeeVH\nOgxlgV0XefX2ZBfOozDItdeSdcn7o0m+HVaLL3wCUNdNNFtuoX5B\n-----END RSA PRIVATE KEY-----"
  }
  ```

</TabItem>
</Tabs>

### Set up the certificate

To set the OpenHIM server certificate, you need to make a TLS request to the OpenHIM API for the below method and endpoint and supply a JSON object with the certificate.

```curl
Method: POST
Endpoint: {openhim_url}:8080/keystore/cert
Payload: JSON object with the certificate
```

### Certificate Example

<Tabs
  defaultValue="lang"
  values={[
    { label: 'Languages', value: 'lang' },
    { label: 'Sample Data', value: 'sample' }
  ]
}>
<TabItem value="lang">

  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API.

  <Tabs
    defaultValue="nodejs"
    values={[
      { label: 'NodeJS', value: 'nodejs' },
      { label: 'Bash', value: 'bash' }
    ]
  }>
  <TabItem value="nodejs">

  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the [authentication section](../introduction/authentication).

  Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit.

  ```javascript
  // append below code to the "openhim-api.js" script containing the authentication methods.
  // This is described within the authentication section

  (async () => {
    const openhimOptions = {
      apiURL: 'https://localhost:8080',
      apiEndpoint: '/keystore/cert',
      username: 'root@openhim.org',
      password: 'openhim-password',
      rejectUnauthorized: false
    }

    const SampleData = 'SampleData'

    const headers = await genAuthHeaders(openhimOptions)

    const options = {
      method: 'POST',
      url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,
      rejectUnauthorized: openhimOptions.rejectUnauthorized,
      headers: headers,
      body: SampleData,
      json: true
    }

    request(options, (error, response, body) => {
      if (error) throw new Error(error)

      console.log({
        statusCode: response.statusCode,
        body
      })
    })
  })()
  ```

  Execute the below command in your terminal to run the nodejs script

  ```bash
  node openhim-api.js
  ```

  </TabItem>
  <TabItem value="bash">

  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the [authentication section](../introduction/authentication).

  Execute the below command in your terminal where the file is located with the required arguments to set the certificate. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the certificate object.

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/keystore/cert -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status will be `201` if successful.

</TabItem>
<TabItem value="sample">

  ```json
  {
    "cert": "-----BEGIN CERTIFICATE-----\nMIIDqDCCApACCQCLPx1aZMwI3DANBgkqhkiG9w0BAQsFADCBlDELMAkGA1UEBhMC\nWkExDDAKBgNVBAgMA0taTjEPMA0GA1UEBwwGRHVyYmFuMSEwHwYDVQQKDBhKZW1i\naSBIZWFsdGggU3lzdGVtcyBOUEMxEDAOBgNVBAsMB2VIZWFsdGgxEjAQBgNVBAMM\nCWxvY2FsaG9zdDEdMBsGCSqGSIb3DQEJARYOcnlhbkBqZW1iaS5vcmcwIBcNMTYw\nMTE5MTIwMjM4WhgPMjA2NjAxMDYxMjAyMzhaMIGUMQswCQYDVQQGEwJaQTEMMAoG\nA1UECAwDS1pOMQ8wDQYDVQQHDAZEdXJiYW4xITAfBgNVBAoMGEplbWJpIEhlYWx0\naCBTeXN0ZW1zIE5QQzEQMA4GA1UECwwHZUhlYWx0aDESMBAGA1UEAwwJbG9jYWxo\nb3N0MR0wGwYJKoZIhvcNAQkBFg5yeWFuQGplbWJpLm9yZzCCASIwDQYJKoZIhvcN\nAQEBBQADggEPADCCAQoCggEBAL4844OVtH+851QC4byZxnUEqjoxj/uDxVEKEifl\nDZy2BpC9xyBNvXJ/7A8ZcUxuVd/eSDR7SPPEqaXBYwi4BFrnw2VS0GfgdTIWlTbn\nhxGZ1WQMWyarcW6dZpmoHrlCKXFmauDx/TttA6N8FItagn2XX4DtTQyG2Ze1zh9E\nVhE3ZO+MsSBx7RClqo2xh3XIVWpLQ908ugofZwwmYqN/HX9qbnad13E7UbGp5Kvh\ncQsyx0b7P7G9QXk945C8qblnjOQdcZELlaJac77b1vz5Bkp66qHmXwuqUYN81Rta\n8TbP0mVJYPgTT7umpMY3MRqvOBeOtD/hRm45pzc2IczR4VsCAwEAATANBgkqhkiG\n9w0BAQsFAAOCAQEAb5qbfMrsUyS/3Ye8O2UvxAQ6nYaIGmHARZAIY3vT0daI4PH/\nM/XeFffLJfVIboLoBkcO+MskGznUO1XGw1OapifRhuEijGZRxhW7OXlkjMY3BKrR\nGjZAuMA2fnUEpibtacZHatzlCrYC7M6McGujx0svLt/bGAArFPPivkcp5LOiLTHj\ns0Z/j1LZNwCUa4E1Vg/fya6opbjZmb2GMQQ6s1UhvWmpxTK2SO6xBVGuNS+u2WNC\nUoSYA/d1aR1zVYJlI1+jFcglPW2kivsTqAau5WBLvbVoq1NgVGKnGGdnQ/+u3Qkt\nFmrdRkLwU3RDZQWGLrzVFZLHsnsES60yz/aiRg==\n-----END CERTIFICATE-----"
  }
  ```

</TabItem>
</Tabs>

### Add certificate to list of ca certificates

To add a certificate to the list of ca certificates, you need to make a TLS request to the OpenHIM API for the below method and endpoint and supply a JSON object with the certificate.

```curl
Method: POST
Endpoint: {openhim_url}:8080/keystore/ca/cert
Payload: JSON object with the certificate
```

### Adding certificate Example

<Tabs
  defaultValue="lang"
  values={[
    { label: 'Languages', value: 'lang' }
  ]
}>
<TabItem value="lang">

  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API.

  <Tabs
    defaultValue="nodejs"
    values={[
      { label: 'NodeJS', value: 'nodejs' },
      { label: 'Bash', value: 'bash' }
    ]
  }>
  <TabItem value="nodejs">

  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the [authentication section](../introduction/authentication).

  Replace the `openhimOptions` values with the correct implementation details and supply the `SampleData` payload to submit. The sample data in the example for setting up of a certificate can used here. The sample data in the example for setting up of a server certificate can used here.

  ```javascript
  // append below code to the "openhim-api.js" script containing the authentication methods.
  // This is described within the authentication section

  (async () => {
    const openhimOptions = {
      apiURL: 'https://localhost:8080',
      apiEndpoint: '/keystore/ca/cert',
      username: 'root@openhim.org',
      password: 'openhim-password',
      rejectUnauthorized: false
    }

    const SampleData = 'SampleData'

    const headers = await genAuthHeaders(openhimOptions)

    const options = {
      method: 'POST',
      url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,
      rejectUnauthorized: openhimOptions.rejectUnauthorized,
      headers: headers,
      body: SampleData,
      json: true
    }

    request(options, (error, response, body) => {
      if (error) throw new Error(error)

      console.log({
        statusCode: response.statusCode,
        body
      })
    })
  })()
  ```

  Execute the below command in your terminal to run the nodejs script

  ```bash
  node openhim-api.js
  ```

  </TabItem>
  <TabItem value="bash">

  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the [authentication section](../introduction/authentication).

  Execute the below command in your terminal where the file is located with the required arguments to set the certificate. Replace the placeholder arguments with the correct implementation details and ensure your `SampleData.json` file exists with the certificate object.

  ```curl
  ./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/keystore/ca/cert -d @SampleData.json -H "Content-Type:application/json"
  ```

  </TabItem>
  </Tabs>

  The response status will be `201` if successful.

</TabItem>
</Tabs>
