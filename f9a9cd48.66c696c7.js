(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{660:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(674)),a={id:"virtual-machine",title:"Install on a Virtual Machine",sidebar_label:"Install on a Virtual Machine",keywords:["openhim","virtual machine","installation","ubuntu"],description:"Install the OpenHIM on a virtual machine"},l={unversionedId:"installation/virtual-machine",id:"version-7.0.x/installation/virtual-machine",isDocsHomePage:!1,title:"Install on a Virtual Machine",description:"Install the OpenHIM on a virtual machine",source:"@site/versioned_docs/version-7.0.x/installation/virtual-machine.md",slug:"/installation/virtual-machine",permalink:"/docs/7.0.x/installation/virtual-machine",version:"7.0.x",sidebar_label:"Install on a Virtual Machine",sidebar:"version-7.0.x/docs",previous:{title:"Console Configuration",permalink:"/docs/7.0.x/installation/console-configuration"},next:{title:"OpenHIM Config Options Overview",permalink:"/docs/7.0.x/configuration/overview"}},c=[{value:"Server Edition Linux",id:"server-edition-linux",children:[]},{value:"Desktop Edition Linux",id:"desktop-edition-linux",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When installing the OpenHIM on a VM that is running on your local machine, please take note of the following."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Oracle's ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.virtualbox.org/"}),"VirtualBox")," is ",Object(i.b)("strong",{parentName:"p"},"recommended")," for the setup of VMs.")),Object(i.b)("h2",{id:"server-edition-linux"},"Server Edition Linux"),Object(i.b)("p",null,"If you are running a server edition of Linux such as Ubuntu 16.04 LTS as a VM, you will need to configure a static IP address (or use DHCP if your network has a DHCP server) that falls within the same network block as the rest of your network. If your local machine is not part of a network, make sure that the network block for your local machine matches that of the VM."),Object(i.b)("p",null,"For example, if your local machine IP address is 192.168.1.5 then the network block is 192.168.1.0 with a subnet mask of 255.255.255.0. This means that the hostname for the OpenHIM must contain the first three octets that is 192.168.1. The last octet must be unique such as 192.168.1.6."),Object(i.b)("p",null,"When asked to configure the OpenHIM console during the OpenHIM installation process, you will need to specify the IP address which is the same IP address that has been assigned to the VMs eth0 interface."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To verify the ",Object(i.b)("inlineCode",{parentName:"li"},"eth0")," IP address, run the command ",Object(i.b)("inlineCode",{parentName:"li"},"ifconfig -a")),Object(i.b)("li",{parentName:"ul"},"To change your ",Object(i.b)("inlineCode",{parentName:"li"},"eth0")," network configuration, run the command ",Object(i.b)("inlineCode",{parentName:"li"},"sudo vi /etc/network/interfaces"))),Object(i.b)("p",null,"You may also need to configure your local machine (the machine running the VM instance) network settings for the VM by changing the network adapter type to 'bridged' so that internet services will be possible as well as to access the OpenHIM console via your local machine internet browser."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": This happens within the VM software itself, not in the installed server edition of linux.")),Object(i.b)("h2",{id:"desktop-edition-linux"},"Desktop Edition Linux"),Object(i.b)("p",null,"If you are running a desktop edition of Linux such as Ubuntu 14.04 LTS as a VM, you will be able to logon to the OpenHIM console directly from the VM by using localhost as your configured hostname."),Object(i.b)("p",null,"Should you wish to access the OpenHIM console from your local machine, please follow the steps in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#server-edition-linux"}),"Server Edition Linux"),"."))}u.isMDXComponent=!0},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,d=p["".concat(a,".").concat(h)]||p[h]||b[h]||i;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);