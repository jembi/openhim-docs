(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),o=(t(0),t(674)),a={id:"openhim-core-versioning-and-compatibility",title:"OpenHIM Core versioning and compatibility",sidebar_label:"OpenHIM Core versioning and compatibility - OpenHIM - Versioning",description:"The OpenHIM's versioning"},c={unversionedId:"user-guide/openhim-core-versioning-and-compatibility",id:"version-7.1.x/user-guide/openhim-core-versioning-and-compatibility",isDocsHomePage:!1,title:"OpenHIM Core versioning and compatibility",description:"The OpenHIM's versioning",source:"@site/versioned_docs/version-7.1.x/user-guide/versioning.md",slug:"/user-guide/openhim-core-versioning-and-compatibility",permalink:"/docs/user-guide/openhim-core-versioning-and-compatibility",version:"7.1.x",sidebar_label:"OpenHIM Core versioning and compatibility - OpenHIM - Versioning",sidebar:"version-7.1.x/docs",previous:{title:"Sample disaster recovery procedure",permalink:"/docs/user-guide/sample-disaster-recovery-procedure"},next:{title:"Auditing",permalink:"/docs/user-guide/auditing"}},s=[],p={toc:s};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js"}),"OpenHIM Core component")," uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://semver.org/"}),"Semantic Versioning"),". This means that if a specific software component, such as the OpenHIM Console or a Mediator states that it is compatible with Core version 5.2 for example, it means that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"At a minimum the component is compatible with Core version 5.2 but is NOT guaranteed to work with a lower version of Core such 5.1"),Object(o.b)("li",{parentName:"ul"},"The component WILL be compatible with any patch version in its release range, such as Core 5.2.1 or Core 5.2.2, even if the component was developed against a higher patch number such as 5.2.3"),Object(o.b)("li",{parentName:"ul"},"The component WILL be compatible with Core 5.x, such as version 5.3 or 5.4, since these versions are backwards compatible with lower versions"),Object(o.b)("li",{parentName:"ul"},"The software component is NOT guaranteed to work with Core 6.0 or higher, however this doesn\u2019t preclude the possibility that it CAN work.")))}u.isMDXComponent=!0},674:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,d=l["".concat(a,".").concat(b)]||l[b]||m[b]||o;return t?i.a.createElement(d,c(c({ref:n},p),{},{components:t})):i.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);