(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{200:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var i=r(3),a=r(7),n=(r(0),r(438)),o={id:"certificates",title:"Certificates",sidebar_label:"Certificates",keywords:["openhim","certificates","config"],description:"Manage OpenHIM certificates"},c={unversionedId:"configuration/certificates",id:"version-5.4.x/configuration/certificates",isDocsHomePage:!1,title:"Certificates",description:"Manage OpenHIM certificates",source:"@site/versioned_docs/version-5.4.x/configuration/certificates.md",slug:"/configuration/certificates",permalink:"/docs/configuration/certificates",version:"5.4.x",sidebar_label:"Certificates",sidebar:"version-5.4.x/docs",previous:{title:"Authentication",permalink:"/docs/configuration/authentication"},next:{title:"Channels",permalink:"/docs/configuration/channels"}},s=[{value:"How to add certificates",id:"how-to-add-certificates",children:[{value:"Server Certificate &amp; Key",id:"server-certificate--key",children:[]},{value:"Generating a Server Certificate",id:"generating-a-server-certificate",children:[]},{value:"Client Certificates",id:"client-certificates",children:[]}]},{value:"How to remove certificates",id:"how-to-remove-certificates",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The OpenHIM has a built in capability to manage TLS certificates and keys through its keystore. You can upload a certificate and key that you have bought from a certificate authority such as ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.thawte.com/"}),"Thwate")," or you can generate your own self signed certificate to use in your private OpenHIM implementation. While both mechanisms are secure, it is suggested that you purchase a certificate from a trusted certificate authority to save you some unwanted difficulty with self signed certificates."),Object(n.b)("p",null,"The OpenHIM also allows you to trust particular certificates. This allows you to specify exactly which client or external hosts you trust and it ties in with the OpenHIMs authentication mechanism for clients."),Object(n.b)("h2",{id:"how-to-add-certificates"},"How to add certificates"),Object(n.b)("h3",{id:"server-certificate--key"},"Server Certificate & Key"),Object(n.b)("p",null,"To upload an OpenHIM server certificate, simply drag and drop both the certificate and key into the correct boxes on the certificates page. Once done, you will be asked to restart the OpenHIM for this to take effect. The OpenHIM will also warn you if the key and certificate pair that you have uploaded do not match."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note"),": Do not restart the server if the certificate and key don\u2019t match as this will prevent the server from being able to startup correctly and force you to fix this manually in the database. If your key requires a passphrase, be sure to submit that in the field provided as well.")),Object(n.b)("h3",{id:"generating-a-server-certificate"},"Generating a Server Certificate"),Object(n.b)("p",null,"To generate a self signed certificate, click on the ",Object(n.b)("inlineCode",{parentName:"p"},"+ Create Server Certificate")," button in the top right. This will guide you through the process of creating a certificate and key. It will also automatically add this to the server once you are done. Make sure you download the certificate and key when prompted as the key is not stored on the server for security reasons."),Object(n.b)("h3",{id:"client-certificates"},"Client Certificates"),Object(n.b)("p",null,"If you have some client certificates or host certificates that you want the OpenHIM to trust, you can add them by simply dropping them in the bottom box to have them uploaded. These certificates may be attached to clients when you edit a particular client from the clients page and enable clients to be authenticated when using mutual TLS. They may also be used on a route when editing a channel to trust a particular hosts certificate."),Object(n.b)("p",null,"You may also add a client certificate by clicking on the ",Object(n.b)("inlineCode",{parentName:"p"},"+ Create Client Certificate")," button. You will be presented with a 8 fields to fill in (only two are required). Once you've clicked ",Object(n.b)("inlineCode",{parentName:"p"},"Create Certificate"),", two buttons will be available for you to download the key and cert files respectively. Store these files somewhere safe then close the prompt. To use these new certs the OpenHIM Core will need to be restarted. The restart button will be available at the top of the ",Object(n.b)("strong",{parentName:"p"},"Certificates")," page."),Object(n.b)("h2",{id:"how-to-remove-certificates"},"How to remove certificates"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(n.b)("li",{parentName:"ol"},"Click on ",Object(n.b)("inlineCode",{parentName:"li"},"Certificates")," found in the left navigation menu."),Object(n.b)("li",{parentName:"ol"},"Locate the certificate to be deleted."),Object(n.b)("li",{parentName:"ol"},"Click on the red ",Object(n.b)("inlineCode",{parentName:"li"},"X")," button."),Object(n.b)("li",{parentName:"ol"},"You will be prompted to confirm your action to delete the chosen certificate.")))}u.isMDXComponent=!0},438:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return h}));var i=r(0),a=r.n(i);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,h=f["".concat(o,".").concat(d)]||f[d]||p[d]||n;return r?a.a.createElement(h,c(c({ref:t},l),{},{components:r})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<n;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);