import{r as o,c as i,h as t,H as r}from"./index.1493d627.js";import{u as n}from"./utils-a63157eb.90b4762b.js";const l='@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"\u2022\xA0\xA0\xA0"}:where(ul) li::marker{color:#ec0016}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}:host{display:inline-block}a{color:inherit}.elm-toggle{appearance:none;background-color:#646973;border:none;border-radius:0.75rem;display:inline-block;height:1.5rem;position:relative;transition:background-color 0.3s ease;width:3rem}@media (prefers-reduced-motion: reduce){.elm-toggle{transition-duration:0.01s !important}}.elm-toggle+.elm-label{vertical-align:top}.elm-toggle::before{background-color:#ffffff;border-radius:0.625rem;box-shadow:0 5px 30px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.15);content:"";display:block;height:1.25rem;left:0.125rem;position:absolute;top:0.125rem;transition:border-color, left 0.3s cubic-bezier(0.3, 1.5, 0.7, 1);width:1.25rem}@media (prefers-reduced-motion: reduce){.elm-toggle::before{transition-duration:0.01s !important}}.elm-toggle:hover::before{background-color:#f7f7f7}.elm-toggle:active::before{transition:width 0.3s cubic-bezier(0.3, 1.5, 0.7, 1);width:1.5rem}@media (prefers-reduced-motion: reduce){.elm-toggle:active::before{transition-duration:0.01s !important}}.elm-toggle:checked{background-color:#131821}.elm-toggle:checked::before{left:unset;right:0.125rem}.elm-toggle:disabled,.elm-toggle:disabled+label{opacity:0.5}:host{display:block}.elm-toggle::before{box-sizing:inherit}',a=class{constructor(e){o(this,e),this.dbChange=i(this,"dbChange",7),this.htmlid="toggle-"+n(),this.disabled=void 0,this.checked=void 0}handleChange(e){this.dbChange.emit(e)}render(){return t(r,null,t("input",{type:"checkbox",role:"switch",class:"elm-toggle",disabled:this.disabled,checked:this.checked,id:this.htmlid,onChange:e=>this.handleChange(e)}),t("label",{class:"elm-label",htmlFor:this.htmlid},t("slot",null)))}};a.style=l;export{a as db_toggle};
