"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[624],{"./packages/db-ui-elements-stencil/dist/esm/db-progress.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_progress:()=>DbProgress});var _index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-7b41cb22.js"),_utils_db900ae9_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/utils-db900ae9.js");function cov_2bz3elvcnw(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-progress.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"a56adb02e27d6ffeaf51063146bfd56302850b0b"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-progress.entry.js",statementMap:{0:{start:{line:4,column:22},end:{line:4,column:7345}},1:{start:{line:6,column:19},end:{line:27,column:1}},2:{start:{line:8,column:4},end:{line:8,column:36}},3:{start:{line:12,column:4},end:{line:12,column:33}},4:{start:{line:16,column:4},end:{line:16,column:30}},5:{start:{line:20,column:4},end:{line:20,column:31}},6:{start:{line:23,column:4},end:{line:25,column:126}},7:{start:{line:28,column:0},end:{line:28,column:33}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:2},end:{line:7,column:3}},loc:{start:{line:7,column:23},end:{line:21,column:3}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:22,column:2},end:{line:22,column:3}},loc:{start:{line:22,column:11},end:{line:26,column:3}},line:22}},branchMap:{0:{loc:{start:{line:23,column:179},end:{line:25,column:22}},type:"cond-expr",locations:[{start:{line:24,column:10},end:{line:24,column:51}},{start:{line:25,column:10},end:{line:25,column:22}}],line:23},1:{loc:{start:{line:25,column:28},end:{line:25,column:123}},type:"binary-expr",locations:[{start:{line:25,column:28},end:{line:25,column:47}},{start:{line:25,column:52},end:{line:25,column:122}}],line:25}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a56adb02e27d6ffeaf51063146bfd56302850b0b"});var actualCoverage=coverage[path];return cov_2bz3elvcnw=function(){return actualCoverage},actualCoverage}cov_2bz3elvcnw();var dbProgressCss=(cov_2bz3elvcnw().s[0]++,'.sc-db-progress:where(html){line-height:1.15}.sc-db-progress:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-progress:where(dl,ol.sc-db-progress,ul).sc-db-progress .sc-db-progress:where(dl,ol.sc-db-progress,ul).sc-db-progress{margin-block-end:0;margin-block-start:0}.sc-db-progress:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-progress:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-progress:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.sc-db-progress:where(b,strong).sc-db-progress{font-weight:bolder}.sc-db-progress:where(code,kbd.sc-db-progress,samp).sc-db-progress{font-family:monospace, monospace;font-size:1em}.sc-db-progress:where(small){font-size:80%}.sc-db-progress:where(table){border-color:currentColor;text-indent:0}.sc-db-progress:where(button,input.sc-db-progress,select).sc-db-progress{margin:0}.sc-db-progress:where(button){text-transform:none}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress{-webkit-appearance:button}.sc-db-progress:where(progress){vertical-align:baseline}.sc-db-progress:where(select){text-transform:none}.sc-db-progress:where(textarea){margin:0}.sc-db-progress:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-progress::-webkit-inner-spin-button,.sc-db-progress::-webkit-outer-spin-button{height:auto}.sc-db-progress::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-progress::-webkit-search-decoration{-webkit-appearance:none}.sc-db-progress::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=color i].sc-db-progress,[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress::-moz-focus-inner{border-style:none;padding:0}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=color i].sc-db-progress,[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress::-moz-focusring{outline:1px dotted ButtonText}.sc-db-progress:where(:-moz-ui-invalid){box-shadow:none}.sc-db-progress:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-progress:where(dialog:not([open])){display:none}.sc-db-progress:where(summary){display:list-item}html.sc-db-progress,.sc-db-progress-h{box-sizing:border-box}*.sc-db-progress,.sc-db-progress::before,.sc-db-progress::after{box-sizing:inherit}img.sc-db-progress,embed.sc-db-progress,iframe.sc-db-progress,object.sc-db-progress,video.sc-db-progress{height:auto;max-width:100%}iframe.sc-db-progress{border:0}nav.sc-db-progress ol.sc-db-progress,nav.sc-db-progress ul.sc-db-progress,[role=navigation].sc-db-progress ol.sc-db-progress,[role=navigation].sc-db-progress ul.sc-db-progress{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}.sc-db-progress:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-progress:is(a,button.sc-db-progress,input.sc-db-progress,textarea.sc-db-progress,summary).sc-db-progress{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-progress:is(a,button.sc-db-progress,input.sc-db-progress,textarea.sc-db-progress,summary).sc-db-progress:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body.sc-db-progress,.sc-db-progress-h,div.sc-db-progress,button.sc-db-progress,input.sc-db-progress,select.sc-db-progress,textarea.sc-db-progress{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-progress{color:inherit}.elm-progress.sc-db-progress progress.sc-db-progress{--progress-value--backgroundColor:#ec0016}.elm-progress.sc-db-progress progress.sc-db-progress{appearance:none;background-color:#fcfdfd;border:none;box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);height:0.25rem;vertical-align:middle}.elm-progress.sc-db-progress progress.sc-db-progress::-webkit-progress-bar{background-color:#fcfdfd}.elm-progress.sc-db-progress progress.sc-db-progress::-webkit-progress-value{background-color:var(--progress-value--backgroundColor)}.elm-progress.sc-db-progress progress.sc-db-progress::-moz-progress-bar{background-color:var(--progress-value--backgroundColor)}.elm-progress.sc-db-progress progress.sc-db-progress::-ms-fill{background-color:var(--progress-value--backgroundColor);border:none}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-webkit-progress-value{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-moz-progress-bar{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-ms-fill{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate{animation-duration:2.1s;animation-iteration-count:infinite;animation-name:elmProgressMoveIndeterminate;animation-timing-function:linear;animation-timing-function:cubic-bezier(0.65, 0.815, 0.735, 0.395);background-color:#fcfdfd;background-image:linear-gradient(to right, #ec0016 100%, #fcfdfd 100%);background-position:top left;background-repeat:no-repeat;background-size:150% 150%}@media (prefers-reduced-motion: reduce){.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate{animation-duration:15s}}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate::-webkit-progress-bar{background-color:transparent}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate::-moz-progress-bar{background-color:transparent}@supports (background: conic-gradient(#000, #fff)){.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress{--fill:calc(var(--progress-conic) * 1%);background:conic-gradient(var(--progress-value--backgroundColor) var(--fill), #fff 0);border:0;border-radius:50%;height:4.6875rem;width:4.6875rem}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-inner-element,.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-bar,.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-value{display:none}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-moz-progress-bar{background:none}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress+output.sc-db-progress{align-items:center;background:#fdfdfd;border-radius:50%;box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.08), inset 0 5px 30px rgba(0, 0, 0, 0.05);display:block;display:flex;height:3.4375rem;justify-content:center;position:absolute;transform:translate(0.625rem, -4.0625rem);width:3.4375rem}}@keyframes elmProgressMoveIndeterminate{0%{background-position:-35% 0;background-size:35% 100%}60%{background-position:101% 0;background-size:65% 100%}100%{background-position:101% 0;background-size:1% 100%}}');cov_2bz3elvcnw().s[1]++;var DbProgress=function(){function DbProgress(hostRef){cov_2bz3elvcnw().f[0]++,cov_2bz3elvcnw().s[2]++,(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_2bz3elvcnw().s[3]++,this.htmlid="db-"+(0,_utils_db900ae9_js__WEBPACK_IMPORTED_MODULE_1__.u)(),cov_2bz3elvcnw().s[4]++,this.percentagesign="%",cov_2bz3elvcnw().s[5]++,this.indeterminate=!1}return DbProgress.prototype.render=function render(){var _ref,_ref2;return cov_2bz3elvcnw().f[1]++,cov_2bz3elvcnw().s[6]++,(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"elm-progress"},(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)("progress",Object.assign({value:this.value,max:this.max,id:this.htmlid},{indeterminate:this.indeterminate},{style:!0===this.circle?(cov_2bz3elvcnw().b[0][0]++,_ref={},_ref["--progress-conic"]=""+this.value,_ref):(cov_2bz3elvcnw().b[0][1]++,_ref2={},_ref2[""]="",_ref2)})),(cov_2bz3elvcnw().b[1][0]++,!this.indeterminate&&(cov_2bz3elvcnw().b[1][1]++,(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)("output",{htmlFor:this.htmlid},this.value,this.percentagesign))))},DbProgress}();cov_2bz3elvcnw().s[7]++,DbProgress.style=dbProgressCss}}]);