"use strict";(self.webpackChunkangular_lts_minus_1_showcase=self.webpackChunkangular_lts_minus_1_showcase||[]).push([[804],{804:(g,n,r)=>{r.r(n),r.d(n,{db_language_switcher:()=>l});var t=r(125),c=r(837);const l=class{constructor(e){(0,t.r)(this,e),this.ariaSelectedIndex=void 0,this.data=void 0}get children(){return this._children}set children(e){this._children=e}componentWillLoad(){this.data?this.compData=(0,c.p)(this.data):(this._children=Array.from(this.host.children),this.children.find(e=>"li"===e.tagName.toLowerCase())?(this.hasItemsWrapper=!0,this._children.filter(e=>"li"===e.tagName.toLowerCase()).forEach((e,a)=>{a===this.ariaSelectedIndex&&e.setAttribute("aria-selected","true"),e.setAttribute("role","option")})):this.host.innerHTML="")}render(){return(0,t.h)(t.H,null,this.compData&&(0,t.h)("ul",{class:"cmp-language-switcher",innerHTML:(e=this.compData,a=this.ariaSelectedIndex,e?e.map((i,u)=>`<li role="option" ${a===u?"aria-selected":""} ><db-link title="${i.title}"  href="${i.href}">${i.label}</db-link></li>`).join("\n"):"")}),!this.compData&&(0,t.h)("ul",{class:"cmp-language-switcher"},!this.hasItemsWrapper&&this._children.map((e,a)=>(0,t.h)("li",{key:`cmp-language-switcher-item-${a}`,"aria-current":a===this.ariaSelectedIndex,innerHTML:e.outerHTML})),this.hasItemsWrapper&&(0,t.h)("slot",null)));var e,a}get host(){return(0,t.g)(this)}};l.style='@charset "UTF-8";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"\u2022\xa0\xa0\xa0"}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-language-switcher{list-style:none;margin-right:1rem;position:relative}.cmp-language-switcher:hover li:not([aria-current],[aria-selected]),.cmp-language-switcher:focus li:not([aria-current],[aria-selected]){visibility:visible}.cmp-language-switcher:hover li[aria-current=page],.cmp-language-switcher:hover li[aria-selected=true],.cmp-language-switcher:focus li[aria-current=page],.cmp-language-switcher:focus li[aria-selected=true]{color:#ec0016}.cmp-language-switcher li{background-color:#fdfdfd;position:absolute;top:1.625rem}.rea-header .cmp-language-switcher li{top:3.4375rem;z-index:40}.rea-header .cmp-language-switcher li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true]){top:6.75rem}.rea-header .cmp-language-switcher li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true]){top:10.125rem}.rea-header .cmp-language-switcher li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true]){top:13.5rem}.rea-header .cmp-language-switcher li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true]){top:16.875rem}.rea-header .cmp-language-switcher li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true])~li:not([aria-current=page],[aria-selected=true]){top:20.25rem}@media screen and (min-width: 1024px){.rea-header .cmp-language-switcher li{top:3.5rem}}.cmp-language-switcher li .elm-link,.cmp-language-switcher li a,.cmp-language-switcher li .elm-button{color:inherit;text-decoration:none}.cmp-language-switcher li:not([aria-current],[aria-selected]){visibility:hidden}.cmp-language-switcher li:not([aria-current],[aria-selected]) .elm-link,.cmp-language-switcher li:not([aria-current],[aria-selected]) a,.cmp-language-switcher li:not([aria-current],[aria-selected]) .elm-button{padding-bottom:0.9375rem;padding-right:2.125rem;padding-top:0.9375rem}.cmp-language-switcher li:not([aria-current],[aria-selected]) .elm-link:hover,.cmp-language-switcher li:not([aria-current],[aria-selected]) a:hover,.cmp-language-switcher li:not([aria-current],[aria-selected]) .elm-link:focus,.cmp-language-switcher li:not([aria-current],[aria-selected]) a:focus,.cmp-language-switcher li:not([aria-current],[aria-selected]) .elm-button:hover,.cmp-language-switcher li:not([aria-current],[aria-selected]) .elm-button:focus{background-color:#d7dce1}.cmp-language-switcher li[aria-current],.cmp-language-switcher li[aria-selected]{position:initial}.cmp-language-switcher li[aria-current] .elm-link,.cmp-language-switcher li[aria-current] a,.cmp-language-switcher li[aria-current] .elm-button,.cmp-language-switcher li[aria-selected] .elm-link,.cmp-language-switcher li[aria-selected] a,.cmp-language-switcher li[aria-selected] .elm-button{--icon-glyph-after:"\u2304";padding-bottom:1.375rem}.cmp-language-switcher li[aria-current] .elm-link::after,.cmp-language-switcher li[aria-current] a::after,.cmp-language-switcher li[aria-current] .elm-button::after,.cmp-language-switcher li[aria-selected] .elm-link::after,.cmp-language-switcher li[aria-selected] a::after,.cmp-language-switcher li[aria-selected] .elm-button::after{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-after, var(--icon-font-size, 1.5rem));margin-inline-start:var(--icon-margin-before, 0.375rem);content:var(--icon-glyph-after);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-language-switcher li[aria-current] .elm-link::after,.cmp-language-switcher li[aria-current] a::after,.cmp-language-switcher li[aria-current] .elm-button::after,.cmp-language-switcher li[aria-selected] .elm-link::after,.cmp-language-switcher li[aria-selected] a::after,.cmp-language-switcher li[aria-selected] .elm-button::after{content:var(--icon-glyph-after)/""}}@media aural{.cmp-language-switcher li[aria-current] .elm-link::after,.cmp-language-switcher li[aria-current] a::after,.cmp-language-switcher li[aria-current] .elm-button::after,.cmp-language-switcher li[aria-selected] .elm-link::after,.cmp-language-switcher li[aria-selected] a::after,.cmp-language-switcher li[aria-selected] .elm-button::after{content:none}}@media speech{.cmp-language-switcher li[aria-current] .elm-link::after,.cmp-language-switcher li[aria-current] a::after,.cmp-language-switcher li[aria-current] .elm-button::after,.cmp-language-switcher li[aria-selected] .elm-link::after,.cmp-language-switcher li[aria-selected] a::after,.cmp-language-switcher li[aria-selected] .elm-button::after{content:none}}.cmp-language-switcher li[aria-current] .elm-link:hover,.cmp-language-switcher li[aria-current] a:hover,.cmp-language-switcher li[aria-current] .elm-button:hover,.cmp-language-switcher li[aria-selected] .elm-link:hover,.cmp-language-switcher li[aria-selected] a:hover,.cmp-language-switcher li[aria-selected] .elm-button:hover{color:#ec0016}.cmp-language-switcher li[aria-current] .elm-link::after,.cmp-language-switcher li[aria-current] a::after,.cmp-language-switcher li[aria-current] .elm-button::after,.cmp-language-switcher li[aria-selected] .elm-link::after,.cmp-language-switcher li[aria-selected] a::after,.cmp-language-switcher li[aria-selected] .elm-button::after{float:right;margin-left:0.3125rem}.cmp-language-switcher li .elm-link,.cmp-language-switcher li a,.cmp-language-switcher li .elm-button{display:inline-block;padding-left:1.125rem}.cmp-language-switcher li .elm-link:hover,.cmp-language-switcher li a:hover,.cmp-language-switcher li .elm-link:focus,.cmp-language-switcher li a:focus,.cmp-language-switcher li .elm-button:hover,.cmp-language-switcher li .elm-button:focus{color:initial}.cmp-language-switcher li .elm-button{line-height:1.5;padding-right:0;border-width:0;padding-top:0.5625rem}'}}]);