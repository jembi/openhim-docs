(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{270:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(438)),a={id:"openhim-core-versioning-and-compatibility",title:"OpenHIM Core versioning and compatibility",sidebar_label:"OpenHIM Core versioning and compatibility - OpenHIM - Versioning",description:"The OpenHIM's versioning"},c={unversionedId:"user-guide/openhim-core-versioning-and-compatibility",id:"user-guide/openhim-core-versioning-and-compatibility",isDocsHomePage:!1,title:"OpenHIM Core versioning and compatibility",description:"The OpenHIM's versioning",source:"@site/docs/user-guide/versioning.md",slug:"/user-guide/openhim-core-versioning-and-compatibility",permalink:"/docs/next/user-guide/openhim-core-versioning-and-compatibility",version:"current",sidebar_label:"OpenHIM Core versioning and compatibility - OpenHIM - Versioning",sidebar:"docs",previous:{title:"Sample disaster recovery procedure",permalink:"/docs/next/user-guide/sample-disaster-recovery-procedure"},next:{title:"Auditing",permalink:"/docs/next/user-guide/auditing"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js"}),"OpenHIM Core component")," uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://semver.org/"}),"Semantic Versioning"),". This means that if a specific software component, such as the OpenHIM Console or a Mediator states that it is compatible with Core version 5.2 for example, it means that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"At a minimum the component is compatible with Core version 5.2 but is NOT guaranteed to work with a lower version of Core such 5.1"),Object(o.b)("li",{parentName:"ul"},"The component WILL be compatible with any patch version in its release range, such as Core 5.2.1 or Core 5.2.2, even if the component was developed against a higher patch number such as 5.2.3"),Object(o.b)("li",{parentName:"ul"},"The component WILL be compatible with Core 5.x, such as version 5.3 or 5.4, since these versions are backwards compatible with lower versions"),Object(o.b)("li",{parentName:"ul"},"The software component is NOT guaranteed to work with Core 6.0 or higher, however this doesn\u2019t preclude the possibility that it CAN work.")))}u.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,d=l["".concat(a,".").concat(b)]||l[b]||m[b]||o;return n?i.a.createElement(d,c(c({ref:t},p),{},{components:n})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);