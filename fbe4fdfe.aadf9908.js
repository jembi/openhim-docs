(window.webpackJsonp=window.webpackJsonp||[]).push([[823],{898:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(913)),l=n(934),s=n(935),i={id:"run-openhim-on-startup",title:"Run the OpenHIM on startup",sidebar_label:"Run the OpenHIM on startup",keywords:["OpenHIM","Startup","systemd"],description:"Running OpenHIM on startup"},c={unversionedId:"how-to/run-openhim-on-startup",id:"version-7.1.x/how-to/run-openhim-on-startup",isDocsHomePage:!1,title:"Run the OpenHIM on startup",description:"Running OpenHIM on startup",source:"@site/versioned_docs/version-7.1.x/how-to/how-to-run-on-startup.md",slug:"/how-to/run-openhim-on-startup",permalink:"/docs/7.1.x/how-to/run-openhim-on-startup",version:"7.1.x",sidebar_label:"Run the OpenHIM on startup",sidebar:"version-7.1.x/docs",previous:{title:"Setup SSL",permalink:"/docs/7.1.x/how-to/setup-ssl"},next:{title:"Export/import Configuration",permalink:"/docs/7.1.x/how-to/export-import-configuration"}},p=[{value:"systemd",id:"systemd",children:[]}],u={toc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This how to guide assumes the following"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You are working on an Ubuntu server"),Object(a.b)("li",{parentName:"ul"},"The OpenHIM Core is already installed using ",Object(a.b)("inlineCode",{parentName:"li"},"npm")),Object(a.b)("li",{parentName:"ul"},"NodeJS is installed")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Make sure the OpenHIM Core is not currently running on your machine before proceeding.")),Object(a.b)("h2",{id:"systemd"},"systemd"),Object(a.b)("p",null,"To help you get the OpenHIM server running on boot we supply a script for ",Object(a.b)("inlineCode",{parentName:"p"},"systemd"),"."),Object(a.b)(s.a,{mdxType:"GetCurrentVersion"},Object(a.b)(l.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/resources/openhim-core.service",language:"service",mdxType:"ExternalContentSyntaxHighlighter"})),Object(a.b)("p",null,"To setup the service create the following file with your editor of choice (vim in this example) and put in the above content:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo vim /lib/systemd/system/openhim-core.service\n")),Object(a.b)("p",null,"For the ",Object(a.b)("inlineCode",{parentName:"p"},"ExecStart")," field fill in the correct paths to NodeJS and your OpenHIM Core module. To find these directory paths try the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"which node\n")),Object(a.b)("p",null,"This will show you where NodeJS is installed. The OpenHIM npm module will be installed nearby (usually within ",Object(a.b)("inlineCode",{parentName:"p"},"../../lib/node_modules/openhim-core")," in relation to node)."),Object(a.b)("p",null,"Your ",Object(a.b)("inlineCode",{parentName:"p"},"ExecStart")," field should look something like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-service"}),"ExecStart=/usr/local/bin/node /usr/local/lib/node_modules/openhim-core/lib/server.js\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you have installed NodeJS using ",Object(a.b)("inlineCode",{parentName:"p"},"nvm")," the directory base will be ",Object(a.b)("inlineCode",{parentName:"p"},"/home/<user>/.nvm/versions/node/<node-version>/")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/local/"))),Object(a.b)("p",null,"Once your script is complete reload systemd with the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo systemctl daemon-reload\n")),Object(a.b)("p",null,"Then, start the service:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo systemctl start openhim-core\n")),Object(a.b)("p",null,"Next check the service status:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo systemctl status openhim-core\n")),Object(a.b)("p",null,"You can confirm that the OpenHIM is accessible by navigating to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://localhost:8080/heartbeat"}),"https://localhost:8080/heartbeat")," on a browser. The browser will give you a security warning as SSL has not been setup yet. Accept the risk and the browser should return the OpenHIM uptime."),Object(a.b)("p",null,"To diagnose any problems you can view the OpenHIM logs from the service with the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"journalctl -u openhim-core.service -b\n")),Object(a.b)("p",null,"To configure the OpenHIM to run on server startup type the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo systemctl enable openhim-core\n")))}b.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(y,s(s({ref:t},c),{},{components:n})):o.a.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},921:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var r=n(22),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(0),l={Prism:r.a,theme:o};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=i({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=i({},n,{backgroundColor:null}),o};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?i({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=i({},d(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?i({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,s=[],i=[s];l>-1;){for(;(a=r[l]++)<o[l];){var b=void 0,d=t[l],y=n[l][a];if("string"==typeof y?(d=l>0?d:["plain"],b=y):(d=u(d,y.type),y.alias&&(d=u(d,y.alias)),b=y.content),"string"==typeof b){var m=b.split(c),h=m.length;s.push({types:d,content:m[0]});for(var g=1;g<h;g++)p(s),i.push(s=[]),s.push({types:d,content:m[g]})}else l++,t.push(d),n.push(b),r.push(0),o.push(b.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return p(s),i}(void 0!==l?t.tokenize(r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=y},922:function(e,t,n){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},934:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o),l=n(923),s=n.n(l),i=n(921),c=n(922);class p extends o.Component{constructor(e){super(e),this.state={data:null,spinner:!0,url:e.url.replace("<VERSION>",e.version)}}componentWillMount(){s.a.get(this.state.url).then((e=>{e.data?this.setState({data:e.data,spinner:!1}):this.setState({data:null,spinner:!1})})).catch((e=>{console.error(e.toString()),this.setState({data:null,spinner:!1})}))}render(){return this.state.spinner?a.a.createElement("div",{className:"spinnerContainer"},a.a.createElement("div",{id:"loading"})):this.state.data?a.a.createElement(i.a,Object(r.a)({},i.b,{theme:c.a,code:this.state.data,language:`${this.props.language}`}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:o})=>a.a.createElement("pre",{className:e,style:t},n.map(((e,t)=>a.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>a.a.createElement("span",o({token:e,key:t})))))))))):a.a.createElement("div",null,`Schema model not found for version ${this.props.version}`)}}t.a=p},935:function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r);let a;a="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};class l extends r.Component{constructor(e){super(e);const t=/[\d].[\d].x/;let n=null;a&&a.location&&(n=a.location.href.match(t));let r="master";n&&(r=`v${n[0].replace("x","0")}`),this.state={version:r}}render(){return o.a.createElement("div",null,o.a.cloneElement(this.props.children,{version:this.state.version}))}}t.a=l}).call(this,n(24))}}]);