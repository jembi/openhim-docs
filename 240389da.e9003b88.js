(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{213:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(913)),i=r(919),s={id:"mediators",title:"Mediators",sidebar_label:"Mediators",keywords:["OpenHIM","Mediators"],description:"OpenHIM mediators"},c={unversionedId:"user-guide/mediators",id:"version-7.1.x/user-guide/mediators",isDocsHomePage:!1,title:"Mediators",description:"OpenHIM mediators",source:"@site/versioned_docs/version-7.1.x/user-guide/mediators.md",slug:"/user-guide/mediators",permalink:"/docs/7.1.x/user-guide/mediators",version:"7.1.x",sidebar_label:"Mediators",sidebar:"version-7.1.x/docs",previous:{title:"Certificates & Keystore",permalink:"/docs/7.1.x/user-guide/certificates-keystore"},next:{title:"Sample disaster recovery procedure",permalink:"/docs/7.1.x/user-guide/sample-disaster-recovery-procedure"}},d=[{value:"Mediator Types",id:"mediator-types",children:[{value:"Pass-through mediator",id:"pass-through-mediator",children:[]},{value:"Adaptor mediator",id:"adaptor-mediator",children:[]},{value:"Orchestration mediator",id:"orchestration-mediator",children:[]}]},{value:"Installing Mediators",id:"installing-mediators",children:[]},{value:"Existing Mediators",id:"existing-mediators",children:[]}],u={toc:d};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"OpenHIM mediators are separate micro services that run independently to the OpenHIM and perform additional tasks for a particular use case. The common tasks within a mediator are as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Message format adaptation - this is the transformation of messages received in a certain format into another format (eg. HL7 v2 to HL7 v3 or MHD to XDS.b)."),Object(o.b)("li",{parentName:"ul"},"Message orchestration - this is the execution of a business function that may need to call out to one or more other service endpoints on other systems. (eg. Enriching a message with a client's unique identifier retrieved from a client registry then sending the enriched message to a shared health record).")),Object(o.b)("p",null,"Mediators can be built using any platform. Commonly used languages include Java (using our mediator engine), Node.js and Python. The only restriction is that the mediator ",Object(o.b)("strong",{parentName:"p"},"must")," communicate with the OpenHIM Core in a particular way. Mediators must register themselves with the OpenHIM-core, accept request from the OpenHIM-core and return a specialised response to the OpenHIM-core to explain what that mediator did. See below for a diagram of how mediators fit into the overall OpenHIM architecture."),Object(o.b)("img",{alt:"OpenHIE Architecture",src:Object(i.a)("img/mediators/mediators-overview.png")}),Object(o.b)("p",null,"If you are interested in developing you own mediators see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../dev-guide/developing-mediators"}),"documentation available here")," and see our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/mediators/basic-scaffold"}),"tutorials page")," for specific examples to get you started."),Object(o.b)("h2",{id:"mediator-types"},"Mediator Types"),Object(o.b)("p",null,"There are a few common types of mediators, these are described below."),Object(o.b)("h3",{id:"pass-through-mediator"},"Pass-through mediator"),Object(o.b)("p",null,"A Pass-through mediator just accepts a request and passes it on unchanged, these are not very useful and are only really used as a starting point for development."),Object(o.b)("h3",{id:"adaptor-mediator"},"Adaptor mediator"),Object(o.b)("p",null,"An Adaptor mediators accept a request and transform/adapt that request into another format before sending the request on to its final destination."),Object(o.b)("h3",{id:"orchestration-mediator"},"Orchestration mediator"),Object(o.b)("p",null,"An Orchestration mediator accepts a request and uses that request to execute some business process. This could involve making webservice calls to one or more other services to gather additional information about the request or to process it further. Finally a response is collated and returned to the OpenHIM."),Object(o.b)("h2",{id:"installing-mediators"},"Installing Mediators"),Object(o.b)("p",null,"Mediators may be developed in any language and only talk to the OpenHIM via its RESTful API. Therefore, the installation instructions will differ for each mediator. Please refer to the documentation of that mediator to details on how to install it. However, there are a few points that apply to all mediators:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Mediators DO NOT have to be installed on the same server and the OpenHIM."),Object(o.b)("li",{parentName:"ul"},"You should ensure that the mediator is able to reach the OpenHIM-core servers RESTful API endpoint."),Object(o.b)("li",{parentName:"ul"},"You should ensure that the OpenHIM is able to reach the mediator's endpoint for receiving requests."),Object(o.b)("li",{parentName:"ul"},"You should ensure that you configure the mediator with correct credentials so that it may access the OpenHIMs RESTful API as an admin user."),Object(o.b)("li",{parentName:"ul"},"You should ensure that the mediator trust the OpenHIM-core's certificate (if it is self signed) as API communication MUST take place over https.")),Object(o.b)("h2",{id:"existing-mediators"},"Existing Mediators"),Object(o.b)("p",null,"To find some existing mediators we suggest either having a look at our ",Object(o.b)("a",{href:Object(i.a)("/mediator-library")},"mediator library")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/search?utf8=%E2%9C%93&q=%22openhim-mediator%22&type=Repositories&ref=searchresults"}),'searching github for "openhim-mediator"')," which is the naming convention for OpenHIM mediators. For more information on writing you own mediator ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../dev-guide/developing-mediators"}),"click here"),"."))}l.isMDXComponent=!0},913:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),u=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=a,h=l["".concat(i,".").concat(m)]||l[m]||p[m]||o;return r?n.a.createElement(h,s(s({ref:t},d),{},{components:r})):n.a.createElement(h,s({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},919:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var a=r(23),n=r(920);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(r,a)=>function(e,t,r,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(a)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,a)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},920:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))}}]);