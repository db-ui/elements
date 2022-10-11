import{r as e,c,h as o,H as b}from"./p-0b532a55.js";const t=class{constructor(o){e(this,o),this.dbChange=c(this,"dbChange",7),this.input_id="checkbox-"+Math.random().toString()}async setIndeterminate(e){this.checkboxInput.indeterminate=e}handleChange(e){this.dbChange.emit(e)}render(){return o(b,null,o("input",{type:"checkbox",class:"elm-checkbox",id:this.input_id,autofocus:this.autofocus,checked:this.checked,disabled:this.disabled,name:this.name,required:this.required,value:this.value,indeterminate:this.indeterminate,ref:e=>this.checkboxInput=e,onChange:e=>this.handleChange(e)}),o("label",{class:"elm-label",htmlFor:this.input_id},this.label))}};t.style='@charset "UTF-8";.sc-db-checkbox:where(html){line-height:1.15}.sc-db-checkbox:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-checkbox:where(dl,ol.sc-db-checkbox,ul).sc-db-checkbox .sc-db-checkbox:where(dl,ol.sc-db-checkbox,ul).sc-db-checkbox{margin-block-end:0;margin-block-start:0}.sc-db-checkbox:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-checkbox:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-checkbox:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}.sc-db-checkbox:where(b,strong).sc-db-checkbox{font-weight:bolder}.sc-db-checkbox:where(code,kbd.sc-db-checkbox,samp).sc-db-checkbox{font-family:monospace, monospace;font-size:1em}.sc-db-checkbox:where(small){font-size:80%}.sc-db-checkbox:where(table){border-color:currentColor;text-indent:0}.sc-db-checkbox:where(button,input.sc-db-checkbox,select).sc-db-checkbox{margin:0}.sc-db-checkbox:where(button){text-transform:none}.sc-db-checkbox:where(button,input.sc-db-checkbox:is([type=button i],[type=reset i].sc-db-checkbox,[type=submit i])).sc-db-checkbox{-webkit-appearance:button}.sc-db-checkbox:where(progress){vertical-align:baseline}.sc-db-checkbox:where(select){text-transform:none}.sc-db-checkbox:where(textarea){margin:0}.sc-db-checkbox:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-checkbox::-webkit-inner-spin-button,.sc-db-checkbox::-webkit-outer-spin-button{height:auto}.sc-db-checkbox::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-checkbox::-webkit-search-decoration{-webkit-appearance:none}.sc-db-checkbox::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-checkbox:where(button,input.sc-db-checkbox:is([type=button i],[type=color i].sc-db-checkbox,[type=reset i].sc-db-checkbox,[type=submit i])).sc-db-checkbox::-moz-focus-inner{border-style:none;padding:0}.sc-db-checkbox:where(button,input.sc-db-checkbox:is([type=button i],[type=color i].sc-db-checkbox,[type=reset i].sc-db-checkbox,[type=submit i])).sc-db-checkbox::-moz-focusring{outline:1px dotted ButtonText}.sc-db-checkbox:where(:-moz-ui-invalid){box-shadow:none}.sc-db-checkbox:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-checkbox:where(dialog:not([open])){display:none}.sc-db-checkbox:where(summary){display:list-item}html.sc-db-checkbox,.sc-db-checkbox-h{box-sizing:border-box}*.sc-db-checkbox,.sc-db-checkbox::before,.sc-db-checkbox::after{box-sizing:inherit}img.sc-db-checkbox,embed.sc-db-checkbox,iframe.sc-db-checkbox,object.sc-db-checkbox,video.sc-db-checkbox{height:auto;max-width:100%}iframe.sc-db-checkbox{border:0}nav.sc-db-checkbox ol.sc-db-checkbox,nav.sc-db-checkbox ul.sc-db-checkbox,[role=navigation].sc-db-checkbox ol.sc-db-checkbox,[role=navigation].sc-db-checkbox ul.sc-db-checkbox{list-style:none;margin:0;padding:0}.sc-db-checkbox:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-checkbox:is(a,button.sc-db-checkbox,input.sc-db-checkbox,textarea.sc-db-checkbox,summary).sc-db-checkbox{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-checkbox:is(a,button.sc-db-checkbox,input.sc-db-checkbox,textarea.sc-db-checkbox,summary).sc-db-checkbox:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body.sc-db-checkbox,.sc-db-checkbox-h,div.sc-db-checkbox,button.sc-db-checkbox,input.sc-db-checkbox,select.sc-db-checkbox,textarea.sc-db-checkbox{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-checkbox{color:inherit}.elm-checkbox.sc-db-checkbox{appearance:none;background-color:rgba(255, 255, 255, 0.1);border:0.0625rem solid #282d37;border-radius:4px;color:#282d37;height:1.5rem;width:1.5rem;display:inline-flex;justify-content:center;align-content:center}.elm-checkbox.sc-db-checkbox::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:" ";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.elm-checkbox.sc-db-checkbox::before{content:var(--icon-glyph)/""}}@media aural{.elm-checkbox.sc-db-checkbox::before{content:none}}@media speech{.elm-checkbox.sc-db-checkbox::before{content:none}}.elm-checkbox[type=checkbox].sc-db-checkbox{vertical-align:top}.elm-checkbox.sc-db-checkbox::before{--icon-font-size:1.375rem;margin-right:0}.elm-checkbox.sc-db-checkbox:checked{background-color:#282d37}.elm-checkbox.sc-db-checkbox:checked::before{content:"✓";color:#fff}.elm-checkbox.sc-db-checkbox:not(:disabled):hover{background-color:rgba(40, 45, 55, 0.14)}.elm-checkbox.sc-db-checkbox:not(:disabled):checked:hover{background-color:#52575f}.elm-checkbox.sc-db-checkbox:not(:disabled):active{background-color:rgba(40, 45, 55, 0.14)}.elm-checkbox.sc-db-checkbox:indeterminate:before{content:"−"}.elm-checkbox.sc-db-checkbox:disabled,.elm-checkbox.sc-db-checkbox:disabled+label.sc-db-checkbox{opacity:0.5}.elm-checkbox.sc-db-checkbox+label.sc-db-checkbox{margin-left:0.25rem}[disabled].sc-db-checkbox-h{pointer-events:none}';export{t as db_checkbox}