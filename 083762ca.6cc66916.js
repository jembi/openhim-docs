(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{438:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),h=r,b=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return t?a.a.createElement(b,l(l({ref:n},s),{},{components:t})):a.a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},439:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},440:function(e,n,t){"use strict";var r=t(0),a=t(441);n.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,n,t){"use strict";var r=t(0);const a=Object(r.createContext)(void 0);n.a=a},442:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(440),i=t(439),l=t(56),c=t.n(l);const s=37,u=39;n.a=function(e){const{lazy:n,block:t,defaultValue:l,values:p,groupId:d,className:h}=e,{tabGroupChoices:b,setTabGroupChoices:m}=Object(o.a)(),[g,f]=Object(r.useState)(l),O=r.Children.toArray(e.children);if(null!=d){const e=b[d];null!=e&&e!==g&&p.some((n=>n.value===e))&&f(e)}const j=e=>{f(e),null!=d&&m(d,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},h)},p.map((({value:e,label:n})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(y,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},n)))),n?Object(r.cloneElement)(O.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map(((e,n)=>Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))}},443:function(e,n,t){"use strict";var r=t(3),a=t(0),o=t.n(a);n.a=function({children:e,hidden:n,className:t}){return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:t}),e)}},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(438)),i=t(442),l=t(443),c={id:"polling-trigger",title:"Trigger a Polling Channel",sidebar_label:"Trigger Polling",keywords:["OpenHIM","API","Channel","Polling","Trigger"],description:"Manually trigger a polling channel request"},s={unversionedId:"api/channels/polling-trigger",id:"version-5.2.x/api/channels/polling-trigger",isDocsHomePage:!1,title:"Trigger a Polling Channel",description:"Manually trigger a polling channel request",source:"@site/versioned_docs/version-5.2.x/api/channels/polling-trigger.md",slug:"/api/channels/polling-trigger",permalink:"/docs/5.2.x/api/channels/polling-trigger",version:"5.2.x",sidebar_label:"Trigger Polling",sidebar:"version-5.2.x/api",previous:{title:"Delete Channel",permalink:"/docs/5.2.x/api/channels/delete"},next:{title:"Clients overview",permalink:"/docs/5.2.x/api/clients/overview"}},u=[{value:"Manually trigger a polling channel",id:"manually-trigger-a-polling-channel",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"manually-trigger-a-polling-channel"},"Manually trigger a polling channel"),Object(o.b)("p",null,"The polling is configured in the same way as we do for normal channel configuration, however, we don't supply a ",Object(o.b)("inlineCode",{parentName:"p"},"urlPattern")," to match an incoming request on as the polling channel is triggered internally from the OpenHIM core based on the supplied cron pattern. "),Object(o.b)("p",null,"To manually trigger a polling channel request you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/channels/:channelId/trigger\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(o.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/channels/channelId/trigger',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { \n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(l.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-curl"}),"./openhim-api.sh root@openhim.org openhim-password -v -X POST https://localhost:8080/channels/channelId/trigger\n")))),Object(o.b)("p",null,"The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"201")," if successful."))}d.isMDXComponent=!0}}]);