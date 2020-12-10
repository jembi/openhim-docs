(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return y}));var r=n(1),o=(n(0),n(382)),a=n(396),i=n(397);const s={id:"overview",title:"Metrics overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Metrics","Overview"],description:"An overview of the OpenHIM transaction metrics"},l={id:"version-5.2.x/api/metrics/overview",title:"Metrics overview",description:"An overview of the OpenHIM transaction metrics",source:"@site/versioned_docs/version-5.2.x/api/metrics/overview.md",permalink:"/docs/api/metrics/overview",version:"5.2.x",sidebar_label:"Overview",sidebar:"version-5.2.x/api",previous:{title:"Delete mediator",permalink:"/docs/api/mediators/delete"},next:{title:"Read Metrics",permalink:"/docs/api/metrics/read"}},c=[{value:"Schema Model",id:"schema-model",children:[]}],p={rightToc:c},u="wrapper";function y({components:e,...t}){return Object(o.b)(u,Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This resource enables transaction metrics to be retrieved from the OpenHIM in a flexible way. There are various forms of the endpoint depending on the format of the metrics that you want to retrieve. Metrics are only returned for the channels that the API user has access to."),Object(o.b)("h2",{id:"schema-model"},"Schema Model"),Object(o.b)(i.a,{mdxType:"GetCurrentVersion"},Object(o.b)(a.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/events.js",language:"javascript",mdxType:"ExternalContentSyntaxHighlighter"})))}y.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),u=r,y=p[s+"."+u]||p[u]||c[u]||a;return n?o.a.createElement(y,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(y,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},391:function(e,t,n){"use strict";var r=n(51),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(0);n.d(t,"b",(function(){return i}));var i={Prism:r.a,theme:o};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)?e:(n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e)}),r);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var m=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=l({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=l({},d(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?l({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,s=[],l=[s];i>-1;){for(;(a=r[i]++)<o[i];){var y=void 0,d=t[i],m=n[i][a];if("string"==typeof m?(d=i>0?d:["plain"],y=m):(d=u(d,m.type),m.alias&&(d=u(d,m.alias)),y=m.content),"string"==typeof y){var v=y.split(c),h=v.length;s.push({types:d,content:v[0]});for(var f=1;f<h;f++)p(s),l.push(s=[]),s.push({types:d,content:v[f]})}else i++,t.push(d),n.push(y),r.push(0),o.push(y.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return p(s),l}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=m},392:function(e,t,n){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},396:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),i=n(393),s=n.n(i),l=n(391),c=n(392);class p extends o.Component{constructor(e){super(e),this.state={data:null,spinner:!0,url:e.url.replace("<VERSION>",e.version)}}componentWillMount(){s.a.get(this.state.url).then(e=>{e.data?this.setState({data:e.data,spinner:!1}):this.setState({data:null,spinner:!1})}).catch(e=>{console.error(e.toString()),this.setState({data:null,spinner:!1})})}render(){return this.state.spinner?a.a.createElement("div",{className:"spinnerContainer"},a.a.createElement("div",{id:"loading"})):this.state.data?a.a.createElement(l.a,Object(r.a)({},l.b,{theme:c.a,code:this.state.data,language:`${this.props.language}`}),({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:o})=>a.a.createElement("pre",{className:e,style:t},n.map((e,t)=>a.a.createElement("div",r({line:e,key:t}),e.map((e,t)=>a.a.createElement("span",o({token:e,key:t}))))))):a.a.createElement("div",null,`Schema model not found for version ${this.props.version}`)}}t.a=p},397:function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r);let a;a="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};class i extends r.Component{constructor(e){super(e);const t=/[\d].[\d].x/;let n=null;a&&a.location&&(n=a.location.href.match(t));let r="master";n&&(r=`v${n[0].replace("x","0")}`),this.state={version:r}}render(){return o.a.createElement("div",null,o.a.cloneElement(this.props.children,{version:this.state.version}))}}t.a=i}).call(this,n(71))}}]);