/*! For license information please see 35b5d9ba.0be90096.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),r=(n(0),n(597)),i=n(599),o=n(600);const l={id:"read",title:"Read Transaction/s",sidebar_label:"Read",keywords:["OpenHIM","API","Transactions","Read"],description:"Read OpenHIM Transactions via the API"},c=[{value:"Read all transactions",id:"read-all-transactions",children:[{value:"Read client's transactions",id:"read-clients-transactions",children:[]}]},{value:"Read a specific transaction",id:"read-a-specific-transaction",children:[]},{value:"Example Fetch transactions",id:"example-fetch-transactions",children:[]}],s={rightToc:c},p="wrapper";function u({components:e,...t}){return Object(r.b)(p,Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To read existing transaction records you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(r.b)("h2",{id:"read-all-transactions"},"Read all transactions"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/transactions?[filters]\n")),Object(r.b)("p",null,"The following query parameters are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filterLimit"),": The max number of transactions to return"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filterPage"),": The page to return (used in conjunction with ",Object(r.b)("inlineCode",{parentName:"li"},"filterLimit"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filterRepresentation"),": Determines how much information for a transaction to return; options are",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"simple"),": minimal transaction information"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"simpledetails"),": minimal transaction information, but with more fields than simple"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bulkrerun"),": minimal transaction information required in order to determine rerun status"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"full"),": Full transaction information"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fulltruncate"),": The same as full except that large transaction bodies will be truncated"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"channelID"),": Only return transactions that are linked to the specified channel"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filters"),": Advanced filters specified as an object. Transaction fields can be specified based on the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jembi/openhim-core-js/blob/master/src/model/transactions.js#L40-L56"}),"transaction schema"),". For example, in order to filter by response status 200 and a property called ",Object(r.b)("inlineCode",{parentName:"li"},"prop")," with a value ",Object(r.b)("inlineCode",{parentName:"li"},"val"),", the following query could be used: ",Object(r.b)("inlineCode",{parentName:"li"},"/transactions?filterLimit=100&filterPage=0&filters=%7B%22response.status%22:%22200%22,%22properties%22:%7B%22prop%22:%22val%22%7D%7D"))),Object(r.b)("h3",{id:"read-clients-transactions"},"Read client's transactions"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/transactions/clients/:clientId\n")),Object(r.b)("h2",{id:"read-a-specific-transaction"},"Read a specific transaction"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/transactions/:transactionId\n")),Object(r.b)("h2",{id:"example-fetch-transactions"},"Example Fetch transactions"),Object(r.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(r.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/transactions',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { method: 'GET',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    qs: {\n      filterLimit: 5,\n      filterPage: 0,\n      filterRepresentation: 'full'\n    }\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n"))),Object(r.b)(o.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v "https://localhost:8080/transactions?filterLimit=5&filterPage=0&filterRepresentation=full"\n')))),Object(r.b)("p",null,"The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful."))}u.isMDXComponent=!0},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=o(n),u=a,b=p[l+"."+u]||p[u]||s[u]||i;return n?r.a.createElement(b,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},598:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},599:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(598),o=n.n(i),l=n(88),c=n.n(l);const s={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:i,values:l}=e,[p,u]=Object(a.useState)(i),b=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:o()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>b.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(b,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},600:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);