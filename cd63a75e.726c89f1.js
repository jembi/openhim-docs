/*! For license information please see cd63a75e.726c89f1.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{498:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),o=(n(0),n(597)),r=n(599),i=n(600);const s={id:"update",title:"Update Mediator",sidebar_label:"Update",keywords:["OpenHIM","API","Mediator","Update"],description:"Update an OpenHIM mediator via the API"},c=[{value:"Update Mediator",id:"update-mediator",children:[]},{value:"Update Example",id:"update-example",children:[]},{value:"Set Mediator configuration",id:"set-mediator-configuration",children:[]},{value:"Setting Mediator's configuration Example",id:"setting-mediators-configuration-example",children:[]}],p={rightToc:c},l="wrapper";function d({components:e,...t}){return Object(o.b)(l,Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"update-mediator"},"Update Mediator"),Object(o.b)("p",null,"To update a mediator, you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object of the mediator."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/mediators\nPayload: JSON object of the mediator\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," For a mediator to be updated the version number in the update object has to be greater than current one for that mediator. If the mediator does not exist a new one is created."),Object(o.b)("h2",{id:"update-example"},"Update Example"),Object(o.b)(r.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(o.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/mediators',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the mediator update object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/mediators -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"201")," whether the update succeeds or not. To check the status of the update, fetch the updated mediator or check the console.")),Object(o.b)(i.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),' {\n  "urn": "urn:uuid:EEA84E13-1C92-467C-B0BD-7C480462D1ED",\n  "version": "1.0.1",\n  "name": "Updated Mediator",\n  "description": "An updated mediator for testing",\n  "endpoints": [\n    {\n      "name": "Save Encounter",\n      "host": "localhost",\n      "port": "8005",\n      "type": "http"\n    }\n  ],\n  "defaultChannelConfig": [\n    {\n      "name": "Save Encounter 1",\n      "urlPattern": "/encounters",\n      "type": "http",\n      "allow": [],\n      "routes": [\n        {\n          "name": "Save Encounter 1",\n          "host": "localhost",\n          "port": "8005",\n          "type": "http"\n        }\n      ]\n    }\n  ],\n  "configDefs": [\n    {\n      "param": "param1",\n      "type": "string"\n    },\n    {\n      "param": "param2",\n      "type": "string"\n    }\n  ]\n}\n')))),Object(o.b)("h2",{id:"set-mediator-configuration"},"Set Mediator configuration"),Object(o.b)("p",null,"To set a mediator's configuration, you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object of the mediator's configuration."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/mediators/:urn/config\nPayload: JSON object of the mediator's config\n")),Object(o.b)("p",null,"The response will have an http status code of ",Object(o.b)("inlineCode",{parentName:"p"},"201")," if successful, ",Object(o.b)("inlineCode",{parentName:"p"},"404")," if the mediator referenced by ",Object(o.b)("inlineCode",{parentName:"p"},"urn")," cannot be found and ",Object(o.b)("inlineCode",{parentName:"p"},"400")," if the config supplied cannot be validated against the configuration definition supplied in the mediator registration message."),Object(o.b)("p",null,"This endpoint can only be called by an admin user."),Object(o.b)("h2",{id:"setting-mediators-configuration-example"},"Setting Mediator's configuration Example"),Object(o.b)(r.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(o.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/mediators/:urn/config',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the mediator's config object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT "https://localhost:8080/mediators/:urn/config" -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(o.b)(i.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "param1": "Config Test parameter 1",\n  "param2": "Config Test parameter 2"\n}\n')))))}d.isMDXComponent=!0},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),l=i(n),d=a,u=l[s+"."+d]||l[d]||p[d]||r;return n?o.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(u,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},598:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},599:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(598),i=n.n(r),s=n(88),c=n.n(s);const p={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:r,values:s}=e,[l,d]=Object(a.useState)(r),u=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":l===e,className:i()("tab-item",c.a.tabItem,{"tab-item--active":l===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case p.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case p.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===l)[0]))}},600:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);