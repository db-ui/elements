"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[198],{"./packages/db-ui-elements-stencil/dist/esm/db-progress.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_progress:()=>DbProgress});var _index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-545aea95.js"),_utils_a63157eb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js");function cov_2bz3elvcnw(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-progress.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"8dd4c18097cc5b322725f246ed33729c6a19da29"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-progress.entry.js",statementMap:{0:{start:{line:4,column:22},end:{line:4,column:7538}},1:{start:{line:6,column:19},end:{line:21,column:1}},2:{start:{line:8,column:4},end:{line:8,column:36}},3:{start:{line:9,column:4},end:{line:9,column:27}},4:{start:{line:10,column:4},end:{line:10,column:25}},5:{start:{line:11,column:4},end:{line:11,column:39}},6:{start:{line:12,column:4},end:{line:12,column:30}},7:{start:{line:13,column:4},end:{line:13,column:28}},8:{start:{line:14,column:4},end:{line:14,column:31}},9:{start:{line:17,column:4},end:{line:19,column:220}},10:{start:{line:22,column:0},end:{line:22,column:33}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:2},end:{line:7,column:3}},loc:{start:{line:7,column:23},end:{line:15,column:3}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:16,column:2},end:{line:16,column:3}},loc:{start:{line:16,column:11},end:{line:20,column:3}},line:16}},branchMap:{0:{loc:{start:{line:17,column:179},end:{line:19,column:22}},type:"cond-expr",locations:[{start:{line:18,column:10},end:{line:18,column:51}},{start:{line:19,column:10},end:{line:19,column:22}}],line:17},1:{loc:{start:{line:19,column:72},end:{line:19,column:217}},type:"binary-expr",locations:[{start:{line:19,column:72},end:{line:19,column:91}},{start:{line:19,column:96},end:{line:19,column:216}}],line:19}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8dd4c18097cc5b322725f246ed33729c6a19da29"});var actualCoverage=coverage[path];return cov_2bz3elvcnw=function(){return actualCoverage},actualCoverage}cov_2bz3elvcnw();var dbProgressCss=(cov_2bz3elvcnw().s[0]++,'@charset "UTF-8";.sc-db-progress:where(html,).sc-db-progress-h{line-height:1.15}.sc-db-progress:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-progress:where(dl,ol.sc-db-progress,ul).sc-db-progress .sc-db-progress:where(dl,ol.sc-db-progress,ul).sc-db-progress{margin-block-end:0;margin-block-start:0}.sc-db-progress:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-progress:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-progress:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}.sc-db-progress:where(b,strong).sc-db-progress{font-weight:bolder}.sc-db-progress:where(code,kbd.sc-db-progress,samp).sc-db-progress{font-family:monospace, monospace;font-size:1em}.sc-db-progress:where(small){font-size:80%}.sc-db-progress:where(table){border-color:currentColor;text-indent:0}.sc-db-progress:where(button,input.sc-db-progress,select).sc-db-progress{margin:0}.sc-db-progress:where(button){text-transform:none}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress{-webkit-appearance:button}.sc-db-progress:where(progress){vertical-align:baseline}.sc-db-progress:where(select){text-transform:none}.sc-db-progress:where(textarea){margin:0}.sc-db-progress:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-progress::-webkit-inner-spin-button,.sc-db-progress::-webkit-outer-spin-button{height:auto}.sc-db-progress::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-progress::-webkit-search-decoration{-webkit-appearance:none}.sc-db-progress::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=color i].sc-db-progress,[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress::-moz-focus-inner{border-style:none;padding:0}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=color i].sc-db-progress,[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress::-moz-focusring{outline:1px dotted ButtonText}.sc-db-progress:where(:-moz-ui-invalid){box-shadow:none}.sc-db-progress:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-progress:where(dialog:not([open])){display:none}.sc-db-progress:where(summary){display:list-item}html.sc-db-progress,.sc-db-progress-h{box-sizing:var(--db-box-sizing, border-box)}*.sc-db-progress,.sc-db-progress::before,.sc-db-progress::after{box-sizing:inherit}img.sc-db-progress,embed.sc-db-progress,iframe.sc-db-progress,object.sc-db-progress,video.sc-db-progress{height:auto;max-width:100%}iframe.sc-db-progress{border:0}nav.sc-db-progress ol.sc-db-progress,nav.sc-db-progress ul.sc-db-progress,[role=navigation].sc-db-progress ol.sc-db-progress,[role=navigation].sc-db-progress ul.sc-db-progress{list-style:none;margin:0;padding:0}.sc-db-progress:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-progress:is(a,button.sc-db-progress,input.sc-db-progress,textarea.sc-db-progress,summary).sc-db-progress{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-progress:is(a,button.sc-db-progress,input.sc-db-progress,textarea.sc-db-progress,summary).sc-db-progress:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}.sc-db-progress:where(ul){list-style-type:"•   "}.sc-db-progress:where(ul) li.sc-db-progress::marker{color:#ec0016}details.sc-db-progress>*.sc-db-progress,details.sc-db-progress>.sc-db-progress::before,details.sc-db-progress>.sc-db-progress::after{box-sizing:var(--db-box-sizing, border-box)}body.sc-db-progress,.sc-db-progress-h,div.sc-db-progress,button.sc-db-progress,input.sc-db-progress,select.sc-db-progress,textarea.sc-db-progress{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-progress{color:inherit}.elm-progress.sc-db-progress progress.sc-db-progress{--progress-value--backgroundColor:#ec0016}.elm-progress.sc-db-progress progress.sc-db-progress{appearance:none;background-color:#fcfdfd;border:none;height:0.25rem;vertical-align:middle}.elm-progress.sc-db-progress progress.sc-db-progress::-webkit-progress-bar{background-color:#fcfdfd}.elm-progress.sc-db-progress progress.sc-db-progress::-webkit-progress-value{background-color:var(--progress-value--backgroundColor)}.elm-progress.sc-db-progress progress.sc-db-progress::-moz-progress-bar{background-color:var(--progress-value--backgroundColor)}.elm-progress.sc-db-progress progress.sc-db-progress::-ms-fill{background-color:var(--progress-value--backgroundColor);border:none}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-webkit-progress-value{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-moz-progress-bar{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-ms-fill{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate{animation-duration:2.1s;animation-iteration-count:infinite;animation-name:elmProgressMoveIndeterminate;animation-timing-function:linear;animation-timing-function:cubic-bezier(0.65, 0.815, 0.735, 0.395);background-color:#fcfdfd;background-image:linear-gradient(to right, #ec0016 100%, #fcfdfd 100%);background-position:top left;background-repeat:no-repeat;background-size:150% 150%}@media (prefers-reduced-motion: reduce){.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate{animation-duration:15s}}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate::-webkit-progress-bar{background-color:transparent}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate::-moz-progress-bar{background-color:transparent}@supports (background: conic-gradient(#000, #fff)){.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress{--fill:calc(var(--progress-conic) * 1%);background:conic-gradient(var(--progress-value--backgroundColor) var(--fill), #fff 0);border:0;border-radius:50%;height:4.6875rem;width:4.6875rem}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-inner-element,.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-bar,.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-value{display:none}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-moz-progress-bar{background:none}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress+output.sc-db-progress,.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress+label.sc-db-progress{align-items:center;background:#fdfdfd;border-radius:50%;display:block;display:flex;height:3.4375rem;justify-content:center;position:absolute;transform:translate(0.625rem, -4.0625rem);width:3.4375rem}}@keyframes elmProgressMoveIndeterminate{0%{background-position:-35% 0;background-size:35% 100%}60%{background-position:101% 0;background-size:65% 100%}100%{background-position:101% 0;background-size:1% 100%}}');cov_2bz3elvcnw().s[1]++;var DbProgress=function(){function DbProgress(hostRef){cov_2bz3elvcnw().f[0]++,cov_2bz3elvcnw().s[2]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_2bz3elvcnw().s[3]++,this.value=void 0,cov_2bz3elvcnw().s[4]++,this.max=void 0,cov_2bz3elvcnw().s[5]++,this.htmlid="progress-"+(0,_utils_a63157eb_js__WEBPACK_IMPORTED_MODULE_1__.u)(),cov_2bz3elvcnw().s[6]++,this.percentagesign="%",cov_2bz3elvcnw().s[7]++,this.circle=void 0,cov_2bz3elvcnw().s[8]++,this.indeterminate=!1}return DbProgress.prototype.render=function render(){var _ref,_ref2;return cov_2bz3elvcnw().f[1]++,cov_2bz3elvcnw().s[9]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"elm-progress"},(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("progress",Object.assign({value:this.value,max:this.max,id:this.htmlid},{indeterminate:this.indeterminate},{style:!0===this.circle?(cov_2bz3elvcnw().b[0][0]++,_ref={},_ref["--progress-conic"]=""+this.value,_ref):(cov_2bz3elvcnw().b[0][1]++,_ref2={},_ref2[""]="",_ref2),"aria-describedby":this.htmlid+"-label"})),(cov_2bz3elvcnw().b[1][0]++,!this.indeterminate&&(cov_2bz3elvcnw().b[1][1]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.htmlid,id:this.htmlid+"-label","aria-hidden":"true"},this.value,this.percentagesign))))},DbProgress}();cov_2bz3elvcnw().s[10]++,DbProgress.style=dbProgressCss},"./packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_1ksbx7a1p8(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js",statementMap:{0:{start:{line:1,column:13},end:{line:4,column:1}},1:{start:{line:3,column:2},end:{line:3,column:113}},2:{start:{line:5,column:27},end:{line:11,column:1}},3:{start:{line:6,column:2},end:{line:7,column:14}},4:{start:{line:7,column:4},end:{line:7,column:14}},5:{start:{line:8,column:2},end:{line:10,column:16}},6:{start:{line:9,column:19},end:{line:9,column:106}},7:{start:{line:17,column:44},end:{line:28,column:1}},8:{start:{line:18,column:2},end:{line:27,column:3}},9:{start:{line:19,column:4},end:{line:26,column:7}},10:{start:{line:20,column:6},end:{line:22,column:7}},11:{start:{line:21,column:8},end:{line:21,column:52}},12:{start:{line:23,column:6},end:{line:25,column:7}},13:{start:{line:24,column:8},end:{line:24,column:60}},14:{start:{line:33,column:18},end:{line:46,column:1}},15:{start:{line:34,column:2},end:{line:45,column:3}},16:{start:{line:35,column:4},end:{line:37,column:5}},17:{start:{line:36,column:6},end:{line:36,column:30}},18:{start:{line:38,column:4},end:{line:39,column:18}},19:{start:{line:39,column:6},end:{line:39,column:18}},20:{start:{line:40,column:4},end:{line:41,column:18}},21:{start:{line:41,column:6},end:{line:41,column:18}},22:{start:{line:44,column:4},end:{line:44,column:17}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:13},end:{line:1,column:14}},loc:{start:{line:1,column:19},end:{line:4,column:1}},line:1},1:{name:"(anonymous_1)",decl:{start:{line:5,column:27},end:{line:5,column:28}},loc:{start:{line:5,column:41},end:{line:11,column:1}},line:5},2:{name:"(anonymous_2)",decl:{start:{line:9,column:9},end:{line:9,column:10}},loc:{start:{line:9,column:19},end:{line:9,column:106}},line:9},3:{name:"(anonymous_3)",decl:{start:{line:17,column:44},end:{line:17,column:45}},loc:{start:{line:17,column:63},end:{line:28,column:1}},line:17},4:{name:"(anonymous_4)",decl:{start:{line:19,column:38},end:{line:19,column:39}},loc:{start:{line:19,column:49},end:{line:26,column:5}},line:19},5:{name:"(anonymous_5)",decl:{start:{line:33,column:18},end:{line:33,column:19}},loc:{start:{line:33,column:28},end:{line:46,column:1}},line:33}},branchMap:{0:{loc:{start:{line:3,column:9},end:{line:3,column:112}},type:"binary-expr",locations:[{start:{line:3,column:10},end:{line:3,column:83}},{start:{line:3,column:88},end:{line:3,column:112}}],line:3},1:{loc:{start:{line:3,column:10},end:{line:3,column:83}},type:"cond-expr",locations:[{start:{line:3,column:59},end:{line:3,column:65}},{start:{line:3,column:68},end:{line:3,column:83}}],line:3},2:{loc:{start:{line:3,column:10},end:{line:3,column:56}},type:"binary-expr",locations:[{start:{line:3,column:10},end:{line:3,column:39}},{start:{line:3,column:43},end:{line:3,column:56}}],line:3},3:{loc:{start:{line:6,column:2},end:{line:7,column:14}},type:"if",locations:[{start:{line:6,column:2},end:{line:7,column:14}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:6},4:{loc:{start:{line:18,column:2},end:{line:27,column:3}},type:"if",locations:[{start:{line:18,column:2},end:{line:27,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:18},5:{loc:{start:{line:20,column:6},end:{line:22,column:7}},type:"if",locations:[{start:{line:20,column:6},end:{line:22,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:20},6:{loc:{start:{line:23,column:6},end:{line:25,column:7}},type:"if",locations:[{start:{line:23,column:6},end:{line:25,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:23},7:{loc:{start:{line:35,column:4},end:{line:37,column:5}},type:"if",locations:[{start:{line:35,column:4},end:{line:37,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:35},8:{loc:{start:{line:38,column:4},end:{line:39,column:18}},type:"if",locations:[{start:{line:38,column:4},end:{line:39,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:38},9:{loc:{start:{line:40,column:4},end:{line:41,column:18}},type:"if",locations:[{start:{line:40,column:4},end:{line:41,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:40}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"419736e050bddf7067643ef18c02cc649e9e007b"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"419736e050bddf7067643ef18c02cc649e9e007b"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1ksbx7a1p8=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{a:()=>addIconVariantToAllDbLinksRecursive,g:()=>getDefaultLinkData,p:()=>parseData,u:()=>uuid}),cov_1ksbx7a1p8(),cov_1ksbx7a1p8().s[0]++;var uuid=function uuid(){var _a;return cov_1ksbx7a1p8().f[0]++,cov_1ksbx7a1p8().s[1]++,cov_1ksbx7a1p8().b[0][0]++,cov_1ksbx7a1p8().b[2][0]++,(null===(_a=window.crypto)||(cov_1ksbx7a1p8().b[2][1]++,void 0===_a)?void cov_1ksbx7a1p8().b[1][0]++:(cov_1ksbx7a1p8().b[1][1]++,_a.randomUUID()))||(cov_1ksbx7a1p8().b[0][1]++,Math.random().toString())};cov_1ksbx7a1p8().s[2]++;var getDefaultLinkData=function getDefaultLinkData(compData){return cov_1ksbx7a1p8().f[1]++,cov_1ksbx7a1p8().s[3]++,compData?(cov_1ksbx7a1p8().b[3][1]++,cov_1ksbx7a1p8().s[5]++,compData.map((function(data){return cov_1ksbx7a1p8().f[2]++,cov_1ksbx7a1p8().s[6]++,'<li><db-link href="'+data.href+'" target="'+data.target+'">'+data.label+"</db-link></li>"})).join("\n")):(cov_1ksbx7a1p8().b[3][0]++,cov_1ksbx7a1p8().s[4]++,"")};cov_1ksbx7a1p8().s[7]++;var addIconVariantToAllDbLinksRecursive=function addIconVariantToAllDbLinksRecursive(host,variant){cov_1ksbx7a1p8().f[3]++,cov_1ksbx7a1p8().s[8]++,host.children?(cov_1ksbx7a1p8().b[4][0]++,cov_1ksbx7a1p8().s[9]++,Array.from(host.children).forEach((function(child){cov_1ksbx7a1p8().f[4]++,cov_1ksbx7a1p8().s[10]++,"db-link"===child.tagName.toLowerCase()?(cov_1ksbx7a1p8().b[5][0]++,cov_1ksbx7a1p8().s[11]++,child.setAttribute("icon-variant",variant)):cov_1ksbx7a1p8().b[5][1]++,cov_1ksbx7a1p8().s[12]++,child.children?(cov_1ksbx7a1p8().b[6][0]++,cov_1ksbx7a1p8().s[13]++,addIconVariantToAllDbLinksRecursive(child,variant)):cov_1ksbx7a1p8().b[6][1]++}))):cov_1ksbx7a1p8().b[4][1]++};cov_1ksbx7a1p8().s[14]++;var parseData=function parseData(item){cov_1ksbx7a1p8().f[5]++,cov_1ksbx7a1p8().s[15]++;try{if(cov_1ksbx7a1p8().s[16]++,"string"==typeof item)return cov_1ksbx7a1p8().b[7][0]++,cov_1ksbx7a1p8().s[17]++,JSON.parse(item);if(cov_1ksbx7a1p8().b[7][1]++,cov_1ksbx7a1p8().s[18]++,"object"==typeof item)return cov_1ksbx7a1p8().b[8][0]++,cov_1ksbx7a1p8().s[19]++,item;if(cov_1ksbx7a1p8().b[8][1]++,cov_1ksbx7a1p8().s[20]++,item instanceof Array)return cov_1ksbx7a1p8().b[9][0]++,cov_1ksbx7a1p8().s[21]++,item;cov_1ksbx7a1p8().b[9][1]++}catch(error){return cov_1ksbx7a1p8().s[22]++,!1}}}}]);