(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{319:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var i=r(3),a=r(7),n=(r(0),r(438)),c={id:"certificates-keystore",title:"Certificates & Keystore",sidebar_label:"Certificates & Keystore",keywords:["OpenHIM","Certificates","Keystore"],description:"Manage OpenHIM certificates and keystore"},o={unversionedId:"user-guide/certificates-keystore",id:"user-guide/certificates-keystore",isDocsHomePage:!1,title:"Certificates & Keystore",description:"Manage OpenHIM certificates and keystore",source:"@site/docs/user-guide/certificates.md",slug:"/user-guide/certificates-keystore",permalink:"/docs/next/user-guide/certificates-keystore",version:"current",sidebar_label:"Certificates & Keystore",sidebar:"docs",previous:{title:"Polling Channels (scheduled tasks)",permalink:"/docs/next/user-guide/polling-channels"},next:{title:"Mediators",permalink:"/docs/next/user-guide/mediators"}},s=[{value:"Server certificate &amp; key",id:"server-certificate--key",children:[{value:"Generating a server certificate",id:"generating-a-server-certificate",children:[]}]},{value:"Client certificates",id:"client-certificates",children:[{value:"Generating a trusted client certificate",id:"generating-a-trusted-client-certificate",children:[]}]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The OpenHIM has a built-in capability to manage TLS certificates and keys through its keystore. You can upload a certificate and key that you have bought from a certificate authority such as Thwate or you can even generate your self-signed certificate to use in your private OpenHIM implementation. Both mechanisms are secure, however, we suggest that you purchase a certificate from a trusted certificate authority to save you some pain with self-signed certificates."),Object(n.b)("p",null,"The OpenHIM also allows you to trust particular certificates. This allows you to specify exactly which client or external hosts you trust and it ties in with the OpenHIM's authentication mechanism for clients."),Object(n.b)("h2",{id:"server-certificate--key"},"Server certificate & key"),Object(n.b)("p",null,"To upload an OpenHIM server certificate, simply drag and drop the certificate and key onto the correct boxes within the certificates page. You will be asked to restart the OpenHIM for this to take effect. The OpenHIM will also warn you if the key and certificate pair that you have uploaded do not match. ",Object(n.b)("strong",{parentName:"p"},"DO NOT")," restart the server if these don't match. It will prevent the server from being able to startup correctly and you will have to fix this manually in the database. If your key requires a passphrase be sure to submit that in the field provided as well."),Object(n.b)("h3",{id:"generating-a-server-certificate"},"Generating a server certificate"),Object(n.b)("p",null,"To generate a self-signed certificate click on the '+ Create Server Certificate' button in the top right. This will guide you through the process of creating a certificate and key and it will automatically add this to the server once you are done. Make sure you download the certificate and key when prompted. For security reasons, the key is not stored on the server."),Object(n.b)("h2",{id:"client-certificates"},"Client certificates"),Object(n.b)("p",null,"If you have client or host certificates for the OpenHIM, drop them into the bottom box on the certificates page to upload them. These certificates may be attached to clients when you edit a particular client from the client's page. This allows clients to be authenticated when using mutual TLS. They may also be used on a route when editing a channel to trust a particular host's certificate."),Object(n.b)("h3",{id:"generating-a-trusted-client-certificate"},"Generating a trusted client certificate"),Object(n.b)("p",null,"You may generate a client certificate by clicking the '+ Create Client Certificate' button and following the steps. Download the certificate and key when prompted as the key is not stored on the server for security reasons."))}u.isMDXComponent=!0},438:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return h}));var i=r(0),a=r.n(i);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),p=i,h=f["".concat(c,".").concat(p)]||f[p]||d[p]||n;return r?a.a.createElement(h,o(o({ref:t},l),{},{components:r})):a.a.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,c=new Array(n);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<n;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);