"use strict";(self.webpackChunkreactwind_showcase=self.webpackChunkreactwind_showcase||[]).push([[664],{7664:(e,t,n)=>{n.r(t),n.d(t,{db_pagination:()=>o});var i=n(7660),a=n(4088);const o=class{constructor(e){(0,i.r)(this,e),this.dbChange=(0,i.c)(this,"dbChange",7),this.ellipsisstart=void 0,this.ellipsisend=void 0,this.currentpage=1,this.pages=2,this.count=2,this.titleprevious="Goto previous page",this.titlenext="Goto next page",this.titlepagination="Page Number",this.textprevious="Previous",this.textnext="Next",this.arialabel="Pagination",this.ariaid="pagination-"+(0,a.u)()}handleChange(e){this.dbChange.emit(e)}watchHandler(){this.sliceAndSetDefaults()}componentWillLoad(){this.sliceAndSetDefaults()}sliceAndSetDefaults(){const e=Array.from(Array(this.pages+1).keys()),[,...t]=e;this.pagesFull=t}decorateChild(e){return e.setAttribute("class","elm-link"),e.getAttribute("data-currentpage")&&(e.setAttribute("aria-current","page"),e.setAttribute("aria-disabled","true")),(0,i.h)("li",{innerHTML:e.outerHTML})}paginationButtonFragment(e){let{page:t,curr:n,ariaCurrent:a,ariaDisabled:o,title:r,rel:l,tabindex:s,disabled:c,index:m}=e;return(0,i.h)("li",{key:m},(0,i.h)("button",Object.assign({class:"elm-link","data-rel":"none"!==l&&"".concat(l),tabindex:!!s&&"-1",title:r+" ".concat(t||""),type:"button"},(t===n||c)&&a,(t===n||c)&&o,{onClick:e=>this.handleChange(e)}),t))}navElement(e){return(0,i.h)("nav",{class:"cmp-pagination",role:"navigation","aria-labelledby":this.ariaid},(0,i.h)("h2",{class:"elm-headline ",id:this.ariaid},this.arialabel.charAt(0).toUpperCase()+this.arialabel.slice(1)),(0,i.h)("ol",null,e))}slotChildren(){const e=Array.from(this.hostElement.children);this.hostElement.innerHTML="";const[t,...n]=e,[a,...o]=[...n].reverse(),r=o.reverse(),l=r.findIndex((e=>e.getAttribute("data-currentpage"))),s=l>=0?r[l-1].cloneNode(!0):t.cloneNode(!0);s.setAttribute("rel","prev"),s.setAttribute("tabindex","-1");const c=l>=0&&r.length<=l?r[l+1].cloneNode(!0):a.cloneNode(!0);return c.setAttribute("rel","next"),this.navElement((0,i.h)(i.F,null,this.decorateChild(s),this.decorateChild(t),this.ellipsisstart&&(0,i.h)("li",null,"\u2026"),r.map(this.decorateChild),this.ellipsisend&&(0,i.h)("li",null,"\u2026"),this.decorateChild(a),this.decorateChild(c)))}goToPreviousPage(){return this.paginationButtonFragment({page:1===this.currentpage?this.currentpage:this.currentpage-1,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"prev",tabindex:!0,disabled:1===this.currentpage,index:"A"})}goToNextPage(){return this.paginationButtonFragment({page:this.currentpage===this.pages+1?this.currentpage:this.currentpage+1,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlenext,rel:"next",tabindex:!0,disabled:this.currentpage===this.pages,index:"E"})}goToFirstPage(){return this.paginationButtonFragment({page:this.pagesFull[0],curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:!1,index:"B"})}goToLastPage(){return this.paginationButtonFragment({page:this.pagesFull.slice(-1),curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:this.currentpage===this.pages,index:"C"})}showMiddlePage(e){return this.paginationButtonFragment({page:e,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:!1,index:e})}showEllipsis(e){return this.pagesFull.length<8||this.currentpage<4&&"front"===e||this.currentpage>this.pagesFull.length-5&&"back"===e?null:(0,i.h)("li",{key:e},"\u2026")}sliceCenterPages(){if(this.pagesFull.length<8)return this.pagesFull.slice(1,-1);const e=this.currentpage<=3||this.currentpage>=this.pagesFull.length-3?this.count+1:this.count;if(this.currentpage+this.count>=this.pagesFull.length)return this.pagesFull.slice(-e-1,-1);if(this.pagesFull.length-2<=e)return this.pagesFull.slice(1,1+this.pagesFull.length-2);if(this.pagesFull.length-2>e&&this.currentpage<=3)return this.pagesFull.slice(1,1+e);if(this.pagesFull.length-2>this.count&&this.currentpage>3&&this.currentpage+this.count<this.pagesFull.length){const t=this.pagesFull.slice(this.currentpage-1,this.currentpage+e);return t.includes(this.pagesFull.length-1)?t:t.slice(0,-1)}return[]}centerPages(){return this.sliceCenterPages().map((e=>this.showMiddlePage(e)))}render(){return Array.from(this.hostElement.children).find((e=>"a"===e.tagName.toLowerCase()))?this.slotChildren():this.navElement((0,i.h)(i.F,null,this.goToPreviousPage(),this.goToFirstPage(),this.showEllipsis("front"),this.pagesFull.length>=3?this.centerPages():null,this.showEllipsis("back"),this.goToLastPage(),this.goToNextPage()))}get hostElement(){return(0,i.g)(this)}static get watchers(){return{pages:["watchHandler"],currentpage:["watchHandler"],count:["watchHandler"]}}};o.style='@charset "UTF-8";:where(html,:host){line-height:1.15;-webkit-text-size-adjust:100%;text-size-adjust:100%}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,pre,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"\u2022\xa0\xa0\xa0"}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}.cmp-pagination{color:#282d37;font-size:0.875rem;user-select:none}.cmp-pagination>ol{display:flex}.cmp-pagination .elm-headline{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-pagination li,.cmp-pagination .elm-link{align-items:center;display:inline-flex;justify-content:center}.cmp-pagination li{height:2.25rem;width:2.25rem}.cmp-pagination .elm-link{color:inherit;height:100%;text-decoration:none;width:100%}.cmp-pagination .elm-link[rel=prev],.cmp-pagination .elm-link[rel=next]{padding:0;vertical-align:bottom}.cmp-pagination .elm-link[rel=prev]::before{margin-left:0.6875rem}.cmp-pagination .elm-link[rel=next]::before{margin-right:0.6875rem}.cmp-pagination .elm-link[rel=prev]{--icon-glyph-before:"<";font-size:0}.cmp-pagination .elm-link[rel=prev]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);content:var(--icon-glyph-before)/"";display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@media aural{.cmp-pagination .elm-link[rel=prev]::before{content:none}}@media speech{.cmp-pagination .elm-link[rel=prev]::before{content:none}}.cmp-pagination .elm-link[rel=prev]::before{--icon-margin-after:0}.cmp-pagination .elm-link[rel=next]{--icon-glyph-before:">";font-size:0}.cmp-pagination .elm-link[rel=next]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);content:var(--icon-glyph-before)/"";display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@media aural{.cmp-pagination .elm-link[rel=next]::before{content:none}}@media speech{.cmp-pagination .elm-link[rel=next]::before{content:none}}.cmp-pagination .elm-link[rel=next]::before{--icon-margin-after:0}.cmp-pagination .elm-link[aria-current=page]{font-weight:700}.elm-link{border-radius:0.25rem;display:inline-block;text-underline-offset:0.1875rem;text-underline-position:under}@supports (text-underline-offset: 3px){.elm-link{text-underline-position:auto}}.elm-link:active{color:initial}.elm-link[aria-disabled=true]{opacity:0.4;pointer-events:none}.elm-link[aria-disabled=true]::before{color:initial}.elm-link[data-size=small]:not(.is-icon-text-replace){font-size:0.875rem}.elm-link[rel][data-size=small]::before,.elm-link[data-icon][data-size=small]::before,.elm-link[data-icon-before][data-size=small]::before{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-link[data-icon-after][data-size=small]::after::after{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-link[rel=configuration]{--icon-glyph-before:"\u2699"}.elm-link[rel=configuration]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);content:var(--icon-glyph-before)/"";display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@media aural{.elm-link[rel=configuration]::before{content:none}}@media speech{.elm-link[rel=configuration]::before{content:none}}.elm-link[rel=messages]{--icon-glyph-before:"\udb44\ude36"}.elm-link[rel=messages]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);content:var(--icon-glyph-before)/"";display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@media aural{.elm-link[rel=messages]::before{content:none}}@media speech{.elm-link[rel=messages]::before{content:none}}.elm-link[rel=account]{--icon-glyph-before:"\udb44\ude21"}.elm-link[rel=account]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);content:var(--icon-glyph-before)/"";display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@media aural{.elm-link[rel=account]::before{content:none}}@media speech{.elm-link[rel=account]::before{content:none}}.elm-link[rel=configuration]::before,.elm-link[rel=messages]::before,.elm-link[rel=account]::before{display:inline-block}.cmp-pagination button{border:none;font-size:0.875rem;background-color:inherit;cursor:pointer}.cmp-pagination .elm-link[data-rel=prev]{--icon-glyph-before:"<";font-size:0}.cmp-pagination .elm-link[data-rel=prev]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);content:var(--icon-glyph-before)/"";display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@media aural{.cmp-pagination .elm-link[data-rel=prev]::before{content:none}}@media speech{.cmp-pagination .elm-link[data-rel=prev]::before{content:none}}.cmp-pagination .elm-link[data-rel=prev]::before{--icon-margin-after:0}.cmp-pagination .elm-link[data-rel=next]{--icon-glyph-before:">";font-size:0}.cmp-pagination .elm-link[data-rel=next]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);content:var(--icon-glyph-before)/"";display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@media aural{.cmp-pagination .elm-link[data-rel=next]::before{content:none}}@media speech{.cmp-pagination .elm-link[data-rel=next]::before{content:none}}.cmp-pagination .elm-link[data-rel=next]::before{--icon-margin-after:0}.elm-link[aria-disabled=true][aria-current=page]{opacity:1}'},4088:(e,t,n)=>{n.d(t,{a:()=>o,g:()=>a,p:()=>r,u:()=>i});const i=()=>{var e;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID())||Math.random().toString()},a=e=>e?e.map((e=>'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>"))).join("\n"):"",o=(e,t)=>{e.children&&Array.from(e.children).forEach((e=>{"db-link"===e.tagName.toLowerCase()&&e.setAttribute("icon-variant",t),e.children&&o(e,t)}))},r=e=>{try{if("string"===typeof e)return JSON.parse(e);if("object"===typeof e)return e;if(e instanceof Array)return e}catch(t){return!1}}}}]);
//# sourceMappingURL=664.4a76cf46.chunk.js.map