"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[771],{"./packages/db-ui-elements-stencil/dist/esm/db-tab.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_tab:()=>DbTab});var _index_4356d71e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-4356d71e.js"),_utils_468e8680_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/utils-468e8680.js");function cov_1hldd323fd(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-tab.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"4d0be9c26ec46a308f9a3ec1d81fb3729d745bc7"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-tab.entry.js",statementMap:{0:{start:{line:4,column:17},end:{line:4,column:4928}},1:{start:{line:5,column:20},end:{line:5,column:28}},2:{start:{line:7,column:14},end:{line:18,column:1}},3:{start:{line:9,column:8},end:{line:9,column:40}},4:{start:{line:10,column:8},end:{line:10,column:32}},5:{start:{line:11,column:8},end:{line:11,column:31}},6:{start:{line:12,column:8},end:{line:12,column:30}},7:{start:{line:13,column:8},end:{line:13,column:25}},8:{start:{line:16,column:8},end:{line:16,column:514}},9:{start:{line:19,column:0},end:{line:19,column:26}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:8,column:4},end:{line:8,column:5}},loc:{start:{line:8,column:25},end:{line:14,column:5}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:15,column:4},end:{line:15,column:5}},loc:{start:{line:15,column:13},end:{line:17,column:5}},line:15}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0},b:{},inputSourceMap:{file:"db-tab.entry.js",mappings:";;;AAAA,MAAM,QAAQ,GAAG,+yJAA+yJ,CAAC;AACj0J,oBAAe,QAAQ;;MCKV,KAAK;IAkBhB;;;;;QACE,IAAI,CAAC,EAAE,GAAG,IAAI,EAAE,CAAC;KAClB;IAED,MAAM;QACJ,QACE,EAAC,IAAI,qDAAC,KAAK,EAAC,YAAY,IACtB,8DACE,IAAI,EAAC,OAAO,EACZ,IAAI,EAAE,IAAI,CAAC,IAAI,EACf,EAAE,EAAE,IAAI,CAAC,EAAE,EACX,OAAO,EAAE,IAAI,CAAC,MAAM,GACpB,EACF,8DAAO,OAAO,EAAE,IAAI,CAAC,EAAE,EAAE,IAAI,EAAC,KAAK,IAChC,IAAI,CAAC,KAAK,CACL,EACR,gEAAS,EAAE,EAAE,WAAW,IAAI,CAAC,EAAE,EAAE,EAAE,IAAI,EAAC,UAAU,IAChD,8DAAQ,CACA,CACL,EACP;KACH;;;;;;",names:[],sources:["src/components/db-tab/db-tab.scss?tag=db-tab","src/components/db-tab/db-tab.tsx"],sourcesContent:["@import '../general';\n@import 'tab-bar';\n\n.cmp-db-tab {\n  display: contents;\n}\n","import { Component, Host, h, Prop } from '@stencil/core';\nimport { uuid } from '../../utils/utils';\n@Component({\n  tag: 'db-tab',\n  styleUrl: 'db-tab.scss'\n})\nexport class DbTab {\n  /**\n   * If the tab is checked/active.\n   */\n  @Prop({ reflect: true }) active: boolean;\n\n  /**\n   * The label of the tab, shown in the tab-bar.\n   */\n  @Prop({ reflect: true }) label: string;\n\n  /**\n   * The name of the tab bar, is required for grouping multiple tabs together. Otherwise content won't switch by clicking the tabs.\n   */\n  @Prop({ reflect: true }) name: string;\n\n  private readonly id: string;\n\n  constructor() {\n    this.id = uuid();\n  }\n\n  render() {\n    return (\n      <Host class=\"cmp-db-tab\">\n        <input\n          type=\"radio\"\n          name={this.name}\n          id={this.id}\n          checked={this.active}\n        />\n        <label htmlFor={this.id} role=\"tab\">\n          {this.label}\n        </label>\n        <section id={`content-${this.id}`} role=\"tabpanel\">\n          <slot />\n        </section>\n      </Host>\n    );\n  }\n}\n"],version:3},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4d0be9c26ec46a308f9a3ec1d81fb3729d745bc7"});var actualCoverage=coverage[path];return cov_1hldd323fd=function(){return actualCoverage},actualCoverage}cov_1hldd323fd();var dbTabCss=(cov_1hldd323fd().s[0]++,'@charset "UTF-8";:where(html,:host){line-height:1.15;-webkit-text-size-adjust:100%;text-size-adjust:100%}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,pre,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-tab-bar{display:flex;flex-wrap:wrap}.cmp-tab-bar label[role=tab],.cmp-tab-bar section[role=tabpanel]{background-color:#fdfdfd}.cmp-tab-bar>input[type=radio],.cmp-tab-bar>*>input[type=radio]{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-tab-bar>input[type=radio]+label[role=tab],.cmp-tab-bar>*>input[type=radio]+label[role=tab]{border-top-left-radius:4px;border-top-right-radius:4px;cursor:pointer;display:inline-block;margin-left:0.5rem;padding:0.3125rem 2rem;position:relative;z-index:1}.cmp-tab-bar>input[type=radio]+label[role=tab]:first-of-type,.cmp-tab-bar>*>input[type=radio]+label[role=tab]:first-of-type{margin-left:1rem}.cmp-tab-bar>input[type=radio]:focus+label,.cmp-tab-bar>*>input[type=radio]:focus+label{outline:1px dotted #878c96}.cmp-tab-bar>input[type=radio]:not(:checked)+label[role=tab]:hover,.cmp-tab-bar>input[type=radio]:not(:checked)+label[role=tab]:focus,.cmp-tab-bar>*>input[type=radio]:not(:checked)+label[role=tab]:hover,.cmp-tab-bar>*>input[type=radio]:not(:checked)+label[role=tab]:focus{background-color:#f0f3f5}.cmp-tab-bar>input[type=radio]:disabled+label[role=tab],.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]{color:#878c96}.cmp-tab-bar>input[type=radio]:disabled+label[role=tab]:hover,.cmp-tab-bar>input[type=radio]:disabled+label[role=tab]:focus,.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]:hover,.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]:focus{background-color:unset}.cmp-tab-bar>input[type=radio]:checked+label[role=tab],.cmp-tab-bar>*>input[type=radio]:checked+label[role=tab]{border:0.0625rem solid #646973;border-bottom:none;font-weight:700;padding-top:0.1875rem;transform:translateY(0.0625rem)}.cmp-tab-bar>input[type=radio]:checked+label[role=tab]+section[role=tabpanel],.cmp-tab-bar>*>input[type=radio]:checked+label[role=tab]+section[role=tabpanel]{display:initial}.cmp-tab-bar section[role=tabpanel]{border-top:0.0625rem solid #646973;box-shadow:0 2px 5px rgba(0, 0, 0, 0.08), 0 15px 30px rgba(0, 0, 0, 0.05);display:none;flex-basis:100%;order:1;padding:2.875rem 3.125rem}.cmp-db-tab{display:contents}'),DbTabStyle0=(cov_1hldd323fd().s[1]++,dbTabCss);cov_1hldd323fd().s[2]++;var DbTab=function(){function DbTab(hostRef){cov_1hldd323fd().f[0]++,cov_1hldd323fd().s[3]++,(0,_index_4356d71e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_1hldd323fd().s[4]++,this.active=void 0,cov_1hldd323fd().s[5]++,this.label=void 0,cov_1hldd323fd().s[6]++,this.name=void 0,cov_1hldd323fd().s[7]++,this.id=(0,_utils_468e8680_js__WEBPACK_IMPORTED_MODULE_1__.u)()}return DbTab.prototype.render=function render(){return cov_1hldd323fd().f[1]++,cov_1hldd323fd().s[8]++,(0,_index_4356d71e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4356d71e_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"fe3727d32270ea14e985b1d2e3f549a636833ca3",class:"cmp-db-tab"},(0,_index_4356d71e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"d65972a8d9b749d66ecc29995875c7a3efdda4af",type:"radio",name:this.name,id:this.id,checked:this.active}),(0,_index_4356d71e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"aeffff7cb7ae80ccb3bad8d8bfce6cafc03a1440",htmlFor:this.id,role:"tab"},this.label),(0,_index_4356d71e_js__WEBPACK_IMPORTED_MODULE_0__.h)("section",{key:"333b5cbdb997e448ac444713be8d7a8b3e476863",id:"content-"+this.id,role:"tabpanel"},(0,_index_4356d71e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"f84bb28a3535d8e72ae53a148e230b326884632e"})))},DbTab}();cov_1hldd323fd().s[9]++,DbTab.style=DbTabStyle0}}]);