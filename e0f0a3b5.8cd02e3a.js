(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{317:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(1),a=n(6),i=(n(0),n(338)),l={id:"manually-install-on-windows",title:"Manually install on Windows",sidebar_label:"Manually install on Windows",keywords:["OpenHIM","Windows","nssm","iis","nginx"],description:"Install OpenHIM on windows"},r=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Non-Sucking Service Manager (NSSM)",id:"non-sucking-service-manager-nssm",children:[]},{value:"Node.js LTS",id:"nodejs-lts",children:[]},{value:"MongoDB",id:"mongodb",children:[]},{value:"OpenSSL",id:"openssl",children:[]}]},{value:"OpenHIM Core",id:"openhim-core",children:[{value:"Install",id:"install",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Run as a Windows Service",id:"run-as-a-windows-service",children:[]}]},{value:"OpenHIM Console",id:"openhim-console",children:[{value:"Install IIS",id:"install-iis",children:[]},{value:"Setup Console",id:"setup-console",children:[]},{value:"Alternative Web Server Instructions",id:"alternative-web-server-instructions",children:[]}]},{value:"Finally",id:"finally",children:[]}],s={id:"version-5.2.x/how-to/manually-install-on-windows",title:"Manually install on Windows",description:"Install OpenHIM on windows",source:"@site/versioned_docs/version-5.2.x/how-to/how-to-install-on-windows.md",permalink:"/docs/how-to/manually-install-on-windows",version:"5.2.x",sidebar_label:"Manually install on Windows",sidebar:"version-5.2.x/docs",previous:{title:"Setup a basic cluster",permalink:"/docs/how-to/setup-basic-cluster"}},c={rightToc:r,metadata:s},p="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(p,Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("span",{style:{color:"rgb(153,51,0)"}},"ATTENTION")),": This guide describes how to install the OpenHIM on ",Object(i.b)("strong",{parentName:"p"},"Windows Server 2012"),". Later versions of Windows are currently unsupported due to incompatible SSL ciphers.")),Object(i.b)("p",null,"The following is a tutorial to help guide you through the steps required for a new OpenHIM installation on a Windows Server 2012 instance."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("h3",{id:"non-sucking-service-manager-nssm"},"Non-Sucking Service Manager (NSSM)"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://nssm.cc/download"}),"NSSM")),Object(i.b)("li",{parentName:"ol"},"Open the archive and extract the ",Object(i.b)("inlineCode",{parentName:"li"},"win32")," or ",Object(i.b)("inlineCode",{parentName:"li"},"win64")," directory (depending on your Windows architecture) to a location on disk, for example ",Object(i.b)("inlineCode",{parentName:"li"},"c:\\nssm")),Object(i.b)("li",{parentName:"ol"},"Add the location ",Object(i.b)("inlineCode",{parentName:"li"},"c:\\nssm")," to your ",Object(i.b)("inlineCode",{parentName:"li"},"PATH")," environment variable so that ",Object(i.b)("inlineCode",{parentName:"li"},"nssm")," is accessible without knowing and typing the whole path to the file on the command line")),Object(i.b)("h3",{id:"nodejs-lts"},"Node.js LTS"),Object(i.b)("p",null,"Install the latest LTS version of Node.js from their ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://nodejs.org/"}),"official site"),". Note that the OpenHIM only officially supports current LTS editions of node, which such as 10.x and 12.x."),Object(i.b)("p",null,"The official process should be suitable for the OpenHIM; simply download and run the installer msi."),Object(i.b)("h3",{id:"mongodb"},"MongoDB"),Object(i.b)("p",null,"Install the latest version of MongoDB from their ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.mongodb.org/"}),"official site")),Object(i.b)("p",null,"As with Node.js, the official process should be suitable for the OpenHIM. However, MongoDB requires some additional steps after running the installer - in particular it would be a good idea to setup MongoDB as a service."),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/"}),"This guide")," should help you get fully setup."),Object(i.b)("h3",{id:"openssl"},"OpenSSL"),Object(i.b)("p",null,"Install with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://chocolatey.org/packages/OpenSSL.Light"}),"Chocolatey")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"openhim-core"},"OpenHIM Core"),Object(i.b)("h3",{id:"install"},"Install"),Object(i.b)("p",null,"To install the OpenHIM Core, launch a Node.js command prompt via ",Object(i.b)("strong",{parentName:"p"},"Start > All Programs > Node.js > Node.js command prompt"),". From here you can install Core using the following command"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm install -g openhim-core\n")),Object(i.b)("p",null,"You may see some warnings during the install process, especially if you do not have a C++ compiler installed, but this is not a problem and you can ignore these."),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Create a folder for storing the OpenHIM config, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\openhim\\core")," and grab a copy of the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json"}),"default config")," from github and save it to locally, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\openhim\\core\\production.json"),". Change this config to suit your needs."),Object(i.b)("p",null,"You should now be able to run the OpenHIM Core. In a Node.js command prompt, run the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"openhim-core --conf=C:\\openhim\\core\\production.json\n")),Object(i.b)("p",null,"or with whichever file location you chose to create for the config."),Object(i.b)("h3",{id:"run-as-a-windows-service"},"Run as a Windows Service"),Object(i.b)("p",null,"To ensure the OpenHIM runs all the time, we will install it as a Windows Service using NSSM."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open a command window with administrator privileges")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the OpenHIM core on nssm with the following command:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),'nssm install openhim-core "C:\\Program Files\\nodejs\\node.exe" "<global-npm-path>\\node_modules\\openhim-core\\bin\\openhim-core.js" "--conf=C:\\openhim\\core\\production.json"\n')),Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"global-npm-path")," defaults to the following:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-txt"}),"C:\\Users\\<user>\\AppData\\Roaming\\npm\\\n")),Object(i.b)("p",{parentName:"li"},"If the path to the openhim contains any spaces in the name the command parameter will require triple quotes to be interpreted by nssm properly. For example:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),'nssm install openhim-core "C:\\Program Files\\nodejs\\node.exe" """C:\\Users\\Test User\\AppData\\Roaming\\npm\\node_modules\\openhim-core\\bin\\openhim-core.js""" "--conf=C:\\openhim\\core\\production.json"\n')),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"The triple quotes aren't needed for the ",Object(i.b)("inlineCode",{parentName:"p"},"Program Files")," directory."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To capture the log output, type ",Object(i.b)("inlineCode",{parentName:"p"},'nssm set openhim-core AppStdout "c:\\OpenHIM\\stdout.log"'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To capture the error output, type ",Object(i.b)("inlineCode",{parentName:"p"},'nssm set openhim-core AppStderr "c:\\OpenHIM\\stderr.log"'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Type ",Object(i.b)("inlineCode",{parentName:"p"},"net start openhim-core")," to start the service or start it from the service manager.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To test whether the Core is available navigate to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://localhost:8080/heartbeat"}),"https://localhost:8080/heartbeat"),". This may bring up a warning about self signed certificates. You can bypass this issue for testing. See the docs section on implementing ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"./setup-ssl"}),"SSL certs")," to deal with this issue properly."))),Object(i.b)("p",null,"You\u2019re done. You\u2019ve installed the OpenHIM as a windows service."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"openhim-console"},"OpenHIM Console"),Object(i.b)("p",null,"A web server will be required to host the OpenHIM Console and in this guide we will use IIS and as an alternative we will also explain how to use Nginx. However, any good web server will be suitable, e.g. Apache."),Object(i.b)("h3",{id:"install-iis"},"Install IIS"),Object(i.b)("p",null,"Go to the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.iis.net/learn/install"}),"microsoft docs")," for articles on how to install IIS for your particular flavour of Windows OS."),Object(i.b)("p",null,"If you want to check if IIS is installed, browse to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://localhost"}),"http://localhost")," in your browser. If an image pops up, then IIS has been installed correctly."),Object(i.b)("h3",{id:"setup-console"},"Setup Console"),Object(i.b)("p",null,"Download the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-console/releases/latest"}),"latest Console release")," and extract the contents into a folder such as ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\openhim\\console"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You will need to use a utility such as ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.7-zip.org/"}),"7-Zip")," to extract the ",Object(i.b)("inlineCode",{parentName:"p"},".tar.gz")," archive.")),Object(i.b)("p",null,"Console contains a config file located in ",Object(i.b)("inlineCode",{parentName:"p"},"console\\config\\default.json"),". You will need to edit the ",Object(i.b)("inlineCode",{parentName:"p"},"host")," and ",Object(i.b)("inlineCode",{parentName:"p"},"port")," fields to point to the ",Object(i.b)("em",{parentName:"p"},"public")," address that the ",Object(i.b)("inlineCode",{parentName:"p"},"OpenHIM Core")," is running on. If you are only using the OpenHIM locally, then it is fine to leave the setting on localhost, however if you wish to make the Console accessible to other hosts, you will need to change the setting to either the machine's public IP address or domain name."),Object(i.b)("h4",{id:"configure-the-console-for-iis"},"Configure the Console for IIS"),Object(i.b)("p",null,"Create a new site in Internet Information Services Manager. You can name it whatever you want. I've called it Console in these instructions."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start IIS Manager.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the Connections panel, expand Sites")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Right-click Sites and then click Add Web Site.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the Add Web Site dialog box, fill in the required fields, for example:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Site name: ",Object(i.b)("inlineCode",{parentName:"li"},"Console")),Object(i.b)("li",{parentName:"ul"},"Physical path: ",Object(i.b)("inlineCode",{parentName:"li"},"C:\\openhim\\console")),Object(i.b)("li",{parentName:"ul"},'Port: Make sure the port is something other than 80, as this will conflict with "Default Web Site" in IIS')))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"alternative-web-server-instructions"},"Alternative Web Server Instructions"),Object(i.b)("h4",{id:"install-nginx"},"Install Nginx"),Object(i.b)("p",null,"A web server will be required to host the OpenHIM Console and in this guide we will use Nginx. However any good web server will be suitable, e.g. Apache or IIS."),Object(i.b)("p",null,"As per ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/"}),"this guide"),", download and extract the Nginx windows binary. You don't need to start nginx yet however."),Object(i.b)("h4",{id:"setup-console-1"},"Setup Console"),Object(i.b)("p",null,"Download the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-console/releases/latest"}),"latest Console release")," and extract the contents into a folder such as ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\openhim\\console"),". Note that you will need to use a utility such as ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.7-zip.org/"}),"7-Zip")," to extract the .tar.gz archive."),Object(i.b)("p",null,"Console contains a config file located in ",Object(i.b)("inlineCode",{parentName:"p"},"console\\config\\default.json"),". You will need to edit the ",Object(i.b)("inlineCode",{parentName:"p"},"host")," and ",Object(i.b)("inlineCode",{parentName:"p"},"port")," fields to point to the ",Object(i.b)("em",{parentName:"p"},"public")," address that the OpenHIM Core is running on. If you are only using the OpenHIM locally, then it is fine to leave the setting on localhost, however if you wish to make the Console accessible to other hosts, you will need to change the setting to either the machine's public IP address or domain name."),Object(i.b)("p",null,"Next locate the Nginx configuration file ",Object(i.b)("inlineCode",{parentName:"p"},"<nginx location>\\conf\\nginx.conf")," and change the root context to point to the Console:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"location / {\n    root   C:\\openhim\\console;\n    index  index.html index.htm;\n}\n")),Object(i.b)("p",null,"Also change any other settings as required, e.g. port numbers."),Object(i.b)("p",null,"Now you can startup Nginx from a command prompt by running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"cd <nginx location>\nstart nginx\n")),Object(i.b)("h2",{id:"finally"},"Finally"),Object(i.b)("p",null,"The OpenHIM Core and Console should now be up and running!"),Object(i.b)("p",null,"Access the console on ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://yourserver:port_number"}),"http://yourserver:port_number")," and login with ",Object(i.b)("strong",{parentName:"p"},"root@openhim.org")," using the password: ",Object(i.b)("strong",{parentName:"p"},"openhim-password")))}b.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o),i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,h=p[r+"."+b]||p[b]||c[b]||i;return n?a.a.createElement(h,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(h,Object.assign({},{ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:o,l[1]=r;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);