(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{304:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(913)),a=r(919),s={id:"overview",title:"OpenHIM Overview",sidebar_label:"OpenHIM Overview",keywords:["OpenHIM","Overview"],description:"An overview of the OpenHIM"},c={unversionedId:"user-guide/overview",id:"version-8.0.x/user-guide/overview",isDocsHomePage:!1,title:"OpenHIM Overview",description:"An overview of the OpenHIM",source:"@site/versioned_docs/version-8.0.x/user-guide/overview.md",slug:"/user-guide/overview",permalink:"/docs/user-guide/overview",version:"8.0.x",sidebar_label:"OpenHIM Overview",sidebar:"version-8.0.x/docs",previous:{title:"Building a Skeleton Production Mediator",permalink:"/docs/tutorial/mediators/production-scaffold"},next:{title:"Adding Users",permalink:"/docs/user-guide/adding-users"}},u=[],l={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The OpenHIM consists of the following major components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core"),Object(i.b)("li",{parentName:"ul"},"Mediators"),Object(i.b)("li",{parentName:"ul"},"Console")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Core")," provides the OpenHIM's main functionality; it processes the transactions from client systems. Its functionality is enhanced via ",Object(i.b)("em",{parentName:"p"},"Mediators"),", which are loosely coupled services that can add business logic to the transaction flow."),Object(i.b)("p",null,"Core by default listens on ports 5000 (HTTPS) and 5001 (HTTP). These ports are therefore the ",Object(i.b)("strong",{parentName:"p"},"front door")," that external client systems use to communicate with the OpenHIM. Core also provides an API, by default on port 8080. The ",Object(i.b)("em",{parentName:"p"},"Console")," makes use of this API to manage and view the OpenHIM data. Mediators also use the API for tasks such as registration and heartbeats."),Object(i.b)("p",null,"The following diagram summarizes the components:"),Object(i.b)("img",{alt:"OpenHIM Ports",src:Object(a.a)("img/overview/openhim-ports.png")}))}p.isMDXComponent=!0},913:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?o.a.createElement(b,s(s({ref:t},u),{},{components:r})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},919:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(23),o=r(920);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},920:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);