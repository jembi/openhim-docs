(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(7),a=(r(0),r(674)),s={id:"alerting-reports",title:"Alerting and reports",sidebar_label:"Alerting and reports",keywords:["OpenHIM","Alerts","Reports"],description:"Alerting and reporting on the OpenHIM"},i={unversionedId:"user-guide/alerting-reports",id:"version-5.4.x/user-guide/alerting-reports",isDocsHomePage:!1,title:"Alerting and reports",description:"Alerting and reporting on the OpenHIM",source:"@site/versioned_docs/version-5.4.x/user-guide/alerting.md",slug:"/user-guide/alerting-reports",permalink:"/docs/5.4.x/user-guide/alerting-reports",version:"5.4.x",sidebar_label:"Alerting and reports",sidebar:"version-5.4.x/docs",previous:{title:"Transaction List",permalink:"/docs/5.4.x/user-guide/transaction-list"},next:{title:"Polling Channels (scheduled tasks)",permalink:"/docs/5.4.x/user-guide/polling-channels"}},l=[{value:"Failure alerting",id:"failure-alerting",children:[]},{value:"Reports",id:"reports",children:[]}],u={toc:l};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The OpenHIM supports alerting users via email or sms under specific conditions. It is also able to send out daily and weekly reports about the transactions that it has processed. In the following section we explore these functions in more detail."),Object(a.b)("h2",{id:"failure-alerting"},"Failure alerting"),Object(a.b)("p",null,"Alerts can be sent out to a group of users when a particular http status code is received as a response to a transaction. To setup alerts, edit the channel that you wish to enable alerts for and select the 'Alerts' tab. On this tab you can add rules for when alerts are sent out. You must specify on which http status code you want the alerts to trigger (eg. 401). You can even specify a range like 4xx for any status codes in the 400-499 range. You may also optionally set a failure rate. This allows you to only trigger alerts if the rate of failure is above the percentage that you specify. Alerts are sampled at 1 min intervals."),Object(a.b)("p",null,"To ensure that alerts are sent to the right group of people, you must specify the users or contact list. You may choose individual users or choose to add an entire contact list of users. Contact lists can be managed through the 'Contact lists' option on the main menu."),Object(a.b)("p",null,"You may add as many alerts as you need and as many users and contact lists as you require for each alert."),Object(a.b)("h2",{id:"reports"},"Reports"),Object(a.b)("p",null,"The OpenHIM can also produce daily and weekly reports for users. These will contain information such as how many requests were processed and how many of those were successful or how many failed. There are two ways to setup reporting. A user may enable reporting on their profile (click on the username on the top right and choose profile, then enable the reports that you wish to receive) or an admin user can enable reporting for any other user. By default, the daily reports are sent at 7am the following day and the weekly reports are sent out at 7am each Monday for the previous week."))}c.isMDXComponent=!0},674:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(h,i(i({ref:t},u),{},{components:r})):o.a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);