(window.webpackJsonp=window.webpackJsonp||[]).push([[724],{799:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),i=t(7),o=(t(0),t(913)),a={id:"overview",title:"Server Uptime overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Server","Uptime","Overview"],description:"An overview of the OpenHIM's running time"},p={unversionedId:"api/server-uptime/overview",id:"version-7.2.x/api/server-uptime/overview",isDocsHomePage:!1,title:"Server Uptime overview",description:"An overview of the OpenHIM's running time",source:"@site/versioned_docs/version-7.2.x/api/server-uptime/overview.md",slug:"/api/server-uptime/overview",permalink:"/docs/7.2.x/api/server-uptime/overview",version:"7.2.x",sidebar_label:"Overview",sidebar:"version-7.2.x/api",previous:{title:"Delete role",permalink:"/docs/7.2.x/api/roles/delete"},next:{title:"Read Server Uptime",permalink:"/docs/7.2.x/api/server-uptime/read"}},c=[],s={toc:c};function u(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This allows us to get the uptime of the OpenHIM server. It also gives us a list of the mediators currently registered to the OpenHIM and their uptimes as well."),Object(o.b)("p",null,"The endpoint is public and this is convenient for integrating with external monitoring tools."))}u.isMDXComponent=!0},913:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var r=i.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=u(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},v={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},f=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(t),f=n,m=l["".concat(a,".").concat(f)]||l[f]||v[f]||o;return t?i.a.createElement(m,p(p({ref:r},s),{},{components:t})):i.a.createElement(m,p({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);