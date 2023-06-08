(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{439:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(913)),o=n(917),s=n(918),c={id:"update",title:"Update an existing visualizer",sidebar_label:"Update",keywords:["OpenHIM","API","Visualizer","Update"],description:"Update an OpenHIM Visualizer via the API"},l={unversionedId:"api/visualizer/update",id:"version-8.0.x/api/visualizer/update",isDocsHomePage:!1,title:"Update an existing visualizer",description:"Update an OpenHIM Visualizer via the API",source:"@site/versioned_docs/version-8.0.x/api/visualizer/update.md",slug:"/api/visualizer/update",permalink:"/docs/api/visualizer/update",version:"8.0.x",sidebar_label:"Update",sidebar:"version-8.0.x/api",previous:{title:"Read Visualizer/s",permalink:"/docs/api/visualizer/read"},next:{title:"Delete visualizer",permalink:"/docs/api/visualizer/delete"}},p=[{value:"Update visualizer",id:"update-visualizer",children:[]},{value:"Example",id:"example",children:[]}],u={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"update-visualizer"},"Update visualizer"),Object(i.b)("p",null,"To update an existing visualizer record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the visualizer record."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/visualizers/:visualizerId\nPayload: JSON object of the visualizer record\n")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Note:"))," ",Object(i.b)("em",{parentName:"p"},"In the examples below, we are using the token authentication type to authenticate requests")),Object(i.b)(o.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"lang",mdxType:"TabItem"},Object(i.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(i.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"nodejs",mdxType:"TabItem"},Object(i.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/visualizers/visualizerId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { \n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(i.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(i.b)(s.a,{value:"bash",mdxType:"TabItem"},Object(i.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the updated visualizer object."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/visualizers/visualizerId -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(i.b)("p",null,"  The response status code will be ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(i.b)(s.a,{value:"sample",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "57a4a09078ae562b26d5b2b0",\n  "name": "Visualizer1",\n  "time": {\n    "updatePeriod": 200\n  },\n  "size": {\n    "padding": 20,\n    "height": 400,\n    "width": 1000,\n    "responsive": true\n  },\n  "color": {\n    "text": "#4a4254",\n    "error": "#a84b5c",\n    "active": "#10e057",\n    "inactive": "#c8cacf"\n  },\n  "mediators": [\n    {\n      "mediator": "urn:mediator:fhir-proxy",\n      "name": "OpenHIM Mediator FHIR Proxy",\n      "display": "OpenHIM Mediator FHIR Proxy",\n      "_id": "57a4a09078ae562b26d5b2b2"\n    },\n    {\n      "mediator": "urn:mediator:shell-script",\n      "name": "OpenHIM Shell Script Mediator",\n      "display": "OpenHIM Shell Script Mediator",\n      "_id": "57a4a09078ae562b26d5b2b1"\n    }\n  ],\n  "channels": [\n    {\n      "eventType": "channel",\n      "eventName": "FHIR Proxy",\n      "display": "FHIR Proxy",\n      "_id": "57a4a09078ae562b26d5b2b4"\n    },\n    {\n      "eventType": "channel",\n      "eventName": "Echo",\n      "display": "Echo",\n      "_id": "57a4a09078ae562b26d5b2b3"\n    }\n  ],\n  "components": [\n    {\n      "eventType": "primary",\n      "eventName": "OpenHIM Mediator FHIR Proxy Route",\n      "display": "FHIR Server",\n      "_id": "57a4a09078ae562b26d5b2b6"\n    },\n    {\n      "eventType": "primary",\n      "eventName": "echo",\n      "display": "Echo",\n      "_id": "57a4a09078ae562b26d5b2b5"\n    }\n  ]\n}\n')))))}d.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},914:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},915:function(e,t,n){"use strict";var a=n(0),r=n(916);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},916:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},917:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(915),o=n(914),s=n(56),c=n.n(s);const l=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:u,groupId:d,className:b}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(i.a)(),[O,v]=Object(a.useState)(s),f=a.Children.toArray(e.children);if(null!=d){const e=m[d];null!=e&&e!==O&&u.some((t=>t.value===e))&&v(e)}const y=e=>{v(e),null!=d&&h(d,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},t)))),t?Object(a.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},918:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);