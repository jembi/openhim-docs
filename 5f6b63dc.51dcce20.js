(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{395:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(913)),a={id:"openhie",title:"OpenHIE",sidebar_label:"OpenHIE",keywords:["OpenHIM","OpenHIE"],description:"OpenHIE"},c={unversionedId:"implementations/openhie",id:"version-8.0.x/implementations/openhie",isDocsHomePage:!1,title:"OpenHIE",description:"OpenHIE",source:"@site/versioned_docs/version-8.0.x/implementations/openhie.md",slug:"/implementations/openhie",permalink:"/docs/implementations/openhie",version:"8.0.x",sidebar_label:"OpenHIE",sidebar:"version-8.0.x/docs",previous:{title:"MomConnect",permalink:"/docs/implementations/momconnect"},next:{title:"Install on CentOS",permalink:"/docs/how-to/install-on-centos"}},p=[{value:"How the OpenHIM is used",id:"how-the-openhim-is-used",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"OpenHIE is an initiative that aims to provide a reference architecture and workflow specifications for sharing health information between point of care systems in low resource settings. It aims to be standards-based and open such that components of the architecture can be swapped out as is necessary. OpenHIE is made up of a number of sub-communities that each aim to discuss a particular component of the architecture. Each community maintains a reference implementation of their particular component."),Object(i.b)("p",null,"For more information see the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://ohie.org/"}),"OpenHIE website"),"."),Object(i.b)("h2",{id:"how-the-openhim-is-used"},"How the OpenHIM is used"),Object(i.b)("p",null,"The OpenHIM acts as a reference implementation of the interoperability layer component within the OpenHIE architecture. To learn more about this component please see the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://wiki.ohie.org/display/SUB/Interoperability+Layer+Community"}),"interoperability layer community wiki"),"."))}l.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,b=u["".concat(a,".").concat(f)]||u[f]||m[f]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);