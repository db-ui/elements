"use strict";(self.webpackChunkreact_showcase=self.webpackChunkreact_showcase||[]).push([[558],{9558:function(i,n,a){a.r(n),a.d(n,{db_mainnavigation:function(){return g}});var t=a(5671),e=a(3144),o=a(8876),l=a(5971),r=function i(n){return n.map((function(n,a){return(0,o.h)("li",{key:"mainnavigation-item-".concat(a),innerHTML:n.html},n.children&&(0,o.h)("ul",null,i(n.children)))}))},m=function i(n){var a=[];return n.forEach((function(n){var t=1===n.children.length;a.push({html:n.outerHTML,children:!t&&n.children?i(Array.from(n.children)):[]})})),a},c=function i(n){n.children.forEach((function(a){n.html=n.html.replace(a.html,""),i(a)}))},u=function(i){if(0===i.filter((function(i){return"db-link"!==i.tagName.toLowerCase()&&"a"!==i.tagName.toLowerCase()})).length){var n=m(i);return n.forEach((function(i){c(i)})),n}return[]},p=function i(n){var a="";return n.forEach((function(n){var t="<li>\n",e=!1;n.children&&n.children.length>0&&(t='<li aria-haspopup="true">\n',e=!0),t+='<db-link href="'.concat(n.link,'" current="').concat(!!n.current&&"page",'">').concat(n.label,"</db-link>\n"),a+=t,e&&(a+="<ul>\n".concat(i(n.children),"</ul>\n")),a+="</li>"})),a},s=function i(n){n&&n.length>0&&n.forEach((function(n){if("li"===n.tagName.toLowerCase()&&n.children){var a=Array.from(n.children);a.find((function(i){return"ul"===i.tagName.toLowerCase()}))&&n.setAttribute("aria-haspopup","true"),i(a)}}))},g=function(){function i(n){(0,t.Z)(this,i),(0,o.r)(this,n),this.siteName=void 0,this.data=void 0}return(0,e.Z)(i,[{key:"componentWillLoad",value:function(){this.data?this.compData=(0,l.p)(this.data):(this.children=Array.from(this.host.children),this.onlyLinks=u(this.children),this.children.find((function(i){return"li"===i.tagName.toLowerCase()}))?(this.hasItemsWrapper=!0,s(this.children)):this.host.innerHTML="")}},{key:"render",value:function(){return(0,o.h)("nav",{class:"cmp-mainnavigation",id:"mainnavigation"},(0,o.h)("input",{type:"checkbox",id:"toggle_mainnavigation"}),this.siteName&&(0,o.h)("label",{htmlFor:"toggle_mainnavigation",title:"Toggle main navigation",class:"is-site-name"},this.siteName),this.compData&&(0,o.h)("ul",{innerHTML:p(this.compData)}),!this.compData&&(0,o.h)("ul",null,this.onlyLinks&&r(this.onlyLinks),!this.hasItemsWrapper&&!this.onlyLinks&&this.children.map((function(i,n){return(0,o.h)("li",{key:"cmp-mainnavigation-item-".concat(n),innerHTML:i.outerHTML})})),this.hasItemsWrapper&&(0,o.h)("slot",null)))}},{key:"host",get:function(){return(0,o.g)(this)}}]),i}();g.style='@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"\u2022\xa0\xa0\xa0"}:where(ul) li::marker{color:#ec0016}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-mainnavigation{position:relative;top:0}.rea-header .cmp-mainnavigation{order:1}.cmp-mainnavigation .elm-link,.cmp-mainnavigation a{border-radius:initial;color:inherit;display:inline-block;text-decoration:none}.cmp-mainnavigation>input[type=checkbox][id]{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}@media screen and (min-width: 1024px){.cmp-mainnavigation>input[type=checkbox][id],.cmp-mainnavigation>input[type=checkbox][id]+label[for]{display:none}}.cmp-mainnavigation>label[for]{background-color:#fdfdfd;border-bottom:1px solid #f5f4f1;display:block;padding:0.5rem 1.375rem 0.625rem}.cmp-mainnavigation>label[for]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"\udb44\udd22";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-mainnavigation>label[for]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-mainnavigation>label[for]::before{content:none}}@media speech{.cmp-mainnavigation>label[for]::before{content:none}}.cmp-mainnavigation>label[for]::after{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-start:var(--icon-margin-before, 0.375rem);--icon-glyph:"\u2a2f";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-mainnavigation>label[for]::after{content:var(--icon-glyph)/""}}@media aural{.cmp-mainnavigation>label[for]::after{content:none}}@media speech{.cmp-mainnavigation>label[for]::after{content:none}}.cmp-mainnavigation>label[for]::before{margin-right:1rem}.cmp-mainnavigation>label[for]::after{position:absolute;right:1rem;transform:translateY(0.125rem)}@media screen and (max-width: 1023px){.cmp-mainnavigation{background-color:#3c414b;left:0;position:absolute;top:4rem;width:100vw;z-index:30}.cmp-mainnavigation>input[type=checkbox][id]:not(:checked)+label[for]::after{content:none}.cmp-mainnavigation>input[type=checkbox][id]:not(:checked)~ul{display:none}}.cmp-mainnavigation ul{background-color:#fdfdfd}@media screen and (min-width: 1024px){.cmp-mainnavigation ul ul{box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);position:absolute;visibility:hidden;z-index:70}}@media screen and (max-width: 1023px){.cmp-mainnavigation ul ul{display:none}}@media screen and (min-width: 1024px){.cmp-mainnavigation>ul{display:flex}}@media screen and (min-width: 1024px){.cmp-mainnavigation>ul>li>.elm-link,.cmp-mainnavigation>ul>li>a,.cmp-mainnavigation>ul>li>*>.elm-link,.cmp-mainnavigation>ul>li>*>a,.cmp-mainnavigation>ul>*>li>.elm-link,.cmp-mainnavigation>ul>*>li>a,.cmp-mainnavigation>ul>*>li>*>.elm-link{padding:2rem 1.625rem 1.1875rem;border-bottom:4px solid transparent}.cmp-mainnavigation>ul>li>.elm-link:hover,.cmp-mainnavigation>ul>li>a:hover,.cmp-mainnavigation>ul>li>.elm-link:focus,.cmp-mainnavigation>ul>li>a:focus,.cmp-mainnavigation>ul>li>*>.elm-link:hover,.cmp-mainnavigation>ul>li>*>a:hover,.cmp-mainnavigation>ul>li>*>.elm-link:focus,.cmp-mainnavigation>ul>li>*>a:focus,.cmp-mainnavigation>ul>*>li>.elm-link:hover,.cmp-mainnavigation>ul>*>li>a:hover,.cmp-mainnavigation>ul>*>li>.elm-link:focus,.cmp-mainnavigation>ul>*>li>a:focus,.cmp-mainnavigation>ul>*>li>*>.elm-link:hover,.cmp-mainnavigation>ul>*>li>*>.elm-link:focus{border-bottom-color:#d7dce1}.cmp-mainnavigation>ul>li>.elm-link[aria-current=page],.cmp-mainnavigation>ul>li>a[aria-current=page],.cmp-mainnavigation>ul>li>*>.elm-link[aria-current=page],.cmp-mainnavigation>ul>li>*>a[aria-current=page],.cmp-mainnavigation>ul>*>li>.elm-link[aria-current=page],.cmp-mainnavigation>ul>*>li>a[aria-current=page],.cmp-mainnavigation>ul>*>li>*>.elm-link[aria-current=page]{border-bottom-color:#ec0016}}@media screen and (min-width: 1024px){.cmp-mainnavigation>ul>li ul,.cmp-mainnavigation>ul>*>li ul{left:0;min-width:100%;top:4.9375rem}.cmp-mainnavigation>ul>li ul ul,.cmp-mainnavigation>ul>*>li ul ul{left:100%;top:auto;transform:translateY(-3.3125rem)}.cmp-mainnavigation>ul>li ul .elm-link,.cmp-mainnavigation>ul>li ul a,.cmp-mainnavigation>ul>*>li ul .elm-link{align-items:center;display:flex;min-height:3.3125rem;padding-left:1.125rem;padding-right:1.125rem}}@media screen and (max-width: 1023px){.cmp-mainnavigation>ul>li ul>li>.elm-link,.cmp-mainnavigation>ul>li ul>li>a,.cmp-mainnavigation>ul>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>li ul>li>*>a,.cmp-mainnavigation>ul>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>li ul>*>li>a,.cmp-mainnavigation>ul>li ul>*>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li>*>.elm-link{padding-left:2.125rem}}@media screen and (max-width: 1023px){.cmp-mainnavigation>ul>li ul>li ul>li>.elm-link,.cmp-mainnavigation>ul>li ul>li ul>li>a,.cmp-mainnavigation>ul>li ul>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>li ul>li ul>li>*>a,.cmp-mainnavigation>ul>li ul>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>li ul>li ul>*>li>a,.cmp-mainnavigation>ul>li ul>li ul>*>li>*>.elm-link,.cmp-mainnavigation>ul>li ul>*>li ul>li>.elm-link,.cmp-mainnavigation>ul>li ul>*>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>li ul>*>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>li ul>*>li ul>*>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>li ul>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>li ul>*>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li ul>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li ul>*>li>*>.elm-link{padding-left:3.75rem}}.cmp-mainnavigation li{display:block;position:relative}.cmp-mainnavigation li[aria-haspopup=true]::after{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-start:var(--icon-margin-before, 0.375rem);--icon-glyph:">";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-mainnavigation li[aria-haspopup=true]::after{content:var(--icon-glyph)/""}}@media aural{.cmp-mainnavigation li[aria-haspopup=true]::after{content:none}}@media speech{.cmp-mainnavigation li[aria-haspopup=true]::after{content:none}}.cmp-mainnavigation li[aria-haspopup=true]::after{position:absolute;right:1rem;top:0.5625rem}.cmp-mainnavigation li:hover>ul,.cmp-mainnavigation li:hover>*>ul{visibility:visible}@media screen and (max-width: 1023px){.cmp-mainnavigation li:hover>ul,.cmp-mainnavigation li:hover>*>ul{display:initial}}@media screen and (max-width: 1023px){.cmp-mainnavigation li{background-color:#3c414b;color:#fdfdfd}.cmp-mainnavigation li:hover{background-color:#afb4bb;color:#131821}.cmp-mainnavigation li:hover>a{font-weight:700}.cmp-mainnavigation li .elm-link,.cmp-mainnavigation li a{color:inherit;padding-bottom:0.5rem;padding-left:1.375rem;padding-top:0.5rem}.cmp-mainnavigation li[aria-haspopup=true]{position:relative}}@media screen and (min-width: 1024px){.cmp-mainnavigation li[aria-haspopup=true]::after{content:none}.cmp-mainnavigation li .elm-link:hover,.cmp-mainnavigation li a:hover,.cmp-mainnavigation li .elm-link:focus,.cmp-mainnavigation li a:focus{background-color:#d7dce1;color:initial}.cmp-mainnavigation li .elm-link[aria-current=page],.cmp-mainnavigation li a[aria-current=page]{font-weight:700}}'},5971:function(i,n,a){a.d(n,{a:function(){return o},g:function(){return e},p:function(){return l},u:function(){return t}});var t=function(){var i;return(null===(i=window.crypto)||void 0===i?void 0:i.randomUUID())||Math.random().toString()},e=function(i){return i?i.map((function(i){return'<li><db-link href="'.concat(i.href,'" target="').concat(i.target,'">').concat(i.label,"</db-link></li>")})).join("\n"):""},o=function i(n,a){n.children&&Array.from(n.children).forEach((function(n){"db-link"===n.tagName.toLowerCase()&&n.setAttribute("icon-variant",a),n.children&&i(n,a)}))},l=function(i){try{if("string"===typeof i)return JSON.parse(i);if("object"===typeof i)return i;if(i instanceof Array)return i}catch(n){return!1}}}}]);
//# sourceMappingURL=558.6660b890.chunk.js.map