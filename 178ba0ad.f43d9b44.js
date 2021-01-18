(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(438)),c=n(442),i=n(443),s={id:"delete",title:"Delete contact group",sidebar_label:"Delete",keywords:["OpenHIM","API","Contact group","Delete"],description:"Delete an OpenHIM Contact group via the API"},l={unversionedId:"api/contacts-group/delete",id:"version-5.2.x/api/contacts-group/delete",isDocsHomePage:!1,title:"Delete contact group",description:"Delete an OpenHIM Contact group via the API",source:"@site/versioned_docs/version-5.2.x/api/contacts-group/delete.md",slug:"/api/contacts-group/delete",permalink:"/docs/5.2.x/api/contacts-group/delete",version:"5.2.x",sidebar_label:"Delete",sidebar:"version-5.2.x/api",previous:{title:"Update an existing contact group",permalink:"/docs/5.2.x/api/contacts-group/update"},next:{title:"Import/export overview",permalink:"/docs/5.2.x/api/import-export/overview"}},u=[{value:"Delete a specific visualizer record",id:"delete-a-specific-visualizer-record",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"delete-a-specific-visualizer-record"},"Delete a specific visualizer record"),Object(a.b)("p",null,"To delete a contact group record you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-curl"}),"Method: DELETE\nEndpoint: {openhim_url}:8080/groups/:groupId\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(a.b)(c.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(a.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(a.b)("p",null,"Replace the ",Object(a.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/groups/groupId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { method: 'DELETE',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n"))),Object(a.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(a.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(a.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-curl"}),"./openhim-api.sh root@openhim.org openhim-password -v -X DELETE https://localhost:8080/groups/groupId\n")))),Object(a.b)("p",null,"The response status code will be ",Object(a.b)("inlineCode",{parentName:"p"},"200")," if successful."))}d.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(h,i(i({ref:t},l),{},{components:n})):o.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},439:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},440:function(e,t,n){"use strict";var r=n(0),o=n(441);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},442:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(440),c=n(439),i=n(56),s=n.n(i);const l=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:d,className:b}=e,{tabGroupChoices:h,setTabGroupChoices:m}=Object(a.a)(),[f,O]=Object(r.useState)(i),v=r.Children.toArray(e.children);if(null!=d){const e=h[d];null!=e&&e!==f&&p.some((t=>t.value===e))&&O(e)}const j=e=>{O(e),null!=d&&m(d,e)},g=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},p.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(r.cloneElement)(v.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},443:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);