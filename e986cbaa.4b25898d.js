(window.webpackJsonp=window.webpackJsonp||[]).push([[761],{836:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(913)),i={id:"sample-disaster-recovery-procedure",title:"Sample disaster recovery procedure",sidebar_label:"Sample disaster recovery procedure",keywords:["OpenHIM","Disaster","Recovery"],description:"Disaster recovery on the OpenHIM"},s={unversionedId:"user-guide/sample-disaster-recovery-procedure",id:"version-8.0.x/user-guide/sample-disaster-recovery-procedure",isDocsHomePage:!1,title:"Sample disaster recovery procedure",description:"Disaster recovery on the OpenHIM",source:"@site/versioned_docs/version-8.0.x/user-guide/disaster-recovery.md",slug:"/user-guide/sample-disaster-recovery-procedure",permalink:"/docs/user-guide/sample-disaster-recovery-procedure",version:"8.0.x",sidebar_label:"Sample disaster recovery procedure",sidebar:"version-8.0.x/docs",previous:{title:"Mediators",permalink:"/docs/user-guide/mediators"},next:{title:"OpenHIM Core versioning and compatibility",permalink:"/docs/user-guide/openhim-core-versioning-and-compatibility"}},c=[{value:"Prior to disaster",id:"prior-to-disaster",children:[{value:"Security and fire-walling",id:"security-and-fire-walling",children:[]}]},{value:"During a disaster",id:"during-a-disaster",children:[]},{value:"After the disaster",id:"after-the-disaster",children:[]},{value:"Disaster Scenario Test",id:"disaster-scenario-test",children:[]}],l={toc:c};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page describes a suggested disaster recover plan for an OpenHIM deployment. Follow this as a minimum for a production deployment of the OpenHIM."),Object(o.b)("h2",{id:"prior-to-disaster"},"Prior to disaster"),Object(o.b)("p",null,"The OpenHIM can be configured fairly simply to allow for disaster recovery. The only artifacts that need to be protected are the mongodb databases (main and the audit db) that the OpenHIM uses and the OpenHIM config file(s) that are used."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For each mongo database you should use a geographically distributed replica set for redundancy. See ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://docs.mongodb.org/manual/tutorial/deploy-geographically-distributed-replica-set/"}),"here for more details"),". A three node set is suggested with two nodes in your primary data center and one node in a geographically distant location."),Object(o.b)("li",{parentName:"ul"},"The OpenHIM config file(s) should also be backed up. These should be periodically synchronised to a geographically distant location (this can be on the same instance that your distant mongodb node is located).")),Object(o.b)("p",null,"A resource should also be created that describes the location of where the backup data is stored and contains the details of servers and recovery procedure put in place using this guide."),Object(o.b)("h3",{id:"security-and-fire-walling"},"Security and fire-walling"),Object(o.b)("p",null,"To secure the OpenHIM we suggest only allowing access to the specific port needed for the application to run. The following must be exposed, all others should be restricted."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"OpenHIM API port (default: 8080)"),Object(o.b)("li",{parentName:"ul"},"OpenHIM non-secure transaction port (default: 5001)"),Object(o.b)("li",{parentName:"ul"},"OpenHIM secure transaction port (default: 5000)"),Object(o.b)("li",{parentName:"ul"},"Any TCP ports you have specified in the OpenHIM UI")),Object(o.b)("p",null,"We also suggest that the mongodb replica sets all be hosted on instances separate from the OpenHIM application with only the follow port allowed through the firewall:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The mongodb port (default: 27017)")),Object(o.b)("p",null,"We\xa0recommend that these instances block access from all other IPs other than the instance on which the OpenHIM-core server is hosted."),Object(o.b)("h2",{id:"during-a-disaster"},"During a disaster"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Ensure that a new primary mongodb node is elected if the old primary experiences failures."),Object(o.b)("li",{parentName:"ol"},"Ensure that the application remains operable."),Object(o.b)("li",{parentName:"ol"},"Attempt to bring up the failed system. If this is a mongodb node ensure that it rejoins the replica set.")),Object(o.b)("h2",{id:"after-the-disaster"},"After the disaster"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Ensure that no data was lost."),Object(o.b)("li",{parentName:"ol"},"Identify root cause of the problem."),Object(o.b)("li",{parentName:"ol"},"Attempt to mitigate the root cause of the problem.")),Object(o.b)("h2",{id:"disaster-scenario-test"},"Disaster Scenario Test"),Object(o.b)("p",null,"Set up a schedule for testing your disaster recovery process. Ideally the test scenario should be executed at least once per project."))}d.isMDXComponent=!0},913:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,h=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return r?a.a.createElement(h,s(s({ref:t},l),{},{components:r})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);