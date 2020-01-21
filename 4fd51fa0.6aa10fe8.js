/*! For license information please see 4fd51fa0.6aa10fe8.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(6),i=(n(0),n(338)),c=n(340),s=n(341),o={id:"read",title:"Read Metrics",sidebar_label:"Read",keywords:["OpenHIM","API","Metrics","Read"],description:"Read OpenHIM Metrics via the API"},l=[{value:"Read all metrics",id:"read-all-metrics",children:[]},{value:"Read metrics broken down by channel",id:"read-metrics-broken-down-by-channel",children:[]},{value:"Read metrics for a specific channel",id:"read-metrics-for-a-specific-channel",children:[]},{value:"Read metrics in a specified timeSeries",id:"read-metrics-in-a-specified-timeseries",children:[]},{value:"Read metrics broken down by channel in a specified timeSeries",id:"read-metrics-broken-down-by-channel-in-a-specified-timeseries",children:[]},{value:"Read metrics for a specific channel in a specified timeSeries",id:"read-metrics-for-a-specific-channel-in-a-specified-timeseries",children:[]},{value:"Example",id:"example",children:[]}],d={id:"api/metrics/read",title:"Read Metrics",description:"Read OpenHIM Metrics via the API",source:"@site/docs/api/metrics/read.md",permalink:"/docs/next/api/metrics/read",version:"next",sidebar_label:"Read",sidebar:"api",previous:{title:"Metrics overview",permalink:"/docs/next/api/metrics/overview"},next:{title:"Roles overview",permalink:"/docs/next/api/roles/overview"}},p={rightToc:l,metadata:d},u="wrapper";function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To read existing metrics, you will need to make a TLS request to the OpenHIM API for the below method and endpoint. The two query parameters ",Object(i.b)("inlineCode",{parentName:"p"},"startDate")," and ",Object(i.b)("inlineCode",{parentName:"p"},"endDate")," have to be supplied (datetime format)."),Object(i.b)("h2",{id:"read-all-metrics"},"Read all metrics"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("h2",{id:"read-metrics-broken-down-by-channel"},"Read metrics broken down by channel"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics/channels?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("h2",{id:"read-metrics-for-a-specific-channel"},"Read metrics for a specific channel"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics/channels/:channelId?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("h2",{id:"read-metrics-in-a-specified-timeseries"},"Read metrics in a specified timeSeries"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics/timeseries/:timeSeries?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("p",null,"Time series values are one of 'minute', 'hour', 'day', 'month', 'year'."),Object(i.b)("h2",{id:"read-metrics-broken-down-by-channel-in-a-specified-timeseries"},"Read metrics broken down by channel in a specified timeSeries"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics/timeseries/:timeSeries/channels?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("h2",{id:"read-metrics-for-a-specific-channel-in-a-specified-timeseries"},"Read metrics for a specific channel in a specified timeSeries"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics/timeseries/:timeSeries/channels/:channelId?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("p",null,"The metrics API always returns a JSON array with the metrics. If the channel does not exist the api responds with a status of ",Object(i.b)("inlineCode",{parentName:"p"},"401"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"200")," on success."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(i.b)(c.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"nodejs",mdxType:"TabItem"},Object(i.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/metrics',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { method: 'GET',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    qs: {\n      startDate: new Date(Date.now() - 3.154e+10), // 3.154e+10 is the number of milliseconds in a year\n      endDate: new Date()\n    }\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n"))),Object(i.b)(s.a,{value:"bash",mdxType:"TabItem"},Object(i.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details. Make sure to pass valid dates for the ",Object(i.b)("inlineCode",{parentName:"p"},"startDate")," and ",Object(i.b)("inlineCode",{parentName:"p"},"endDate"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org password -v "https://localhost:8080/metrics?startDate\n=<START_DATE>&endDate=<END_DATE>"\n')))),Object(i.b)("p",null,"The response status code will be ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if successful."))}m.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),i=r.a.createContext({}),c=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=c(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var o="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,u=d[s+"."+p]||d[p]||l[p]||i;return n?r.a.createElement(u,Object.assign({},{ref:t},o,{components:n})):r.a.createElement(u,Object.assign({},{ref:t},o))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[o]="string"==typeof e?e:a,c[1]=s;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},339:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===i)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},340:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(339),c=n.n(i),s=n(85),o=n.n(s);const l={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:i,values:s}=e,[d,p]=Object(a.useState)(i),u=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:c()("tab-item",o.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case l.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===d)[0]))}},341:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);