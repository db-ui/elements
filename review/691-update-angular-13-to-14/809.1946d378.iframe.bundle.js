"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[809],{"./packages/db-ui-elements-stencil/dist/esm/db-headline.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_headline:()=>DbHeadline});var _index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-f32d3c81.js");function cov_52ynhd88g(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-headline.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"a0a59f25ccaab5c253d7e57e3a73952f078d32dd"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-headline.entry.js",statementMap:{0:{start:{line:3,column:22},end:{line:3,column:3894}},1:{start:{line:5,column:19},end:{line:34,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:8,column:4},end:{line:8,column:23}},4:{start:{line:9,column:4},end:{line:9,column:23}},5:{start:{line:12,column:4},end:{line:32,column:5}},6:{start:{line:14,column:8},end:{line:14,column:95}},7:{start:{line:17,column:8},end:{line:17,column:95}},8:{start:{line:20,column:8},end:{line:20,column:95}},9:{start:{line:23,column:8},end:{line:23,column:95}},10:{start:{line:26,column:8},end:{line:26,column:95}},11:{start:{line:30,column:8},end:{line:30,column:95}},12:{start:{line:35,column:0},end:{line:35,column:33}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:10,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:11,column:2},end:{line:11,column:3}},loc:{start:{line:11,column:11},end:{line:33,column:3}},line:11}},branchMap:{0:{loc:{start:{line:12,column:4},end:{line:32,column:5}},type:"switch",locations:[{start:{line:13,column:6},end:{line:15,column:7}},{start:{line:16,column:6},end:{line:18,column:7}},{start:{line:19,column:6},end:{line:21,column:7}},{start:{line:22,column:6},end:{line:24,column:7}},{start:{line:25,column:6},end:{line:27,column:7}},{start:{line:28,column:6},end:{line:28,column:15}},{start:{line:29,column:6},end:{line:31,column:7}}],line:12}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0},b:{0:[0,0,0,0,0,0,0]},inputSourceMap:{file:"db-headline.entry.js",mappings:";;AAAA,MAAM,aAAa,GAAG,gyHAAgyH;;MCMzyH,UAAU;;;mBAIgC,GAAG;iBAIb,KAAK;;EAEhD,MAAM;IACJ,QAAQ,IAAI,CAAC,OAAO;MAClB,KAAK,GAAG,EAAE;QACR,QACE,UAAI,KAAK,EAAC,cAAc,gBAAa,IAAI,CAAC,KAAK,IAC7C,eAAQ,CACL,EACL;OACH;MACD,KAAK,GAAG,EAAE;QACR,QACE,UAAI,KAAK,EAAC,cAAc,gBAAa,IAAI,CAAC,KAAK,IAC7C,eAAQ,CACL,EACL;OACH;MACD,KAAK,GAAG,EAAE;QACR,QACE,UAAI,KAAK,EAAC,cAAc,gBAAa,IAAI,CAAC,KAAK,IAC7C,eAAQ,CACL,EACL;OACH;MACD,KAAK,GAAG,EAAE;QACR,QACE,UAAI,KAAK,EAAC,cAAc,gBAAa,IAAI,CAAC,KAAK,IAC7C,eAAQ,CACL,EACL;OACH;MACD,KAAK,GAAG,EAAE;QACR,QACE,UAAI,KAAK,EAAC,cAAc,gBAAa,IAAI,CAAC,KAAK,IAC7C,eAAQ,CACL,EACL;OACH;MACD,KAAK,GAAG,CAAC;MACT,SAAS;QACP,QACE,UAAI,KAAK,EAAC,cAAc,gBAAa,IAAI,CAAC,KAAK,IAC7C,eAAQ,CACL,EACL;OACH;KACF;GACF;;;;;;",names:[],sources:["src/components/db-headline/db-headline.scss?tag=db-headline","src/components/db-headline/db-headline.tsx"],sourcesContent:["@import '../general';\n@import 'headline';\n","import { Component, h, Prop } from '@stencil/core';\n\n@Component({\n  tag: 'db-headline',\n  styleUrl: 'db-headline.scss'\n})\nexport class DbHeadline {\n  /**\n   * The variant attribute specifies the size of the headline.\n   */\n  @Prop() variant: '1' | '2' | '3' | '4' | '5' | '6' = '3';\n  /**\n   * The pulse attribute determines whether to add a visual DB Pulse to the headline.\n   */\n  @Prop({ reflect: true }) pulse?: boolean = false;\n\n  render() {\n    switch (this.variant) {\n      case '1': {\n        return (\n          <h1 class=\"elm-headline\" data-pulse={this.pulse}>\n            <slot />\n          </h1>\n        );\n      }\n      case '2': {\n        return (\n          <h2 class=\"elm-headline\" data-pulse={this.pulse}>\n            <slot />\n          </h2>\n        );\n      }\n      case '4': {\n        return (\n          <h4 class=\"elm-headline\" data-pulse={this.pulse}>\n            <slot />\n          </h4>\n        );\n      }\n      case '5': {\n        return (\n          <h5 class=\"elm-headline\" data-pulse={this.pulse}>\n            <slot />\n          </h5>\n        );\n      }\n      case '6': {\n        return (\n          <h6 class=\"elm-headline\" data-pulse={this.pulse}>\n            <slot />\n          </h6>\n        );\n      }\n      case '3':\n      default: {\n        return (\n          <h3 class=\"elm-headline\" data-pulse={this.pulse}>\n            <slot />\n          </h3>\n        );\n      }\n    }\n  }\n}\n"],version:3},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a0a59f25ccaab5c253d7e57e3a73952f078d32dd"});var actualCoverage=coverage[path];return cov_52ynhd88g=function(){return actualCoverage},actualCoverage}cov_52ynhd88g();var dbHeadlineCss=(cov_52ynhd88g().s[0]++,'@charset "UTF-8";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.elm-headline{margin-bottom:1rem;margin-top:1.5rem}.elm-headline[data-pulse]::after{background:var(--db-pulse-background, #ec0016);border-radius:calc(var(--db-logo-height, 40px) / 7 * 0.5);content:"";display:block;margin-bottom:var(--db-pulse-margin-bottom, 14px);margin-top:calc(var(--db-logo-height, 40px) * 0.5);width:var(--db-logo-width, 58px);height:calc(var(--db-logo-height, 40px) / 7)}h1.elm-headline,h2.elm-headline,h3.elm-headline{font-family:"DB Screen Head", Helvetica, Arial, sans-serif;font-weight:900}h1.elm-headline{font-size:2.25rem;line-height:1.1111111111}@media screen and (max-width: 767px){h1.elm-headline{font-size:1.75rem;line-height:1.14}}h2.elm-headline{font-size:1.5rem;line-height:1.1666666667}@media screen and (max-width: 767px){h2.elm-headline{font-size:1.25rem;line-height:1.2}}h3.elm-headline{font-size:1.25rem;line-height:1.2}@media screen and (max-width: 767px){h3.elm-headline{font-size:1.125rem;line-height:1.33}}h4.elm-headline{font-size:1.125rem;font-weight:400;line-height:1.3333333333}@media screen and (max-width: 767px){h4.elm-headline{font-size:1rem;line-height:1.25}}');cov_52ynhd88g().s[1]++;var DbHeadline=function(){function DbHeadline(hostRef){cov_52ynhd88g().f[0]++,cov_52ynhd88g().s[2]++,(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_52ynhd88g().s[3]++,this.variant="3",cov_52ynhd88g().s[4]++,this.pulse=!1}return DbHeadline.prototype.render=function render(){switch(cov_52ynhd88g().f[1]++,cov_52ynhd88g().s[5]++,this.variant){case"1":return cov_52ynhd88g().b[0][0]++,cov_52ynhd88g().s[6]++,(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1",{class:"elm-headline","data-pulse":this.pulse},(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case"2":return cov_52ynhd88g().b[0][1]++,cov_52ynhd88g().s[7]++,(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{class:"elm-headline","data-pulse":this.pulse},(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case"4":return cov_52ynhd88g().b[0][2]++,cov_52ynhd88g().s[8]++,(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("h4",{class:"elm-headline","data-pulse":this.pulse},(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case"5":return cov_52ynhd88g().b[0][3]++,cov_52ynhd88g().s[9]++,(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("h5",{class:"elm-headline","data-pulse":this.pulse},(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case"6":return cov_52ynhd88g().b[0][4]++,cov_52ynhd88g().s[10]++,(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("h6",{class:"elm-headline","data-pulse":this.pulse},(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case"3":cov_52ynhd88g().b[0][5]++;default:return cov_52ynhd88g().b[0][6]++,cov_52ynhd88g().s[11]++,(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3",{class:"elm-headline","data-pulse":this.pulse},(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}},DbHeadline}();cov_52ynhd88g().s[12]++,DbHeadline.style=dbHeadlineCss}}]);