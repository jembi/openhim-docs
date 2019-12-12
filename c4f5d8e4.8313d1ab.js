/*! For license information please see c4f5d8e4.8313d1ab.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{488:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),l=a.n(r),i=a(590),c=a.n(i),o=a(596),s=a(593),u=a(594),d=a(489),m=a.n(d),h=[{title:l.a.createElement(l.a.Fragment,null,"About"),imageUrl:"/img/jembi-heal.png",imagePlacement:"left",description:l.a.createElement("div",null,l.a.createElement("p",null,"The OpenHIM allows you to"," ",l.a.createElement("b",null,"secure and view requests to your web service APIs"),". It acts as a reverse proxy to your upstream services and while doing so enables visibility into your service-oriented architecture (SOA) by logging each request and by providing metrics about requests hitting your services. It also provides a central entry point into your SOA and allows you to secure access through mutual TLS or basic-auth."),l.a.createElement("p",null,"The OpenHIM is easy to install and can be easily configured to meet your needs through the administration console. You can also"," ",l.a.createElement("b",null,"extend the OpenHIM to transform or orchestrate requests through the mediator framework.")),l.a.createElement("p",null,"Plus, the OpenHIM is ",l.a.createElement("b",null,"open-source"),"! It is published under the"," ",l.a.createElement("a",{href:"https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)"},"MPL-2.0")," ","and is currently developed and maintained by"," ",l.a.createElement("a",{href:"http://www.jembi.org/"},"Jembi Health Systems"),". It was initially developed in collaboration with"," ",l.a.createElement("a",{href:"http://www.ukzn.ac.za/"},"UKZN"),". Browse the OpenHIM features below or get started right away."," ",l.a.createElement("a",{href:"http://openhim.readthedocs.org/en/latest/getting-started.html#getting-started"},l.a.createElement("i",{className:"fa fa-arrow-circle-right"}))))},{title:l.a.createElement(l.a.Fragment,null,"Mediators"),imageUrl:"/img/plug-solid.png",imagePlacement:"right",description:l.a.createElement("div",null,l.a.createElement("p",null,"The OpenHIM enables you to extend its functionality so that implementation specific processing may occur. The OpenHIM has first class support for mediators through its mediator framework. This framework enables mediators to communicate with the OpenHIM-core to register themselves, log the processing that they do and even fetch user defined config."),l.a.createElement("p",null,"Check out the ",l.a.createElement("a",{href:"mediator-library"},"mediator library")," to view mediators that have already been built. To learn more about creating your own mediators, see our"," ",l.a.createElement("a",{href:"docs/introduction/welcome"},"documentation"),"."))},{title:l.a.createElement(l.a.Fragment,null,"Acts as a reverse proxy for web services"),imageUrl:"/img/OpenHIM-reverse-proxy.png",imagePlacement:"left",description:l.a.createElement("div",null,l.a.createElement("p",null,"You can easily configure the OpenHIM to proxy web services to multiple upstream hosts based on a URL pattern. It also supports multicasting requests to multiple different routes."))},{title:l.a.createElement(l.a.Fragment,null,"Gain visibility into your SOA"),imageUrl:"/img/console.gif",imagePlacement:"right",description:l.a.createElement("div",null,l.a.createElement("p",null,"The administration console allows you to view requests as they travel through the system as well as view metrics such as transaction load and error rates."))},{title:l.a.createElement(l.a.Fragment,null,"Extend the OpenHIM's request processing via mediators"),imageUrl:"/img/mediators.png",imagePlacement:"left",description:l.a.createElement("div",null,l.a.createElement("p",null,"The OpenHIM allows you to build your own micro-services called mediators that plug into the OpenHIM to extend its functionality. These mediators can be used to transform or orchestrate requests or more. They also report details of what processing has been done back to the OpenHIM using the mediator framework."),l.a.createElement("p",{className:"lead justify"},"View our ",l.a.createElement("a",{href:"mediator-library"},"mediator library")," to see mediator have already been built."))},{title:l.a.createElement(l.a.Fragment,null,"Secure access to your web services"),imageUrl:"/img/certs.png",imagePlacement:"right",description:l.a.createElement("div",null,l.a.createElement("p",null,"The OpenHIM provides a secure interface to upstream hosts with certificate management and self signed certificate generation along with advanced access control mechanisms based on client and server certificates."))},{title:l.a.createElement(l.a.Fragment,null,"ATNA: audit repository and node authentication"),imageUrl:"/img/audit.png",imagePlacement:"left",description:l.a.createElement("div",null,l.a.createElement("p",null,"If you need it, full support for IHE\u2019s ATNA profile is provided. Both node authentication and audit trails are supported. The OpenHIM also provides a full ATNA audit repository implementation and advanced audit viewer."))},{title:l.a.createElement(l.a.Fragment,null,"Alerting, for when things go wrong"),imageUrl:"/img/alerts.png",imagePlacement:"right",description:l.a.createElement("div",null,l.a.createElement("p",null,"User alerts can be configured for when requests fail or a particular failure rate is exceeded. Users can be notified via email or sms."))},{title:l.a.createElement(l.a.Fragment,null,"Massively scalable"),imageUrl:"/img/cluster.png",imagePlacement:"left",description:l.a.createElement("div",null,l.a.createElement("p",null,"The OpenHIM is scalable to handle large transaction loads. It supports same server and multi-server clusters and uses MongoDB as a database which is also massively scalable."))},{title:l.a.createElement(l.a.Fragment,null,"Re-run failed transactions"),imageUrl:"/img/rerun.png",imagePlacement:"right",description:l.a.createElement("div",null,l.a.createElement("p",null,"If failures occur the OpenHIM can re-run requests to your services if your client systems are not able to. It allows you to review and bulk re-run requests or re-run individual requests."))},{title:l.a.createElement(l.a.Fragment,null,"Minimal transaction overhead"),imageUrl:"/img/node-mongo.png",imagePlacement:"left",description:l.a.createElement("div",null,l.a.createElement("p",null,"The OpenHIM used the latest technologies such as Node.js and MongoDB to ensure that it doesn\u2019t introduce any significant overhead to your requests."))}];function p(e){var t=e.imageUrl,a=e.title,n=e.imagePlacement,r=e.description,i=Object(u.a)(t);return"left"===n?l.a.createElement("div",{className:"row padding-vert feature even_item"},l.a.createElement("div",{className:"col center"},l.a.createElement("img",{className:"padding-horizontal",src:i,alt:a})),l.a.createElement("div",{className:"col col--offset-1"},l.a.createElement("h2",{className:"subtitle"},a),l.a.createElement("div",null,r))):l.a.createElement("div",{className:"row padding-vert feature even_item"},l.a.createElement("div",{className:"col"},l.a.createElement("h2",{className:"subtitle"},a),l.a.createElement("div",null,r)),l.a.createElement("div",{className:"col col--offset-1 center"},l.a.createElement("img",{className:"padding-horizontal",src:i,alt:a})))}t.default=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(o.a,{title:t.title,description:"Console for administrating the OpenHIM Core"},l.a.createElement("header",{className:c()("hero page",m.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("img",{className:"logo_header",src:"/img/openhim-logo-green.svg",alt:"Project Logo"}),l.a.createElement("p",{className:"hero__subtitle subtitle"},t.tagline),l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"The ",l.a.createElement("strong",null,"Open Health Information Mediator")," (OpenHIM) is a middleware component designed to ease interoperability between disparate information systems. It provides secure communications and data governance as well as support for routing, orchestrating and translating requests as they flow between systems."),l.a.createElement("p",null,"Connecting health systems simply, securely and safely.")))),l.a.createElement("main",null,h&&h.length&&l.a.createElement("div",{className:"home page"},h.map((function(e,t){return l.a.createElement(p,Object(n.a)({key:t},e))})))))}},590:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===l)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},593:function(e,t,a){"use strict";var n=a(0),r=a(33);t.a=function(){return Object(n.useContext)(r.a)}},594:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(593);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},595:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),i=a(17);const c=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,o=t||a,s=c.test(o);let u=!1;const d="undefined"!=typeof window&&"IntersectionObserver"in window;let m;return Object(r.useEffect)(()=>(!d&&s&&window.docusaurus.prefetch(o),()=>{d&&m&&m.disconnect()}),[o,d,s]),o&&s?l.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:()=>{u||(window.docusaurus.preload(o),u=!0)},innerRef:e=>{d&&e&&s&&((e,t)=>{(m=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(m.unobserve(e),m.disconnect(),t())})})).observe(e)})(e,()=>{window.docusaurus.prefetch(o)})},to:o})):l.a.createElement("a",Object(n.a)({},e,{href:o}))}},596:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(34),i=a(593),c=a(594),o=a(1),s=a(595),u=a(590),d=a.n(u),m=a(33);a(89);var h=e=>{const[t,l]=Object(n.useState)(!0),i=Object(n.useRef)(null),c=Object(n.useContext)(m.a);Object(n.useEffect)(()=>{const{siteConfig:e={}}=c,{themeConfig:{algolia:t}}=e;"undefined"!=typeof window?a.e(492).then(a.t.bind(null,712,7)).then(({default:e})=>{e({appId:t.appId,apiKey:t.apiKey,indexName:t.indexName,inputSelector:"#search_input_react",algoliaOptions:t.algoliaOptions})}):(console.warn("Search has failed to load and now is being disabled"),l(!1))},[]);const o=Object(n.useCallback)(t=>{i.current.contains(t.target)||i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return t?r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:d()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:o,onKeyDown:o,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:d()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onFocus:o,onBlur:o,ref:i})):null},p=a(598),f=a.n(p),g=a(90),v=a.n(g);const b=()=>r.a.createElement("span",{className:d()(v.a.toggle,v.a.moon)}),E=()=>r.a.createElement("span",{className:d()(v.a.toggle,v.a.sun)});var y=function(e){const{isClient:t}=Object(i.a)();return r.a.createElement(f.a,Object(o.a)({disabled:!t,icons:{checked:r.a.createElement(b,null),unchecked:r.a.createElement(E,null)}},e))};var k=()=>{const[e,t]=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):"");return n.useEffect(()=>{try{t(localStorage.getItem("theme"))}catch(e){console.error(e)}},[t]),[e,n.useCallback(e=>{try{localStorage.setItem("theme",e),t(e)}catch(a){console.error(a)}},[t])]},w=a(91),_=a.n(w);function O({to:e,href:t,label:a,position:n,...l}){const i=Object(c.a)(e);return r.a.createElement(s.a,Object(o.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:i},l),a)}var N=function(){const e=Object(i.a)(),[t,a]=Object(n.useState)(!1),[u,m]=Object(n.useState)(!1),[p,f]=k(),{siteConfig:g={}}=e,{baseUrl:v,themeConfig:b={}}=g,{navbar:E={},disableDarkMode:w=!1}=b,{title:N,logo:j={},links:C=[]}=E,M=Object(n.useCallback)(()=>{a(!0)},[a]),I=Object(n.useCallback)(()=>{a(!1)},[a]),x=Object(n.useCallback)(e=>f(e.target.checked?"dark":""),[f]),T=Object(c.a)(j.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en","data-theme":p})),r.a.createElement("nav",{className:d()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":t})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(s.a,{className:"navbar__brand",to:v},null!=j&&r.a.createElement("img",{className:"navbar__logo",src:T,alt:j.alt}),null!=N&&r.a.createElement("strong",{className:u?_.a.hideLogoText:""},N)),C.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(O,Object(o.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},C.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(O,Object(o.a)({},e,{key:t}))),!w&&r.a.createElement(y,{className:_.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===p,onChange:x}),r.a.createElement(h,{handleSearchBarToggle:m,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:()=>{a(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(s.a,{className:"navbar__brand",onClick:I,to:v},null!=j&&r.a.createElement("img",{className:"navbar__logo",src:T,alt:j.alt}),null!=N&&r.a.createElement("strong",null,N)),!w&&t&&r.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===p,onChange:x})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},C.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(O,Object(o.a)({className:"menu__link"},e,{onClick:I}))))))))))},j=a(92),C=a.n(j);function M({to:e,href:t,label:a,...n}){const l=Object(c.a)(e);return r.a.createElement(s.a,Object(o.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:l},n),a)}const I=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var x=function(){const e=Object(i.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:l,links:o=[],logo:s={}}=n||{},u=Object(c.a)(s.src);return n?r.a.createElement("footer",{className:d()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(M,e)))):null))),(s||l)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:C.a.footerLogoLink},r.a.createElement(I,{alt:s.alt,url:u})):r.a.createElement(I,{alt:s.alt,url:u})),l))):null};a(93);t.a=function(e){const{siteConfig:t={}}=Object(i.a)(),{favicon:a,tagline:n,title:o,themeConfig:{image:s},url:u}=t,{children:d,title:m,noFooter:h,description:p,image:f,keywords:g,permalink:v,version:b}=e,E=m||`${o} \xb7 ${n}`,y=f||s,k=u+Object(c.a)(y),w=Object(c.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),a&&r.a.createElement("link",{rel:"shortcut icon",href:w}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),b&&r.a.createElement("meta",{name:"docsearch:version",content:b}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:k}),y&&r.a.createElement("meta",{property:"twitter:image",content:k}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`}),v&&r.a.createElement("meta",{property:"og:url",content:u+v}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(N,null),r.a.createElement("div",{className:"main-wrapper"},d),!h&&r.a.createElement(x,null))}},598:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),i=m(l),c=m(a(590)),o=m(a(7)),s=m(a(599)),u=m(a(600)),d=a(601);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,c.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return i.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:i.default.createElement(s.default,null),unchecked:i.default.createElement(u.default,null)}},h.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},599:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},600:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},601:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);