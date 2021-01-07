/*! For license information please see 366.fa73ebc0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{459:function(e,t){var r,o,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,s=[],d=!1,u=-1;function h(){d&&c&&(d=!1,c.length?s=c.concat(s):u=-1,s.length&&f())}function f(){if(!d){var e=l(h);d=!0;for(var t=s.length;t;){for(c=s,s=[];++u<t;)c&&c[u].run();u=-1,t=s.length}c=null,d=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new g(e,t)),1!==s.length||d||l(f)},g.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},465:function(e,t,r){"use strict";(function(t){const o={enabled:!0,visible:!0,styles:{},keys:{}};"FORCE_COLOR"in t.env&&(o.enabled="0"!==t.env.FORCE_COLOR);const n=(e,t,r)=>{let{open:o,close:n,regex:i}=e;return t=o+(t.includes(n)?t.replace(i,n+o):t)+n,r?t.replace(/\r?\n/g,`${n}$&${o}`):t},i=(e,t,r)=>{o.styles[e]=(e=>(e.open=`\x1b[${e.codes[0]}m`,e.close=`\x1b[${e.codes[1]}m`,e.regex=new RegExp(`\\u001b\\[${e.codes[1]}m`,"g"),e))({name:e,codes:t}),(o.keys[r]||(o.keys[r]=[])).push(e),Reflect.defineProperty(o,e,{get(){let t=e=>((e,t)=>{if(""===e||null==e)return"";if(!1===o.enabled)return e;if(!1===o.visible)return"";let r=""+e,i=r.includes("\n"),a=t.length;for(;a-- >0;)r=n(o.styles[t[a]],r,i);return r})(e,t.stack);return Reflect.setPrototypeOf(t,o),t.stack=this.stack?this.stack.concat(e):[e],t}})};i("reset",[0,0],"modifier"),i("bold",[1,22],"modifier"),i("dim",[2,22],"modifier"),i("italic",[3,23],"modifier"),i("underline",[4,24],"modifier"),i("inverse",[7,27],"modifier"),i("hidden",[8,28],"modifier"),i("strikethrough",[9,29],"modifier"),i("black",[30,39],"color"),i("red",[31,39],"color"),i("green",[32,39],"color"),i("yellow",[33,39],"color"),i("blue",[34,39],"color"),i("magenta",[35,39],"color"),i("cyan",[36,39],"color"),i("white",[37,39],"color"),i("gray",[90,39],"color"),i("grey",[90,39],"color"),i("bgBlack",[40,49],"bg"),i("bgRed",[41,49],"bg"),i("bgGreen",[42,49],"bg"),i("bgYellow",[43,49],"bg"),i("bgBlue",[44,49],"bg"),i("bgMagenta",[45,49],"bg"),i("bgCyan",[46,49],"bg"),i("bgWhite",[47,49],"bg"),i("blackBright",[90,39],"bright"),i("redBright",[91,39],"bright"),i("greenBright",[92,39],"bright"),i("yellowBright",[93,39],"bright"),i("blueBright",[94,39],"bright"),i("magentaBright",[95,39],"bright"),i("cyanBright",[96,39],"bright"),i("whiteBright",[97,39],"bright"),i("bgBlackBright",[100,49],"bgBright"),i("bgRedBright",[101,49],"bgBright"),i("bgGreenBright",[102,49],"bgBright"),i("bgYellowBright",[103,49],"bgBright"),i("bgBlueBright",[104,49],"bgBright"),i("bgMagentaBright",[105,49],"bgBright"),i("bgCyanBright",[106,49],"bgBright"),i("bgWhiteBright",[107,49],"bgBright");const a=o.ansiRegex=/[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;o.hasColor=o.hasAnsi=e=>(a.lastIndex=0,!!e&&"string"==typeof e&&a.test(e)),o.unstyle=e=>(a.lastIndex=0,"string"==typeof e?e.replace(a,""):e),o.none=o.clear=o.noop=e=>e,o.stripColor=o.unstyle,o.symbols=r(466),o.define=i,e.exports=o}).call(this,r(459))},466:function(e,t,r){"use strict";(function(t){const r="win32"===t.platform,o="linux"===t.platform,n={bullet:"\u2022",check:"\u221a",cross:"\xd7",ellipsis:"...",heart:"\u2764",info:"i",line:"\u2500",middot:"\xb7",minus:"\uff0d",plus:"\uff0b",question:"?",questionSmall:"\ufe56",pointer:">",pointerSmall:"\xbb",warning:"\u203c"},i={ballotCross:"\u2718",bullet:"\u2022",check:"\u2714",cross:"\u2716",ellipsis:"\u2026",heart:"\u2764",info:"\u2139",line:"\u2500",middot:"\xb7",minus:"\uff0d",plus:"\uff0b",question:"?",questionFull:"\uff1f",questionSmall:"\ufe56",pointer:o?"\u25b8":"\u276f",pointerSmall:o?"\u2023":"\u203a",warning:"\u26a0"};e.exports=r?n:i,Reflect.defineProperty(e.exports,"windows",{enumerable:!1,value:n}),Reflect.defineProperty(e.exports,"other",{enumerable:!1,value:i})}).call(this,r(459))},538:function(e,t,r){"use strict";var o=r(0),n=r.n(o);class i extends o.PureComponent{constructor(e){super(e),this.$=n.a.createRef(),this._=n.a.createRef()}render(){return n.a.createElement("span",{ref:this.$},n.a.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(r.bind(null,539)).then((({render:t})=>{t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}t.a=i},539:function(e,t,r){"use strict";r.r(t),r.d(t,"render",(function(){return T}));var o=window.document,n=window.Math,i=window.HTMLElement,a=window.XMLHttpRequest,l=function(e){return function(t,r,o){var n=e.createElement(t);if(null!=r)for(var i in r){var a=r[i];null!=a&&(null!=n[i]?n[i]=a:n.setAttribute(i,a))}if(null!=o)for(var l=0,c=o.length;l<c;l++){var s=o[l];n.appendChild("string"==typeof s?e.createTextNode(s):s)}return n}},c=l(o),s=function(e,t){return{}.hasOwnProperty.call(e,t)},d=function(e){return(""+e).toLowerCase()},u="github.com",h=a&&"prototype"in a&&"withCredentials"in a.prototype,f=h&&i&&"attachShadow"in i.prototype&&!("prototype"in i.prototype.attachShadow),g=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},p=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},b={light:".btn{color:#24292e;background-color:#eff3f6;border-color:#c5c9cc;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-position:-0.5em;border-color:#9fa4a9;border-color:rgba(27,31,35,.35);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#a1a4a8;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;border-color:#1f2327;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-position:-0.5em;border-color:#1b1f23;border-color:rgba(27,31,35,.5);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;border-color:#1a1d21;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},m=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+b[s(b,t)?t:e]+"}"},v=function(e){if(null==e)return b.light;if(s(b,e))return b[e];var t=function(e,t,r,o){null==t&&(t="&"),null==r&&(r="="),null==o&&(o=window.decodeURIComponent);for(var n={},i=e.split(t),a=0,l=i.length;a<l;a++){var c=i[a];if(""!==c){var s=c.split(r);n[o(s[0])]=null!=s[1]?o(s.slice(1).join(r)):void 0}}return n}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return b[s(b,t["no-preference"])?t["no-preference"]:"light"]+m("light",t.light)+m("dark",t.dark)},w={"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>'}}},download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}}},y=function(e,t){e=d(e).replace(/^octicon-/,""),s(w,e)||(e="mark-github");var r=t>=24&&24 in w[e].heights?24:16,o=w[e].heights[r];return'<svg viewBox="0 0 '+o.width+" "+r+'" width="'+t*o.width/r+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+o.path+"</svg>"},k={},x=function(e,t){var r=k[e]||(k[e]=[]);if(!(r.push(t)>1)){var o=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete k[e];t=r.shift();)t.apply(null,arguments)}));if(h){var n=new a;g(n,"abort",o),g(n,"error",o),g(n,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void o(t)}o(200!==this.status,e)})),n.open("GET",e),n.send()}else{var i=this||window;i._=function(e){i._=null,o(200!==e.meta.status,e.data)};var c=l(i.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){i._&&i._({meta:{}})};g(c,"load",s),g(c,"error",s),c.readyState&&function(e,t,r){var o="readystatechange",n=function(){if(t.test(e.readyState))return p(e,o,n),r.apply(this,arguments)};g(e,o,n)}(c,/de|m/,s),i.document.getElementsByTagName("head")[0].appendChild(c)}}},C=function(e,t,r){var o=l(e.ownerDocument),n=e.appendChild(o("style",{type:"text/css"})),i="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+v(t["data-color-scheme"]);n.styleSheet?n.styleSheet.cssText=i:n.appendChild(e.ownerDocument.createTextNode(i));var a="large"===d(t["data-size"]),c=o("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:y(t["data-icon"],a?16:14)},[" ",o("span",{},[t["data-text"]||""])]),s=e.appendChild(o("div",{className:"widget"+(a?" widget-lg":"")},[c])),h=c.hostname.replace(/\.$/,"");if(h.length<u.length||("."+h).substring(h.length-u.length)!=="."+u)return c.removeAttribute("href"),void r(s);var f=(" /"+c.pathname).split(/\/+/);if(((h===u||h==="gist."+u)&&"archive"===f[3]||h===u&&"releases"===f[3]&&("download"===f[4]||"latest"===f[4]&&"download"===f[5])||h==="codeload."+u)&&(c.target="_top"),"true"===d(t["data-show-count"])&&h===u){var g,p;if(!f[2]&&f[1])p="followers",g="?tab=followers";else if(!f[3]&&f[2])p="stargazers_count",g="/stargazers";else if(f[4]||"subscription"!==f[3])if(f[4]||"fork"!==f[3]){if("issues"!==f[3])return void r(s);p="open_issues_count",g="/issues"}else p="forks_count",g="/network/members";else p="subscribers_count",g="/watchers";var b=f[2]?"/repos/"+f[1]+"/"+f[2]:"/users/"+f[1];x.call(this,"https://api.github.com"+b,(function(e,t){if(!e){var n=t[p];s.appendChild(o("a",{className:"social-count",href:t.html_url+g,rel:"noopener",target:"_blank","aria-label":n+" "+p.replace(/_count$/,"").replace("_"," ").slice(0,n<2?-1:void 0)+" on GitHub"},[(""+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(s)}))}else r(s)},z=window.devicePixelRatio||1,B=function(e){return(z>1?n.ceil(n.round(e*z)/z*2)/2:n.ceil(e))||0},F=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},T=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},r=["icon","color-scheme","text","size","show-count"],o=0,n=r.length;o<n;o++){var i="data-"+r[o];t[i]=e.getAttribute(i)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),f){var r=c("span");C(r.attachShadow({mode:"closed"}),e,(function(){t(r)}))}else{var i=c("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});F(i,[0,0]),i.style.border="none";var a=function(){var r,l=i.contentWindow;try{r=l.document.body}catch(c){return void o.body.appendChild(i.parentNode.removeChild(i))}p(i,"load",a),C.call(l,r,e,(function(r){var o=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var o=e.getBoundingClientRect();t=n.max(t,B(o.width)),r=n.max(r,B(o.height))}return[t,r]}(r);i.parentNode.removeChild(i),function(e,t,r){var o=function(){return p(e,t,o),r.apply(this,arguments)};g(e,t,o)}(i,"load",(function(){F(i,o)})),i.src="https://unpkg.com/github-buttons@2.14.1/dist/buttons.html#"+(i.name=function(e,t,r,o){null==t&&(t="&"),null==r&&(r="="),null==o&&(o=window.encodeURIComponent);var n=[];for(var i in e){var a=e[i];null!=a&&n.push(o(i)+r+o(a))}return n.join(t)}(e)),t(i)}))};g(i,"load",a),o.body.appendChild(i)}}}}]);