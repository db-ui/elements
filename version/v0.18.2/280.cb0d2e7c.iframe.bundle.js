"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[280],{"./packages/db-ui-elements-stencil/dist/esm/db-select.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_select:()=>DbSelect});var _index_18068034_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-18068034.js"),_utils_a63157eb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js");function cov_28jnmkofzb(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-select.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"71d7c8c078fe6f77d10184585d724a2819acd2a9"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-select.entry.js",statementMap:{0:{start:{line:4,column:20},end:{line:4,column:8175}},1:{start:{line:6,column:17},end:{line:30,column:1}},2:{start:{line:8,column:4},end:{line:8,column:36}},3:{start:{line:9,column:4},end:{line:9,column:53}},4:{start:{line:10,column:4},end:{line:10,column:29}},5:{start:{line:11,column:4},end:{line:11,column:26}},6:{start:{line:12,column:4},end:{line:12,column:39}},7:{start:{line:13,column:4},end:{line:13,column:27}},8:{start:{line:14,column:4},end:{line:14,column:26}},9:{start:{line:15,column:4},end:{line:15,column:26}},10:{start:{line:16,column:4},end:{line:16,column:26}},11:{start:{line:17,column:4},end:{line:17,column:26}},12:{start:{line:18,column:4},end:{line:18,column:27}},13:{start:{line:19,column:4},end:{line:19,column:37}},14:{start:{line:22,column:4},end:{line:22,column:36}},15:{start:{line:23,column:4},end:{line:23,column:30}},16:{start:{line:26,column:4},end:{line:28,column:382}},17:{start:{line:28,column:263},end:{line:28,column:287}},18:{start:{line:31,column:0},end:{line:31,column:29}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:2},end:{line:7,column:3}},loc:{start:{line:7,column:23},end:{line:20,column:3}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:21,column:2},end:{line:21,column:3}},loc:{start:{line:21,column:22},end:{line:24,column:3}},line:21},2:{name:"(anonymous_2)",decl:{start:{line:25,column:2},end:{line:25,column:3}},loc:{start:{line:25,column:11},end:{line:29,column:3}},line:25},3:{name:"(anonymous_3)",decl:{start:{line:28,column:252},end:{line:28,column:253}},loc:{start:{line:28,column:263},end:{line:28,column:287}},line:28}},branchMap:{0:{loc:{start:{line:26,column:77},end:{line:28,column:12}},type:"cond-expr",locations:[{start:{line:27,column:10},end:{line:27,column:22}},{start:{line:28,column:10},end:{line:28,column:12}}],line:26},1:{loc:{start:{line:26,column:77},end:{line:26,column:127}},type:"binary-expr",locations:[{start:{line:26,column:77},end:{line:26,column:89}},{start:{line:26,column:93},end:{line:26,column:127}}],line:26},2:{loc:{start:{line:28,column:30},end:{line:28,column:63}},type:"cond-expr",locations:[{start:{line:28,column:49},end:{line:28,column:55}},{start:{line:28,column:58},end:{line:28,column:63}}],line:28},3:{loc:{start:{line:28,column:82},end:{line:28,column:112}},type:"cond-expr",locations:[{start:{line:28,column:98},end:{line:28,column:104}},{start:{line:28,column:107},end:{line:28,column:112}}],line:28}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"71d7c8c078fe6f77d10184585d724a2819acd2a9"});var actualCoverage=coverage[path];return cov_28jnmkofzb=function(){return actualCoverage},actualCoverage}cov_28jnmkofzb();var dbSelectCss=(cov_28jnmkofzb().s[0]++,'@charset "UTF-8";.sc-db-select:where(html){line-height:1.15}.sc-db-select:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-select:where(dl,ol.sc-db-select,ul).sc-db-select .sc-db-select:where(dl,ol.sc-db-select,ul).sc-db-select{margin-block-end:0;margin-block-start:0}.sc-db-select:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-select:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-select:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}.sc-db-select:where(b,strong).sc-db-select{font-weight:bolder}.sc-db-select:where(code,kbd.sc-db-select,samp).sc-db-select{font-family:monospace, monospace;font-size:1em}.sc-db-select:where(small){font-size:80%}.sc-db-select:where(table){border-color:currentColor;text-indent:0}.sc-db-select:where(button,input.sc-db-select,select).sc-db-select{margin:0}.sc-db-select:where(button){text-transform:none}.sc-db-select:where(button,input.sc-db-select:is([type=button i],[type=reset i].sc-db-select,[type=submit i])).sc-db-select{-webkit-appearance:button}.sc-db-select:where(progress){vertical-align:baseline}.sc-db-select:where(select){text-transform:none}.sc-db-select:where(textarea){margin:0}.sc-db-select:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-select::-webkit-inner-spin-button,.sc-db-select::-webkit-outer-spin-button{height:auto}.sc-db-select::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-select::-webkit-search-decoration{-webkit-appearance:none}.sc-db-select::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-select:where(button,input.sc-db-select:is([type=button i],[type=color i].sc-db-select,[type=reset i].sc-db-select,[type=submit i])).sc-db-select::-moz-focus-inner{border-style:none;padding:0}.sc-db-select:where(button,input.sc-db-select:is([type=button i],[type=color i].sc-db-select,[type=reset i].sc-db-select,[type=submit i])).sc-db-select::-moz-focusring{outline:1px dotted ButtonText}.sc-db-select:where(:-moz-ui-invalid){box-shadow:none}.sc-db-select:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-select:where(dialog:not([open])){display:none}.sc-db-select:where(summary){display:list-item}html.sc-db-select,.sc-db-select-h{box-sizing:border-box}*.sc-db-select,.sc-db-select::before,.sc-db-select::after{box-sizing:inherit}img.sc-db-select,embed.sc-db-select,iframe.sc-db-select,object.sc-db-select,video.sc-db-select{height:auto;max-width:100%}iframe.sc-db-select{border:0}nav.sc-db-select ol.sc-db-select,nav.sc-db-select ul.sc-db-select,[role=navigation].sc-db-select ol.sc-db-select,[role=navigation].sc-db-select ul.sc-db-select{list-style:none;margin:0;padding:0}.sc-db-select:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-select:is(a,button.sc-db-select,input.sc-db-select,textarea.sc-db-select,summary).sc-db-select{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-select:is(a,button.sc-db-select,input.sc-db-select,textarea.sc-db-select,summary).sc-db-select:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}.sc-db-select:where(ul){list-style-type:"•   "}.sc-db-select:where(ul) li.sc-db-select::marker{color:#ec0016}body.sc-db-select,.sc-db-select-h,div.sc-db-select,button.sc-db-select,input.sc-db-select,select.sc-db-select,textarea.sc-db-select{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-select{color:inherit}.elm-select.sc-db-select{--formElement---borderTopColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  );--formElement---borderRightColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  );--formElement---borderBottomColor:var(\n  \t--formElement---borderColor,\n  \trgba(40, 45, 55, 0.5)\n  );--formElement---borderLeftColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  );border-radius:4px;caret-color:#ec0016;color:#282d37}.elm-select.sc-db-select~.description.sc-db-select{color:#646973;font-size:0.875rem;padding:0.375rem 0.625rem}.elm-select[data-variant=semitransparent].sc-db-select,.sc-db-select:where(.elm-select:not([multiple])){--formElement---borderColor:rgba(40, 45, 55, 0.5);background-color:rgba(40, 45, 55, 0.05);border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-left-color:transparent;border-right:1px solid var(--formElement---borderRightColor);border-right-color:transparent;border-top:1px solid var(--formElement---borderTopColor);border-top-color:transparent}.elm-select[data-variant=white].sc-db-select{--formElement---borderColor:rgba(40, 45, 55, 0.5);background-color:#ffffff;border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-left-color:transparent;border-right:1px solid var(--formElement---borderRightColor);border-right-color:transparent;border-top:1px solid var(--formElement---borderTopColor);border-top-color:transparent}.elm-select[data-variant=solid].sc-db-select{--formElement---borderColor:rgba(40, 45, 55, 0.5);background-color:#f0f3f5;border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-left-color:transparent;border-right:1px solid var(--formElement---borderRightColor);border-right-color:transparent;border-top:1px solid var(--formElement---borderTopColor);border-top-color:transparent}.elm-select[data-variant=outline].sc-db-select{--formElement---borderColor:rgba(40, 45, 55, 0.25);background-color:transparent;border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-right:1px solid var(--formElement---borderRightColor);border-top:1px solid var(--formElement---borderTopColor)}.elm-select.sc-db-select{appearance:none;font-size:1rem}.elm-select.sc-db-select::-ms-expand{display:none}.elm-select.sc-db-select:not([multiple]){background-image:var(--db-ic-expand-more-20, url(../../../icons/functional/images/navigation/db_ic_expand_more_20.svg));background-position:right 0.6875rem center;background-repeat:no-repeat;height:2.75rem;padding:1.25rem 2.625rem 0 1rem}.elm-select.sc-db-select:not([multiple])+.elm-label.sc-db-select{pointer-events:none;position:absolute;transition:opacity, transform 250ms}@media (prefers-reduced-motion: reduce){.elm-select.sc-db-select:not([multiple])+.elm-label.sc-db-select{transition-duration:0.01s !important}}.elm-select.sc-db-select:not([multiple]):required:invalid+.elm-label.sc-db-select,.elm-select.sc-db-select:not([multiple])[aria-invalid=true]+.elm-label.sc-db-select{color:#646973;font-size:1rem;transform:translate(1rem, -2.1875rem)}.elm-select.sc-db-select+.elm-label.sc-db-select{display:block;font-size:0.75rem;margin-bottom:-1.125rem;transform:translate(1rem, -2.5625rem);transition:opacity, transform 150ms}@media (prefers-reduced-motion: reduce){.elm-select.sc-db-select+.elm-label.sc-db-select{transition-duration:0.01s !important}}.elm-select[multiple].sc-db-select{margin-top:1rem}.elm-select[multiple].sc-db-select+.elm-label.sc-db-select{transform:translate(1rem, -6.25rem)}.elm-select.sc-db-select optgroup.sc-db-select{background-color:transparent;font-style:normal}.elm-select.sc-db-select option.sc-db-select:not(:disabled):hover{background-color:#d7dce1}.elm-select.sc-db-select option.sc-db-select:checked{background-color:#d7dce1}.sc-db-select-h{position:relative;--db-ic-expand-more-20:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAI9JREFUOE/tktENgCAMRB8buImOoJPrCLqJG2guEWOwIETil/1pSNuX61FH5XCVefzA945+4uEMbMAArBHNDTAedfWdYSkUsAWULaiHdcACKCeBGpgi0BDWh1vEPLSgUqE1vbIbTA2pTwmh6k/CnoCqX6F6yzNTmTcx52w8VDNJWI7C4kvPUVgE/YFFdpnNO7s0HhVghjmfAAAAAElFTkSuQmCC")}');cov_28jnmkofzb().s[1]++;var DbSelect=function(){function DbSelect(hostRef){cov_28jnmkofzb().f[0]++,cov_28jnmkofzb().s[2]++,(0,_index_18068034_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_28jnmkofzb().s[3]++,this.dbChange=(0,_index_18068034_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"dbChange",7),cov_28jnmkofzb().s[4]++,this.ariainvalid=!1,cov_28jnmkofzb().s[5]++,this.disabled=!1,cov_28jnmkofzb().s[6]++,this.input_id="select-"+(0,_utils_a63157eb_js__WEBPACK_IMPORTED_MODULE_1__.u)(),cov_28jnmkofzb().s[7]++,this.label=void 0,cov_28jnmkofzb().s[8]++,this.multiple=!1,cov_28jnmkofzb().s[9]++,this.name=void 0,cov_28jnmkofzb().s[10]++,this.required=!1,cov_28jnmkofzb().s[11]++,this.size=void 0,cov_28jnmkofzb().s[12]++,this.value=void 0,cov_28jnmkofzb().s[13]++,this.variant="semitransparent"}var _proto=DbSelect.prototype;return _proto.handleChange=function handleChange(event){cov_28jnmkofzb().f[1]++,cov_28jnmkofzb().s[14]++,this.value=event.target.value,cov_28jnmkofzb().s[15]++,this.dbChange.emit(event)},_proto.render=function render(){var _this=this;return cov_28jnmkofzb().f[2]++,cov_28jnmkofzb().s[16]++,(0,_index_18068034_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_18068034_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_18068034_js__WEBPACK_IMPORTED_MODULE_0__.h)("select",{class:"elm-select","data-variant":(cov_28jnmkofzb().b[1][0]++,this.variant&&(cov_28jnmkofzb().b[1][1]++,"semitransparent"!==this.variant)?(cov_28jnmkofzb().b[0][0]++,this.variant):(cov_28jnmkofzb().b[0][1]++,"")),"aria-invalid":this.ariainvalid?(cov_28jnmkofzb().b[2][0]++,"true"):(cov_28jnmkofzb().b[2][1]++,!1),"aria-required":this.required?(cov_28jnmkofzb().b[3][0]++,"true"):(cov_28jnmkofzb().b[3][1]++,!1),disabled:this.disabled,id:this.input_id,multiple:this.multiple,name:this.name,required:this.required,size:this.size,onChange:function onChange(event){return cov_28jnmkofzb().f[3]++,cov_28jnmkofzb().s[17]++,_this.handleChange(event)}},(0,_index_18068034_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),(0,_index_18068034_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:"elm-label",htmlFor:this.input_id},this.label))},DbSelect}();cov_28jnmkofzb().s[18]++,DbSelect.style=dbSelectCss},"./packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_1ksbx7a1p8(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-a63157eb.js",statementMap:{0:{start:{line:1,column:13},end:{line:4,column:1}},1:{start:{line:3,column:2},end:{line:3,column:113}},2:{start:{line:5,column:27},end:{line:11,column:1}},3:{start:{line:6,column:2},end:{line:7,column:14}},4:{start:{line:7,column:4},end:{line:7,column:14}},5:{start:{line:8,column:2},end:{line:10,column:16}},6:{start:{line:9,column:19},end:{line:9,column:106}},7:{start:{line:17,column:44},end:{line:28,column:1}},8:{start:{line:18,column:2},end:{line:27,column:3}},9:{start:{line:19,column:4},end:{line:26,column:7}},10:{start:{line:20,column:6},end:{line:22,column:7}},11:{start:{line:21,column:8},end:{line:21,column:52}},12:{start:{line:23,column:6},end:{line:25,column:7}},13:{start:{line:24,column:8},end:{line:24,column:60}},14:{start:{line:33,column:18},end:{line:46,column:1}},15:{start:{line:34,column:2},end:{line:45,column:3}},16:{start:{line:35,column:4},end:{line:37,column:5}},17:{start:{line:36,column:6},end:{line:36,column:30}},18:{start:{line:38,column:4},end:{line:39,column:18}},19:{start:{line:39,column:6},end:{line:39,column:18}},20:{start:{line:40,column:4},end:{line:41,column:18}},21:{start:{line:41,column:6},end:{line:41,column:18}},22:{start:{line:44,column:4},end:{line:44,column:17}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:13},end:{line:1,column:14}},loc:{start:{line:1,column:19},end:{line:4,column:1}},line:1},1:{name:"(anonymous_1)",decl:{start:{line:5,column:27},end:{line:5,column:28}},loc:{start:{line:5,column:41},end:{line:11,column:1}},line:5},2:{name:"(anonymous_2)",decl:{start:{line:9,column:9},end:{line:9,column:10}},loc:{start:{line:9,column:19},end:{line:9,column:106}},line:9},3:{name:"(anonymous_3)",decl:{start:{line:17,column:44},end:{line:17,column:45}},loc:{start:{line:17,column:63},end:{line:28,column:1}},line:17},4:{name:"(anonymous_4)",decl:{start:{line:19,column:38},end:{line:19,column:39}},loc:{start:{line:19,column:49},end:{line:26,column:5}},line:19},5:{name:"(anonymous_5)",decl:{start:{line:33,column:18},end:{line:33,column:19}},loc:{start:{line:33,column:28},end:{line:46,column:1}},line:33}},branchMap:{0:{loc:{start:{line:3,column:9},end:{line:3,column:112}},type:"binary-expr",locations:[{start:{line:3,column:10},end:{line:3,column:83}},{start:{line:3,column:88},end:{line:3,column:112}}],line:3},1:{loc:{start:{line:3,column:10},end:{line:3,column:83}},type:"cond-expr",locations:[{start:{line:3,column:59},end:{line:3,column:65}},{start:{line:3,column:68},end:{line:3,column:83}}],line:3},2:{loc:{start:{line:3,column:10},end:{line:3,column:56}},type:"binary-expr",locations:[{start:{line:3,column:10},end:{line:3,column:39}},{start:{line:3,column:43},end:{line:3,column:56}}],line:3},3:{loc:{start:{line:6,column:2},end:{line:7,column:14}},type:"if",locations:[{start:{line:6,column:2},end:{line:7,column:14}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:6},4:{loc:{start:{line:18,column:2},end:{line:27,column:3}},type:"if",locations:[{start:{line:18,column:2},end:{line:27,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:18},5:{loc:{start:{line:20,column:6},end:{line:22,column:7}},type:"if",locations:[{start:{line:20,column:6},end:{line:22,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:20},6:{loc:{start:{line:23,column:6},end:{line:25,column:7}},type:"if",locations:[{start:{line:23,column:6},end:{line:25,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:23},7:{loc:{start:{line:35,column:4},end:{line:37,column:5}},type:"if",locations:[{start:{line:35,column:4},end:{line:37,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:35},8:{loc:{start:{line:38,column:4},end:{line:39,column:18}},type:"if",locations:[{start:{line:38,column:4},end:{line:39,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:38},9:{loc:{start:{line:40,column:4},end:{line:41,column:18}},type:"if",locations:[{start:{line:40,column:4},end:{line:41,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:40}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"419736e050bddf7067643ef18c02cc649e9e007b"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"419736e050bddf7067643ef18c02cc649e9e007b"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1ksbx7a1p8=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{a:()=>addIconVariantToAllDbLinksRecursive,g:()=>getDefaultLinkData,p:()=>parseData,u:()=>uuid}),cov_1ksbx7a1p8(),cov_1ksbx7a1p8().s[0]++;var uuid=function uuid(){var _a;return cov_1ksbx7a1p8().f[0]++,cov_1ksbx7a1p8().s[1]++,cov_1ksbx7a1p8().b[0][0]++,cov_1ksbx7a1p8().b[2][0]++,(null===(_a=window.crypto)||(cov_1ksbx7a1p8().b[2][1]++,void 0===_a)?void cov_1ksbx7a1p8().b[1][0]++:(cov_1ksbx7a1p8().b[1][1]++,_a.randomUUID()))||(cov_1ksbx7a1p8().b[0][1]++,Math.random().toString())};cov_1ksbx7a1p8().s[2]++;var getDefaultLinkData=function getDefaultLinkData(compData){return cov_1ksbx7a1p8().f[1]++,cov_1ksbx7a1p8().s[3]++,compData?(cov_1ksbx7a1p8().b[3][1]++,cov_1ksbx7a1p8().s[5]++,compData.map((function(data){return cov_1ksbx7a1p8().f[2]++,cov_1ksbx7a1p8().s[6]++,'<li><db-link href="'+data.href+'" target="'+data.target+'">'+data.label+"</db-link></li>"})).join("\n")):(cov_1ksbx7a1p8().b[3][0]++,cov_1ksbx7a1p8().s[4]++,"")};cov_1ksbx7a1p8().s[7]++;var addIconVariantToAllDbLinksRecursive=function addIconVariantToAllDbLinksRecursive(host,variant){cov_1ksbx7a1p8().f[3]++,cov_1ksbx7a1p8().s[8]++,host.children?(cov_1ksbx7a1p8().b[4][0]++,cov_1ksbx7a1p8().s[9]++,Array.from(host.children).forEach((function(child){cov_1ksbx7a1p8().f[4]++,cov_1ksbx7a1p8().s[10]++,"db-link"===child.tagName.toLowerCase()?(cov_1ksbx7a1p8().b[5][0]++,cov_1ksbx7a1p8().s[11]++,child.setAttribute("icon-variant",variant)):cov_1ksbx7a1p8().b[5][1]++,cov_1ksbx7a1p8().s[12]++,child.children?(cov_1ksbx7a1p8().b[6][0]++,cov_1ksbx7a1p8().s[13]++,addIconVariantToAllDbLinksRecursive(child,variant)):cov_1ksbx7a1p8().b[6][1]++}))):cov_1ksbx7a1p8().b[4][1]++};cov_1ksbx7a1p8().s[14]++;var parseData=function parseData(item){cov_1ksbx7a1p8().f[5]++,cov_1ksbx7a1p8().s[15]++;try{if(cov_1ksbx7a1p8().s[16]++,"string"==typeof item)return cov_1ksbx7a1p8().b[7][0]++,cov_1ksbx7a1p8().s[17]++,JSON.parse(item);if(cov_1ksbx7a1p8().b[7][1]++,cov_1ksbx7a1p8().s[18]++,"object"==typeof item)return cov_1ksbx7a1p8().b[8][0]++,cov_1ksbx7a1p8().s[19]++,item;if(cov_1ksbx7a1p8().b[8][1]++,cov_1ksbx7a1p8().s[20]++,item instanceof Array)return cov_1ksbx7a1p8().b[9][0]++,cov_1ksbx7a1p8().s[21]++,item;cov_1ksbx7a1p8().b[9][1]++}catch(error){return cov_1ksbx7a1p8().s[22]++,!1}}}}]);