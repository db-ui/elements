import{h as e,H as o,r as n}from"./index-DlKPoZKf.js";import{u as a}from"./utils-468e8680-DE2Nm8Nv.js";var r=`@charset "UTF-8";:where(html,:host){line-height:1.15;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}:where(h1){font-size:2em;-webkit-margin-after:0.67em;margin-block-end:0.67em;-webkit-margin-before:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){-webkit-margin-after:0;margin-block-end:0;-webkit-margin-before:0;margin-block-start:0}:where(hr){-webkit-box-sizing:content-box;box-sizing:content-box;color:inherit;height:0}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,pre,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{-webkit-box-sizing:var(--db-box-sizing, border-box);box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{-webkit-box-sizing:inherit;box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{-webkit-box-sizing:var(--db-box-sizing, border-box);box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.elm-chip+label{-ms-flex-align:center;align-items:center;border:solid 1px #878c96;border-radius:0.25rem;display:-ms-inline-flexbox;display:inline-flex;font-weight:500;font-size:0.875rem;height:1.75rem;-ms-flex-pack:center;justify-content:center;padding-left:0.4375rem;padding-right:0.4375rem;text-decoration:none;text-transform:capitalize;white-space:nowrap}.elm-chip+label[data-icon]::before,.elm-chip+label[data-icon-before]::before{--icon-font-family:"icons-20-outline",
  	"missing-icons" !important;--icon-font-size:1.25rem}.elm-chip+label[data-icon-after]::after{--icon-font-family:"icons-20-outline",
  	"missing-icons" !important;--icon-font-size:1.25rem}.elm-chip:not(:disabled,:checked)+label:hover{background-color:rgba(40, 45, 55, 0.03)}.elm-chip:checked+label{background-color:#282d37;border-color:transparent;color:#ffffff}.elm-chip:checked+label[data-variant=light]{background-color:#d7dce1;color:#282d37;border:1px solid #878c96}.elm-chip:checked+label[data-variant=warning]{background-color:#f75f00}.elm-chip:checked+label[data-variant=error]{background-color:#ec0016}.elm-chip:checked+label[data-variant=informative]{background-color:#0087b9}.elm-chip:checked+label[data-variant=success]{background-color:#508b1b}.elm-chip:checked+label[data-variant=poi-essen-trinken]{background-color:#f39200;color:#282d37}.elm-chip:checked+label[data-variant=poi-einkaufen]{background-color:#814997}.elm-chip:checked+label[data-variant=poi-gesundheit]{background-color:#a9455d}.elm-chip:checked+label[data-variant=poi-kunst-kultur]{background-color:#e93e8f}.elm-chip:checked+label[data-variant=poi-wissenswertes]{background-color:#858379}.elm-chip:checked+label[data-variant=poi-freizeit]{background-color:#408335}.elm-chip:checked+label[data-variant=poi-zivile-rel-einrichtungen]{background-color:#00a099}.elm-chip:checked+label[data-variant=poi-dienstleistungen]{background-color:#309fd1;color:#282d37}.elm-chip:checked+label[data-variant=poi-db-services-einrichtung]{background-color:#0c3992}.elm-chip:checked+label[data-variant=poi-wegeleitung]{background-color:#3c414b}.elm-chip:disabled+label{opacity:0.5}.elm-chip[type=checkbox],.elm-chip[type=radio]{display:none}`,c=r,l=function(){function t(i){n(this,i),this.interactiontype="selection",this.disabled=!1,this.icon=void 0,this.iconafter=void 0,this.input_id="chip-"+a(),this.name="chips",this.selected=!1,this.variant=void 0}return t.prototype.render=function(){return e(o,{key:"b4ae109b3e446a5d54eee616b0799f7b455ef91e"},e("input",{key:"e3bc49dc53dd611c0678a0c5cde1f09d44168fbf",class:"elm-chip",type:this.interactiontype==="filter"?"checkbox":"radio",id:this.input_id,"data-type":this.interactiontype,disabled:this.disabled,name:this.name,checked:this.selected}),e("label",{key:"a97206f1f39c63028fa4f236a834b2bd93c85f46",htmlFor:this.input_id,role:"button","aria-hidden":"true","data-variant":this.variant},this.icon?e("db-icon",{variant:"20-outline",icon:this.icon}):null,e("slot",{key:"a3f4d205c9a1c1073bb1876d3c791fa65d4083ca"}),this.iconafter?e("db-icon",{variant:"20-outline",icon:this.iconafter}):null))},t}();l.style=c;export{l as db_chip};
