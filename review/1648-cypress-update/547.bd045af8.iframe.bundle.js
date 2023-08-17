"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[547],{"./packages/db-ui-elements-stencil/dist/esm/db-tag.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_tag:()=>DbTag});var _index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-f32d3c81.js");function cov_fp6pb3tod(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-tag.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"aff20e7ee119705353536b6cb8bd5c9e9def700d"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-tag.entry.js",statementMap:{0:{start:{line:3,column:17},end:{line:3,column:4530}},1:{start:{line:5,column:14},end:{line:16,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:8,column:4},end:{line:8,column:26}},4:{start:{line:9,column:4},end:{line:9,column:31}},5:{start:{line:10,column:4},end:{line:10,column:27}},6:{start:{line:11,column:4},end:{line:11,column:29}},7:{start:{line:14,column:4},end:{line:14,column:310}},8:{start:{line:17,column:0},end:{line:17,column:23}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:12,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:13,column:2},end:{line:13,column:3}},loc:{start:{line:13,column:11},end:{line:15,column:3}},line:13}},branchMap:{0:{loc:{start:{line:14,column:58},end:{line:14,column:79}},type:"binary-expr",locations:[{start:{line:14,column:58},end:{line:14,column:70}},{start:{line:14,column:74},end:{line:14,column:79}}],line:14},1:{loc:{start:{line:14,column:94},end:{line:14,column:122}},type:"cond-expr",locations:[{start:{line:14,column:107},end:{line:14,column:114}},{start:{line:14,column:117},end:{line:14,column:122}}],line:14},2:{loc:{start:{line:14,column:126},end:{line:14,column:201}},type:"cond-expr",locations:[{start:{line:14,column:138},end:{line:14,column:194}},{start:{line:14,column:197},end:{line:14,column:201}}],line:14},3:{loc:{start:{line:14,column:220},end:{line:14,column:307}},type:"cond-expr",locations:[{start:{line:14,column:238},end:{line:14,column:299}},{start:{line:14,column:303},end:{line:14,column:307}}],line:14}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{file:"db-tag.entry.js",mappings:";;AAAA,MAAM,QAAQ,GAAG,i6IAAi6I;;MCMr6I,KAAK;;;;;;;;EAoChB,MAAM;IACJ,QACE,YACE,KAAK,EAAC,SAAS,kBACD,IAAI,CAAC,OAAO,IAAI,KAAK,eACxB,IAAI,CAAC,KAAK,GAAG,OAAO,GAAG,KAAK,IAEtC,IAAI,CAAC,IAAI,GAAG,eAAS,OAAO,EAAC,YAAY,EAAC,IAAI,EAAE,IAAI,CAAC,IAAI,GAAI,GAAG,IAAI,EACrE,eAAQ,EACP,IAAI,CAAC,SAAS,IACb,eAAS,OAAO,EAAC,YAAY,EAAC,IAAI,EAAE,IAAI,CAAC,SAAS,GAAI,IACpD,IAAI,CACH,EACP;GACH;;;;;;",names:[],sources:["src/components/db-tag/db-tag.scss?tag=db-tag","src/components/db-tag/db-tag.tsx"],sourcesContent:["@import '../general';\n@import 'tag';\n","import { Component, Prop, h } from '@stencil/core';\n\n@Component({\n  tag: 'db-tag',\n  styleUrl: 'db-tag.scss'\n})\nexport class DbTag {\n  /**\n   * Attribute to add icon before tag.\n   */\n  @Prop({ reflect: true }) icon: string;\n\n  /**\n   * Attribute to add icon after tag.\n   */\n  @Prop({ reflect: true }) iconafter?: string;\n\n  /**\n   * Attribute for changing the size of the tag.\n   */\n  @Prop({ reflect: true }) small: boolean;\n\n  /**\n   * Predefined variants to change background color and font color.\n   */\n  @Prop({ reflect: true }) variant:\n    | 'informative'\n    | 'success'\n    | 'warning'\n    | 'error'\n    | 'track'\n    | 'poi-essen-trinken'\n    | 'poi-einkaufen'\n    | 'poi-gesundheit'\n    | 'poi-kunst-kultur'\n    | 'poi-wissenswertes'\n    | 'poi-freizeit'\n    | 'poi-zivile-rel-einrichtungen'\n    | 'poi-dienstleistungen'\n    | 'poi-db-services-einrichtung'\n    | 'poi-wegeleitung';\n\n  render() {\n    return (\n      <span\n        class=\"elm-tag\"\n        data-variant={this.variant || false}\n        data-size={this.small ? 'small' : false}\n      >\n        {this.icon ? <db-icon variant=\"20-outline\" icon={this.icon} /> : null}\n        <slot />\n        {this.iconafter ? (\n          <db-icon variant=\"20-outline\" icon={this.iconafter} />\n        ) : null}\n      </span>\n    );\n  }\n}\n"],version:3},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"aff20e7ee119705353536b6cb8bd5c9e9def700d"});var actualCoverage=coverage[path];return cov_fp6pb3tod=function(){return actualCoverage},actualCoverage}cov_fp6pb3tod();var dbTagCss=(cov_fp6pb3tod().s[0]++,'@charset "UTF-8";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.elm-tag{align-items:center;background-color:#282d37;border-radius:0.25rem;color:#ffffff;display:inline-flex;font-size:0.75rem;font-weight:initial;height:1.5rem;justify-content:center;padding-left:0.25rem;padding-right:0.25rem;text-transform:capitalize;white-space:nowrap}.elm-tag[data-size=small]{height:1.25rem}.elm-tag[data-variant=warning]{background-color:#cc4e00}.elm-tag[data-variant=error]{background-color:#db0014}.elm-tag[data-variant=informative]{background-color:#006a96}.elm-tag[data-variant=success]{background-color:#467a18}.elm-tag[data-variant=track]{background-color:#0a1e6e;font-weight:700}.elm-tag[data-variant=poi-essen-trinken]{background-color:#f39200;color:#282d37}.elm-tag[data-variant=poi-einkaufen]{background-color:#814997}.elm-tag[data-variant=poi-gesundheit]{background-color:#a9455d}.elm-tag[data-variant=poi-kunst-kultur]{background-color:#e93e8f}.elm-tag[data-variant=poi-wissenswertes]{background-color:#858379}.elm-tag[data-variant=poi-freizeit]{background-color:#408335}.elm-tag[data-variant=poi-zivile-rel-einrichtungen]{background-color:#00a099}.elm-tag[data-variant=poi-dienstleistungen]{background-color:#309fd1;color:#282d37}.elm-tag[data-variant=poi-db-services-einrichtung]{background-color:#0c3992}.elm-tag[data-variant=poi-wegeleitung]{background-color:#3c414b}.elm-tag[data-icon]::before,.elm-tag[data-icon-before]::before{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-tag[data-icon]::before,.elm-tag[data-icon-before]::before{--icon-margin-after:0.125rem}.elm-tag[data-icon-after]::after{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-tag[data-icon-after]::after{--icon-margin-before:0.125rem}');cov_fp6pb3tod().s[1]++;var DbTag=function(){function DbTag(hostRef){cov_fp6pb3tod().f[0]++,cov_fp6pb3tod().s[2]++,(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_fp6pb3tod().s[3]++,this.icon=void 0,cov_fp6pb3tod().s[4]++,this.iconafter=void 0,cov_fp6pb3tod().s[5]++,this.small=void 0,cov_fp6pb3tod().s[6]++,this.variant=void 0}return DbTag.prototype.render=function render(){return cov_fp6pb3tod().f[1]++,cov_fp6pb3tod().s[7]++,(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"elm-tag","data-variant":(cov_fp6pb3tod().b[0][0]++,this.variant||(cov_fp6pb3tod().b[0][1]++,!1)),"data-size":this.small?(cov_fp6pb3tod().b[1][0]++,"small"):(cov_fp6pb3tod().b[1][1]++,!1)},this.icon?(cov_fp6pb3tod().b[2][0]++,(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("db-icon",{variant:"20-outline",icon:this.icon})):(cov_fp6pb3tod().b[2][1]++,null),(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),this.iconafter?(cov_fp6pb3tod().b[3][0]++,(0,_index_f32d3c81_js__WEBPACK_IMPORTED_MODULE_0__.h)("db-icon",{variant:"20-outline",icon:this.iconafter})):(cov_fp6pb3tod().b[3][1]++,null))},DbTag}();cov_fp6pb3tod().s[8]++,DbTag.style=dbTagCss}}]);