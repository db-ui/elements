"use strict";(self.webpackChunkangular_lts_showcase=self.webpackChunkangular_lts_showcase||[]).push([[76],{641:(l,t,o)=>{o.d(t,{a:()=>a,g:()=>u,p:()=>i,u:()=>s});const s=()=>{var r;return(null===(r=window.crypto)||void 0===r?void 0:r.randomUUID())||Math.random().toString()},u=r=>r?r.map(e=>`<li><db-link href="${e.href}" target="${e.target}">${e.label}</db-link></li>`).join("\n"):"",a=(r,e)=>{r.children&&Array.from(r.children).forEach(n=>{"db-link"===n.tagName.toLowerCase()&&n.setAttribute("icon-variant",e),n.children&&a(n,e)})},i=r=>{try{if("string"==typeof r)return JSON.parse(r);if("object"==typeof r||r instanceof Array)return r}catch{return!1}}}}]);