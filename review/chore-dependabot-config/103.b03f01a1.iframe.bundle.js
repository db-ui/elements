"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[103],{"./packages/db-ui-elements-stencil/dist/esm/db-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_input:()=>DbInput});var _index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-96b5c21f.js");function cov_2bdiyl1vb4(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-input.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"3941356e1263832baa5a852502988b37f6e2d1b5"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-input.entry.js",statementMap:{0:{start:{line:3,column:19},end:{line:3,column:21963}},1:{start:{line:5,column:16},end:{line:28,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:8,column:4},end:{line:8,column:53}},4:{start:{line:12,column:4},end:{line:12,column:56}},5:{start:{line:16,column:4},end:{line:16,column:23}},6:{start:{line:20,column:4},end:{line:20,column:37}},7:{start:{line:23,column:4},end:{line:23,column:30}},8:{start:{line:26,column:4},end:{line:26,column:934}},9:{start:{line:26,column:604},end:{line:26,column:628}},10:{start:{line:29,column:0},end:{line:29,column:27}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:21,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:22,column:2},end:{line:22,column:3}},loc:{start:{line:22,column:22},end:{line:24,column:3}},line:22},2:{name:"(anonymous_2)",decl:{start:{line:25,column:2},end:{line:25,column:3}},loc:{start:{line:25,column:11},end:{line:27,column:3}},line:25},3:{name:"(anonymous_3)",decl:{start:{line:26,column:593},end:{line:26,column:594}},loc:{start:{line:26,column:604},end:{line:26,column:628}},line:26}},branchMap:{0:{loc:{start:{line:26,column:758},end:{line:26,column:859}},type:"binary-expr",locations:[{start:{line:26,column:758},end:{line:26,column:774}},{start:{line:26,column:779},end:{line:26,column:858}}],line:26},1:{loc:{start:{line:26,column:861},end:{line:26,column:931}},type:"cond-expr",locations:[{start:{line:26,column:874},end:{line:26,column:923}},{start:{line:26,column:928},end:{line:26,column:930}}],line:26}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3941356e1263832baa5a852502988b37f6e2d1b5"});var actualCoverage=coverage[path];return cov_2bdiyl1vb4=function(){return actualCoverage},actualCoverage}cov_2bdiyl1vb4();var dbInputCss=(cov_2bdiyl1vb4().s[0]++,'.sc-db-input:where(html){line-height:1.15}.sc-db-input:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-input:where(dl,ol.sc-db-input,ul).sc-db-input .sc-db-input:where(dl,ol.sc-db-input,ul).sc-db-input{margin-block-end:0;margin-block-start:0}.sc-db-input:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-input:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-input:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.sc-db-input:where(b,strong).sc-db-input{font-weight:bolder}.sc-db-input:where(code,kbd.sc-db-input,samp).sc-db-input{font-family:monospace, monospace;font-size:1em}.sc-db-input:where(small){font-size:80%}.sc-db-input:where(table){border-color:currentColor;text-indent:0}.sc-db-input:where(button,input.sc-db-input,select).sc-db-input{margin:0}.sc-db-input:where(button){text-transform:none}.sc-db-input:where(button,input.sc-db-input:is([type=button i],[type=reset i].sc-db-input,[type=submit i])).sc-db-input{-webkit-appearance:button}.sc-db-input:where(progress){vertical-align:baseline}.sc-db-input:where(select){text-transform:none}.sc-db-input:where(textarea){margin:0}.sc-db-input:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-input::-webkit-inner-spin-button,.sc-db-input::-webkit-outer-spin-button{height:auto}.sc-db-input::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-input::-webkit-search-decoration{-webkit-appearance:none}.sc-db-input::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-input:where(button,input.sc-db-input:is([type=button i],[type=color i].sc-db-input,[type=reset i].sc-db-input,[type=submit i])).sc-db-input::-moz-focus-inner{border-style:none;padding:0}.sc-db-input:where(button,input.sc-db-input:is([type=button i],[type=color i].sc-db-input,[type=reset i].sc-db-input,[type=submit i])).sc-db-input::-moz-focusring{outline:1px dotted ButtonText}.sc-db-input:where(:-moz-ui-invalid){box-shadow:none}.sc-db-input:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-input:where(dialog:not([open])){display:none}.sc-db-input:where(summary){display:list-item}html.sc-db-input,.sc-db-input-h{box-sizing:border-box}*.sc-db-input,.sc-db-input::before,.sc-db-input::after{box-sizing:inherit}img.sc-db-input,embed.sc-db-input,iframe.sc-db-input,object.sc-db-input,video.sc-db-input{height:auto;max-width:100%}iframe.sc-db-input{border:0}nav.sc-db-input ol.sc-db-input,nav.sc-db-input ul.sc-db-input,[role=navigation].sc-db-input ol.sc-db-input,[role=navigation].sc-db-input ul.sc-db-input{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}.sc-db-input:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-input:is(a,button.sc-db-input,input.sc-db-input,textarea.sc-db-input,summary).sc-db-input{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-input:is(a,button.sc-db-input,input.sc-db-input,textarea.sc-db-input,summary).sc-db-input:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body.sc-db-input,.sc-db-input-h,div.sc-db-input,button.sc-db-input,input.sc-db-input,select.sc-db-input,textarea.sc-db-input{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-input{color:inherit}.elm-input.sc-db-input{border-radius:4px;color:#282d37;caret-color:#ec0016;--formElement---borderTopColor:var(--formElement---borderColor, transparent);--formElement---borderRightColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  );--formElement---borderBottomColor:var(\n  \t--formElement---borderColor,\n  \trgba(40, 45, 55, 0.5)\n  );--formElement---borderLeftColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  )}.elm-input.sc-db-input~.description.sc-db-input{font-size:0.875rem;color:#646973;padding:0.375rem 0.625rem}.sc-db-input:not(.cmp-sitesearch)>.elm-input[type=search].sc-db-input,.elm-input[type=color][data-variant=semitransparent].sc-db-input,.elm-input[type=date][data-variant=semitransparent].sc-db-input,.elm-input[type=datetime-local][data-variant=semitransparent].sc-db-input,.elm-input[type=email][data-variant=semitransparent].sc-db-input,.elm-input[type=month][data-variant=semitransparent].sc-db-input,.elm-input[type=number][data-variant=semitransparent].sc-db-input,.elm-input[type=password][data-variant=semitransparent].sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search][data-variant=semitransparent].sc-db-input,.elm-input[type=tel][data-variant=semitransparent].sc-db-input,.elm-input[type=text][data-variant=semitransparent].sc-db-input,.elm-input[type=time][data-variant=semitransparent].sc-db-input,.elm-input[type=url][data-variant=semitransparent].sc-db-input,.elm-input[type=week][data-variant=semitransparent].sc-db-input,.sc-db-input:where(.elm-input[type=color],.elm-input[type=date].sc-db-input,.elm-input[type=datetime-local].sc-db-input,.elm-input[type=email].sc-db-input,.elm-input[type=month].sc-db-input,.elm-input[type=number].sc-db-input,.elm-input[type=password].sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search].sc-db-input,.elm-input[type=tel].sc-db-input,.elm-input[type=text].sc-db-input,.elm-input[type=time].sc-db-input,.elm-input[type=url].sc-db-input,.elm-input[type=week]).sc-db-input{background-color:rgba(40, 45, 55, 0.05);border-top:1px solid var(--formElement---borderTopColor);border-right:1px solid var(--formElement---borderRightColor);border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-top-color:transparent;border-right-color:transparent;border-left-color:transparent;--formElement---borderColor:rgba(40, 45, 55, 0.5)}.elm-input[type=color][data-variant=white].sc-db-input,.elm-input[type=date][data-variant=white].sc-db-input,.elm-input[type=datetime-local][data-variant=white].sc-db-input,.elm-input[type=email][data-variant=white].sc-db-input,.elm-input[type=month][data-variant=white].sc-db-input,.elm-input[type=number][data-variant=white].sc-db-input,.elm-input[type=password][data-variant=white].sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search][data-variant=white].sc-db-input,.elm-input[type=tel][data-variant=white].sc-db-input,.elm-input[type=text][data-variant=white].sc-db-input,.elm-input[type=time][data-variant=white].sc-db-input,.elm-input[type=url][data-variant=white].sc-db-input,.elm-input[type=week][data-variant=white].sc-db-input{background-color:#ffffff;border-top:1px solid var(--formElement---borderTopColor);border-right:1px solid var(--formElement---borderRightColor);border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-top-color:transparent;border-right-color:transparent;border-left-color:transparent;--formElement---borderColor:rgba(40, 45, 55, 0.5)}.elm-input[type=color][data-variant=solid].sc-db-input,.elm-input[type=date][data-variant=solid].sc-db-input,.elm-input[type=datetime-local][data-variant=solid].sc-db-input,.elm-input[type=email][data-variant=solid].sc-db-input,.elm-input[type=month][data-variant=solid].sc-db-input,.elm-input[type=number][data-variant=solid].sc-db-input,.elm-input[type=password][data-variant=solid].sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search][data-variant=solid].sc-db-input,.elm-input[type=tel][data-variant=solid].sc-db-input,.elm-input[type=text][data-variant=solid].sc-db-input,.elm-input[type=time][data-variant=solid].sc-db-input,.elm-input[type=url][data-variant=solid].sc-db-input,.elm-input[type=week][data-variant=solid].sc-db-input{background-color:#f0f3f5;border-top:1px solid var(--formElement---borderTopColor);border-right:1px solid var(--formElement---borderRightColor);border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-top-color:transparent;border-right-color:transparent;border-left-color:transparent;--formElement---borderColor:rgba(40, 45, 55, 0.5)}.elm-input[type=color][data-variant=outline].sc-db-input,.elm-input[type=date][data-variant=outline].sc-db-input,.elm-input[type=datetime-local][data-variant=outline].sc-db-input,.elm-input[type=email][data-variant=outline].sc-db-input,.elm-input[type=month][data-variant=outline].sc-db-input,.elm-input[type=number][data-variant=outline].sc-db-input,.elm-input[type=password][data-variant=outline].sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search][data-variant=outline].sc-db-input,.elm-input[type=tel][data-variant=outline].sc-db-input,.elm-input[type=text][data-variant=outline].sc-db-input,.elm-input[type=time][data-variant=outline].sc-db-input,.elm-input[type=url][data-variant=outline].sc-db-input,.elm-input[type=week][data-variant=outline].sc-db-input{background-color:transparent;border-top:1px solid var(--formElement---borderTopColor);border-right:1px solid var(--formElement---borderRightColor);border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);--formElement---borderColor:rgba(40, 45, 55, 0.25)}.elm-input.sc-db-input{font-size:1rem;line-height:1.5rem;color:#282d37;width:100%;max-width:100%;height:2.75rem;padding:0.5rem 1rem}.elm-input.sc-db-input:not(:placeholder-shown){padding-top:1rem;padding-bottom:0}.elm-input.sc-db-input:focus:not(:disabled),.elm-input.sc-db-input:hover:not(:disabled){--formElement---borderColor:#878c96}.elm-input.sc-db-input:disabled,.elm-input.sc-db-input:disabled+.elm-label.sc-db-input,fieldset.sc-db-input:disabled .elm-input.sc-db-input,fieldset.sc-db-input:disabled .elm-input.sc-db-input+.elm-label.sc-db-input{opacity:0.4}.elm-input[type=color].sc-db-input,.elm-input[type=date].sc-db-input,.elm-input[type=datetime-local].sc-db-input,.elm-input[type=email].sc-db-input,.elm-input[type=month].sc-db-input,.elm-input[type=number].sc-db-input,.elm-input[type=password].sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search].sc-db-input,.elm-input[type=tel].sc-db-input,.elm-input[type=text].sc-db-input,.elm-input[type=time].sc-db-input,.elm-input[type=url].sc-db-input,.elm-input[type=week].sc-db-input{margin-top:1rem}.elm-input[type=color].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=date].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=datetime-local].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=email].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=month].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=number].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=password].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=tel].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=text].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=time].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=url].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=week].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input{transition:opacity, transform 250ms}@media (prefers-reduced-motion: reduce){.elm-input[type=color].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=date].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=datetime-local].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=email].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=month].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=number].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=password].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=tel].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=text].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=time].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=url].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input,.elm-input[type=week].sc-db-input:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]):not([type=week])+.elm-label.sc-db-input{transition-duration:0.01s !important}}.elm-input[type=color].sc-db-input+.elm-label.sc-db-input,.elm-input[type=date].sc-db-input+.elm-label.sc-db-input,.elm-input[type=datetime-local].sc-db-input+.elm-label.sc-db-input,.elm-input[type=email].sc-db-input+.elm-label.sc-db-input,.elm-input[type=month].sc-db-input+.elm-label.sc-db-input,.elm-input[type=number].sc-db-input+.elm-label.sc-db-input,.elm-input[type=password].sc-db-input+.elm-label.sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search].sc-db-input+.elm-label.sc-db-input,.elm-input[type=tel].sc-db-input+.elm-label.sc-db-input,.elm-input[type=text].sc-db-input+.elm-label.sc-db-input,.elm-input[type=time].sc-db-input+.elm-label.sc-db-input,.elm-input[type=url].sc-db-input+.elm-label.sc-db-input,.elm-input[type=week].sc-db-input+.elm-label.sc-db-input{transform:translate(1rem, -2.5625rem);font-size:0.75rem;display:block;color:#646973;margin-bottom:-1.125rem}.elm-input[type=color].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.elm-input[type=date].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.elm-input[type=datetime-local].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.elm-input[type=email].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.elm-input[type=month].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.elm-input[type=number].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.elm-input[type=password].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.elm-input[type=tel].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.elm-input[type=text].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.elm-input[type=time].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.elm-input[type=url].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input,.elm-input[type=week].sc-db-input+.elm-label.sc-db-input+.description.sc-db-input{margin-top:0}.elm-input[type=color][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.elm-input[type=date][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.elm-input[type=datetime-local][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.elm-input[type=email][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.elm-input[type=month][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.elm-input[type=number][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.elm-input[type=password][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.elm-input[type=tel][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.elm-input[type=text][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.elm-input[type=time][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.elm-input[type=url][placeholder].sc-db-input:placeholder-shown+label.sc-db-input,.elm-input[type=week][placeholder].sc-db-input:placeholder-shown+label.sc-db-input{opacity:0}.elm-input[type=color].sc-db-input::placeholder,.elm-input[type=date].sc-db-input::placeholder,.elm-input[type=datetime-local].sc-db-input::placeholder,.elm-input[type=email].sc-db-input::placeholder,.elm-input[type=month].sc-db-input::placeholder,.elm-input[type=number].sc-db-input::placeholder,.elm-input[type=password].sc-db-input::placeholder,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search].sc-db-input::placeholder,.elm-input[type=tel].sc-db-input::placeholder,.elm-input[type=text].sc-db-input::placeholder,.elm-input[type=time].sc-db-input::placeholder,.elm-input[type=url].sc-db-input::placeholder,.elm-input[type=week].sc-db-input::placeholder{color:#646973}.elm-input[type=color].sc-db-input:required:valid:not([aria-invalid]),.elm-input[type=date].sc-db-input:required:valid:not([aria-invalid]),.elm-input[type=datetime-local].sc-db-input:required:valid:not([aria-invalid]),.elm-input[type=email].sc-db-input:required:valid:not([aria-invalid]),.elm-input[type=month].sc-db-input:required:valid:not([aria-invalid]),.elm-input[type=number].sc-db-input:required:valid:not([aria-invalid]),.elm-input[type=password].sc-db-input:required:valid:not([aria-invalid]),.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search].sc-db-input:required:valid:not([aria-invalid]),.elm-input[type=tel].sc-db-input:required:valid:not([aria-invalid]),.elm-input[type=text].sc-db-input:required:valid:not([aria-invalid]),.elm-input[type=time].sc-db-input:required:valid:not([aria-invalid]),.elm-input[type=url].sc-db-input:required:valid:not([aria-invalid]),.elm-input[type=week].sc-db-input:required:valid:not([aria-invalid]){--formElement---borderColor:#2a7230}.elm-input[type=color].sc-db-input:required:invalid:not(:placeholder-shown),.elm-input[type=date].sc-db-input:required:invalid:not(:placeholder-shown),.elm-input[type=datetime-local].sc-db-input:required:invalid:not(:placeholder-shown),.elm-input[type=email].sc-db-input:required:invalid:not(:placeholder-shown),.elm-input[type=month].sc-db-input:required:invalid:not(:placeholder-shown),.elm-input[type=number].sc-db-input:required:invalid:not(:placeholder-shown),.elm-input[type=password].sc-db-input:required:invalid:not(:placeholder-shown),.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search].sc-db-input:required:invalid:not(:placeholder-shown),.elm-input[type=tel].sc-db-input:required:invalid:not(:placeholder-shown),.elm-input[type=text].sc-db-input:required:invalid:not(:placeholder-shown),.elm-input[type=time].sc-db-input:required:invalid:not(:placeholder-shown),.elm-input[type=url].sc-db-input:required:invalid:not(:placeholder-shown),.elm-input[type=week].sc-db-input:required:invalid:not(:placeholder-shown){--formElement---borderColor:#ec0016}.elm-input[type=color][aria-invalid=true].sc-db-input,.elm-input[type=date][aria-invalid=true].sc-db-input,.elm-input[type=datetime-local][aria-invalid=true].sc-db-input,.elm-input[type=email][aria-invalid=true].sc-db-input,.elm-input[type=month][aria-invalid=true].sc-db-input,.elm-input[type=number][aria-invalid=true].sc-db-input,.elm-input[type=password][aria-invalid=true].sc-db-input,.sc-db-input:where(:not(.cmp-sitesearch))>.elm-input[type=search][aria-invalid=true].sc-db-input,.elm-input[type=tel][aria-invalid=true].sc-db-input,.elm-input[type=text][aria-invalid=true].sc-db-input,.elm-input[type=time][aria-invalid=true].sc-db-input,.elm-input[type=url][aria-invalid=true].sc-db-input,.elm-input[type=week][aria-invalid=true].sc-db-input{--formElement---borderColor:#ec0016}.elm-input[type=search].sc-db-input{background:var(--db_ic_search_24, url(../../../../icons/functional/images/action/db_ic_search_24.svg)) no-repeat 0.375rem 0.75rem;background-size:1.1875rem;padding-left:2rem}.sc-db-input:not(.cmp-sitesearch)>.elm-input[type=search].sc-db-input+.elm-label.sc-db-input{margin-left:1rem}');cov_2bdiyl1vb4().s[1]++;var DbInput=function(){function DbInput(hostRef){cov_2bdiyl1vb4().f[0]++,cov_2bdiyl1vb4().s[2]++,(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_2bdiyl1vb4().s[3]++,this.dbChange=(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"dbChange",7),cov_2bdiyl1vb4().s[4]++,this.input_id="input-"+Math.random().toString(),cov_2bdiyl1vb4().s[5]++,this.type="text",cov_2bdiyl1vb4().s[6]++,this.variant="semitransparent"}var _proto=DbInput.prototype;return _proto.handleChange=function handleChange(event){cov_2bdiyl1vb4().f[1]++,cov_2bdiyl1vb4().s[7]++,this.dbChange.emit(event)},_proto.render=function render(){var _this=this;return cov_2bdiyl1vb4().f[2]++,cov_2bdiyl1vb4().s[8]++,(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:this.type,class:"elm-input",id:this.input_id,"aria-invalid":this.ariainvalid,"aria-required":this.ariarequired,autocomplete:this.autocomplete,autofocus:this.autofocus,"data-dirname":this.dirname,disabled:this.disabled,list:this.list,maxlength:this.maxlength,minlength:this.minlength,name:this.name,pattern:this.pattern,placeholder:this.placeholder,readonly:this.readonly,required:this.required,size:this.size,value:this.value,"aria-labelledby":this.input_id+"-label","data-variant":this.variant,onChange:function onChange(event){return cov_2bdiyl1vb4().f[3]++,cov_2bdiyl1vb4().s[9]++,_this.handleChange(event)}}),(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:"elm-label",htmlFor:this.input_id,"aria-hidden":"true",id:this.input_id+"-label"},this.label),(cov_2bdiyl1vb4().b[0][0]++,this.description&&(cov_2bdiyl1vb4().b[0][1]++,(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{id:this.input_id+"-hint",class:"description"},this.description))),this.list?(cov_2bdiyl1vb4().b[1][0]++,(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("datalist",{id:this.list},(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))):(cov_2bdiyl1vb4().b[1][1]++,""))},DbInput}();cov_2bdiyl1vb4().s[10]++,DbInput.style=dbInputCss}}]);