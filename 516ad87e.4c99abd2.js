(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(674)),l={id:"install-on-centos",title:"Install on CentOS",sidebar_label:"Install on CentOS",keywords:["OpenHIM","Install","CentOS"],description:"Installing OpenHIM on CentOS"},i={unversionedId:"how-to/install-on-centos",id:"version-7.0.x/how-to/install-on-centos",isDocsHomePage:!1,title:"Install on CentOS",description:"Installing OpenHIM on CentOS",source:"@site/versioned_docs/version-7.0.x/how-to/how-to-install-on-centos.md",slug:"/how-to/install-on-centos",permalink:"/docs/7.0.x/how-to/install-on-centos",version:"7.0.x",sidebar_label:"Install on CentOS",sidebar:"version-7.0.x/docs",previous:{title:"OpenHIE",permalink:"/docs/7.0.x/implementations/openhie"},next:{title:"Setup SSL",permalink:"/docs/7.0.x/how-to/setup-ssl"}},s=[{value:"Install RPM package",id:"install-rpm-package",children:[]},{value:"Let&#39;s talk NGINX",id:"lets-talk-nginx",children:[]},{value:"Install SSL certificates",id:"install-ssl-certificates",children:[]},{value:"Backups",id:"backups",children:[]},{value:"Upgrade paths",id:"upgrade-paths",children:[]},{value:"Logging files",id:"logging-files",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"install-rpm-package"},"Install RPM package"),Object(r.b)("p",null,"RPM packages are provided for OpenHIM releases since v4.0.1. They may be downloaded from the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/releases"}),"Github releases page"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"# example of downloading the package via the command line\nwget https://github.com/jembi/openhim-core-js/releases/download/v5.2.5/openhim-core-5.2.5-1.x86_64.rpm\n")),Object(r.b)("p",null,"The package can be installed with the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum install -y ~/rpmbuild/RPMS/x86_64/openhim-core-{current_version}.x86_64.rpm\nsudo systemctl start openhim-core\n# test that the OpenHIM is running\ncurl https://localhost:8080/heartbeat -k\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: In order for openhim-core to run successfully, there needs to be a valid instance of MongoDB available for openhim-core to use. To install mongo-db locally execute the following on a CentOS system:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum install mongodb-org && service mongod start\n")),Object(r.b)("p",null,"Openhim-core's config can be modified by using environment variables:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'export mongo_url="mongodb://<mongodb-IP-address>/<db-name>"\nexport mongo_atnaUrl="mongodb://<mongodb-IP-address>/<db-name>"\nexport NODE_ENV="production"\n')),Object(r.b)("p",null,"To install openhim-console:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum install -y ~/rpmbuild/RPMS/x86_64/openhim-console-{current_version}.x86_64.rpm\nsudo systemctl start openhim-console\ncurl http://localhost:9000\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: In order for openhim-console to run successfully, you'll need to point it to a valid instance of Openhim-core or install it locally. The openhim-console's configuration file can be found here:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"/usr/lib/openhim-console/dist/config\n")),Object(r.b)("h2",{id:"lets-talk-nginx"},"Let's talk NGINX"),Object(r.b)("p",null,"The rpm package for openhim-console uses the http-server package from npm to host and serve openhim-console. This is acceptable for development or test installations."),Object(r.b)("p",null,"However, it is recommended that NGINX be installed for production and staging servers. All openhim-console web traffic should be routed through NGINX; allowing NGINX to manage SSL certificates, data compression and port routing."),Object(r.b)("h2",{id:"install-ssl-certificates"},"Install SSL certificates"),Object(r.b)("p",null,"Please refer our ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./setup-ssl"}),"Setup SSL page")," on on how to setup SSL certificates for OpenHIM."),Object(r.b)("h2",{id:"backups"},"Backups"),Object(r.b)("p",null,"Important files to backup in order to restore Openhim, are as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Config file for openhim-core"),Object(r.b)("li",{parentName:"ul"},"Config file for openhim-console"),Object(r.b)("li",{parentName:"ul"},"Export and backup server metadata (Use the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"./export-import-configuration"}),"import/export")," interface in openhim-console)"),Object(r.b)("li",{parentName:"ul"},"All relevant certificates")),Object(r.b)("p",null,"These files will backup the configuration and settings for Openhim. The entire database will need to be backed-up in order to backup all historical data for transactions, audit events & certificates. It is recommended that a full database backup occurs on a regular basis. The configuration files only need to be backup when any of the configuration is updated or modified. Once the system has been setup, these configuration files are not expected to change too often."),Object(r.b)("h2",{id:"upgrade-paths"},"Upgrade paths"),Object(r.b)("p",null,"In order to upgrade Openhim, perform the following steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It is important to perform a full backup before starting, to ensure the system can be restored if needed"),Object(r.b)("li",{parentName:"ul"},"Proceed to building and installing the rpm packages for the new version of Openhim core and console. (You are able to upgrade only the core or console, as long as the new version remains compatible)"),Object(r.b)("li",{parentName:"ul"},"Restore server metadata (use the Import interface in openhim-console)"),Object(r.b)("li",{parentName:"ul"},"Update core & console config (not automated yet, needs to be done manually for each field)"),Object(r.b)("li",{parentName:"ul"},"Restore database"),Object(r.b)("li",{parentName:"ul"},"Test if upgrade worked")),Object(r.b)("h2",{id:"logging-files"},"Logging files"),Object(r.b)("p",null,"When Openhim is installed, all logs will be piped to standard output, which can be viewed as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl status openhim-core\nsudo tail -f -n 100 /var/log/messages\n")))}p.isMDXComponent=!0},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);