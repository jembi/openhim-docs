(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{213:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),a=(t(0),t(438)),i={id:"overview",title:"Roles overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Role","Overview"],description:"An overview of the OpenHIM Roles"},c={unversionedId:"api/roles/overview",id:"version-5.4.x/api/roles/overview",isDocsHomePage:!1,title:"Roles overview",description:"An overview of the OpenHIM Roles",source:"@site/versioned_docs/version-5.4.x/api/roles/overview.md",slug:"/api/roles/overview",permalink:"/docs/api/roles/overview",version:"5.4.x",sidebar_label:"Overview",sidebar:"version-5.4.x/api",previous:{title:"Read Metrics",permalink:"/docs/api/metrics/read"},next:{title:"Create Role",permalink:"/docs/api/roles/create"}},l=[],s={toc:l};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Allows for the management of client access control to channels."),Object(a.b)("p",null,"It should be noted that there is no actual roles collection in the database. The API is a facade on top of the ",Object(a.b)("inlineCode",{parentName:"p"},"allow")," and ",Object(a.b)("inlineCode",{parentName:"p"},"roles")," fields from Channels and Clients respectively. Roles can therefore also be altered by changing values for those fields directly."))}p.isMDXComponent=!0},438:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},v=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),v=n,d=u["".concat(i,".").concat(v)]||u[v]||f[v]||a;return t?o.a.createElement(d,c(c({ref:r},s),{},{components:t})):o.a.createElement(d,c({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=v;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"}}]);