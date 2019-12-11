(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{240:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return c}));var a=r(1),n=(r(0),r(597));const o={id:"sample-disaster-recovery-procedure",title:"Sample disaster recovery procedure",sidebar_label:"Sample disaster recovery procedure"},i=[{value:"Prior to disaster",id:"prior-to-disaster",children:[{value:"Security and fire-walling",id:"security-and-fire-walling",children:[]}]},{value:"During a disaster",id:"during-a-disaster",children:[]},{value:"After the disaster",id:"after-the-disaster",children:[]},{value:"Disaster Scenario Test",id:"disaster-scenario-test",children:[]}],s={rightToc:i},l="wrapper";function c({components:e,...t}){return Object(n.b)(l,Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This page describes a suggested disaster recover plan for an OpenHIM deployment. Follow this as a minimum for a production deployment of the OpenHIM."),Object(n.b)("h2",{id:"prior-to-disaster"},"Prior to disaster"),Object(n.b)("p",null,"The OpenHIM can be configured fairly simply to allow for disaster recovery. The only artifacts that need to be protected are the mongodb databases (main and the audit db) that the OpenHIM uses and the OpenHIM config file(s) that are used."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"For each mongo database you should use a geographically distributed replica set for redundancy. See ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"http://docs.mongodb.org/manual/tutorial/deploy-geographically-distributed-replica-set/"}),"here for more details"),". A three node set is suggested with two nodes in your primary data center and one node in a geographically distant location."),Object(n.b)("li",{parentName:"ul"},"The OpenHIM config file(s) should also be backed up. These should be periodically synchronised to a geographically distant location (this can be on the same instance that your distant mongodb node is located).")),Object(n.b)("p",null,"A resource should also be created that describes the location of where the backup data is stored and contains the details of servers and recovery procedure put in place using this guide."),Object(n.b)("h3",{id:"security-and-fire-walling"},"Security and fire-walling"),Object(n.b)("p",null,"To secure the OpenHIM we suggest only allowing access to the specific port needed for the application to run. The following must be exposed, all others should be restricted."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"OpenHIM API port (default: 8080)"),Object(n.b)("li",{parentName:"ul"},"OpenHIM non-secure transaction port (default: 5001)"),Object(n.b)("li",{parentName:"ul"},"OpenHIM secure transaction port (default: 5000)"),Object(n.b)("li",{parentName:"ul"},"Any TCP ports you have specified in the OpenHIM UI")),Object(n.b)("p",null,"We also suggest that the mongodb replica sets all be hosted on instances separate from the OpenHIM application with only the follow port allowed through the firewall:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The mongodb port (default: 27017)")),Object(n.b)("p",null,"We\xa0recommend that these instances block access from all other IPs other than the instance on which the OpenHIM-core server is hosted."),Object(n.b)("h2",{id:"during-a-disaster"},"During a disaster"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Ensure that a new primary mongodb node is elected if the old primary experiences failures."),Object(n.b)("li",{parentName:"ol"},"Ensure that the application remains operable."),Object(n.b)("li",{parentName:"ol"},"Attempt to bring up the failed system. If this is a mongodb node ensure that it rejoins the replica set.")),Object(n.b)("h2",{id:"after-the-disaster"},"After the disaster"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Ensure that no data was lost."),Object(n.b)("li",{parentName:"ol"},"Identify root cause of the problem."),Object(n.b)("li",{parentName:"ol"},"Attempt to mitigate the root cause of the problem.")),Object(n.b)("h2",{id:"disaster-scenario-test"},"Disaster Scenario Test"),Object(n.b)("p",null,"Set up a schedule for testing your disaster recovery process. Ideally the test scenario should be executed at least once per project."))}c.isMDXComponent=!0},597:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return p}));var a=r(0),n=r.n(a),o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},s=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(r[a]=e[a]);return r}(e,["components","mdxType","originalType","parentName"]),d=i(r),p=a,u=d[s+"."+p]||d[p]||c[p]||o;return r?n.a.createElement(u,Object.assign({},{ref:t},l,{components:r})):n.a.createElement(u,Object.assign({},{ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);