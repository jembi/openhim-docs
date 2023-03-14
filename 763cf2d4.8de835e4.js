(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{362:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(674)),i={id:"mediators",title:"Mediators",sidebar_label:"Mediators",keywords:["OpenHIM","Mediators"],description:"Manage OpenHIM mediators"},s={unversionedId:"configuration/mediators",id:"version-7.0.x/configuration/mediators",isDocsHomePage:!1,title:"Mediators",description:"Manage OpenHIM mediators",source:"@site/versioned_docs/version-7.0.x/configuration/mediators.md",slug:"/configuration/mediators",permalink:"/docs/7.0.x/configuration/mediators",version:"7.0.x",sidebar_label:"Mediators",sidebar:"version-7.0.x/docs",previous:{title:"Import/Export",permalink:"/docs/7.0.x/configuration/import-export"},next:{title:"Users",permalink:"/docs/7.0.x/configuration/users"}},c=[{value:"Add a mediator",id:"add-a-mediator",children:[]}],l={toc:c};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Mediators")," can be built using any platform that is desired. The only restriction is that the mediator MUST communicate with the OpenHIM core in a particular way. Mediators must register themselves with the OpenHIM core, accept request from the OpenHIM core and return a specialised response to the OpenHIM core in order to explain what that mediator did."),Object(a.b)("h2",{id:"add-a-mediator"},"Add a mediator"),Object(a.b)("p",null,"Mediators are add-on services that run separately from the OpenHIM. They register themselves with the OpenHIM and once that is done, they will be displayed in the OpenHIM where their configuration details may be modified. Also, if a mediator is registered it will allow you to easily add routes that point to it in the channel configuration."),Object(a.b)("p",null,"Mediators may be developed in any language and only talk to the OpenHIM via its RESTful API. Therefore, the installation instructions will differ for each mediator. Please refer to the documentation of that mediator for details on how to install it. However, there are best practices that apply to all mediators."),Object(a.b)("p",null,"The following are best practices in regard to the setup of mediators:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Mediators do not have to be installed on the same server as the OpenHIM."),Object(a.b)("li",{parentName:"ol"},"Ensure that the mediator is able to reach the OpenHIM core servers\u2019 RESTful API endpoint."),Object(a.b)("li",{parentName:"ol"},"Ensure that the OpenHIM is able to reach the mediator\u2019s endpoint for receiving requests."),Object(a.b)("li",{parentName:"ol"},"Ensure that you configure the mediator with correct credentials so that it may access the OpenHIMs RESTful API as an admin user."),Object(a.b)("li",{parentName:"ol"},"Ensure that the mediator trusts the OpenHIMs core certificate (if it is self signed) as API communication must take place over https.")))}d.isMDXComponent=!0},674:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return r?o.a.createElement(f,s(s({ref:t},l),{},{components:r})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);