(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{524:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(913)),a={id:"overview",title:"Import/export overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Import","Export","Metadata","Overview"],description:"An overview of the OpenHIM's metadata export/import"},p={unversionedId:"api/import-export/overview",id:"version-7.2.x/api/import-export/overview",isDocsHomePage:!1,title:"Import/export overview",description:"An overview of the OpenHIM's metadata export/import",source:"@site/versioned_docs/version-7.2.x/api/import-export/overview.md",slug:"/api/import-export/overview",permalink:"/docs/7.2.x/api/import-export/overview",version:"7.2.x",sidebar_label:"Overview",sidebar:"version-7.2.x/api",previous:{title:"Delete contact group",permalink:"/docs/7.2.x/api/contacts-group/delete"},next:{title:"Create metadata",permalink:"/docs/7.2.x/api/import-export/create"}},c=[],s={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This resource allows for the user to export and import channels, clients, mediators, users and contact groups."),Object(i.b)("p",null,"The import checks for conflicts in the database and either updates or inserts based on the result. The ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," method is used for the export and the ",Object(i.b)("inlineCode",{parentName:"p"},"POST")," for the import."))}u.isMDXComponent=!0},913:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(a,".").concat(f)]||l[f]||d[f]||i;return r?o.a.createElement(m,p(p({ref:t},s),{},{components:r})):o.a.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);