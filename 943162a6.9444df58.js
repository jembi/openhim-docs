(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{298:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var o=r(3),n=r(7),a=(r(0),r(438)),i=r(444),p={id:"export-import-configuration",title:"Export/import Configuration",sidebar_label:"Export/import Configuration",keywords:["OpenHIM","Export","Import","Configuration"],description:"Export/import OpenHIM configuration"},c={unversionedId:"how-to/export-import-configuration",id:"version-5.4.x/how-to/export-import-configuration",isDocsHomePage:!1,title:"Export/import Configuration",description:"Export/import OpenHIM configuration",source:"@site/versioned_docs/version-5.4.x/how-to/how-to-import-export.md",slug:"/how-to/export-import-configuration",permalink:"/docs/how-to/export-import-configuration",version:"5.4.x",sidebar_label:"Export/import Configuration",sidebar:"version-5.4.x/docs",previous:{title:"Run the OpenHIM on startup",permalink:"/docs/how-to/run-openhim-on-startup"},next:{title:"Setup a basic cluster",permalink:"/docs/how-to/setup-basic-cluster"}},l=[{value:"Export/import metadata from MongoDB",id:"exportimport-metadata-from-mongodb",children:[{value:"Export",id:"export",children:[]},{value:"Import",id:"import",children:[]}]},{value:"Export/import metadata from the OpenHIM Console",id:"exportimport-metadata-from-the-openhim-console",children:[{value:"Export",id:"export-1",children:[]},{value:"Import",id:"import-1",children:[]}]},{value:"Export More Data",id:"export-more-data",children:[]}],u={toc:l};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"exportimport-metadata-from-mongodb"},"Export/import metadata from MongoDB"),Object(a.b)("p",null,"Follow the steps below to export and import the ",Object(a.b)("strong",{parentName:"p"},"server metadata configuration")," manually. By default, the Users, Channels, Clients, ContactGroups and Mediators collections will be exported."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Ensure that you ",Object(a.b)("strong",{parentName:"p"},"stop")," the server before exporting and importing.")),Object(a.b)("h3",{id:"export"},"Export"),Object(a.b)("p",null,"Copy the file ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/resources/openhim-configuration-export.sh"}),"openhim-configuration-export.sh")," to a folder where you wish your export to be saved. Run the shell script by executing the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"./openhim-configuration-export.sh\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If your MongoDB Server and Mongo Client are different versions your may need to add ",Object(a.b)("inlineCode",{parentName:"p"},"--forceTableScan")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"mongodump")," command in the script.")),Object(a.b)("p",null,"Your exported collections should be located in the folder structure '/dump/openhim/'."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"For full import/export API details see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../api/import-export/overview"}),"here"),".")),Object(a.b)("h3",{id:"import"},"Import"),Object(a.b)("p",null,"To import you data ensure that you are in the correct folder where the dump files are located. Execute the below command to import your collections."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"mongorestore --db openhim dump/openhim\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," If you have changed your database name, then do so for the export/import as well."),Object(a.b)("h2",{id:"exportimport-metadata-from-the-openhim-console"},"Export/import metadata from the OpenHIM Console"),Object(a.b)("p",null,"Export/import can now be done directly from the OpenHIM console which may be easier."),Object(a.b)("p",null,"Navigate to the ",Object(a.b)("inlineCode",{parentName:"p"},"Export/Import")," page on the console."),Object(a.b)("h3",{id:"export-1"},"Export"),Object(a.b)("p",null,"To export your configuration, open the relevant drop downs to check that the desired configs are selected (all configs are selected by default). Deselect any unwanted settings. Then ",Object(a.b)("inlineCode",{parentName:"p"},"click Generate Export Script"),". See below for expected screen."),Object(a.b)("img",{alt:"export/import screen",src:Object(i.a)("img/tutorial/import-export.png")}),Object(a.b)("h3",{id:"import-1"},"Import"),Object(a.b)("p",null,"To import config drag and drop your export file, generated from the desired OpenHIM instance, into the specified box."),Object(a.b)("h2",{id:"export-more-data"},"Export More Data"),Object(a.b)("p",null,"If you need to export more data from your OpenHIM instance, add the desired mongo collection names to the list in the export script using the export method described ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#Export/import-metadata-from-MongoDB"}),"above"),"."),Object(a.b)("p",null,"List of all OpenHIM MongoDb collections:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"agendaJobs"),Object(a.b)("li",{parentName:"ul"},"alerts"),Object(a.b)("li",{parentName:"ul"},"auditMeta"),Object(a.b)("li",{parentName:"ul"},"audits"),Object(a.b)("li",{parentName:"ul"},"autoretries"),Object(a.b)("li",{parentName:"ul"},"channelAudits"),Object(a.b)("li",{parentName:"ul"},"channels"),Object(a.b)("li",{parentName:"ul"},"clients"),Object(a.b)("li",{parentName:"ul"},"contactgroups"),Object(a.b)("li",{parentName:"ul"},"dbversions"),Object(a.b)("li",{parentName:"ul"},"events"),Object(a.b)("li",{parentName:"ul"},"keystores"),Object(a.b)("li",{parentName:"ul"},"log"),Object(a.b)("li",{parentName:"ul"},"mediators"),Object(a.b)("li",{parentName:"ul"},"metrics"),Object(a.b)("li",{parentName:"ul"},"tasks"),Object(a.b)("li",{parentName:"ul"},"transactions"),Object(a.b)("li",{parentName:"ul"},"users"),Object(a.b)("li",{parentName:"ul"},"visualizers")),Object(a.b)("p",null,"To add transactions to the data dump for example append the name ",Object(a.b)("inlineCode",{parentName:"p"},"transactions")," to the list in the script:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"// openhim-configuration-export.sh\n\ncollections=(users channels clients contactGroups mediators transactions)\n")))}b.isMDXComponent=!0},438:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),m=o,d=b["".concat(i,".").concat(m)]||b[m]||s[m]||a;return r?n.a.createElement(d,p(p({ref:t},l),{},{components:r})):n.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},444:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var o=r(23),n=r(445);function a(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,p=void 0!==i&&i,c=a.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(p)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+u:u}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},445:function(e,t,r){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return n}))}}]);