(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{330:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),s=(n(0),n(438)),o={id:"adding-users",title:"Adding Users",sidebar_label:"Adding Users",keywords:["OpenHIM","Users"],description:"How to add users on the OpenHIM"},i={unversionedId:"user-guide/adding-users",id:"version-5.2.x/user-guide/adding-users",isDocsHomePage:!1,title:"Adding Users",description:"How to add users on the OpenHIM",source:"@site/versioned_docs/version-5.2.x/user-guide/adding-users.md",slug:"/user-guide/adding-users",permalink:"/docs/5.2.x/user-guide/adding-users",version:"5.2.x",sidebar_label:"Adding Users",sidebar:"version-5.2.x/docs",previous:{title:"OpenHIM Overview",permalink:"/docs/5.2.x/user-guide/overview"},next:{title:"Transaction List",permalink:"/docs/5.2.x/user-guide/transaction-list"}},l=[{value:"How are users different from clients",id:"how-are-users-different-from-clients",children:[]},{value:"User Groups",id:"user-groups",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Walk through and examples",id:"walk-through-and-examples",children:[]},{value:"Reports",id:"reports",children:[]},{value:"Filter and list settings",id:"filter-and-list-settings",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In order to configure the OpenHIM you have to be a registered user account with relevant permissions. A default super/admin user is provided when you first run the OpenHIM."),Object(s.b)("p",null,"The default admin user is as follows:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-txt"}),"username: root@openhim.org\npassword: openhim-password\n")),Object(s.b)("p",null,"Note: Change these as soon as you have installed the him to avoid abuse. The OpenHIM console should prompt you to do this on first login."),Object(s.b)("p",null,"Using the default admin user, you may create other users. These too may belong to the admin group or custom groups. Non-admin users cannot create clients and channels, however, they may view transactions for certain channels that they are given access to."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note: Users that belong to the ",Object(s.b)("strong",{parentName:"p"},"admin")," group are Super Users.")),Object(s.b)("p",null,"User accounts are created in order to give users of the system certain features depending on the groups to which they belong. Users can access these features through the OpenHIM console."),Object(s.b)("h2",{id:"how-are-users-different-from-clients"},"How are users different from clients"),Object(s.b)("p",null,"Clients are different from users, they represent systems that can route transactions through the OpenHIM. Users are people accessing and configuring the OpenHIM and clients are systems that are allowed to send requests to the OpenHIM."),Object(s.b)("h2",{id:"user-groups"},"User Groups"),Object(s.b)("p",null,"Groups are created automatically by just adding a new group name in the user form. You do not need to add a group explicitly. When you go on to create the channel, you just need to make sure the group name matches the one specified when you created the user."),Object(s.b)("p",null,"There are 2 kinds of groups"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"The ",Object(s.b)("strong",{parentName:"li"},"admin")," group: this is a special group that grants users all permissions."),Object(s.b)("li",{parentName:"ol"},"The rest are defined by the system administrator and in the channels, an admin can set whether the group has any of the permissions below.")),Object(s.b)("h2",{id:"permissions"},"Permissions"),Object(s.b)("p",null,"Users belonging to a certain group can be assigned certain permissions on a channel. This is done by adding the group to which they belong to that particular permission."),Object(s.b)("p",null,"The permissions themselves are pretty self explanatory and are listed below with some brief explanations."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Can view channel transactions"),Object(s.b)("li",{parentName:"ol"},"Can view channel transaction bodies - bodies may contain private patient data"),Object(s.b)("li",{parentName:"ol"},"Can re-run transactions - enabling this permission needs to be done with care because it may cause downstream duplicates and data corruption if they users doesn't know what they are doing")),Object(s.b)("p",null,"Also on the users page, there is a matrix that shows these permissions. This can be viewed by clicking the button above the list of users."),Object(s.b)("h2",{id:"walk-through-and-examples"},"Walk through and examples"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"To add a user as an admin user, navigate to the admin section and click the button to add the user.")),Object(s.b)("p",null,"Required fields, are as follows:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Email - This needs to be a valid and unique email address"),Object(s.b)("li",{parentName:"ol"},"First Name"),Object(s.b)("li",{parentName:"ol"},"Last Name"),Object(s.b)("li",{parentName:"ol"},"Groups"),Object(s.b)("li",{parentName:"ol"},"Password and Confirm Password")),Object(s.b)("p",null,"Optional Fields are as follows:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"MSISDN - the users cellphone number in the MSISDN format (eg. 27825555555) should you want to receive sms alerts"),Object(s.b)("li",{parentName:"ol"},"Receive daily reports, via email"),Object(s.b)("li",{parentName:"ol"},"Receive weekly reports, via email"),Object(s.b)("li",{parentName:"ol"},"Filter & List settings: here you may pre-define how you want to view your transactions")),Object(s.b)("h2",{id:"reports"},"Reports"),Object(s.b)("p",null,"The two kinds of reports mentioned above send transaction metrics aggregated over a period. In these reports, you can see the number of transactions that went through as well as their statuses."),Object(s.b)("p",null,"The statuses are as follows:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Failed"),Object(s.b)("li",{parentName:"ol"},"Processing"),Object(s.b)("li",{parentName:"ol"},"Completed"),Object(s.b)("li",{parentName:"ol"},"Completed with errors"),Object(s.b)("li",{parentName:"ol"},"Successful")),Object(s.b)("h2",{id:"filter-and-list-settings"},"Filter and list settings"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Filter settings: Here you set how you want to view transactions on the Transactions page by default. You can default it to show transactions by status, by channel, as well as limit the number of transactions per page.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"List settings: Upon clicking on a transaction in the transactions page, you can choose whether to view the transaction on the same page (default), or to open it in a new window altogether."))),Object(s.b)("p",null,"If you find a field that is not described here, please let us know by ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/issues/new"}),"filing an issue on github")," with the 'documentation' label."))}u.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return n?a.a.createElement(h,i(i({ref:t},c),{},{components:n})):a.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);