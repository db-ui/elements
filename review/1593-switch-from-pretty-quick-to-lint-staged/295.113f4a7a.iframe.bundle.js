"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[295],{"./packages/db-ui-elements-stencil/dist/esm/db-footer.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_footer:()=>DbFooter});var _index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-545aea95.js");function cov_6ibo06rzi(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-footer.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"f49d58e88edd93df10b9d9660a71f5bc3e5f8281"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-footer.entry.js",statementMap:{0:{start:{line:3,column:20},end:{line:3,column:4454}},1:{start:{line:5,column:17},end:{line:17,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:8,column:4},end:{line:8,column:24}},4:{start:{line:9,column:4},end:{line:9,column:27}},5:{start:{line:12,column:4},end:{line:12,column:61}},6:{start:{line:15,column:4},end:{line:15,column:164}},7:{start:{line:18,column:0},end:{line:18,column:29}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:10,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:11,column:2},end:{line:11,column:3}},loc:{start:{line:11,column:17},end:{line:13,column:3}},line:11},2:{name:"(anonymous_2)",decl:{start:{line:14,column:2},end:{line:14,column:3}},loc:{start:{line:14,column:11},end:{line:16,column:3}},line:14}},branchMap:{0:{loc:{start:{line:15,column:47},end:{line:15,column:78}},type:"cond-expr",locations:[{start:{line:15,column:61},end:{line:15,column:73}},{start:{line:15,column:76},end:{line:15,column:78}}],line:15},1:{loc:{start:{line:15,column:84},end:{line:15,column:144}},type:"cond-expr",locations:[{start:{line:15,column:101},end:{line:15,column:137}},{start:{line:15,column:140},end:{line:15,column:144}}],line:15}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f49d58e88edd93df10b9d9660a71f5bc3e5f8281"});var actualCoverage=coverage[path];return cov_6ibo06rzi=function(){return actualCoverage},actualCoverage}cov_6ibo06rzi();var dbFooterCss=(cov_6ibo06rzi().s[0]++,'@charset "UTF-8";.sc-db-footer:where(html,).sc-db-footer-h{line-height:1.15}.sc-db-footer:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-footer:where(dl,ol.sc-db-footer,ul).sc-db-footer .sc-db-footer:where(dl,ol.sc-db-footer,ul).sc-db-footer{margin-block-end:0;margin-block-start:0}.sc-db-footer:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-footer:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-footer:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}.sc-db-footer:where(b,strong).sc-db-footer{font-weight:bolder}.sc-db-footer:where(code,kbd.sc-db-footer,samp).sc-db-footer{font-family:monospace, monospace;font-size:1em}.sc-db-footer:where(small){font-size:80%}.sc-db-footer:where(table){border-color:currentColor;text-indent:0}.sc-db-footer:where(button,input.sc-db-footer,select).sc-db-footer{margin:0}.sc-db-footer:where(button){text-transform:none}.sc-db-footer:where(button,input.sc-db-footer:is([type=button i],[type=reset i].sc-db-footer,[type=submit i])).sc-db-footer{-webkit-appearance:button}.sc-db-footer:where(progress){vertical-align:baseline}.sc-db-footer:where(select){text-transform:none}.sc-db-footer:where(textarea){margin:0}.sc-db-footer:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-footer::-webkit-inner-spin-button,.sc-db-footer::-webkit-outer-spin-button{height:auto}.sc-db-footer::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-footer::-webkit-search-decoration{-webkit-appearance:none}.sc-db-footer::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-footer:where(button,input.sc-db-footer:is([type=button i],[type=color i].sc-db-footer,[type=reset i].sc-db-footer,[type=submit i])).sc-db-footer::-moz-focus-inner{border-style:none;padding:0}.sc-db-footer:where(button,input.sc-db-footer:is([type=button i],[type=color i].sc-db-footer,[type=reset i].sc-db-footer,[type=submit i])).sc-db-footer::-moz-focusring{outline:1px dotted ButtonText}.sc-db-footer:where(:-moz-ui-invalid){box-shadow:none}.sc-db-footer:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-footer:where(dialog:not([open])){display:none}.sc-db-footer:where(summary){display:list-item}html.sc-db-footer,.sc-db-footer-h{box-sizing:var(--db-box-sizing, border-box)}*.sc-db-footer,.sc-db-footer::before,.sc-db-footer::after{box-sizing:inherit}img.sc-db-footer,embed.sc-db-footer,iframe.sc-db-footer,object.sc-db-footer,video.sc-db-footer{height:auto;max-width:100%}iframe.sc-db-footer{border:0}nav.sc-db-footer ol.sc-db-footer,nav.sc-db-footer ul.sc-db-footer,[role=navigation].sc-db-footer ol.sc-db-footer,[role=navigation].sc-db-footer ul.sc-db-footer{list-style:none;margin:0;padding:0}.sc-db-footer:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-footer:is(a,button.sc-db-footer,input.sc-db-footer,textarea.sc-db-footer,summary).sc-db-footer{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-footer:is(a,button.sc-db-footer,input.sc-db-footer,textarea.sc-db-footer,summary).sc-db-footer:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}.sc-db-footer:where(ul){list-style-type:"•   "}.sc-db-footer:where(ul) li.sc-db-footer::marker{color:#ec0016}details.sc-db-footer>*.sc-db-footer,details.sc-db-footer>.sc-db-footer::before,details.sc-db-footer>.sc-db-footer::after{box-sizing:var(--db-box-sizing, border-box)}body.sc-db-footer,.sc-db-footer-h,div.sc-db-footer,button.sc-db-footer,input.sc-db-footer,select.sc-db-footer,textarea.sc-db-footer{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-footer{color:inherit}.rea-footer.sc-db-footer{background-color:#fdfdfd;box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);color:#646973;margin-top:1rem;padding:1.3125rem 1rem}.rea-footer.sc-db-footer::after{clear:both;content:" ";display:table}.rea-footer.has-border.sc-db-footer{border-top:0.375rem solid #d7dce1}@media screen and (max-width: 767px){.rea-footer.sc-db-footer{text-align:center}}.sc-db-footer-h{display:block}');cov_6ibo06rzi().s[1]++;var DbFooter=function(){function DbFooter(hostRef){cov_6ibo06rzi().f[0]++,cov_6ibo06rzi().s[2]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_6ibo06rzi().s[3]++,this.border=!1,cov_6ibo06rzi().s[4]++,this.copyright=!1}var _proto=DbFooter.prototype;return _proto.getCopyRight=function getCopyRight(){return cov_6ibo06rzi().f[1]++,cov_6ibo06rzi().s[5]++,"Copyright "+(new Date).getFullYear()+" DB Systel"},_proto.render=function render(){return cov_6ibo06rzi().f[2]++,cov_6ibo06rzi().s[6]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer",{class:"rea-footer "+(this.border?(cov_6ibo06rzi().b[0][0]++,"has-border"):(cov_6ibo06rzi().b[0][1]++,""))},this.copyright?(cov_6ibo06rzi().b[1][0]++,(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,this.getCopyRight())):(cov_6ibo06rzi().b[1][1]++,null),(0,_index_545aea95_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))},DbFooter}();cov_6ibo06rzi().s[7]++,DbFooter.style=dbFooterCss}}]);