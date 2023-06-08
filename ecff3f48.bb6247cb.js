(window.webpackJsonp=window.webpackJsonp||[]).push([[767],{842:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(913)),c=t(917),l=t(918),s={id:"create",title:"Create Channel",sidebar_label:"Create",keywords:["OpenHIM","API","Channel","Create"],description:"Create an OpenHIM Channel via the API"},i={unversionedId:"api/channels/create",id:"version-7.1.x/api/channels/create",isDocsHomePage:!1,title:"Create Channel",description:"Create an OpenHIM Channel via the API",source:"@site/versioned_docs/version-7.1.x/api/channels/create.md",slug:"/api/channels/create",permalink:"/docs/7.1.x/api/channels/create",version:"7.1.x",sidebar_label:"Create",sidebar:"version-7.1.x/api",previous:{title:"Channels overview",permalink:"/docs/7.1.x/api/channels/overview"},next:{title:"Read Channel/s",permalink:"/docs/7.1.x/api/channels/read"}},u=[{value:"Create channel",id:"create-channel",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-channel"},"Create channel"),Object(o.b)("p",null,"To create a new channel record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the channel record."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/channels\nPayload: JSON object of the channel record\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(c.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(o.b)(c.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/channels',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(l.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the channel object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/channels -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"  The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"201")," if successful.")),Object(o.b)(l.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "http",\n  "authType": "public",\n  "status": "enabled",\n  "routes": [\n    {\n      "name": "FHIR Server",\n      "secured": false,\n      "host": "localhost",\n      "port": "3447",\n      "path": "",\n      "pathTransform": "",\n      "primary": true,\n      "username": "",\n      "password": "",\n      "type": "http",\n      "status": "enabled",\n      "forwardAuthHeader": false\n    }\n  ],\n  "requestBody": true,\n  "responseBody": true,\n  "rewriteUrlsConfig": [],\n  "rewriteUrls": false,\n  "addAutoRewriteRules": true,\n  "name": "FHIR Server",\n  "urlPattern": "^/fhir/.*$",\n  "methods": [\n    "GET",\n    "POST",\n    "DELETE",\n    "PUT",\n    "OPTIONS",\n    "HEAD",\n    "TRACE",\n    "CONNECT",\n    "PATCH"\n  ],\n  "matchContentRegex": null,\n  "matchContentXpath": null,\n  "matchContentValue": null,\n  "matchContentJson": null,\n  "pollingSchedule": null,\n  "tcpHost": null,\n  "tcpPort": null\n}\n')))))}d.isMDXComponent=!0},913:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),u=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,h=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return t?r.a.createElement(h,l(l({ref:n},i),{},{components:t})):r.a.createElement(h,l({ref:n},i))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},914:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},915:function(e,n,t){"use strict";var a=t(0),r=t(916);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},916:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},917:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(915),c=t(914),l=t(56),s=t.n(l);const i=37,u=39;n.a=function(e){const{lazy:n,block:t,defaultValue:l,values:p,groupId:d,className:b}=e,{tabGroupChoices:h,setTabGroupChoices:m}=Object(o.a)(),[f,O]=Object(a.useState)(l),j=a.Children.toArray(e.children);if(null!=d){const e=h[d];null!=e&&e!==f&&p.some((n=>n.value===e))&&O(e)}const y=e=>{O(e),null!=d&&m(d,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},b)},p.map((({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case i:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(v,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},n)))),n?Object(a.cloneElement)(j.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,n)=>Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==f})))))}},918:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r);n.a=function({children:e,hidden:n,className:t}){return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:t}),e)}}}]);