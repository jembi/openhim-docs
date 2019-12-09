(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{322:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var o=t(1),r=(t(0),t(597));const a={id:"prerequisites",title:"Prerequisites",sidebar_label:"Prerequisites"},c=[{value:"Install Docker",id:"install-docker",children:[]},{value:"Install Docker Compose",id:"install-docker-compose",children:[]},{value:"Docker Compose file",id:"docker-compose-file",children:[]}],i={rightToc:c},l="wrapper";function s({components:e,...n}){return Object(r.b)(l,Object(o.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To easily get started with implementing the OpenHIM Core and Console and to start playing with the various features we can follow the below steps to get a local OpenHIM environment setup."),Object(r.b)("p",null,"The below method of spinning up the OpenHIM makes use of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.docker.com/resources/what-container"}),"Docker containers")," that allows for easier deployments of the OpenHIM "),Object(r.b)("p",null,"We will need to install some software that will allow us to spin up the OpenHIM with ease. We will using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," which is a container management service to create our OpenHIM instance."),Object(r.b)("h2",{id:"install-docker"},"Install Docker"),Object(r.b)("p",null,"Docker is the engine that will be running our entire local OpenHIM instance by using the publicly available OpenHIM core and console images. To install Docker please follow the relevant steps based on your operating system you are using as described in the below link"),Object(r.b)("p",null,"To ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"install Docker")," please follow the relevant steps as described within the install documentation"),Object(r.b)("h2",{id:"install-docker-compose"},"Install Docker Compose"),Object(r.b)("p",null,"Now that we have Docker installed on our machine, we will also need to install Docker Compose which is an additional service that makes use of our below ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and builds the relevant containers for us to have our OpenHIM instance up and running. The OpenHIM can be setup and configured without this steps but requires more advanced knowledge of Docker and how to manually create the relevant containers."),Object(r.b)("p",null,"To ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"install Docker Compose")," please follow the relevant steps as described within the install documentation"),Object(r.b)("h2",{id:"docker-compose-file"},"Docker Compose file"),Object(r.b)("p",null,"Before we can use Docker to build our OpenHIM instance, we need to create a ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," that will contain our instructions for pulling the correct OpenHIM ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/r/jembi/openhim-core"}),"Core")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/r/jembi/openhim-console"}),"Console")," images from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/r/jembi/"}),"Jembi's Dockerhub profile")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," can be downloaded from the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/infrastructure/docker-compose.yml"}),"OpenHIM core repository"),", or you can copy/paste the below yaml code into a file called ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yml"}),'version: \'3\'\n\nnetworks:\n  openhim:\n\nservices:\n  mongo-db:\n    container_name: mongo-db\n    image: mongo:4.0\n    networks:\n      - openhim\n    volumes:\n      - "mongo-data:/data/db"\n    restart: unless-stopped\n\n  openhim-core:\n    container_name: openhim-core\n    image: jembi/openhim-core:latest\n    restart: unless-stopped\n    environment:\n      mongo_url: "mongodb://mongo-db/openhim-development"\n      mongo_atnaUrl: "mongodb://mongo-db/openhim-development"\n      NODE_ENV: "development"\n    ports:\n      - "8080:8080"\n      - "5000:5000"\n      - "5001:5001"\n    networks:\n      - openhim\n    healthcheck:\n     test: "curl -sSk https://openhim-core:8080/heartbeat || exit 1"\n     interval: 30s\n     timeout: 30s\n     retries: 3\n\n  openhim-console:\n    container_name: openhim-console\n    image: jembi/openhim-console:latest\n    restart: unless-stopped\n    networks:\n      - openhim\n    ports:\n      - "9000:80"\n    healthcheck:\n     test: "curl -sS http://openhim-console || exit 1"\n     interval: 30s\n     timeout: 30s\n     retries: 3\n\nvolumes:\n  mongo-data:\n')))}s.isMDXComponent=!0},597:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o),a=r.a.createContext({}),c=function(e){var n=r.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=c(e.components);return r.a.createElement(a.Provider,{value:n},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===n.indexOf(o)&&(t[o]=e[o]);return t}(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,b=p[i+"."+m]||p[m]||s[m]||a;return t?r.a.createElement(b,Object.assign({},{ref:n},l,{components:t})):r.a.createElement(b,Object.assign({},{ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var m=2;m<a;m++)c[m]=t[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);