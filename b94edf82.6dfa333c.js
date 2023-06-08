(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{687:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(913)),s=(n(930),n(931),{id:"overview",title:"Users overview",sidebar_label:"Overview",keywords:["OpenHIM","API","User","Overview"],description:"An overview of the OpenHIM Users"}),i={unversionedId:"api/users/overview",id:"api/users/overview",isDocsHomePage:!1,title:"Users overview",description:"An overview of the OpenHIM Users",source:"@site/docs/api/users/overview.md",slug:"/api/users/overview",permalink:"/docs/next/api/users/overview",version:"current",sidebar_label:"Overview",sidebar:"api",previous:{title:"Update transaction",permalink:"/docs/next/api/transactions/update"},next:{title:"Create User",permalink:"/docs/next/api/users/create"}},l=[{value:"Schema Model",id:"schema-model",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Allows for the management of the OpenHIM users."),Object(a.b)("h2",{id:"schema-model"},"Schema Model"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const UserSchema = new Schema({\n  firstname: {\n    type: String,\n    required: true\n  },\n  surname: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  passports: {type: Schema.Types.ObjectId, ref: 'Passport'},\n  /* --- @deprecated --- */\n  passwordAlgorithm: String,\n  passwordHash: String,\n  passwordSalt: String,\n  /* --- ----------- --- */\n  provider: {\n    type: String,\n    enum: ['openid', 'local', 'token'], // token is deprecated\n    default: 'local'\n  },\n  groups: [String],\n  msisdn: String,\n  dailyReport: Boolean,\n  weeklyReport: Boolean,\n  settings: Object,\n  token: String,\n  tokenType: {\n    type: String,\n    enum: ['newUser', 'existingUser', null]\n  }, // null is needed as we used nulls to clear to token and tokenType\n  expiry: Date,\n  locked: Boolean\n})\n")))}p.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||a;return n?o.a.createElement(f,i(i({ref:t},c),{},{components:n})):o.a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},921:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(22),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(0),s={Prism:r.a,theme:o};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=l({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var s=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,s=l({},d(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?l({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,s=0,i=[],l=[i];s>-1;){for(;(a=r[s]++)<o[s];){var y=void 0,d=t[s],f=n[s][a];if("string"==typeof f?(d=s>0?d:["plain"],y=f):(d=u(d,f.type),f.alias&&(d=u(d,f.alias)),y=f.content),"string"==typeof y){var m=y.split(c),g=m.length;i.push({types:d,content:m[0]});for(var v=1;v<g;v++)p(i),l.push(i=[]),i.push({types:d,content:m[v]})}else s++,t.push(d),n.push(y),r.push(0),o.push(y.length)}s--,t.pop(),n.pop(),r.pop(),o.pop()}return p(i),l}(void 0!==s?t.tokenize(r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=f},922:function(e,t,n){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},930:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o),s=n(923),i=n.n(s),l=n(921),c=n(922);class p extends o.Component{constructor(e){super(e),this.state={data:null,spinner:!0,url:e.url.replace("<VERSION>",e.version)}}componentWillMount(){i.a.get(this.state.url).then((e=>{e.data?this.setState({data:e.data,spinner:!1}):this.setState({data:null,spinner:!1})})).catch((e=>{console.error(e.toString()),this.setState({data:null,spinner:!1})}))}render(){return this.state.spinner?a.a.createElement("div",{className:"spinnerContainer"},a.a.createElement("div",{id:"loading"})):this.state.data?a.a.createElement(l.a,Object(r.a)({},l.b,{theme:c.a,code:this.state.data,language:`${this.props.language}`}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:o})=>a.a.createElement("pre",{className:e,style:t},n.map(((e,t)=>a.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>a.a.createElement("span",o({token:e,key:t})))))))))):a.a.createElement("div",null,`Schema model not found for version ${this.props.version}`)}}t.a=p},931:function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r);let a;a="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};class s extends r.Component{constructor(e){super(e);const t=/[\d].[\d].x/;let n=null;a&&a.location&&(n=a.location.href.match(t));let r="master";n&&(r=`v${n[0].replace("x","0")}`),this.state={version:r}}render(){return o.a.createElement("div",null,o.a.cloneElement(this.props.children,{version:this.state.version}))}}t.a=s}).call(this,n(24))}}]);