"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[710],{"./packages/db-ui-elements-stencil/dist/esm/db-accordion.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_accordion:()=>DbAccordion});var _index_4d57a8f5_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-4d57a8f5.js");function cov_2q8mtr1wpq(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-accordion.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"c4cb13340d0c2029404a8bbd297845043f4f6d8f"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-accordion.entry.js",statementMap:{0:{start:{line:3,column:23},end:{line:3,column:4970}},1:{start:{line:4,column:26},end:{line:4,column:40}},2:{start:{line:6,column:20},end:{line:17,column:1}},3:{start:{line:8,column:8},end:{line:8,column:40}},4:{start:{line:9,column:8},end:{line:9,column:34}},5:{start:{line:10,column:8},end:{line:10,column:30}},6:{start:{line:11,column:8},end:{line:11,column:33}},7:{start:{line:12,column:8},end:{line:12,column:30}},8:{start:{line:15,column:8},end:{line:15,column:342}},9:{start:{line:18,column:0},end:{line:18,column:38}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:4},end:{line:7,column:5}},loc:{start:{line:7,column:25},end:{line:13,column:5}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:14,column:4},end:{line:14,column:5}},loc:{start:{line:14,column:13},end:{line:16,column:5}},line:14}},branchMap:{0:{loc:{start:{line:15,column:121},end:{line:15,column:151}},type:"cond-expr",locations:[{start:{line:15,column:137},end:{line:15,column:143}},{start:{line:15,column:146},end:{line:15,column:151}}],line:15}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0},b:{0:[0,0]},inputSourceMap:{file:"db-accordion.entry.js",mappings:";;AAAA,MAAM,cAAc,GAAG,m1JAAm1J,CAAC;AAC32J,0BAAe,cAAc;;MCKhB,WAAW;;;;oBASyB,SAAS;;;;IAYxD,MAAM;QACJ,QACE,gEACE,KAAK,EAAC,eAAe,mBACN,IAAI,CAAC,QAAQ,GAAG,MAAM,GAAG,KAAK,eAClC,IAAI,CAAC,IAAI,EACpB,IAAI,EAAE,IAAI,CAAC,IAAI,IAEf,kEACG,IAAI,CAAC,OAAO,CACL,EACV,8DAAQ,CACA,EACV;KACH;;;;;;",names:[],sources:["src/components/db-accordion/db-accordion.scss?tag=db-accordion","src/components/db-accordion/db-accordion.tsx"],sourcesContent:["@import '../general';\n@import 'accordion';\n","import { Component, h, Prop } from '@stencil/core';\n\n@Component({\n  tag: 'db-accordion',\n  styleUrl: 'db-accordion.scss'\n})\nexport class DbAccordion {\n  /**\n   * The emphasis to highlight the summary.\n   */\n  @Prop() emphasis?: boolean;\n\n  /**\n   * The size increase the size of the summary.\n   */\n  @Prop() size?: 'small' | 'regular' | 'large' = 'regular';\n\n  /**\n   * The summary which shows the text which is visible when the accordion is collapsed.\n   */\n  @Prop() summary!: string;\n\n  /**\n   * The emphasis to highlight the summary.\n   */\n  @Prop() open?: boolean;\n\n  render() {\n    return (\n      <details\n        class=\"cmp-accordion\"\n        data-emphasis={this.emphasis ? 'high' : false}\n        data-size={this.size}\n        open={this.open}\n      >\n        <summary>\n          {this.summary}\n        </summary>\n        <slot />\n      </details>\n    );\n  }\n}\n"],version:3},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c4cb13340d0c2029404a8bbd297845043f4f6d8f"});var actualCoverage=coverage[path];return cov_2q8mtr1wpq=function(){return actualCoverage},actualCoverage}cov_2q8mtr1wpq();var dbAccordionCss=(cov_2q8mtr1wpq().s[0]++,'@charset "UTF-8";:where(html,:host){line-height:1.15;-webkit-text-size-adjust:100%;text-size-adjust:100%}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,pre,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-accordion{--db-accordion---paddingLeft:0.0625remrem;border-bottom:1px solid #d7dce1;padding-left:var(--db-accordion---paddingLeft);padding-right:1rem}.cmp-accordion summary{--icon-glyph-after:"⌄";align-items:center;display:flex;justify-content:space-between;padding-block:0.75rem;transform:translateX(calc(var(--db-accordion---paddingLeft) * -1));width:calc(\n\t\t\t100% + var(--db-accordion---paddingLeft) + 1rem\n\t\t)}.cmp-accordion summary::after{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-after, var(--icon-font-size, 1.5rem));margin-inline-start:var(--icon-margin-before, 0.375rem);content:var(--icon-glyph-after);content:var(--icon-glyph-after)/"";display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@media aural{.cmp-accordion summary::after{content:none}}@media speech{.cmp-accordion summary::after{content:none}}.cmp-accordion summary::-webkit-details-marker{display:none}.cmp-accordion summary:first-of-type{list-style-type:none}.cmp-accordion summary::after{--icon-margin-before:0.5rem;margin-right:0.875rem}.cmp-accordion summary+p{margin-top:0}.cmp-accordion[open]>summary::after{content:"⌃"}.cmp-accordion[data-emphasis=high]{--db-accordion---paddingLeft:0.5625remrem}.cmp-accordion[data-emphasis=high] summary{font-weight:700;height:3.5rem}.cmp-accordion[data-emphasis=high] summary::after{--icon-font-size:2rem}.cmp-accordion[data-size=small]{--db-accordion---paddingLeft:-0.6875remrem}.cmp-accordion[data-size=small] summary{font-size:0.875rem;padding-block:0.59375rem}.cmp-accordion[data-size=small] summary::after{--icon-font-size:1.25rem;--icon-margin-after:0.375rem;margin-left:0.375rem}.cmp-accordion[data-size=large]{--db-accordion---paddingLeft:0.5625remrem}.cmp-accordion[data-size=large] summary{font-size:1.25rem;padding-block:1rem}.cmp-accordion[data-size=large] summary::after{--icon-font-size:2rem}'),DbAccordionStyle0=(cov_2q8mtr1wpq().s[1]++,dbAccordionCss);cov_2q8mtr1wpq().s[2]++;var DbAccordion=function(){function DbAccordion(hostRef){cov_2q8mtr1wpq().f[0]++,cov_2q8mtr1wpq().s[3]++,(0,_index_4d57a8f5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_2q8mtr1wpq().s[4]++,this.emphasis=void 0,cov_2q8mtr1wpq().s[5]++,this.size="regular",cov_2q8mtr1wpq().s[6]++,this.summary=void 0,cov_2q8mtr1wpq().s[7]++,this.open=void 0}return DbAccordion.prototype.render=function render(){return cov_2q8mtr1wpq().f[1]++,cov_2q8mtr1wpq().s[8]++,(0,_index_4d57a8f5_js__WEBPACK_IMPORTED_MODULE_0__.h)("details",{key:"a3913820c039fbe2044cf0b9c841330504c3032a",class:"cmp-accordion","data-emphasis":this.emphasis?(cov_2q8mtr1wpq().b[0][0]++,"high"):(cov_2q8mtr1wpq().b[0][1]++,!1),"data-size":this.size,open:this.open},(0,_index_4d57a8f5_js__WEBPACK_IMPORTED_MODULE_0__.h)("summary",{key:"c9e4d40bf11f39643b9893d980862a30ccbb36ce"},this.summary),(0,_index_4d57a8f5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"9d4cbba7bfb45788d09dfdb3e6839aec2b1fa052"}))},DbAccordion}();cov_2q8mtr1wpq().s[9]++,DbAccordion.style=DbAccordionStyle0}}]);