"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[497],{"./packages/db-ui-elements-stencil/dist/esm/db-header.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_header:()=>DbHeader});var _index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-545aea95.js");function cov_j6iovnwe4(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-header.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"7103bec906605cec05c23cfad81dbbbab401344b"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-header.entry.js",statementMap:{0:{start:{line:3,column:20},end:{line:3,column:3254}},1:{start:{line:5,column:17},end:{line:12,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:10,column:4},end:{line:10,column:83}},4:{start:{line:13,column:0},end:{line:13,column:29}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:8,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:9,column:2},end:{line:9,column:3}},loc:{start:{line:9,column:11},end:{line:11,column:3}},line:9}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7103bec906605cec05c23cfad81dbbbab401344b"});var actualCoverage=coverage[path];return cov_j6iovnwe4=function(){return actualCoverage},actualCoverage}cov_j6iovnwe4();var dbHeaderCss=(cov_j6iovnwe4().s[0]++,'@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.rea-header{background-color:#fdfdfd;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 1px rgba(0, 0, 0, 0.05);display:flex;justify-content:space-between;margin-bottom:1rem;min-height:4.9375rem;padding-left:1rem;padding-right:1rem}.rea-header:not(:has(.rea-meta))::after{content:"";display:inline-block;order:3}.rea-header .elm-link{display:inline-block}@media screen and (max-width: 1023px){.rea-header{border-bottom:0.0625rem solid #9c9a8e;min-height:4rem}}:host{display:block}');cov_j6iovnwe4().s[1]++;var DbHeader=function(){function DbHeader(hostRef){cov_j6iovnwe4().f[0]++,cov_j6iovnwe4().s[2]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}return DbHeader.prototype.render=function render(){return cov_j6iovnwe4().f[1]++,cov_j6iovnwe4().s[3]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("header",{class:"rea-header",role:"banner"},(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))},DbHeader}();cov_j6iovnwe4().s[4]++,DbHeader.style=dbHeaderCss}}]);