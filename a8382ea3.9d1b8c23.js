(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{429:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var i=a(1),r=(a(0),a(597));const n={id:"certificates",title:"Certificates",sidebar_label:"Certificates"},o=[{value:"How to add certificates",id:"how-to-add-certificates",children:[{value:"Server Certificate & Key",id:"server-certificate--key",children:[]},{value:"Generating a Server Certificate",id:"generating-a-server-certificate",children:[]},{value:"Client Certificates",id:"client-certificates",children:[]}]},{value:"How to remove certificates",id:"how-to-remove-certificates",children:[]}],c={rightToc:o},l="wrapper";function s({components:e,...t}){return Object(r.b)(l,Object(i.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The OpenHIM has a built in capability to manage TLS certificates and keys through its keystore. You can upload a certificate and key that you have bought from a certificate authority such as ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.thawte.com/"}),"Thwate")," or you can generate your own self signed certificate to use in your private OpenHIM implementation. While both mechanisms are secure, it is suggested that you purchase a certificate from a trusted certificate authority to save you some unwanted difficulty with self signed certificates."),Object(r.b)("p",null,"The OpenHIM also allows you to trust particular certificates. This allows you to specify exactly which client or external hosts you trust and it ties in with the OpenHIMs authentication mechanism for clients."),Object(r.b)("h2",{id:"how-to-add-certificates"},"How to add certificates"),Object(r.b)("h3",{id:"server-certificate--key"},"Server Certificate & Key"),Object(r.b)("p",null,"To upload an OpenHIM server certificate, simply drag and drop both the certificate and key into the correct boxes on the certificates page. Once done, you will be asked to restart the OpenHIM for this to take effect. The OpenHIM will also warn you if the key and certificate pair that you have uploaded do not match."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": Do not restart the server if the certificate and key don\u2019t match as this will prevent the server from being able to startup correctly and force you to fix this manually in the database. If your key requires a passphrase, be sure to submit that in the field provided as well.")),Object(r.b)("h3",{id:"generating-a-server-certificate"},"Generating a Server Certificate"),Object(r.b)("p",null,"To generate a self signed certificate, click on the ",Object(r.b)("inlineCode",{parentName:"p"},"+ Create Server Certificate")," button in the top right. This will guide you through the process of creating a certificate and key. It will also automatically add this to the server once you are done. Make sure you download the certificate and key when asked to do so as the key is not stored on the server for security reasons."),Object(r.b)("h3",{id:"client-certificates"},"Client Certificates"),Object(r.b)("p",null,"If you have some client certificates or host certificates that you want the OpenHIM to trust, you can add them by simply dropping them in the bottom box to have them uploaded. These certificates may be attached to clients when you edit a particular client from the clients page and enable clients to be authenticated when using mutual TLS. They may also be used on a route when editing a channel to trust a particular hosts certificate."),Object(r.b)("p",null,"You may also add a client certificate by clicking on the ",Object(r.b)("inlineCode",{parentName:"p"},"+ Create Client Certificate")," button."),Object(r.b)("h2",{id:"how-to-remove-certificates"},"How to remove certificates"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(r.b)("li",{parentName:"ol"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"Certificates")," found in the left navigation menu."),Object(r.b)("li",{parentName:"ol"},"Locate the certificate to be deleted."),Object(r.b)("li",{parentName:"ol"},"Click on the red ",Object(r.b)("inlineCode",{parentName:"li"},"X")," button."),Object(r.b)("li",{parentName:"ol"},"You will be prompted to confirm your action to delete the chosen certificate.")))}s.isMDXComponent=!0},597:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return h}));var i=a(0),r=a.n(i),n=r.a.createContext({}),o=function(e){var t=r.a.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=o(e.components);return r.a.createElement(n.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(a[i]=e[i]);return a}(e,["components","mdxType","originalType","parentName"]),u=o(a),h=i,d=u[c+"."+h]||u[h]||s[h]||n;return a?r.a.createElement(d,Object.assign({},{ref:t},l,{components:a})):r.a.createElement(d,Object.assign({},{ref:t},l))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:i,o[1]=c;for(var h=2;h<n;h++)o[h]=a[h];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);