(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{349:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),a=(n(0),n(597));const o={id:"openhim-core-versioning-and-compatibility",title:"OpenHIM Core versioning and compatibility",sidebar_label:"OpenHIM Core versioning and compatibility"},i=[],c={rightToc:i},s="wrapper";function p({components:e,...t}){return Object(a.b)(s,Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js"}),"OpenHIM Core component")," uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://semver.org/"}),"Semantic Versioning"),". This means that if a specific software component, such as the OpenHIM Console or a Mediator states that it is compatible with Core version 1.2 for example, it means that:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"At a minimum the component is compatible with Core version 1.2 but is NOT guaranteed to work with a lower version of Core such 1.1"),Object(a.b)("li",{parentName:"ul"},"The component WILL be compatible with any patch version in its release range, such as Core 1.2.1 or Core 1.2.2, even if the component was developed against a higher patch number such as 1.2.3"),Object(a.b)("li",{parentName:"ul"},"WILL be compatible with Core 1.x, such as version 1.3 or 1.4, since these versions are backwards compatible with lower versions"),Object(a.b)("li",{parentName:"ul"},"The software component is NOT guaranteed to work with Core 2.0 or higher, however this doesn\u2019t preclude the possibility that it CAN work.")))}p.isMDXComponent=!0},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=i(n),u=r,m=l[c+"."+u]||l[u]||p[u]||o;return n?a.a.createElement(m,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(m,Object.assign({},{ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);