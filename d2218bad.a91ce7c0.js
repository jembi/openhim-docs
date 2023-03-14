(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{568:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(674)),o=n(678),c=n(679),l={id:"create",title:"Create Visualizer",sidebar_label:"Create",keywords:["OpenHIM","API","Visualizer","Create"],description:"Create an OpenHIM Visualizer via the API"},s={unversionedId:"api/visualizer/create",id:"api/visualizer/create",isDocsHomePage:!1,title:"Create Visualizer",description:"Create an OpenHIM Visualizer via the API",source:"@site/docs/api/visualizer/create.md",slug:"/api/visualizer/create",permalink:"/docs/next/api/visualizer/create",version:"current",sidebar_label:"Create",sidebar:"api",previous:{title:"Visualizers overview",permalink:"/docs/next/api/visualizer/overview"},next:{title:"Read Visualizer/s",permalink:"/docs/next/api/visualizer/read"}},u=[{value:"Create visualizer",id:"create-visualizer",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"create-visualizer"},"Create visualizer"),Object(i.b)("p",null,"To create a new visualizer record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the visualizer record."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/visualizers\nPayload: JSON object of the visualizer record\n")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)(o.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(i.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(i.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(i.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/visualizers',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { \n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(i.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(i.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(i.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the visualizer object."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/visualizers -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(i.b)("p",null,"  The response status code will be ",Object(i.b)("inlineCode",{parentName:"p"},"201")," if successful.")),Object(i.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "Visualizer1",\n  "time": {\n    "updatePeriod": 200\n  },\n  "size": {\n    "padding": 20,\n    "height": 400,\n    "width": 1000,\n    "responsive": true\n  },\n  "color": {\n    "text": "#4a4254",\n    "error": "#a84b5c",\n    "active": "#10e057",\n    "inactive": "#c8cacf"\n  },\n  "mediators": [\n    {\n      "mediator": "urn:mediator:fhir-proxy",\n      "name": "OpenHIM Mediator FHIR Proxy",\n      "display": "OpenHIM Mediator FHIR Proxy",\n      "_id": "57a4a09078ae562b26d5b2b2"\n    },\n    {\n      "mediator": "urn:mediator:shell-script",\n      "name": "OpenHIM Shell Script Mediator",\n      "display": "OpenHIM Shell Script Mediator",\n      "_id": "57a4a09078ae562b26d5b2b1"\n    }\n  ],\n  "channels": [\n    {\n      "eventType": "channel",\n      "eventName": "FHIR Proxy",\n      "display": "FHIR Proxy",\n      "_id": "57a4a09078ae562b26d5b2b4"\n    },\n    {\n      "eventType": "channel",\n      "eventName": "Echo",\n      "display": "Echo",\n      "_id": "57a4a09078ae562b26d5b2b3"\n    }\n  ],\n  "components": [\n    {\n      "eventType": "primary",\n      "eventName": "OpenHIM Mediator FHIR Proxy Route",\n      "display": "FHIR Server",\n      "_id": "57a4a09078ae562b26d5b2b6"\n    },\n    {\n      "eventType": "primary",\n      "eventName": "echo",\n      "display": "Echo",\n      "_id": "57a4a09078ae562b26d5b2b5"\n    }\n  ]\n}\n')))))}d.isMDXComponent=!0},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},675:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},676:function(e,t,n){"use strict";var a=n(0),r=n(677);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},677:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},678:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(676),o=n(675),c=n(56),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(i.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(a.useState)(c),O=v[0],y=v[1],j=a.Children.toArray(e.children);if(null!=d){var g=h[d];null!=g&&g!==O&&p.some((function(e){return e.value===g}))&&y(g)}var w=function(e){y(e),null!=d&&f(d,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},679:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);