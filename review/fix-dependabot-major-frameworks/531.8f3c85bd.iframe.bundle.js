"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[531],{"./packages/db-ui-elements-stencil/dist/esm/db-tab-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_tab_bar:()=>DbTabBar});var _index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-60c9fafb.js");function cov_1gtpzk13fl(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-tab-bar.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"c4192cd4cfbb9ed648d8bf812af81174f8aabd18"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-tab-bar.entry.js",statementMap:{0:{start:{line:3,column:20},end:{line:3,column:4699}},1:{start:{line:5,column:17},end:{line:12,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:10,column:4},end:{line:10,column:82}},4:{start:{line:13,column:0},end:{line:13,column:29}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:8,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:9,column:2},end:{line:9,column:3}},loc:{start:{line:9,column:11},end:{line:11,column:3}},line:9}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c4192cd4cfbb9ed648d8bf812af81174f8aabd18"});var actualCoverage=coverage[path];return cov_1gtpzk13fl=function(){return actualCoverage},actualCoverage}cov_1gtpzk13fl();var dbTabBarCss=(cov_1gtpzk13fl().s[0]++,':where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-tab-bar{display:flex;flex-wrap:wrap}.cmp-tab-bar label[role=tab],.cmp-tab-bar section[role=tabpanel]{background-color:#fdfdfd}.cmp-tab-bar>input[type=radio],.cmp-tab-bar>*>input[type=radio]{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-tab-bar>input[type=radio]+label[role=tab],.cmp-tab-bar>*>input[type=radio]+label[role=tab]{border-top-left-radius:4px;border-top-right-radius:4px;cursor:pointer;display:inline-block;margin-left:0.5rem;padding:0.3125rem 2rem;position:relative;z-index:1}.cmp-tab-bar>input[type=radio]+label[role=tab]:first-of-type,.cmp-tab-bar>*>input[type=radio]+label[role=tab]:first-of-type{margin-left:1rem}.cmp-tab-bar>input[type=radio]:focus+label,.cmp-tab-bar>*>input[type=radio]:focus+label{outline:1px dotted #878c96}.cmp-tab-bar>input[type=radio]:not(:checked)+label[role=tab]:hover,.cmp-tab-bar>input[type=radio]:not(:checked)+label[role=tab]:focus,.cmp-tab-bar>*>input[type=radio]:not(:checked)+label[role=tab]:hover,.cmp-tab-bar>*>input[type=radio]:not(:checked)+label[role=tab]:focus{background-color:#f0f3f5}.cmp-tab-bar>input[type=radio]:disabled+label[role=tab],.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]{color:#878c96}.cmp-tab-bar>input[type=radio]:disabled+label[role=tab]:hover,.cmp-tab-bar>input[type=radio]:disabled+label[role=tab]:focus,.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]:hover,.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]:focus{background-color:unset}.cmp-tab-bar>input[type=radio]:checked+label[role=tab],.cmp-tab-bar>*>input[type=radio]:checked+label[role=tab]{border:0.0625rem solid #646973;border-bottom:none;font-weight:700;padding-top:0.1875rem;transform:translateY(0.0625rem)}.cmp-tab-bar>input[type=radio]:checked+label[role=tab]+section[role=tabpanel],.cmp-tab-bar>*>input[type=radio]:checked+label[role=tab]+section[role=tabpanel]{display:initial}.cmp-tab-bar section[role=tabpanel]{border-top:0.0625rem solid #646973;box-shadow:0 2px 5px rgba(0, 0, 0, 0.08), 0 15px 30px rgba(0, 0, 0, 0.05);display:none;flex-basis:100%;order:1;padding:2.875rem 3.125rem}');cov_1gtpzk13fl().s[1]++;var DbTabBar=function(){function DbTabBar(hostRef){cov_1gtpzk13fl().f[0]++,cov_1gtpzk13fl().s[2]++,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}return DbTabBar.prototype.render=function render(){return cov_1gtpzk13fl().f[1]++,cov_1gtpzk13fl().s[3]++,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"cmp-tab-bar",role:"tablist"},(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))},DbTabBar}();cov_1gtpzk13fl().s[4]++,DbTabBar.style=dbTabBarCss}}]);