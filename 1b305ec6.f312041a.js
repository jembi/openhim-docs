(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(913)),i={id:"console-configuration",title:"Console Configuration",sidebar_label:"Console Configuration",keywords:["openhim","console","config"],description:"OpenHIM console configuration"},c={unversionedId:"installation/console-configuration",id:"installation/console-configuration",isDocsHomePage:!1,title:"Console Configuration",description:"OpenHIM console configuration",source:"@site/docs/installation/console-configuration.md",slug:"/installation/console-configuration",permalink:"/docs/next/installation/console-configuration",version:"current",sidebar_label:"Console Configuration",sidebar:"docs",previous:{title:"Install Manually",permalink:"/docs/next/installation/manual"},next:{title:"Install on a Virtual Machine",permalink:"/docs/next/installation/virtual-machine"}},l=[{value:"How to update your NGINX Config file",id:"how-to-update-your-nginx-config-file",children:[]},{value:"How to Generate a free Let\u2019s Encrypt (letsencrypt) certificate",id:"how-to-generate-a-free-lets-encrypt-letsencrypt-certificate",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The OpenHIM console is accessible by navigating to your web server."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": The default port for the OpenHIM console is port ",Object(r.b)("strong",{parentName:"p"},"80"),". It is possible to change this port in your NGINX configuration file. See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#how-to-update-your-nginx-config-file"}),"How to update your NGINX Config file")," for instructions on how to do this.")),Object(r.b)("p",null,"For example, assuming your web server host is your local machine, the Uniform resource Locator (URL) will be ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://localhost:80/"}),"http://localhost:80/"),". The default OpenHIM administrator login credentials are as follows. Upon logging in, you will be prompted to customize your credentials so that it is more secure:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Username: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"mailto:root@openhim.org"}),"root@openhim.org")),Object(r.b)("li",{parentName:"ul"},"Password: openhim-password")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": You will have problems logging in if your OpenHIM server is still setup to use a self-signed certificate (the default). This for the case where the OpenHIM core is set up to use the ",Object(r.b)("strong",{parentName:"p"},"https")," protocol. The protocols ",Object(r.b)("strong",{parentName:"p"},"https")," and ",Object(r.b)("strong",{parentName:"p"},"http")," are both supported (https is the default). The protocol to use can be set in the core ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/config/default.json#L35"}),Object(r.b)("strong",{parentName:"a"},"config")),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Please see section ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../how-to/setup-ssl"}),Object(r.b)("strong",{parentName:"a"},"How to Setup SSL"))," which identifies the steps necessary to generate a free certificate. If you choose to do this later, you may get around this by following these steps:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Visit the following link: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://localhost:8080/authenticate/root@openhim.org"}),"https://localhost:8080/authenticate/root@openhim.org")," in Chrome.",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": Make sure you are visiting this link from the system that is running the OpenHIM core. Otherwise, replace localhost and 8080 with the appropriate OpenHIM core server hostname (or IP Address) and API port."))),Object(r.b)("li",{parentName:"ol"},"You should see a message saying \u201cYour connection is not private\u201d. Click \u201cAdvanced\u201d and then click \u201cProceed\u201d."),Object(r.b)("li",{parentName:"ol"},"Once you have done this, you should see some JSON text displayed on the screen, you can ignore this and close the page. This will ignore the fact that the certificate is self-signed."),Object(r.b)("li",{parentName:"ol"},"Now, you should be able to go back to the OpenHIM console login page and login. This problem will occur every now and then until you load a properly signed certificate into the OpenHIM core server.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The credentials used from this point will be considered the OpenHIM administrative account and is therefore highly recommended that you apply a strong password. General best practices in password creation that have been identified in this ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.symantec.com/connect/articles/simplest-security-guide-better-password-practices"}),"article")," may help you.")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"how-to-update-your-nginx-config-file"},"How to update your NGINX Config file"),Object(r.b)("p",null,"The following steps guides you through the process of updating your NGINX config file for the purpose of changing the default listening port for the OpenHIM console:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Navigate to the NGINX config file ",Object(r.b)("inlineCode",{parentName:"li"},"vim /etc/nginx/sites-enabled/openhim-console")),Object(r.b)("li",{parentName:"ol"},"Add the following line directly after the curly bracket: listen 12345; // Where 12345 is the port number that you have chosen to use"),Object(r.b)("li",{parentName:"ol"},"Save and exit with the command :wq"),Object(r.b)("li",{parentName:"ol"},"Check your configuration for syntax errors ",Object(r.b)("inlineCode",{parentName:"li"},"sudo nginx -t")),Object(r.b)("li",{parentName:"ol"},"Refresh the NGINX config ",Object(r.b)("inlineCode",{parentName:"li"},"service nginx reload"))),Object(r.b)("p",null,"Your NGINX configuration will then appear as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-nginx"}),"server {\n  listen 12345;\n  root /usr/share/openhim-console;\n  index index.html;\n\n  location / {\n    try_files $uri $url/ =404;\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"how-to-generate-a-free-lets-encrypt-letsencrypt-certificate"},"How to Generate a free Let\u2019s Encrypt (letsencrypt) certificate"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": This section only applies to OpenHIM installations that have a public facing domain name. If you are running the OpenHIM on your local machine or on a virtual machine, you may continue with the self-signed certificate.")),Object(r.b)("p",null,"You are able to generate a free certificate by following these steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fetch letsencrypt certbot script and make it executable (These commands assume you are running as the root user):"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"wget https://dl.eff.org/certbot-auto\nchmod a+x certbot-auto\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install certbot dependencies (If this fails and you have a small amount of ram then you may need to add a swapfile):"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"./certbot-auto\n./certbot-auto certonly --webroot -w /usr/share/openhim-console -d <your_hostname>\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Allow the openhim the ability to read the generated certificate and key:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"chmod 750 /etc/letsencrypt/live/\nchmod 750 /etc/letsencrypt/archive/\nchown :openhim /etc/letsencrypt/live/ /etc/letsencrypt/archive/\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change your OpenHIM cert config in /etc/openhim/config.json to the following:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"certificateManagement": {\n  "watchFSForCert": true,\n  "certPath": "/etc/letsencrypt/live/<your_hostname>/fullchain.pem",\n  "keyPath": "/etc/letsencrypt/live/<your_hostname>/privkey.pem"\n}\n\n(or enter these details when asked during the OpenHIM installation)\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Setup auto renewal of the certificate:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"crontab -e\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Append the following line at the end of your crontab:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"0 0 * * * /root/certbot-auto renew --no-self-upgrade >> /var/log/letsencrypt-renewal.log\n")))))}p.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),h=o,m=b["".concat(i,".").concat(h)]||b[h]||u[h]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);