(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(1),a=(n(0),n(597));const r={id:"docker",title:"Install via Docker",sidebar_label:"Install via Docker"},l=[],i={rightToc:l},c="wrapper";function s({components:e,...t}){return Object(a.b)(c,Object(o.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The following steps will guide you through the process of installing the OpenHIM using docker images."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install ",Object(a.b)("strong",{parentName:"li"},"Docker")," via terminal ",Object(a.b)("inlineCode",{parentName:"li"},"curl https://get.docker.com/ | sh -")," Or install Docker using the link below, follow all the steps and most importantly, ensure that there is no previous docker installed while following these instructions. (",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#install-using-the-repository"}),"https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#install-using-the-repository"),")"),Object(a.b)("li",{parentName:"ol"},"Install ",Object(a.b)("strong",{parentName:"li"},"Docker Compose"),", follow all the steps and use the recommend example version to install which is their latest stable release: ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/#install-compose"}),"https://docs.docker.com/compose/install/#install-compose")),Object(a.b)("li",{parentName:"ol"},"Install Git ",Object(a.b)("inlineCode",{parentName:"li"},"sudo apt-get install git")),Object(a.b)("li",{parentName:"ol"},"Clone the repository for setting up a docker image ",Object(a.b)("inlineCode",{parentName:"li"},"git clone https://github.com/jembi/openhim-common.git")),Object(a.b)("li",{parentName:"ol"},"Navigate into the repo ",Object(a.b)("inlineCode",{parentName:"li"},"cd openhim-common")),Object(a.b)("li",{parentName:"ol"},"Build the docker images ",Object(a.b)("inlineCode",{parentName:"li"},"docker-compose build && docker-compose up -d")),Object(a.b)("li",{parentName:"ol"},"Access the OpenHIM Console on ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"http://localhost:9000"}),"http://localhost:9000"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note"),": To configure the IP address the user must do the following ",Object(a.b)("inlineCode",{parentName:"p"},"sudo nano default.json")," edit the hostname to be that of the IP address of the docker image.")))}s.isMDXComponent=!0},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o),r=a.a.createContext({}),l=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,u=p[i+"."+m]||p[m]||s[m]||r;return n?a.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);