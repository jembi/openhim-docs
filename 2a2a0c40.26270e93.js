(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(674)),c=n(680),i={id:"install",title:"Install OpenHIM",sidebar_label:"Install OpenHIM",keywords:["OpenHIM","Installation"],description:"OpenHIM installation"},s={unversionedId:"getting-started/install",id:"getting-started/install",isDocsHomePage:!1,title:"Install OpenHIM",description:"OpenHIM installation",source:"@site/docs/getting-started/install.md",slug:"/getting-started/install",permalink:"/docs/next/getting-started/install",version:"current",sidebar_label:"Install OpenHIM",sidebar:"docs",previous:{title:"Prerequisites",permalink:"/docs/next/getting-started/prerequisites"},next:{title:"Configuration",permalink:"/docs/next/getting-started/configuration"}},l=[{value:"Install Core and Console",id:"install-core-and-console",children:[{value:"Congratulations! :)",id:"congratulations-",children:[]},{value:"First time login",id:"first-time-login",children:[]}]},{value:"Useful Docker commands",id:"useful-docker-commands",children:[{value:"Check running processes",id:"check-running-processes",children:[]},{value:"Access the Openhim core logs",id:"access-the-openhim-core-logs",children:[]},{value:"Stop the Docker service",id:"stop-the-docker-service",children:[]},{value:"Inspect details of a container",id:"inspect-details-of-a-container",children:[]},{value:"List available Docker networks",id:"list-available-docker-networks",children:[]},{value:"Access a terminal within a running container",id:"access-a-terminal-within-a-running-container",children:[]}]}],u={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"install-core-and-console"},"Install Core and Console"),Object(o.b)("p",null,"Once we have all our prerequisites completed we are now ready to spin up our OpenHIM instance using Docker. Open up a new terminal window and ensure that you are within the directory where the ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file is located and execute the below command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," the user executing the above command will need to be an administrator for the docker-compose script to run successfully")),Object(o.b)("p",null,"The first time this command is run it will take some time to complete. This is because the Docker Compose file needs to pull the relevant images from Dockerhub that don't exist on your local machine. The Docker images will then be used to build the docker containers for our OpenHIM instance."),Object(o.b)("p",null,"Once the ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose")," has successfully completed, you should see something like the below printed within your terminal. This means that the relevant images have been downloaded and the docker containers have been created."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"...\nCreating mongo-db        ... done\nCreating openhim-console ... done\nCreating openhim-core    ... done\n\n")),Object(o.b)("h3",{id:"congratulations-"},"Congratulations! :)"),Object(o.b)("p",null,"Your OpenHIM instance has been successfully installed on your local machine. To view the OpenHIM instance we can navigate to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:9000"}),"http://localhost:9000")),Object(o.b)("h3",{id:"first-time-login"},"First time login"),Object(o.b)("p",null,"Once your OpenHIM instance has successfully been created and you are able to access it on the above URL, you will need to login with the ",Object(o.b)("inlineCode",{parentName:"p"},"root")," user and reset the password. Supply the below ",Object(o.b)("inlineCode",{parentName:"p"},"root")," user details to continue with the installation process."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-txt"}),"username: root@openhim.org\npassword: openhim-password\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Important!")," If you are presented with a red information box when submitting the default ",Object(o.b)("inlineCode",{parentName:"p"},"root")," users details, it means that you are using a ",Object(o.b)("em",{parentName:"p"},"self signed certificate")," that will need to be accepted by the browser first. Click on the link that is presented which will try and access the ",Object(o.b)("em",{parentName:"p"},"API heartbeat"),". The browser will present you with a security risk page to notify you of the self signed certificate. Depending on the browser you are using, click on the ",Object(o.b)("inlineCode",{parentName:"p"},"advanced")," button and proceed to accept the un-trusted certificate so that we are able to successfully communicate with the OpenHIM core API")),Object(o.b)("div",{style:{display:"flex",justifyContent:"center"}},Object(o.b)("img",{alt:"OpenHIM",src:Object(c.a)("img/self-signed-cert-warning.png")})),Object(o.b)("p",null,"Once the self signed certificate has been accepted, or a valid certificate is being used for the OpenHIM core, you should see the below JSON output when viewing the ",Object(o.b)("inlineCode",{parentName:"p"},"/heartbeat")," endpoint within the OpenHIM core API. You are now able to proceed with successfully logging into the OpenHIM console"),Object(o.b)("div",{style:{display:"flex",justifyContent:"center"}},Object(o.b)("img",{alt:"OpenHIM",src:Object(c.a)("img/heartbeat.png")})),Object(o.b)("h2",{id:"useful-docker-commands"},"Useful Docker commands"),Object(o.b)("p",null,"Below are a few useful Docker commands that will allow you to have better visibility into your OpenHIM/Docker setup"),Object(o.b)("h3",{id:"check-running-processes"},"Check running processes"),Object(o.b)("p",null,"Now that we have our OpenHIM successfully created and running, we might need to check up on our Docker processes running to find some additional metadata on our containers. Execute the below command to find all the running Docker processes."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker ps\n")),Object(o.b)("h3",{id:"access-the-openhim-core-logs"},"Access the Openhim core logs"),Object(o.b)("p",null,"To access the OpenHIM core logs, execute the below command within your terminal to see and follow (",Object(o.b)("inlineCode",{parentName:"p"},"-f"),") the output of the container logs"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker logs -f openhim-core\n")),Object(o.b)("h3",{id:"stop-the-docker-service"},"Stop the Docker service"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker stop <container_name or container_id>\n")),Object(o.b)("p",null,"To stop ",Object(o.b)("em",{parentName:"p"},"all")," the running OpenHIM Docker services, we need to execute the below command"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker stop $(docker ps -a)\n")),Object(o.b)("h3",{id:"inspect-details-of-a-container"},"Inspect details of a container"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker inspect <container_name>\n")),Object(o.b)("h3",{id:"list-available-docker-networks"},"List available Docker networks"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker network ls\n")),Object(o.b)("h3",{id:"access-a-terminal-within-a-running-container"},"Access a terminal within a running container"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it <container_name> bash\n")))}b.isMDXComponent=!0},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,h=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},680:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(23),a=n(681);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,i=void 0!==c&&c,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},681:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);