(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(913)),i={id:"manual",title:"Install Manually",sidebar_label:"Install Manually",keywords:["openhim","manual","install"],description:"Install the OpenHIM manually"},l={unversionedId:"installation/manual",id:"version-7.1.x/installation/manual",isDocsHomePage:!1,title:"Install Manually",description:"Install the OpenHIM manually",source:"@site/versioned_docs/version-7.1.x/installation/manual.md",slug:"/installation/manual",permalink:"/docs/7.1.x/installation/manual",version:"7.1.x",sidebar_label:"Install Manually",sidebar:"version-7.1.x/docs",previous:{title:"Install via NPM",permalink:"/docs/7.1.x/installation/npm"},next:{title:"Console Configuration",permalink:"/docs/7.1.x/installation/console-configuration"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installing the OpenHIM Core",id:"installing-the-openhim-core",children:[]},{value:"Installing the OpenHIM Console",id:"installing-the-openhim-console",children:[]},{value:"Ensure communication between the OpenHIM Console and Core",id:"ensure-communication-between-the-openhim-console-and-core",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide is for manually installing an OpenHIM instance using the built zipped application releases available on their respective github pages."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This method is useful for on-site implementation without internet access.")),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"This guide assumes that you are installing on an ubuntu server and that the following is already installed and setup:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"NodeJS (v12 or later)"),Object(r.b)("li",{parentName:"ul"},"NPM"),Object(r.b)("li",{parentName:"ul"},"MongoDB (v3.6 or later)")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": ",Object(r.b)("inlineCode",{parentName:"p"},"libappstream3")," may cause problems with the npm package manager if your ubuntu instance is not fully updated.")),Object(r.b)("h2",{id:"installing-the-openhim-core"},"Installing the OpenHIM Core"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download the latest OpenHIM Core release"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"wget https://github.com/jembi/openhim-core-js/releases/download/vX.X.X/build.openhim-core.vX.X.X.zip\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/releases"}),"here for all released versions")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Unzip the file"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"unzip build.openhim-core.vX.X.X -d {destination_folder}\n")))),Object(r.b)("p",null,"To make use of your own custom configurations, you have two options:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"You can copy the default.json config file and override the default settings: ",Object(r.b)("inlineCode",{parentName:"p"},"wget https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json"),". Then, depending on your environment instance, rename the file. For example, in the production setup name the file ",Object(r.b)("inlineCode",{parentName:"p"},"production.json"),". Move your new file into the ",Object(r.b)("inlineCode",{parentName:"p"},"/config")," directory of the project.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"You can use environment variables to set specific parameters. Environment variables use a ","_"," as a separator for nested keys. For example, to change the port that the Application Programming Interface (API) listens on and to change the ports that the router listens on you could do the following: ",Object(r.b)("inlineCode",{parentName:"p"},"api_httpsPort=8081 router_httpsPort=50456 router_httpPort=50457 npm start")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": The environment variables are case sensitive.")),Object(r.b)("p",null,"For more information about the config options see our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../configuration/overview"}),"config overview page"),"."),Object(r.b)("p",null,"Finally start the OpenHIM Core with the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm start\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When you start up the OpenHIM Core make sure the ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV")," matches the setup environment. ie: If you name the config file ",Object(r.b)("inlineCode",{parentName:"p"},"production.json")," make sure the ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"production"))),Object(r.b)("h2",{id:"installing-the-openhim-console"},"Installing the OpenHIM Console"),Object(r.b)("p",null,"Before installing the OpenHIM console, it is required that you first have the OpenHIM core server up and running. The OpenHIM console communicates with the OpenHIM core via its API to pull and display data."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"We ",Object(r.b)("strong",{parentName:"p"},"recommended")," that as soon as the OpenHIM core is up and running that you setup a properly signed TLS certificate. However, it is possible to do this later through the OpenHIM console on the ",Object(r.b)("strong",{parentName:"p"},"Certificates")," page.")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download the latest OpenHIM Console release"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"wget https://github.com/jembi/openhim-console/releases/download/vX.X.X/build.openhim-console.vX.X.X.zip\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-console/releases"}),"here for all released versions")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Unzip the file"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"unzip build.openhim-console.vX.X.X -d {destination_folder}\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The next step is vital for the successful setup of the OpenHIM console. First configure the console to point to your OpenHIM core server and then navigate to the config/default.js file in the extracted folder and edit it as follows:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "version": "x.x.x", //Replace the x\'s with the latest release\n  "minimumCoreVersion": "7.0.0",\n  "protocol": "https",\n  "host": "localhost", // change this to the hostname for your OpenHIM-core server (This hostname _MUST_ be publicly accessible)\n  "port": 8080, // change this to the API port of the OpenHIM-core server, default is 8080 (This port _MUST_ be publicly accessible)\n  "title": "OpenHIM Admin Console", // You may change this to customise the title of the OpenHIM-console instance\n  "footerTitle": "OpenHIM Administration Console", // You may change this to customise the footer of the OpenHIM-console instance\n  "footerPoweredBy": "<a href=\'http://openhim.org/\' target=\'_blank\'>Powered by OpenHIM</a>",\n  "loginBanner": "", // add text here that you want to appear on the login screen, if any.\n  "mediatorLastHeartbeatWarningSeconds": 60,\n  "mediatorLastHeartbeatDangerSeconds": 120\n}\n')),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Finally, start the OpenHIM Console with the following:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm start\n")),Object(r.b)("h2",{id:"ensure-communication-between-the-openhim-console-and-core"},"Ensure communication between the OpenHIM Console and Core"),Object(r.b)("p",null,"Login to the console. Defaults to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:9000"}),"http://localhost:9000")))}p.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,h=b["".concat(i,".").concat(m)]||b[m]||u[m]||r;return n?o.a.createElement(h,l(l({ref:t},s),{},{components:n})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);