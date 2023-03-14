(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{216:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(674)),c=t(678),i=t(679),l={id:"read",title:"Read Channel/s",sidebar_label:"Read",keywords:["OpenHIM","API","Channel","Read"],description:"READ OpenHIM Channels via the API"},s={unversionedId:"api/channels/read",id:"version-7.0.x/api/channels/read",isDocsHomePage:!1,title:"Read Channel/s",description:"READ OpenHIM Channels via the API",source:"@site/versioned_docs/version-7.0.x/api/channels/read.md",slug:"/api/channels/read",permalink:"/docs/7.0.x/api/channels/read",version:"7.0.x",sidebar_label:"Read",sidebar:"version-7.0.x/api",previous:{title:"Create Channel",permalink:"/docs/7.0.x/api/channels/create"},next:{title:"Update Channel",permalink:"/docs/7.0.x/api/channels/update"}},u=[{value:"Read all channels",id:"read-all-channels",children:[]},{value:"Read a specific channel",id:"read-a-specific-channel",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To read existing channel records you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(o.b)("h2",{id:"read-all-channels"},"Read all channels"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/channels\n")),Object(o.b)("h2",{id:"read-a-specific-channel"},"Read a specific channel"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/channels/:channelId\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(o.b)(c.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/channels/channelId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { method: 'GET',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n"))),Object(o.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/channels/channelId\n")))),Object(o.b)("p",null,"The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"200")," if successful."))}d.isMDXComponent=!0},674:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,b=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return t?r.a.createElement(b,i(i({ref:n},s),{},{components:t})):r.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},675:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},676:function(e,n,t){"use strict";var a=t(0),r=t(677);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},677:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},678:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(676),c=t(675),i=t(56),l=t.n(i),s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,p=e.values,d=e.groupId,h=e.className,b=Object(o.a)(),m=b.tabGroupChoices,f=b.setTabGroupChoices,O=Object(a.useState)(i),v=O[0],j=O[1],y=a.Children.toArray(e.children);if(null!=d){var w=m[d];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&j(w)}var g=function(e){j(e),null!=d&&f(d,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},h)},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(x,e.target,e)},onFocus:function(){return g(n)},onClick:function(){g(n)}},t)}))),n?Object(a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},679:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}}}]);