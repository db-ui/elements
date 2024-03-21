import{r as n,h as t,H as o,g as l}from"./index-UQM5bTlX.js";import{p as r,g as a}from"./utils-468e8680-CidFOSnN.js";const s=`@charset "UTF-8";:where(html,:host){line-height:1.15;-webkit-text-size-adjust:100%;text-size-adjust:100%}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,pre,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-link-list{list-style:none;padding-left:0}.cmp-link-list li .elm-link,.cmp-link-list li a{--icon-glyph-before:">";font-weight:700;text-decoration:none}.cmp-link-list li .elm-link::before,.cmp-link-list li a::before{--icon-font-family:"icons-24-outline",
  	"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-link-list li .elm-link::before,.cmp-link-list li a::before{content:var(--icon-glyph-before)/""}}@media aural{.cmp-link-list li .elm-link::before,.cmp-link-list li a::before{content:none}}@media speech{.cmp-link-list li .elm-link::before,.cmp-link-list li a::before{content:none}}.cmp-link-list li .elm-link:hover,.cmp-link-list li a:hover,.cmp-link-list li .elm-link:active,.cmp-link-list li a:active{text-decoration:underline}.cmp-link-list li .elm-link::before,.cmp-link-list li a::before{color:#ec0016;display:inline-block;font-size:0.75rem;font-weight:700;margin-top:-0.125rem;vertical-align:middle}:host{display:block}`,c=s,m=class{constructor(e){n(this,e),this.data=void 0}get children(){return this._children}set children(e){this._children=e}componentWillLoad(){this.data?this.compData=r(this.data):(this._children=Array.from(this.host.children),this.children.find(e=>e.tagName.toLowerCase()==="li")?this.hasItemsWrapper=!0:this.host.innerHTML="")}render(){return t(o,{key:"c060b013e8536e3aaf21df5c1833985a1b29dc1c"},this.compData&&t("ul",{class:"cmp-link-list",innerHTML:a(this.compData)}),!this.compData&&t("ul",{class:"cmp-link-list"},!this.hasItemsWrapper&&this._children.map((e,i)=>t("li",{key:`cmp-link-list-item-${i}`,innerHTML:e.outerHTML})),this.hasItemsWrapper&&t("slot",null)))}get host(){return l(this)}};m.style=c;export{m as db_linklist};
