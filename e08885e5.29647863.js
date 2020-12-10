/*! For license information please see e08885e5.29647863.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{360:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),r=(n(0),n(382)),o=n(384),i=n(385);const s={id:"create",title:"Create Transaction",sidebar_label:"Create",keywords:["OpenHIM","API","Transaction","Routing","Create"],description:"Create an OpenHIM Transaction"},c={id:"version-5.2.x/api/transactions/create",title:"Create Transaction",description:"Create an OpenHIM Transaction",source:"@site/versioned_docs/version-5.2.x/api/transactions/create.md",permalink:"/docs/api/transactions/create",version:"5.2.x",sidebar_label:"Create",sidebar:"version-5.2.x/api",previous:{title:"Transactions overview",permalink:"/docs/api/transactions/overview"},next:{title:"Read Transaction/s",permalink:"/docs/api/transactions/read"}},l=[{value:"Create Transaction via the server",id:"create-transaction-via-the-server",children:[]},{value:"Example routing",id:"example-routing",children:[]}],p={rightToc:l},u="wrapper";function d({components:e,...t}){return Object(r.b)(u,Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"create-transaction-via-the-server"},"Create Transaction via the server"),Object(r.b)("p",null,"The OpenHIM routes through the ports ",Object(r.b)("inlineCode",{parentName:"p"},"5000 (https)"),", ",Object(r.b)("inlineCode",{parentName:"p"},"5001 (http)")," and ",Object(r.b)("inlineCode",{parentName:"p"},"7786 tcp"),". Any request that passes through the OpenHIM is a transaction. For the routing to happen, there has to be a channel that has the route(s) to the upstream server(s). The request has to have a path that matches the channel's ",Object(r.b)("inlineCode",{parentName:"p"},"urlPattern"),"."),Object(r.b)("p",null,"To route using the OpenHIM, create a channel on the OpenHIM console or through the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../channels/create"}),"API"),". If the channel is configured to be a private channel, a client will need to be ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../clients/create"}),"created"),". The client and the channel should be configured such that they are linked. This is done by ensuring that one of the ",Object(r.b)("inlineCode",{parentName:"p"},"roles")," created in client matches one of the ",Object(r.b)("inlineCode",{parentName:"p"},"roles")," in channel's ",Object(r.b)("inlineCode",{parentName:"p"},"allow")," property. The client id and password will be used for authentication. The transaction is created irregardless of whether the upstream server (mediator) being routed to exists or not."),Object(r.b)("h2",{id:"example-routing"},"Example routing"),Object(r.b)("p",null,"Create the channel."),Object(r.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"Ensure that request's ",Object(r.b)("inlineCode",{parentName:"p"},"<PATH>")," matches the channel's ",Object(r.b)("inlineCode",{parentName:"p"},"urlPattern"),". If the channel is private the client's Id and password will have to be passed in for the username and password."),Object(r.b)("p",null,"Copy the below code into a file titled ",Object(r.b)("inlineCode",{parentName:"p"},"router.js")," and supply the correct implementation details."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const request = require('request');\n\n(async () => {\n  const options = {\n    method: 'GET',\n    url: `https://localhost:5000/<PATH>`,\n    rejectUnauthorized: false,\n    auth: {\n      user: 'root@openhim.org',\n      pass: 'openhim-password'\n    },\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(r.b)("p",null,"Execute the below commands in your terminal to run the nodejs script"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-node"}),"npm install request && node router.js\n"))),Object(r.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"Copy the below code and replace the ",Object(r.b)("inlineCode",{parentName:"p"},"<PATH>"),", ",Object(r.b)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"<CLIENT_PASSWORD>")," values with correct implementation details. If the channel is public the username and password can be passed in for the ",Object(r.b)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"<CLIENT_PASSWORD>")," respectively."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"curl -k -u <CLIENT_ID>:<CLIENT_PASSWORD> https://localhost:5000/<PATH>\n")))),Object(r.b)("p",null,"The response body will be returned. If the upstream server (server being routed to) is down the response status will be ",Object(r.b)("inlineCode",{parentName:"p"},"500")," and the response body will be ",Object(r.b)("inlineCode",{parentName:"p"},"An internal server error occurred"),"."))}d.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,d=p[s+"."+u]||p[u]||l[u]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},383:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},384:function(e,t,n){"use strict";n(24),n(19),n(18);var a=n(0),r=n.n(a),o=n(383),i=n.n(o),s=n(128),c=n.n(s),l={left:37,right:39};t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,s=e.values,p=Object(a.useState)(o),u=p[0],d=p[1],b=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:i()("tab-item",c.a.tabItem,{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l.right:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l.left:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(b,e.target,e)},onFocus:function(){return d(t)},onClick:function(){return d(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===u}))[0]))}},385:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);