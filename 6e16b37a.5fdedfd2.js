/*! For license information please see 6e16b37a.5fdedfd2.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{309:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=(n(0),n(597)),o=n(599),i=n(600);const s={id:"read",title:"Read User/s",sidebar_label:"Read",keywords:["OpenHIM","API","User","Read"],description:"Read OpenHIM Users via the API"},c=[{value:"Read all users",id:"read-all-users",children:[]},{value:"Read a specific user",id:"read-a-specific-user",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c},u="wrapper";function p({components:e,...t}){return Object(r.b)(u,Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To read existing user records you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(r.b)("h2",{id:"read-all-users"},"Read all users"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/users\n")),Object(r.b)("h2",{id:"read-a-specific-user"},"Read a specific user"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/users/:email\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(r.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/users/userEmail',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { method: 'GET',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n"))),Object(r.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/users/userEmail\n")))),Object(r.b)("p",null,"The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful."))}p.isMDXComponent=!0},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),p=a,d=u[s+"."+p]||u[p]||l[p]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},598:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},599:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(598),i=n.n(o),s=n(88),c=n.n(s);const l={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:o,values:s}=e,[u,p]=Object(a.useState)(o),d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:i()("tab-item",c.a.tabItem,{"tab-item--active":u===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case l.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(d,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===u)[0]))}},600:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);