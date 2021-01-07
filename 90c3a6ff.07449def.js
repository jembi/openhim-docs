(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{291:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return y}));var n=r(3),o=r(7),a=(r(0),r(438)),i=r(449),c=r(450),s={id:"overview",title:"Certificates Overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Certificates","Overview"],description:"An overview of the OpenHIM certificates"},l={unversionedId:"api/certificates/overview",id:"api/certificates/overview",isDocsHomePage:!1,title:"Certificates Overview",description:"An overview of the OpenHIM certificates",source:"@site/docs/api/certificates/overview.md",slug:"/api/certificates/overview",permalink:"/docs/next/api/certificates/overview",version:"current",sidebar_label:"Overview",sidebar:"api",previous:{title:"Read Audit/s",permalink:"/docs/next/api/audits/read"},next:{title:"Create Certificates",permalink:"/docs/next/api/certificates/create"}},p=[{value:"Schema Model",id:"schema-model",children:[]}],u={toc:p};function y(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This resource allows you to set and fetch the server certificate and key, and to set and query trusted certificates"),Object(a.b)("h2",{id:"schema-model"},"Schema Model"),Object(a.b)(c.a,{mdxType:"GetCurrentVersion"},Object(a.b)(i.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/keystore.js",language:"javascript",mdxType:"ExternalContentSyntaxHighlighter"})))}y.isMDXComponent=!0},438:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,d=u["".concat(i,".").concat(f)]||u[f]||y[f]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},446:function(e,t,r){"use strict";r.d(t,"b",(function(){return i}));var n=r(22),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=r(0),i={Prism:n.a,theme:o};function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},y=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=s({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=s({},r,{backgroundColor:null}),o};function f(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var d=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?y(e.theme,e.language):void 0;return t.themeDict=r})),c(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=s({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?s({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),c(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var i=n?{display:"inline-block"}:{},c=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(c))}})),c(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,i=s({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?s({},i.style,o):o),void 0!==r&&(i.key=r),n&&(i.className+=" "+n),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,i=0,c=[],s=[c];i>-1;){for(;(a=n[i]++)<o[i];){var y=void 0,f=t[i],d=r[i][a];if("string"==typeof d?(f=i>0?f:["plain"],y=d):(f=u(f,d.type),d.alias&&(f=u(f,d.alias)),y=d.content),"string"==typeof y){var v=y.split(l),m=v.length;c.push({types:f,content:v[0]});for(var g=1;g<m;g++)p(c),s.push(c=[]),c.push({types:f,content:v[g]})}else i++,t.push(f),r.push(y),n.push(0),o.push(y.length)}i--,t.pop(),r.pop(),n.pop(),o.pop()}return p(c),s}(void 0!==i?t.tokenize(n,i,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=d},447:function(e,t,r){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},449:function(e,t,r){"use strict";var n=r(3),o=r(4),a=r(0),i=r.n(a),c=r(448),s=r.n(c),l=r(446),p=r(447),u=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={data:null,spinner:!0,url:t.url.replace("<VERSION>",t.version)},r}Object(o.a)(t,e);var r=t.prototype;return r.componentWillMount=function(){var e=this;s.a.get(this.state.url).then((function(t){t.data?e.setState({data:t.data,spinner:!1}):e.setState({data:null,spinner:!1})})).catch((function(t){console.error(t.toString()),e.setState({data:null,spinner:!1})}))},r.render=function(){return this.state.spinner?i.a.createElement("div",{className:"spinnerContainer"},i.a.createElement("div",{id:"loading"})):this.state.data?i.a.createElement(l.a,Object(n.a)({},l.b,{theme:p.a,code:this.state.data,language:""+this.props.language}),(function(e){var t=e.className,r=e.style,n=e.tokens,o=e.getLineProps,a=e.getTokenProps;return i.a.createElement("pre",{className:t,style:r},n.map((function(e,t){return i.a.createElement("div",o({line:e,key:t}),e.map((function(e,t){return i.a.createElement("span",a({token:e,key:t}))})))})))})):i.a.createElement("div",null,"Schema model not found for version "+this.props.version)},t}(a.Component);t.a=u},450:function(e,t,r){"use strict";(function(e){var n,o=r(4),a=r(0),i=r.n(a);n="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};var c=function(e){function t(t){var r;r=e.call(this,t)||this;var o=null;n&&n.location&&(o=n.location.href.match(/[\d].[\d].x/));var a="master";return o&&(a="v"+o[0].replace("x","0")),r.state={version:a},r}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.cloneElement(this.props.children,{version:this.state.version}))},t}(a.Component);t.a=c}).call(this,r(24))}}]);