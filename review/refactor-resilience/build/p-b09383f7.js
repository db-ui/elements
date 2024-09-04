const e="db-ui-elements";const t={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:false,cmpDidRender:true,cmpDidUnload:false,cmpDidUpdate:false,cmpShouldUpdate:false,cmpWillLoad:true,cmpWillRender:false,cmpWillUpdate:false,connectedCallback:false,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:false,element:false,event:true,experimentalScopedSlotChanges:false,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:false,hostListenerTarget:false,hostListenerTargetBody:false,hostListenerTargetDocument:false,hostListenerTargetParent:false,hostListenerTargetWindow:false,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,hydratedSelectorName:"hydrated",initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:true,mode:false,observeAttribute:true,profile:false,prop:true,propBoolean:true,propMutable:false,propNumber:true,propString:true,reflect:true,scoped:true,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:true,slot:true,slotChildNodesFix:false,slotRelocation:true,state:true,style:true,svg:true,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,vdomXlink:true,watchCallback:true};var r=Object.defineProperty;var n=(e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:true})};var l=new WeakMap;var s=e=>l.get(e);var i=(e,t)=>l.set(t.t=e,t);var o=(e,t)=>{const r={l:0,$hostElement$:e,i:t,o:new Map};{r.u=new Promise((e=>r.v=e))}{r.h=new Promise((e=>r.p=e));e["s-p"]=[];e["s-rc"]=[]}return l.set(e,r)};var a=(e,t)=>t in e;var f=(e,t)=>(0,console.error)(e,t);var c=new Map;var u=(e,t,r)=>{const n=e.m.replace(/-/g,"_");const l=e.$;if(!l){return void 0}const s=c.get(l);if(s){return s[n]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{c.set(l,e)}return e[n]}),f)};var v=new Map;var d="{visibility:hidden}.hydrated{visibility:inherit}";var h="slot-fb{display:contents}slot-fb[hidden]{display:none}";var p="http://www.w3.org/1999/xlink";var m=typeof window!=="undefined"?window:{};var y=m.document||{head:{}};var w={l:0,S:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,r,n)=>e.addEventListener(t,r,n),rel:(e,t,r,n)=>e.removeEventListener(t,r,n),ce:(e,t)=>new CustomEvent(e,t)};var b=e=>Promise.resolve(e);var g=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();var $=false;var S=[];var k=[];var C=(e,t)=>r=>{e.push(r);if(!$){$=true;if(t&&w.l&4){O(j)}else{w.raf(j)}}};var x=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){f(e)}}e.length=0};var j=()=>{x(S);{x(k);if($=S.length>0){w.raf(j)}}};var O=e=>b().then(e);var T=C(k,true);var R={};var E="http://www.w3.org/2000/svg";var D="http://www.w3.org/1999/xhtml";var L=e=>e!=null;var F=e=>{e=typeof e;return e==="object"||e==="function"};function M(e){var t,r,n;return(n=(r=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:r.getAttribute("content"))!=null?n:void 0}var A={};n(A,{err:()=>N,map:()=>U,ok:()=>P,unwrap:()=>W,unwrapErr:()=>H});var P=e=>({isOk:true,isErr:false,value:e});var N=e=>({isOk:false,isErr:true,value:e});function U(e,t){if(e.isOk){const r=t(e.value);if(r instanceof Promise){return r.then((e=>P(e)))}else{return P(r)}}if(e.isErr){const t=e.value;return N(t)}throw"should never get here"}var W=e=>{if(e.isOk){return e.value}else{throw e.value}};var H=e=>{if(e.isErr){return e.value}else{throw e.value}};var B=(e,t="")=>{{return()=>{}}};var z=(e,t)=>{{return()=>{}}};var I=(e,t,...r)=>{let n=null;let l=null;let s=null;let i=false;let o=false;const a=[];const f=t=>{for(let r=0;r<t.length;r++){n=t[r];if(Array.isArray(n)){f(n)}else if(n!=null&&typeof n!=="boolean"){if(i=typeof e!=="function"&&!F(n)){n=String(n)}if(i&&o){a[a.length-1].k+=n}else{a.push(i?Q(null,n):n)}o=i}}};f(r);if(t){if(t.key){l=t.key}if(t.name){s=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,a,K)}const c=Q(e,null);c.C=t;if(a.length>0){c.j=a}{c.O=l}{c.T=s}return c};var Q=(e,t)=>{const r={l:0,R:e,k:t,D:null,j:null};{r.C=null}{r.O=null}{r.T=null}return r};var q={};var G=e=>e&&e.R===q;var K={forEach:(e,t)=>e.map(V).forEach(t),map:(e,t)=>e.map(V).map(t).map(X)};var V=e=>({vattrs:e.C,vchildren:e.j,vkey:e.O,vname:e.T,vtag:e.R,vtext:e.k});var X=e=>{if(typeof e.vtag==="function"){const t={...e.vattrs};if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return I(e.vtag,t,...e.vchildren||[])}const t=Q(e.vtag,e.vtext);t.C=e.vattrs;t.j=e.vchildren;t.O=e.vkey;t.T=e.vname;return t};var _=(e,t)=>{if(e!=null&&!F(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var J=e=>s(e).$hostElement$;var Y=(e,t,r)=>{const n=J(e);return{emit:e=>Z(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}};var Z=(e,t,r)=>{const n=w.ce(t,r);e.dispatchEvent(n);return n};var ee=new WeakMap;var te=(e,t,r)=>{let n=v.get(e);if(g&&r){n=n||new CSSStyleSheet;if(typeof n==="string"){n=t}else{n.replaceSync(t)}}else{n=t}v.set(e,n)};var re=(e,t,r)=>{var n;const l=le(t);const s=v.get(l);e=e.nodeType===11?e:y;if(s){if(typeof s==="string"){e=e.head||e;let r=ee.get(e);let i;if(!r){ee.set(e,r=new Set)}if(!r.has(l)){{i=y.createElement("style");i.innerHTML=s;const r=(n=w.L)!=null?n:M(y);if(r!=null){i.setAttribute("nonce",r)}const l=!(t.l&1)||t.l&1&&e.nodeName!=="HEAD";if(l){e.insertBefore(i,e.querySelector("link"))}}if(t.l&4){i.innerHTML+=h}if(r){r.add(l)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]}}return l};var ne=e=>{const t=e.i;const r=e.$hostElement$;const n=t.l;const l=B("attachStyles",t.m);const s=re(r.shadowRoot?r.shadowRoot:r.getRootNode(),t);if(n&10&&n&2){r["s-sc"]=s;r.classList.add(s+"-h");if(n&2){r.classList.add(s+"-s")}}l()};var le=(e,t)=>"sc-"+e.m;var se=(e,t,r,n,l,s)=>{if(r!==n){let i=a(e,t);let o=t.toLowerCase();if(t==="class"){const t=e.classList;const l=oe(r);const s=oe(n);t.remove(...l.filter((e=>e&&!s.includes(e))));t.add(...s.filter((e=>e&&!l.includes(e))))}else if(t==="style"){{for(const t in r){if(!n||n[t]==null){if(t.includes("-")){e.style.removeProperty(t)}else{e.style[t]=""}}}}for(const t in n){if(!r||n[t]!==r[t]){if(t.includes("-")){e.style.setProperty(t,n[t])}else{e.style[t]=n[t]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(a(m,o)){t=o.slice(2)}else{t=o[2]+t.slice(3)}if(r||n){const l=t.endsWith(ae);t=t.replace(fe,"");if(r){w.rel(e,t,r,l)}if(n){w.ael(e,t,n,l)}}}else{const a=F(n);if((i||a&&n!==null)&&!l){try{if(!e.tagName.includes("-")){const l=n==null?"":n;if(t==="list"){i=false}else if(r==null||e[t]!=l){e[t]=l}}else{e[t]=n}}catch(e){}}let f=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){t=o;f=true}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){if(f){e.removeAttributeNS(p,t)}else{e.removeAttribute(t)}}}else if((!i||s&4||l)&&!a){n=n===true?"":n;if(f){e.setAttributeNS(p,t,n)}else{e.setAttribute(t,n)}}}}};var ie=/\s/;var oe=e=>!e?[]:e.split(ie);var ae="Capture";var fe=new RegExp(ae+"$");var ce=(e,t,r)=>{const n=t.D.nodeType===11&&t.D.host?t.D.host:t.D;const l=e&&e.C||R;const s=t.C||R;{for(const e of ue(Object.keys(l))){if(!(e in s)){se(n,e,l[e],void 0,r,t.l)}}}for(const e of ue(Object.keys(s))){se(n,e,l[e],s[e],r,t.l)}};function ue(e){return e.includes("ref")?[...e.filter((e=>e!=="ref")),"ref"]:e}var ve;var de;var he;var pe=false;var me=false;var ye=false;var we=false;var be=(e,r,n,l)=>{var s;const i=r.j[n];let o=0;let a;let f;let c;if(!pe){ye=true;if(i.R==="slot"){if(ve){l.classList.add(ve+"-s")}i.l|=i.j?2:1}}if(i.k!==null){a=i.D=y.createTextNode(i.k)}else if(i.l&1){a=i.D=y.createTextNode("")}else{if(!we){we=i.R==="svg"}a=i.D=y.createElementNS(we?E:D,!pe&&t.slotRelocation&&i.l&2?"slot-fb":i.R);if(we&&i.R==="foreignObject"){we=false}{ce(null,i,we)}const r=a.getRootNode();const n=!r.querySelector("body");if(!n&&t.scoped&&L(ve)&&a["s-si"]!==ve){a.classList.add(a["s-si"]=ve)}{Ae(a,l)}if(i.j){for(o=0;o<i.j.length;++o){f=be(e,i,o,a);if(f){a.appendChild(f)}}}{if(i.R==="svg"){we=false}else if(a.tagName==="foreignObject"){we=true}}}a["s-hn"]=he;{if(i.l&(2|1)){a["s-sr"]=true;a["s-cr"]=de;a["s-sn"]=i.T||"";a["s-rf"]=(s=i.C)==null?void 0:s.ref;c=e&&e.j&&e.j[n];if(c&&c.R===i.R&&e.D){{ge(e.D,false)}}}}return a};var ge=(e,r)=>{w.l|=1;const n=Array.from(e.childNodes);if(e["s-sr"]&&t.experimentalSlotFixes){let t=e;while(t=t.nextSibling){if(t&&t["s-sn"]===e["s-sn"]&&t["s-sh"]===he){n.push(t)}}}for(let e=n.length-1;e>=0;e--){const t=n[e];if(t["s-hn"]!==he&&t["s-ol"]){Fe(je(t),t,xe(t));t["s-ol"].remove();t["s-ol"]=void 0;t["s-sh"]=void 0;ye=true}if(r){ge(t,r)}}w.l&=~1};var $e=(e,t,r,n,l,s)=>{let i=e["s-cr"]&&e["s-cr"].parentNode||e;let o;if(i.shadowRoot&&i.tagName===he){i=i.shadowRoot}for(;l<=s;++l){if(n[l]){o=be(null,r,l,e);if(o){n[l].D=o;Fe(i,o,xe(t))}}}};var Se=(e,t,r)=>{for(let n=t;n<=r;++n){const t=e[n];if(t){const e=t.D;Le(t);if(e){{me=true;if(e["s-ol"]){e["s-ol"].remove()}else{ge(e,true)}}e.remove()}}}};var ke=(e,t,r,n,l=false)=>{let s=0;let i=0;let o=0;let a=0;let f=t.length-1;let c=t[0];let u=t[f];let v=n.length-1;let d=n[0];let h=n[v];let p;let m;while(s<=f&&i<=v){if(c==null){c=t[++s]}else if(u==null){u=t[--f]}else if(d==null){d=n[++i]}else if(h==null){h=n[--v]}else if(Ce(c,d,l)){Oe(c,d,l);c=t[++s];d=n[++i]}else if(Ce(u,h,l)){Oe(u,h,l);u=t[--f];h=n[--v]}else if(Ce(c,h,l)){if(c.R==="slot"||h.R==="slot"){ge(c.D.parentNode,false)}Oe(c,h,l);Fe(e,c.D,u.D.nextSibling);c=t[++s];h=n[--v]}else if(Ce(u,d,l)){if(c.R==="slot"||h.R==="slot"){ge(u.D.parentNode,false)}Oe(u,d,l);Fe(e,u.D,c.D);u=t[--f];d=n[++i]}else{o=-1;{for(a=s;a<=f;++a){if(t[a]&&t[a].O!==null&&t[a].O===d.O){o=a;break}}}if(o>=0){m=t[o];if(m.R!==d.R){p=be(t&&t[i],r,o,e)}else{Oe(m,d,l);t[o]=void 0;p=m.D}d=n[++i]}else{p=be(t&&t[i],r,i,e);d=n[++i]}if(p){{Fe(je(c.D),p,xe(c.D))}}}}if(s>f){$e(e,n[v+1]==null?null:n[v+1].D,r,n,i,v)}else if(i>v){Se(t,s,f)}};var Ce=(e,t,r=false)=>{if(e.R===t.R){if(e.R==="slot"){if("F"in e&&r&&e.D.nodeType!==8){return false}return e.T===t.T}if(!r){return e.O===t.O}return true}return false};var xe=e=>e&&e["s-ol"]||e;var je=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;var Oe=(e,r,n=false)=>{const l=r.D=e.D;const s=e.j;const i=r.j;const o=r.R;const a=r.k;let f;if(a===null){{we=o==="svg"?true:o==="foreignObject"?false:we}{if(o==="slot"&&!pe);else{ce(e,r,we)}}if(s!==null&&i!==null){ke(l,s,r,i,n)}else if(i!==null){if(e.k!==null){l.textContent=""}$e(l,null,r,i,0,i.length-1)}else if(!n&&t.updatable&&s!==null){Se(s,0,s.length-1)}if(we&&o==="svg"){we=false}}else if(f=l["s-cr"]){f.parentNode.textContent=a}else if(e.k!==a){l.data=a}};var Te=e=>{const t=e.childNodes;for(const e of t){if(e.nodeType===1){if(e["s-sr"]){const r=e["s-sn"];e.hidden=false;for(const n of t){if(n!==e){if(n["s-hn"]!==e["s-hn"]||r!==""){if(n.nodeType===1&&(r===n.getAttribute("slot")||r===n["s-sn"])||n.nodeType===3&&r===n["s-sn"]){e.hidden=true;break}}else{if(n.nodeType===1||n.nodeType===3&&n.textContent.trim()!==""){e.hidden=true;break}}}}}Te(e)}}};var Re=[];var Ee=e=>{let r;let n;let l;for(const s of e.childNodes){if(s["s-sr"]&&(r=s["s-cr"])&&r.parentNode){n=r.parentNode.childNodes;const e=s["s-sn"];for(l=n.length-1;l>=0;l--){r=n[l];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==s["s-hn"]&&!t.experimentalSlotFixes){if(De(r,e)){let t=Re.find((e=>e.M===r));me=true;r["s-sn"]=r["s-sn"]||e;if(t){t.M["s-sh"]=s["s-hn"];t.A=s}else{r["s-sh"]=s["s-hn"];Re.push({A:s,M:r})}if(r["s-sr"]){Re.map((e=>{if(De(e.M,r["s-sn"])){t=Re.find((e=>e.M===r));if(t&&!e.A){e.A=t.A}}}))}}else if(!Re.some((e=>e.M===r))){Re.push({M:r})}}}}if(s.nodeType===1){Ee(s)}}};var De=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var Le=e=>{{e.C&&e.C.ref&&e.C.ref(null);e.j&&e.j.map(Le)}};var Fe=(e,t,r)=>{const n=e==null?void 0:e.insertBefore(t,r);{Ae(t,e)}return n};var Me=e=>{const t=[];if(e){t.push(...e["s-scs"]||[],e["s-si"],e["s-sc"],...Me(e.parentElement))}return t};var Ae=(e,t,r=false)=>{var n;if(e&&t&&e.nodeType===1){const l=new Set(Me(t).filter(Boolean));if(l.size){(n=e.classList)==null?void 0:n.add(...e["s-scs"]=[...l]);if(e["s-ol"]||r){for(const t of Array.from(e.childNodes)){Ae(t,e,true)}}}}};var Pe=(e,t,r=false)=>{var n,l,s,i;const o=e.$hostElement$;const a=e.i;const f=e.P||Q(null,null);const c=G(t)?t:I(null,null,t);he=o.tagName;if(a.N){c.C=c.C||{};a.N.map((([e,t])=>c.C[t]=o[e]))}if(r&&c.C){for(const e of Object.keys(c.C)){if(o.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){c.C[e]=o[e]}}}c.R=null;c.l|=4;e.P=c;c.D=f.D=o.shadowRoot||o;{ve=o["s-sc"]}pe=(a.l&1)!==0;{de=o["s-cr"];me=false}Oe(f,c,r);{w.l|=1;if(ye){Ee(c.D);for(const e of Re){const t=e.M;if(!t["s-ol"]){const e=y.createTextNode("");e["s-nr"]=t;Fe(t.parentNode,t["s-ol"]=e,t)}}for(const e of Re){const t=e.M;const o=e.A;if(o){const e=o.parentNode;let r=o.nextSibling;{let s=(n=t["s-ol"])==null?void 0:n.previousSibling;while(s){let n=(l=s["s-nr"])!=null?l:null;if(n&&n["s-sn"]===t["s-sn"]&&e===n.parentNode){n=n.nextSibling;while(n===t||(n==null?void 0:n["s-sr"])){n=n==null?void 0:n.nextSibling}if(!n||!n["s-nr"]){r=n;break}}s=s.previousSibling}}if(!r&&e!==t.parentNode||t.nextSibling!==r){if(t!==r){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}Fe(e,t,r);if(t.nodeType===1){t.hidden=(s=t["s-ih"])!=null?s:false}}}t&&typeof o["s-rf"]==="function"&&o["s-rf"](t)}else{if(t.nodeType===1){if(r){t["s-ih"]=(i=t.hidden)!=null?i:false}t.hidden=true}}}}if(me){Te(c.D)}w.l&=~1;Re.length=0}de=void 0};var Ne=(e,t)=>{if(t&&!e.U&&t["s-p"]){t["s-p"].push(new Promise((t=>e.U=t)))}};var Ue=(e,t)=>{{e.l|=16}if(e.l&4){e.l|=512;return}Ne(e,e.W);const r=()=>We(e,t);return T(r)};var We=(e,t)=>{const r=e.$hostElement$;const n=B("scheduleUpdate",e.i.m);const l=e.t;if(!l){throw new Error(`Can't render component <${r.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`)}let s;if(t){{s=Ge(l,"componentWillLoad")}}n();return He(s,(()=>ze(e,l,t)))};var He=(e,t)=>Be(e)?e.then(t).catch((e=>{console.error(e);t()})):t();var Be=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";var ze=async(e,t,r)=>{var n;const l=e.$hostElement$;const s=B("update",e.i.m);const i=l["s-rc"];if(r){ne(e)}const o=B("render",e.i.m);{Ie(e,t,l,r)}if(i){i.map((e=>e()));l["s-rc"]=void 0}o();s();{const t=(n=l["s-p"])!=null?n:[];const r=()=>Qe(e);if(t.length===0){r()}else{Promise.all(t).then(r);e.l|=4;t.length=0}}};var Ie=(e,t,r,n)=>{try{t=t.render();{e.l&=~16}{e.l|=2}{{{Pe(e,t,n)}}}}catch(t){f(t,e.$hostElement$)}return null};var Qe=e=>{const t=e.i.m;const r=e.$hostElement$;const n=B("postUpdate",t);const l=e.t;const s=e.W;{Ge(l,"componentDidRender")}if(!(e.l&64)){e.l|=64;{Ke(r)}n();{e.p(r);if(!s){qe()}}}else{n()}{e.v(r)}{if(e.U){e.U();e.U=void 0}if(e.l&512){O((()=>Ue(e,false)))}e.l&=~(4|512)}};var qe=t=>{{Ke(y.documentElement)}O((()=>Z(m,"appload",{detail:{namespace:e}})))};var Ge=(e,t,r)=>{if(e&&e[t]){try{return e[t](r)}catch(e){f(e)}}return void 0};var Ke=e=>{var r;return e.classList.add((r=t.hydratedSelectorName)!=null?r:"hydrated")};var Ve=(e,t)=>s(e).o.get(t);var Xe=(e,t,r,n)=>{const l=s(e);if(!l){throw new Error(`Couldn't find host element for "${n.m}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`)}const i=l.$hostElement$;const o=l.o.get(t);const a=l.l;const c=l.t;r=_(r,n.H[t][0]);const u=Number.isNaN(o)&&Number.isNaN(r);const v=r!==o&&!u;if((!(a&8)||o===void 0)&&v){l.o.set(t,r);if(c){if(n.B&&a&128){const e=n.B[t];if(e){e.map((e=>{try{c[e](r,o,t)}catch(e){f(e,i)}}))}}if((a&(2|16))===2){Ue(l,false)}}}};var _e=(e,t,r)=>{var n,l;const i=e.prototype;if(t.H||(t.B||e.watchers)){if(e.watchers&&!t.B){t.B=e.watchers}const o=Object.entries((n=t.H)!=null?n:{});o.map((([e,[n]])=>{if(n&31||r&2&&n&32){Object.defineProperty(i,e,{get(){return Ve(this,e)},set(r){Xe(this,e,r,t)},configurable:true,enumerable:true})}else if(r&1&&n&64){Object.defineProperty(i,e,{value(...t){var r;const n=s(this);return(r=n==null?void 0:n.u)==null?void 0:r.then((()=>{var r;return(r=n.t)==null?void 0:r[e](...t)}))}})}}));if(r&1){const r=new Map;i.attributeChangedCallback=function(e,n,l){w.jmp((()=>{var o;const a=r.get(e);if(this.hasOwnProperty(a)){l=this[a];delete this[a]}else if(i.hasOwnProperty(a)&&typeof this[a]==="number"&&this[a]==l){return}else if(a==null){const r=s(this);const i=r==null?void 0:r.l;if(i&&!(i&8)&&i&128&&l!==n){const s=r.t;const i=(o=t.B)==null?void 0:o[e];i==null?void 0:i.forEach((t=>{if(s[t]!=null){s[t].call(s,l,n,e)}}))}return}this[a]=l===null&&typeof this[a]==="boolean"?false:l}))};e.observedAttributes=Array.from(new Set([...Object.keys((l=t.B)!=null?l:{}),...o.filter((([e,t])=>t[0]&15)).map((([e,n])=>{var l;const s=n[1]||e;r.set(s,e);if(n[0]&512){(l=t.N)==null?void 0:l.push([e,s])}return s}))]))}}return e};var Je=async(e,t,r,n)=>{let l;if((t.l&32)===0){t.l|=32;const n=r.$;if(n){const e=u(r);if(e&&"then"in e){const t=z();l=await e;t()}else{l=e}if(!l){throw new Error(`Constructor for "${r.m}#${t.I}" was not found`)}if(!l.isProxied){{r.B=l.watchers}_e(l,r,2);l.isProxied=true}const n=B("createInstance",r.m);{t.l|=8}try{new l(t)}catch(e){f(e)}{t.l&=~8}{t.l|=128}n()}else{l=e.constructor;const r=e.localName;customElements.whenDefined(r).then((()=>t.l|=128))}if(l&&l.style){let e;if(typeof l.style==="string"){e=l.style}const t=le(r);if(!v.has(t)){const n=B("registerStyles",r.m);te(t,e,!!(r.l&1));n()}}}const s=t.W;const i=()=>Ue(t,true);if(s&&s["s-rc"]){s["s-rc"].push(i)}else{i()}};var Ye=e=>{};var Ze=e=>{if((w.l&1)===0){const t=s(e);const r=t.i;const n=B("connectedCallback",r.m);if(!(t.l&1)){t.l|=1;{if(r.l&(4|8)){et(e)}}{let r=e;while(r=r.parentNode||r.host){if(r["s-p"]){Ne(t,t.W=r);break}}}if(r.H){Object.entries(r.H).map((([t,[r]])=>{if(r&31&&e.hasOwnProperty(t)){const r=e[t];delete e[t];e[t]=r}}))}{Je(e,t,r)}}else{if(t==null?void 0:t.t);else if(t==null?void 0:t.h){t.h.then((()=>Ye()))}}n()}};var et=e=>{const t=e["s-cr"]=y.createComment("");t["s-cn"]=true;Fe(e,t,e.firstChild)};var tt=e=>{};var rt=async e=>{if((w.l&1)===0){const t=s(e);if(t==null?void 0:t.t);else if(t==null?void 0:t.h){t.h.then((()=>tt()))}}};var nt=(e,t={})=>{var r;const n=B();const l=[];const i=t.exclude||[];const a=m.customElements;const f=y.head;const c=f.querySelector("meta[charset]");const u=y.createElement("style");const v=[];let p;let b=true;Object.assign(w,t);w.S=new URL(t.resourcesUrl||"./",y.baseURI).href;let g=false;e.map((e=>{e[1].map((t=>{var r;const n={l:t[0],m:t[1],H:t[2],q:t[3]};if(n.l&4){g=true}{n.H=t[2]}{n.N=[]}{n.B=(r=t[4])!=null?r:{}}const f=n.m;const c=class extends HTMLElement{constructor(e){super(e);this.hasRegisteredEventListeners=false;e=this;o(e,n);if(n.l&1){{if(!e.shadowRoot){{e.attachShadow({mode:"open"})}}else{if(e.shadowRoot.mode!=="open"){throw new Error(`Unable to re-use existing shadow root for ${n.m}! Mode is set to ${e.shadowRoot.mode} but Stencil only supports open shadow roots.`)}}}}}connectedCallback(){s(this);if(!this.hasRegisteredEventListeners){this.hasRegisteredEventListeners=true}if(p){clearTimeout(p);p=null}if(b){v.push(this)}else{w.jmp((()=>Ze(this)))}}disconnectedCallback(){w.jmp((()=>rt(this)))}componentOnReady(){return s(this).h}};n.$=e[0];if(!i.includes(f)&&!a.get(f)){l.push(f);a.define(f,_e(c,n,1))}}))}));if(l.length>0){if(g){u.textContent+=h}{u.textContent+=l.sort()+d}if(u.innerHTML.length){u.setAttribute("data-styles","");const e=(r=w.L)!=null?r:M(y);if(e!=null){u.setAttribute("nonce",e)}f.insertBefore(u,c?c.nextSibling:f.firstChild)}}b=false;if(v.length){v.map((e=>e.connectedCallback()))}else{{w.jmp((()=>p=setTimeout(qe,30)))}}n()};var lt=(e,t)=>t;var st=e=>w.L=e;export{lt as F,q as H,nt as b,Y as c,J as g,I as h,b as p,i as r,st as s};
//# sourceMappingURL=p-b09383f7.js.map