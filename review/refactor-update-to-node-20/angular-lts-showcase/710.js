"use strict";(self.webpackChunkangular_lts_showcase=self.webpackChunkangular_lts_showcase||[]).push([[710],{710:(d,p,l)=>{l.r(p),l.d(p,{db_pagination:()=>h});var t=l(526),f=l(913);const h=class{constructor(e){(0,t.r)(this,e),this.dbChange=(0,t.c)(this,"dbChange",7),this.ellipsisstart=void 0,this.ellipsisend=void 0,this.currentpage=1,this.pages=2,this.count=2,this.titleprevious="Goto previous page",this.titlenext="Goto next page",this.titlepagination="Page Number",this.textprevious="Previous",this.textnext="Next",this.arialabel="Pagination",this.ariaid="pagination-"+(0,f.u)()}handleChange(e){this.dbChange.emit(e)}watchHandler(){this.sliceAndSetDefaults()}componentWillLoad(){this.sliceAndSetDefaults()}sliceAndSetDefaults(){const e=Array.from(Array(this.pages+1).keys()),[,...n]=e;this.pagesFull=n}decorateChild(e){return e.setAttribute("class","elm-link"),e.getAttribute("data-currentpage")&&(e.setAttribute("aria-current","page"),e.setAttribute("aria-disabled","true")),(0,t.h)("li",{innerHTML:e.outerHTML})}paginationButtonFragment({page:e,curr:n,ariaCurrent:o,ariaDisabled:s,title:m,rel:i,tabindex:a,disabled:r,index:c}){return(0,t.h)("li",{key:c},(0,t.h)("button",Object.assign({class:"elm-link","data-rel":"none"!==i&&`${i}`,tabindex:!!a&&"-1",title:m+` ${e||""}`,type:"button"},(e===n||r)&&o,(e===n||r)&&s,{onClick:g=>this.handleChange(g)}),e))}navElement(e){return(0,t.h)("nav",{class:"cmp-pagination",role:"navigation","aria-labelledby":this.ariaid},(0,t.h)("h2",{class:"elm-headline ",id:this.ariaid},this.arialabel.charAt(0).toUpperCase()+this.arialabel.slice(1)),(0,t.h)("ol",null,e))}slotChildren(){const e=Array.from(this.hostElement.children);this.hostElement.innerHTML="";const[n,...o]=e,[s,...m]=[...o].reverse(),i=m.reverse(),a=i.findIndex(g=>g.getAttribute("data-currentpage")),r=a>=0?i[a-1].cloneNode(!0):n.cloneNode(!0);r.setAttribute("rel","prev"),r.setAttribute("tabindex","-1");const c=a>=0&&i.length<=a?i[a+1].cloneNode(!0):s.cloneNode(!0);return c.setAttribute("rel","next"),this.navElement((0,t.h)(t.F,null,this.decorateChild(r),this.decorateChild(n),this.ellipsisstart&&(0,t.h)("li",null,"\u2026"),i.map(this.decorateChild),this.ellipsisend&&(0,t.h)("li",null,"\u2026"),this.decorateChild(s),this.decorateChild(c)))}goToPreviousPage(){return this.paginationButtonFragment({page:1===this.currentpage?this.currentpage:this.currentpage-1,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"prev",tabindex:!0,disabled:1===this.currentpage,index:"A"})}goToNextPage(){return this.paginationButtonFragment({page:this.currentpage===this.pages+1?this.currentpage:this.currentpage+1,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlenext,rel:"next",tabindex:!0,disabled:this.currentpage===this.pages,index:"E"})}goToFirstPage(){return this.paginationButtonFragment({page:this.pagesFull[0],curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:!1,index:"B"})}goToLastPage(){return this.paginationButtonFragment({page:this.pagesFull.slice(-1),curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:this.currentpage===this.pages,index:"C"})}showMiddlePage(e){return this.paginationButtonFragment({page:e,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:!1,index:e})}showEllipsis(e){return this.pagesFull.length<8||this.currentpage<4&&"front"===e||this.currentpage>this.pagesFull.length-5&&"back"===e?null:(0,t.h)("li",{key:e},"\u2026")}sliceCenterPages(){if(this.pagesFull.length<8)return this.pagesFull.slice(1,-1);const e=this.currentpage<=3||this.currentpage>=this.pagesFull.length-3?this.count+1:this.count;if(this.currentpage+this.count>=this.pagesFull.length)return this.pagesFull.slice(-e-1,-1);if(this.pagesFull.length-2<=e)return this.pagesFull.slice(1,1+this.pagesFull.length-2);if(this.pagesFull.length-2>e&&this.currentpage<=3)return this.pagesFull.slice(1,1+e);if(this.pagesFull.length-2>this.count&&this.currentpage>3&&this.currentpage+this.count<this.pagesFull.length){const n=this.pagesFull.slice(this.currentpage-1,this.currentpage+e);return n.includes(this.pagesFull.length-1)?n:n.slice(0,-1)}return[]}centerPages(){return this.sliceCenterPages().map(e=>this.showMiddlePage(e))}render(){return Array.from(this.hostElement.children).find(o=>"a"===o.tagName.toLowerCase())?this.slotChildren():this.navElement((0,t.h)(t.F,null,this.goToPreviousPage(),this.goToFirstPage(),this.showEllipsis("front"),this.pagesFull.length>=3?this.centerPages():null,this.showEllipsis("back"),this.goToLastPage(),this.goToNextPage()))}get hostElement(){return(0,t.g)(this)}static get watchers(){return{pages:["watchHandler"],currentpage:["watchHandler"],count:["watchHandler"]}}};h.style='@charset "UTF-8";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"\u2022\xa0\xa0\xa0"}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}.cmp-pagination{color:#282d37;font-size:0.875rem;user-select:none}.cmp-pagination>ol{display:flex}.cmp-pagination .elm-headline{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-pagination li,.cmp-pagination .elm-link{align-items:center;display:inline-flex;justify-content:center}.cmp-pagination li{height:2.25rem;width:2.25rem}.cmp-pagination .elm-link{color:inherit;height:100%;text-decoration:none;width:100%}.cmp-pagination .elm-link[rel=prev],.cmp-pagination .elm-link[rel=next]{padding:0;vertical-align:bottom}.cmp-pagination .elm-link[rel=prev]::before{margin-left:0.6875rem}.cmp-pagination .elm-link[rel=next]::before{margin-right:0.6875rem}.cmp-pagination .elm-link[rel=prev]{--icon-glyph-before:"<";font-size:0}.cmp-pagination .elm-link[rel=prev]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-pagination .elm-link[rel=prev]::before{content:var(--icon-glyph-before)/""}}@media aural{.cmp-pagination .elm-link[rel=prev]::before{content:none}}@media speech{.cmp-pagination .elm-link[rel=prev]::before{content:none}}.cmp-pagination .elm-link[rel=prev]::before{--icon-margin-after:0}.cmp-pagination .elm-link[rel=next]{--icon-glyph-before:">";font-size:0}.cmp-pagination .elm-link[rel=next]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-pagination .elm-link[rel=next]::before{content:var(--icon-glyph-before)/""}}@media aural{.cmp-pagination .elm-link[rel=next]::before{content:none}}@media speech{.cmp-pagination .elm-link[rel=next]::before{content:none}}.cmp-pagination .elm-link[rel=next]::before{--icon-margin-after:0}.cmp-pagination .elm-link[aria-current=page]{font-weight:700}.elm-link{border-radius:0.25rem;display:inline-block;text-underline-offset:0.1875rem;text-underline-position:under}@supports (text-underline-offset: 3px){.elm-link{text-underline-position:auto}}.elm-link:active{color:initial}.elm-link[aria-disabled=true]{opacity:0.4;pointer-events:none}.elm-link[aria-disabled=true]::before{color:initial}.elm-link[data-size=small]:not(.is-icon-text-replace){font-size:0.875rem}.elm-link[rel][data-size=small]::before,.elm-link[data-icon][data-size=small]::before,.elm-link[data-icon-before][data-size=small]::before{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-link[data-icon-after][data-size=small]::after::after{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-link[rel=configuration]{--icon-glyph-before:"\u2699"}.elm-link[rel=configuration]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.elm-link[rel=configuration]::before{content:var(--icon-glyph-before)/""}}@media aural{.elm-link[rel=configuration]::before{content:none}}@media speech{.elm-link[rel=configuration]::before{content:none}}.elm-link[rel=messages]{--icon-glyph-before:"\u{e1236}"}.elm-link[rel=messages]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.elm-link[rel=messages]::before{content:var(--icon-glyph-before)/""}}@media aural{.elm-link[rel=messages]::before{content:none}}@media speech{.elm-link[rel=messages]::before{content:none}}.elm-link[rel=account]{--icon-glyph-before:"\u{e1221}"}.elm-link[rel=account]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.elm-link[rel=account]::before{content:var(--icon-glyph-before)/""}}@media aural{.elm-link[rel=account]::before{content:none}}@media speech{.elm-link[rel=account]::before{content:none}}.elm-link[rel=configuration]::before,.elm-link[rel=messages]::before,.elm-link[rel=account]::before{display:inline-block}.cmp-pagination button{border:none;font-size:0.875rem;background-color:inherit;cursor:pointer}.cmp-pagination .elm-link[data-rel=prev]{--icon-glyph-before:"<";font-size:0}.cmp-pagination .elm-link[data-rel=prev]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-pagination .elm-link[data-rel=prev]::before{content:var(--icon-glyph-before)/""}}@media aural{.cmp-pagination .elm-link[data-rel=prev]::before{content:none}}@media speech{.cmp-pagination .elm-link[data-rel=prev]::before{content:none}}.cmp-pagination .elm-link[data-rel=prev]::before{--icon-margin-after:0}.cmp-pagination .elm-link[data-rel=next]{--icon-glyph-before:">";font-size:0}.cmp-pagination .elm-link[data-rel=next]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-pagination .elm-link[data-rel=next]::before{content:var(--icon-glyph-before)/""}}@media aural{.cmp-pagination .elm-link[data-rel=next]::before{content:none}}@media speech{.cmp-pagination .elm-link[data-rel=next]::before{content:none}}.cmp-pagination .elm-link[data-rel=next]::before{--icon-margin-after:0}.elm-link[aria-disabled=true][aria-current=page]{opacity:1}'}}]);