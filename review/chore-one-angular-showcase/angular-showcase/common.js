"use strict";(self.webpackChunkangular_showcase=self.webpackChunkangular_showcase||[]).push([[76],{576:(c,t,o)=>{o.d(t,{a:()=>a,g:()=>i,p:()=>s,u:()=>u});const u=()=>{var r;return(null===(r=window.crypto)||void 0===r?void 0:r.randomUUID())||Math.random().toString()},i=r=>r?r.map(e=>`<li><db-link href="${e.href}" target="${e.target}">${e.label}</db-link></li>`).join("\n"):"",a=(r,e)=>{r.children&&Array.from(r.children).forEach(n=>{"db-link"===n.tagName.toLowerCase()&&n.setAttribute("icon-variant",e),n.children&&a(n,e)})},s=r=>{try{if("string"==typeof r)return JSON.parse(r);if("object"==typeof r||r instanceof Array)return r}catch{return!1}}}}]);