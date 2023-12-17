import{r as e,h as i,H as t}from"./p-af7e768b.js";import{u as s}from"./p-e1b15e98.js";const a='@charset "UTF-8";.sc-db-image:where(html){line-height:1.15}.sc-db-image:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-image:where(dl,ol.sc-db-image,ul).sc-db-image .sc-db-image:where(dl,ol.sc-db-image,ul).sc-db-image{margin-block-end:0;margin-block-start:0}.sc-db-image:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-image:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-image:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}.sc-db-image:where(b,strong).sc-db-image{font-weight:bolder}.sc-db-image:where(code,kbd.sc-db-image,samp).sc-db-image{font-family:monospace, monospace;font-size:1em}.sc-db-image:where(small){font-size:80%}.sc-db-image:where(table){border-color:currentColor;text-indent:0}.sc-db-image:where(button,input.sc-db-image,select).sc-db-image{margin:0}.sc-db-image:where(button){text-transform:none}.sc-db-image:where(button,input.sc-db-image:is([type=button i],[type=reset i].sc-db-image,[type=submit i])).sc-db-image{-webkit-appearance:button}.sc-db-image:where(progress){vertical-align:baseline}.sc-db-image:where(select){text-transform:none}.sc-db-image:where(textarea){margin:0}.sc-db-image:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-image::-webkit-inner-spin-button,.sc-db-image::-webkit-outer-spin-button{height:auto}.sc-db-image::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-image::-webkit-search-decoration{-webkit-appearance:none}.sc-db-image::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-image:where(button,input.sc-db-image:is([type=button i],[type=color i].sc-db-image,[type=reset i].sc-db-image,[type=submit i])).sc-db-image::-moz-focus-inner{border-style:none;padding:0}.sc-db-image:where(button,input.sc-db-image:is([type=button i],[type=color i].sc-db-image,[type=reset i].sc-db-image,[type=submit i])).sc-db-image::-moz-focusring{outline:1px dotted ButtonText}.sc-db-image:where(:-moz-ui-invalid){box-shadow:none}.sc-db-image:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-image:where(dialog:not([open])){display:none}.sc-db-image:where(summary){display:list-item}html.sc-db-image{box-sizing:var(--db-box-sizing, border-box)}*.sc-db-image,.sc-db-image::before,.sc-db-image::after{box-sizing:inherit}img.sc-db-image,embed.sc-db-image,iframe.sc-db-image,object.sc-db-image,video.sc-db-image{height:auto;max-width:100%}iframe.sc-db-image{border:0}nav.sc-db-image ol.sc-db-image,nav.sc-db-image ul.sc-db-image,[role=navigation].sc-db-image ol.sc-db-image,[role=navigation].sc-db-image ul.sc-db-image{list-style:none;margin:0;padding:0}.sc-db-image:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-image:is(a,button.sc-db-image,input.sc-db-image,textarea.sc-db-image,summary).sc-db-image{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-image:is(a,button.sc-db-image,input.sc-db-image,textarea.sc-db-image,summary).sc-db-image:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}.sc-db-image:where(ul){list-style-type:"•   "}.sc-db-image:where(ul) li.sc-db-image::marker{color:#ec0016}details.sc-db-image>*.sc-db-image,details.sc-db-image>.sc-db-image::before,details.sc-db-image>.sc-db-image::after{box-sizing:var(--db-box-sizing, border-box)}body.sc-db-image,div.sc-db-image,button.sc-db-image,input.sc-db-image,select.sc-db-image,textarea.sc-db-image{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}.elm-image.is-logo.sc-db-image{height:auto;margin:0.2rem 1rem 0.2rem 0;max-width:200px}.cmp-brand.sc-db-image .elm-image.is-logo.sc-db-image{width:39px}figure.sc-db-image{margin:0}';const o=class{constructor(i){e(this,i);this.src=undefined;this.modernformat=undefined;this.srcset=undefined;this.alt=undefined;this.width=undefined;this.height=undefined;this.loading=undefined;this.caption=undefined;this.responsivemediaquery=undefined;this.ariaid="image-"+s()}getBasicImage(){return i("img",{class:"elm-image",alt:this.alt,src:this.src,width:this.width,srcSet:this.srcset,height:this.height,loading:this.loading,"aria-labelledby":this.caption&&this.ariaid})}basicImageCaptionWrapper(){if(this.caption!==undefined){return i("figure",null,this.getBasicImage(),i("figcaption",{id:this.ariaid},this.caption))}else{{return this.getBasicImage()}}}getPictureWrapper(){const e=this.modernformat.split(".").pop().toLowerCase();return i("picture",null,i("source",{srcSet:this.modernformat,type:`'image/${e}`}),this.getBasicImage())}getResponsivePictureWrapper(){return i("picture",null,JSON.parse(this.responsivemediaquery).map(((e,t)=>i("source",{key:`picture-${t}`,srcSet:e.srcset,media:e.media}))),this.getBasicImage())}pictureCaptionWrapper(){if(this.caption!==undefined){return i("figure",null,this.getPictureWrapper(),i("figcaption",{id:this.ariaid},this.caption))}else{{return this.getPictureWrapper()}}}render(){return i(t,null,this.modernformat&&this.pictureCaptionWrapper()||this.responsivemediaquery&&this.getResponsivePictureWrapper()||this.basicImageCaptionWrapper())}};o.style=a;export{o as db_image};
//# sourceMappingURL=p-56f7a16c.entry.js.map