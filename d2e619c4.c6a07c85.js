/*! For license information please see d2e619c4.c6a07c85.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{348:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),r=(n(0),n(382)),i=n(384),o=n(385);const s={id:"read",title:"Read Visualizer/s",sidebar_label:"Read",keywords:["OpenHIM","API","Visualizer","Read"],description:"Read OpenHIM Visualizers via the API"},l={id:"version-5.2.x/api/visualizer/read",title:"Read Visualizer/s",description:"Read OpenHIM Visualizers via the API",source:"@site/versioned_docs/version-5.2.x/api/visualizer/read.md",permalink:"/docs/api/visualizer/read",version:"5.2.x",sidebar_label:"Read",sidebar:"version-5.2.x/api",previous:{title:"Create Visualizer",permalink:"/docs/api/visualizer/create"},next:{title:"Update an existing visualizer",permalink:"/docs/api/visualizer/update"}},c=[{value:"Read all visualizers",id:"read-all-visualizers",children:[]},{value:"Read a specific visualizer",id:"read-a-specific-visualizer",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:c},p="wrapper";function d({components:e,...t}){return Object(r.b)(p,Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To read existing visualizer records you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(r.b)("h2",{id:"read-all-visualizers"},"Read all visualizers"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/visualizers\n")),Object(r.b)("h2",{id:"read-a-specific-visualizer"},"Read a specific visualizer"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/visualizers/:visualizerId\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(r.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/visualizers/visualizerId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { method: 'GET',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n"))),Object(r.b)(o.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/visualizers/visualizerId\n")))),Object(r.b)("p",null,"The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful."))}d.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=o(n),p=a,d=u[s+"."+p]||u[p]||c[p]||i;return n?r.a.createElement(d,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},383:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},384:function(e,t,n){"use strict";n(24),n(19),n(18);var a=n(0),r=n.n(a),i=n(383),o=n.n(i),s=n(128),l=n.n(s),c={left:37,right:39};t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,s=e.values,u=Object(a.useState)(i),p=u[0],d=u[1],h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===t,className:o()("tab-item",l.a.tabItem,{"tab-item--active":p===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case c.right:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c.left:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return d(t)},onClick:function(){return d(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===p}))[0]))}},385:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);