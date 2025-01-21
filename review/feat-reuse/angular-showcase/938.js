"use strict";(self.webpackChunkangular_showcase=self.webpackChunkangular_showcase||[]).push([[938],{938:(m,t,o)=>{o.r(t),o.d(t,{db_sidenavi:()=>s});var n=o(310),a=o(576);const l=i=>i?i.map(e=>`<li><db-link href="${e.href}" target="${e.target}" icon-variant="${!!e.icon&&"32-outline"}" icon="${e.icon}" current="${e.ariaCurrent}">${e.label}</db-link></li>`).join("\n"):"",s=(()=>{let i=class{constructor(e){(0,n.r)(this,e),this.data=void 0}get children(){return this._children}set children(e){this._children=e}componentWillLoad(){this.data?this.compData=(0,a.p)(this.data):((0,a.a)(this.host,"32-outline"),this._children=Array.from(this.host.children),this.children.find(e=>"li"===e.tagName.toLowerCase())?this.hasItemsWrapper=!0:this.host.innerHTML="")}render(){return(0,n.h)("nav",{key:"f1cf42c59807e66da152d1466febd16808febe16",class:"cmp-sidenavi"},this.compData&&(0,n.h)("ol",{key:"e130c2a91793d7aedd9d7328c3c80c49aa73ea1c",innerHTML:l(this.compData)}),!this.compData&&(0,n.h)("ol",{key:"6d13d423087ddb39429e10eaa05504d8e1849607"},!this.hasItemsWrapper&&this._children.map((e,c)=>(0,n.h)("li",{key:`sidenavi-item-${c}`,innerHTML:e.outerHTML})),this.hasItemsWrapper&&(0,n.h)("slot",{key:"4cd42def9c9e267df9688e505a93d15b216e5315"})))}get host(){return(0,n.g)(this)}};return i.style='@charset "UTF-8";:where(html,:host){line-height:1.15;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}:where(h1){font-size:2em;-webkit-margin-after:0.67em;margin-block-end:0.67em;-webkit-margin-before:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){-webkit-margin-after:0;margin-block-end:0;-webkit-margin-before:0;margin-block-start:0}:where(hr){-webkit-box-sizing:content-box;box-sizing:content-box;color:inherit;height:0}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,pre,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{-webkit-box-sizing:var(--db-box-sizing, border-box);box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{-webkit-box-sizing:inherit;box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"\u2022\xa0\xa0\xa0"}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{-webkit-box-sizing:var(--db-box-sizing, border-box);box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-sidenavi{background-color:#3c414b;-webkit-box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);display:inline-block}.cmp-sidenavi .elm-link,.cmp-sidenavi a{border-radius:initial;color:#d7dce1;display:block;padding:1.25rem 1rem;text-decoration:none}.cmp-sidenavi .elm-link:hover,.cmp-sidenavi a:hover,.cmp-sidenavi .elm-link:focus,.cmp-sidenavi a:focus,.cmp-sidenavi .elm-link[aria-current=page],.cmp-sidenavi a[aria-current=page]{color:#3c414b}.cmp-sidenavi .elm-link:hover,.cmp-sidenavi a:hover,.cmp-sidenavi .elm-link:focus,.cmp-sidenavi a:focus{background-color:#afb4bb}.cmp-sidenavi .elm-link[aria-current=page],.cmp-sidenavi a[aria-current=page]{background-color:#d7dce1;font-weight:700}.cmp-sidenavi .elm-link[rel],.cmp-sidenavi a[rel]{padding-left:1.3125rem}.cmp-sidenavi .elm-link[rel=index],.cmp-sidenavi a[rel=index]{--icon-glyph-before:"\u2302"}.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{--icon-font-family:"icons-32-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));-webkit-margin-end:var(--icon-margin-after, 0.375rem);margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:var(--icon-glyph-before)/""}}@media aural{.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:none}}.cmp-sidenavi .elm-link[rel=documents],.cmp-sidenavi a[rel=documents]{--icon-glyph-before:"\u{1f5b9}"}.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{--icon-font-family:"icons-32-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));-webkit-margin-end:var(--icon-margin-after, 0.375rem);margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:var(--icon-glyph-before)/""}}@media aural{.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:none}}.cmp-sidenavi .elm-link[rel=dashboard],.cmp-sidenavi a[rel=dashboard]{--icon-glyph-before:"\u{e1164}"}.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{--icon-font-family:"icons-32-enterprise-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));-webkit-margin-end:var(--icon-margin-after, 0.375rem);margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:var(--icon-glyph-before)/""}}@media aural{.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:none}}.cmp-sidenavi .elm-link[rel=cloud],.cmp-sidenavi a[rel=cloud]{--icon-glyph-before:"\u2601"}.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{--icon-font-family:"icons-32-enterprise-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));-webkit-margin-end:var(--icon-margin-after, 0.375rem);margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:var(--icon-glyph-before)/""}}@media aural{.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:none}}.cmp-sidenavi .elm-link[rel=calendar],.cmp-sidenavi a[rel=calendar]{--icon-glyph-before:"\u{e1247}"}.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{--icon-font-family:"icons-32-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));-webkit-margin-end:var(--icon-margin-after, 0.375rem);margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:var(--icon-glyph-before)/""}}@media aural{.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:none}}.cmp-sidenavi .elm-link[rel=help],.cmp-sidenavi a[rel=help]{--icon-glyph-before:"?"}.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{--icon-font-family:"icons-32-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));-webkit-margin-end:var(--icon-margin-after, 0.375rem);margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:var(--icon-glyph-before)/""}}@media aural{.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:none}}.cmp-sidenavi db-icon{margin-right:0.375rem}',i})()}}]);