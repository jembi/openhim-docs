(window.webpackJsonp=window.webpackJsonp||[]).push([[641],{715:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(913)),s={id:"transaction-list",title:"Transaction List",sidebar_label:"Transaction List",keywords:["OpenHIM","Transactions"],description:"OpenHIM transactions"},i={unversionedId:"user-guide/transaction-list",id:"version-7.2.x/user-guide/transaction-list",isDocsHomePage:!1,title:"Transaction List",description:"OpenHIM transactions",source:"@site/versioned_docs/version-7.2.x/user-guide/transaction-list.md",slug:"/user-guide/transaction-list",permalink:"/docs/7.2.x/user-guide/transaction-list",version:"7.2.x",sidebar_label:"Transaction List",sidebar:"version-7.2.x/docs",previous:{title:"Adding Users",permalink:"/docs/7.2.x/user-guide/adding-users"},next:{title:"Alerting and reports",permalink:"/docs/7.2.x/user-guide/alerting-reports"}},c=[{value:"Error resolution",id:"error-resolution",children:[]}],u={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"transactions")," page is pretty straight forward. It shows a list of the most recent transactions that the OpenHIM has received. You are presented with a number of different filters (more are accessible by clicking the 'Toggle Advanced Filters' button)."),Object(o.b)("p",null,"You may select any transaction in the list to get more details on it. From here you can view the request and response details, re-run that transaction or view the different routes that it was sent to (if there are multiple)."),Object(o.b)("p",null,"If this transaction was routed though a mediator you may see some additional details such as the orchestrations that the mediator performed."),Object(o.b)("p",null,"Each transaction is marked with a status that shows its processing state and whether the transaction was successful or not. Here is what each status means for a particular transaction:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Processing - Waiting for a response from one or more routes"),Object(o.b)("li",{parentName:"ul"},"Successful - The primary route and all other routes returned successful http response codes (2xx)."),Object(o.b)("li",{parentName:"ul"},"Failed - The primary route has returned a failed http response code (5xx)"),Object(o.b)("li",{parentName:"ul"},"Completed - The primary route or the other routes did not return a failure http response code (5xx) but some weren't successful (2xx)."),Object(o.b)("li",{parentName:"ul"},"Completed with error(s) - The primary route did not return a failure http response code (5xx) but one of the routes did.")),Object(o.b)("h2",{id:"error-resolution"},"Error resolution"),Object(o.b)("p",null,"If a transaction has failed or needs to be re-run, you may do so by either clicking on the transaction and choosing 're-run transaction' or you can perform a bulk re-run by selecting the desired transactions and choosing 're-run selected transactions'. You may also choose to re-run all transactions that match a particular filter. Filter by the desired parameters and click 're-run all transaction that match current filters'."),Object(o.b)("p",null,"All bulk re-runs can be monitored on the Console's ",Object(o.b)("strong",{parentName:"p"},"Task")," page."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," the original transaction is always stored when a transaction is re-run, it is just marked as re-run. You will be warned if you try to re-run a transaction that has already been re-run as this could cause duplicate data in your system.")))}l.isMDXComponent=!0},913:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);