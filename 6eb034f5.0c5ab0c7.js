(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(438)),i=n(442),c=n(443),s={id:"create",title:"Create Audit",sidebar_label:"Create",keywords:["OpenHIM","API","Audit","Create"],description:"Create an OpenHIM Audit via the API"},l={unversionedId:"api/audits/create",id:"api/audits/create",isDocsHomePage:!1,title:"Create Audit",description:"Create an OpenHIM Audit via the API",source:"@site/docs/api/audits/create.md",slug:"/api/audits/create",permalink:"/docs/next/api/audits/create",version:"current",sidebar_label:"Create",sidebar:"api",previous:{title:"Audits overview",permalink:"/docs/next/api/audits/overview"},next:{title:"Read Audit/s",permalink:"/docs/next/api/audits/read"}},u=[{value:"Create audit",id:"create-audit",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-audit"},"Create audit"),Object(o.b)("p",null,"To create a new audit record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the audit record."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/audits\nPayload: JSON object of the audit record\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(i.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(o.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/audits',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the audit object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/audits -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"  The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"201")," if successful.")),Object(o.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "rawMessage": "This will be the raw ATNA message that gets received to be used as a backup reference",\n  "eventIdentification": {\n    "eventDateTime": "2019-12-12T15:38:25.282+02:00",\n    "eventOutcomeIndicator": "0",\n    "eventActionCode": "R",\n    "eventID": {\n      "code": "222",\n      "displayName": "Read",\n      "codeSystemName": "DCM"\n    },\n    "eventTypeCode": {\n      "code": "ITI-9",\n      "displayName": "PIX Read",\n      "codeSystemName": "IHE Transactions"\n    }\n  },\n  "activeParticipant": [\n    {\n      "userID": "pix|pix",\n      "alternativeUserID": "2100",\n      "userIsRequestor": "false",\n      "networkAccessPointID": "localhost",\n      "networkAccessPointTypeCode": "1",\n      "roleIDCode": {\n        "code": "110152",\n        "displayName": "Destination",\n        "codeSystemName": "DCM"\n      }\n    }, {\n      "userID": "pix|pix",\n      "alternativeUserID": "2100",\n      "userIsRequestor": "false",\n      "networkAccessPointID": "localhost",\n      "networkAccessPointTypeCode": "1",\n      "roleIDCode": {\n        "code": "110152",\n        "displayName": "Destination",\n        "codeSystemName": "DCM"\n      }\n    }\n  ],\n  "auditSourceIdentification": {\n    "auditSourceID": "openhim"\n  },\n  "participantObjectIdentification": [\n    {\n      "participantObjectID": "975cac30-68e5-11e4-bf2a-04012ce65b02^^^ECID&amp;ECID&amp;ISO",\n      "participantObjectTypeCode": "1",\n      "participantObjectTypeCodeRole": "1",\n      "participantObjectIDTypeCode": {\n        "code": "2",\n        "displayName": "PatientNumber",\n        "codeSystemName": "RFC-3881"\n      }\n    }, {\n      "participantObjectID": "dca6c09e-cc92-4bc5-8741-47bd938fa405",\n      "participantObjectTypeCode": "2",\n      "participantObjectTypeCodeRole": "24",\n      "participantObjectIDTypeCode": {\n        "code": "ITI-9",\n        "displayName": "PIX Query",\n        "codeSystemName": "IHE Transactions"\n      },\n      "participantObjectQuery": "TVNIfF5+XCZ8b3BlbmhpbXxvcGVuaGltLW1lZGlhdG9yLW9oaWUteGRzfHBpeHxwaXh8MjAxNTAyMjAxNTM4MjUrMDIwMHx8UUJQXlEyM15RQlBfUTIxfDEwMDQxYWQ5LTkyNDAtNDEyNS04ZDMwLWZiYzczNGEwOTMwMXxQfDIuNQ1RUER8SUhFIFBJWCBRdWVyeXw1OTRhNDVkYS0zOTY5LTQzOTAtODE2Ni01MjhkZDFmNWU0ZTF8NzZjYzc2NWE0NDJmNDEwXl5eJjEuMy42LjEuNC4xLjIxMzY3LjIwMDUuMy43JklTT15QSXxeXl5FQ0lEJkVDSUQmSVNPXlBJDVJDUHxJDQ==",\n      "participantObjectDetail": {\n        "type": "MSH-10",\n        "value": "MTAwNDFhZDktOTI0MC00MTI1LThkMzAtZmJjNzM0YTA5MzAx"\n      }\n    }\n  ]\n}\n')))))}d.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},439:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,n){"use strict";var a=n(0),r=n(441);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},442:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(440),i=n(439),c=n(56),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(a.useState)(c),j=O[0],y=O[1],v=a.Children.toArray(e.children);if(null!=d){var w=h[d];null!=w&&w!==j&&p.some((function(e){return e.value===w}))&&y(w)}var T=function(e){y(e),null!=d&&f(d,e)},I=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(I,e.target,e)},onFocus:function(){return T(t)},onClick:function(){T(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},443:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);