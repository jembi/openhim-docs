(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{321:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(913)),i=(n(924),n(925),{id:"overview",title:"Users overview",sidebar_label:"Overview",keywords:["OpenHIM","API","User","Overview"],description:"An overview of the OpenHIM Users"}),s={unversionedId:"api/users/overview",id:"version-7.2.x/api/users/overview",isDocsHomePage:!1,title:"Users overview",description:"An overview of the OpenHIM Users",source:"@site/versioned_docs/version-7.2.x/api/users/overview.md",slug:"/api/users/overview",permalink:"/docs/7.2.x/api/users/overview",version:"7.2.x",sidebar_label:"Overview",sidebar:"version-7.2.x/api",previous:{title:"Update transaction",permalink:"/docs/7.2.x/api/transactions/update"},next:{title:"Create User",permalink:"/docs/7.2.x/api/users/create"}},l=[{value:"Schema Model",id:"schema-model",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Allows for the management of the OpenHIM users."),Object(a.b)("h2",{id:"schema-model"},"Schema Model"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const UserSchema = new Schema({\n  firstname: {\n    type: String,\n    required: true\n  },\n  surname: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  passports: {type: Schema.Types.ObjectId, ref: 'Passport'},\n  /* --- @deprecated --- */\n  passwordAlgorithm: String,\n  passwordHash: String,\n  passwordSalt: String,\n  /* --- ----------- --- */\n  provider: {\n    type: String,\n    enum: ['openid', 'local', 'token'], // token is deprecated\n    default: 'local'\n  },\n  groups: [String],\n  msisdn: String,\n  dailyReport: Boolean,\n  weeklyReport: Boolean,\n  settings: Object,\n  token: String,\n  tokenType: {\n    type: String,\n    enum: ['newUser', 'existingUser', null]\n  }, // null is needed as we used nulls to clear to token and tokenType\n  expiry: Date,\n  locked: Boolean\n})\n")))}p.isMDXComponent=!0},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||y[d]||a;return n?o.a.createElement(f,s(s({ref:t},c),{},{components:n})):o.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},921:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(22),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(0),i={Prism:r.a,theme:o};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=l({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=l({},d(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?l({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,s=[],l=[s];i>-1;){for(;(a=r[i]++)<o[i];){var y=void 0,d=t[i],f=n[i][a];if("string"==typeof f?(d=i>0?d:["plain"],y=f):(d=u(d,f.type),f.alias&&(d=u(d,f.alias)),y=f.content),"string"==typeof y){var v=y.split(c),m=v.length;s.push({types:d,content:v[0]});for(var g=1;g<m;g++)p(s),l.push(s=[]),s.push({types:d,content:v[g]})}else i++,t.push(d),n.push(y),r.push(0),o.push(y.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return p(s),l}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=f},922:function(e,t,n){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},924:function(e,t,n){"use strict";var r=n(3),o=n(4),a=n(0),i=n.n(a),s=n(923),l=n.n(s),c=n(921),p=n(922),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={data:null,spinner:!0,url:t.url.replace("<VERSION>",t.version)},n}Object(o.a)(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=this;l.a.get(this.state.url).then((function(t){t.data?e.setState({data:t.data,spinner:!1}):e.setState({data:null,spinner:!1})})).catch((function(t){console.error(t.toString()),e.setState({data:null,spinner:!1})}))},n.render=function(){return this.state.spinner?i.a.createElement("div",{className:"spinnerContainer"},i.a.createElement("div",{id:"loading"})):this.state.data?i.a.createElement(c.a,Object(r.a)({},c.b,{theme:p.a,code:this.state.data,language:""+this.props.language}),(function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,a=e.getTokenProps;return i.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return i.a.createElement("div",o({line:e,key:t}),e.map((function(e,t){return i.a.createElement("span",a({token:e,key:t}))})))})))})):i.a.createElement("div",null,"Schema model not found for version "+this.props.version)},t}(a.Component);t.a=u},925:function(e,t,n){"use strict";(function(e){var r,o=n(4),a=n(0),i=n.n(a);r="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};var s=function(e){function t(t){var n;n=e.call(this,t)||this;var o=null;r&&r.location&&(o=r.location.href.match(/[\d].[\d].x/));var a="master";return o&&(a="v"+o[0].replace("x","0")),n.state={version:a},n}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.cloneElement(this.props.children,{version:this.state.version}))},t}(a.Component);t.a=s}).call(this,n(24))}}]);