(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{339:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),s=(a(0),a(438)),o=a(442),c=a(443),i={id:"create",title:"Create User",sidebar_label:"Create",keywords:["OpenHIM","API","User","Create"],description:"Create an OpenHIM User via the API"},l={unversionedId:"api/users/create",id:"api/users/create",isDocsHomePage:!1,title:"Create User",description:"Create an OpenHIM User via the API",source:"@site/docs/api/users/create.md",slug:"/api/users/create",permalink:"/docs/next/api/users/create",version:"current",sidebar_label:"Create",sidebar:"api",previous:{title:"Users overview",permalink:"/docs/next/api/users/overview"},next:{title:"Read User/s",permalink:"/docs/next/api/users/read"}},u=[{value:"Create User",id:"create-user",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"create-user"},"Create User"),Object(s.b)("p",null,"To create a user, you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the user."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/users\nPayload: JSON object of the user\n")),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)(o.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(s.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(s.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(s.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(s.b)("p",null,"  Replace the ",Object(s.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(s.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit. You will also need to update the userPassword variable to your desired password. The password will be used to create the passwordHash and passwordSalt, which are added to the ",Object(s.b)("inlineCode",{parentName:"p"},"SampleData")," payload."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\nconst genUserPassword = (password) => {\n  return new Promise((resolve) => {\n    const passwordSalt = crypto.randomBytes(16)\n\n    // create passhash\n    let shasum = crypto.createHash('sha512')\n    shasum.update(password)\n    shasum.update(passwordSalt.toString('hex'))\n    const passwordHash = shasum.digest('hex')\n\n    resolve({\n      \"passwordSalt\": passwordSalt.toString('hex'),\n      \"passwordHash\": passwordHash\n    })\n  })\n}\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/users',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const userPassword = \"user-password\"\n  const userPasswordDetails = await genUserPassword(userPassword)\n\n  const SampleData = 'SampleData'\n\n  SampleData.passwordHash = userPasswordDetails.passwordHash\n  SampleData.passwordSalt = userPasswordDetails.passwordSalt\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(s.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(s.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(s.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(s.b)("p",null,"  To create a user, you first need to generate a password hash and salt. The script below can be used for this"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),'# gen-user-password.sh\n\n#!/bin/bash\nif (( $# < 1)); then\n    echo "OpenHIM User Password: Curl wrapper that generates the user Password details";\n    echo "Usage: $0 PASSWORD";\n    exit 0;\nfi\npass=$1;\nshift;\nshift;\n\nsalt=`cat /dev/urandom | tr -dc \'abcdef0-9\' | fold -w 32 | head -n 1`;\npasshash=`echo -n "$pass$salt" | shasum -a 512 | awk \'{print $1}\'`;\n\necho Password Salt: $salt\necho Password Hash: $passhash\n\necho "";\n')),Object(s.b)("p",null,"  Copy and execute the bash script above with the below command. Substitute the <USER_PASSWORD> with your desired password before executing."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),"./gen-user-password.sh <USER_PASSWORD>\n")),Object(s.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments to create the user. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(s.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the user object. Add the generated passwordHash and passwordSalt to the ",Object(s.b)("inlineCode",{parentName:"p"},"SampleData.json")," before executing the command."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/users -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(s.b)("p",null,"  The response status will be ",Object(s.b)("inlineCode",{parentName:"p"},"201")," if successful."),Object(s.b)("p",null,"  Once created, a user's activation email is sent to the users email. For this email to be sent, the OpenHIM needs to be configured with the correct mail settings. This can be\ndone in the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/config/default.json#L66"}),"configuration"))),Object(s.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "list": {},\n    "filter": {\n      "limit":100\n    }\n  },\n  "groups": ["root@openhim.org"],\n  "email": "root2@openhim.org",\n  "firstname": "Test",\n  "surname": "Tester",\n  "msisdn": "",\n  "passwordAlgorithm": "sha512",\n  "passwordSalt": "32d0efc6add6dbd29ed46060a2744e0f",\n  "passwordHash": "9362d691a255ffa5c3d1c4992c31d96ea1f3cf71edc4f17685a29d634eaf9849e2d7a4f7237b7b2bca2fb17cee7ec05b4b9cae82c50a81158c45117136c9b3b7"\n}\n')))))}d.isMDXComponent=!0},438:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return a?r.a.createElement(h,c(c({ref:t},l),{},{components:a})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<s;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},439:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,a){"use strict";var n=a(0),r=a(441);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},442:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(440),o=a(439),c=a(56),i=a.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,d=e.groupId,b=e.className,h=Object(s.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,O=Object(n.useState)(c),j=O[0],w=O[1],v=n.Children.toArray(e.children);if(null!=d){var y=m[d];null!=y&&y!==j&&p.some((function(e){return e.value===y}))&&w(y)}var g=function(e){w(e),null!=d&&f(d,e)},P=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},b)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},443:function(e,t,a){"use strict";var n=a(3),r=a(0),s=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return s.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);