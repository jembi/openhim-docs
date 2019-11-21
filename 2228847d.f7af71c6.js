(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));n(0);var a=n(302);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const i={id:"openhim-core-release",title:"Create an OpenHIM-core release",sidebar_label:"Create an OpenHIM-core release"},o=[{value:"Support Releases",id:"support-releases",children:[]}],l={rightToc:o},p="wrapper";function c({components:e,...t}){return Object(a.b)(p,r({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This page describes the steps to follow to do an OpenHIM release. Make sure you are on the ",Object(a.b)("inlineCode",{parentName:"p"},"master")," branch and it is fully up-to-date before beginning this process."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"npm version (major|minor|patch)")," - choose one according to semver."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"npm publish")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"git push origin master")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"git push origin vx.x.x")," - push the tag that step #1 created."),Object(a.b)("li",{parentName:"ol"},"Create a ",Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/jembi/openhim-core-js/releases/new"}),"new github release")," using the tag created in step #1 above, that includes the release notes."),Object(a.b)("li",{parentName:"ol"},"Build a debian package and upload it to launchpad. Follow the ",Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/jembi/openhim-core-js/tree/master/packaging"}),"instructions here"),"."),Object(a.b)("li",{parentName:"ol"},"Build a rpm package, follow the ",Object(a.b)("a",r({parentName:"li"},{href:"http://openhim.readthedocs.io/en/latest/how-to/how-to-build-and-test-rpm-package.html"}),"instructions here"),".")),Object(a.b)("h2",{id:"support-releases"},"Support Releases"),Object(a.b)("p",null,"From time to time a support release may be required for critical security issues or bugs. When this happens, a support branch should be created in order to support that particular version."),Object(a.b)("p",null,"If the branch doesn't exist, create it from the latest tag for a particular release:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git checkout -b support-vx.y vx.y.z"))),Object(a.b)("p",null,"else if the branch exists, simply check it out and continue from there"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git checkout support-vx.y"))),Object(a.b)("p",null,"Ideally fixes should first be developed separately and merged into master. They can then be ",Object(a.b)("inlineCode",{parentName:"p"},"cherry-picked")," for the support release:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git cherry-pick bd68fe1c8cf81cbef2169414ce8440a7a2c69717"))),Object(a.b)("p",null,"Although this may not always be possible, in which case the fixes can be added manually."),Object(a.b)("p",null,"When all fixes have been applied, test thoroughly and create a new release as per normal:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"npm version (major|minor|patch)")," - increment the patch version."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"npm publish")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"git push origin support-vx.y")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"git push origin vx.y.z")," - push the new tag"),Object(a.b)("li",{parentName:"ol"},"Create a ",Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/jembi/openhim-core-js/releases/new"}),"new github release"))),Object(a.b)("p",null,"When a particular version is no longer supported, its support branch should be deleted."))}c.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=o(n),b=a,u=s[l+"."+b]||s[b]||c[b]||i;return n?r.a.createElement(u,Object.assign({},{ref:t},p,{components:n})):r.a.createElement(u,Object.assign({},{ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);