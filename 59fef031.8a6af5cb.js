(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{209:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(438)),i={id:"polling-channels",title:"Polling Channels (scheduled tasks)",sidebar_label:"Polling Channels (scheduled tasks)",keywords:["OpenHIM","Polling channel"],description:"OpenHIM polling channels feature"},l={unversionedId:"user-guide/polling-channels",id:"version-5.4.x/user-guide/polling-channels",isDocsHomePage:!1,title:"Polling Channels (scheduled tasks)",description:"OpenHIM polling channels feature",source:"@site/versioned_docs/version-5.4.x/user-guide/polling-channels.md",slug:"/user-guide/polling-channels",permalink:"/docs/user-guide/polling-channels",version:"5.4.x",sidebar_label:"Polling Channels (scheduled tasks)",sidebar:"version-5.4.x/docs",previous:{title:"Alerting and reports",permalink:"/docs/user-guide/alerting-reports"},next:{title:"Certificates & Keystore",permalink:"/docs/user-guide/certificates-keystore"}},c=[],s={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A great feature of the OpenHIM is the ability to trigger tasks in other systems.\nThis is made possible by the polling channel. Polling channels are channels that the OpenHIM can trigger internally on a schedule. When a channel is triggered it will cause each of the routes that are configured for that channel to execute."),Object(o.b)("p",null,"The OpenHIM will trigger the polling channel with a ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," request to the ",Object(o.b)("inlineCode",{parentName:"p"},"/trigger"),"\npath on the defined schedule. Each route can override the path with their own as\nlong as they are configured with a path. External systems can be triggered by\npointing a route at them. The external systems will have to expose an HTTP\nendpoint for them to be triggered. The triggering will always happen as an HTTP\n",Object(o.b)("inlineCode",{parentName:"p"},"GET")," request."),Object(o.b)("p",null,"To configure a polling channel in the console, navigate to the 'Channels' page,\nselect add channel and set the type of the channel to 'polling'. You will be able\nto provide a schedule for the polling channel to be executed. You may provide this\nin cron format (ie. 0 4 ","*"," ","*"," ","*"," ) or in a descriptive format (ie. 5 minutes). See\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rschmukler/agenda#everyinterval-name-data-options-cb"}),"the agenda documentation"),"\nfor a more complete description of this format. From there you may configure the\nrest of the channel as usual and add routes for each external system that is to\nbe triggered."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"When using cron format, it is important to note that the server's timezone will be used to action the trigger")))}u.isMDXComponent=!0},438:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,g=p["".concat(i,".").concat(d)]||p[d]||h[d]||o;return t?a.a.createElement(g,l(l({ref:n},s),{},{components:t})):a.a.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);