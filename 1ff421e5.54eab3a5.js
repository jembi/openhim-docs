/*! For license information please see 1ff421e5.54eab3a5.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var a=t(1),r=(t(0),t(597)),o=t(599),l=t(600);const c={id:"update",title:"Update Channel",sidebar_label:"Update",keywords:["OpenHIM","API","Channel","Update"],description:"Update an OpenHIM Channel via the API"},s=[{value:"Example",id:"example",children:[]}],i={rightToc:s},p="wrapper";function u({components:e,...n}){return Object(r.b)(p,Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To update an existing channel record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the channel record."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/channels/:channelId\nPayload: JSON object of the channel record\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(o.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"lang",mdxType:"TabItem"},Object(r.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(r.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/channels/channelId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { \n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(r.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(r.b)(l.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the updated channel object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/channels/channelId -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(r.b)("p",null,"  The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(r.b)(l.a,{value:"sample",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "5dd7a1b3b9c6ba497227e88b",\n  "type": "http",\n  "authType": "public",\n  "status": "enabled",\n  "routes": [\n    {\n      "name": "FHIR Server",\n      "secured": false,\n      "host": "localhost",\n      "port": "3447",\n      "path": "",\n      "pathTransform": "",\n      "primary": true,\n      "username": "",\n      "password": "",\n      "type": "http",\n      "status": "enabled",\n      "forwardAuthHeader": false\n    }\n  ],\n  "requestBody": true,\n  "responseBody": true,\n  "rewriteUrlsConfig": [],\n  "rewriteUrls": false,\n  "addAutoRewriteRules": true,\n  "name": "FHIR Server",\n  "urlPattern": "^/fhir/.*$",\n  "methods": [\n    "GET",\n    "POST",\n    "DELETE",\n    "PUT",\n    "OPTIONS",\n    "HEAD",\n    "TRACE",\n    "CONNECT",\n    "PATCH"\n  ],\n  "matchContentRegex": null,\n  "matchContentXpath": null,\n  "matchContentValue": null,\n  "matchContentJson": null,\n  "pollingSchedule": null,\n  "tcpHost": null,\n  "tcpPort": null\n}\n')))))}u.isMDXComponent=!0},597:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),o=r.a.createContext({}),l=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=l(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var s="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=l(t),u=a,d=p[c+"."+u]||p[u]||i[u]||o;return t?r.a.createElement(d,Object.assign({},{ref:n},s,{components:t})):r.a.createElement(d,Object.assign({},{ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=t[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},598:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var c in a)t.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},599:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(598),l=t.n(o),c=t(88),s=t.n(c);const i={left:37,right:39};n.a=function(e){const{block:n,children:t,defaultValue:o,values:c}=e,[p,u]=Object(a.useState)(o),d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":n})},c.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:l()("tab-item",s.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,n,t)=>{switch(t.keyCode){case i.right:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case i.left:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(d,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===p)[0]))}},600:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);