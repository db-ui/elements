"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[397],{"./packages/db-ui-elements-stencil/dist/esm/db-chip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_chip:()=>DbChip});var _index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-545aea95.js"),_utils_a63157eb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js");function cov_2337hc8xnq(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-chip.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"f5d99f63612abd159495ad1f4d52843cf0767e07"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-chip.entry.js",statementMap:{0:{start:{line:4,column:18},end:{line:4,column:4767}},1:{start:{line:6,column:15},end:{line:21,column:1}},2:{start:{line:8,column:4},end:{line:8,column:36}},3:{start:{line:9,column:4},end:{line:9,column:32}},4:{start:{line:10,column:4},end:{line:10,column:26}},5:{start:{line:11,column:4},end:{line:11,column:26}},6:{start:{line:12,column:4},end:{line:12,column:31}},7:{start:{line:13,column:4},end:{line:13,column:37}},8:{start:{line:14,column:4},end:{line:14,column:24}},9:{start:{line:15,column:4},end:{line:15,column:26}},10:{start:{line:16,column:4},end:{line:16,column:29}},11:{start:{line:19,column:4},end:{line:19,column:524}},12:{start:{line:22,column:0},end:{line:22,column:25}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:2},end:{line:7,column:3}},loc:{start:{line:7,column:23},end:{line:17,column:3}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:18,column:2},end:{line:18,column:3}},loc:{start:{line:18,column:11},end:{line:20,column:3}},line:18}},branchMap:{0:{loc:{start:{line:19,column:64},end:{line:19,column:113}},type:"cond-expr",locations:[{start:{line:19,column:93},end:{line:19,column:103}},{start:{line:19,column:106},end:{line:19,column:113}}],line:19},1:{loc:{start:{line:19,column:339},end:{line:19,column:414}},type:"cond-expr",locations:[{start:{line:19,column:351},end:{line:19,column:407}},{start:{line:19,column:410},end:{line:19,column:414}}],line:19},2:{loc:{start:{line:19,column:433},end:{line:19,column:520}},type:"cond-expr",locations:[{start:{line:19,column:451},end:{line:19,column:512}},{start:{line:19,column:516},end:{line:19,column:520}}],line:19}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f5d99f63612abd159495ad1f4d52843cf0767e07"});var actualCoverage=coverage[path];return cov_2337hc8xnq=function(){return actualCoverage},actualCoverage}cov_2337hc8xnq();var dbChipCss=(cov_2337hc8xnq().s[0]++,'@charset "UTF-8";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.elm-chip+label{align-items:center;border:solid 1px #878c96;border-radius:0.25rem;display:inline-flex;font-size:0.875rem;height:1.75rem;justify-content:center;padding-left:0.4375rem;padding-right:0.4375rem;text-decoration:none;text-transform:capitalize;white-space:nowrap}.elm-chip+label[data-icon]::before,.elm-chip+label[data-icon-before]::before{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-chip+label[data-icon-after]::after{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-chip:not(:disabled,:checked)+label:hover{background-color:rgba(40, 45, 55, 0.03)}.elm-chip:checked+label{background-color:#282d37;border-color:transparent;color:#ffffff}.elm-chip:checked+label[data-variant=warning]{background-color:#f75f00}.elm-chip:checked+label[data-variant=error]{background-color:#ec0016}.elm-chip:checked+label[data-variant=informative]{background-color:#0087b9}.elm-chip:checked+label[data-variant=success]{background-color:#508b1b}.elm-chip:checked+label[data-variant=poi-essen-trinken]{background-color:#f39200;color:#282d37}.elm-chip:checked+label[data-variant=poi-einkaufen]{background-color:#814997}.elm-chip:checked+label[data-variant=poi-gesundheit]{background-color:#a9455d}.elm-chip:checked+label[data-variant=poi-kunst-kultur]{background-color:#e93e8f}.elm-chip:checked+label[data-variant=poi-wissenswertes]{background-color:#858379}.elm-chip:checked+label[data-variant=poi-freizeit]{background-color:#408335}.elm-chip:checked+label[data-variant=poi-zivile-rel-einrichtungen]{background-color:#00a099}.elm-chip:checked+label[data-variant=poi-dienstleistungen]{background-color:#309fd1;color:#282d37}.elm-chip:checked+label[data-variant=poi-db-services-einrichtung]{background-color:#0c3992}.elm-chip:checked+label[data-variant=poi-wegeleitung]{background-color:#3c414b}.elm-chip:disabled+label{opacity:0.5}.elm-chip[type=checkbox],.elm-chip[type=radio]{display:none}');cov_2337hc8xnq().s[1]++;var DbChip=function(){function DbChip(hostRef){cov_2337hc8xnq().f[0]++,cov_2337hc8xnq().s[2]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_2337hc8xnq().s[3]++,this.datatype="selection",cov_2337hc8xnq().s[4]++,this.disabled=!1,cov_2337hc8xnq().s[5]++,this.icon=void 0,cov_2337hc8xnq().s[6]++,this.iconafter=void 0,cov_2337hc8xnq().s[7]++,this.input_id="chip-"+(0,_utils_a63157eb_js__WEBPACK_IMPORTED_MODULE_1__.u)(),cov_2337hc8xnq().s[8]++,this.name="chips",cov_2337hc8xnq().s[9]++,this.selected=!1,cov_2337hc8xnq().s[10]++,this.variant=void 0}return DbChip.prototype.render=function render(){return cov_2337hc8xnq().f[1]++,cov_2337hc8xnq().s[11]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{class:"elm-chip",type:"filter"===this.datatype?(cov_2337hc8xnq().b[0][0]++,"checkbox"):(cov_2337hc8xnq().b[0][1]++,"radio"),id:this.input_id,"data-type":this.datatype,disabled:this.disabled,name:this.name,checked:this.selected}),(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.input_id,role:"button","aria-hidden":"true","data-variant":this.variant},this.icon?(cov_2337hc8xnq().b[1][0]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("db-icon",{variant:"20-outline",icon:this.icon})):(cov_2337hc8xnq().b[1][1]++,null),(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),this.iconafter?(cov_2337hc8xnq().b[2][0]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("db-icon",{variant:"20-outline",icon:this.iconafter})):(cov_2337hc8xnq().b[2][1]++,null)))},DbChip}();cov_2337hc8xnq().s[12]++,DbChip.style=dbChipCss},"./packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_1ksbx7a1p8(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js",statementMap:{0:{start:{line:1,column:13},end:{line:4,column:1}},1:{start:{line:3,column:2},end:{line:3,column:113}},2:{start:{line:5,column:27},end:{line:11,column:1}},3:{start:{line:6,column:2},end:{line:7,column:14}},4:{start:{line:7,column:4},end:{line:7,column:14}},5:{start:{line:8,column:2},end:{line:10,column:16}},6:{start:{line:9,column:19},end:{line:9,column:106}},7:{start:{line:17,column:44},end:{line:28,column:1}},8:{start:{line:18,column:2},end:{line:27,column:3}},9:{start:{line:19,column:4},end:{line:26,column:7}},10:{start:{line:20,column:6},end:{line:22,column:7}},11:{start:{line:21,column:8},end:{line:21,column:52}},12:{start:{line:23,column:6},end:{line:25,column:7}},13:{start:{line:24,column:8},end:{line:24,column:60}},14:{start:{line:33,column:18},end:{line:46,column:1}},15:{start:{line:34,column:2},end:{line:45,column:3}},16:{start:{line:35,column:4},end:{line:37,column:5}},17:{start:{line:36,column:6},end:{line:36,column:30}},18:{start:{line:38,column:4},end:{line:39,column:18}},19:{start:{line:39,column:6},end:{line:39,column:18}},20:{start:{line:40,column:4},end:{line:41,column:18}},21:{start:{line:41,column:6},end:{line:41,column:18}},22:{start:{line:44,column:4},end:{line:44,column:17}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:13},end:{line:1,column:14}},loc:{start:{line:1,column:19},end:{line:4,column:1}},line:1},1:{name:"(anonymous_1)",decl:{start:{line:5,column:27},end:{line:5,column:28}},loc:{start:{line:5,column:41},end:{line:11,column:1}},line:5},2:{name:"(anonymous_2)",decl:{start:{line:9,column:9},end:{line:9,column:10}},loc:{start:{line:9,column:19},end:{line:9,column:106}},line:9},3:{name:"(anonymous_3)",decl:{start:{line:17,column:44},end:{line:17,column:45}},loc:{start:{line:17,column:63},end:{line:28,column:1}},line:17},4:{name:"(anonymous_4)",decl:{start:{line:19,column:38},end:{line:19,column:39}},loc:{start:{line:19,column:49},end:{line:26,column:5}},line:19},5:{name:"(anonymous_5)",decl:{start:{line:33,column:18},end:{line:33,column:19}},loc:{start:{line:33,column:28},end:{line:46,column:1}},line:33}},branchMap:{0:{loc:{start:{line:3,column:9},end:{line:3,column:112}},type:"binary-expr",locations:[{start:{line:3,column:10},end:{line:3,column:83}},{start:{line:3,column:88},end:{line:3,column:112}}],line:3},1:{loc:{start:{line:3,column:10},end:{line:3,column:83}},type:"cond-expr",locations:[{start:{line:3,column:59},end:{line:3,column:65}},{start:{line:3,column:68},end:{line:3,column:83}}],line:3},2:{loc:{start:{line:3,column:10},end:{line:3,column:56}},type:"binary-expr",locations:[{start:{line:3,column:10},end:{line:3,column:39}},{start:{line:3,column:43},end:{line:3,column:56}}],line:3},3:{loc:{start:{line:6,column:2},end:{line:7,column:14}},type:"if",locations:[{start:{line:6,column:2},end:{line:7,column:14}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:6},4:{loc:{start:{line:18,column:2},end:{line:27,column:3}},type:"if",locations:[{start:{line:18,column:2},end:{line:27,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:18},5:{loc:{start:{line:20,column:6},end:{line:22,column:7}},type:"if",locations:[{start:{line:20,column:6},end:{line:22,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:20},6:{loc:{start:{line:23,column:6},end:{line:25,column:7}},type:"if",locations:[{start:{line:23,column:6},end:{line:25,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:23},7:{loc:{start:{line:35,column:4},end:{line:37,column:5}},type:"if",locations:[{start:{line:35,column:4},end:{line:37,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:35},8:{loc:{start:{line:38,column:4},end:{line:39,column:18}},type:"if",locations:[{start:{line:38,column:4},end:{line:39,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:38},9:{loc:{start:{line:40,column:4},end:{line:41,column:18}},type:"if",locations:[{start:{line:40,column:4},end:{line:41,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:40}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"419736e050bddf7067643ef18c02cc649e9e007b"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"419736e050bddf7067643ef18c02cc649e9e007b"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1ksbx7a1p8=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{a:()=>addIconVariantToAllDbLinksRecursive,g:()=>getDefaultLinkData,p:()=>parseData,u:()=>uuid}),cov_1ksbx7a1p8(),cov_1ksbx7a1p8().s[0]++;var uuid=function uuid(){var _a;return cov_1ksbx7a1p8().f[0]++,cov_1ksbx7a1p8().s[1]++,cov_1ksbx7a1p8().b[0][0]++,cov_1ksbx7a1p8().b[2][0]++,(null===(_a=window.crypto)||(cov_1ksbx7a1p8().b[2][1]++,void 0===_a)?void cov_1ksbx7a1p8().b[1][0]++:(cov_1ksbx7a1p8().b[1][1]++,_a.randomUUID()))||(cov_1ksbx7a1p8().b[0][1]++,Math.random().toString())};cov_1ksbx7a1p8().s[2]++;var getDefaultLinkData=function getDefaultLinkData(compData){return cov_1ksbx7a1p8().f[1]++,cov_1ksbx7a1p8().s[3]++,compData?(cov_1ksbx7a1p8().b[3][1]++,cov_1ksbx7a1p8().s[5]++,compData.map((function(data){return cov_1ksbx7a1p8().f[2]++,cov_1ksbx7a1p8().s[6]++,'<li><db-link href="'+data.href+'" target="'+data.target+'">'+data.label+"</db-link></li>"})).join("\n")):(cov_1ksbx7a1p8().b[3][0]++,cov_1ksbx7a1p8().s[4]++,"")};cov_1ksbx7a1p8().s[7]++;var addIconVariantToAllDbLinksRecursive=function addIconVariantToAllDbLinksRecursive(host,variant){cov_1ksbx7a1p8().f[3]++,cov_1ksbx7a1p8().s[8]++,host.children?(cov_1ksbx7a1p8().b[4][0]++,cov_1ksbx7a1p8().s[9]++,Array.from(host.children).forEach((function(child){cov_1ksbx7a1p8().f[4]++,cov_1ksbx7a1p8().s[10]++,"db-link"===child.tagName.toLowerCase()?(cov_1ksbx7a1p8().b[5][0]++,cov_1ksbx7a1p8().s[11]++,child.setAttribute("icon-variant",variant)):cov_1ksbx7a1p8().b[5][1]++,cov_1ksbx7a1p8().s[12]++,child.children?(cov_1ksbx7a1p8().b[6][0]++,cov_1ksbx7a1p8().s[13]++,addIconVariantToAllDbLinksRecursive(child,variant)):cov_1ksbx7a1p8().b[6][1]++}))):cov_1ksbx7a1p8().b[4][1]++};cov_1ksbx7a1p8().s[14]++;var parseData=function parseData(item){cov_1ksbx7a1p8().f[5]++,cov_1ksbx7a1p8().s[15]++;try{if(cov_1ksbx7a1p8().s[16]++,"string"==typeof item)return cov_1ksbx7a1p8().b[7][0]++,cov_1ksbx7a1p8().s[17]++,JSON.parse(item);if(cov_1ksbx7a1p8().b[7][1]++,cov_1ksbx7a1p8().s[18]++,"object"==typeof item)return cov_1ksbx7a1p8().b[8][0]++,cov_1ksbx7a1p8().s[19]++,item;if(cov_1ksbx7a1p8().b[8][1]++,cov_1ksbx7a1p8().s[20]++,item instanceof Array)return cov_1ksbx7a1p8().b[9][0]++,cov_1ksbx7a1p8().s[21]++,item;cov_1ksbx7a1p8().b[9][1]++}catch(error){return cov_1ksbx7a1p8().s[22]++,!1}}}}]);