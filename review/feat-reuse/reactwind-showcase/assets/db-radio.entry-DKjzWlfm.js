import{h as i,H as n,r,c as a}from"./index-BeFcj0As.js";import{u as d}from"./utils-e8bb3367-DE2Nm8Nv.js";var s=`@charset "UTF-8";:where(html,:host){line-height:1.15;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}:where(h1){font-size:2em;-webkit-margin-after:0.67em;margin-block-end:0.67em;-webkit-margin-before:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){-webkit-margin-after:0;margin-block-end:0;-webkit-margin-before:0;margin-block-start:0}:where(hr){-webkit-box-sizing:content-box;box-sizing:content-box;color:inherit;height:0}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,pre,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{-webkit-box-sizing:var(--db-box-sizing, border-box);box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{-webkit-box-sizing:inherit;box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{-webkit-box-sizing:var(--db-box-sizing, border-box);box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.elm-radio+label[data-label-hidden=true]{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.elm-radio:has(+label)::after{content:"";width:calc(
				var(--db-form-element-dimensions) + 0.25rem
			);height:var(--db-form-element-dimensions);-webkit-transform:translateX(0.25rem);transform:translateX(0.25rem);position:absolute}.elm-radio{--db-form-element-dimensions:var(
  	--db-radio-dimensions,
  	1.25em
  );-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(255, 255, 255, 0.1);border:0.0625rem solid #282d37;border-radius:1em;display:inline-block;font-size:1rem;height:var(--db-form-element-dimensions);-webkit-transition:border-width 0.5s ease;transition:border-width 0.5s ease;width:var(--db-form-element-dimensions)}.elm-radio[type=radio]{vertical-align:sub}.elm-radio:enabled:hover:not(:checked){background-color:rgba(40, 45, 55, 0.14)}.elm-radio:enabled:active{background-color:rgba(40, 45, 55, 0.3)}.elm-radio:checked{border-width:0.375em}.elm-radio:is(:user-invalid),.elm-radio[aria-invalid=true]{border-color:#c13e34}.elm-radio+label{-webkit-padding-start:0.25rem;padding-inline-start:0.25rem}.elm-radio:disabled,.elm-radio:disabled+label{opacity:0.5}@media (prefers-reduced-motion: reduce){.elm-radio{-webkit-transition-duration:0.01s !important;transition-duration:0.01s !important}}`,l=s,b=function(){function t(e){r(this,e),this.dbChange=a(this,"dbChange",7),this.autofocus=void 0,this.checked=void 0,this.disabled=void 0,this.input_id="radio-"+d(),this.label=void 0,this.name=void 0,this.required=void 0,this.value=void 0,this.labelHidden=void 0}return t.prototype.handleChange=function(e){this.dbChange.emit(e)},t.prototype.render=function(){var e=this;return i(n,{key:"841699f06d527a06fc0f1de0ee00ab0b2850204d"},i("input",{key:"cb2ab7268f9cdf57697a2125ba40c74a5479c5cf",type:"radio",class:"elm-radio",id:this.input_id,autofocus:this.autofocus,checked:this.checked,disabled:this.disabled,name:this.name,required:this.required,value:this.value,onChange:function(o){return e.handleChange(o)}}),i("label",{key:"ed47e86a31f8b510fab14c0a757b44a489073f51",class:"elm-label",htmlFor:this.input_id,"data-label-hidden":this.labelHidden},this.label))},t}();b.style=l;export{b as db_radio};
