(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{467:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(1),r=(n(0),n(597));const s={id:"adding-users",title:"Adding Users",sidebar_label:"Adding Users"},o=[{value:"How are users different from clients",id:"how-are-users-different-from-clients",children:[]},{value:"User Groups",id:"user-groups",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Walk through and examples",id:"walk-through-and-examples",children:[]},{value:"Reports",id:"reports",children:[]},{value:"Filter and list settings",id:"filter-and-list-settings",children:[]}],i={rightToc:o},l="wrapper";function c({components:e,...t}){return Object(r.b)(l,Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In order to configure the OpenHIM you have to be a registered user account with relevant permissions. A default super/admin user is provided when you first run the OpenHIM."),Object(r.b)("p",null,"The default admin user is as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-txt"}),"username: root@openhim.org\npassword: openhim-password\n")),Object(r.b)("p",null,"Note: Change these as soon as you have installed the him to avoid abuse. The OpenHIM console should prompt you to do this on first login."),Object(r.b)("p",null,"Using the default admin user, you may create other users. These too may belong to the admin group or custom groups. Non-admin users cannot create clients and channels, however, they may view transactions for certain channels that they are given access to."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Users that belong to the ",Object(r.b)("strong",{parentName:"p"},"admin")," group are Super Users.")),Object(r.b)("p",null,"User accounts are created in order to give users of the system certain features depending on the groups to which they belong. Users can access these features through the OpenHIM console."),Object(r.b)("h2",{id:"how-are-users-different-from-clients"},"How are users different from clients"),Object(r.b)("p",null,"Clients are different from users, they represent systems that can route transactions through the OpenHIM. Users are people accessing and configuring the OpenHIM and clients are systems that are allowed to send requests to the OpenHIM."),Object(r.b)("h2",{id:"user-groups"},"User Groups"),Object(r.b)("p",null,"Groups are created automatically by just adding a new group name in the user form. You do not need to add a group explicitly. When you go on to create the channel, you just need to make sure the group name matches the one specified when you created the user."),Object(r.b)("p",null,"There are 2 kinds of groups"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"admin")," group: this is a special group that grants users all permissions."),Object(r.b)("li",{parentName:"ol"},"The rest are defined by the system administrator and in the channels, an admin can set whether the group has any of the permissions below.")),Object(r.b)("h2",{id:"permissions"},"Permissions"),Object(r.b)("p",null,"Users belonging to a certain group can be assigned certain permissions on a channel. This is done by adding the group to which they belong to that particular permission."),Object(r.b)("p",null,"The permissions themselves are pretty self explanatory and are listed below with some brief explanations."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Can view channel transactions"),Object(r.b)("li",{parentName:"ol"},"Can view channel transaction bodies - bodies may contain private patient data"),Object(r.b)("li",{parentName:"ol"},"Can re-run transactions - enabling this permission needs to be done with care because it may cause downstream duplicates and data corruption if they users doesn't know what they are doing")),Object(r.b)("p",null,"Also on the users page, there is a matrix that shows these permissions. This can be viewed by clicking the button above the list of users."),Object(r.b)("h2",{id:"walk-through-and-examples"},"Walk through and examples"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"To add a user as an admin user, navigate to the admin section and click the button to add the user.")),Object(r.b)("p",null,"Required fields, are as follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Email - This needs to be a valid and unique email address"),Object(r.b)("li",{parentName:"ol"},"First Name"),Object(r.b)("li",{parentName:"ol"},"Last Name"),Object(r.b)("li",{parentName:"ol"},"Groups"),Object(r.b)("li",{parentName:"ol"},"Password and Confirm Password")),Object(r.b)("p",null,"Optional Fields are as follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"MSISDN - the users cellphone number in the MSISDN format (eg. 27825555555) should you want to receive sms alerts"),Object(r.b)("li",{parentName:"ol"},"Receive daily reports, via email"),Object(r.b)("li",{parentName:"ol"},"Receive weekly reports, via email"),Object(r.b)("li",{parentName:"ol"},"Filter & List settings: here you may pre-define how you want to view your transactions")),Object(r.b)("h2",{id:"reports"},"Reports"),Object(r.b)("p",null,"The two kinds of reports mentioned above send transaction metrics aggregated over a period. In these reports, you can see the number of transactions that went through as well as their statuses."),Object(r.b)("p",null,"The statuses are as follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Failed"),Object(r.b)("li",{parentName:"ol"},"Processing"),Object(r.b)("li",{parentName:"ol"},"Completed"),Object(r.b)("li",{parentName:"ol"},"Completed with errors"),Object(r.b)("li",{parentName:"ol"},"Successful")),Object(r.b)("h2",{id:"filter-and-list-settings"},"Filter and list settings"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Filter settings: Here you set how you want to view transactions on the Transactions page by default. You can default it to show transactions by status, by channel, as well as limit the number of transactions per page.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"List settings: Upon clicking on a transaction in the transactions page, you can choose whether to view the transaction on the same page (default), or to open it in a new window altogether."))),Object(r.b)("p",null,"If you find a field that is not described here, please let us know by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/issues/new"}),"filing an issue on github")," with the 'documentation' label."))}c.isMDXComponent=!0},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=o(n),p=a,b=u[i+"."+p]||u[p]||c[p]||s;return n?r.a.createElement(b,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);