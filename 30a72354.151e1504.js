(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(674)),i=n(678),c=n(679),s={id:"create",title:"Create Transaction",sidebar_label:"Create",keywords:["OpenHIM","API","Transaction","Routing","Create"],description:"Create an OpenHIM Transaction"},l={unversionedId:"api/transactions/create",id:"version-7.0.x/api/transactions/create",isDocsHomePage:!1,title:"Create Transaction",description:"Create an OpenHIM Transaction",source:"@site/versioned_docs/version-7.0.x/api/transactions/create.md",slug:"/api/transactions/create",permalink:"/docs/7.0.x/api/transactions/create",version:"7.0.x",sidebar_label:"Create",sidebar:"version-7.0.x/api",previous:{title:"Transactions overview",permalink:"/docs/7.0.x/api/transactions/overview"},next:{title:"Read Transaction/s",permalink:"/docs/7.0.x/api/transactions/read"}},u=[{value:"Create Transaction via the server",id:"create-transaction-via-the-server",children:[]},{value:"Example routing",id:"example-routing",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-transaction-via-the-server"},"Create Transaction via the server"),Object(o.b)("p",null,"The OpenHIM routes through the ports ",Object(o.b)("inlineCode",{parentName:"p"},"5000 (https)"),", ",Object(o.b)("inlineCode",{parentName:"p"},"5001 (http)")," and ",Object(o.b)("inlineCode",{parentName:"p"},"7786 tcp"),". Any request that passes through the OpenHIM is a transaction. For the routing to happen, there has to be a channel that has the route(s) to the upstream server(s). The request has to have a path that matches the channel's ",Object(o.b)("inlineCode",{parentName:"p"},"urlPattern"),"."),Object(o.b)("p",null,"To route using the OpenHIM, create a channel on the OpenHIM console or through the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../channels/create"}),"API"),". If the channel is configured to be a private channel, a client will need to be ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../clients/create"}),"created"),". The client and the channel should be configured such that they are linked. This is done by ensuring that one of the ",Object(o.b)("inlineCode",{parentName:"p"},"roles")," created in client matches one of the ",Object(o.b)("inlineCode",{parentName:"p"},"roles")," in channel's ",Object(o.b)("inlineCode",{parentName:"p"},"allow")," property. The client id and password will be used for authentication. The transaction is created irregardless of whether the upstream server (mediator) being routed to exists or not."),Object(o.b)("h2",{id:"example-routing"},"Example routing"),Object(o.b)("p",null,"Create the channel."),Object(o.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that request's ",Object(o.b)("inlineCode",{parentName:"p"},"<PATH>")," matches the channel's ",Object(o.b)("inlineCode",{parentName:"p"},"urlPattern"),". If the channel is private the client's Id and password will have to be passed in for the username and password."),Object(o.b)("p",null,"Copy the below code into a file titled ",Object(o.b)("inlineCode",{parentName:"p"},"router.js")," and supply the correct implementation details."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const request = require('request');\n\n(async () => {\n  const options = {\n    method: 'GET',\n    url: `https://localhost:5000/<PATH>`,\n    rejectUnauthorized: false,\n    auth: {\n      user: 'root@openhim.org',\n      pass: 'openhim-password'\n    },\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"Execute the below commands in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-node"}),"npm install request && node router.js\n"))),Object(o.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"Copy the below code and replace the ",Object(o.b)("inlineCode",{parentName:"p"},"<PATH>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_PASSWORD>")," values with correct implementation details. If the channel is public the username and password can be passed in for the ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_PASSWORD>")," respectively."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-curl"}),"curl -k -u <CLIENT_ID>:<CLIENT_PASSWORD> https://localhost:5000/<PATH>\n")))),Object(o.b)("p",null,"The response body will be returned. If the upstream server (server being routed to) is down the response status will be ",Object(o.b)("inlineCode",{parentName:"p"},"500")," and the response body will be ",Object(o.b)("inlineCode",{parentName:"p"},"An internal server error occurred"),"."))}b.isMDXComponent=!0},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},675:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},676:function(e,t,n){"use strict";var r=n(0),a=n(677);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},677:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},678:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(676),i=n(675),c=n(56),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,b=e.groupId,d=e.className,h=Object(o.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,O=Object(r.useState)(c),v=O[0],j=O[1],y=r.Children.toArray(e.children);if(null!=b){var g=m[b];null!=g&&g!==v&&p.some((function(e){return e.value===g}))&&j(g)}var C=function(e){j(e),null!=b&&f(b,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return C(t)},onClick:function(){C(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},679:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);