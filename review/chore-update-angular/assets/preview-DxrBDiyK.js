function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./db-button_2.entry-DVIhzU2-.js","./iframe-pqs2-D5R.js","./db-accordion.entry-DFq_ehdY.js","./db-brand.entry-B_pIrSQr.js","./db-breadcrumb.entry-BzZJzCV0.js","./utils-468e8680-CidFOSnN.js","./db-card.entry-C3C9quFZ.js","./db-cards.entry-BDA5okbc.js","./db-checkbox.entry-B_dHnf1v.js","./db-chip.entry-ElsbVNoM.js","./db-dropdown.entry-B4O4561m.js","./db-footer.entry-CdCWGj4f.js","./db-header.entry-f_nHD_xA.js","./db-image.entry-B_CotTRD.js","./db-input.entry-ClMaGR5E.js","./db-language-switcher.entry-DeGVIQfC.js","./db-link.entry-CQkLP3uV.js","./db-linklist.entry-BkHUvCUg.js","./db-logo.entry-DwqCWVQ1.js","./db-mainnavigation.entry-04hS6Zcv.js","./db-meta.entry-DVY1saLP.js","./db-metanavigation.entry-BNyn33kS.js","./db-notification.entry-DMsWq4E-.js","./db-notifications.entry-C27SxkBW.js","./db-overflow-menu.entry-Cx-_DyBF.js","./db-page.entry-DgHhf91E.js","./db-pagination.entry-DNnGd1Hi.js","./db-progress.entry-CNRSWXkd.js","./db-radio.entry-w-GzZrjS.js","./db-sidenavi.entry-Px1BHPZN.js","./db-tab.entry-Bm1DlJIs.js","./db-tab-bar.entry-CmxaOAl7.js","./db-table.entry-BItd8CO0.js","./db-tag.entry-BiLEkmVN.js","./db-textarea.entry-D9jeFwn-.js","./db-toggle.entry-Cgh-Gnc9.js","./github-version-switcher.entry-C3r7--CK.js","./db-headline.entry-pkHEuc2x.js","./db-select.entry-MUwKvyMq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p}from"./iframe-pqs2-D5R.js";const ke="db-ui-elements",N={allRenderFn:!0,appendChildSlotFix:!1,asyncLoading:!0,asyncQueue:!1,attachStyles:!0,cloneNodeFix:!1,cmpDidLoad:!1,cmpDidRender:!1,cmpDidUnload:!1,cmpDidUpdate:!1,cmpShouldUpdate:!1,cmpWillLoad:!0,cmpWillRender:!1,cmpWillUpdate:!1,connectedCallback:!1,constructableCSS:!0,cssAnnotations:!0,devTools:!1,disconnectedCallback:!1,element:!1,event:!0,experimentalScopedSlotChanges:!1,experimentalSlotFixes:!1,formAssociated:!1,hasRenderFn:!0,hostListener:!1,hostListenerTarget:!1,hostListenerTargetBody:!1,hostListenerTargetDocument:!1,hostListenerTargetParent:!1,hostListenerTargetWindow:!1,hotModuleReplacement:!1,hydrateClientSide:!1,hydrateServerSide:!1,hydratedAttribute:!1,hydratedClass:!0,initializeNextTick:!1,invisiblePrehydration:!0,isDebug:!1,isDev:!1,isTesting:!1,lazyLoad:!0,lifecycle:!0,lifecycleDOMEvents:!1,member:!0,method:!0,mode:!1,observeAttribute:!0,profile:!1,prop:!0,propBoolean:!0,propMutable:!1,propNumber:!0,propString:!0,reflect:!0,scoped:!0,scopedSlotTextContentFix:!1,scriptDataOpts:!1,shadowDelegatesFocus:!1,shadowDom:!0,slot:!0,slotChildNodesFix:!1,slotRelocation:!0,state:!0,style:!0,svg:!0,taskQueue:!0,transformTagName:!1,updatable:!0,vdomAttribute:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomPropOrAttr:!0,vdomRef:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,vdomXlink:!0,watchCallback:!0};let L,z,x,q=!1,D=!1,M=!1,y=!1,F=!1;const S=(e,t="")=>()=>{},Le=(e,t)=>()=>{},Re="{visibility:hidden}.hydrated{visibility:inherit}",oe="slot-fb{display:contents}slot-fb[hidden]{display:none}",Y="http://www.w3.org/1999/xlink",J={},xe="http://www.w3.org/2000/svg",Ae="http://www.w3.org/1999/xhtml",Pe=e=>e!=null,W=e=>(e=typeof e,e==="object"||e==="function");function ae(e){var t,s,n;return(n=(s=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||s===void 0?void 0:s.getAttribute("content"))!==null&&n!==void 0?n:void 0}const le=(e,t,...s)=>{let n=null,r=null,a=null,i=!1,o=!1;const l=[],$=d=>{for(let u=0;u<d.length;u++)n=d[u],Array.isArray(n)?$(n):n!=null&&typeof n!="boolean"&&((i=typeof e!="function"&&!W(n))&&(n=String(n)),i&&o?l[l.length-1].$text$+=n:l.push(i?w(null,n):n),o=i)};if($(s),t){t.key&&(r=t.key),t.name&&(a=t.name);{const d=t.className||t.class;d&&(t.class=typeof d!="object"?d:Object.keys(d).filter(u=>d[u]).join(" "))}}if(typeof e=="function")return e(t===null?{}:t,l,De);const c=w(e,null);return c.$attrs$=t,l.length>0&&(c.$children$=l),c.$key$=r,c.$name$=a,c},w=(e,t)=>{const s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return s.$attrs$=null,s.$key$=null,s.$name$=null,s},Ie={},Oe=e=>e&&e.$tag$===Ie,De={forEach:(e,t)=>e.map(Z).forEach(t),map:(e,t)=>e.map(Z).map(t).map(we)},Z=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),we=e=>{if(typeof e.vtag=="function"){const s=Object.assign({},e.vattrs);return e.vkey&&(s.key=e.vkey),e.vname&&(s.name=e.vname),le(e.vtag,s,...e.vchildren||[])}const t=w(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},Ce=(e,t)=>e!=null&&!W(e)?t&4?e==="false"?!1:e===""||!!e:t&2?parseFloat(e):t&1?String(e):e:e,je=e=>k(e).$hostElement$,mt=(e,t,s)=>{const n=je(e);return{emit:r=>ce(n,t,{bubbles:!!(s&4),composed:!!(s&2),cancelable:!!(s&1),detail:r})}},ce=(e,t,s)=>{const n=b.ce(t,s);return e.dispatchEvent(n),n},V=new WeakMap,Be=(e,t,s)=>{let n=j.get(e);ct&&s?(n=n||new CSSStyleSheet,typeof n=="string"?n=t:n.replaceSync(t)):n=t,j.set(e,n)},He=(e,t,s)=>{var n;const r=de(t),a=j.get(r);if(e=e.nodeType===11?e:E,a)if(typeof a=="string"){e=e.head||e;let i=V.get(e),o;if(i||V.set(e,i=new Set),!i.has(r)){{o=E.createElement("style"),o.innerHTML=a;const l=(n=b.$nonce$)!==null&&n!==void 0?n:ae(E);l!=null&&o.setAttribute("nonce",l),e.insertBefore(o,e.querySelector("link"))}t.$flags$&4&&(o.innerHTML+=oe),i&&i.add(r)}}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,a]);return r},ze=e=>{const t=e.$cmpMeta$,s=e.$hostElement$,n=t.$flags$,r=S("attachStyles",t.$tagName$),a=He(s.shadowRoot?s.shadowRoot:s.getRootNode(),t);n&10&&(s["s-sc"]=a,s.classList.add(a+"-h"),n&2&&s.classList.add(a+"-s")),r()},de=(e,t)=>"sc-"+e.$tagName$,ee=(e,t,s,n,r,a)=>{if(s!==n){let i=se(e,t),o=t.toLowerCase();if(t==="class"){const l=e.classList,$=te(s),c=te(n);l.remove(...$.filter(d=>d&&!c.includes(d))),l.add(...c.filter(d=>d&&!$.includes(d)))}else if(t==="style"){for(const l in s)(!n||n[l]==null)&&(l.includes("-")?e.style.removeProperty(l):e.style[l]="");for(const l in n)(!s||n[l]!==s[l])&&(l.includes("-")?e.style.setProperty(l,n[l]):e.style[l]=n[l])}else if(t!=="key")if(t==="ref")n&&n(e);else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"?t=t.slice(3):se(B,o)?t=o.slice(2):t=o[2]+t.slice(3),s||n){const l=t.endsWith($e);t=t.replace(Ue,""),s&&b.rel(e,t,s,l),n&&b.ael(e,t,n,l)}}else{const l=W(n);if((i||l&&n!==null)&&!r)try{if(e.tagName.includes("-"))e[t]=n;else{const c=n??"";t==="list"?i=!1:(s==null||e[t]!=c)&&(e[t]=c)}}catch{}let $=!1;o!==(o=o.replace(/^xlink\:?/,""))&&(t=o,$=!0),n==null||n===!1?(n!==!1||e.getAttribute(t)==="")&&($?e.removeAttributeNS(Y,t):e.removeAttribute(t)):(!i||a&4||r)&&!l&&(n=n===!0?"":n,$?e.setAttributeNS(Y,t,n):e.setAttribute(t,n))}}},Fe=/\s/,te=e=>e?e.split(Fe):[],$e="Capture",Ue=new RegExp($e+"$"),ue=(e,t,s,n)=>{const r=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||J,i=t.$attrs$||J;for(n in a)n in i||ee(r,n,a[n],void 0,s,t.$flags$);for(n in i)ee(r,n,a[n],i[n],s,t.$flags$)},C=(e,t,s,n)=>{var r;const a=t.$children$[s];let i=0,o,l,$;if(q||(M=!0,a.$tag$==="slot"&&(L&&n.classList.add(L+"-s"),a.$flags$|=a.$children$?2:1)),a.$text$!==null)o=a.$elm$=E.createTextNode(a.$text$);else if(a.$flags$&1)o=a.$elm$=E.createTextNode("");else{if(y||(y=a.$tag$==="svg"),o=a.$elm$=E.createElementNS(y?xe:Ae,a.$flags$&2?"slot-fb":a.$tag$),y&&a.$tag$==="foreignObject"&&(y=!1),ue(null,a,y),Pe(L)&&o["s-si"]!==L&&o.classList.add(o["s-si"]=L),a.$children$)for(i=0;i<a.$children$.length;++i)l=C(e,a,i,o),l&&o.appendChild(l);a.$tag$==="svg"?y=!1:o.tagName==="foreignObject"&&(y=!0)}return o["s-hn"]=x,a.$flags$&3&&(o["s-sr"]=!0,o["s-cr"]=z,o["s-sn"]=a.$name$||"",o["s-rf"]=(r=a.$attrs$)===null||r===void 0?void 0:r.ref,$=e&&e.$children$&&e.$children$[s],$&&$.$tag$===a.$tag$&&e.$elm$&&A(e.$elm$,!1)),o},A=(e,t)=>{b.$flags$|=1;const s=Array.from(e.childNodes);if(e["s-sr"]&&N.experimentalSlotFixes){let n=e;for(;n=n.nextSibling;)n&&n["s-sn"]===e["s-sn"]&&n["s-sh"]===x&&s.push(n)}for(let n=s.length-1;n>=0;n--){const r=s[n];r["s-hn"]!==x&&r["s-ol"]&&(he(r).insertBefore(r,X(r)),r["s-ol"].remove(),r["s-ol"]=void 0,r["s-sh"]=void 0,M=!0),t&&A(r,t)}b.$flags$&=-2},fe=(e,t,s,n,r,a)=>{let i=e["s-cr"]&&e["s-cr"].parentNode||e,o;for(i.shadowRoot&&i.tagName===x&&(i=i.shadowRoot);r<=a;++r)n[r]&&(o=C(null,s,r,e),o&&(n[r].$elm$=o,i.insertBefore(o,X(t))))},pe=(e,t,s)=>{for(let n=t;n<=s;++n){const r=e[n];if(r){const a=r.$elm$;be(r),a&&(D=!0,a["s-ol"]?a["s-ol"].remove():A(a,!0),a.remove())}}},Ne=(e,t,s,n,r=!1)=>{let a=0,i=0,o=0,l=0,$=t.length-1,c=t[0],d=t[$],u=n.length-1,h=n[0],m=n[u],g,v;for(;a<=$&&i<=u;)if(c==null)c=t[++a];else if(d==null)d=t[--$];else if(h==null)h=n[++i];else if(m==null)m=n[--u];else if(O(c,h,r))R(c,h,r),c=t[++a],h=n[++i];else if(O(d,m,r))R(d,m,r),d=t[--$],m=n[--u];else if(O(c,m,r))(c.$tag$==="slot"||m.$tag$==="slot")&&A(c.$elm$.parentNode,!1),R(c,m,r),e.insertBefore(c.$elm$,d.$elm$.nextSibling),c=t[++a],m=n[--u];else if(O(d,h,r))(c.$tag$==="slot"||m.$tag$==="slot")&&A(d.$elm$.parentNode,!1),R(d,h,r),e.insertBefore(d.$elm$,c.$elm$),d=t[--$],h=n[++i];else{for(o=-1,l=a;l<=$;++l)if(t[l]&&t[l].$key$!==null&&t[l].$key$===h.$key$){o=l;break}o>=0?(v=t[o],v.$tag$!==h.$tag$?g=C(t&&t[i],s,o,e):(R(v,h,r),t[o]=void 0,g=v.$elm$),h=n[++i]):(g=C(t&&t[i],s,i,e),h=n[++i]),g&&he(c.$elm$).insertBefore(g,X(c.$elm$))}a>$?fe(e,n[u+1]==null?null:n[u+1].$elm$,s,n,i,u):i>u&&pe(t,a,$)},O=(e,t,s=!1)=>e.$tag$===t.$tag$?e.$tag$==="slot"?e.$name$===t.$name$:s?!0:e.$key$===t.$key$:!1,X=e=>e&&e["s-ol"]||e,he=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,R=(e,t,s=!1)=>{const n=t.$elm$=e.$elm$,r=e.$children$,a=t.$children$,i=t.$tag$,o=t.$text$;let l;o===null?(y=i==="svg"?!0:i==="foreignObject"?!1:y,i==="slot"&&!q||ue(e,t,y),r!==null&&a!==null?Ne(n,r,t,a,s):a!==null?(e.$text$!==null&&(n.textContent=""),fe(n,null,t,a,0,a.length-1)):r!==null&&pe(r,0,r.length-1),y&&i==="svg"&&(y=!1)):(l=n["s-cr"])?l.parentNode.textContent=o:e.$text$!==o&&(n.data=o)},me=e=>{const t=e.childNodes;for(const s of t)if(s.nodeType===1){if(s["s-sr"]){const n=s["s-sn"];s.hidden=!1;for(const r of t)if(r!==s){if(r["s-hn"]!==s["s-hn"]||n!==""){if(r.nodeType===1&&(n===r.getAttribute("slot")||n===r["s-sn"])){s.hidden=!0;break}}else if(r.nodeType===1||r.nodeType===3&&r.textContent.trim()!==""){s.hidden=!0;break}}}me(s)}},T=[],ge=e=>{let t,s,n;for(const r of e.childNodes){if(r["s-sr"]&&(t=r["s-cr"])&&t.parentNode){s=t.parentNode.childNodes;const a=r["s-sn"];for(n=s.length-1;n>=0;n--)if(t=s[n],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]&&!N.experimentalSlotFixes)if(ne(t,a)){let i=T.find(o=>o.$nodeToRelocate$===t);D=!0,t["s-sn"]=t["s-sn"]||a,i?(i.$nodeToRelocate$["s-sh"]=r["s-hn"],i.$slotRefNode$=r):(t["s-sh"]=r["s-hn"],T.push({$slotRefNode$:r,$nodeToRelocate$:t})),t["s-sr"]&&T.map(o=>{ne(o.$nodeToRelocate$,t["s-sn"])&&(i=T.find(l=>l.$nodeToRelocate$===t),i&&!o.$slotRefNode$&&(o.$slotRefNode$=i.$slotRefNode$))})}else T.some(i=>i.$nodeToRelocate$===t)||T.push({$nodeToRelocate$:t})}r.nodeType===1&&ge(r)}},ne=(e,t)=>e.nodeType===1?e.getAttribute("slot")===null&&t===""||e.getAttribute("slot")===t:e["s-sn"]===t?!0:t==="",be=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(be)},qe=(e,t,s=!1)=>{var n,r,a,i;const o=e.$hostElement$,l=e.$cmpMeta$,$=e.$vnode$||w(null,null),c=Oe(t)?t:le(null,null,t);if(x=o.tagName,l.$attrsToReflect$&&(c.$attrs$=c.$attrs$||{},l.$attrsToReflect$.map(([d,u])=>c.$attrs$[u]=o[d])),s&&c.$attrs$)for(const d of Object.keys(c.$attrs$))o.hasAttribute(d)&&!["key","ref","style","class"].includes(d)&&(c.$attrs$[d]=o[d]);c.$tag$=null,c.$flags$|=4,e.$vnode$=c,c.$elm$=$.$elm$=o.shadowRoot||o,L=o["s-sc"],q=(l.$flags$&1)!==0,z=o["s-cr"],D=!1,R($,c,s);{if(b.$flags$|=1,M){ge(c.$elm$);for(const d of T){const u=d.$nodeToRelocate$;if(!u["s-ol"]){const h=E.createTextNode("");h["s-nr"]=u,u.parentNode.insertBefore(u["s-ol"]=h,u)}}for(const d of T){const u=d.$nodeToRelocate$,h=d.$slotRefNode$;if(h){const m=h.parentNode;let g=h.nextSibling;{let v=(n=u["s-ol"])===null||n===void 0?void 0:n.previousSibling;for(;v;){let _=(r=v["s-nr"])!==null&&r!==void 0?r:null;if(_&&_["s-sn"]===u["s-sn"]&&m===_.parentNode&&(_=_.nextSibling,!_||!_["s-nr"])){g=_;break}v=v.previousSibling}}(!g&&m!==u.parentNode||u.nextSibling!==g)&&u!==g&&(!u["s-hn"]&&u["s-ol"]&&(u["s-hn"]=u["s-ol"].parentNode.nodeName),m.insertBefore(u,g),u.nodeType===1&&(u.hidden=(a=u["s-ih"])!==null&&a!==void 0?a:!1)),u&&typeof h["s-rf"]=="function"&&h["s-rf"](u)}else u.nodeType===1&&(s&&(u["s-ih"]=(i=u.hidden)!==null&&i!==void 0?i:!1),u.hidden=!0)}}D&&me(c.$elm$),b.$flags$&=-2,T.length=0}z=void 0},_e=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(s=>e.$onRenderResolve$=s))},G=(e,t)=>{if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}return _e(e,e.$ancestorComponent$),$t(()=>Me(e,t))},Me=(e,t)=>{const s=S("scheduleUpdate",e.$cmpMeta$.$tagName$),n=e.$lazyInstance$;let r;return t&&(r=Ye(n,"componentWillLoad")),s(),We(r,()=>Ge(e,n,t))},We=(e,t)=>Xe(e)?e.then(t):t(),Xe=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",Ge=async(e,t,s)=>{var n;const r=e.$hostElement$,a=S("update",e.$cmpMeta$.$tagName$),i=r["s-rc"];s&&ze(e);const o=S("render",e.$cmpMeta$.$tagName$);Ke(e,t,r,s),i&&(i.map(l=>l()),r["s-rc"]=void 0),o(),a();{const l=(n=r["s-p"])!==null&&n!==void 0?n:[],$=()=>Qe(e);l.length===0?$():(Promise.all(l).then($),e.$flags$|=4,l.length=0)}},Ke=(e,t,s,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,qe(e,t,n)}catch(r){f(r,e.$hostElement$)}return null},Qe=e=>{const t=e.$cmpMeta$.$tagName$,s=e.$hostElement$,n=S("postUpdate",t),r=e.$ancestorComponent$;e.$flags$&64?n():(e.$flags$|=64,ye(s),n(),e.$onReadyResolve$(s),r||ve()),e.$onInstanceResolve$(s),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&Q(()=>G(e,!1)),e.$flags$&=-517},ve=e=>{ye(E.documentElement),Q(()=>ce(B,"appload",{detail:{namespace:ke}}))},Ye=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(n){f(n)}},ye=e=>e.classList.add("hydrated"),Je=(e,t)=>k(e).$instanceValues$.get(t),Ze=(e,t,s,n)=>{const r=k(e),a=r.$hostElement$,i=r.$instanceValues$.get(t),o=r.$flags$,l=r.$lazyInstance$;s=Ce(s,n.$members$[t][0]);const $=Number.isNaN(i)&&Number.isNaN(s),c=s!==i&&!$;if((!(o&8)||i===void 0)&&c&&(r.$instanceValues$.set(t,s),l)){if(n.$watchers$&&o&128){const d=n.$watchers$[t];d&&d.map(u=>{try{l[u](s,i,t)}catch(h){f(h,a)}})}(o&18)===2&&G(r,!1)}},Ee=(e,t,s)=>{var n;const r=e.prototype;if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const a=Object.entries(t.$members$);if(a.map(([i,[o]])=>{o&31||s&2&&o&32?Object.defineProperty(r,i,{get(){return Je(this,i)},set(l){Ze(this,i,l,t)},configurable:!0,enumerable:!0}):s&1&&o&64&&Object.defineProperty(r,i,{value(...l){var $;const c=k(this);return($=c==null?void 0:c.$onInstancePromise$)===null||$===void 0?void 0:$.then(()=>{var d;return(d=c.$lazyInstance$)===null||d===void 0?void 0:d[i](...l)})}})}),s&1){const i=new Map;r.attributeChangedCallback=function(o,l,$){b.jmp(()=>{var c;const d=i.get(o);if(this.hasOwnProperty(d))$=this[d],delete this[d];else{if(r.hasOwnProperty(d)&&typeof this[d]=="number"&&this[d]==$)return;if(d==null){const u=k(this),h=u==null?void 0:u.$flags$;if(h&&!(h&8)&&h&128&&$!==l){const m=u.$lazyInstance$,g=(c=t.$watchers$)===null||c===void 0?void 0:c[o];g==null||g.forEach(v=>{m[v]!=null&&m[v].call(m,$,l,o)})}return}}this[d]=$===null&&typeof this[d]=="boolean"?!1:$})},e.observedAttributes=Array.from(new Set([...Object.keys((n=t.$watchers$)!==null&&n!==void 0?n:{}),...a.filter(([o,l])=>l[0]&15).map(([o,l])=>{var $;const c=l[1]||o;return i.set(c,o),l[0]&512&&(($=t.$attrsToReflect$)===null||$===void 0||$.push([o,c])),c})]))}}return e},Ve=async(e,t,s,n)=>{let r;if(!(t.$flags$&32)){if(t.$flags$|=32,s.$lazyBundleId$){if(r=at(s),r.then){const $=Le();r=await r,$()}r.isProxied||(s.$watchers$=r.watchers,Ee(r,s,2),r.isProxied=!0);const l=S("createInstance",s.$tagName$);t.$flags$|=8;try{new r(t)}catch($){f($)}t.$flags$&=-9,t.$flags$|=128,l()}else r=e.constructor,customElements.whenDefined(s.$tagName$).then(()=>t.$flags$|=128);if(r.style){let l=r.style;const $=de(s);if(!j.has($)){const c=S("registerStyles",s.$tagName$);Be($,l,!!(s.$flags$&1)),c()}}}const a=t.$ancestorComponent$,i=()=>G(t,!0);a&&a["s-rc"]?a["s-rc"].push(i):i()},et=e=>{},tt=e=>{if(!(b.$flags$&1)){const t=k(e),s=t.$cmpMeta$,n=S("connectedCallback",s.$tagName$);if(t.$flags$&1)t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>et());else{t.$flags$|=1,s.$flags$&12&&nt(e);{let r=e;for(;r=r.parentNode||r.host;)if(r["s-p"]){_e(t,t.$ancestorComponent$=r);break}}s.$members$&&Object.entries(s.$members$).map(([r,[a]])=>{if(a&31&&e.hasOwnProperty(r)){const i=e[r];delete e[r],e[r]=i}}),Ve(e,t,s)}n()}},nt=e=>{const t=e["s-cr"]=E.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},st=e=>{},rt=async e=>{if(!(b.$flags$&1)){const t=k(e);t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>st())}},it=(e,t={})=>{var s;const n=S(),r=[],a=t.exclude||[],i=B.customElements,o=E.head,l=o.querySelector("meta[charset]"),$=E.createElement("style"),c=[];let d,u=!0;Object.assign(b,t),b.$resourcesUrl$=new URL(t.resourcesUrl||"./",E.baseURI).href;let h=!1;if(e.map(m=>{m[1].map(g=>{var v;const _={$flags$:g[0],$tagName$:g[1],$members$:g[2],$listeners$:g[3]};_.$flags$&4&&(h=!0),_.$members$=g[2],_.$attrsToReflect$=[],_.$watchers$=(v=g[4])!==null&&v!==void 0?v:{};const P=_.$tagName$,Se=class extends HTMLElement{constructor(I){super(I),I=this,ot(I,_),_.$flags$&1&&I.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),u?c.push(this):b.jmp(()=>tt(this))}disconnectedCallback(){b.jmp(()=>rt(this))}componentOnReady(){return k(this).$onReadyPromise$}};_.$lazyBundleId$=m[0],!a.includes(P)&&!i.get(P)&&(r.push(P),i.define(P,Ee(Se,_,1)))})}),r.length>0&&(h&&($.textContent+=oe),$.textContent+=r+Re,$.innerHTML.length)){$.setAttribute("data-styles","");const m=(s=b.$nonce$)!==null&&s!==void 0?s:ae(E);m!=null&&$.setAttribute("nonce",m),o.insertBefore($,l?l.nextSibling:o.firstChild)}u=!1,c.length?c.map(m=>m.connectedCallback()):b.jmp(()=>d=setTimeout(ve,30)),n()},gt=(e,t)=>t,K=new WeakMap,k=e=>K.get(e),bt=(e,t)=>K.set(t.$lazyInstance$=e,t),ot=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return s.$onInstancePromise$=new Promise(n=>s.$onInstanceResolve$=n),s.$onReadyPromise$=new Promise(n=>s.$onReadyResolve$=n),e["s-p"]=[],e["s-rc"]=[],K.set(e,s)},se=(e,t)=>t in e,f=(e,t)=>(0,console.error)(e,t),H=new Map,at=(e,t,s)=>{const n=e.$tagName$.replace(/-/g,"_"),r=e.$lazyBundleId$,a=H.get(r);if(a)return a[n];if(!s||!N.hotModuleReplacement){const i=o=>(H.set(r,o),o[n]);switch(r){case"db-button_2":return p(()=>import("./db-button_2.entry-DVIhzU2-.js"),__vite__mapDeps([0,1]),import.meta.url).then(i,f);case"db-accordion":return p(()=>import("./db-accordion.entry-DFq_ehdY.js"),__vite__mapDeps([2,1]),import.meta.url).then(i,f);case"db-brand":return p(()=>import("./db-brand.entry-B_pIrSQr.js"),__vite__mapDeps([3,1]),import.meta.url).then(i,f);case"db-breadcrumb":return p(()=>import("./db-breadcrumb.entry-BzZJzCV0.js"),__vite__mapDeps([4,5,1]),import.meta.url).then(i,f);case"db-card":return p(()=>import("./db-card.entry-C3C9quFZ.js"),__vite__mapDeps([6,1]),import.meta.url).then(i,f);case"db-cards":return p(()=>import("./db-cards.entry-BDA5okbc.js"),__vite__mapDeps([7,1]),import.meta.url).then(i,f);case"db-checkbox":return p(()=>import("./db-checkbox.entry-B_dHnf1v.js"),__vite__mapDeps([8,5,1]),import.meta.url).then(i,f);case"db-chip":return p(()=>import("./db-chip.entry-ElsbVNoM.js"),__vite__mapDeps([9,5,1]),import.meta.url).then(i,f);case"db-dropdown":return p(()=>import("./db-dropdown.entry-B4O4561m.js"),__vite__mapDeps([10,5,1]),import.meta.url).then(i,f);case"db-footer":return p(()=>import("./db-footer.entry-CdCWGj4f.js"),__vite__mapDeps([11,1]),import.meta.url).then(i,f);case"db-header":return p(()=>import("./db-header.entry-f_nHD_xA.js"),__vite__mapDeps([12,1]),import.meta.url).then(i,f);case"db-image":return p(()=>import("./db-image.entry-B_CotTRD.js"),__vite__mapDeps([13,5,1]),import.meta.url).then(i,f);case"db-input":return p(()=>import("./db-input.entry-ClMaGR5E.js"),__vite__mapDeps([14,5,1]),import.meta.url).then(i,f);case"db-language-switcher":return p(()=>import("./db-language-switcher.entry-DeGVIQfC.js"),__vite__mapDeps([15,5,1]),import.meta.url).then(i,f);case"db-link":return p(()=>import("./db-link.entry-CQkLP3uV.js"),__vite__mapDeps([16,1]),import.meta.url).then(i,f);case"db-linklist":return p(()=>import("./db-linklist.entry-BkHUvCUg.js"),__vite__mapDeps([17,5,1]),import.meta.url).then(i,f);case"db-logo":return p(()=>import("./db-logo.entry-DwqCWVQ1.js"),__vite__mapDeps([18,1]),import.meta.url).then(i,f);case"db-mainnavigation":return p(()=>import("./db-mainnavigation.entry-04hS6Zcv.js"),__vite__mapDeps([19,5,1]),import.meta.url).then(i,f);case"db-meta":return p(()=>import("./db-meta.entry-DVY1saLP.js"),__vite__mapDeps([20,1]),import.meta.url).then(i,f);case"db-metanavigation":return p(()=>import("./db-metanavigation.entry-BNyn33kS.js"),__vite__mapDeps([21,5,1]),import.meta.url).then(i,f);case"db-notification":return p(()=>import("./db-notification.entry-DMsWq4E-.js"),__vite__mapDeps([22,1]),import.meta.url).then(i,f);case"db-notifications":return p(()=>import("./db-notifications.entry-C27SxkBW.js"),__vite__mapDeps([23,1]),import.meta.url).then(i,f);case"db-overflow-menu":return p(()=>import("./db-overflow-menu.entry-Cx-_DyBF.js"),__vite__mapDeps([24,5,1]),import.meta.url).then(i,f);case"db-page":return p(()=>import("./db-page.entry-DgHhf91E.js"),__vite__mapDeps([25,1]),import.meta.url).then(i,f);case"db-pagination":return p(()=>import("./db-pagination.entry-DNnGd1Hi.js"),__vite__mapDeps([26,5,1]),import.meta.url).then(i,f);case"db-progress":return p(()=>import("./db-progress.entry-CNRSWXkd.js"),__vite__mapDeps([27,5,1]),import.meta.url).then(i,f);case"db-radio":return p(()=>import("./db-radio.entry-w-GzZrjS.js"),__vite__mapDeps([28,5,1]),import.meta.url).then(i,f);case"db-sidenavi":return p(()=>import("./db-sidenavi.entry-Px1BHPZN.js"),__vite__mapDeps([29,5,1]),import.meta.url).then(i,f);case"db-tab":return p(()=>import("./db-tab.entry-Bm1DlJIs.js"),__vite__mapDeps([30,5,1]),import.meta.url).then(i,f);case"db-tab-bar":return p(()=>import("./db-tab-bar.entry-CmxaOAl7.js"),__vite__mapDeps([31,1]),import.meta.url).then(i,f);case"db-table":return p(()=>import("./db-table.entry-BItd8CO0.js"),__vite__mapDeps([32,1]),import.meta.url).then(i,f);case"db-tag":return p(()=>import("./db-tag.entry-BiLEkmVN.js"),__vite__mapDeps([33,1]),import.meta.url).then(i,f);case"db-textarea":return p(()=>import("./db-textarea.entry-D9jeFwn-.js"),__vite__mapDeps([34,5,1]),import.meta.url).then(i,f);case"db-toggle":return p(()=>import("./db-toggle.entry-Cgh-Gnc9.js"),__vite__mapDeps([35,5,1]),import.meta.url).then(i,f);case"github-version-switcher":return p(()=>import("./github-version-switcher.entry-C3r7--CK.js"),__vite__mapDeps([36,1]),import.meta.url).then(i,f);case"db-headline":return p(()=>import("./db-headline.entry-pkHEuc2x.js"),__vite__mapDeps([37,1]),import.meta.url).then(i,f);case"db-select":return p(()=>import("./db-select.entry-MUwKvyMq.js"),__vite__mapDeps([38,5,1]),import.meta.url).then(i,f)}}return p(()=>import(`./${r}.entry.js`),__vite__mapDeps([]),import.meta.url).then(i=>(H.set(r,i),i[n]),f)},j=new Map,B=typeof window<"u"?window:{},E=B.document||{head:{}},b={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n),ce:(e,t)=>new CustomEvent(e,t)},lt=e=>Promise.resolve(e),ct=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),re=[],Te=[],dt=(e,t)=>s=>{e.push(s),F||(F=!0,t&&b.$flags$&4?Q(U):b.raf(U))},ie=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(s){f(s)}e.length=0},U=()=>{ie(re),ie(Te),(F=re.length>0)&&b.raf(U)},Q=e=>lt().then(e),$t=dt(Te,!0),ut=()=>{},ft=async(e,t)=>{if(!(typeof window>"u"))return await ut(),it([["db-card",[[4,"db-card",{alt:[513],header:[513],content:[513],image:[513],illustration:[513],uiCoreIllustrationPath:[513,"illustration-path"],variant:[513]}]]],["db-chip",[[4,"db-chip",{interactiontype:[513],disabled:[516],icon:[513],iconafter:[513],input_id:[513],name:[513],selected:[516],variant:[513]}]]],["db-link",[[4,"db-link",{current:[513],href:[513],hreflang:[513],icon:[513],iconVariant:[513,"icon-variant"],icononly:[516],media:[513],rel:[513],target:[513],type:[513],text:[513]}]]],["db-table",[[2,"db-table",{tabledata:[1],align:[513],verticalalign:[513],bodyalign:[513],bodyverticalalign:[513],border:[513],density:[513],fontsize:[513],stripes:[513],sticky:[513]},null,{tabledata:["validateTableData"]}]]],["db-tag",[[4,"db-tag",{icon:[513],iconafter:[513],small:[516],variant:[513]}]]],["github-version-switcher",[[1,"github-version-switcher",{owner:[1],repo:[1],groups:[32],currentBranch:[32],cleanOwner:[32],cleanRepo:[32]}]]],["db-accordion",[[4,"db-accordion",{emphasis:[4],size:[1],summary:[1],open:[4]}]]],["db-brand",[[4,"db-brand",{siteNameLink:[516,"site-name-link"],alt:[513],anchorRef:[513,"href"],anchorTitle:[513,"title"],anchorRelation:[513,"rel"],src:[513]}]]],["db-breadcrumb",[[4,"db-breadcrumb",{data:[513],arialabel:[513]}]]],["db-cards",[[4,"db-cards"]]],["db-checkbox",[[2,"db-checkbox",{autofocus:[516],checked:[516],disabled:[516],input_id:[513],label:[513],name:[513],required:[516],value:[513],indeterminate:[4],labelHidden:[513,"label-hidden"],setIndeterminate:[64]}]]],["db-dropdown",[[4,"db-dropdown",{data:[513],opposite:[516],summary:[513]}]]],["db-footer",[[6,"db-footer",{border:[4],copyright:[4]}]]],["db-header",[[4,"db-header"]]],["db-image",[[2,"db-image",{src:[513],modernformat:[1],srcset:[1],alt:[513],width:[514],height:[514],loading:[1],caption:[1],responsivemediaquery:[1],ariaid:[1]}]]],["db-input",[[6,"db-input",{ariainvalid:[513],ariarequired:[513],autocomplete:[513],autofocus:[516],description:[513],dirname:[513],disabled:[516],input_id:[513],label:[513],list:[513],maxlength:[514],minlength:[514],name:[513],pattern:[513],step:[514],min:[514],max:[514],placeholder:[513],readonly:[516],required:[516],size:[514],type:[513],value:[513],variant:[513],labelHidden:[513,"label-hidden"],valueSize:[32]}]]],["db-language-switcher",[[4,"db-language-switcher",{ariaSelectedIndex:[514,"aria-selected-index"],data:[513]}]]],["db-linklist",[[4,"db-linklist",{data:[513]}]]],["db-logo",[[0,"db-logo",{size:[1]}]]],["db-mainnavigation",[[4,"db-mainnavigation",{siteName:[513,"site-name"],data:[513]}]]],["db-meta",[[1,"db-meta"]]],["db-metanavigation",[[4,"db-metanavigation",{data:[513]}]]],["db-notification",[[4,"db-notification",{variant:[513],type:[513]}]]],["db-notifications",[[4,"db-notifications",{arialive:[513],variant:[513]}]]],["db-overflow-menu",[[4,"db-overflow-menu",{data:[513],opposite:[516],summary:[513]}]]],["db-page",[[4,"db-page"]]],["db-pagination",[[0,"db-pagination",{ellipsisstart:[516],ellipsisend:[516],currentpage:[514],pages:[514],count:[514],titleprevious:[513],titlenext:[513],titlepagination:[513],textprevious:[513],textnext:[513],arialabel:[513],ariaid:[1]},null,{pages:["watchHandler"],currentpage:["watchHandler"],count:["watchHandler"]}]]],["db-progress",[[2,"db-progress",{value:[514],max:[514],htmlid:[1],percentagesign:[1],circle:[4],indeterminate:[4]}]]],["db-radio",[[2,"db-radio",{autofocus:[516],checked:[516],disabled:[516],input_id:[513],label:[513],name:[513],required:[516],value:[513],labelHidden:[513,"label-hidden"]}]]],["db-sidenavi",[[4,"db-sidenavi",{data:[513]}]]],["db-tab",[[4,"db-tab",{active:[516],label:[513],name:[513]}]]],["db-tab-bar",[[4,"db-tab-bar"]]],["db-textarea",[[6,"db-textarea",{ariainvalid:[513],ariarequired:[513],autofocus:[516],cols:[514],description:[513],dirname:[513],disabled:[516],input_id:[513],label:[513],maxlength:[514],minlength:[514],name:[513],placeholder:[513],readonly:[516],required:[516],rows:[514],variant:[513],wrap:[513],value:[513],labelHidden:[513,"label-hidden"],valueSize:[32]}]]],["db-toggle",[[4,"db-toggle",{htmlid:[1],disabled:[516],checked:[516],name:[513]}]]],["db-headline",[[4,"db-headline",{variant:[1],pulse:[516]}]]],["db-select",[[6,"db-select",{ariainvalid:[516],disabled:[516],input_id:[513],label:[513],multiple:[516],name:[513],required:[516],size:[514],value:[1],variant:[513],labelHidden:[513,"label-hidden"]}]]],["db-button_2",[[4,"db-button",{ariaexpanded:[513],ariapressed:[513],disabled:[516],formaction:[513],formenctype:[513],formmethod:[513],formnovalidate:[516],formtarget:[513],icon:[513],iconafter:[513],icononly:[516],name:[513],tooltip:[513],type:[513],value:[513],variant:[513],size:[513]}],[1,"db-icon",{icon:[1],variant:[1]}]]]],t)};ft();const pt={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",controls:{expanded:!0,hideNoControlsWarning:!0},previewTabs:{"storybook/docs/panel":{hidden:!0},canvas:{hidden:!0}},viewMode:"story",options:{showToolbar:!0,storySort:{method:"alphabetical",order:["00-Intro",["Welcome","Getting Started","Frameworks","Showcases"],"02-Layout","03-Navigation","04-Action","05-Data-Display","06-Data-Input","07-Feedback","08-Utility","20-Legal","99-Development"]}}},_t=Object.freeze(Object.defineProperty({__proto__:null,parameters:pt},Symbol.toStringTag,{value:"Module"}));export{gt as F,Ie as H,mt as c,je as g,le as h,_t as p,bt as r};
