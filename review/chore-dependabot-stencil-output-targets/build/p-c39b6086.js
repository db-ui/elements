const r=()=>{var r;return((r=window.crypto)===null||r===void 0?void 0:r.randomUUID())||Math.random().toString()};const t=r=>{if(!r)return"";return r.map((r=>`<li><db-link href="${r.href}" target="${r.target}">${r.label}</db-link></li>`)).join("\n")};const n=(r,t)=>{if(r.children){Array.from(r.children).forEach((r=>{if(r.tagName.toLowerCase()==="db-link"){r.setAttribute("icon-variant",t)}if(r.children){n(r,t)}}))}};const i=r=>{try{if(typeof r==="string"){return JSON.parse(r)}if(typeof r==="object")return r;if(r instanceof Array)return r}catch(r){return false}};export{n as a,t as g,i as p,r as u};
//# sourceMappingURL=p-c39b6086.js.map