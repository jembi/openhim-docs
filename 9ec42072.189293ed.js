(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{413:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return u}));var a=r(1),i=r(6),n=(r(0),r(589)),c={id:"certificates-keystore",title:"Certificates & Keystore",sidebar_label:"Certificates & Keystore"},o=[{value:"Server certificate & key",id:"server-certificate--key",children:[{value:"Generating a server certificate",id:"generating-a-server-certificate",children:[]}]},{value:"Client certificates",id:"client-certificates",children:[{value:"Generating a trusted client certificate",id:"generating-a-trusted-client-certificate",children:[]}]}],s={rightToc:o},l="wrapper";function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)(l,Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The OpenHIM has a built-in capability to manage TLS certificates and keys through its keystore. You can upload a certificate and key that you have bought from a certificate authority such as Thwate or you can even generate your self-signed certificate to use in your private OpenHIM implementation. Both mechanisms are secure, however, we suggest that you purchase a certificate from a trusted certificate authority to save you some pain with self-signed certificates."),Object(n.b)("p",null,"The OpenHIM also allows you to trust particular certificates. This allows you to specify exactly which client or external hosts you trust and it ties in with the OpenHIM's authentication mechanism for clients."),Object(n.b)("h2",{id:"server-certificate--key"},"Server certificate & key"),Object(n.b)("p",null,"To upload an OpenHIM server certificate, simply drag and drop the certificate and key onto the correct boxes within the certificates page. You will be asked to restart the OpenHIM for this to take effect. The OpenHIM will also warn you if the key and certificate pair that you have uploaded do not match. ",Object(n.b)("strong",{parentName:"p"},"DO NOT")," restart the server if these don't match. It will prevent the server from being able to startup correctly and you will have to fix this manually in the database. If your key requires a passphrase be sure to submit that in the field provided as well."),Object(n.b)("h3",{id:"generating-a-server-certificate"},"Generating a server certificate"),Object(n.b)("p",null,"To generate a self-signed certificate click on the '+ Create Server Certificate' button in the top right. This will guide you through the process of creating a certificate and key and it will automatically add this to the server once you are done. Make sure you download the certificate and key when prompted. For security reasons, the key is not stored on the server."),Object(n.b)("h2",{id:"client-certificates"},"Client certificates"),Object(n.b)("p",null,"If you have client or host certificates for the OpenHIM, drop them into the bottom box on the certificates page to upload them. These certificates may be attached to clients when you edit a particular client from the client's page. This allows clients to be authenticated when using mutual TLS. They may also be used on a route when editing a channel to trust a particular host's certificate."),Object(n.b)("h3",{id:"generating-a-trusted-client-certificate"},"Generating a trusted client certificate"),Object(n.b)("p",null,"You may generate a client certificate by clicking the '+ Create Client Certificate' button and following the steps. Download the certificate and key when prompted as the key is not stored on the server for security reasons."))}u.isMDXComponent=!0},589:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return h}));var a=r(0),i=r.n(a),n=i.a.createContext({}),c=function(e){var t=i.a.useContext(n),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},o=function(e){var t=c(e.components);return i.a.createElement(n.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,s=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(r[a]=e[a]);return r}(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u[o+"."+h]||u[h]||l[h]||n;return r?i.a.createElement(f,Object.assign({},{ref:t},s,{components:r})):i.a.createElement(f,Object.assign({},{ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:a,c[1]=o;for(var h=2;h<n;h++)c[h]=r[h];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);