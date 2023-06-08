(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{644:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(3),a=n(7),i=(n(0),n(913)),l={id:"clients",title:"Clients",sidebar_label:"Clients",keywords:["openhim","client","config"],description:"Manage OpenHIM clients"},r={unversionedId:"configuration/clients",id:"version-7.1.x/configuration/clients",isDocsHomePage:!1,title:"Clients",description:"Manage OpenHIM clients",source:"@site/versioned_docs/version-7.1.x/configuration/clients.md",slug:"/configuration/clients",permalink:"/docs/7.1.x/configuration/clients",version:"7.1.x",sidebar_label:"Clients",sidebar:"version-7.1.x/docs",previous:{title:"Channels",permalink:"/docs/7.1.x/configuration/channels"},next:{title:"Contact list",permalink:"/docs/7.1.x/configuration/contact-list"}},c=[{value:"How to add clients",id:"how-to-add-clients",children:[]},{value:"How to remove clients",id:"how-to-remove-clients",children:[]},{value:"How to edit clients",id:"how-to-edit-clients",children:[]},{value:"Client Roles",id:"client-roles",children:[{value:"How to use roles",id:"how-to-use-roles",children:[]},{value:"How to add roles",id:"how-to-add-roles",children:[]},{value:"How to remove roles",id:"how-to-remove-roles",children:[]},{value:"How to edit roles",id:"how-to-edit-roles",children:[]}]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A client is usually a system that you want to be able to send request to the OpenHIM. Setting up a client allows the OpenHIM to authenticate requests."),Object(i.b)("p",null,"Using an OpenHIM administrative account, you will be able to add, edit and remove clients by following the steps below."),Object(i.b)("p",null,"The following is an explanation of the fields that are used in the ",Object(i.b)("inlineCode",{parentName:"p"},"Add Client")," form:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Client ID")," - This is a unique ID which a client will use as a reference when adding channels as well as for authorisation checking."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Client Name")," - This is a descriptive name of the client."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Domain")," - A domain that is associated with a client.",Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": The domain needs to match the CN of the certificate if a certificate is used otherwise the client won\u2019t be authorised successfully."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Roles")," - The client roles field is a list of authorized user groups that are allowed to access this channel. You can either select a role from the existing roles, or you can add a new role to the list by typing in the role and pressing Enter."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"JSON Web Token")," - JWTs are small encoded packages of data that can be used to authenticate a client."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Custom Token")," - The Custom Token is a unique string value associated with a specific Client."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Mutual TLS")," - The client certificate and domain fields are used when the OpenHIM core is running using mutual TLS authentication and needs to authenticate requests coming from the client. By default, the OpenHIM core uses mutual TLS authentication."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Basic Auth")," - The password field is used when the OpenHIM core is running in basic auth mode and does not require a certificate, however, it does require a password.")),Object(i.b)("h2",{id:"how-to-add-clients"},"How to add clients"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": All fields marked with a ","*"," or ","*","*"," indicates a mandatory field.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"* - Indicates a required field which means that it cannot be left blank.\n** - Indicates that one of the fields are required.\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("inlineCode",{parentName:"li"},"Clients")," found in the left navigation menu."),Object(i.b)("li",{parentName:"ol"},"Click on the button labelled ",Object(i.b)("inlineCode",{parentName:"li"},"+ Client")," to open a popup window where you will be able to supply the client details."),Object(i.b)("li",{parentName:"ol"},"Capture the client details."),Object(i.b)("li",{parentName:"ol"},"Assign an existing role or enter a name for a new role which will be created and linked to this client."),Object(i.b)("li",{parentName:"ol"},"You may choose to make use of JWT, Custom Tokens, Basic Auth, or Mutual TLS depending on your OpenHIM configuration. At least one Auth mechanism is required. See the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"./authentication"}),"authentication")," section for more details"),Object(i.b)("li",{parentName:"ol"},"Click on the ",Object(i.b)("inlineCode",{parentName:"li"},"Save Changes")," button to save your new client.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": When a client certificate is added or updated in the certificates component of the OpenHIM, the OpenHIM console will inform the OpenHIM administrator that a server restart is required. This is for the new certificate to be applied correctly. The user can either decide to manually restart the server at a later time or to click the red ",Object(i.b)("inlineCode",{parentName:"p"},"Restart Server Now!")," button.")),Object(i.b)("h2",{id:"how-to-remove-clients"},"How to remove clients"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("inlineCode",{parentName:"li"},"Clients")," found in the left navigation menu."),Object(i.b)("li",{parentName:"ol"},"Locate the client to be removed and click on the red ",Object(i.b)("inlineCode",{parentName:"li"},"X")," button on the far right."),Object(i.b)("li",{parentName:"ol"},"You will be prompted to confirm your action to delete the chosen client."),Object(i.b)("li",{parentName:"ol"},"Click on the ",Object(i.b)("inlineCode",{parentName:"li"},"Delete")," button.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": This action automatically deletes the role if the role was created primarily for the client that is busy being deleted with no other clients sharing that same role.")),Object(i.b)("h2",{id:"how-to-edit-clients"},"How to edit clients"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("inlineCode",{parentName:"li"},"Clients")," found in the left navigation menu."),Object(i.b)("li",{parentName:"ol"},"Locate the client to be edited."),Object(i.b)("li",{parentName:"ol"},"Click on the amber button that looks like a pencil on the far right."),Object(i.b)("li",{parentName:"ol"},"Update the client information as required."),Object(i.b)("li",{parentName:"ol"},"Click on the ",Object(i.b)("inlineCode",{parentName:"li"},"Save Changes")," button to update the client.")),Object(i.b)("h2",{id:"client-roles"},"Client Roles"),Object(i.b)("p",null,"The purpose of these roles is to act as a list of authorised user groups which are allowed to access and use a given channel. These roles are generally assigned during the creation process when adding a new client."),Object(i.b)("p",null,"The following rules apply to roles:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A role may be assigned to one or more clients."),Object(i.b)("li",{parentName:"ul"},"When a role is deleted, all clients referencing this role will be automatically updated by unlinking the role."),Object(i.b)("li",{parentName:"ul"},"A client may be associated with one or more roles.")),Object(i.b)("h3",{id:"how-to-use-roles"},"How to use roles"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Roles")," allow the OpenHIM administrator to quickly and effortlessly enable or disable channels to which a role has access. The purpose and use of channels will be covered a little later in this document."),Object(i.b)("h3",{id:"how-to-add-roles"},"How to add roles"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("inlineCode",{parentName:"li"},"Clients")," found in the left navigation menu."),Object(i.b)("li",{parentName:"ol"},"Click on the green ",Object(i.b)("inlineCode",{parentName:"li"},"+ Role")," button."),Object(i.b)("li",{parentName:"ol"},"Notice the creation of the new line item."),Object(i.b)("li",{parentName:"ol"},"Specify a name for the role in the empty white box."),Object(i.b)("li",{parentName:"ol"},"Enable any of the available channels that the role needs to use."),Object(i.b)("li",{parentName:"ol"},"Click on the yellow button that looks like a floppy disk to save the role.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": By default all channels are disabled at the point of creation.")),Object(i.b)("h3",{id:"how-to-remove-roles"},"How to remove roles"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("inlineCode",{parentName:"li"},"Clients")," found in the left navigation menu."),Object(i.b)("li",{parentName:"ol"},"Locate the role to be deleted under the Roles section."),Object(i.b)("li",{parentName:"ol"},"Click on the red ",Object(i.b)("inlineCode",{parentName:"li"},"X")," button."),Object(i.b)("li",{parentName:"ol"},"You will be prompted to confirm your action to delete the chosen client."),Object(i.b)("li",{parentName:"ol"},"Click on the ",Object(i.b)("inlineCode",{parentName:"li"},"Delete")," button.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": All clients referencing this role will be automatically updated by unlinking the role.")),Object(i.b)("h3",{id:"how-to-edit-roles"},"How to edit roles"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("inlineCode",{parentName:"li"},"Clients")," found in the left navigation menu."),Object(i.b)("li",{parentName:"ol"},"Under the Roles section, enable or disable channels to be used by the role by clicking on either the green ",Object(i.b)("inlineCode",{parentName:"li"},"\u2713")," or the red ",Object(i.b)("inlineCode",{parentName:"li"},"X"),".",Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": You will not see the green ",Object(i.b)("inlineCode",{parentName:"p"},"\u2713")," or the red ",Object(i.b)("inlineCode",{parentName:"p"},"X")," if you don't have any channels configured."))),Object(i.b)("li",{parentName:"ol"},"The changes are automatically saved.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": A ",Object(i.b)("inlineCode",{parentName:"p"},"\u2713")," means enabled whereas a ",Object(i.b)("inlineCode",{parentName:"p"},"X")," means disabled.")))}s.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(h,r(r({ref:t},b),{},{components:n})):a.a.createElement(h,r({ref:t},b))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);