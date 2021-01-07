(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(438)),i=n(444),s={id:"design-details",title:"Detailed design using Node.js",sidebar_label:"Detailed design using Node.js",keywords:["openhim","design"],description:"Designing the OpenHIM"},l={unversionedId:"dev-guide/design-details",id:"version-5.2.x/dev-guide/design-details",isDocsHomePage:!1,title:"Detailed design using Node.js",description:"Designing the OpenHIM",source:"@site/versioned_docs/version-5.2.x/dev-guide/design-details.md",slug:"/dev-guide/design-details",permalink:"/docs/5.2.x/dev-guide/design-details",version:"5.2.x",sidebar_label:"Detailed design using Node.js",sidebar:"version-5.2.x/docs",previous:{title:"Design overview",permalink:"/docs/5.2.x/dev-guide/design-overview"},next:{title:"Getting started with OpenHIM development",permalink:"/docs/5.2.x/dev-guide/openhim-development"}},c=[{value:"Libraries to use",id:"libraries-to-use",children:[]},{value:"General Overview",id:"general-overview",children:[]},{value:"Design",id:"design",children:[]},{value:"Authentication and Authorization",id:"authentication-and-authorization",children:[{value:"Authentication",id:"authentication",children:[]},{value:"Authorization",id:"authorization",children:[]}]},{value:"Message persistence",id:"message-persistence",children:[]},{value:"Router",id:"router",children:[]},{value:"Restful API",id:"restful-api",children:[]}],u={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," this design document was written before the development OpenHIM an as such some of the detail have changed or evolved with the OpenHIM's continued development. It is a good starting point but not a complete picture.")),Object(r.b)("p",null,"Node.js is a good technology option on which to develop the interoperability layer core component for the following reasons:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Very lightweight"),Object(r.b)("li",{parentName:"ul"},"Robust HTTP library"),Object(r.b)("li",{parentName:"ul"},"Great support from 3rd party libraries for reading and modifying HTTP requests"),Object(r.b)("li",{parentName:"ul"},"Highly performant")),Object(r.b)("h2",{id:"libraries-to-use"},"Libraries to use"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://koajs.com/"}),"Koa")," - Koa is a new web application framework for node.js. It provides easy mechanisms to expose web endpoints and process requests and responses in a stack-like approach."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://passportjs.org/"}),"Passport.js")," - Middleware to provide authentication mechanisms (in the current implementation this has not yet been used).")),Object(r.b)("h2",{id:"general-overview"},"General Overview"),Object(r.b)("p",null,"The Koa framework provides an easy way to modify HTTP request and responses as they are being processed. Each step that the OpenHIM needs to perform can be written as Koa middleware. Each middleware can handle a different aspect of processing that the OpenHIM need to perform such as authentication, authorization, message persistence and message routing. Developing each of these steps as Koa middleware allows them to be easily reused and allows us to add new steps for future versions. The Koa stack approach to processing requests also fits our use case well as it allows the middleware to affect both the request and the response as it is travelling through the system."),Object(r.b)("p",null,"The Koa framework also gives us some convenience objects, such as ",Object(r.b)("inlineCode",{parentName:"p"},"ctx.request")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ctx.response"),", that are designed to be used for web applications but they are equally useful for handling web services."),Object(r.b)("h2",{id:"design"},"Design"),Object(r.b)("p",null,"The OpenHIM-core uses Koa middleware to act on HTTP requests and Responses. Koa allows you to setup a stack of middleware, each middleware is called in order and gets an opportunity to act on the request (going down the stack) and is then suspended. Once the end of the stack is reached Koa traverses back up the stack allowing each middleware to act on the response."),Object(r.b)("p",null,"Each row in the diagram below represents a middleware component of the OpenHIM-core. Each of the components of the OpenHIM-core will be described further in the following sections. The OpenHIM-core also has a REST API that will allow a web UI to be created for easy of management."),Object(r.b)("img",{alt:"OpenHIM Design",src:Object(i.a)("img/design/OpenHIM-js-design.png")}),Object(r.b)("h2",{id:"authentication-and-authorization"},"Authentication and Authorization"),Object(r.b)("p",null,"The are two possible combinations of authentication that the interoperability layer(IL) should provide to determine a client's identity:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"HTTP basic authentication"),Object(r.b)("li",{parentName:"ul"},"ATNAs Node Authentication (PKI)")),Object(r.b)("p",null,"Once identity has been established the IL core component should check if that client has the authority to access the requested service."),Object(r.b)("p",null,"The HIM should also provide a single-sign-on (SSO) facility to allow users of the HIE management application to have a single identity that they may used to access these applications. To do this the HIM should also act as an openid provider and provide functions to manage SSO users."),Object(r.b)("p",null,"The two main workflows that we wish to enable for authentication and authorization are described in the following workflows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.ohie.org/display/documents/Common+message+security+workflow"}),"Common message security workflow")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.ohie.org/display/documents/SSO+User+workflow"}),"SSO User workflow"))),Object(r.b)("h3",{id:"authentication"},"Authentication"),Object(r.b)("p",null,"Client details for authentication are stored in the MongoDB database in the following format. Either a password or a certificate (in binary form) is stored in this structure depending on whether the user chooses to use PKI or HTTP basic auth to authenticate clients."),Object(r.b)("p",null,"The OpenHIM application should allow new clients to be added and managed with the following details:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "clientID": "Musha_OpenMRS",\n    "domain": "him.jembi.org",\n    "name": "OpenMRS Musha instance",\n    "roles": [ "OpenMRS_PoC", "PoC" ],\n    "passwordHash": "",\n    "cert": ""\n}\n')),Object(r.b)("h4",{id:"basic-auth"},"Basic auth"),Object(r.b)("p",null,"When authentication is set to HTTP basic auth, then Koa middleware is setup to intercept the request as soon as it enters the OpenHIM as shown above. This middleware will read client details (username and password-hash) out of the MongoDB store to determine if the client can be authenticated. If the client is rejected an error is returned else the request is considered authenticated and is then passed onto the authorization step."),Object(r.b)("h4",{id:"public-key-infrastructure-pki---mutual-tls"},"Public key Infrastructure (PKI) - mutual TLS"),Object(r.b)("p",null,"When the authentication method is set to PKI then the node http server must be setup to use https and it must be set to trust only clients that have a known certificate (stored in a ",Object(r.b)("inlineCode",{parentName:"p"},"Client"),"'s details). The domain of a client (identified in its certificate) will be used to map a request received from a client to its details as stored by the OpenHIM (shown above)."),Object(r.b)("p",null,"To help perform the authentication the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://passportjs.org/"}),"passport.js")," module will be used. This provides us with middleware for a number of different authentication schemes. There is also ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rkusa/koa-passport"}),"Koa middleware available for passport"),"."),Object(r.b)("h3",{id:"authorization"},"Authorization"),Object(r.b)("p",null,"The OpenHIM only performs simple authorisation based on the path that is being requested. It should be able to restrict access to certain paths to clients with particular roles. Roles are identified in each client's details. The channel description shown in the router section below shows that each path has one or more allowed roles or clients associated with it. The authorisation component will check if the authenticated client has the authority to access the current path. If authorized the request will be passed on, else, the request will be denied and a HTTP 401 message will be returned."),Object(r.b)("h2",{id:"message-persistence"},"Message persistence"),Object(r.b)("p",null,"Each request and response will be persisted so that it can be logged and so that the erroneous transaction may be re-run. This persistence occurs at two stages. Firstly, once a request is authenticated and authorised. Secondly, once a response has been received from the external service. All the metadata about a transaction is stored in a single document in MongoDB. The relevant sections are just updated as new information is received. The structure of this information is shown below."),Object(r.b)("p",null,"In addition, the ability to store orchestration steps exists in the structure. We anticipate exposing a web service to enable mediators to report requests and responses that they make and receive from external services and have these stored alongside the actual transaction."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "123",\n    "status": "Processing|Failed|Completed",\n    "clientID": "Musha_OpenMRS",\n    "request": {\n        "path": "/api/test",\n        "headers": {\n            "header1": "value1",\n            "header2": "value2"\n        },\n        "querystring": "param1=value1&param2=value2",\n        "body": "<HTTP body>",\n        "method": "POST",\n        "timestamp": "<ISO 8601>"\n    },\n    "response": {\n        "status": 201,\n        "body": "<HTTP body>",\n        "headers": {\n            "header1": "value1",\n            "header2": "value2"\n        },\n        "timestamp": "<ISO 8601>"\n    },\n    "routes": [\n        {\n            "name": "<route name>"\n            // Same structure as above\n            "request": { ... },\n            "response": { ... }\n        }\n    ]\n    "orchestrations": [\n        {\n            "name": "<orchestration name>"\n            // Same structure as above\n            "request": { ... },\n            "response": { ... }\n        }\n    ]\n    "properties": { // optional meta data about a transaction\n        "prop1": "value1",\n        "prop2": "value2"\n    }\n}\n')),Object(r.b)("h2",{id:"router"},"Router"),Object(r.b)("p",null,"The router allows requests to be forwarded to one or more external services (these could be mediators or an actual HIE component). It does this by allowing the user to configure a number of channels. Each channel matches a certain path and contains a number of routes on which to forward requests. Request may be forwarded to multiple routes however, there can only be one ",Object(r.b)("strong",{parentName:"p"},"primary route"),". The primary route is a the route whose response is returned back to the service requester making use of the OpenHIM."),Object(r.b)("p",null,"Channels may be added, removed or updated dynamically as the application is running."),Object(r.b)("p",null,"A channel may be access controlled via the ",Object(r.b)("inlineCode",{parentName:"p"},"allow")," field. This field will specify a list of users or groups that are allowed to send requests to that channel. If a channel receives a request from an un-authorised source it will return an error."),Object(r.b)("p",null,"A custom router will have to be developed that can route according to these rules. The router can be built using the node.js functions provided to make HTTP requests and responses can be relayed using the ",Object(r.b)("inlineCode",{parentName:"p"},".pipe()")," function."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "name": "Some Registry Channel",\n        "urlPattern": "test/sample/.+",\n        "allow": "*",\n        "routes": [\n            {\n                "name": "Some Registry",\n                "path": "some/other/path", // this is optional if left out original path is used\n                "host": "localhost",\n                "port": 8080\n            }\n\n        ],\n        "properties": [ // optional meta data about a channel\n            { "prop1": "value1" },\n            { "prop2": "value2" }\n        ]\n    },\n    {\n        "name": "Some Registry Channel",\n        "urlPattern": "test/sample2/.+/test2",\n        "allow": [ "Alice","Bob", "PoC" ],\n        "routes": [\n            {\n                "name": "Some Registry",\n                "host": "localhost",\n                "port": 8080,\n                "primary": true\n            },\n            {\n                "name": "Logger",\n                "host": "log-host",\n                "port": 4789\n            }\n        ],\n        "properties": [ // optional meta data about a channel\n            { "prop1": "value1" },\n            { "prop2": "value2" }\n        ]\n    }\n]\n')),Object(r.b)("h2",{id:"restful-api"},"Restful API"),Object(r.b)("p",null,"The OpenHIM must also expose a restful API that enables it to be configured and to allow access to the logged transactions. This restful API will drive a web application that can allow the OpenHIM to be configured and will allow transactions to be viewed and monitored."),Object(r.b)("p",null,"The API must supply CRUD access to the following constructs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"transaction logs"),Object(r.b)("li",{parentName:"ul"},"transaction channels"),Object(r.b)("li",{parentName:"ul"},"client details")),Object(r.b)("p",null,"It should also allow for the following actions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"single and batch re-processing of transactions"),Object(r.b)("li",{parentName:"ul"},"querying for monitoring statistics")),Object(r.b)("p",null,"The API reference as it currently exists can be ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../api/transactions/overview"}),"found here"),"."))}d.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,b=d["".concat(i,".").concat(p)]||d[p]||h[p]||r;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},444:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(23),o=n(445);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,s=void 0!==i&&i,l=r.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},445:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);