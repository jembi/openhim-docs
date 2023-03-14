(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(674)),i={id:"npm",title:"Install via NPM",sidebar_label:"Install via NPM",keywords:["openhim","manual","install","npm"],description:"Install OpenHIM via npm"},l={unversionedId:"installation/npm",id:"version-7.0.x/installation/npm",isDocsHomePage:!1,title:"Install via NPM",description:"Install OpenHIM via npm",source:"@site/versioned_docs/version-7.0.x/installation/npm.md",slug:"/installation/npm",permalink:"/docs/7.0.x/installation/npm",version:"7.0.x",sidebar_label:"Install via NPM",sidebar:"version-7.0.x/docs",previous:{title:"Install via Docker",permalink:"/docs/7.0.x/installation/docker"},next:{title:"Install Manually",permalink:"/docs/7.0.x/installation/manual"}},s=[{value:"NPM Installation",id:"npm-installation",children:[{value:"Installing the OpenHIM Core via npm",id:"installing-the-openhim-core-via-npm",children:[]},{value:"Installing the OpenHIM Console",id:"installing-the-openhim-console",children:[]},{value:"Ensure communication between the OpenHIM Console and Core",id:"ensure-communication-between-the-openhim-console-and-core",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To get you started, we will show you the various options for installing the OpenHIM core along with the OpenHIM admin console."),Object(r.b)("p",null,"If you are installing the OpenHIM on ubuntu, then the installation process is very easy as we provide a debian package in the OpenHIE Personal Package Archive (PPA). Currently, the packages are only built for Ubuntu 14.04 but we hope to support the latest LTS soon. The OpenHIM in general supports all versions of Ubuntu."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": If you are installing the OpenHIM on a VM, please see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#installation-using-a-virtual-machine"}),"Installation using a Virtual Machine")," before proceeding with the installation of the OpenHIM.")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"npm-installation"},"NPM Installation"),Object(r.b)("p",null,"If you don\u2019t use Ubuntu or prefer to proceed with the installation manually with npm, please follow the following steps."),Object(r.b)("h3",{id:"installing-the-openhim-core-via-npm"},"Installing the OpenHIM Core via npm"),Object(r.b)("p",null,"The latest active LTS is ",Object(r.b)("strong",{parentName:"p"},"recommended"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": ",Object(r.b)("inlineCode",{parentName:"p"},"libappstream3")," may cause problems with the npm package manager if your ubuntu instance is not fully updated.")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install the latest stable Node.js. ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04"}),"Here is a guide"),"."),Object(r.b)("li",{parentName:"ol"},"Install and start MongoDB 3.6 or greater. (If you are running Ubuntu 16.04 and later, you may want to configure MongoDB as a ",Object(r.b)("inlineCode",{parentName:"li"},"systemd")," service that will automatically start on boot)"),Object(r.b)("li",{parentName:"ol"},"Install npm ",Object(r.b)("inlineCode",{parentName:"li"},"sudo apt install npm")),Object(r.b)("li",{parentName:"ol"},"Install the OpenHIM-core package globally (this will also install an OpenHIM-core binary to your PATH) ",Object(r.b)("inlineCode",{parentName:"li"},"sudo npm install openhim-core -g")),Object(r.b)("li",{parentName:"ol"},"Start the server by executing ",Object(r.b)("inlineCode",{parentName:"li"},"openhim-core")," from anywhere.")),Object(r.b)("p",null,"To make use of your own custom configurations, you have two options:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"You can copy the default.json config file and override the default settings: ",Object(r.b)("inlineCode",{parentName:"p"},"wget https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json")," edit default.json, then ",Object(r.b)("inlineCode",{parentName:"p"},"openhim-core --conf=path/to/default.json"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"You can use environment variables to set specific parameters. Environment variables use a ","_"," as a separator for nested keys. For example, to change the port that the Application Programming Interface (API) listens on and to change the ports that the router listens on you could do the following: ",Object(r.b)("inlineCode",{parentName:"p"},"api_httpsPort=8081 router_httpsPort=50456 router_httpPort=50457 npm start")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": The environment variables are case sensitive.")),Object(r.b)("p",null,"For more information about the config options see our ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../configuration/overview"}),"config overview page"),"."),Object(r.b)("h3",{id:"installing-the-openhim-console"},"Installing the OpenHIM Console"),Object(r.b)("p",null,"Before installing the OpenHIM console, it is required that you first have the OpenHIM core server up and running. The OpenHIM console communicates with the OpenHIM core via its API to pull and display data."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"We ",Object(r.b)("strong",{parentName:"p"},"recommend")," that as soon as the OpenHIM core is up and running that you setup a properly signed TLS certificate. However, it is possible to do this later through the OpenHIM console under ",Object(r.b)("strong",{parentName:"p"},"Certificates")," page.")),Object(r.b)("p",null,"Next, you need to download the latest release of the web app and deploy it to a web server (Replace the X\u2019s in the below command to the latest release):"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Get the latest release ",Object(r.b)("inlineCode",{parentName:"li"},"sh wget https://github.com/jembi/openhim-console/releases/download/vX.X.X/openhim-console-vX.X.X.tar.gz")),Object(r.b)("li",{parentName:"ol"},"Navigate to the path ",Object(r.b)("inlineCode",{parentName:"li"},"cd /var")),Object(r.b)("li",{parentName:"ol"},"Create the /var/www/ path (If it does not already exist) ",Object(r.b)("inlineCode",{parentName:"li"},"sudo mkdir www")),Object(r.b)("li",{parentName:"ol"},"Navigate to the path ",Object(r.b)("inlineCode",{parentName:"li"},"cd www/")),Object(r.b)("li",{parentName:"ol"},"Create the /var/www/html path (If it does not already exist) ",Object(r.b)("inlineCode",{parentName:"li"},"sudo mkdir html")),Object(r.b)("li",{parentName:"ol"},"Export the contents of the download ",Object(r.b)("inlineCode",{parentName:"li"},"tar -vxzf openhim-console-vX.X.X.tar.gz --directory /var/www/html"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The next step is vital for the successful setup of the OpenHIM console. Firstly, you need to configure the console to point to your OpenHIM core server. Then navigate to the config/default.js file in the folder that you extracted and edit it as follows:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "version": "x.x.x", //Replace the x\'s with the latest release\n  "minimumCoreVersion": "7.0.0",\n  "protocol": "https",\n  "host": "localhost", // Change this to the hostname for your OpenHIM-core server (This hostname MUST be publicly accessible)\n  "port": 8080, // Change this to the API port of the OpenHIM-core server, default is 8080 (This port MUST be publicly accessible)\n  "title": "OpenHIM Admin Console", // You may change this to customise the title of the OpenHIM-console instance\n  "footerTitle": "OpenHIM Administration Console", // You may change this to customise the footer of the OpenHIM-console instance\n  "footerPoweredBy": "<a href=\'http://openhim.org/\' target=\'_blank\'>Powered by OpenHIM</a>",\n  "loginBanner": "", // Add text here that you want to appear on the login screen, if any.\n  "mediatorLastHeartbeatWarningSeconds": 60,\n  "mediatorLastHeartbeatDangerSeconds": 120\n}\n')),Object(r.b)("h3",{id:"ensure-communication-between-the-openhim-console-and-core"},"Ensure communication between the OpenHIM Console and Core"),Object(r.b)("p",null,"Make sure you have the latest Apache server installed ",Object(r.b)("inlineCode",{parentName:"p"},"sudo apt-get install apache2"),"\nMake sure the apache service is up and running ",Object(r.b)("inlineCode",{parentName:"p"},"sudo service apache2 status")))}p.isMDXComponent=!0},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=o,m=b["".concat(i,".").concat(h)]||b[h]||u[h]||r;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);