(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{321:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(674)),c=n(678),o=n(679),s={id:"read",title:"Read Metrics",sidebar_label:"Read",keywords:["OpenHIM","API","Metrics","Read"],description:"Read OpenHIM Metrics via the API"},l={unversionedId:"api/metrics/read",id:"version-7.0.x/api/metrics/read",isDocsHomePage:!1,title:"Read Metrics",description:"Read OpenHIM Metrics via the API",source:"@site/versioned_docs/version-7.0.x/api/metrics/read.md",slug:"/api/metrics/read",permalink:"/docs/7.0.x/api/metrics/read",version:"7.0.x",sidebar_label:"Read",sidebar:"version-7.0.x/api",previous:{title:"Metrics overview",permalink:"/docs/7.0.x/api/metrics/overview"},next:{title:"Roles overview",permalink:"/docs/7.0.x/api/roles/overview"}},d=[{value:"Read all metrics",id:"read-all-metrics",children:[]},{value:"Read metrics broken down by channel",id:"read-metrics-broken-down-by-channel",children:[]},{value:"Read metrics for a specific channel",id:"read-metrics-for-a-specific-channel",children:[]},{value:"Read metrics in a specified timeSeries",id:"read-metrics-in-a-specified-timeseries",children:[]},{value:"Read metrics broken down by channel in a specified timeSeries",id:"read-metrics-broken-down-by-channel-in-a-specified-timeseries",children:[]},{value:"Read metrics for a specific channel in a specified timeSeries",id:"read-metrics-for-a-specific-channel-in-a-specified-timeseries",children:[]},{value:"Example",id:"example",children:[]}],p={toc:d};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To read existing metrics, you will need to make a TLS request to the OpenHIM API for the below method and endpoint. The two query parameters ",Object(i.b)("inlineCode",{parentName:"p"},"startDate")," and ",Object(i.b)("inlineCode",{parentName:"p"},"endDate")," have to be supplied (datetime format)."),Object(i.b)("h2",{id:"read-all-metrics"},"Read all metrics"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("h2",{id:"read-metrics-broken-down-by-channel"},"Read metrics broken down by channel"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics/channels?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("h2",{id:"read-metrics-for-a-specific-channel"},"Read metrics for a specific channel"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics/channels/:channelId?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("h2",{id:"read-metrics-in-a-specified-timeseries"},"Read metrics in a specified timeSeries"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics/timeseries/:timeSeries?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("p",null,"Time series values are one of 'minute', 'hour', 'day', 'month', 'year'."),Object(i.b)("h2",{id:"read-metrics-broken-down-by-channel-in-a-specified-timeseries"},"Read metrics broken down by channel in a specified timeSeries"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics/timeseries/:timeSeries/channels?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("h2",{id:"read-metrics-for-a-specific-channel-in-a-specified-timeseries"},"Read metrics for a specific channel in a specified timeSeries"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/metrics/timeseries/:timeSeries/channels/:channelId?startDate=<START_DATE>&endDate=<END_DATE>\n")),Object(i.b)("p",null,"The metrics API always returns a JSON array with the metrics. If the channel does not exist the api responds with a status of ",Object(i.b)("inlineCode",{parentName:"p"},"401"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"200")," on success."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(i.b)(c.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"nodejs",mdxType:"TabItem"},Object(i.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/metrics',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { method: 'GET',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    qs: {\n      startDate: new Date(Date.now() - 3.154e+10), // 3.154e+10 is the number of milliseconds in a year\n      endDate: new Date()\n    }\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n"))),Object(i.b)(o.a,{value:"bash",mdxType:"TabItem"},Object(i.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details. Make sure to pass valid dates for the ",Object(i.b)("inlineCode",{parentName:"p"},"startDate")," and ",Object(i.b)("inlineCode",{parentName:"p"},"endDate"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org password -v "https://localhost:8080/metrics?startDate\n=<START_DATE>&endDate=<END_DATE>"\n')))),Object(i.b)("p",null,"The response status code will be ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if successful."))}u.isMDXComponent=!0},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},675:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},676:function(e,t,n){"use strict";var a=n(0),r=n(677);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},677:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},678:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(676),c=n(675),o=n(56),s=n.n(o),l=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,u=e.groupId,b=e.className,m=Object(i.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(a.useState)(o),j=O[0],v=O[1],y=a.Children.toArray(e.children);if(null!=u){var w=h[u];null!=w&&w!==j&&p.some((function(e){return e.value===w}))&&v(w)}var T=function(e){v(e),null!=u&&f(u,e)},E=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return T(t)},onClick:function(){T(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},679:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);