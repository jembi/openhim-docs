(window.webpackJsonp=window.webpackJsonp||[]).push([[716],{791:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(913)),s={id:"key-components",title:"Key Components and What They Do",sidebar_label:"Key Components",keywords:["OpenHIM","Key components"],description:"The OpenHIM key components"},o={unversionedId:"introduction/key-components",id:"version-7.2.x/introduction/key-components",isDocsHomePage:!1,title:"Key Components and What They Do",description:"The OpenHIM key components",source:"@site/versioned_docs/version-7.2.x/introduction/key-components-and-what-they-do.md",slug:"/introduction/key-components",permalink:"/docs/7.2.x/introduction/key-components",version:"7.2.x",sidebar_label:"Key Components",sidebar:"version-7.2.x/docs",previous:{title:"About the OpenHIM",permalink:"/docs/7.2.x/introduction/about"},next:{title:"Roadmap",permalink:"/docs/7.2.x/introduction/roadmap"}},c=[{value:"The OpenHIM Core",id:"the-openhim-core",children:[]},{value:"Mediators",id:"mediators",children:[]},{value:"OpenHIM Administration Console",id:"openhim-administration-console",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The OpenHIM logically consists of three components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The OpenHIM Core provides the main functions and services"),Object(i.b)("li",{parentName:"ul"},"The Administration Console provides an easy to use interface for system administrators to configure and manage the OpenHIM, giving a window into the workings of the HIE."),Object(i.b)("li",{parentName:"ul"},"Mediators are additional services used to extend the functionality of the OpenHIM by transforming and orchestrating transactions.")),Object(i.b)("h2",{id:"the-openhim-core"},"The OpenHIM Core"),Object(i.b)("p",null,"The OpenHIM Core provides the key functions and services required for an interoperability layer that are useful in a Service Oriented Architecture (SOA) environment. A service-oriented architecture is essentially a collection of services that communicate with each other. The communication can involve either simple data passing or it could involve two or more services coordinating an activity. The OpenHIM is used to connect these services to each other: it provides an interface that point of service applications (clients) are able to contact in order to reach the services provided in the SOA. You can think of this interface as a reverse proxy for your applications but with some special features.\nThe functions of the OpenHIM Core are identified as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Basic Routing - A routing mechanism that routes requests received to the correct upstream service."),Object(i.b)("li",{parentName:"ul"},"Log Service and Audit Repository- This service stores each message in its entirety along with metadata about the message, such as the time and the date the message was received, who sent the message, what information was requested  and the response that the service returned, as well as error information when available."),Object(i.b)("li",{parentName:"ul"},"Authorization and Authentication - The OpenHIM Core ensures that the client system requesting or submitting information is known and has the correct privileges to do so."),Object(i.b)("li",{parentName:"ul"},"Error Monitoring - Displaying and monitoring errors that occur between the services, including email and SMS alerting."),Object(i.b)("li",{parentName:"ul"},"Transaction ReRunning - Replays transactions by resending them to its target service(s). Transactions can also be rerun automatically if a service is unavailable."),Object(i.b)("li",{parentName:"ul"},"Transaction Metrics -  Calculations of statistics such as the number of transactions in a specific period."),Object(i.b)("li",{parentName:"ul"},"Mediator framework - The OpenHIM-core also provides a framework to add and manage your own implementation specific mediators in the system.")),Object(i.b)("h2",{id:"mediators"},"Mediators"),Object(i.b)("p",null,'OpenHIM mediators are separate micro services that run independently from the OpenHIM Core and perform additional mediation tasks for a particular use case. Mediators can be built using any platform or language fit for the requirement. The Core defines interfaces that mediators use to communicate and exchange metadata with the Core, both at a transaction-level as well as general configuration for the mediator. Mediators can also use these interfaces to send their "availability" status to Core for monitoring purposes.\nThere are three types of mediators:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pass-through mediator - Accepts a request and passes it on unchanged."),Object(i.b)("li",{parentName:"ul"},"Adaptor mediator - Accepts a request and transforms/adapts the request into another format before sending the request on to its final destination e.g. transform HL7 v2 to HL7 v3 or transform MHD to XDS.b.  Adapters are used to simplify communication with the domain services and also to adapt a standards-based interface to a custom domain service interface."),Object(i.b)("li",{parentName:"ul"},"Orchestration mediator - Accepts a request and uses that request to execute a business function that may need to call out to other service endpoints on other systems e.g. enriching a message with a client\u2019s unique identifier retrieved from a client registry.\nThese services are invoked whenever there is a need to orchestrate or adapt a certain transaction. If they are not needed the OpenHIM core component will call the domain service directly.  Orchestrators may use other adapters to send messages to other services.\nAs the architecture is designed to evolve as the environment changes, designing these orchestrators and adapters as independent services allows for additional logic or business processes to be added as the need arises.  Mediators are often implementation specific so they will change to meet the specific needs and business processes of the system.  A mediator library is available so that existing mediators can be re-used or adapted as needed.\nBoth the orchestrator and adapter services are also expected to log and audit messages that they send out to the domain services.\nThese services are implemented as mediators within the OpenHIM.")),Object(i.b)("h2",{id:"openhim-administration-console"},"OpenHIM Administration Console"),Object(i.b)("p",null,"The admin console is a web-based user interface that provides visual tools to assist administrators interacting with the OpenHIM Core.\nfor maintenance and monitoring. Administrators use the console to set up users and roles for the client systems that will be sending.\nand receiving the information, and to configure the channels and routes that the information will pass through. Administrators can also monitor the OpenHIM transactions via the console and re-run failed transactions if necessary.\nThe main functions of the OpenHIM console are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Creation and management of client users and groups"),Object(i.b)("li",{parentName:"ul"},"Configuration  of  clients, channels and routes"),Object(i.b)("li",{parentName:"ul"},"Transaction monitoring"),Object(i.b)("li",{parentName:"ul"},"Auditing of system interactions"),Object(i.b)("li",{parentName:"ul"},"Error management")),Object(i.b)("p",null,"The OpenHIM console consists of:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Dashboard")," ",Object(i.b)("br",null),"\nThis is the first page that an administrator sees when launching the OpenHIM console. The dashboard provides metrics about activities taking place in the system such as:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The number of active channels that transactions pass through"),Object(i.b)("li",{parentName:"ul"},"The transaction load"),Object(i.b)("li",{parentName:"ul"},"The average response time the system took to complete a transaction"),Object(i.b)("li",{parentName:"ul"},"The transaction statuses, which reflect the successful transactions as well as those unsuccessful transactions that have been flagged\nas failed or completed with errors."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Transaction Log")," ",Object(i.b)("br",null),"\nThis is where the administrator monitors transactions for each server in the domain. The transaction log provides transactions details such as timestamps, transaction ID, status, channel, client, etc. The administrator can filter through the transaction log using the status of the transaction, channels, date range, units and transactions that were re-run after they failed.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Audit Log")," ",Object(i.b)("br",null),"\nThe audit log registers system interactions and shows a history of every task performed.\nEvent Action/Outcome - the action the administrator performed and the outcomes generated from the action\nEvent Type - details about the change, such as the new group's email address or the user account name that was deleted.\nEvent ID - the ID of the administrator who performed the event.\nSource ID - the internet protocol (IP) address used by the administrator to sign in to the admin console. This might reflect the administrator's physical location, but not necessarily. For example, it could instead be a proxy server or a virtual private network (VPN) address.\nEvent Date and Time - The date and time the event occurred.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Manage Clients, Channels, Tasks and Contacts")," ",Object(i.b)("br",null),"\nThis is where administrators manage clients and their roles. Clients are any external system that is authorised to send requests to and receive information from the OpenHIM e.g. laboratory systems, medical record systems, financial systems, etc.  Clients may be added for each system that needs  to access the OpenHIM's routing capabilities. Clients may also be assigned  to roles for easier channel access management.\nClient\u2019s details will reflect the ID, Name, Organisation, Description, Contact Person, Domain and the Roles of the client system.\nA channel in the OpenHIM captures a request that matches the channel configuration and routes those requests to one or more routes as defined. The response from the primary route will be returned to the request sender as soon as the OpenHIM receives it.\nThe administrator is able to view current and previous tasks that rerun a set of selected transactions. Transaction reruns can be executed from the transaction log. These tasks track the current task status and display information about which transactions are part of each rerun task.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Visualiser")," ",Object(i.b)("br",null),"\nThe visualizer displays a live view of how transactions are being routed through the OpenHIM. Multiple visualizers can be created and these can be  shared among admin users.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"View Mediators from the Console")," ",Object(i.b)("br",null),"\nMediators are add on services that run separately from the OpenHIM. They register themselves with the OpenHIM and once that is done they will be displayed here and their configuration details may be modified. If a mediator is registered it is possible to add routes that point to it in the channel configuration.\nMediation modules operate on messages that are on-boarded between service requesters and service providers. The administrator is able to route messages to different service providers and to amend message content or form. Mediation modules can provide functions such as message logging and error processing that is tailored to specific requirements.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Manage Users and Certificates")," ",Object(i.b)("br",null),"\nAdministrators can add, view, edit and delete users and manage the groups that a user is assigned to. A summary of the user\u2019s channel permissions is also displayed. Channel permissions can be altered in each channel's configuration. A user can have these permissions:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Allowed to View Transactions"),Object(i.b)("li",{parentName:"ul"},"Allowed to View a Transaction's Body"),Object(i.b)("li",{parentName:"ul"},"Allowed to Rerun Transactions")),Object(i.b)("p",{parentName:"li"},"Some users may be required to authenticate their credentials using a digital certificate instead of using passwords.\nA new OpenHIM server certificate may be added or generated and trusted client certificates can also be added or edited.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Export and Import OpenHIM configuration")," ",Object(i.b)("br",null),"\nIt is possible to import and export the OpenHIM's configuration in the form of a JSON file."))))}d.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=d(n),m=a,p=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return n?r.a.createElement(p,o(o({ref:t},l),{},{components:n})):r.a.createElement(p,o({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);