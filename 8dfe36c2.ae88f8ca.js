/*! For license information please see 8dfe36c2.ae88f8ca.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{242:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),s=n(6),r=(n(0),n(338)),i=n(340),o=n(341),u={id:"authentication",title:"API Authentication",sidebar_label:"Authentication",keywords:["OpenHIM","API","Authentication"],description:"Authentication for the OpenHIM API calls"},c=[{value:"Construct authentication headers",id:"construct-authentication-headers",children:[]},{value:"Initial authentication notification",id:"initial-authentication-notification",children:[]},{value:"For subsequent requests to the API",id:"for-subsequent-requests-to-the-api",children:[]},{value:"Examples",id:"examples",children:[]}],l={id:"version-5.2.x/api/introduction/authentication",title:"API Authentication",description:"Authentication for the OpenHIM API calls",source:"@site/versioned_docs/version-5.2.x/api/introduction/authentication.md",permalink:"/docs/api/introduction/authentication",version:"5.2.x",sidebar_label:"Authentication",sidebar:"version-5.2.x/api",previous:{title:"welcome",permalink:"/docs/api/introduction/welcome"},next:{title:"Audits overview",permalink:"/docs/api/audits/overview"}},h={rightToc:c,metadata:l},p="wrapper";function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)(p,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"construct-authentication-headers"},"Construct authentication headers"),Object(r.b)("p",null,"Each and every API call that is made to the OpenHIM has to be authenticated. The authentication mechanism that is used can be fairly complex to work with however it provides decent security."),Object(r.b)("p",null,"The authentication mechanism is based on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://stackoverflow.com/a/9387289/588776"}),"http://stackoverflow.com/a/9387289/588776"),"."),Object(r.b)("h2",{id:"initial-authentication-notification"},"Initial authentication notification"),Object(r.b)("p",null,"The user notifies the API that it wants to use its authenticated service:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"GET https://<server>:8080/authenticate/<user_email>")),Object(r.b)("p",null,"If you don't have a user account yet, you can use the root user. The default root user details are as follows:"),Object(r.b)("p",null,"username: root\npassword: openhim-password (you should change this on a production installation!)"),Object(r.b)("p",null,"The server will respond with the salt that was used to calculate the clients passwordHash (during user registration):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "salt": "xxx",\n  "ts": "xxx"\n}\n')),Object(r.b)("p",null,"You must calculate a passwordhash using the received salt and the supplied user password. ",Object(r.b)("inlineCode",{parentName:"p"},"passwordhash = (sha512(salt + password))")),Object(r.b)("h2",{id:"for-subsequent-requests-to-the-api"},"For subsequent requests to the API"),Object(r.b)("p",null,"For every request you must add the following additional HTTP headers to the request:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-http"}),"auth-username: <username>\nauth-ts: <the current timestamp - in the following format '2014-10-20T13:19:32.380Z' - user time must be in sync with server time for request to work>\nauth-salt: <random uuid salt that you generate>\nauth-token: <= sha512(passwordhash + auth-salt + auth-ts) >\n")),Object(r.b)("p",null,"The server will authorise this request by calculating sha512(passwordhash + auth-salt + auth-ts) using the passwordhash from its own database and ensuring that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"this is equal to auth-token"),Object(r.b)("li",{parentName:"ul"},"the auth-ts isn't more than 2 seconds old")),Object(r.b)("p",null,"If these 2 conditions true the request is allowed."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("p",null,"Below are a few examples of how to achieve the correct request headers to authenticate to the OpenHIM API"),Object(r.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// openhim-api.js\n\nconst crypto = require('crypto')\nconst request = require('request')\n\n// authenticate the username is valid\nconst authenticate = async (options) => {\n  return new Promise((resolve, reject) => {\n    // authenticate the username\n    let reqOptions = {\n      url: `${options.apiURL}/authenticate/${options.username}`,\n      rejectUnauthorized: options.rejectUnauthorized\n    }\n\n    request.get(reqOptions, (err, resp, body) => {\n      if (err){\n        return reject(err)\n      }\n      // if user isn't found\n      if (resp.statusCode !== 200) {\n        return reject(new Error(`User ${options.username} not found when authenticating with core API`))\n      }\n      try {\n        body = JSON.parse(body)\n        resolve(body)\n      } catch (err) {\n        reject(err)\n      }\n    })\n  })\n}\n\n// Generate the relevant auth headers\nconst genAuthHeaders = async (options) => {\n  const authDetails = await authenticate(options)\n\n  const salt = authDetails.salt\n  const now = new Date()\n\n  // create passhash\n  let shasum = crypto.createHash('sha512')\n  shasum.update(salt + options.password)\n  const passhash = shasum.digest('hex')\n\n  // create token\n  shasum = crypto.createHash('sha512')\n  shasum.update(passhash + salt + now)\n  const token = shasum.digest('hex')\n\n  // define request headers with auth credentials\n  return {\n    'auth-username': options.username,\n    'auth-ts': now,\n    'auth-salt': salt,\n    'auth-token': token\n  }\n}\n"))),Object(r.b)(o.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"When creating your bash file, ensure the bash script is executable"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# openhim-api.sh\n\n#!/bin/bash\n\nif (( $# < 2)); then\n    echo "OpenHIM API: Curl wrapper that sets up the appropriate OpenHIM authentication headers";\n    echo "Usage: $0 USERNAME PASSWORD [CURL_ARGS...]";\n    exit 0;\nfi\n\nusername=$1;\npass=$2;\nshift;\nshift;\n\n# which server?\nserver=""\nfor arg in $@; do\n    match=`echo $arg | grep http | perl -pe \'s|(https?://.*?)/.*|\\1|\'`;\n    if [ "$match" ]; then\n        server=$match;\n    fi\ndone\n\nif [ ! "$server" ]; then\n    echo "OpenHIM server not specified";\n    exit 0;\nfi\n\nauth=`curl -k -s $server/authenticate/$username`;\nsalt=`echo $auth | perl -pe \'s|.*"salt":"(.*?)".*|\\1|\'`;\nts=`echo $auth | perl -pe \'s|.*"ts":"(.*?)".*|\\1|\'`;\n\npasshash=`echo -n "$salt$pass" | shasum -a 512 | awk \'{print $1}\'`;\ntoken=`echo -n "$passhash$salt$ts" | shasum -a 512 | awk \'{print $1}\'`;\n\ncurl -k -H "auth-username: $username" -H "auth-ts: $ts" -H "auth-salt: $salt" -H "auth-token: $token" $@;\necho "";\n')))))}d.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return h}));var a=n(0),s=n.n(a),r=s.a.createContext({}),i=function(e){var t=s.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=i(e.components);return s.a.createElement(r.Provider,{value:t},e.children)};var u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},l=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),l=i(n),h=a,p=l[o+"."+h]||l[h]||c[h]||r;return n?s.a.createElement(p,Object.assign({},{ref:t},u,{components:n})):s.a.createElement(p,Object.assign({},{ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=l;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var h=2;h<r;h++)i[h]=n[h];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},339:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=s.apply(null,a);i&&e.push(i)}else if("object"===r)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()},340:function(e,t,n){"use strict";var a=n(0),s=n.n(a),r=n(339),i=n.n(r),o=n(85),u=n.n(o);const c={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:r,values:o}=e,[l,h]=Object(a.useState)(r),p=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>s.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":l===e,className:i()("tab-item",u.a.tabItem,{"tab-item--active":l===e}),key:e,ref:e=>p.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case c.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(p,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===l)[0]))}},341:function(e,t,n){"use strict";var a=n(0),s=n.n(a);t.a=function(e){return s.a.createElement("div",null,e.children)}}}]);