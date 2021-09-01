(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{433:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(556)),i=r(562),c={id:"orchestrator",title:"Building a basic Orchestrator Mediator",sidebar_label:"Orchestrator Mediator",keywords:["mediator","tutorial","orchestrator"],description:"Detailed tutorial on creating a basic Orchestrator OpenHIM Mediator"},s={unversionedId:"tutorial/mediators/orchestrator",id:"tutorial/mediators/orchestrator",isDocsHomePage:!1,title:"Building a basic Orchestrator Mediator",description:"Detailed tutorial on creating a basic Orchestrator OpenHIM Mediator",source:"@site/docs/tutorial/mediators/orchestrator.md",slug:"/tutorial/mediators/orchestrator",permalink:"/docs/next/tutorial/mediators/orchestrator",version:"current",sidebar_label:"Orchestrator Mediator",sidebar:"docs",previous:{title:"Building a Basic Mediator",permalink:"/docs/next/tutorial/mediators/basic-scaffold"},next:{title:"Building a Skeleton Production Mediator",permalink:"/docs/next/tutorial/mediators/production-scaffold"}},l=[{value:"Useful Links",id:"useful-links",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"OpenHIM Mediator Setup",id:"openhim-mediator-setup",children:[{value:"Step 1 - Preparing the Scaffold Mediator to be used for the Orchestrator",id:"step-1---preparing-the-scaffold-mediator-to-be-used-for-the-orchestrator",children:[]}]}],p={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"TLDR; Watch Linux Tutorial Setup on ",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://www.youtube.com/watch?v="}),"YouTube"))),Object(o.b)("h2",{id:"useful-links"},"Useful Links"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-mediator-bootstrap-orchestrator"}),"OpenHIM Orchestrator Bootstrap Mediator")),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tutorial Purpose: Create an Orchestrator OpenHIM Mediator registered with your local OpenHIM instance that illustrates how to implement your own custom mediator logic.")),Object(o.b)("p",null,"In this tutorial we will be designing an orchestrator mediator that will accept a request from the client for a list of Health Facilities. In our example, the client wants the facility list in JSON format. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.dhis2.org/2.28/en/user/html/ch02s02.html"}),"DHIS2")," is the source of our facility data and in this example only provides the data in XML. Therefore, our mediator will have to translate the data from XML into JSON before sending the response back to the client."),Object(o.b)("img",{alt:"Mediator Diagram",src:Object(i.a)("img/tutorial/mediatorDiagram.jpg")}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"NodeJS and NPM")),Object(o.b)("p",null,"This tutorial assumes you've setup the OpenHIM and understand the basics of an openHIM Mediator."),Object(o.b)("p",null,"Having a solid understanding of ExpressJS and Javascript ES6 syntax is advised."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"openhim-mediator-setup"},"OpenHIM Mediator Setup"),Object(o.b)("h3",{id:"step-1---preparing-the-scaffold-mediator-to-be-used-for-the-orchestrator"},"Step 1 - Preparing the Scaffold Mediator to be used for the Orchestrator"),Object(o.b)("p",null,"We will use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-mediator-bootstrap-scaffold"}),"OpenHIM Bootstrap Scaffold Mediator")," from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-mediator-tutorial/blob/master/1_Scaffold_OpenHIM_Mediator.md"}),"previous tutorial")," as the starting point for the orchestrator."),Object(o.b)("p",null,"To keep the two mediators from conflicting, the first thing we need to change for the orchestrator is the port numbers. Let's configure the ",Object(o.b)("inlineCode",{parentName:"p"},"Orchestrator")," to expose port 3001 ",Object(o.b)("em",{parentName:"p"},"instead")," of 3000 so that the two mediators can run at the same time. The files that set the port numbers are: ",Object(o.b)("inlineCode",{parentName:"p"},"index.js"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"mediatorConfig.json"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"//index.js\napp.listen(3001, () => {\n  console.log('Server listening on port 3001...')\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"#Dockerfile\nEXPOSE 3001\n")),Object(o.b)("p",null,"The last change is in the mediatorConfig.json and package.json files. Where ever the word scaffold was used replace this with ",Object(o.b)("strong",{parentName:"p"},"orchestrator"),". Your ",Object(o.b)("inlineCode",{parentName:"p"},"mediatorConfig")," file should now resemble this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "urn": "urn:mediator:tutorial_orchestrator",\n  "version": "1.0.0",\n  "name": "Orchestrator Mediator",\n  "description": "Tutorial Orchestrator Mediator",\n  "defaultChannelConfig": [\n    {\n      "name": "Bootstrap Orchestrator Mediator",\n      "urlPattern": "^/orchestrator$",\n      "routes": [\n        {\n          "name": "Bootstrap Orchestrator Mediator Route",\n          "host": "orchestrator",\n          "path": "/",\n          "port": "3001",\n          "primary": true,\n          "type": "http"\n        }\n      ],\n      "allow": ["admin"],\n      "methods": ["GET", "POST"],\n      "type": "http"\n    }\n  ],\n  "endpoints": [\n    {\n      "name": "Bootstrap Orchestrator Mediator Endpoint",\n      "host": "orchestrator",\n      "path": "/",\n      "port": "3001",\n      "primary": true,\n      "type": "http"\n    }\n  ],\n  "configDefs": [\n    {\n      "param": "tutorial",\n      "displayName": "Tutorial variables",\n      "description": "Some variables to demonstrate fetching OpenHIM mediator config",\n      "type": "struct",\n      "array": false,\n      "template": [\n        {\n          "param": "variable_1",\n          "displayName": "Variable 1",\n          "description": "First Variable",\n          "type": "string"\n        },\n        {\n          "param": "variable_2",\n          "displayName": "Variable 2",\n          "description": "Second Variable",\n          "type": "string"\n        }\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"Test the new project by building the image, get the docker network name, and start the container:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker build -t orchestrator .\n\ndocker network ls\n\ndocker run --network {openhim-network} -p 3001:3001 --name orchestrator --rm orchestrator\n")),Object(o.b)("p",null,"Open up the OpenHIM Console Mediators page in a browser and you should see your new mediator listed."),Object(o.b)("img",{alt:"Registered Orchestrator Mediator",src:Object(i.a)("img/tutorial/registerOrchestrator.png")}),Object(o.b)("p",null,"Important mediator changes are indicated in the following image. Once your orchestrator mediator is properly configured click the green ",Object(o.b)("strong",{parentName:"p"},"Add channel")," button in the bottom right corner."),Object(o.b)("img",{alt:"Important Orchestrator Details",src:Object(i.a)("img/tutorial/orchestratorDetails.png")}),Object(o.b)("p",null,"On the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:9000/#!/channels"}),"OpenHIM Console Channels")," page you should see your new orchestrator channel."),Object(o.b)("img",{alt:"Orchestrator Channel",src:Object(i.a)("img/tutorial/addOrchestratorChannel.png")}),Object(o.b)("p",null,"Click the yellow edit channel icon to view details of the channel. Go to the ",Object(o.b)("strong",{parentName:"p"},"Route")," tab and check that the host value is ",Object(o.b)("inlineCode",{parentName:"p"},"orchestrator")," and the port is ",Object(o.b)("strong",{parentName:"p"},"3001"),"."),Object(o.b)("img",{alt:"Orchestrator Route Details",src:Object(i.a)("img/tutorial/orchestratorRouteDetails.png")}))}u.isMDXComponent=!0},556:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(h,c(c({ref:t},l),{},{components:r})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},562:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(23),a=r(563);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},563:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);