"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[397],{"./packages/db-ui-elements-stencil/dist/esm/db-chip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_chip:()=>DbChip});var _index_97961a4b_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-97961a4b.js"),_utils_468e8680_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/utils-468e8680.js");function cov_2337hc8xnq(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-chip.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"470f7efd46d8ffcde82babb5404f1f8c212b4292"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-chip.entry.js",statementMap:{0:{start:{line:4,column:18},end:{line:4,column:4767}},1:{start:{line:6,column:15},end:{line:21,column:1}},2:{start:{line:8,column:8},end:{line:8,column:40}},3:{start:{line:9,column:8},end:{line:9,column:43}},4:{start:{line:10,column:8},end:{line:10,column:30}},5:{start:{line:11,column:8},end:{line:11,column:30}},6:{start:{line:12,column:8},end:{line:12,column:35}},7:{start:{line:13,column:8},end:{line:13,column:41}},8:{start:{line:14,column:8},end:{line:14,column:28}},9:{start:{line:15,column:8},end:{line:15,column:30}},10:{start:{line:16,column:8},end:{line:16,column:33}},11:{start:{line:19,column:8},end:{line:19,column:542}},12:{start:{line:22,column:0},end:{line:22,column:25}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:4},end:{line:7,column:5}},loc:{start:{line:7,column:25},end:{line:17,column:5}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:18,column:4},end:{line:18,column:5}},loc:{start:{line:18,column:13},end:{line:20,column:5}},line:18}},branchMap:{0:{loc:{start:{line:19,column:68},end:{line:19,column:124}},type:"cond-expr",locations:[{start:{line:19,column:104},end:{line:19,column:114}},{start:{line:19,column:117},end:{line:19,column:124}}],line:19},1:{loc:{start:{line:19,column:357},end:{line:19,column:432}},type:"cond-expr",locations:[{start:{line:19,column:369},end:{line:19,column:425}},{start:{line:19,column:428},end:{line:19,column:432}}],line:19},2:{loc:{start:{line:19,column:451},end:{line:19,column:538}},type:"cond-expr",locations:[{start:{line:19,column:469},end:{line:19,column:530}},{start:{line:19,column:534},end:{line:19,column:538}}],line:19}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{file:"db-chip.entry.js",mappings:";;;AAAA,MAAM,SAAS,GAAG,6oJAA6oJ;;MCOlpJ,MAAM;;;+BAKf,WAAW;wBAKiC,KAAK;;;wBAeP,OAAO,GAAG,IAAI,EAAE;oBAK5B,OAAO;wBAKF,KAAK;;;IAsB1C,MAAM;QACJ,QACE,EAAC,IAAI,QACH,aACE,KAAK,EAAC,UAAU,EAChB,IAAI,EAAE,IAAI,CAAC,eAAe,KAAK,QAAQ,GAAG,UAAU,GAAG,OAAO,EAC9D,EAAE,EAAE,IAAI,CAAC,QAAQ,eACN,IAAI,CAAC,eAAe,EAC/B,QAAQ,EAAE,IAAI,CAAC,QAAQ,EACvB,IAAI,EAAE,IAAI,CAAC,IAAI,EACf,OAAO,EAAE,IAAI,CAAC,QAAQ,GACtB,EACF,aACE,OAAO,EAAE,IAAI,CAAC,QAAQ,EACtB,IAAI,EAAC,QAAQ,iBACD,MAAM,kBACJ,IAAI,CAAC,OAAO,IAEzB,IAAI,CAAC,IAAI,GAAG,eAAS,OAAO,EAAC,YAAY,EAAC,IAAI,EAAE,IAAI,CAAC,IAAI,GAAI,GAAG,IAAI,EACrE,eAAQ,EACP,IAAI,CAAC,SAAS,IACb,eAAS,OAAO,EAAC,YAAY,EAAC,IAAI,EAAE,IAAI,CAAC,SAAS,GAAI,IACpD,IAAI,CACF,CACH,EACP;KACH;;;;;;",names:[],sources:["src/components/db-chip/db-chip.scss?tag=db-chip","src/components/db-chip/db-chip.tsx"],sourcesContent:["@import '../general';\n@import 'chip';\n","import { Component, Host, h, Prop } from '@stencil/core';\nimport { uuid } from '../../utils/utils';\n\n@Component({\n  tag: 'db-chip',\n  styleUrl: 'db-chip.scss'\n})\nexport class DbChip {\n  /**\n   *  Decides which interactiontype you want to use: filter (1-n); selection (1);\n   */\n  @Prop({ reflect: true }) interactiontype: 'filter' | 'selection' =\n    'selection';\n\n  /**\n   * The disabled attribute can be set to keep a user from clicking on the chip.\n   */\n  @Prop({ reflect: true }) disabled?: boolean = false;\n\n  /**\n   * Attribute to add icon before chip.\n   */\n  @Prop({ reflect: true }) icon: string;\n\n  /**\n   * Attribute to add icon after chip.\n   */\n  @Prop({ reflect: true }) iconafter?: string;\n\n  /**\n   * The input_id of a label form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a label element.\n   */\n  @Prop({ reflect: true }) input_id: string = 'chip-' + uuid();\n\n  /**\n   *  Name to group multiple chips.\n   */\n  @Prop({ reflect: true }) name = 'chips';\n\n  /**\n   *  Selected state\n   */\n  @Prop({ reflect: true }) selected? = false;\n\n  /**\n   * Predefined variants to change background color and font color.\n   */\n  @Prop({ reflect: true }) variant:\n    | 'informative'\n    | 'success'\n    | 'warning'\n    | 'error'\n    | 'track'\n    | 'poi-essen-trinken'\n    | 'poi-einkaufen'\n    | 'poi-gesundheit'\n    | 'poi-kunst-kultur'\n    | 'poi-wissenswertes'\n    | 'poi-freizeit'\n    | 'poi-zivile-rel-einrichtungen'\n    | 'poi-dienstleistungen'\n    | 'poi-db-services-einrichtung'\n    | 'poi-wegeleitung';\n\n  render() {\n    return (\n      <Host>\n        <input\n          class=\"elm-chip\"\n          type={this.interactiontype === 'filter' ? 'checkbox' : 'radio'}\n          id={this.input_id}\n          data-type={this.interactiontype}\n          disabled={this.disabled}\n          name={this.name}\n          checked={this.selected}\n        />\n        <label\n          htmlFor={this.input_id}\n          role=\"button\"\n          aria-hidden=\"true\"\n          data-variant={this.variant}\n        >\n          {this.icon ? <db-icon variant=\"20-outline\" icon={this.icon} /> : null}\n          <slot />\n          {this.iconafter ? (\n            <db-icon variant=\"20-outline\" icon={this.iconafter} />\n          ) : null}\n        </label>\n      </Host>\n    );\n  }\n}\n"],version:3},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"470f7efd46d8ffcde82babb5404f1f8c212b4292"});var actualCoverage=coverage[path];return cov_2337hc8xnq=function(){return actualCoverage},actualCoverage}cov_2337hc8xnq();var dbChipCss=(cov_2337hc8xnq().s[0]++,'@charset "UTF-8";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.elm-chip+label{align-items:center;border:solid 1px #878c96;border-radius:0.25rem;display:inline-flex;font-size:0.875rem;height:1.75rem;justify-content:center;padding-left:0.4375rem;padding-right:0.4375rem;text-decoration:none;text-transform:capitalize;white-space:nowrap}.elm-chip+label[data-icon]::before,.elm-chip+label[data-icon-before]::before{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-chip+label[data-icon-after]::after{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-chip:not(:disabled,:checked)+label:hover{background-color:rgba(40, 45, 55, 0.03)}.elm-chip:checked+label{background-color:#282d37;border-color:transparent;color:#ffffff}.elm-chip:checked+label[data-variant=warning]{background-color:#f75f00}.elm-chip:checked+label[data-variant=error]{background-color:#ec0016}.elm-chip:checked+label[data-variant=informative]{background-color:#0087b9}.elm-chip:checked+label[data-variant=success]{background-color:#508b1b}.elm-chip:checked+label[data-variant=poi-essen-trinken]{background-color:#f39200;color:#282d37}.elm-chip:checked+label[data-variant=poi-einkaufen]{background-color:#814997}.elm-chip:checked+label[data-variant=poi-gesundheit]{background-color:#a9455d}.elm-chip:checked+label[data-variant=poi-kunst-kultur]{background-color:#e93e8f}.elm-chip:checked+label[data-variant=poi-wissenswertes]{background-color:#858379}.elm-chip:checked+label[data-variant=poi-freizeit]{background-color:#408335}.elm-chip:checked+label[data-variant=poi-zivile-rel-einrichtungen]{background-color:#00a099}.elm-chip:checked+label[data-variant=poi-dienstleistungen]{background-color:#309fd1;color:#282d37}.elm-chip:checked+label[data-variant=poi-db-services-einrichtung]{background-color:#0c3992}.elm-chip:checked+label[data-variant=poi-wegeleitung]{background-color:#3c414b}.elm-chip:disabled+label{opacity:0.5}.elm-chip[type=checkbox],.elm-chip[type=radio]{display:none}');cov_2337hc8xnq().s[1]++;var DbChip=function(){function DbChip(hostRef){cov_2337hc8xnq().f[0]++,cov_2337hc8xnq().s[2]++,(0,_index_97961a4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_2337hc8xnq().s[3]++,this.interactiontype="selection",cov_2337hc8xnq().s[4]++,this.disabled=!1,cov_2337hc8xnq().s[5]++,this.icon=void 0,cov_2337hc8xnq().s[6]++,this.iconafter=void 0,cov_2337hc8xnq().s[7]++,this.input_id="chip-"+(0,_utils_468e8680_js__WEBPACK_IMPORTED_MODULE_1__.u)(),cov_2337hc8xnq().s[8]++,this.name="chips",cov_2337hc8xnq().s[9]++,this.selected=!1,cov_2337hc8xnq().s[10]++,this.variant=void 0}return DbChip.prototype.render=function render(){return cov_2337hc8xnq().f[1]++,cov_2337hc8xnq().s[11]++,(0,_index_97961a4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_97961a4b_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_97961a4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{class:"elm-chip",type:"filter"===this.interactiontype?(cov_2337hc8xnq().b[0][0]++,"checkbox"):(cov_2337hc8xnq().b[0][1]++,"radio"),id:this.input_id,"data-type":this.interactiontype,disabled:this.disabled,name:this.name,checked:this.selected}),(0,_index_97961a4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.input_id,role:"button","aria-hidden":"true","data-variant":this.variant},this.icon?(cov_2337hc8xnq().b[1][0]++,(0,_index_97961a4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("db-icon",{variant:"20-outline",icon:this.icon})):(cov_2337hc8xnq().b[1][1]++,null),(0,_index_97961a4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),this.iconafter?(cov_2337hc8xnq().b[2][0]++,(0,_index_97961a4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("db-icon",{variant:"20-outline",icon:this.iconafter})):(cov_2337hc8xnq().b[2][1]++,null)))},DbChip}();cov_2337hc8xnq().s[12]++,DbChip.style=dbChipCss}}]);