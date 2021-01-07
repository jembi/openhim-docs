(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(438)),i=n(444),s={id:"developing-mediators",title:"Developing mediators",sidebar_label:"Developing mediators",keywords:["openhim","mediator","developer","guide"],description:"Developing mediators"},c={unversionedId:"dev-guide/developing-mediators",id:"version-5.2.x/dev-guide/developing-mediators",isDocsHomePage:!1,title:"Developing mediators",description:"Developing mediators",source:"@site/versioned_docs/version-5.2.x/dev-guide/mediators.md",slug:"/dev-guide/developing-mediators",permalink:"/docs/5.2.x/dev-guide/developing-mediators",version:"5.2.x",sidebar_label:"Developing mediators",sidebar:"version-5.2.x/docs",previous:{title:"Getting started with OpenHIM development",permalink:"/docs/5.2.x/dev-guide/openhim-development"},next:{title:"Contributing",permalink:"/docs/5.2.x/dev-guide/contributing"}},l=[{value:"Suggested mediator structure",id:"suggested-mediator-structure",children:[{value:"Normalisation sub-component",id:"normalisation-sub-component",children:[]},{value:"Orchestration sub-component",id:"orchestration-sub-component",children:[]},{value:"De-normalisation sub-component",id:"de-normalisation-sub-component",children:[]}]},{value:"Mediator communication with core",id:"mediator-communication-with-core",children:[{value:"Mediator registration",id:"mediator-registration",children:[]},{value:"Return transaction metadata",id:"return-transaction-metadata",children:[]},{value:"(Optional) Send heartbeats and receive user configuration directly from OpenHIM-core",id:"optional-send-heartbeats-and-receive-user-configuration-directly-from-openhim-core",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OpenHIM mediators")," are separate micro services that run independently from the OpenHIM-core and perform additional mediation tasks for a particular use case. The common tasks within a mediator are as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Message format adaptation")," - this is the transformation of messages received in a certain format into another format (e.g. FHIR v2 to FHIR v4, HL7 v2 to HL7 v3, or MHD to XDS.b)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Message orchestration")," - this is the execution of a business function that may need to call out to other service endpoints on other systems. (e.g. Enriching a message with a client's unique identifier retrieved from a client registry).")),Object(r.b)("p",null,"Mediators can be built using any platform that is desired (some good options are Apache Camel, Mule ESB, or any language or platform that is a good fit for your needs). The only restriction is that the mediator MUST communicate with the OpenHIM-core in a particular way. There are 3 different types of communication that a mediator can have with the OpenHIM-core. These are ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/wiki/Creating-an-OpenHIM-mediator#mediator-communication-with-core"}),"described later"),"."),Object(r.b)("p",null,"You can also see our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/mediators/basic-scaffold"}),"tutorials")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi?utf8=%E2%9C%93&q=bootstrap"}),"NodeJS scaffolding repositories")," to get set-up with building a mediator. If you're a java developer, you can also take a look at our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-mediator-engine-java"}),"mediator engine")," for additional documentation."),Object(r.b)("h2",{id:"suggested-mediator-structure"},"Suggested mediator structure"),Object(r.b)("p",null,"For maximum reusability and modifiability, we suggest that mediators be split into a number of sub-components. These sub-components are shown in the diagram bellow. Mediators do not need to follow this structure however it provides some useful benefits. If a mediator is simple and does not need the complexity added by having multiple sub-components it may implement its functionality in which ever way is simplest. If your mediator does not require this, skip this section."),Object(r.b)("img",{alt:"Mediator Structure",src:Object(i.a)("img/mediators/mediator-structure.png")}),Object(r.b)("p",null,"Each mediator should consist of a ",Object(r.b)("strong",{parentName:"p"},"normalisation")," sub-components, an ",Object(r.b)("strong",{parentName:"p"},"orchestration")," sub-component and a ",Object(r.b)("strong",{parentName:"p"},"de-normalisation")," sub-component. The purpose of each of these are described below."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: These descriptions are taken from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.cair.za.net/research/outputs/open-health-information-mediator-architecture-enabling-interoperability-low-middle"}),"published thesis")," of Ryan Crichton: 'The Open Health Information Mediator: an Architecture for Enabling Interoperability in Low to Middle Income Countries")),Object(r.b)("h3",{id:"normalisation-sub-component"},"Normalisation sub-component"),Object(r.b)("p",null,"This sub-component transforms the request message contained within a transaction to a normalised state. This normalised state is called the ",Object(r.b)("strong",{parentName:"p"},"canonical")," form for that transaction. After this process the transaction data must be in a consistent and predictable format to allow components following this step to process it in a predictable fashion, no matter what format it arrived in. This process consists of two operations. Firstly, an on-ramp transformation is applied. This ensures that the message is transformed into a form that the HIM can process, thus enabling syntactic interoperability for the transaction. For example, if the transaction arrives from a legacy application that only supported exporting data in a custom XML format, this process would ensure that the XML is transformed into the canonical form that the HIM can understand, such as an HL7 version 2 messages. Secondly, a translation operation is invoked. This operation is responsible for ensuring that the codes and code systems used within the transaction are translated to a standard set of vocabulary or clinical terms, called reference terms, that have a common interpretation by other components of the HIM. This could involve a call to a terminology service(TS) to translate and verify that the codes used within the transaction are represented in, or are translated to, known reference terms. In this way semantic interoperability between service requesters and providers is achieved."),Object(r.b)("h3",{id:"orchestration-sub-component"},"Orchestration sub-component"),Object(r.b)("p",null,"This sub-component is responsible for performing implementation-specific orchestration for the current transaction. The aim of the orchestration component is to execute the received transaction and perform any consequent action(s) required for this transaction. This could include zero or more calls to external services as well as the execution of business logic. This component compiles the response for the executed transaction and returns this to the persistence component which forwards the response to the service requester via the interface component. The calls to external systems should be done in parallel where possible to ensure that the orchestration is done as quickly and efficiently as possible."),Object(r.b)("h3",{id:"de-normalisation-sub-component"},"De-normalisation sub-component"),Object(r.b)("p",null,"This sub-component is responsible for transforming or constructing a service request into a format that is understandable to the service provider. This operates similarly to the normalisation component except the operations occur in the reverse order. This approach serves to decouple service providers from the orchestration component, which allows for service providers to be easily modified or replaced with minimal impact on the mediation component."),Object(r.b)("p",null,"Separating the mediator into these different components allows the same orchestration logic to be reused with multiple inbound and outbound message formats. It also allows the normalisation and de-normalisation sub-components to be split out of the mediator then independently scaled and load balanced. This is especially useful in high load applications. We recommend that mediation platforms such as Mule ESB or Apache Camel be used to ease the construction of such a mediator."),Object(r.b)("h2",{id:"mediator-communication-with-core"},"Mediator communication with core"),Object(r.b)("h3",{id:"mediator-registration"},"Mediator registration"),Object(r.b)("p",null,"An OpenHIM mediator ",Object(r.b)("strong",{parentName:"p"},"MUST")," register itself with the OpenHIM-core each time it starts up. The registration process informs the OpenHIM-core of some useful details:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An identifier and name to associate with the OpenHIM-core"),Object(r.b)("li",{parentName:"ul"},"The hostname or IP address of the mediator"),Object(r.b)("li",{parentName:"ul"},"Default channel configuration that should be applied to the OpenHIM-core that the mediator needs"),Object(r.b)("li",{parentName:"ul"},"The endpoints that the mediator exposes to which the OpenHIM can route messages.")),Object(r.b)("p",null,"In order to register itself a mediator MUST send an API request to the OpenHIM-core with the following format:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"POST https://<openhim-core_host>:<api_port>/mediators")),Object(r.b)("p",null,"with a JSON body that conforms to the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "urn": "<a unique URN>", // A unique identifier to identify the mediator, this identifier should always stay the same even if the mediator changes (eg. "urn:openhim-mediator:my-awesome-mediator")\n    "version": "", // the version of the mediator, if this is incremented the OpenHIM-core will update the channel configuration - expects a semver string\n    "name": "", // a human readable name for the mediator\n    "defaultChannelConfig": [ // (optional) an array of default channels to add for this mediator\n        { ... }, // a channel object as defined by the OpenHIM-core - see https://github.com/jembi/openhim-core-js/blob/master/src/model/channels.js#L69-L134\n        { ... }\n    ],\n    "endpoints": [ // (A minimum of 1 endpoint must be defined) an array of endpoints that the mediator can be contacted on\n        { ... }, // a route object as defined by OpenHIM-core - see https://github.com/jembi/openhim-core-js/blob/master/src/model/channels.js#L7-L33\n        { ... }\n    ],\n    "configDefs": [ ... ], // (optional) An array of config definitions of config that can be set in the OpenHIM-console - see https://github.com/jembi/openhim-core-js/blob/master/src/model/mediators.js\n    "config": { "<param1>": "<val1>", "<param2>": "<val2>" } // (optional) Default mediator configuration\n}\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"configDefs")," property defines an array of configuration definitions that each describe configuration parameters that could be provided by the user. These configuration parameters could have the following ",Object(r.b)("inlineCode",{parentName:"p"},"type")," properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"string")," - A string of text"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bigstring")," - A string of text that is expected to be large (it will be displayed as a text area on the OpenHIM-console)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bool")," - A boolean value (true or false)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"number")," - An integer or decimal value"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"option")," - A value from a pre-defined list. If this datatype is use then the ",Object(r.b)("inlineCode",{parentName:"li"},"values")," property MUST also be used. The ",Object(r.b)("inlineCode",{parentName:"li"},"values")," property specifies an array of possible values for the parameter."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"map")," - Key/value pairs. A map is formatted as an object with string values, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},'{ "key1": "value1", "key2": "value2" }'),". New key/value pairs can be added dynamically."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"struct")," - A collection of fields that can be of any of type. If a parameter is a struct, then a ",Object(r.b)("inlineCode",{parentName:"li"},"template")," field MUST be defined. A template is an array with each element defining the individual fields that the struct is made up of. The definition schema is the same as the ",Object(r.b)("inlineCode",{parentName:"li"},"configDefs")," ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jembi/openhim-core-js/blob/master/src/model/mediators.js"}),"schema")," with the exception that a struct may not recursively define other structs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"password")," - A string value representing a password or some other protected information. The value of this type will be masked when returned form the OpenHIM API in all but the ",Object(r.b)("inlineCode",{parentName:"li"},"heartbeats")," API endpoint to reduce the risk of accidental exposure.")),Object(r.b)("p",null,"A config definition may also specify an ",Object(r.b)("inlineCode",{parentName:"p"},"array")," property (boolean). If true, then the config can have an array of values. The elements in the array must be of the specified type, e.g. if the config definition is of type ",Object(r.b)("inlineCode",{parentName:"p"},"string"),", then the config must be an array of strings."),Object(r.b)("p",null,"The OpenHIM-core SHALL respond with a HTTP status of 201 if the mediator registration was successful.\nThe OpenHIM-core SHALL respond with an appropriate 4xx status if the mediator registration could not be completed due to a bad request.\nThe OpenHIM-core SHALL respond with an appropriate 5xx status if the mediator registration could not be completed due to server error in the OpenHIM-core."),Object(r.b)("h4",{id:"mediator-config-definition-examples"},"Mediator Config Definition Examples"),Object(r.b)("h5",{id:"basic-settings"},"Basic Settings"),Object(r.b)("p",null,"The following is a config definition for basic server settings:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "configDefs": [\n    {\n      "param": "host",\n      "displayName": "Host",\n      "description": "Server host",\n      "type": "string"\n    }, {\n      "param": "port",\n      "displayName": "Port",\n      "description": "Server port",\n      "type": "number"\n    }, {\n      "param": "scheme",\n      "displayName": "scheme",\n      "description": "Server Scheme",\n      "type": "option",\n      "values": ["http", "https"]\n    }\n  ]\n}\n')),Object(r.b)("p",null,"Valid config would be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "host": "localhost",\n  "port": 8080,\n  "scheme": "http"\n}\n')),Object(r.b)("h5",{id:"map-example"},"Map example"),Object(r.b)("p",null,"A map is a collection of key/value pairs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "configDefs": [\n    {\n      "param": "uidMappings",\n      "displayName": "UID Mappings",\n      "type": "map"\n    }\n  ]\n}\n')),Object(r.b)("p",null,"Valid config would be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "uidMappings": {\n    "value1": "a1b2c3",\n    "value2": "d4e5f6",\n    "value3": "g7h8i9"\n  }\n}\n')),Object(r.b)("p",null,"Note that the keys ",Object(r.b)("inlineCode",{parentName:"p"},"value1"),", ",Object(r.b)("inlineCode",{parentName:"p"},"value2"),", etc. were not predefined in the definition. The OpenHIM-console allows users to dynamically add key/value pairs for a map."),Object(r.b)("h5",{id:"struct-example"},"Struct example"),Object(r.b)("p",null,"A struct is a grouping of other types:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "configDefs": [\n    {\n      "param": "server",\n      "displayName": "Target Server",\n      "description": "Target Server",\n      "type": "struct",\n      "template": [\n        {\n          "param": "host",\n          "displayName": "Host",\n          "description": "Server host",\n          "type": "string"\n        }, {\n          "param": "port",\n          "displayName": "Port",\n          "description": "Server port",\n          "type": "number"\n        }, {\n          "param": "scheme",\n          "displayName": "scheme",\n          "description": "Server Scheme",\n          "type": "option",\n          "values": ["http", "https"]\n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("p",null,"Valid config would be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "server": {\n    "host": "localhost",\n    "port": 8080,\n    "scheme": "http"\n  }\n}\n')),Object(r.b)("h5",{id:"array-example"},"Array example"),Object(r.b)("p",null,"The following is a config definition for a string array:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "configDefs": [\n    {\n      "param": "balancerHosts",\n      "displayName": "Balancer Hostnames",\n      "description": "A list of hosts to load balance between",\n      "type": "string",\n      "array": true\n    }\n  ]\n}\n')),Object(r.b)("p",null,"Valid config would be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "balancerHosts": [\n    "192.168.0.1",\n    "192.168.0.3",\n    "192.168.0.7"\n  ]\n}\n')),Object(r.b)("p",null,"Arrays are supported for all types, including structs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "configDefs": [\n    {\n      "param": "balancerHosts",\n      "displayName": "Balancer Hostnames",\n      "description": "A list of hosts to load balance between",\n      "type": "struct",\n      "array": true,\n      "template": [\n        {\n          "param": "host",\n          "type": "string"\n        }, {\n          "param": "weight",\n          "type": "number"\n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("p",null,"Valid config would be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "balancerHosts": [\n    {\n      "host": "192.168.0.1",\n      "weight": 0.6\n    }, {\n      "host": "192.168.0.3",\n      "weight": 0.2\n    }, {\n      "host": "192.168.0.7",\n      "weight": 0.2\n    }\n  ]\n}\n')),Object(r.b)("h3",{id:"return-transaction-metadata"},"Return transaction metadata"),Object(r.b)("p",null,"A mediator ",Object(r.b)("strong",{parentName:"p"},"SHOULD")," return a structured object that indicates the response that should be returned to the user as well as metadata about the actions that were performed. The mediator is not required to do this however, useful information can be returned to the OpenHIM-core in this way. If a structured response is not returned to the OpenHIM-core then what ever is returned to the OpenHIM-core is passed directly on to the client that made the request."),Object(r.b)("p",null,"The structured object should be returned in the HTTP response for each request that the OpenHIM-core forwards to the mediator. If the mediator chooses to return a structured response then the mediator MUST return this object with a content-type header with the value: ",Object(r.b)("inlineCode",{parentName:"p"},"application/json+openhim"),". If the mediator wants to set a specific content-type to return to the client, they can set this in the response object as a header (see below)."),Object(r.b)("p",null,"The JSON object returned to the OpenHIM should take the following form:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "x-mediator-urn": "<a unique URN>", //same as the mediator\'s urn\n    "status": "Successful", // (optional) an indicator of the status of the transaction, this can be one of the following: [\'Processing\', \'Failed\', \'Completed\', \'Successful\', \'Completed with error(s)\']\n    "response": { ... }, // a response object as defined by OpenHIM-core - see https://github.com/jembi/openhim-core-js/blob/8264a9b7c81a05853c20cd071e379d23d740dd33/src/model/transactions.coffee#L13-L18\n    "orchestrations": [ // (optional) an array of orchestration objects\n        { ... }, // orchestration object as defined by OpenHIM-core - see https://github.com/jembi/openhim-core-js/blob/8264a9b7c81a05853c20cd071e379d23d740dd33/src/model/transactions.coffee#L28-L32\n        { ... }\n    ],\n    "properties": { // (optional) a map of properties that the mediator may want to report\n        "pro1": "val",\n        "pro2": "val"\n    },\n    "error": { // (optional) if an internal server error occurs, details can be included here. If included the transaction will automatically be retried by the OpenHIM-core, if enabled on the channel.\n        "message": "Error message",\n        "stack": "...stack trace..." //(optional)\n    }\n}\n')),Object(r.b)("h4",{id:"including-error-details"},"Including error details"),Object(r.b)("p",null,"See the response format above; error details can be included using the ",Object(r.b)("inlineCode",{parentName:"p"},"error")," field. Although optional, its use is encouraged whenever any internal server errors occur, especially if the connection to an upstream server fails. When included, the OpenHIM will automatically retry the transaction, if the auto-retry option enabled on the channel."),Object(r.b)("p",null,"Error details can also be included for orchestrations; see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/src/model/transactions.js#L34"}),"https://github.com/jembi/openhim-core-js/blob/master/src/model/transactions.js#L34")),Object(r.b)("h3",{id:"optional-send-heartbeats-and-receive-user-configuration-directly-from-openhim-core"},"(Optional) Send heartbeats and receive user configuration directly from OpenHIM-core"),Object(r.b)("p",null,"A mediator ",Object(r.b)("strong",{parentName:"p"},"MAY")," opt to send heartbeats to the OpenHIM-core to demonstrate its aliveness. The heartbeats also allow it to receive user specified configuration data and any changes to that configuration in a near real-time fashion."),Object(r.b)("p",null,"The mediator can do this by utilising the mediator heartbeats API endpoint of the OpenHIM-core. You can find ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../api/mediators/create#send-heartbeat-to-the-openhim"}),"details on this endpoint here"),". This API endpoint, if supported by the mediator, should always be called once at mediator startup using the ",Object(r.b)("inlineCode",{parentName:"p"},"config: true")," flag to get the initial startup config for the mediator if it exists. There after the API endpoint should be hit at least once every 30s (a good number to work with is every 10s) by the mediator to provide the OpenHIM-core with its heartbeat and so that the mediator can receive the latest user config as it becomes available."))}d.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||r;return n?o.a.createElement(u,s(s({ref:t},l),{},{components:n})):o.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},444:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(23),o=n(445);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,s=void 0!==i&&i,c=r.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},445:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);