"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[556],{"./packages/db-ui-elements-stencil/dist/esm/db-page.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_page:()=>DbPage});var _index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-7b41cb22.js");function cov_1qjlmiyaft(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-page.entry.js",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-page.entry.js",statementMap:{0:{start:{line:3,column:18},end:{line:3,column:544}},1:{start:{line:5,column:15},end:{line:34,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:10,column:4},end:{line:29,column:5}},4:{start:{line:11,column:23},end:{line:11,column:72}},5:{start:{line:12,column:6},end:{line:15,column:9}},6:{start:{line:13,column:8},end:{line:13,column:34}},7:{start:{line:14,column:8},end:{line:14,column:38}},8:{start:{line:16,column:23},end:{line:16,column:72}},9:{start:{line:17,column:6},end:{line:20,column:9}},10:{start:{line:18,column:8},end:{line:18,column:34}},11:{start:{line:19,column:8},end:{line:19,column:33}},12:{start:{line:21,column:22},end:{line:21,column:53}},13:{start:{line:22,column:6},end:{line:24,column:7}},14:{start:{line:23,column:8},end:{line:23,column:38}},15:{start:{line:25,column:21},end:{line:25,column:51}},16:{start:{line:26,column:6},end:{line:28,column:7}},17:{start:{line:27,column:8},end:{line:27,column:37}},18:{start:{line:32,column:4},end:{line:32,column:158}},19:{start:{line:35,column:0},end:{line:35,column:25}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:8,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:9,column:2},end:{line:9,column:3}},loc:{start:{line:9,column:22},end:{line:30,column:3}},line:9},2:{name:"(anonymous_2)",decl:{start:{line:12,column:23},end:{line:12,column:24}},loc:{start:{line:12,column:32},end:{line:15,column:7}},line:12},3:{name:"(anonymous_3)",decl:{start:{line:17,column:23},end:{line:17,column:24}},loc:{start:{line:17,column:32},end:{line:20,column:7}},line:17},4:{name:"(anonymous_4)",decl:{start:{line:31,column:2},end:{line:31,column:3}},loc:{start:{line:31,column:11},end:{line:33,column:3}},line:31}},branchMap:{0:{loc:{start:{line:10,column:4},end:{line:29,column:5}},type:"if",locations:[{start:{line:10,column:4},end:{line:29,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:10},1:{loc:{start:{line:22,column:6},end:{line:24,column:7}},type:"if",locations:[{start:{line:22,column:6},end:{line:24,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:22},2:{loc:{start:{line:26,column:6},end:{line:28,column:7}},type:"if",locations:[{start:{line:26,column:6},end:{line:28,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:26}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4fb739083676e65f15577e0e150feed7185b8fa7"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"4fb739083676e65f15577e0e150feed7185b8fa7"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1qjlmiyaft=function(){return actualCoverage},actualCoverage}cov_1qjlmiyaft();var dbPageCss=(cov_1qjlmiyaft().s[0]++,".rea-page{height:100%;min-height:100%;overflow:hidden;display:flex;flex-direction:column}.rea-page header,.rea-page footer{display:flex;flex:0 1 auto;flex-grow:0;flex-shrink:0}.rea-page main{display:flex;flex-direction:column;overflow:hidden;flex:1 1 auto;width:100%;margin:0 auto}@media screen and (min-width: 1088px){.rea-page main{max-width:960px}}@media screen and (min-width: 1280px){.rea-page main{max-width:1152px}}@media screen and (min-width: 1472px){.rea-page main{max-width:1344px}}.rea-page main>*{overflow:auto}");cov_1qjlmiyaft().s[1]++;var DbPage=function(){function DbPage(hostRef){cov_1qjlmiyaft().f[0]++,cov_1qjlmiyaft().s[2]++,(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}var _proto=DbPage.prototype;return _proto.componentWillLoad=function componentWillLoad(){if(cov_1qjlmiyaft().f[1]++,cov_1qjlmiyaft().s[3]++,window.screen.width>=768){cov_1qjlmiyaft().b[0][0]++;var htmlTags=(cov_1qjlmiyaft().s[4]++,Array.from(document.getElementsByTagName("html")));cov_1qjlmiyaft().s[5]++,htmlTags.forEach((function(tag){cov_1qjlmiyaft().f[2]++,cov_1qjlmiyaft().s[6]++,tag.style.height="100%",cov_1qjlmiyaft().s[7]++,tag.style.overflow="hidden"}));var bodyTags=(cov_1qjlmiyaft().s[8]++,Array.from(document.getElementsByTagName("body")));cov_1qjlmiyaft().s[9]++,bodyTags.forEach((function(tag){cov_1qjlmiyaft().f[3]++,cov_1qjlmiyaft().s[10]++,tag.style.height="100%",cov_1qjlmiyaft().s[11]++,tag.style.margin="0px"}));var rootTag=(cov_1qjlmiyaft().s[12]++,document.getElementById("root"));cov_1qjlmiyaft().s[13]++,rootTag?(cov_1qjlmiyaft().b[1][0]++,cov_1qjlmiyaft().s[14]++,rootTag.style.height="100%"):cov_1qjlmiyaft().b[1][1]++;var appTag=(cov_1qjlmiyaft().s[15]++,document.getElementById("app"));cov_1qjlmiyaft().s[16]++,appTag?(cov_1qjlmiyaft().b[2][0]++,cov_1qjlmiyaft().s[17]++,appTag.style.height="100%"):cov_1qjlmiyaft().b[2][1]++}else cov_1qjlmiyaft().b[0][1]++},_proto.render=function render(){return cov_1qjlmiyaft().f[4]++,cov_1qjlmiyaft().s[18]++,(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"rea-page"},(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"header"}),(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)("main",{class:"rea-main"},(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),(0,_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"footer"}))},DbPage}();cov_1qjlmiyaft().s[19]++,DbPage.style=dbPageCss}}]);