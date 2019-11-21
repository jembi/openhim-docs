(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));n(0);var r=n(302),a=n(304);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const i={id:"overview",title:"OpenHIM Overview",sidebar_label:"OpenHIM Overview"},s=[],c={rightToc:s},p="wrapper";function l({components:e,...t}){return Object(r.b)(p,o({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The OpenHIM consists of the following major components:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Core"),Object(r.b)("li",{parentName:"ul"},"Mediators"),Object(r.b)("li",{parentName:"ul"},"Console")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Core")," provides the OpenHIM's main functionality; it processes the transactions from client systems. Its functionality is enhanced via ",Object(r.b)("em",{parentName:"p"},"Mediators"),", which are loosely coupled services that can add business logic to the transaction flow."),Object(r.b)("p",null,"Core by default listens on ports 5000 (HTTPS) and 5001 (HTTP). These ports are therefore the ",Object(r.b)("strong",{parentName:"p"},"front door")," that external client systems use to communicate with the OpenHIM. Core also provides an API, by default on port 8080. The ",Object(r.b)("em",{parentName:"p"},"Console")," makes use of this API to manage and view the OpenHIM data. Mediators also use the API for tasks such as registration and heartbeats."),Object(r.b)("p",null,"The following diagram summarizes the components:"),Object(r.b)("img",{alt:"OpenHIM Ports",src:Object(a.a)("img/overview/openhim-ports.png")}))}l.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=i(n),u=r,f=l[s+"."+u]||l[u]||p[u]||o;return n?a.a.createElement(f,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(f,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},304:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(303);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);