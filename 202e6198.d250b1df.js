/*! For license information please see 202e6198.d250b1df.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(1),r=(t(0),t(382)),i=t(384),o=t(385);const l={id:"update",title:"Update an existing visualizer",sidebar_label:"Update",keywords:["OpenHIM","API","Visualizer","Update"],description:"Update an OpenHIM Visualizer via the API"},s={id:"api/visualizer/update",title:"Update an existing visualizer",description:"Update an OpenHIM Visualizer via the API",source:"@site/docs/api/visualizer/update.md",permalink:"/docs/next/api/visualizer/update",version:"next",sidebar_label:"Update",sidebar:"api",previous:{title:"Read Visualizer/s",permalink:"/docs/next/api/visualizer/read"},next:{title:"Delete visualizer",permalink:"/docs/next/api/visualizer/delete"}},c=[{value:"Update visualizer",id:"update-visualizer",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:c},u="wrapper";function d({components:e,...n}){return Object(r.b)(u,Object(a.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"update-visualizer"},"Update visualizer"),Object(r.b)("p",null,"To update an existing visualizer record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the visualizer record."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/visualizers/:visualizerId\nPayload: JSON object of the visualizer record\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(i.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"lang",mdxType:"TabItem"},Object(r.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(r.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/visualizers/visualizerId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { \n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(r.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(r.b)(o.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the updated visualizer object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/visualizers/visualizerId -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(r.b)("p",null,"  The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(r.b)(o.a,{value:"sample",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "57a4a09078ae562b26d5b2b0",\n  "name": "Visualizer1",\n  "time": {\n    "updatePeriod": 200\n  },\n  "size": {\n    "padding": 20,\n    "height": 400,\n    "width": 1000,\n    "responsive": true\n  },\n  "color": {\n    "text": "#4a4254",\n    "error": "#a84b5c",\n    "active": "#10e057",\n    "inactive": "#c8cacf"\n  },\n  "mediators": [\n    {\n      "mediator": "urn:mediator:fhir-proxy",\n      "name": "OpenHIM Mediator FHIR Proxy",\n      "display": "OpenHIM Mediator FHIR Proxy",\n      "_id": "57a4a09078ae562b26d5b2b2"\n    },\n    {\n      "mediator": "urn:mediator:shell-script",\n      "name": "OpenHIM Shell Script Mediator",\n      "display": "OpenHIM Shell Script Mediator",\n      "_id": "57a4a09078ae562b26d5b2b1"\n    }\n  ],\n  "channels": [\n    {\n      "eventType": "channel",\n      "eventName": "FHIR Proxy",\n      "display": "FHIR Proxy",\n      "_id": "57a4a09078ae562b26d5b2b4"\n    },\n    {\n      "eventType": "channel",\n      "eventName": "Echo",\n      "display": "Echo",\n      "_id": "57a4a09078ae562b26d5b2b3"\n    }\n  ],\n  "components": [\n    {\n      "eventType": "primary",\n      "eventName": "OpenHIM Mediator FHIR Proxy Route",\n      "display": "FHIR Server",\n      "_id": "57a4a09078ae562b26d5b2b6"\n    },\n    {\n      "eventType": "primary",\n      "eventName": "echo",\n      "display": "Echo",\n      "_id": "57a4a09078ae562b26d5b2b5"\n    }\n  ]\n}\n')))))}d.isMDXComponent=!0},382:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),i=r.a.createContext({}),o=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=o(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=o(t),u=a,d=p[l+"."+u]||p[u]||c[u]||i;return t?r.a.createElement(d,Object.assign({},{ref:n},s,{components:t})):r.a.createElement(d,Object.assign({},{ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},383:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},384:function(e,n,t){"use strict";t(24),t(19),t(18);var a=t(0),r=t.n(a),i=t(383),o=t.n(i),l=t(128),s=t.n(l),c={left:37,right:39};n.a=function(e){var n=e.block,t=e.children,i=e.defaultValue,l=e.values,p=Object(a.useState)(i),u=p[0],d=p[1],b=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":n})},l.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===n,className:o()("tab-item",s.a.tabItem,{"tab-item--active":u===n}),key:n,ref:function(e){return b.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case c.right:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c.left:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(b,e.target,e)},onFocus:function(){return d(n)},onClick:function(){return d(n)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===u}))[0]))}},385:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);