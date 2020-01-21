(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{174:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(1),n=r(6),o=(r(0),r(338)),i={id:"sample-disaster-recovery-procedure",title:"Sample disaster recovery procedure",sidebar_label:"Sample disaster recovery procedure",keywords:["OpenHIM","Disaster","Recovery"],description:"Disaster recovery on the OpenHIM"},s=[{value:"Prior to disaster",id:"prior-to-disaster",children:[{value:"Security and fire-walling",id:"security-and-fire-walling",children:[]}]},{value:"During a disaster",id:"during-a-disaster",children:[]},{value:"After the disaster",id:"after-the-disaster",children:[]},{value:"Disaster Scenario Test",id:"disaster-scenario-test",children:[]}],l={id:"user-guide/sample-disaster-recovery-procedure",title:"Sample disaster recovery procedure",description:"Disaster recovery on the OpenHIM",source:"@site/docs/user-guide/disaster-recovery.md",permalink:"/docs/next/user-guide/sample-disaster-recovery-procedure",version:"next",sidebar_label:"Sample disaster recovery procedure",sidebar:"docs",previous:{title:"Mediators",permalink:"/docs/next/user-guide/mediators"},next:{title:"OpenHIM Core versioning and compatibility",permalink:"/docs/next/user-guide/openhim-core-versioning-and-compatibility"}},c={rightToc:s,metadata:l},d="wrapper";function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)(d,Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page describes a suggested disaster recover plan for an OpenHIM deployment. Follow this as a minimum for a production deployment of the OpenHIM."),Object(o.b)("h2",{id:"prior-to-disaster"},"Prior to disaster"),Object(o.b)("p",null,"The OpenHIM can be configured fairly simply to allow for disaster recovery. The only artifacts that need to be protected are the mongodb databases (main and the audit db) that the OpenHIM uses and the OpenHIM config file(s) that are used."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For each mongo database you should use a geographically distributed replica set for redundancy. See ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://docs.mongodb.org/manual/tutorial/deploy-geographically-distributed-replica-set/"}),"here for more details"),". A three node set is suggested with two nodes in your primary data center and one node in a geographically distant location."),Object(o.b)("li",{parentName:"ul"},"The OpenHIM config file(s) should also be backed up. These should be periodically synchronised to a geographically distant location (this can be on the same instance that your distant mongodb node is located).")),Object(o.b)("p",null,"A resource should also be created that describes the location of where the backup data is stored and contains the details of servers and recovery procedure put in place using this guide."),Object(o.b)("h3",{id:"security-and-fire-walling"},"Security and fire-walling"),Object(o.b)("p",null,"To secure the OpenHIM we suggest only allowing access to the specific port needed for the application to run. The following must be exposed, all others should be restricted."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"OpenHIM API port (default: 8080)"),Object(o.b)("li",{parentName:"ul"},"OpenHIM non-secure transaction port (default: 5001)"),Object(o.b)("li",{parentName:"ul"},"OpenHIM secure transaction port (default: 5000)"),Object(o.b)("li",{parentName:"ul"},"Any TCP ports you have specified in the OpenHIM UI")),Object(o.b)("p",null,"We also suggest that the mongodb replica sets all be hosted on instances separate from the OpenHIM application with only the follow port allowed through the firewall:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The mongodb port (default: 27017)")),Object(o.b)("p",null,"We\xa0recommend that these instances block access from all other IPs other than the instance on which the OpenHIM-core server is hosted."),Object(o.b)("h2",{id:"during-a-disaster"},"During a disaster"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Ensure that a new primary mongodb node is elected if the old primary experiences failures."),Object(o.b)("li",{parentName:"ol"},"Ensure that the application remains operable."),Object(o.b)("li",{parentName:"ol"},"Attempt to bring up the failed system. If this is a mongodb node ensure that it rejoins the replica set.")),Object(o.b)("h2",{id:"after-the-disaster"},"After the disaster"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Ensure that no data was lost."),Object(o.b)("li",{parentName:"ol"},"Identify root cause of the problem."),Object(o.b)("li",{parentName:"ol"},"Attempt to mitigate the root cause of the problem.")),Object(o.b)("h2",{id:"disaster-scenario-test"},"Disaster Scenario Test"),Object(o.b)("p",null,"Set up a schedule for testing your disaster recovery process. Ideally the test scenario should be executed at least once per project."))}p.isMDXComponent=!0},338:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return p}));var a=r(0),n=r.n(a),o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},s=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(r[a]=e[a]);return r}(e,["components","mdxType","originalType","parentName"]),d=i(r),p=a,u=d[s+"."+p]||d[p]||c[p]||o;return r?n.a.createElement(u,Object.assign({},{ref:t},l,{components:r})):n.a.createElement(u,Object.assign({},{ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);