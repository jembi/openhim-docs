/*! For license information please see 8982087a.8bab77ab.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{368:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),o=(n(0),n(597)),r=n(599),l=n(600);const i={id:"update",title:"Update an existing role",sidebar_label:"Update",keywords:["OpenHIM","API","Role","Update"],description:"Update an OpenHIM Role via the API"},c=[{value:"Update role",id:"update-role",children:[]},{value:"Example",id:"example",children:[]}],s={rightToc:c},p="wrapper";function d({components:e,...t}){return Object(o.b)(p,Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"update-role"},"Update role"),Object(o.b)("p",null,"To update an existing role record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the role record."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/roles/:roleId\nPayload: JSON object of the role record\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(r.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(o.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/roles/roleId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = { \n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(l.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the updated role object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/roles/roleId -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"  The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(o.b)(l.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("p",null,"  with a json body containing any updates to channels and clients. As with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../roles/create"}),"create a new role")," operation, channels and clients can be specified either by their ",Object(o.b)("inlineCode",{parentName:"p"},"_id")," or ",Object(o.b)("inlineCode",{parentName:"p"},"name")," for a channel and ",Object(o.b)("inlineCode",{parentName:"p"},"clientID")," for a client."),Object(o.b)("p",null,"  Note that the channel and client arrays, if specified, must contain the complete list of items to apply to, i.e. roles will be removed if they exist on any channels and clients that are not contained in the respective arrays. This also means that if ",Object(o.b)("inlineCode",{parentName:"p"},"channels")," and ",Object(o.b)("inlineCode",{parentName:"p"},"clients")," are specified as empty arrays, the result will be the same as deleting the role. If the fields are not specified, then the existing setup will be left as is."),Object(o.b)("p",null,"  The following example will change ",Object(o.b)("inlineCode",{parentName:"p"},"Role1")," by giving the clients ",Object(o.b)("em",{parentName:"p"},"jembi")," and ",Object(o.b)("em",{parentName:"p"},"client-service")," permission to access ",Object(o.b)("em",{parentName:"p"},"channel1"),". Any other channels will be removed, e.g. following from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../roles/create"}),"create a new role")," example, access to ",Object(o.b)("em",{parentName:"p"},"channel2")," will be removed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "Role-name-updated",\n  "channels": [\n    {\n      "name": "channel1"\n    },\n    {\n      "name": "channel2"\n    }\n  ],\n  "clients": [\n    {\n      "clientID": "jembi"\n    }\n  ]\n}\n')),Object(o.b)("p",null,"  Roles can also be renamed by specifying the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," field."))))}d.isMDXComponent=!0},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a),r=o.a.createContext({}),l=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,b=p[i+"."+d]||p[d]||s[d]||r;return n?o.a.createElement(b,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(b,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},598:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var l=o.apply(null,a);l&&e.push(l)}else if("object"===r)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},599:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(598),l=n.n(r),i=n(88),c=n.n(i);const s={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:r,values:i}=e,[p,d]=Object(a.useState)(r),b=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:l()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>b.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(b,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},600:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);