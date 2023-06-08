(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{415:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(913)),i=t(919),c={id:"roadmap",title:"Roadmap",sidebar_label:"Roadmap",keywords:["OpenHIM","Roadmap"],description:"The OpenHIM's roadmap"},p={unversionedId:"introduction/roadmap",id:"version-7.1.x/introduction/roadmap",isDocsHomePage:!1,title:"Roadmap",description:"The OpenHIM's roadmap",source:"@site/versioned_docs/version-7.1.x/introduction/roadmap.md",slug:"/introduction/roadmap",permalink:"/docs/7.1.x/introduction/roadmap",version:"7.1.x",sidebar_label:"Roadmap",sidebar:"version-7.1.x/docs",previous:{title:"Key Components and What They Do",permalink:"/docs/7.1.x/introduction/key-components"},next:{title:"Getting Involved",permalink:"/docs/7.1.x/introduction/community"}},s=[{value:"OpenHIM Roadmap",id:"openhim-roadmap",children:[{value:"Scope",id:"scope",children:[]},{value:"Timeline for 2023",id:"timeline-for-2023",children:[]}]}],d={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"openhim-roadmap"},"OpenHIM Roadmap"),Object(a.b)("h3",{id:"scope"},"Scope"),Object(a.b)("p",null,"The OpenHIM roadmap covers four key functional areas, aiming to serve the needs of both new and existing implementations and ensuring that project-specific features and support requests are built into the core product to be made available across implementations."),Object(a.b)("h4",{id:"console-and-core"},"Console and Core"),Object(a.b)("p",null,"This covers features of the core OpenHIM product, including user experience improvements, improvements to containerizing and orchestrating deployment of the OpenHIM, routing engine refactoring to allow for optimisation of transaction handling and processing towards improved performance, support for alerting and transaction replays to rerun past messages in the stream and perform new calculations or re-execute logic that failed previously."),Object(a.b)("h4",{id:"mediator-library"},"Mediator Library"),Object(a.b)("p",null,"This covers features related to improved development and deployment of OpenHIM mediators, including advancements to the OpenHIM mapping mediator, DHIS2 Tracker mediators, and others to support common HIE use cases and alignment with the OpenHIE specification, containerizing and orchestrating deployment of OpenHIM mediators, and improved support for HL7 FHIR data exchange in line with the increased maturity of FHIR and adoption of the standard by the OpenHIE community."),Object(a.b)("h4",{id:"modernization"},"Modernization"),Object(a.b)("p",null,"Product modernization is aimed at keeping the OpenHIM technology and dependency stack up to date, ensuring application security and leveraging performance and reliability improvements as the tools in the technology stack advance. This includes updating packages and interdependencies in the OpenHIM to patch potential security flaws and vulnerabilities, and enable compatibility with newer versions of underlying software e.g. Node.js and MongoDB. These efforts aim to improve the scalability of the OpenHIM, and allow for more secure handling of payloads using fewer resources in support of the rollout and ongoing maintenance of OpenHIM implementations."),Object(a.b)("h4",{id:"support-and-maintenance"},"Support and Maintenance"),Object(a.b)("p",null,"This covers ongoing support for OpenHIM implementations and the user community, including updates to OpenHIM deployment processes and end user documentation, support channels and tutorials that allow implementers to more easily and effectively set up, configure and maintain their instances of the OpenHIM."),Object(a.b)("h3",{id:"timeline-for-2023"},"Timeline for 2023"),Object(a.b)("img",{alt:"OpenHIM Roadmap",src:Object(i.a)("img/roadmap2023.png")}))}u.isMDXComponent=!0},913:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||l[m]||a;return t?o.a.createElement(f,c(c({ref:n},s),{},{components:t})):o.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},919:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));var r=t(23),o=t(920);function a(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(r.default)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(r)return n+t;const i=t.startsWith(n)?t:n+t.replace(/^\//,"");return a?e+i:i}(n,e,t,r)}}function i(e,n={}){const{withBaseUrl:t}=a();return t(e,n)}},920:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))}}]);