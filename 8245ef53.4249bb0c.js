(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{517:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(913)),r=n(919),l={id:"basic-scaffold",title:"Building a Basic Mediator",sidebar_label:"Scaffold Mediator",keywords:["mediator","tutorial","scaffold"],description:"Detailed tutorial on creating a basic OpenHIM Mediator"},c={unversionedId:"tutorial/mediators/basic-scaffold",id:"version-7.2.x/tutorial/mediators/basic-scaffold",isDocsHomePage:!1,title:"Building a Basic Mediator",description:"Detailed tutorial on creating a basic OpenHIM Mediator",source:"@site/versioned_docs/version-7.2.x/tutorial/mediators/basic-scaffold.md",slug:"/tutorial/mediators/basic-scaffold",permalink:"/docs/7.2.x/tutorial/mediators/basic-scaffold",version:"7.2.x",sidebar_label:"Scaffold Mediator",sidebar:"version-7.2.x/docs",previous:{title:"Visualizers",permalink:"/docs/7.2.x/configuration/visualizers"},next:{title:"Building a basic Orchestrator Mediator",permalink:"/docs/7.2.x/tutorial/mediators/orchestrator"}},s=[{value:"Useful Links",id:"useful-links",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"OpenHIM Mediator Setup",id:"openhim-mediator-setup",children:[{value:"Step 1 - Creating project skeleton",id:"step-1---creating-project-skeleton",children:[]},{value:"Step 2 - Registering the Mediator with the OpenHIM",id:"step-2---registering-the-mediator-with-the-openhim",children:[]},{value:"Step 3 - Adding Default Channel",id:"step-3---adding-default-channel",children:[]},{value:"Step 4 - Sending Through First Request Via OpenHIM",id:"step-4---sending-through-first-request-via-openhim",children:[]},{value:"Step 4 - Adding Mediator Heartbeat",id:"step-4---adding-mediator-heartbeat",children:[]},{value:"Step 5 - Fetching Mediator Configuration from openHIM",id:"step-5---fetching-mediator-configuration-from-openhim",children:[]}]}],p={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"TLDR; Watch Tutorial Setup on ",Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.youtube.com/watch?v=s-l60WMiZw8"}),"YouTube"))),Object(o.b)("h2",{id:"useful-links"},"Useful Links"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-mediator-bootstrap-scaffold"}),"OpenHIM Scaffold Bootstrap Mediator")),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tutorial Purpose: Create a Scaffold OpenHIM Mediator and Register it with your local OpenHIM instance.")),Object(o.b)("p",null,"This mediator is purely for demonstration purposes and is in no way production ready. However, the mechanisms used in this mediator can easily be used in your own OpenHIM mediator projects. The repository is also useful to read through as there are detailed comments describing important aspects of an OpenHIM Mediator."),Object(o.b)("p",null,"The advantage of using the OpenHIM mediator framework over another stand alone service is that OpenHIM mediators are registered and tracked by your OpenHIM instance. This allows administrators to ",Object(o.b)("strong",{parentName:"p"},"view the health status")," of the mediator, to easily setup ",Object(o.b)("strong",{parentName:"p"},"routing")," and ",Object(o.b)("strong",{parentName:"p"},"logging")," to the registered mediator and to ",Object(o.b)("strong",{parentName:"p"},"provide new configuration")," settings to the mediator all from the OpenHIM Console."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"NodeJS and NPM")),Object(o.b)("p",null,"This tutorial assumes you have already successfully setup the OpenHIM. If not please see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../getting-started/prerequisites"}),"getting started guide")),Object(o.b)("p",null,"Having a basic understanding of ExpressJS and Javascript ES6 syntax is advised."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"openhim-mediator-setup"},"OpenHIM Mediator Setup"),Object(o.b)("h3",{id:"step-1---creating-project-skeleton"},"Step 1 - Creating project skeleton"),Object(o.b)("p",null,"In a terminal, create a directory for your project. Move into that directory and and run ",Object(o.b)("inlineCode",{parentName:"p"},"npm init")," and fill in the details you want:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"mkdir openhim-mediator-bootstrap-scaffold\ncd openhim-mediator-bootstrap-scaffold\nnpm init\n")),Object(o.b)("p",null,"Within the same terminal install the following packages to compile the ES6 code that will be in our project."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install @babel/cli @babel/core @babel/node @babel/preset-env\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Do not use babel-node in your production mediator. It uses a lot of memory and has a high start up cost as it compiles your project on the fly. See our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-mediator-bootstrap-production"}),"Bootstrap Production Mediator repo")," once you're comfortable with the OpenHIM mediators.")),Object(o.b)("p",null,"Open up your preferred Integrated Development Environment(IDE) and create an ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," file. Next, edit the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file that was created by the npm init step and replace the ",Object(o.b)("inlineCode",{parentName:"p"},"scripts")," field with the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"scripts": {\n  "start": "babel-node index.js"\n},\n')),Object(o.b)("p",null,"Next, create a file titled ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile"),". Within it place the following YAML script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"FROM node:10-alpine\nWORKDIR /app\n\nCOPY . /app\n\nRUN npm install\n\nCMD npm start\nEXPOSE 3000\n")),Object(o.b)("p",null,"In your IDE move back to the ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," file. Here enter the following script to setup a basic express server listening on port 3000."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"'use strict'\n\nimport express from 'express'\n\nconst app = express()\n\napp.all('*', (req, res) => {\n  res.send('Hello World')\n})\n\napp.listen(3000, () => {\n  console.log('Server listening on port 3000...')\n})\n")),Object(o.b)("p",null,"Then, open a terminal in the project directory and run the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker build -t scaffold .\n\ndocker run --rm -p 3000:3000 scaffold\n")),Object(o.b)("p",null,"You should see the terminal output ",Object(o.b)("strong",{parentName:"p"},"Server listening on port 3000...")),Object(o.b)("p",null,"Test that the mediator is responding correctly by navigating to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:3000")," on a browser where you should see ",Object(o.b)("strong",{parentName:"p"},"Hello World")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"step-2---registering-the-mediator-with-the-openhim"},"Step 2 - Registering the Mediator with the OpenHIM"),Object(o.b)("p",null,"In a terminal install the npm OpenHIM Mediator Utils package. This utils package enable quick mediator setup as it handles OpenHIM authentication, registering mediator, fetching mediator configuration from the OpenHIM, and creating the mediator heartbeat emitter."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install openhim-mediator-utils\n")),Object(o.b)("p",null,"In your IDE, create a new file called ",Object(o.b)("inlineCode",{parentName:"p"},"mediatorConfig.json"),". Within this file place the following JSON configurations:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "urn": "urn:mediator:tutorial_scaffold",\n  "version": "1.0.0",\n  "name": "Scaffold Mediator",\n  "description": "Tutorial Scaffold Mediator",\n  "defaultChannelConfig": [\n    {\n      "name": "Bootstrap Scaffold Mediator",\n      "urlPattern": "^/scaffold$",\n      "routes": [\n        {\n          "name": "Bootstrap Scaffold Mediator Route",\n          "host": "scaffold",\n          "path": "/",\n          "port": "3000",\n          "primary": true,\n          "type": "http"\n        }\n      ],\n      "allow": ["admin"],\n      "methods": ["GET", "POST"],\n      "type": "http"\n    }\n  ],\n  "endpoints": [\n    {\n      "name": "Bootstrap Scaffold Mediator Endpoint",\n      "host": "scaffold",\n      "path": "/",\n      "port": "3000",\n      "primary": true,\n      "type": "http"\n    }\n  ]\n}\n')),Object(o.b)("p",null,"Open ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," and import the registerMediator function from ",Object(o.b)("inlineCode",{parentName:"p"},"openhim-mediator-utils")," as well as the ",Object(o.b)("inlineCode",{parentName:"p"},"mediatorConfig.json")," file. Next declare a new object openhimConfig with the details below and instantiate the ",Object(o.b)("inlineCode",{parentName:"p"},"registerMediator")," function with ",Object(o.b)("inlineCode",{parentName:"p"},"openhimConfig"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mediatorConfig"),", and a callback"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { registerMediator } from 'openhim-mediator-utils'\nimport mediatorConfig from './mediatorConfig.json'\n\n// Express Server Code\n\nconst openhimConfig = {\n  username: 'root@openhim.org',\n  password: 'password',\n  apiURL: 'https://openhim-core:8080',\n  trustSelfSigned: true\n}\n\nregisterMediator(openhimConfig, mediatorConfig, err => {\n  if (err) {\n    throw new Error(`Failed to register mediator. Check your Config. ${err}`)\n  }\n})\n")),Object(o.b)("p",null,"Rebuild the scaffold docker image to include the new changes. Then look up the name of the docker bridge network over which your running openhim instance should be communicating. And finally, start the container including the ",Object(o.b)("em",{parentName:"p"},"network")," flag."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The docker network name is made of the directory name where the docker-compose script was run appended with ",Object(o.b)("strong",{parentName:"p"},"openhim"),". In this case ",Object(o.b)("inlineCode",{parentName:"p"},"tutorial_openhim"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker build -t scaffold .\n\ndocker network ls\n\ndocker run --network tutorial_openhim --name scaffold --rm -p 3000:3000 scaffold\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Important!")," Remember to use the ",Object(o.b)("inlineCode",{parentName:"p"},"--name")," flag. The name is required to allow the different containers to reference each other.")),Object(o.b)("p",null,"Check that your mediator has registered correctly by navigating to the OpenHIM Console Mediator Page on ",Object(o.b)("inlineCode",{parentName:"p"},"https://localhost:9000/#!/mediators")),Object(o.b)("img",{alt:"Mediator Registered",src:Object(r.a)("img/tutorial/registeredMediator.png")}),Object(o.b)("hr",null),Object(o.b)("h3",{id:"step-3---adding-default-channel"},"Step 3 - Adding Default Channel"),Object(o.b)("p",null,"Next we can setup the default channel. On the Mediators page in the Console, click on the mediator row. This page contains more details about the scaffold mediator. The bottom row describes the available default channel. Click the green plus icon on the right hand bottom corner to create this channel."),Object(o.b)("img",{alt:"Mediator Details. Add Default Channel",src:Object(r.a)("img/tutorial/mediatorDetails.png")}),Object(o.b)("p",null,"Once the channel is created navigate to the Channels Menu option to view the Channel. To view the channel details you can click on yellow edit icon on the channel. All the details here are already correct as they were set in the ",Object(o.b)("inlineCode",{parentName:"p"},"mediatorConfig.json")," file. Navigate to the Routes tab in the modal and click on the yellow edit route icon to view route details."),Object(o.b)("img",{alt:"Channel Route Details",src:Object(r.a)("img/tutorial/routeDetails.png")}),Object(o.b)("p",null,"The Route defines where a client's request will be directed. Since we are running the scaffold mediator in a ",Object(o.b)("inlineCode",{parentName:"p"},"docker container")," we have provided the docker container name as the route ",Object(o.b)("inlineCode",{parentName:"p"},"host")," variable. ",Object(o.b)("inlineCode",{parentName:"p"},"Docker")," will resolve requests to the correct IP."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"step-4---sending-through-first-request-via-openhim"},"Step 4 - Sending Through First Request Via OpenHIM"),Object(o.b)("p",null,"With our scaffold mediator channel route setup we can send through our first request that will be tracked by the OpenHIM.\nIn a terminal run the following ",Object(o.b)("inlineCode",{parentName:"p"},"cURL")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'curl -X GET http://localhost:5001/scaffold -H "Authorization: Basic $(echo -n test:test | base64)"\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Hello World")," should come through in the terminal response. To view the request and response details navigate to the OpenHIM Console ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:9000/#!/transactions"}),"Transactions Log")," page. Here you should see your first scaffold mediator transaction."),Object(o.b)("img",{alt:"First Transaction",src:Object(r.a)("img/tutorial/transaction.png")}),Object(o.b)("p",null,"Click on this transaction to view details about it."),Object(o.b)("img",{alt:"Transaction Details",src:Object(r.a)("img/tutorial/transactionDetails.png")}),Object(o.b)("p",null,"The transaction here was Successful, it went through the Bootstrap Scaffold Mediator Channel, and the client was our ",Object(o.b)("inlineCode",{parentName:"p"},"test")," client. If needed this transaction could be rerun by clicking the Re-run Transaction button. This would send through the exact same request details and keep a record of the original transaction and any child transactions with all their respective results."),Object(o.b)("p",null,"The transaction response and ",Object(o.b)("inlineCode",{parentName:"p"},"orchestrations")," in the transaction can be updated through the OpenHIM API at a later time if necessary. This is useful for asynchronous requests."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For example, in a hypothetical system our endpoint information system has a slow processing speed yet, during peak times, our system sends through more requests than the end system can handle. To solve this we could input a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-mediator-file-queue"}),"file-queue mediator")," between the OpenHIM and an orchestration mediator that would store all requests from the client and slowly feed them through to the endpoint via the orchestrator when the endpoint is ready. At the same time, the OpenHIM could respond to the client indicating that the ",Object(o.b)("inlineCode",{parentName:"p"},"file-queue mediator")," received the request. Each time the client's request gets a response from a mediator this would be added to the list of orchestrations along the request and response details. When the final response is received the transaction can be updated to reflect the overall status of that transaction. ie: Successful, Failed, Completed, or Completed with Errors.")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"step-4---adding-mediator-heartbeat"},"Step 4 - Adding Mediator Heartbeat"),Object(o.b)("p",null,"To add a mediator heartbeat, import the ",Object(o.b)("inlineCode",{parentName:"p"},"activateHeartbeat")," method from ",Object(o.b)("inlineCode",{parentName:"p"},"openhim-mediator-utils"),". This function takes in the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimConfig")," option set to instantiate as well as the mediator's ",Object(o.b)("inlineCode",{parentName:"p"},"urn")," within that object. Therefore, to keep the file neat let's import the ",Object(o.b)("inlineCode",{parentName:"p"},"urn")," from ",Object(o.b)("inlineCode",{parentName:"p"},"mediatorConfig")," and add this variable to the openhimConfig object. Instantiate the ",Object(o.b)("inlineCode",{parentName:"p"},"activateHeartbeat")," method within the ",Object(o.b)("inlineCode",{parentName:"p"},"app.listen"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," file should now resemble this:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Why is the ",Object(o.b)("inlineCode",{parentName:"p"},"activateHeartbeat")," function always instantiated within the ",Object(o.b)("inlineCode",{parentName:"p"},"app.listen")," function")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"'use strict'\n\nimport express from 'express'\nimport { registerMediator, activateHeartbeat } from 'openhim-mediator-utils'\nimport mediatorConfig, { urn } from './mediatorConfig.json'\n\nconst app = express()\n\nconst openhimConfig = {\n  username: 'root@openhim.org',\n  password: 'password',\n  apiURL: 'https://openhim-core:8080',\n  trustSelfSigned: true,\n  urn\n}\n\napp.all('*', (req, res) => {\n  res.send('Hello World')\n})\n\napp.listen(3000, () => {\n  console.log('Server listening on port 3000...')\n  activateHeartbeat(openhimConfig)\n})\n\nregisterMediator(openhimConfig, mediatorConfig, err => {\n  if (err) {\n    throw new Error(`Failed to register mediator. Check your Config. ${err}`)\n  }\n})\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"step-5---fetching-mediator-configuration-from-openhim"},"Step 5 - Fetching Mediator Configuration from openHIM"),Object(o.b)("p",null,"To enable the OpenHIM to store console editable configuration details, we need to provide the template for these details within the ",Object(o.b)("inlineCode",{parentName:"p"},"mediatorConfig.json")," file. Add the following config template information beneath the ",Object(o.b)("strong",{parentName:"p"},"endpoints")," entry within the ",Object(o.b)("inlineCode",{parentName:"p"},"mediatorConfig.json"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),',"configDefs": [\n  {\n    "param": "tutorial",\n    "displayName": "Tutorial variables",\n    "description": "Some variables to demonstrate fetching OpenHIM mediator config",\n    "type": "struct",\n    "array": false,\n    "template": [\n      {\n        "param": "variable_1",\n        "displayName": "Variable 1",\n        "description": "First Variable",\n        "type": "string"\n      },\n      {\n        "param": "variable_2",\n        "displayName": "Variable 2",\n        "description": "Second Variable",\n        "type": "string"\n      }\n    ]\n  }\n]\n')),Object(o.b)("p",null,"Next, within ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," import ",Object(o.b)("inlineCode",{parentName:"p"},"fetchConfig")," from ",Object(o.b)("inlineCode",{parentName:"p"},"openhim-mediator-utils")," and instantiate ",Object(o.b)("inlineCode",{parentName:"p"},"fetchConfig")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimConfig")," object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { fetchConfig } from 'openhim-mediator-utils`'\n\nfetchConfig(openhimConfig, (err, initialConfig) => {\n  if (err) {\n    throw new Error(`Failed to fetch initial config. ${err}`)\n  }\n  console.log('Initial Config: ', JSON.stringify(initialConfig))\n})\n")),Object(o.b)("p",null,"Test the fetch config function is working on the console. To do this, navigate to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://localhost:9000/#!/mediators"}),"mediators page")," on the OpenHIM Console then delete the existing scaffold mediator there."),Object(o.b)("img",{alt:"Delete mediator",src:Object(r.a)("img/tutorial/deleteMediator.png")}),Object(o.b)("p",null,"Back in your terminal rebuild the scaffold mediator docker image and start the container."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker build -t scaffold .\n\ndocker run --network tutorial_openhim --rm --name scaffold -p 3000:3000 scaffold\n")),Object(o.b)("p",null,"The terminal output should be:"),Object(o.b)("img",{alt:"Empty Config Terminal Output",src:Object(r.a)("img/tutorial/emptyConfigTerminalOutput.png")}),Object(o.b)("p",null,"Go back to the mediator page and click the blue gear icon. In the Modal enter something into the fields."),Object(o.b)("img",{alt:"Add Mediator Config",src:Object(r.a)("img/tutorial/addMediatorConfig.png")}),Object(o.b)("p",null,"Go back to your terminal and stop the container. Restart it and your should see your config input."),Object(o.b)("img",{alt:"Content in Config Terminal Output",src:Object(r.a)("img/tutorial/contentInConfigTerminalOutput.png")}),Object(o.b)("p",null,"This function is useful however, the OpenHIM is capable of updating specific configuration details on the fly and emit a notification to the mediator to get the new config. This function is tied to the activateHeartbeat function.\nMake the following changes to the ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const emitter = activateHeartbeat(openhimConfig)\n\nemitter.on('error', err => {\n  console.error('Heartbeat failed: ', err)\n})\n\nemitter.on('config', newConfig => {\n  console.log('Received updated config:', JSON.stringify(newConfig))\n})\n")),Object(o.b)("p",null,"Rebuild and start the new container. Your old config entries should be in the terminal output as the ",Object(o.b)("em",{parentName:"p"},"initial config"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker build -t scaffold .\n\ndocker run --network tutorial_openhim --rm --name scaffold -p 3000:3000 scaffold\n")),Object(o.b)("p",null,"Go to the mediators page and click the blue gear icon to edit the mediator config. Enter some new data in the fields and save changes. This will emit a ",Object(o.b)("inlineCode",{parentName:"p"},"config")," event which will now be picked up by the mediator."),Object(o.b)("img",{alt:"New Config in Mediator",src:Object(r.a)("img/tutorial/newConfigInMediator.png")}),Object(o.b)("p",null,"Switch back to your terminal and the new config should be in the terminal output."),Object(o.b)("img",{alt:"New Config In Terminal Output",src:Object(r.a)("img/tutorial/newConfigInTerminal.png")}))}d.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(r,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},919:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(23),i=n(920);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},920:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);