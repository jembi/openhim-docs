(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{340:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return l}));var o=r(1),n=(r(0),r(382));const i={id:"production-scaffold",title:"Building a Skeleton Production Mediator",sidebar_label:"Scaffold Production Mediator",keywords:["mediator","tutorial","scaffold","production","skeleton"],description:"Detailed tutorial on creating a skeleton Production OpenHIM Mediator"},a={id:"tutorial/mediators/production-scaffold",title:"Building a Skeleton Production Mediator",description:"Detailed tutorial on creating a skeleton Production OpenHIM Mediator",source:"@site/docs/tutorial/mediators/production-scaffold.md",permalink:"/docs/next/tutorial/mediators/production-scaffold",version:"next",sidebar_label:"Scaffold Production Mediator",sidebar:"docs",previous:{title:"Building a basic Orchestrator Mediator",permalink:"/docs/next/tutorial/mediators/orchestrator"},next:{title:"OpenHIM Overview",permalink:"/docs/next/user-guide/overview"}},d=[{value:"Useful Links",id:"useful-links",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]}],c={rightToc:d},u="wrapper";function l({components:e,...t}){return Object(n.b)(u,Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"useful-links"},"Useful Links"),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-mediator-bootstrap-production"}),"OpenHIM Orchestrator Bootstrap Production")),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"This page in the mediator tutorial is purely to point you to the provided mediator scaffolding for creating a production ready mediator. A future code along video ",Object(n.b)("em",{parentName:"p"},"might")," come along soon."),Object(n.b)("p",null,"This repo aims to encourage good mediator project setup."),Object(n.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"NodeJS, NPM and Docker installed"),Object(n.b)("li",{parentName:"ul"},"You've setup the OpenHIM and have already prototyped an openHIM Mediator using the tutorial scaffold mediators provided."),Object(n.b)("li",{parentName:"ul"},"It is advisable to have a solid understanding of ExpressJS and Javascript ES6 syntax.")))}l.isMDXComponent=!0},382:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return s}));var o=r(0),n=r.n(o),i=n.a.createContext({}),a=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},d=function(e){var t=a(e.components);return n.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},l=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(r[o]=e[o]);return r}(e,["components","mdxType","originalType","parentName"]),l=a(r),s=o,p=l[d+"."+s]||l[s]||u[s]||i;return r?n.a.createElement(p,Object.assign({},{ref:t},c,{components:r})):n.a.createElement(p,Object.assign({},{ref:t},c))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d[c]="string"==typeof e?e:o,a[1]=d;for(var s=2;s<i;s++)a[s]=r[s];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);