"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[342],{"./packages/db-ui-elements-stencil/dist/esm/db-cards.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_cards:()=>DbCards});var _index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-7b41cb22.js");function cov_3f9rjz0ye(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-cards.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"8a07e953d2732462d65959c39bed68da6d8e5176"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-cards.entry.js",statementMap:{0:{start:{line:3,column:19},end:{line:3,column:4174}},1:{start:{line:5,column:16},end:{line:12,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:10,column:4},end:{line:10,column:63}},4:{start:{line:13,column:0},end:{line:13,column:27}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:8,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:9,column:2},end:{line:9,column:3}},loc:{start:{line:9,column:11},end:{line:11,column:3}},line:9}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8a07e953d2732462d65959c39bed68da6d8e5176"});var actualCoverage=coverage[path];return cov_3f9rjz0ye=function(){return actualCoverage},actualCoverage}cov_3f9rjz0ye();var dbCardsCss=(cov_3f9rjz0ye().s[0]++,':where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}.cmp-cards{list-style:none;margin:0;padding:0}@supports (display: grid){.cmp-cards{display:grid;grid-template-columns:repeat(auto-fill, minmax(21.25rem, 1fr));grid-gap:1.5rem}}.cmp-card{box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);border-radius:8px;background-color:#fff}.cmp-card>a{text-decoration:none}.cmp-card figure{margin:1rem 1rem 1rem 0.5rem}.cmp-card[data-variant=banner] figure{display:flex}.cmp-card[data-variant=banner] figcaption{margin-left:1rem}.cmp-card[data-variant=banner] figcaption h1,.cmp-card[data-variant=banner] figcaption h2,.cmp-card[data-variant=banner] figcaption h3,.cmp-card[data-variant=banner] figcaption h4,.cmp-card[data-variant=banner] figcaption h5,.cmp-card[data-variant=banner] figcaption h6{font-size:1.125rem}.cmp-card[data-variant=banner] figcaption h1,.cmp-card[data-variant=banner] figcaption h1~p,.cmp-card[data-variant=banner] figcaption h2,.cmp-card[data-variant=banner] figcaption h2~p,.cmp-card[data-variant=banner] figcaption h3,.cmp-card[data-variant=banner] figcaption h3~p,.cmp-card[data-variant=banner] figcaption h4,.cmp-card[data-variant=banner] figcaption h4~p,.cmp-card[data-variant=banner] figcaption h5,.cmp-card[data-variant=banner] figcaption h5~p,.cmp-card[data-variant=banner] figcaption h6,.cmp-card[data-variant=banner] figcaption h6~p{margin:0.125rem 0}.cmp-card[data-variant=banner] figcaption p{font-size:0.875rem;max-width:18.125rem}.cmp-card[data-variant=tile]{text-align:center}.cmp-card figcaption{max-width:60ch}');cov_3f9rjz0ye().s[1]++;var DbCards=function(){function DbCards(hostRef){cov_3f9rjz0ye().f[0]++,cov_3f9rjz0ye().s[2]++,(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}return DbCards.prototype.render=function render(){return cov_3f9rjz0ye().f[1]++,cov_3f9rjz0ye().s[3]++,(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"cmp-cards"},(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))},DbCards}();cov_3f9rjz0ye().s[4]++,DbCards.style=dbCardsCss}}]);