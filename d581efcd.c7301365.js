(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{487:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(556)),r=n(562),c={id:"authentication",title:"Authentication",sidebar_label:"Authentication",keywords:["auth","config","authentication","token","jwt","tls"],description:"OpenHIM authentication configuration"},u={unversionedId:"configuration/authentication",id:"version-5.4.x/configuration/authentication",isDocsHomePage:!1,title:"Authentication",description:"OpenHIM authentication configuration",source:"@site/versioned_docs/version-5.4.x/configuration/authentication.md",slug:"/configuration/authentication",permalink:"/docs/5.4.x/configuration/authentication",version:"5.4.x",sidebar_label:"Authentication",sidebar:"version-5.4.x/docs",previous:{title:"OpenHIM Config Options Overview",permalink:"/docs/5.4.x/configuration/overview"},next:{title:"Certificates",permalink:"/docs/5.4.x/configuration/certificates"}},l=[{value:"JSON Web Token(JWT)",id:"json-web-tokenjwt",children:[]},{value:"Custom Token",id:"custom-token",children:[]},{value:"Mutual TLS",id:"mutual-tls",children:[]},{value:"Basic Auth",id:"basic-auth",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The OpenHIM offers a few authentication mechanisms to verify client interactions with the OpenHIM Core. These mechanisms are JWT Tokens, Custom Tokens, Mutual TLS and Basic Auth.\nThese Authentication mechanisms can be configured via JSON config files (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./overview"}),"overview for more"),") or environment variables. The configured auth mechanisms will be displayed in the ",Object(i.b)("inlineCode",{parentName:"p"},"Client")," details section of the OpenHIM Console - screenshot below."),Object(i.b)("img",{alt:"OpenHIM Console Client Auth",src:Object(r.a)("img/client_auth.png")}),Object(i.b)("h2",{id:"json-web-tokenjwt"},"JSON Web Token(JWT)"),Object(i.b)("p",null,"Useful Links:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://jwt.io/introduction"}),"JWT Docs"))),Object(i.b)("p",null,"See below for an example of a JWT token auth config."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"authentication": {\n  "enableJWTAuthentication": true,\n  "jwtSecretOrPrivateKey": "randomUUID",\n  "jwtAlgorithms": ["HS256", "HS384", "HS512"],\n  "jwtAudience": ["UUID_representing_downstream_service"],\n  "jwtIssuer": "UUID_representing_issuer"\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"JWT Auth is ",Object(i.b)("strong",{parentName:"p"},"disabled")," by default")),Object(i.b)("p",null,"Tokens can be created in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://jwt.io/"}),"JWT Sandbox")," for testing. The details from the JSON above are used in the screenshot below:"),Object(i.b)("img",{alt:"JWT Example",src:Object(r.a)("img/jwt_example.png")}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Remember to include your ",Object(i.b)("inlineCode",{parentName:"p"},"client_id")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"sub")," (subject) field of the JWT payload")),Object(i.b)("p",null,"The encoded token generated would then be used in the ",Object(i.b)("inlineCode",{parentName:"p"},"Authorization")," request header for requests to the OpenHIM Core:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl --location --request POST 'https://localhost:5000/test' \\\n--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVVUlEX3JlcHJlc2VudGluZ19kb3duc3RyZWFtX3NlcnZpY2UiLCJpc3MiOiJVVUlEX3JlcHJlc2VudGluZ19pc3N1ZXIiLCJzdWIiOiJ5b3VyX29wZW5oaW1fY2xpZW50In0.I_2PLl7gmi4D26EZ_OuFOVM3fI4sJxjnZGmKxdSdxKA' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"test\": \"test\" }'\n")),Object(i.b)("h2",{id:"custom-token"},"Custom Token"),Object(i.b)("p",null,"The Custom Token is a string value associated with a specific client. This value is sent in the request header to verify the client's identity. To enable Custom Tokens, the following config line is required:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"authentication": {\n  "enableCustomTokenAuthentication": true\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Custom Token Auth is ",Object(i.b)("strong",{parentName:"p"},"disabled")," by default")),Object(i.b)("p",null,"A user will have to add the token in the ",Object(i.b)("inlineCode",{parentName:"p"},"Clients")," section on the OpenHIM Console. This token will then be added to the authorizaton header of a request as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl --location --request POST 'https://localhost:5000/test' \\\n--header 'Authorization: Custom MY_UNIQUE_TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"test\": \"test\" }'\n")),Object(i.b)("h2",{id:"mutual-tls"},"Mutual TLS"),Object(i.b)("p",null,"To enable Mutual TLS, the following config line is required:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"authentication": {\n  "enableMutualTLSAuthentication": true\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Mutual TLS Auth is ",Object(i.b)("strong",{parentName:"p"},"enabled")," by default")),Object(i.b)("p",null,"To make use of this Auth mechanism for a Client, you will first need to add your certificate to the OpenHIM in the ",Object(i.b)("inlineCode",{parentName:"p"},"Certificates")," section. You could also generate your own trusted client certs from the OpenHIM Console. See the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./certificates"}),"certificates")," section for details. You may then choose one of the available client certificates from the ",Object(i.b)("inlineCode",{parentName:"p"},"Client Certificate")," drop down. To send through a test request via Postman, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://learning.postman.com/docs/sending-requests/certificates/"}),"this guide"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"When sending secure requests to the OpenHIM Core remember that the ",Object(i.b)("strong",{parentName:"p"},"default HTTPS port")," is ",Object(i.b)("inlineCode",{parentName:"p"},"5000"))),Object(i.b)("h2",{id:"basic-auth"},"Basic Auth"),Object(i.b)("p",null,"For this authentication mechanism, the username and password are used. The OpenHIM Core JSON config must contain the following line in the ",Object(i.b)("inlineCode",{parentName:"p"},"authentication")," section."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"authentication": {\n  "enableBasicAuthentication": true,\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Basic Auth is ",Object(i.b)("strong",{parentName:"p"},"enabled")," by default")),Object(i.b)("p",null,"From the OpenHIM Console, Clients can be added and their Basic Auth details managed from the ",Object(i.b)("strong",{parentName:"p"},"Clients")," section."),Object(i.b)("p",null,"The request should look something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl --location --request POST 'https://localhost:5000/test' \\\n--header 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"test\": \"test\" }'\n")))}b.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(n),h=a,d=b["".concat(r,".").concat(h)]||b[h]||p[h]||i;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},562:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(23),o=n(563);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},563:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);