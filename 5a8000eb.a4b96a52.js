(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{240:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(1),o=(t(0),t(382));const a={id:"overview",title:"Roles overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Role","Overview"],description:"An overview of the OpenHIM Roles"},i={id:"api/roles/overview",title:"Roles overview",description:"An overview of the OpenHIM Roles",source:"@site/docs/api/roles/overview.md",permalink:"/docs/next/api/roles/overview",version:"next",sidebar_label:"Overview",sidebar:"api",previous:{title:"Read Metrics",permalink:"/docs/next/api/metrics/read"},next:{title:"Create Role",permalink:"/docs/next/api/roles/create"}},l=[],c={rightToc:l},s="wrapper";function p({components:e,...n}){return Object(o.b)(s,Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Allows for the management of client access control to channels."),Object(o.b)("p",null,"It should be noted that there is no actual roles collection in the database. The API is a facade on top of the ",Object(o.b)("inlineCode",{parentName:"p"},"allow")," and ",Object(o.b)("inlineCode",{parentName:"p"},"roles")," fields from Channels and Clients respectively. Roles can therefore also be altered by changing values for those fields directly."))}p.isMDXComponent=!0},382:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r),a=o.a.createContext({}),i=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=i(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),d=r,u=p[l+"."+d]||p[d]||s[d]||a;return t?o.a.createElement(u,Object.assign({},{ref:n},c,{components:t})):o.a.createElement(u,Object.assign({},{ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);