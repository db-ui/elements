"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[212],{"./packages/db-ui-elements-stencil/dist/esm/db-textarea.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_textarea:()=>DbTextarea});var _index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-545aea95.js"),_utils_a63157eb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js");function cov_jd1uvxy9q(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-textarea.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"8d9e2872de614c86f3792e41ac4b474a3edf942e"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-textarea.entry.js",statementMap:{0:{start:{line:4,column:22},end:{line:4,column:7658}},1:{start:{line:6,column:19},end:{line:43,column:1}},2:{start:{line:8,column:4},end:{line:8,column:36}},3:{start:{line:9,column:4},end:{line:9,column:53}},4:{start:{line:10,column:4},end:{line:10,column:23}},5:{start:{line:11,column:4},end:{line:11,column:33}},6:{start:{line:12,column:4},end:{line:12,column:34}},7:{start:{line:13,column:4},end:{line:13,column:31}},8:{start:{line:14,column:4},end:{line:14,column:26}},9:{start:{line:15,column:4},end:{line:15,column:33}},10:{start:{line:16,column:4},end:{line:16,column:29}},11:{start:{line:17,column:4},end:{line:17,column:30}},12:{start:{line:18,column:4},end:{line:18,column:41}},13:{start:{line:19,column:4},end:{line:19,column:27}},14:{start:{line:20,column:4},end:{line:20,column:31}},15:{start:{line:21,column:4},end:{line:21,column:31}},16:{start:{line:22,column:4},end:{line:22,column:26}},17:{start:{line:23,column:4},end:{line:23,column:33}},18:{start:{line:24,column:4},end:{line:24,column:30}},19:{start:{line:25,column:4},end:{line:25,column:30}},20:{start:{line:26,column:4},end:{line:26,column:26}},21:{start:{line:27,column:4},end:{line:27,column:37}},22:{start:{line:28,column:4},end:{line:28,column:26}},23:{start:{line:29,column:4},end:{line:29,column:27}},24:{start:{line:33,column:4},end:{line:33,column:30}},25:{start:{line:34,column:4},end:{line:34,column:83}},26:{start:{line:37,column:4},end:{line:41,column:313}},27:{start:{line:40,column:8},end:{line:40,column:51}},28:{start:{line:41,column:30},end:{line:41,column:54}},29:{start:{line:44,column:0},end:{line:44,column:33}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:2},end:{line:7,column:3}},loc:{start:{line:7,column:23},end:{line:30,column:3}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:31,column:2},end:{line:31,column:3}},loc:{start:{line:31,column:22},end:{line:35,column:3}},line:31},2:{name:"(anonymous_2)",decl:{start:{line:36,column:2},end:{line:36,column:3}},loc:{start:{line:36,column:11},end:{line:42,column:3}},line:36},3:{name:"(anonymous_3)",decl:{start:{line:37,column:550},end:{line:37,column:551}},loc:{start:{line:37,column:561},end:{line:41,column:7}},line:37},4:{name:"(anonymous_4)",decl:{start:{line:41,column:19},end:{line:41,column:20}},loc:{start:{line:41,column:30},end:{line:41,column:54}},line:41}},branchMap:{0:{loc:{start:{line:34,column:17},end:{line:34,column:82}},type:"cond-expr",locations:[{start:{line:34,column:65},end:{line:34,column:71}},{start:{line:34,column:74},end:{line:34,column:82}}],line:34},1:{loc:{start:{line:34,column:17},end:{line:34,column:62}},type:"binary-expr",locations:[{start:{line:34,column:17},end:{line:34,column:45}},{start:{line:34,column:49},end:{line:34,column:62}}],line:34},2:{loc:{start:{line:41,column:76},end:{line:41,column:207}},type:"binary-expr",locations:[{start:{line:41,column:76},end:{line:41,column:90}},{start:{line:41,column:95},end:{line:41,column:206}}],line:41},3:{loc:{start:{line:41,column:209},end:{line:41,column:310}},type:"binary-expr",locations:[{start:{line:41,column:209},end:{line:41,column:225}},{start:{line:41,column:230},end:{line:41,column:309}}],line:41}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8d9e2872de614c86f3792e41ac4b474a3edf942e"});var actualCoverage=coverage[path];return cov_jd1uvxy9q=function(){return actualCoverage},actualCoverage}cov_jd1uvxy9q();var dbTextareaCss=(cov_jd1uvxy9q().s[0]++,'@charset "UTF-8";.sc-db-textarea:where(html){line-height:1.15}.sc-db-textarea:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-textarea:where(dl,ol.sc-db-textarea,ul).sc-db-textarea .sc-db-textarea:where(dl,ol.sc-db-textarea,ul).sc-db-textarea{margin-block-end:0;margin-block-start:0}.sc-db-textarea:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-textarea:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-textarea:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}.sc-db-textarea:where(b,strong).sc-db-textarea{font-weight:bolder}.sc-db-textarea:where(code,kbd.sc-db-textarea,samp).sc-db-textarea{font-family:monospace, monospace;font-size:1em}.sc-db-textarea:where(small){font-size:80%}.sc-db-textarea:where(table){border-color:currentColor;text-indent:0}.sc-db-textarea:where(button,input.sc-db-textarea,select).sc-db-textarea{margin:0}.sc-db-textarea:where(button){text-transform:none}.sc-db-textarea:where(button,input.sc-db-textarea:is([type=button i],[type=reset i].sc-db-textarea,[type=submit i])).sc-db-textarea{-webkit-appearance:button}.sc-db-textarea:where(progress){vertical-align:baseline}.sc-db-textarea:where(select){text-transform:none}.sc-db-textarea:where(textarea){margin:0}.sc-db-textarea:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-textarea::-webkit-inner-spin-button,.sc-db-textarea::-webkit-outer-spin-button{height:auto}.sc-db-textarea::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-textarea::-webkit-search-decoration{-webkit-appearance:none}.sc-db-textarea::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-textarea:where(button,input.sc-db-textarea:is([type=button i],[type=color i].sc-db-textarea,[type=reset i].sc-db-textarea,[type=submit i])).sc-db-textarea::-moz-focus-inner{border-style:none;padding:0}.sc-db-textarea:where(button,input.sc-db-textarea:is([type=button i],[type=color i].sc-db-textarea,[type=reset i].sc-db-textarea,[type=submit i])).sc-db-textarea::-moz-focusring{outline:1px dotted ButtonText}.sc-db-textarea:where(:-moz-ui-invalid){box-shadow:none}.sc-db-textarea:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-textarea:where(dialog:not([open])){display:none}.sc-db-textarea:where(summary){display:list-item}html.sc-db-textarea,.sc-db-textarea-h{box-sizing:border-box}*.sc-db-textarea,.sc-db-textarea::before,.sc-db-textarea::after{box-sizing:inherit}img.sc-db-textarea,embed.sc-db-textarea,iframe.sc-db-textarea,object.sc-db-textarea,video.sc-db-textarea{height:auto;max-width:100%}iframe.sc-db-textarea{border:0}nav.sc-db-textarea ol.sc-db-textarea,nav.sc-db-textarea ul.sc-db-textarea,[role=navigation].sc-db-textarea ol.sc-db-textarea,[role=navigation].sc-db-textarea ul.sc-db-textarea{list-style:none;margin:0;padding:0}.sc-db-textarea:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-textarea:is(a,button.sc-db-textarea,input.sc-db-textarea,textarea.sc-db-textarea,summary).sc-db-textarea{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-textarea:is(a,button.sc-db-textarea,input.sc-db-textarea,textarea.sc-db-textarea,summary).sc-db-textarea:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}.sc-db-textarea:where(ul){list-style-type:"•   "}.sc-db-textarea:where(ul) li.sc-db-textarea::marker{color:#ec0016}body.sc-db-textarea,.sc-db-textarea-h,div.sc-db-textarea,button.sc-db-textarea,input.sc-db-textarea,select.sc-db-textarea,textarea.sc-db-textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-textarea{color:inherit}.elm-textarea.sc-db-textarea{--formElement---borderTopColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  );--formElement---borderRightColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  );--formElement---borderBottomColor:var(\n  \t--formElement---borderColor,\n  \trgba(40, 45, 55, 0.5)\n  );--formElement---borderLeftColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  );border-radius:4px;caret-color:#ec0016;color:#282d37}.elm-textarea.sc-db-textarea~.description.sc-db-textarea{color:#646973;font-size:0.875rem;padding:0.375rem 0.625rem}.elm-textarea[data-variant=semitransparent].sc-db-textarea,.sc-db-textarea:where(.elm-textarea){--formElement---borderColor:rgba(40, 45, 55, 0.5);background-color:rgba(40, 45, 55, 0.05);border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-left-color:transparent;border-right:1px solid var(--formElement---borderRightColor);border-right-color:transparent;border-top:1px solid var(--formElement---borderTopColor);border-top-color:transparent}.elm-textarea[data-variant=white].sc-db-textarea{--formElement---borderColor:rgba(40, 45, 55, 0.5);background-color:#ffffff;border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-left-color:transparent;border-right:1px solid var(--formElement---borderRightColor);border-right-color:transparent;border-top:1px solid var(--formElement---borderTopColor);border-top-color:transparent}.elm-textarea[data-variant=solid].sc-db-textarea{--formElement---borderColor:rgba(40, 45, 55, 0.5);background-color:#f0f3f5;border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-left-color:transparent;border-right:1px solid var(--formElement---borderRightColor);border-right-color:transparent;border-top:1px solid var(--formElement---borderTopColor);border-top-color:transparent}.elm-textarea[data-variant=outline].sc-db-textarea{--formElement---borderColor:rgba(40, 45, 55, 0.25);background-color:transparent;border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-right:1px solid var(--formElement---borderRightColor);border-top:1px solid var(--formElement---borderTopColor)}.elm-textarea.sc-db-textarea:not([aria-invalid]):not(:placeholder-shown):valid{--formElement---borderColor:#2a7230}.elm-textarea.sc-db-textarea:not([aria-invalid]):not(:placeholder-shown):invalid{--formElement---borderColor:#ec0016}[aria-invalid=true].elm-textarea.sc-db-textarea{--formElement---borderColor:#ec0016}.elm-textarea.sc-db-textarea{display:block;font-size:1rem;height:2.75rem;line-height:1.5rem;max-width:100%;padding:0.375rem 0.625rem;resize:vertical;width:100%}.elm-textarea.sc-db-textarea:not([rows]){max-height:37.5rem;min-height:7.5rem}.elm-textarea[rows].sc-db-textarea{height:initial}.elm-textarea.sc-db-textarea:focus:not(:disabled),.elm-textarea.sc-db-textarea:hover:not(:disabled){--formElement---borderColor:#878c96}.elm-textarea.sc-db-textarea:disabled,.elm-textarea.sc-db-textarea:disabled+.elm-label.sc-db-textarea,fieldset.sc-db-textarea:disabled .elm-textarea.sc-db-textarea,fieldset.sc-db-textarea:disabled .elm-textarea.sc-db-textarea+.elm-label.sc-db-textarea{opacity:0.4}.elm-textarea.sc-db-textarea+output.sc-db-textarea{float:right;margin-top:0.75rem}.elm-textarea.sc-db-textarea+output.sc-db-textarea,.elm-textarea.sc-db-textarea+output.sc-db-textarea+.description.sc-db-textarea{color:#646973;font-size:0.875rem;padding:0.375rem 0.625rem}');cov_jd1uvxy9q().s[1]++;var DbTextarea=function(){function DbTextarea(hostRef){cov_jd1uvxy9q().f[0]++,cov_jd1uvxy9q().s[2]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_jd1uvxy9q().s[3]++,this.dbChange=(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"dbChange",7),cov_jd1uvxy9q().s[4]++,this.valueSize=0,cov_jd1uvxy9q().s[5]++,this.ariainvalid=void 0,cov_jd1uvxy9q().s[6]++,this.ariarequired=void 0,cov_jd1uvxy9q().s[7]++,this.autofocus=void 0,cov_jd1uvxy9q().s[8]++,this.cols=void 0,cov_jd1uvxy9q().s[9]++,this.description=void 0,cov_jd1uvxy9q().s[10]++,this.dirname=void 0,cov_jd1uvxy9q().s[11]++,this.disabled=void 0,cov_jd1uvxy9q().s[12]++,this.input_id="textarea-"+(0,_utils_a63157eb_js__WEBPACK_IMPORTED_MODULE_1__.u)(),cov_jd1uvxy9q().s[13]++,this.label=void 0,cov_jd1uvxy9q().s[14]++,this.maxlength=void 0,cov_jd1uvxy9q().s[15]++,this.minlength=void 0,cov_jd1uvxy9q().s[16]++,this.name=void 0,cov_jd1uvxy9q().s[17]++,this.placeholder=void 0,cov_jd1uvxy9q().s[18]++,this.readonly=void 0,cov_jd1uvxy9q().s[19]++,this.required=void 0,cov_jd1uvxy9q().s[20]++,this.rows=void 0,cov_jd1uvxy9q().s[21]++,this.variant="semitransparent",cov_jd1uvxy9q().s[22]++,this.wrap=void 0,cov_jd1uvxy9q().s[23]++,this.value=void 0}var _proto=DbTextarea.prototype;return _proto.handleChange=function handleChange(event){var _a;cov_jd1uvxy9q().f[1]++,cov_jd1uvxy9q().s[24]++,this.dbChange.emit(event),cov_jd1uvxy9q().s[25]++,this.value=(cov_jd1uvxy9q().b[1][0]++,null===(_a=event.target)||(cov_jd1uvxy9q().b[1][1]++,void 0===_a)?void cov_jd1uvxy9q().b[0][0]++:(cov_jd1uvxy9q().b[0][1]++,_a.value))},_proto.render=function render(){var _this=this;return cov_jd1uvxy9q().f[2]++,cov_jd1uvxy9q().s[26]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:"elm-label",htmlFor:this.input_id},this.label),(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea",{class:"elm-textarea",id:this.input_id,"aria-invalid":this.ariainvalid,"aria-required":this.ariarequired,autofocus:this.autofocus,cols:this.cols,"data-dirname":this.dirname,disabled:this.disabled,maxlength:this.maxlength,minlength:this.minlength,name:this.name,placeholder:this.placeholder,readonly:this.readonly,required:this.required,rows:this.rows,wrap:this.wrap,"data-variant":this.variant,onInput:function onInput(event){cov_jd1uvxy9q().f[3]++,cov_jd1uvxy9q().s[27]++,_this.valueSize=event.target.value.length},onChange:function onChange(event){return cov_jd1uvxy9q().f[4]++,cov_jd1uvxy9q().s[28]++,_this.handleChange(event)}},(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),(cov_jd1uvxy9q().b[2][0]++,this.maxlength&&(cov_jd1uvxy9q().b[2][1]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("output",{htmlFor:this.input_id,id:this.input_id+"-result"},this.valueSize+" / "+this.maxlength))),(cov_jd1uvxy9q().b[3][0]++,this.description&&(cov_jd1uvxy9q().b[3][1]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{id:this.input_id+"-hint",class:"description"},this.description))))},DbTextarea}();cov_jd1uvxy9q().s[29]++,DbTextarea.style=dbTextareaCss},"./packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_1ksbx7a1p8(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js",statementMap:{0:{start:{line:1,column:13},end:{line:4,column:1}},1:{start:{line:3,column:2},end:{line:3,column:113}},2:{start:{line:5,column:27},end:{line:11,column:1}},3:{start:{line:6,column:2},end:{line:7,column:14}},4:{start:{line:7,column:4},end:{line:7,column:14}},5:{start:{line:8,column:2},end:{line:10,column:16}},6:{start:{line:9,column:19},end:{line:9,column:106}},7:{start:{line:17,column:44},end:{line:28,column:1}},8:{start:{line:18,column:2},end:{line:27,column:3}},9:{start:{line:19,column:4},end:{line:26,column:7}},10:{start:{line:20,column:6},end:{line:22,column:7}},11:{start:{line:21,column:8},end:{line:21,column:52}},12:{start:{line:23,column:6},end:{line:25,column:7}},13:{start:{line:24,column:8},end:{line:24,column:60}},14:{start:{line:33,column:18},end:{line:46,column:1}},15:{start:{line:34,column:2},end:{line:45,column:3}},16:{start:{line:35,column:4},end:{line:37,column:5}},17:{start:{line:36,column:6},end:{line:36,column:30}},18:{start:{line:38,column:4},end:{line:39,column:18}},19:{start:{line:39,column:6},end:{line:39,column:18}},20:{start:{line:40,column:4},end:{line:41,column:18}},21:{start:{line:41,column:6},end:{line:41,column:18}},22:{start:{line:44,column:4},end:{line:44,column:17}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:13},end:{line:1,column:14}},loc:{start:{line:1,column:19},end:{line:4,column:1}},line:1},1:{name:"(anonymous_1)",decl:{start:{line:5,column:27},end:{line:5,column:28}},loc:{start:{line:5,column:41},end:{line:11,column:1}},line:5},2:{name:"(anonymous_2)",decl:{start:{line:9,column:9},end:{line:9,column:10}},loc:{start:{line:9,column:19},end:{line:9,column:106}},line:9},3:{name:"(anonymous_3)",decl:{start:{line:17,column:44},end:{line:17,column:45}},loc:{start:{line:17,column:63},end:{line:28,column:1}},line:17},4:{name:"(anonymous_4)",decl:{start:{line:19,column:38},end:{line:19,column:39}},loc:{start:{line:19,column:49},end:{line:26,column:5}},line:19},5:{name:"(anonymous_5)",decl:{start:{line:33,column:18},end:{line:33,column:19}},loc:{start:{line:33,column:28},end:{line:46,column:1}},line:33}},branchMap:{0:{loc:{start:{line:3,column:9},end:{line:3,column:112}},type:"binary-expr",locations:[{start:{line:3,column:10},end:{line:3,column:83}},{start:{line:3,column:88},end:{line:3,column:112}}],line:3},1:{loc:{start:{line:3,column:10},end:{line:3,column:83}},type:"cond-expr",locations:[{start:{line:3,column:59},end:{line:3,column:65}},{start:{line:3,column:68},end:{line:3,column:83}}],line:3},2:{loc:{start:{line:3,column:10},end:{line:3,column:56}},type:"binary-expr",locations:[{start:{line:3,column:10},end:{line:3,column:39}},{start:{line:3,column:43},end:{line:3,column:56}}],line:3},3:{loc:{start:{line:6,column:2},end:{line:7,column:14}},type:"if",locations:[{start:{line:6,column:2},end:{line:7,column:14}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:6},4:{loc:{start:{line:18,column:2},end:{line:27,column:3}},type:"if",locations:[{start:{line:18,column:2},end:{line:27,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:18},5:{loc:{start:{line:20,column:6},end:{line:22,column:7}},type:"if",locations:[{start:{line:20,column:6},end:{line:22,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:20},6:{loc:{start:{line:23,column:6},end:{line:25,column:7}},type:"if",locations:[{start:{line:23,column:6},end:{line:25,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:23},7:{loc:{start:{line:35,column:4},end:{line:37,column:5}},type:"if",locations:[{start:{line:35,column:4},end:{line:37,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:35},8:{loc:{start:{line:38,column:4},end:{line:39,column:18}},type:"if",locations:[{start:{line:38,column:4},end:{line:39,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:38},9:{loc:{start:{line:40,column:4},end:{line:41,column:18}},type:"if",locations:[{start:{line:40,column:4},end:{line:41,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:40}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"419736e050bddf7067643ef18c02cc649e9e007b"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"419736e050bddf7067643ef18c02cc649e9e007b"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1ksbx7a1p8=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{a:()=>addIconVariantToAllDbLinksRecursive,g:()=>getDefaultLinkData,p:()=>parseData,u:()=>uuid}),cov_1ksbx7a1p8(),cov_1ksbx7a1p8().s[0]++;var uuid=function uuid(){var _a;return cov_1ksbx7a1p8().f[0]++,cov_1ksbx7a1p8().s[1]++,cov_1ksbx7a1p8().b[0][0]++,cov_1ksbx7a1p8().b[2][0]++,(null===(_a=window.crypto)||(cov_1ksbx7a1p8().b[2][1]++,void 0===_a)?void cov_1ksbx7a1p8().b[1][0]++:(cov_1ksbx7a1p8().b[1][1]++,_a.randomUUID()))||(cov_1ksbx7a1p8().b[0][1]++,Math.random().toString())};cov_1ksbx7a1p8().s[2]++;var getDefaultLinkData=function getDefaultLinkData(compData){return cov_1ksbx7a1p8().f[1]++,cov_1ksbx7a1p8().s[3]++,compData?(cov_1ksbx7a1p8().b[3][1]++,cov_1ksbx7a1p8().s[5]++,compData.map((function(data){return cov_1ksbx7a1p8().f[2]++,cov_1ksbx7a1p8().s[6]++,'<li><db-link href="'+data.href+'" target="'+data.target+'">'+data.label+"</db-link></li>"})).join("\n")):(cov_1ksbx7a1p8().b[3][0]++,cov_1ksbx7a1p8().s[4]++,"")};cov_1ksbx7a1p8().s[7]++;var addIconVariantToAllDbLinksRecursive=function addIconVariantToAllDbLinksRecursive(host,variant){cov_1ksbx7a1p8().f[3]++,cov_1ksbx7a1p8().s[8]++,host.children?(cov_1ksbx7a1p8().b[4][0]++,cov_1ksbx7a1p8().s[9]++,Array.from(host.children).forEach((function(child){cov_1ksbx7a1p8().f[4]++,cov_1ksbx7a1p8().s[10]++,"db-link"===child.tagName.toLowerCase()?(cov_1ksbx7a1p8().b[5][0]++,cov_1ksbx7a1p8().s[11]++,child.setAttribute("icon-variant",variant)):cov_1ksbx7a1p8().b[5][1]++,cov_1ksbx7a1p8().s[12]++,child.children?(cov_1ksbx7a1p8().b[6][0]++,cov_1ksbx7a1p8().s[13]++,addIconVariantToAllDbLinksRecursive(child,variant)):cov_1ksbx7a1p8().b[6][1]++}))):cov_1ksbx7a1p8().b[4][1]++};cov_1ksbx7a1p8().s[14]++;var parseData=function parseData(item){cov_1ksbx7a1p8().f[5]++,cov_1ksbx7a1p8().s[15]++;try{if(cov_1ksbx7a1p8().s[16]++,"string"==typeof item)return cov_1ksbx7a1p8().b[7][0]++,cov_1ksbx7a1p8().s[17]++,JSON.parse(item);if(cov_1ksbx7a1p8().b[7][1]++,cov_1ksbx7a1p8().s[18]++,"object"==typeof item)return cov_1ksbx7a1p8().b[8][0]++,cov_1ksbx7a1p8().s[19]++,item;if(cov_1ksbx7a1p8().b[8][1]++,cov_1ksbx7a1p8().s[20]++,item instanceof Array)return cov_1ksbx7a1p8().b[9][0]++,cov_1ksbx7a1p8().s[21]++,item;cov_1ksbx7a1p8().b[9][1]++}catch(error){return cov_1ksbx7a1p8().s[22]++,!1}}}}]);