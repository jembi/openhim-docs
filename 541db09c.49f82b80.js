(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{361:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(915)),o={id:"privacy-disclaimer",title:"Data Privacy Disclaimer",sidebar_label:"Data Privacy Disclaimer",keywords:["OpenHIM","Community"],description:"The OpenHIM privacy disclaimer"},s={unversionedId:"introduction/privacy-disclaimer",id:"version-8.0.x/introduction/privacy-disclaimer",isDocsHomePage:!1,title:"Data Privacy Disclaimer",description:"The OpenHIM privacy disclaimer",source:"@site/versioned_docs/version-8.0.x/introduction/privacy-disclaimer.md",slug:"/introduction/privacy-disclaimer",permalink:"/docs/introduction/privacy-disclaimer",version:"8.0.x",sidebar_label:"Data Privacy Disclaimer",sidebar:"version-8.0.x/docs",previous:{title:"Getting Involved",permalink:"/docs/introduction/community"},next:{title:"Prerequisites",permalink:"/docs/getting-started/prerequisites"}},c=[],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All users downloading and using OpenHIM should note the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All message data sent to the OpenHIM is retained indefinitely within the OpenHIM\u2019s MongoDB database. By default, this data is stored indefinitely in line with the function of a middleware software with audit & transaction replay capabilities."),Object(i.b)("li",{parentName:"ul"},"All message data is stored in OpenHIM's MongoDB and is only accessible or viewable by a) An authorized admin-level user or a user that has been explicitly allowed to do so or; b) An authorized system administrator staff member having access to the server itself."),Object(i.b)("li",{parentName:"ul"},"Access to the message data stored in OpenHIM\u2019s MongoDB database is controlled by the organization hosting OpenHIM. This organisation must know its responsibilities as a \u2018Data Controller\u2019 and potentially other roles, as defined in standard data privacy regulations, such as the General Data Protection Regulation (GDPR) and the South African Protection of Personal Information Act (POPIA). The organisation using OpenHIM is responsible for having the required policies in place to ensure compliance with the applicable laws and regulations in the country where the software is being operated."),Object(i.b)("li",{parentName:"ul"},"All message data stored in OpenHIM's MongoDB may be purged at any time by direct commands to the MongoDB database or the use of the data retention feature of OpenHIM channels."),Object(i.b)("li",{parentName:"ul"},"Basic data about OpenHIM users (name and email) is stored indefinately so that they may access the OpenHIM console. These users may be removed at any time if they are no longer needed.")))}d.isMDXComponent=!0},915:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);