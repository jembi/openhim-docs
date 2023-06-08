(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(913)),c=n(917),s=n(918),i={id:"create",title:"Create Transaction",sidebar_label:"Create",keywords:["OpenHIM","API","Transaction","Routing","Create"],description:"Create an OpenHIM Transaction"},l={unversionedId:"api/transactions/create",id:"version-7.1.x/api/transactions/create",isDocsHomePage:!1,title:"Create Transaction",description:"Create an OpenHIM Transaction",source:"@site/versioned_docs/version-7.1.x/api/transactions/create.md",slug:"/api/transactions/create",permalink:"/docs/7.1.x/api/transactions/create",version:"7.1.x",sidebar_label:"Create",sidebar:"version-7.1.x/api",previous:{title:"Transactions overview",permalink:"/docs/7.1.x/api/transactions/overview"},next:{title:"Read Transaction/s",permalink:"/docs/7.1.x/api/transactions/read"}},p=[{value:"Create Transaction via the server",id:"create-transaction-via-the-server",children:[]},{value:"Example routing",id:"example-routing",children:[]}],u={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-transaction-via-the-server"},"Create Transaction via the server"),Object(o.b)("p",null,"The OpenHIM routes through the ports ",Object(o.b)("inlineCode",{parentName:"p"},"5000 (https)"),", ",Object(o.b)("inlineCode",{parentName:"p"},"5001 (http)")," and ",Object(o.b)("inlineCode",{parentName:"p"},"7786 tcp"),". Any request that passes through the OpenHIM is a transaction. For the routing to happen, there has to be a channel that has the route(s) to the upstream server(s). The request has to have a path that matches the channel's ",Object(o.b)("inlineCode",{parentName:"p"},"urlPattern"),"."),Object(o.b)("p",null,"To route using the OpenHIM, create a channel on the OpenHIM console or through the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../channels/create"}),"API"),". If the channel is configured to be a private channel, a client will need to be ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../clients/create"}),"created"),". The client and the channel should be configured such that they are linked. This is done by ensuring that one of the ",Object(o.b)("inlineCode",{parentName:"p"},"roles")," created in client matches one of the ",Object(o.b)("inlineCode",{parentName:"p"},"roles")," in channel's ",Object(o.b)("inlineCode",{parentName:"p"},"allow")," property. The client id and password will be used for authentication. The transaction is created irregardless of whether the upstream server (mediator) being routed to exists or not."),Object(o.b)("h2",{id:"example-routing"},"Example routing"),Object(o.b)("p",null,"Create the channel."),Object(o.b)(c.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that request's ",Object(o.b)("inlineCode",{parentName:"p"},"<PATH>")," matches the channel's ",Object(o.b)("inlineCode",{parentName:"p"},"urlPattern"),". If the channel is private the client's Id and password will have to be passed in for the username and password."),Object(o.b)("p",null,"Copy the below code into a file titled ",Object(o.b)("inlineCode",{parentName:"p"},"router.js")," and supply the correct implementation details."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const request = require('request');\n\n(async () => {\n  const options = {\n    method: 'GET',\n    url: `https://localhost:5000/<PATH>`,\n    rejectUnauthorized: false,\n    auth: {\n      user: 'root@openhim.org',\n      pass: 'openhim-password'\n    },\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"Execute the below commands in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-node"}),"npm install request && node router.js\n"))),Object(o.b)(s.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"Copy the below code and replace the ",Object(o.b)("inlineCode",{parentName:"p"},"<PATH>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_PASSWORD>")," values with correct implementation details. If the channel is public the username and password can be passed in for the ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_PASSWORD>")," respectively."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-curl"}),"curl -k -u <CLIENT_ID>:<CLIENT_PASSWORD> https://localhost:5000/<PATH>\n")))),Object(o.b)("p",null,"The response body will be returned. If the upstream server (server being routed to) is down the response status will be ",Object(o.b)("inlineCode",{parentName:"p"},"500")," and the response body will be ",Object(o.b)("inlineCode",{parentName:"p"},"An internal server error occurred"),"."))}b.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},914:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},915:function(e,t,n){"use strict";var r=n(0),a=n(916);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},916:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},917:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(915),c=n(914),s=n(56),i=n.n(s);const l=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:u,groupId:b,className:d}=e,{tabGroupChoices:h,setTabGroupChoices:m}=Object(o.a)(),[f,O]=Object(r.useState)(s),j=r.Children.toArray(e.children);if(null!=b){const e=h[b];null!=e&&e!==f&&u.some((t=>t.value===e))&&O(e)}const v=e=>{O(e),null!=b&&m(b,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>v(e),onClick:()=>{v(e)}},t)))),t?Object(r.cloneElement)(j.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},918:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);