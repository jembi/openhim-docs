/*! For license information please see 9e8eb6f8.6dadfc24.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{257:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"default",(function(){return h}));var n=a(1),o=a(6),i=(a(0),a(338)),r=a(340),c=a(341),s={id:"create",title:"Create Certificates",sidebar_label:"Create",keywords:["OpenHIM","API","Certificate","Key","Create"],description:"Create OpenHIM Certificates and Keys via the API"},l=[{value:"Create Certificates and keys",id:"create-certificates-and-keys",children:[{value:"Set the OpenHIM key",id:"set-the-openhim-key",children:[]},{value:"Key Example",id:"key-example",children:[]},{value:"Set up the certificate",id:"set-up-the-certificate",children:[]},{value:"Certificate Example",id:"certificate-example",children:[]},{value:"Add certificate to list of ca certificates",id:"add-certificate-to-list-of-ca-certificates",children:[]},{value:"Adding certificate Example",id:"adding-certificate-example",children:[]}]}],p={id:"api/certificates/create",title:"Create Certificates",description:"Create OpenHIM Certificates and Keys via the API",source:"@site/docs/api/certificates/create.md",permalink:"/docs/next/api/certificates/create",version:"next",sidebar_label:"Create",sidebar:"api",previous:{title:"Certificates Overview",permalink:"/docs/next/api/certificates/overview"},next:{title:"Read Certificates",permalink:"/docs/next/api/certificates/read"}},u={rightToc:l,metadata:p},d="wrapper";function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"create-certificates-and-keys"},"Create Certificates and keys"),Object(i.b)("h3",{id:"set-the-openhim-key"},"Set the OpenHIM key"),Object(i.b)("p",null,"To set the OpenHIM server key, you need to make a TLS request to the OpenHIM API for the below method and endpoint and supply a JSON object with the key."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/keystore/key\nPayload: JSON object with the key\n")),Object(i.b)("h3",{id:"key-example"},"Key Example"),Object(i.b)(r.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(i.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(i.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(i.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/keystore/key',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(i.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(i.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(i.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments to set the key. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the key object."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/keystore/key -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(i.b)("p",null,"  The response status will be ",Object(i.b)("inlineCode",{parentName:"p"},"201")," if successful.")),Object(i.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": "-----BEGIN RSA PRIVATE KEY-----\\nMIIEowIBAAKCAQEAvjzjg5W0f7znVALhvJnGdQSqOjGP+4PFUQoSJ+UNnLYGkL3H\\nIE29cn/sDxlxTG5V395INHtI88SppcFjCLgEWufDZVLQZ+B1MhaVNueHEZnVZAxb\\nJqtxbp1mmageuUIpcWZq4PH9O20Do3wUi1qCfZdfgO1NDIbZl7XOH0RWETdk74yx\\nIHHtEKWqjbGHdchVaktD3Ty6Ch9nDCZio38df2pudp3XcTtRsankq+FxCzLHRvs/\\nsb1BeT3jkLypuWeM5B1xkQuVolpzvtvW/PkGSnrqoeZfC6pRg3zVG1rxNs/SZUlg\\n+BNPu6akxjcxGq84F460P+FGbjmnNzYhzNHhWwIDAQABAoIBADF4viXTAaySYIod\\ncbzNNKnru6UEjI/41ZBckRok2+RcBdsQLz98V/71u1q14BvjOZvNP3O+d9tE0mVT\\npEB5MlC9orev0Jii63dKHiW4Eg0Gt1KcT/v/a7E7Z5of+VVuGj7uRm8XHyacE+0o\\n8GLI99RXUDPEAlx2mRF16xOAfu1cycf8ym4I7AcC/rtckUD16a4HZWuitqEnj5AU\\nyKvU5i9+KO0p/BRHcApUHvSQUq1Lcp9kOx1BQpwx+CY8DcBf7IAQCEiEy8o5M+Bh\\njaSAQvn7AYfHvaFbnr5JfjHg+eu2axBuwPfCEBiuyq0bXdpizyofcMw23cjEkKIH\\nrMc1/QkCgYEA+jyjOYatIGrgOLxRNFML+ztc2zfmPjjmA+0ZyZdvbkKfjOQQ519O\\nGqDy4r3P9KugXpCf6bWit6ClZ9DfsnNCl4Djfhmal8Ey92vFra3UJtYMCKwN0GXk\\nQNRWpW89jg65DY40z14q6FUi5RkdaTRR0kAlVJGBVVUSrFp70w5JyU8CgYEAwp6B\\nTnYS79PLdO/Vgg2GGjm66R5X93xahwLszW42vQklTNyDskFeofEnWBRDGJSnVZQF\\neB6tDby1UXZ35BYB6rU/Q2JV/qFYisu+EFf+JFoKs3ldPrw5387LZKFTx+A9PZhH\\n7xkiQFXIeols86jE/PtoTvfYwRy403+rSiZMjDUCgYEAhKJ5Xbdtsl4TxN7EJ/jQ\\nw/Q+Do/9gQOFn5Uf8wNKc+XqTbJg51JTwreGpfo37Ja/pQABUs4MlkoXAgTrXNnM\\n9SLC8ga+MyubSRudpqYZahBQRpRzqf8n0dj6qCtjNBXHrlCu2y8tjQH7QfVi6m1p\\n5QhNARsyszkpcaNwOHk9UO8CgYANBlKdD6XgywnYv5xIYeNRqf9qTo+Qjo/4bSev\\n7+pV6GDIrhFaQqm0qND7Qg/jez9fqNJc4aCvRKvV0dngN+DU9mBPgCtFKUMlttD3\\ngwwNHsGMlVi6NBqjcdGG4I0c2VL/5ksaI1J5f8Q0/zF9dRQJ4kFu14N4GRX9gZPT\\nGJES6QKBgDAz6qJyqBIo+/PMugHCYl/fTB15BLs1eAK2qGc+XC69Laynptzg8gpQ\\nrt7kH0tYccutDt9IQGRr2JPoHNjuo1UMlJnWm+U+twsxzahPRrN2zx8rEESzeeVH\\nOgxlgV0XefX2ZBfOozDItdeSdcn7o0m+HVaLL3wCUNdNNFtuoX5B\\n-----END RSA PRIVATE KEY-----"\n}\n')))),Object(i.b)("h3",{id:"set-up-the-certificate"},"Set up the certificate"),Object(i.b)("p",null,"To set the OpenHIM server certificate, you need to make a TLS request to the OpenHIM API for the below method and endpoint and supply a JSON object with the certificate."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/keystore/cert\nPayload: JSON object with the certificate\n")),Object(i.b)("h3",{id:"certificate-example"},"Certificate Example"),Object(i.b)(r.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(i.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(i.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(i.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/keystore/cert',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(i.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(i.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(i.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments to set the certificate. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the certificate object."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/keystore/cert -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(i.b)("p",null,"  The response status will be ",Object(i.b)("inlineCode",{parentName:"p"},"201")," if successful.")),Object(i.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "cert": "-----BEGIN CERTIFICATE-----\\nMIIDqDCCApACCQCLPx1aZMwI3DANBgkqhkiG9w0BAQsFADCBlDELMAkGA1UEBhMC\\nWkExDDAKBgNVBAgMA0taTjEPMA0GA1UEBwwGRHVyYmFuMSEwHwYDVQQKDBhKZW1i\\naSBIZWFsdGggU3lzdGVtcyBOUEMxEDAOBgNVBAsMB2VIZWFsdGgxEjAQBgNVBAMM\\nCWxvY2FsaG9zdDEdMBsGCSqGSIb3DQEJARYOcnlhbkBqZW1iaS5vcmcwIBcNMTYw\\nMTE5MTIwMjM4WhgPMjA2NjAxMDYxMjAyMzhaMIGUMQswCQYDVQQGEwJaQTEMMAoG\\nA1UECAwDS1pOMQ8wDQYDVQQHDAZEdXJiYW4xITAfBgNVBAoMGEplbWJpIEhlYWx0\\naCBTeXN0ZW1zIE5QQzEQMA4GA1UECwwHZUhlYWx0aDESMBAGA1UEAwwJbG9jYWxo\\nb3N0MR0wGwYJKoZIhvcNAQkBFg5yeWFuQGplbWJpLm9yZzCCASIwDQYJKoZIhvcN\\nAQEBBQADggEPADCCAQoCggEBAL4844OVtH+851QC4byZxnUEqjoxj/uDxVEKEifl\\nDZy2BpC9xyBNvXJ/7A8ZcUxuVd/eSDR7SPPEqaXBYwi4BFrnw2VS0GfgdTIWlTbn\\nhxGZ1WQMWyarcW6dZpmoHrlCKXFmauDx/TttA6N8FItagn2XX4DtTQyG2Ze1zh9E\\nVhE3ZO+MsSBx7RClqo2xh3XIVWpLQ908ugofZwwmYqN/HX9qbnad13E7UbGp5Kvh\\ncQsyx0b7P7G9QXk945C8qblnjOQdcZELlaJac77b1vz5Bkp66qHmXwuqUYN81Rta\\n8TbP0mVJYPgTT7umpMY3MRqvOBeOtD/hRm45pzc2IczR4VsCAwEAATANBgkqhkiG\\n9w0BAQsFAAOCAQEAb5qbfMrsUyS/3Ye8O2UvxAQ6nYaIGmHARZAIY3vT0daI4PH/\\nM/XeFffLJfVIboLoBkcO+MskGznUO1XGw1OapifRhuEijGZRxhW7OXlkjMY3BKrR\\nGjZAuMA2fnUEpibtacZHatzlCrYC7M6McGujx0svLt/bGAArFPPivkcp5LOiLTHj\\ns0Z/j1LZNwCUa4E1Vg/fya6opbjZmb2GMQQ6s1UhvWmpxTK2SO6xBVGuNS+u2WNC\\nUoSYA/d1aR1zVYJlI1+jFcglPW2kivsTqAau5WBLvbVoq1NgVGKnGGdnQ/+u3Qkt\\nFmrdRkLwU3RDZQWGLrzVFZLHsnsES60yz/aiRg==\\n-----END CERTIFICATE-----"\n}\n')))),Object(i.b)("h3",{id:"add-certificate-to-list-of-ca-certificates"},"Add certificate to list of ca certificates"),Object(i.b)("p",null,"To add a certificate to the list of ca certificates, you need to make a TLS request to the OpenHIM API for the below method and endpoint and supply a JSON object with the certificate."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/keystore/ca/cert\nPayload: JSON object with the certificate\n")),Object(i.b)("h3",{id:"adding-certificate-example"},"Adding certificate Example"),Object(i.b)(r.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(i.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(i.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(i.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit. The sample data in the example for setting up of a certificate can used here. The sample data in the example for setting up of a server certificate can used here."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/keystore/ca/cert',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(i.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(i.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(i.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments to set the certificate. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the certificate object."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/keystore/ca/cert -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(i.b)("p",null,"  The response status will be ",Object(i.b)("inlineCode",{parentName:"p"},"201")," if successful."))))}h.isMDXComponent=!0},338:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=r(a),u=n,d=p[c+"."+u]||p[u]||l[u]||i;return a?o.a.createElement(d,Object.assign({},{ref:t},s,{components:a})):o.a.createElement(d,Object.assign({},{ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:n,r[1]=c;for(var u=2;u<i;u++)r[u]=a[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},339:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var r=o.apply(null,n);r&&e.push(r)}else if("object"===i)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},340:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(339),r=a.n(i),c=a(85),s=a.n(c);const l={left:37,right:39};t.a=function(e){const{block:t,children:a,defaultValue:i,values:c}=e,[p,u]=Object(n.useState)(i),d=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:r()("tab-item",s.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case l.right:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case l.left:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(d,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===p)[0]))}},341:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);