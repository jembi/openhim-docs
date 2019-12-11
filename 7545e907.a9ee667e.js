(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{334:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(1),r=(n(0),n(597));const s={id:"restful-api",title:"RESTful API",sidebar_label:"RESTful API"},i=[{value:"Tasks resource",id:"tasks-resource",children:[]}],c={rightToc:i},o="wrapper";function l({components:e,...t}){return Object(r.b)(o,Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"tasks-resource"},"Tasks resource"),Object(r.b)("p",null,"Tasks are used to submit transactions to be re-run."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"https://<server>:<api_port>/tasks")),Object(r.b)("h4",{id:"fetch-all-tasks"},"Fetch all tasks"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"GET /tasks")),Object(r.b)("p",null,"The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful and the response body will contain an array of task objects. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/src/model/tasks.js"}),"tasks schema"),"."),Object(r.b)("h4",{id:"add-a-task"},"Add a task"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"POST /tasks")),Object(r.b)("p",null,"with a json body representing the task to be added in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "tids": [\n    "id#1",\n    "id#2",\n    ...\n    "id#N"\n  ],\n  "batchSize": 4,   //optional\n  "paused": true    //optional\n}\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"tids")," field should contain an array of transaction identifiers indicating the transactions that need to be rerun. The ",Object(r.b)("inlineCode",{parentName:"p"},"batchSize")," field indicates the number of transactions that the core should run concurrently. To prevent a task from immediately starting upon add, the ",Object(r.b)("inlineCode",{parentName:"p"},"paused")," field can be added. In this case the task will simply be scheduled with a ",Object(r.b)("inlineCode",{parentName:"p"},"Paused")," status, ready to be started at any later stage."),Object(r.b)("p",null,"The response code will be ",Object(r.b)("inlineCode",{parentName:"p"},"201")," if successful."),Object(r.b)("h4",{id:"fetch-a-specific-task"},"Fetch a specific task"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"GET /tasks/:taskId")),Object(r.b)("p",null,"where ",Object(r.b)("inlineCode",{parentName:"p"},":taskId")," is the ",Object(r.b)("inlineCode",{parentName:"p"},"_id")," property of the task to fetch."),Object(r.b)("p",null,"The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful and the response body will contain a task object. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/src/model/tasks.js"}),"task schema"),"."),Object(r.b)("h4",{id:"update-a-task"},"Update a task"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"PUT /tasks/:taskId")),Object(r.b)("p",null,"where ",Object(r.b)("inlineCode",{parentName:"p"},":taskId")," is the ",Object(r.b)("inlineCode",{parentName:"p"},"_id")," property of the task to update."),Object(r.b)("p",null,"Tasks can be paused, resumed or cancelled by sending through an update with status equal to ",Object(r.b)("inlineCode",{parentName:"p"},"Paused"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Queued")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Cancelled")," respectively."),Object(r.b)("p",null,"The response code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful."),Object(r.b)("h4",{id:"delete-a-task"},"Delete a task"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DELETE /tasks/:taskId")),Object(r.b)("p",null,"where ",Object(r.b)("inlineCode",{parentName:"p"},":taskId")," is the ",Object(r.b)("inlineCode",{parentName:"p"},"_id")," property of the task to delete."),Object(r.b)("p",null,"The response code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful."))}l.isMDXComponent=!0},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),s=r.a.createContext({}),i=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return r.a.createElement(s.Provider,{value:t},e.children)};var o="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),b=i(n),p=a,d=b[c+"."+p]||b[p]||l[p]||s;return n?r.a.createElement(d,Object.assign({},{ref:t},o,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},o))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[o]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<s;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);