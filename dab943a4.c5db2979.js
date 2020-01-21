(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{310:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(6),a=(r(0),r(338)),i={id:"overview",title:"Import/export overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Import","Export","Metadata","Overview"],description:"An overview of the OpenHIM's metadata export/import"},p=[],c={id:"api/import-export/overview",title:"Import/export overview",description:"An overview of the OpenHIM's metadata export/import",source:"@site/docs/api/import-export/overview.md",permalink:"/docs/next/api/import-export/overview",version:"next",sidebar_label:"Overview",sidebar:"api",previous:{title:"Delete contact group",permalink:"/docs/next/api/contacts-group/delete"},next:{title:"Create metadata",permalink:"/docs/next/api/import-export/create"}},s={rightToc:p,metadata:c},d="wrapper";function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)(d,Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This resource allows for the user to export and import channels, clients, mediators, users and contact groups."),Object(a.b)("p",null,"The import checks for conflicts in the database and either updates or inserts based on the result. The ",Object(a.b)("inlineCode",{parentName:"p"},"GET")," method is used for the export and the ",Object(a.b)("inlineCode",{parentName:"p"},"POST")," for the import."))}l.isMDXComponent=!0},338:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return l}));var n=r(0),o=r.n(n),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},p=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),d=i(r),l=n,u=d[p+"."+l]||d[l]||s[l]||a;return r?o.a.createElement(u,Object.assign({},{ref:t},c,{components:r})):o.a.createElement(u,Object.assign({},{ref:t},c))}));function l(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);