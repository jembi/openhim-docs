/*! For license information please see 11d04b5f.36ef22d3.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(1),r=(n(0),n(382)),o=n(384),c=n(385);const i={id:"update",title:"Update an existing contact group",sidebar_label:"Update",keywords:["OpenHIM","API","Contact group","Update"],description:"Update an OpenHIM Contact group via the API"},s={id:"api/contacts-group/update",title:"Update an existing contact group",description:"Update an OpenHIM Contact group via the API",source:"@site/docs/api/contacts-group/update.md",permalink:"/docs/next/api/contacts-group/update",version:"next",sidebar_label:"Update",sidebar:"api",previous:{title:"Read Contact group/s",permalink:"/docs/next/api/contacts-group/read"},next:{title:"Delete contact group",permalink:"/docs/next/api/contacts-group/delete"}},p=[{value:"Update contact group",id:"update-contact-group",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:p},l="wrapper";function d({components:e,...t}){return Object(r.b)(l,Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"update-contact-group"},"Update contact group"),Object(r.b)("p",null,"To update an existing contact group you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the contact group record."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/groups/:groupId\nPayload: JSON object of the contact group record\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(o.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(r.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(r.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/groups/groupId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(r.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(r.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the updated contact group object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/groups/groupId -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(r.b)("p",null,"  The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(r.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "group": "Group 1",\n  "users": [\n    { "user": "User 1", "method": "sms", "maxAlerts": "no max" },\n    { "user": "User 2", "method": "email", "maxAlerts": "1 per hour" },\n    { "user": "User 3", "method": "sms", "maxAlerts": "1 per day" },\n    { "user": "User 7", "method": "email", "maxAlerts": "no max" },\n    { "user": "User 8", "method": "sms", "maxAlerts": "1 per hour" },\n    { "user": "User 9", "method": "email", "maxAlerts": "1 per day"}\n  ]\n}\n')))))}d.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(0),r=n.n(a),o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=c(n),l=a,d=u[i+"."+l]||u[l]||p[l]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},s))}));function l(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},383:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},384:function(e,t,n){"use strict";n(24),n(19),n(18);var a=n(0),r=n.n(a),o=n(383),c=n.n(o),i=n(128),s=n.n(i),p={left:37,right:39};t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,i=e.values,u=Object(a.useState)(o),l=u[0],d=u[1],m=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":l===t,className:c()("tab-item",s.a.tabItem,{"tab-item--active":l===t}),key:t,ref:function(e){return m.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p.right:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p.left:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(m,e.target,e)},onFocus:function(){return d(t)},onClick:function(){return d(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===l}))[0]))}},385:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);