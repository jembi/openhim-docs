(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{348:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return c}));var r=a(1),n=(a(0),a(597));const o={id:"mediators",title:"Mediators",sidebar_label:"Mediators"},i=[{value:"add a mediator",id:"add-a-mediator",children:[]}],s={rightToc:i},l="wrapper";function c({components:e,...t}){return Object(n.b)(l,Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Mediators")," can be built using any platform that is desired (some good options are pure Java using our mediator engine, Node.js, Apache Camel, Mule ESB, or any language or platform that is a good fit for your needs). The only restriction is that the mediator MUST communicate with the OpenHIM core in a particular way. Mediators must register themselves with the OpenHIM core, accept request from the OpenHIM core and return a specialised response to the OpenHIM core in order to explain what that mediator did."),Object(n.b)("h2",{id:"add-a-mediator"},"add a mediator"),Object(n.b)("p",null,"Mediators are add-on services that run separately from the OpenHIM. They register themselves with the OpenHIM and once that is done, they will be displayed in the OpenHIM where their configuration details may be modified. Also, if a mediator is registered it will allow you to easily add routes that point to it in the channel configuration."),Object(n.b)("p",null,"Mediators may be developed in any language and only talk to the OpenHIM via its RESTful API. Therefore, the installation instructions will differ for each mediator. Please refer to the documentation of that mediator for details on how to install it. However, there are best practices that apply to all mediators."),Object(n.b)("p",null,"The following are best practices in regard to the setup of mediators:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Mediators do not have to be installed on the same server as the OpenHIM."),Object(n.b)("li",{parentName:"ol"},"Ensure that the mediator is able to reach the OpenHIM core servers\u2019 RESTful API endpoint."),Object(n.b)("li",{parentName:"ol"},"Ensure that the OpenHIM is able to reach the mediator\u2019s endpoint for receiving requests."),Object(n.b)("li",{parentName:"ol"},"Ensure that you configure the mediator with correct credentials so that it may access the OpenHIMs RESTful API as an admin user."),Object(n.b)("li",{parentName:"ol"},"Ensure that the mediator trusts the OpenHIMs core certificate (if it is self signed) as API communication must take place over https.")))}c.isMDXComponent=!0},597:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r),o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(a[r]=e[r]);return a}(e,["components","mdxType","originalType","parentName"]),d=i(a),p=r,u=d[s+"."+p]||d[p]||c[p]||o;return a?n.a.createElement(u,Object.assign({},{ref:t},l,{components:a})):n.a.createElement(u,Object.assign({},{ref:t},l))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);