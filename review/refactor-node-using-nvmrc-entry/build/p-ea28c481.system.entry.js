System.register(["./p-5bba2ab1.system.js","./p-62624823.system.js"],(function(e){"use strict";var t,i,n,o;return{setters:[function(e){t=e.r;i=e.h;n=e.H},function(e){o=e.u}],execute:function(){var r='@charset "UTF-8";:where(html){line-height:1.15;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}:where(h1){font-size:2em;-webkit-margin-after:0.67em;margin-block-end:0.67em;-webkit-margin-before:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){-webkit-margin-after:0;margin-block-end:0;-webkit-margin-before:0;margin-block-start:0}:where(hr){-webkit-box-sizing:content-box;box-sizing:content-box;color:inherit;height:0}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,pre,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html{-webkit-box-sizing:var(--db-box-sizing, border-box);box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{-webkit-box-sizing:inherit;box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{-webkit-box-sizing:var(--db-box-sizing, border-box);box-sizing:var(--db-box-sizing, border-box)}body,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}.elm-image.is-logo{height:auto;margin:0.2rem 1rem 0.2rem 0;max-width:200px}.cmp-brand .elm-image.is-logo{width:39px}figure{margin:0}';var s=r;var a=e("db_image",function(){function e(e){t(this,e);this.src=undefined;this.modernformat=undefined;this.srcset=undefined;this.alt=undefined;this.width=undefined;this.height=undefined;this.loading=undefined;this.caption=undefined;this.responsivemediaquery=undefined;this.ariaid="image-"+o()}e.prototype.getBasicImage=function(){return i("img",{class:"elm-image",alt:this.alt,src:this.src,width:this.width,srcSet:this.srcset,height:this.height,loading:this.loading,"aria-labelledby":this.caption&&this.ariaid})};e.prototype.basicImageCaptionWrapper=function(){if(this.caption!==undefined){return i("figure",null,this.getBasicImage(),i("figcaption",{id:this.ariaid},this.caption))}else{{return this.getBasicImage()}}};e.prototype.getPictureWrapper=function(){var e=this.modernformat.split(".").pop().toLowerCase();return i("picture",null,i("source",{srcSet:this.modernformat,type:"'image/".concat(e)}),this.getBasicImage())};e.prototype.getResponsivePictureWrapper=function(){return i("picture",null,JSON.parse(this.responsivemediaquery).map((function(e,t){return i("source",{key:"picture-".concat(t),srcSet:e.srcset,media:e.media})})),this.getBasicImage())};e.prototype.pictureCaptionWrapper=function(){if(this.caption!==undefined){return i("figure",null,this.getPictureWrapper(),i("figcaption",{id:this.ariaid},this.caption))}else{{return this.getPictureWrapper()}}};e.prototype.render=function(){return i(n,{key:"ad19ac6cd9b57b08f13de3c55a040526efb6feb4"},this.modernformat&&this.pictureCaptionWrapper()||this.responsivemediaquery&&this.getResponsivePictureWrapper()||this.basicImageCaptionWrapper())};return e}());a.style=s}}}));
//# sourceMappingURL=p-ea28c481.system.entry.js.map