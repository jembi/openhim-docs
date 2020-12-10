/*! For license information please see 083762ca.c0eeff7d.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return h}));var a=t(1),r=(t(0),t(382)),o=t(384),i=t(385);const l={id:"polling-trigger",title:"Trigger a Polling Channel",sidebar_label:"Trigger Polling",keywords:["OpenHIM","API","Channel","Polling","Trigger"],description:"Manually trigger a polling channel request"},c={id:"version-5.2.x/api/channels/polling-trigger",title:"Trigger a Polling Channel",description:"Manually trigger a polling channel request",source:"@site/versioned_docs/version-5.2.x/api/channels/polling-trigger.md",permalink:"/docs/api/channels/polling-trigger",version:"5.2.x",sidebar_label:"Trigger Polling",sidebar:"version-5.2.x/api",previous:{title:"Delete Channel",permalink:"/docs/api/channels/delete"},next:{title:"Clients overview",permalink:"/docs/api/clients/overview"}},s=[{value:"Manually trigger a polling channel",id:"manually-trigger-a-polling-channel",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:s},u="wrapper";function h({components:e,...n}){return Object(r.b)(u,Object(a.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"manually-trigger-a-polling-channel"},"Manually trigger a polling channel"),Object(r.b)("p",null,"The polling is configured in the same way as we do for normal channel configuration, however, we don't supply a ",Object(r.b)("inlineCode",{parentName:"p"},"urlPattern")," to match an incoming request on as the polling channel is triggered internally from the OpenHIM core based on the supplied cron pattern. "),Object(r.b)("p",null,"To manually trigger a polling channel request you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/channels/:channelId/trigger\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(r.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/channels/channelId/trigger',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { \n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(r.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(r.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"./openhim-api.sh root@openhim.org openhim-password -v -X POST https://localhost:8080/channels/channelId/trigger\n")))),Object(r.b)("p",null,"The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"201")," if successful."))}h.isMDXComponent=!0},382:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),o=r.a.createContext({}),i=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=i(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),u=a,h=p[l+"."+u]||p[u]||s[u]||o;return t?r.a.createElement(h,Object.assign({},{ref:n},c,{components:t})):r.a.createElement(h,Object.assign({},{ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},383:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},384:function(e,n,t){"use strict";t(24),t(19),t(18);var a=t(0),r=t.n(a),o=t(383),i=t.n(o),l=t(128),c=t.n(l),s={left:37,right:39};n.a=function(e){var n=e.block,t=e.children,o=e.defaultValue,l=e.values,p=Object(a.useState)(o),u=p[0],h=p[1],d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":n})},l.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===n,className:i()("tab-item",c.a.tabItem,{"tab-item--active":u===n}),key:n,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case s.right:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s.left:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(d,e.target,e)},onFocus:function(){return h(n)},onClick:function(){return h(n)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===u}))[0]))}},385:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);