(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{484:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(6),l=(n(0),n(589)),i={id:"npm",title:"Install via NPM",sidebar_label:"Install via NPM",keywords:["openhim","manual","install","npm"]},r=[{value:"Manual Installation",id:"manual-installation",children:[{value:"Installing the OpenHIM Core",id:"installing-the-openhim-core",children:[]},{value:"Installing the OpenHIM Console",id:"installing-the-openhim-console",children:[]},{value:"Ensure communication between the OpenHIM Console and Core",id:"ensure-communication-between-the-openhim-console-and-core",children:[]}]}],s={rightToc:r},c="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(c,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"To get you started, we will show you the various options for installing the OpenHIM core along with the OpenHIM admin console."),Object(l.b)("p",null,"If you are installing the OpenHIM on ubuntu, then the installation process is very easy as we provide a debian package in the OpenHIE Personal Package Archive (PPA). Currently, the packages are only built for Ubuntu 14.04 but we hope to support the latest LTS soon. The OpenHIM in general supports all versions of Ubuntu."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note"),": If you are installing the OpenHIM on a VM, please see ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#installation-using-a-virtual-machine"}),"Installation using a Virtual Machine")," before proceeding with the installation of the OpenHIM.")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"manual-installation"},"Manual Installation"),Object(l.b)("p",null,"If you don\u2019t use Ubuntu or prefer to proceed with the installation manually, please follow the following steps."),Object(l.b)("h3",{id:"installing-the-openhim-core"},"Installing the OpenHIM Core"),Object(l.b)("p",null,"The latest active LTS is ",Object(l.b)("strong",{parentName:"p"},"recommended"),"."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note"),": libappstream3 may cause problems with the npm package manager if your ubuntu instance is not fully updated.")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Install the latest stable Node.js. ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04"}),"Here is a guide"),"."),Object(l.b)("li",{parentName:"ol"},"Install and start MongoDB 3.6 or greater. (If you are running Ubuntu 16.04, you may want to configure MongoDB as a systemd service that will automatically start on boot)"),Object(l.b)("li",{parentName:"ol"},"Install Git ",Object(l.b)("inlineCode",{parentName:"li"},"sudo apt install git")),Object(l.b)("li",{parentName:"ol"},"Install npm ",Object(l.b)("inlineCode",{parentName:"li"},"sudo apt install npm")),Object(l.b)("li",{parentName:"ol"},"Install the OpenHIM-core package globally (this will also install an OpenHIM-core binary to your PATH) ",Object(l.b)("inlineCode",{parentName:"li"},"sudo npm install openhim-core -g")),Object(l.b)("li",{parentName:"ol"},"Start the server by executing ",Object(l.b)("inlineCode",{parentName:"li"},"openhim-core")," from anywhere.")),Object(l.b)("p",null,"To make use of your own custom configurations, you have two options:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"You can copy the default.json config file and override the default settings: ",Object(l.b)("inlineCode",{parentName:"p"},"wget https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json")," edit default.json, then ",Object(l.b)("inlineCode",{parentName:"p"},"openhim-core --conf=path/to/default.json"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"You can use environment variables to set specific parameters. Environment variables use a ","_"," as a separator for nested keys. For example, to change the port that the Application Programming Interface (API) listens on and to change the ports that the router listens on you could do the following: ",Object(l.b)("inlineCode",{parentName:"p"},"api_httpsPort=8081 router_httpsPort=50456 router_httpPort=50457 npm start")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note"),": The environment variables are case sensitive.")),Object(l.b)("p",null,"For more information about the config options, please visit ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/config/config.md"}),"OpenHIM Config Options"),"."),Object(l.b)("h3",{id:"installing-the-openhim-console"},"Installing the OpenHIM Console"),Object(l.b)("p",null,"Before installing the OpenHIM console, it is required that you first have the OpenHIM core server up and running. The OpenHIM console communicates with the OpenHIM core via its API to pull and display data."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We ",Object(l.b)("strong",{parentName:"p"},"recommend")," that as soon as the OpenHIM core is up and running that you setup a properly signed TLS certificate. However, it is possible to do this later through the OpenHIM console under ",Object(l.b)("strong",{parentName:"p"},"Certificates")," page.")),Object(l.b)("p",null,"Next, you need to download the latest release of the web app and deploy it to a web server (Replace the X\u2019s in the below command to the latest release):"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Get the latest release ",Object(l.b)("inlineCode",{parentName:"li"},"sh wget https://github.com/jembi/openhim-console/releases/download/vX.X.X/openhim-console-vX.X.X.tar.gz")),Object(l.b)("li",{parentName:"ol"},"Navigate to the path ",Object(l.b)("inlineCode",{parentName:"li"},"cd /var")),Object(l.b)("li",{parentName:"ol"},"Create the /var/www/ path (If it does not already exist) ",Object(l.b)("inlineCode",{parentName:"li"},"sudo mkdir www")),Object(l.b)("li",{parentName:"ol"},"Navigate to the path ",Object(l.b)("inlineCode",{parentName:"li"},"cd www/")),Object(l.b)("li",{parentName:"ol"},"Create the /var/www/html path (If it does not already exist) ",Object(l.b)("inlineCode",{parentName:"li"},"sudo mkdir html")),Object(l.b)("li",{parentName:"ol"},"Export the contents of the download ",Object(l.b)("inlineCode",{parentName:"li"},"tar -vxzf openhim-console-vX.X.X.tar.gz --directory /var/www/html"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The next step is vital for the successful setup of the OpenHIM console. Firstly, you need to configure the console to point to your OpenHIM core server. Then navigate to the config/default.js file in the folder that you extracted and edit it as follows:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "version": "x.x.x", //Replace the x\'s with the latest release\n  "minimumCoreVersion": "5.2.3",\n  "protocol": "https",\n  "host": "localhost", // Change this to the hostname for your OpenHIM-core server (This hostname MUST be publicly accessible)\n  "port": 8080, // Change this to the API port of the OpenHIM-core server, default is 8080 (This port MUST be publicly accessible)\n  "title": "OpenHIM Admin Console", // You may change this to customise the title of the OpenHIM-console instance\n  "footerTitle": "OpenHIM Administration Console", // You may change this to customise the footer of the OpenHIM-console instance\n  "footerPoweredBy": "<a href=\'http://openhim.org/\' target=\'_blank\'>Powered by OpenHIM</a>",\n  "loginBanner": "", // Add text here that you want to appear on the login screen, if any.\n  "mediatorLastHeartbeatWarningSeconds": 60,\n  "mediatorLastHeartbeatDangerSeconds": 120\n}\n')),Object(l.b)("h3",{id:"ensure-communication-between-the-openhim-console-and-core"},"Ensure communication between the OpenHIM Console and Core"),Object(l.b)("p",null,"Make sure you have the latest Apache server installed ",Object(l.b)("inlineCode",{parentName:"p"},"sudo apt-get install apache2"),"\nMake sure the apache service is up and running ",Object(l.b)("inlineCode",{parentName:"p"},"sudo service apache2 status")))}p.isMDXComponent=!0},589:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a),l=o.a.createContext({}),i=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=i(e.components);return o.a.createElement(l.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),b=a,u=p[r+"."+b]||p[b]||c[b]||l;return n?o.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):o.a.createElement(u,Object.assign({},{ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:a,i[1]=r;for(var b=2;b<l;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);