(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),l=n(7),r=(n(0),n(674)),o=n(678),i=n(679),c={id:"configuration",title:"Configuration",sidebar_label:"Configuration",keywords:["OpenHIM","Configuration"],description:"OpenHIM configuration"},s={unversionedId:"getting-started/configuration",id:"getting-started/configuration",isDocsHomePage:!1,title:"Configuration",description:"OpenHIM configuration",source:"@site/docs/getting-started/configuration.md",slug:"/getting-started/configuration",permalink:"/docs/next/getting-started/configuration",version:"current",sidebar_label:"Configuration",sidebar:"docs",previous:{title:"Install OpenHIM",permalink:"/docs/next/getting-started/install"},next:{title:"Install via Docker",permalink:"/docs/next/installation/docker"}},b=[{value:"Adding Clients",id:"adding-clients",children:[]},{value:"Adding Channels",id:"adding-channels",children:[]},{value:"Example",id:"example",children:[]}],p={toc:b};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Once you have successfully installed the OpenHIM core and console and you are able to successfully access the console at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:9000"}),"http://localhost:9000")," we can proceed to create a basic channel and client so that we can send a test request through the OpenHIM core."),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"Client")," is usually some system that you want to be able to send request to the OpenHIM. Setting up a ",Object(r.b)("strong",{parentName:"p"},"client")," allows the OpenHIM to authenticate requests. A ",Object(r.b)("strong",{parentName:"p"},"Channel")," defines a path that a request will take through the OpenHIM. It describes one more ",Object(r.b)("strong",{parentName:"p"},"routes")," for the request to be forwarded to, which ",Object(r.b)("strong",{parentName:"p"},"clients")," are allowed to use this ",Object(r.b)("strong",{parentName:"p"},"channel"),", which requests are to be directed to this ",Object(r.b)("strong",{parentName:"p"},"channel")," and many more options that allow you to control what happens for a particular request."),Object(r.b)("p",null,"To manage ",Object(r.b)("strong",{parentName:"p"},"clients")," and ",Object(r.b)("strong",{parentName:"p"},"channels")," you will need to log into the OpenHIM console and then you may follow the steps below."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note")," - Only an Admin user has the permission to Add/Edit/Delete a ",Object(r.b)("strong",{parentName:"p"},"Client")," or ",Object(r.b)("strong",{parentName:"p"},"Channel"))),Object(r.b)("h2",{id:"adding-clients"},"Adding Clients"),Object(r.b)("p",null,"Follow the below steps to successfully create/update a ",Object(r.b)("strong",{parentName:"p"},"Client")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Navigate to the ",Object(r.b)("strong",{parentName:"li"},"Clients")," page on the OpenHIM Console."),Object(r.b)("li",{parentName:"ul"},"Here you will be presented with a list of all the created ",Object(r.b)("strong",{parentName:"li"},"Clients")),Object(r.b)("li",{parentName:"ul"},"Click on the blue ",Object(r.b)("strong",{parentName:"li"},"+ Client")," button to open a popup modal box where you will supply the ",Object(r.b)("strong",{parentName:"li"},"Client")," details ",Object(r.b)("strong",{parentName:"li"},"OR")," click on one of the existing ",Object(r.b)("strong",{parentName:"li"},"Clients")," to open up the popup modal with the ",Object(r.b)("strong",{parentName:"li"},"Client"),"'s saved details."),Object(r.b)("li",{parentName:"ul"},"Supply all the required fields (marked with a ","*",") and click the blue ",Object(r.b)("strong",{parentName:"li"},"Save changes")," button when completed.")),Object(r.b)("p",null,"There are many fields available, to find a detailed explanation of all possible fields, please refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../configuration/clients"}),"Clients documentation")," page"),Object(r.b)("h2",{id:"adding-channels"},"Adding Channels"),Object(r.b)("p",null,"Follow the below steps to successfully create/update a ",Object(r.b)("strong",{parentName:"p"},"Channel")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Navigate to the ",Object(r.b)("strong",{parentName:"li"},"Channels")," menu option found in the left sidebar."),Object(r.b)("li",{parentName:"ul"},"On the ",Object(r.b)("strong",{parentName:"li"},"Channels")," page you will be presented with a list of all the created ",Object(r.b)("strong",{parentName:"li"},"Channels")),Object(r.b)("li",{parentName:"ul"},'Click on the blue "',Object(r.b)("strong",{parentName:"li"},"+ Channel"),'" button to open a popup modal box where you will supply the ',Object(r.b)("strong",{parentName:"li"},"Channel")," details ",Object(r.b)("strong",{parentName:"li"},"OR")," click on one of the existing ",Object(r.b)("strong",{parentName:"li"},"Channels")," to open up the popup modal with the ",Object(r.b)("strong",{parentName:"li"},"Channels'")," saved details."),Object(r.b)("li",{parentName:"ul"},'Supply all the required fields and click the blue "',Object(r.b)("strong",{parentName:"li"},"Save changes"),'" button when completed.')),Object(r.b)("p",null,"The two ",Object(r.b)("em",{parentName:"p"},"most")," important fields to supply are the ",Object(r.b)("strong",{parentName:"p"},"URL Pattern")," field and the ",Object(r.b)("strong",{parentName:"p"},"Allowed roles and clients")," field. The ",Object(r.b)("strong",{parentName:"p"},"URL Pattern")," field describes which incoming requests should be sent down this ",Object(r.b)("strong",{parentName:"p"},"channel"),". It does this by looking at the URL of the incoming request and testing if it matches the RegEx that you supply in this field."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),", ",Object(r.b)("em",{parentName:"p"},"only the first")," url matched ",Object(r.b)("strong",{parentName:"p"},"channel")," that is found receives the request for processing.")),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Allowed roles and clients")," field identifies which ",Object(r.b)("strong",{parentName:"p"},"clients")," are allowed to send requests to this ",Object(r.b)("strong",{parentName:"p"},"channel"),". If a request matches a private ",Object(r.b)("strong",{parentName:"p"},"channel")," but the ",Object(r.b)("strong",{parentName:"p"},"client")," system is not specified in this field or a ",Object(r.b)("strong",{parentName:"p"},"role")," which contains the ",Object(r.b)("strong",{parentName:"p"},"client")," is not specified in this field then the request will be denied access to the ",Object(r.b)("strong",{parentName:"p"},"channel")," as it could not successfully authenticate the the supplied authentication details to those linked to the channel."),Object(r.b)("p",null,"There are many fields that you may supply, to find a detailed explanation of all the available fields, please refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../configuration/channels"}),"Channels documentation")," page"),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"For this example, we will be creating a very basic channel that requires client authentication details to verify the request is authorized for the specific channel being requested."),Object(r.b)(o.a,{defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Import Config",value:"import"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Lets proceed by supplying the below details within our relevant sections to complete this configuration of our channel and client."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Client:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"clientID: ",Object(r.b)("inlineCode",{parentName:"li"},"HL7")),Object(r.b)("li",{parentName:"ul"},"client Name: ",Object(r.b)("inlineCode",{parentName:"li"},"Health Level 7")),Object(r.b)("li",{parentName:"ul"},"Add new Role: ",Object(r.b)("inlineCode",{parentName:"li"},"HL7")),Object(r.b)("li",{parentName:"ul"},"Basic Auth Password: ",Object(r.b)("inlineCode",{parentName:"li"},"hl7password"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Channel:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Basic Info Tab:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"HL7 Patient example Channel")))),Object(r.b)("li",{parentName:"ul"},"Request Matching Tab:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"urlPatten: ",Object(r.b)("inlineCode",{parentName:"li"},"/hl7-patient-example")),Object(r.b)("li",{parentName:"ul"},"Channel Authentication: ",Object(r.b)("inlineCode",{parentName:"li"},"Private")),Object(r.b)("li",{parentName:"ul"},"Client to access this channel: ",Object(r.b)("inlineCode",{parentName:"li"},"HL7")))),Object(r.b)("li",{parentName:"ul"},"Routes Tab: Add new route:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Name: ",Object(r.b)("inlineCode",{parentName:"li"},"HL7 patient example Route")),Object(r.b)("li",{parentName:"ul"},"Route Secured: ",Object(r.b)("inlineCode",{parentName:"li"},"yes")),Object(r.b)("li",{parentName:"ul"},"Host: ",Object(r.b)("inlineCode",{parentName:"li"},"www.hl7.org")),Object(r.b)("li",{parentName:"ul"},"Port: ",Object(r.b)("inlineCode",{parentName:"li"},"443")),Object(r.b)("li",{parentName:"ul"},"Route Path: ",Object(r.b)("inlineCode",{parentName:"li"},"/fhir/patient-example.json")))))),Object(r.b)(i.a,{value:"import",mdxType:"TabItem"},Object(r.b)("p",null,"Import the below JSON object into the OpenHIM as described within the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/import-export/create"}),"Import/Export")," section"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Clients": [\n    {\n      "roles": [\n        "HL7"\n      ],\n      "clientID": "HL7",\n      "name": "Health Level 7",\n      "passwordAlgorithm": "sha512",\n      "passwordSalt": "cbdd2b7cc46bc713b439b352c8c09b49",\n      "passwordHash": "3cbd8a269cca1b42afa2b19fc9cd1b844229fadd0ff1ac1b66ed614f30e2056ccf47f0c92b4723a77a87aeb9688c5af76f5b3f0e1b2dbc88988a36320f326a23"\n    }\n  ],\n  "Channels": [\n    {\n      "methods": [\n        "GET",\n        "POST",\n        "DELETE",\n        "PUT",\n        "OPTIONS",\n        "HEAD",\n        "TRACE",\n        "CONNECT",\n        "PATCH"\n      ],\n      "type": "http",\n      "allow": [\n        "HL7"\n      ],\n      "whitelist": [],\n      "authType": "private",\n      "matchContentTypes": [],\n      "properties": [],\n      "txViewAcl": [],\n      "txViewFullAcl": [],\n      "txRerunAcl": [],\n      "status": "enabled",\n      "rewriteUrls": false,\n      "addAutoRewriteRules": true,\n      "autoRetryEnabled": false,\n      "autoRetryPeriodMinutes": 60,\n      "routes": [\n        {\n          "type": "http",\n          "status": "enabled",\n          "forwardAuthHeader": false,\n          "name": "HL7 patient example Route",\n          "secured": true,\n          "host": "www.hl7.org",\n          "port": 443,\n          "path": "/fhir/patient-example.json",\n          "pathTransform": "",\n          "primary": true,\n          "username": "",\n          "password": ""\n        }\n      ],\n      "requestBody": true,\n      "responseBody": true,\n      "rewriteUrlsConfig": [],\n      "name": "HL7 Patient example Channel",\n      "urlPattern": "^/hl7-patient-example$",\n      "matchContentRegex": null,\n      "matchContentXpath": null,\n      "matchContentValue": null,\n      "matchContentJson": null,\n      "pollingSchedule": null,\n      "tcpHost": null,\n      "tcpPort": null,\n      "updatedBy": {\n        "id": "5dee04aadf48ea0011e3a1fa",\n        "name": "Super User"\n      },\n      "alerts": []\n    }\n  ]\n}\n')))),Object(r.b)("p",null,"Once you have configured your client and channel ",Object(r.b)("strong",{parentName:"p"},"as described in the above example"),", you should now be able to successfully make a authenticated request through the OpenHIM to fetch the example HL7 FHIR Patient object."),Object(r.b)("p",null,"Execute the below command in your terminal to see the output of the request."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl "http://localhost:5001/hl7-patient-example" -H "Authorization: Basic $(echo -n HL7:hl7password | base64)"\n')),Object(r.b)("p",null,"You can also use any alternative 3rd party client to send this request through the OpenHIM. An example of a 3rd party client is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.getpostman.com/"}),"Postman")))}u.isMDXComponent=!0},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),b=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return n?l.a.createElement(h,i(i({ref:t},s),{},{components:n})):l.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},675:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}},676:function(e,t,n){"use strict";var a=n(0),l=n(677);t.a=function(){const e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},677:function(e,t,n){"use strict";var a=n(0);const l=Object(a.createContext)(void 0);t.a=l},678:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(676),o=n(675),i=n(56),c=n.n(i);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:u,className:d}=e,{tabGroupChoices:h,setTabGroupChoices:m}=Object(r.a)(),[O,f]=Object(a.useState)(i),j=a.Children.toArray(e.children);if(null!=u){const e=h[u];null!=e&&e!==O&&p.some((t=>t.value===e))&&f(e)}const g=e=>{f(e),null!=u&&m(u,e)},N=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>N.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(N,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},679:function(e,t,n){"use strict";var a=n(3),l=n(0),r=n.n(l);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);