(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(438)),i={id:"setup-ssl",title:"Setup SSL",sidebar_label:"Setup SSL",keywords:["OpenHIM","Setup SSL"],description:"Setup SSL certificates for the OpenHIM-core"},a={unversionedId:"how-to/setup-ssl",id:"version-5.2.x/how-to/setup-ssl",isDocsHomePage:!1,title:"Setup SSL",description:"Setup SSL certificates for the OpenHIM-core",source:"@site/versioned_docs/version-5.2.x/how-to/how-to-setup-ssl-certs.md",slug:"/how-to/setup-ssl",permalink:"/docs/5.2.x/how-to/setup-ssl",version:"5.2.x",sidebar_label:"Setup SSL",sidebar:"version-5.2.x/docs",previous:{title:"Install on CentOS",permalink:"/docs/5.2.x/how-to/install-on-centos"},next:{title:"Run the OpenHIM on startup",permalink:"/docs/5.2.x/how-to/run-openhim-on-startup"}},s=[{value:"Install SSL certificates for Openhim-core",id:"install-ssl-certificates-for-openhim-core",children:[]},{value:"Install SSL certificates for Openhim-console",id:"install-ssl-certificates-for-openhim-console",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"install-ssl-certificates-for-openhim-core"},"Install SSL certificates for Openhim-core"),Object(c.b)("p",null,"This can be accomplished directly from the OpenHIM console, where you can upload a new certificate for openhim-core through the console."),Object(c.b)("p",null,"Openhim-core can be set to automatically watch a path which contains its certificates. The settings for which path and whether or not it should be automatically monitored, can be configured in the openhim-core config file under: ",Object(c.b)("inlineCode",{parentName:"p"},"certificateManagement"),"."),Object(c.b)("p",null,"If the config gets updated, openhim-core will need to be restarted."),Object(c.b)("h2",{id:"install-ssl-certificates-for-openhim-console"},"Install SSL certificates for Openhim-console"),Object(c.b)("p",null,"We recommend setting up NGINX in front of openhim-console which is where SSL certificates should then be used. Here is a ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04"}),"blog")," to introduce you to how that could work."),Object(c.b)("p",null,"Certificates can be purchased or are freely available by using ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://letsencrypt.org/"}),"Letsencrypt"),"."))}p.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,b=u["".concat(i,".").concat(h)]||u[h]||f[h]||c;return n?o.a.createElement(b,a(a({ref:t},l),{},{components:n})):o.a.createElement(b,a({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);