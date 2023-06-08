(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{671:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(913)),c=n(917),l=n(918),s={id:"update",title:"Update Channel",sidebar_label:"Update",keywords:["OpenHIM","API","Channel","Update"],description:"Update an OpenHIM Channel via the API"},i={unversionedId:"api/channels/update",id:"version-8.0.x/api/channels/update",isDocsHomePage:!1,title:"Update Channel",description:"Update an OpenHIM Channel via the API",source:"@site/versioned_docs/version-8.0.x/api/channels/update.md",slug:"/api/channels/update",permalink:"/docs/api/channels/update",version:"8.0.x",sidebar_label:"Update",sidebar:"version-8.0.x/api",previous:{title:"Read Channel/s",permalink:"/docs/api/channels/read"},next:{title:"Delete Channel",permalink:"/docs/api/channels/delete"}},p=[{value:"Example",id:"example",children:[]}],u={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To update an existing channel record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the channel record."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/channels/:channelId\nPayload: JSON object of the channel record\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note:"))," ",Object(o.b)("em",{parentName:"p"},"In the examples below, we are using the token authentication type to authenticate requests")),Object(o.b)(c.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(o.b)(c.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/channels/channelId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { \n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(l.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the updated channel object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/channels/channelId -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"  The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(o.b)(l.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "5dd7a1b3b9c6ba497227e88b",\n  "type": "http",\n  "authType": "public",\n  "status": "enabled",\n  "routes": [\n    {\n      "name": "FHIR Server",\n      "secured": false,\n      "host": "localhost",\n      "port": "3447",\n      "path": "",\n      "pathTransform": "",\n      "primary": true,\n      "username": "",\n      "password": "",\n      "type": "http",\n      "status": "enabled",\n      "forwardAuthHeader": false\n    }\n  ],\n  "requestBody": true,\n  "responseBody": true,\n  "rewriteUrlsConfig": [],\n  "rewriteUrls": false,\n  "addAutoRewriteRules": true,\n  "name": "FHIR Server",\n  "urlPattern": "^/fhir/.*$",\n  "methods": [\n    "GET",\n    "POST",\n    "DELETE",\n    "PUT",\n    "OPTIONS",\n    "HEAD",\n    "TRACE",\n    "CONNECT",\n    "PATCH"\n  ],\n  "matchContentRegex": null,\n  "matchContentXpath": null,\n  "matchContentValue": null,\n  "matchContentJson": null,\n  "pollingSchedule": null,\n  "tcpHost": null,\n  "tcpPort": null\n}\n')))))}d.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(h,l(l({ref:t},i),{},{components:n})):r.a.createElement(h,l({ref:t},i))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},914:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},915:function(e,t,n){"use strict";var a=n(0),r=n(916);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},916:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},917:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(915),c=n(914),l=n(56),s=n.n(l);const i=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:u,groupId:d,className:b}=e,{tabGroupChoices:h,setTabGroupChoices:m}=Object(o.a)(),[f,O]=Object(a.useState)(l),j=a.Children.toArray(e.children);if(null!=d){const e=h[d];null!=e&&e!==f&&u.some((t=>t.value===e))&&O(e)}const y=e=>{O(e),null!=d&&m(d,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},918:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);