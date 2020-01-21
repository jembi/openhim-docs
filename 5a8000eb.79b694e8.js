(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(1),a=t(6),o=(t(0),t(338)),i={id:"overview",title:"Roles overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Role","Overview"],description:"An overview of the OpenHIM Roles"},l=[],c={id:"api/roles/overview",title:"Roles overview",description:"An overview of the OpenHIM Roles",source:"@site/docs/api/roles/overview.md",permalink:"/docs/next/api/roles/overview",version:"next",sidebar_label:"Overview",sidebar:"api",previous:{title:"Read Metrics",permalink:"/docs/next/api/metrics/read"},next:{title:"Create Role",permalink:"/docs/next/api/roles/create"}},s={rightToc:l,metadata:c},p="wrapper";function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Allows for the management of client access control to channels."),Object(o.b)("p",null,"It should be noted that there is no actual roles collection in the database. The API is a facade on top of the ",Object(o.b)("inlineCode",{parentName:"p"},"allow")," and ",Object(o.b)("inlineCode",{parentName:"p"},"roles")," fields from Channels and Clients respectively. Roles can therefore also be altered by changing values for those fields directly."))}d.isMDXComponent=!0},338:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),d=r,u=p[l+"."+d]||p[d]||s[d]||o;return t?a.a.createElement(u,Object.assign({},{ref:n},c,{components:t})):a.a.createElement(u,Object.assign({},{ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);