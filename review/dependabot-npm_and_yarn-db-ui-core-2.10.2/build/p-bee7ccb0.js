const r=()=>{var r;return(null===(r=window.crypto)||void 0===r?void 0:r.randomUUID())||Math.random().toString()},t=r=>r?r.map((r=>`<li><db-link href="${r.href}" target="${r.target}">${r.label}</db-link></li>`)).join("\n"):"",n=(r,t)=>{r.children&&Array.from(r.children).forEach((r=>{"db-link"===r.tagName.toLowerCase()&&r.setAttribute("icon-variant",t),r.children&&n(r,t)}))},i=r=>{try{if("string"==typeof r)return JSON.parse(r);if("object"==typeof r)return r;if(r instanceof Array)return r}catch(r){return!1}};export{n as a,t as g,i as p,r as u}