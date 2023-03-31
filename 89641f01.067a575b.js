(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{411:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return y}));var n=r(3),o=r(7),a=(r(0),r(674)),s=r(687),i=r(688),l={id:"overview",title:"Tasks overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Task","Overview"],description:"An overview of the OpenHIM Tasks"},c={unversionedId:"api/tasks/overview",id:"api/tasks/overview",isDocsHomePage:!1,title:"Tasks overview",description:"An overview of the OpenHIM Tasks",source:"@site/docs/api/tasks/overview.md",slug:"/api/tasks/overview",permalink:"/docs/next/api/tasks/overview",version:"current",sidebar_label:"Overview",sidebar:"api",previous:{title:"Read Server Uptime",permalink:"/docs/next/api/server-uptime/read"},next:{title:"Create Task",permalink:"/docs/next/api/tasks/create"}},p=[{value:"Schema Model",id:"schema-model",children:[]}],u={toc:p};function y(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Allows for the management of OpenHIM tasks. Tasks are used to submit transactions to be rerun."),Object(a.b)("h2",{id:"schema-model"},"Schema Model"),Object(a.b)(i.a,{mdxType:"GetCurrentVersion"},Object(a.b)(s.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/tasks.js",language:"javascript",mdxType:"ExternalContentSyntaxHighlighter"})))}y.isMDXComponent=!0},674:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||a;return r?o.a.createElement(f,i(i({ref:t},c),{},{components:r})):o.a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},682:function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));var n=r(22),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=r(0),s={Prism:n.a,theme:o};function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},y=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=l({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=l({},r,{backgroundColor:null}),o};function d(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var f=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?y(e.theme,e.language):void 0;return t.themeDict=r})),i(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=l({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),i(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var s=n?{display:"inline-block"}:{},i=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),i(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,s=l({},d(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?l({},s.style,o):o),void 0!==r&&(s.key=r),n&&(s.className+=" "+n),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,s=0,i=[],l=[i];s>-1;){for(;(a=n[s]++)<o[s];){var y=void 0,d=t[s],f=r[s][a];if("string"==typeof f?(d=s>0?d:["plain"],y=f):(d=u(d,f.type),f.alias&&(d=u(d,f.alias)),y=f.content),"string"==typeof y){var m=y.split(c),v=m.length;i.push({types:d,content:m[0]});for(var g=1;g<v;g++)p(i),l.push(i=[]),i.push({types:d,content:m[g]})}else s++,t.push(d),r.push(y),n.push(0),o.push(y.length)}s--,t.pop(),r.pop(),n.pop(),o.pop()}return p(i),l}(void 0!==s?t.tokenize(n,s,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=f},683:function(e,t,r){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},687:function(e,t,r){"use strict";var n=r(3),o=r(0),a=r.n(o),s=r(684),i=r.n(s),l=r(682),c=r(683);class p extends o.Component{constructor(e){super(e),this.state={data:null,spinner:!0,url:e.url.replace("<VERSION>",e.version)}}componentWillMount(){i.a.get(this.state.url).then((e=>{e.data?this.setState({data:e.data,spinner:!1}):this.setState({data:null,spinner:!1})})).catch((e=>{console.error(e.toString()),this.setState({data:null,spinner:!1})}))}render(){return this.state.spinner?a.a.createElement("div",{className:"spinnerContainer"},a.a.createElement("div",{id:"loading"})):this.state.data?a.a.createElement(l.a,Object(n.a)({},l.b,{theme:c.a,code:this.state.data,language:`${this.props.language}`}),(({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:o})=>a.a.createElement("pre",{className:e,style:t},r.map(((e,t)=>a.a.createElement("div",n({line:e,key:t}),e.map(((e,t)=>a.a.createElement("span",o({token:e,key:t})))))))))):a.a.createElement("div",null,`Schema model not found for version ${this.props.version}`)}}t.a=p},688:function(e,t,r){"use strict";(function(e){var n=r(0),o=r.n(n);let a;a="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};class s extends n.Component{constructor(e){super(e);const t=/[\d].[\d].x/;let r=null;a&&a.location&&(r=a.location.href.match(t));let n="master";r&&(n=`v${r[0].replace("x","0")}`),this.state={version:n}}render(){return o.a.createElement("div",null,o.a.cloneElement(this.props.children,{version:this.state.version}))}}t.a=s}).call(this,r(24))}}]);