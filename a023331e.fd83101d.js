(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{314:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(438)),s=n(442),i=n(443),c={id:"create",title:"Create Client",sidebar_label:"Create",keywords:["OpenHIM","API","Client","Create"],description:"Create a OpenHIM Client via the API"},l={unversionedId:"api/clients/create",id:"version-5.2.x/api/clients/create",isDocsHomePage:!1,title:"Create Client",description:"Create a OpenHIM Client via the API",source:"@site/versioned_docs/version-5.2.x/api/clients/create.md",slug:"/api/clients/create",permalink:"/docs/5.2.x/api/clients/create",version:"5.2.x",sidebar_label:"Create",sidebar:"version-5.2.x/api",previous:{title:"Clients overview",permalink:"/docs/5.2.x/api/clients/overview"},next:{title:"Read Client/s",permalink:"/docs/5.2.x/api/clients/read"}},p=[{value:"Create client",id:"create-client",children:[]},{value:"Example",id:"example",children:[]}],u={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-client"},"Create client"),Object(o.b)("p",null,"To create a new client record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the client record."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/clients\nPayload: JSON object of the client record\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(s.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(o.b)(s.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit. You will also need to update the ",Object(o.b)("inlineCode",{parentName:"p"},"clientPassword")," variable to your desired password as well as to ensure you set the ",Object(o.b)("inlineCode",{parentName:"p"},"passwordSalt")," / ",Object(o.b)("inlineCode",{parentName:"p"},"passwordHash")," values in your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\nconst genClientPassword = (password) => {\n  return new Promise((resolve) => {\n    const passwordSalt = crypto.randomBytes(16)\n\n    // create passhash\n    let shasum = crypto.createHash('sha512')\n    shasum.update(password)\n    shasum.update(passwordSalt.toString('hex'))\n    const passwordHash = shasum.digest('hex')\n\n    resolve({\n      \"passwordSalt\": passwordSalt.toString('hex'),\n      \"passwordHash\": passwordHash\n    })\n  })\n}\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/clients',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const clientPassword = \"client-password\"\n  const clientPasswordDetails = await genClientPassword(clientPassword)\n\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the client object."),Object(o.b)("h4",{id:"generate-a-valid-password-hash-and-salt"},"generate a valid password hash and salt"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# gen-client-password.sh\n\n#!/bin/bash\nif (( $# < 1)); then\n    echo "OpenHIM Client Password: Curl wrapper that generates the client Password details";\n    echo "Usage: $0 PASSWORD";\n    exit 0;\nfi\npass=$1;\nshift;\nshift;\n\nsalt=`cat /dev/urandom | tr -dc \'abcdef0-9\' | fold -w 32 | head -n 1`;\npasshash=`echo -n "$pass$salt" | shasum -a 512 | awk \'{print $1}\'`;\n\necho Password Salt: $salt\necho Password Hash: $passhash\n\necho "";\n')),Object(o.b)("p",null,"  and execute the above bash script with the below command"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"./gen-client-password.sh <CLIENT_PASSWORD>\n")),Object(o.b)("p",null,"  Once you have generated the hash and salt for the password, supply it into the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," payload to be submitted"),Object(o.b)("p",null,"  Execute the below command in your terminal to create the client"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/clients -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"  The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"201")," if successful.")),Object(o.b)(i.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("p",null,"  ",Object(o.b)("strong",{parentName:"p"},"Client Roles:")," if the supplied values in the array do not yet exist, it will be created and added to the client, but if the supplied role already exist, it will just be assigned to the client."),Object(o.b)("p",null,"  ",Object(o.b)("strong",{parentName:"p"},"Client password details:")," To generate the the client password details (Salt/hash) you can follow the same steps as described within the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "roles": [\n    "fhir"\n  ],\n  "clientID": "fhir-server",\n  "name": "FHIR Server",\n  "passwordAlgorithm": "sha512",\n  "passwordSalt": "3e74a280c568f27241e48e938edf21bf",\n  "passwordHash": "9a5158dc87a25da9d8822d48ed831a88bb4ba7fa636ddb6d6a725f73688546052cb7f2c355758e4839f9416e6cc0e37e1e3070f597af2836d39768a5ecc050db"\n}\n')))))}d.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(h,i(i({ref:t},l),{},{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},439:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,n){"use strict";var a=n(0),r=n(441);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},442:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(440),s=n(439),i=n(56),c=n.n(i),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,d=e.groupId,b=e.className,h=Object(o.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,O=Object(a.useState)(i),j=O[0],w=O[1],v=a.Children.toArray(e.children);if(null!=d){var y=m[d];null!=y&&y!==j&&u.some((function(e){return e.value===y}))&&w(y)}var g=function(e){w(e),null!=d&&f(d,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},443:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);