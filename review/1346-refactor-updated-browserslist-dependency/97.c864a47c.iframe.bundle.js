"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[97],{"./packages/db-ui-elements-stencil/dist/esm/db-notifications.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_notifications:()=>DbNotifications});var _index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-545aea95.js");function cov_17v8mgjm0l(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-notifications.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"2e68439b68e67103c3d4679b9e7ced0788cff91b"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-notifications.entry.js",statementMap:{0:{start:{line:3,column:27},end:{line:3,column:4128}},1:{start:{line:5,column:24},end:{line:14,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:8,column:4},end:{line:8,column:29}},4:{start:{line:9,column:4},end:{line:9,column:30}},5:{start:{line:12,column:4},end:{line:12,column:105}},6:{start:{line:15,column:0},end:{line:15,column:43}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:10,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:11,column:2},end:{line:11,column:3}},loc:{start:{line:11,column:11},end:{line:13,column:3}},line:11}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2e68439b68e67103c3d4679b9e7ced0788cff91b"});var actualCoverage=coverage[path];return cov_17v8mgjm0l=function(){return actualCoverage},actualCoverage}cov_17v8mgjm0l();var dbNotificationsCss=(cov_17v8mgjm0l().s[0]++,'@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}.cmp-notification{background-color:#282d37;box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.1);margin-bottom:1rem;padding:1rem}section[data-variant=hovering] .cmp-notification{background-color:#fff}section[data-variant=alert] .cmp-notification{color:#fff}section[data-variant=hovering] .cmp-notification{border:2px solid transparent;border-radius:0.5rem;padding:0.875rem 1rem}.cmp-notification>em{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-notification[data-type=success]{background-color:#508b1b}section[data-variant=hovering] .cmp-notification[data-type=success]{border-color:#508b1b}.cmp-notification[data-type=warning]{background-color:#f75f00}section[data-variant=hovering] .cmp-notification[data-type=warning]{border-color:#f75f00}.cmp-notification[data-type=error]{background-color:#ec0016}section[data-variant=hovering] .cmp-notification[data-type=error]{border-color:#ec0016}.cmp-notification[data-type=informative]{background-color:#0087b9}section[data-variant=hovering] .cmp-notification[data-type=informative]{border-color:#0087b9}.cmp-notification[data-icon],.cmp-notification[data-icon-before],.cmp-notification[data-icon-after]{align-items:center;display:flex}.cmp-notification[data-icon]::before,.cmp-notification[data-icon-before]::before{--icon-margin-after:0.625rem}.cmp-notification[data-icon-after]{justify-content:space-between}.cmp-notification[data-icon-after]::after{--icon-margin-before:0.625rem}');cov_17v8mgjm0l().s[1]++;var DbNotifications=function(){function DbNotifications(hostRef){cov_17v8mgjm0l().f[0]++,cov_17v8mgjm0l().s[2]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_17v8mgjm0l().s[3]++,this.arialive="polite",cov_17v8mgjm0l().s[4]++,this.variant="hovering"}return DbNotifications.prototype.render=function render(){return cov_17v8mgjm0l().f[1]++,cov_17v8mgjm0l().s[5]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("section",{"aria-live":this.arialive,"data-variant":this.variant},(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))},DbNotifications}();cov_17v8mgjm0l().s[6]++,DbNotifications.style=dbNotificationsCss}}]);