/*! For license information please see e08885e5.3310a1df.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{539:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),o=(n(0),n(597)),l=n(599),s=n(600),i={id:"create",title:"Create Transaction",sidebar_label:"Create",keywords:["OpenHIM","API","Transaction","Routing","Create"],description:"Create an OpenHIM Transaction"},c=[{value:"Create Transaction via the server",id:"create-transaction-via-the-server",children:[]},{value:"Example routing",id:"example-routing",children:[]}],p={rightToc:c},u="wrapper";function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-transaction-via-the-server"},"Create Transaction via the server"),Object(o.b)("p",null,"The OpenHIM routes through the ports ",Object(o.b)("inlineCode",{parentName:"p"},"5000 (https)"),", ",Object(o.b)("inlineCode",{parentName:"p"},"5001 (http)")," and ",Object(o.b)("inlineCode",{parentName:"p"},"7786 tcp"),". Any request that passes through the OpenHIM is a transaction. For the routing to happen, there has to be a channel that has the route(s) to the upstream server(s). The request has to have a path that matches the channel's ",Object(o.b)("inlineCode",{parentName:"p"},"urlPattern"),"."),Object(o.b)("p",null,"To route using the OpenHIM, create a channel on the OpenHIM console or through the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../channels/create"}),"API"),". If the channel is configured to be a private channel, a client will need to be ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../clients/create"}),"created"),". The client and the channel should be configured such that they are linked. This is done by ensuring that one of the ",Object(o.b)("inlineCode",{parentName:"p"},"roles")," created in client matches one of the ",Object(o.b)("inlineCode",{parentName:"p"},"roles")," in channel's ",Object(o.b)("inlineCode",{parentName:"p"},"allow")," property. The client id and password will be used for authentication. The transaction is created irregardless of whether the upstream server (mediator) being routed to exists or not."),Object(o.b)("h2",{id:"example-routing"},"Example routing"),Object(o.b)("p",null,"Create the channel."),Object(o.b)(l.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"lang",mdxType:"TabItem"},Object(o.b)(l.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that request's ",Object(o.b)("inlineCode",{parentName:"p"},"<PATH>")," matches the channel's ",Object(o.b)("inlineCode",{parentName:"p"},"urlPattern"),". If the channel is private the client's Id and password will have to be passed in for the username and password."),Object(o.b)("p",null,"Copy the below code into a file titled ",Object(o.b)("inlineCode",{parentName:"p"},"router.js")," and supply the correct implementation details."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const request = require('request');\n\n(async () => {\n  const options = {\n    method: 'GET',\n    url: `https://localhost:5000/<PATH>`,\n    rejectUnauthorized: false,\n    auth: {\n      user: 'root@openhim.org',\n      pass: 'openhim-password'\n    },\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"Execute the below commands in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-node"}),"npm install request && node router.js\n"))),Object(o.b)(s.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"Copy the below code and replace the ",Object(o.b)("inlineCode",{parentName:"p"},"<PATH>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_PASSWORD>")," values with correct implementation details. If the channel is public the username and password can be passed in for the ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_PASSWORD>")," respectively."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"curl -k -u <CLIENT_ID>:<CLIENT_PASSWORD> https://localhost:5000/<PATH>\n")))))),Object(o.b)("p",null,"The response body will be returned. If the upstream server (server being routed to) is down the response status will be ",Object(o.b)("inlineCode",{parentName:"p"},"500")," and the response body will be ",Object(o.b)("inlineCode",{parentName:"p"},"An internal server error occurred"),"."))}b.isMDXComponent=!0},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,b=p[s+"."+u]||p[u]||c[u]||o;return n?r.a.createElement(b,Object.assign({},{ref:t},i,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[i]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},598:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},599:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(598),l=n.n(o),s=n(88),i=n.n(s);const c={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:o,values:s}=e,[p,u]=Object(a.useState)(o),b=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:l()("tab-item",i.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>b.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case c.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(b,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},600:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);