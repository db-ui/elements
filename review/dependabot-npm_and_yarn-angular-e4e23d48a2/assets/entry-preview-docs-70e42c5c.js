import{a as g,j as l}from"./chunk-FJPRWHXQ-ae58696e.js";import{S as u,e as v,a as D}from"./index-bab9eea1.js";import"./index-356e4a49.js";const{global:d}=__STORYBOOK_MODULE_GLOBAL__,{start:T}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:b}=d;b.STORYBOOK_ENV="web-components";var c=T(g);c.forceReRender;c.clientApi.raw;function f(e){if(!e)return!1;if(typeof e=="string")return!0;throw new Error('Provided component needs to be a string. e.g. component: "my-element"')}function O(e){if(!e)return!1;if(e.tags&&Array.isArray(e.tags)||e.modules&&Array.isArray(e.modules))return!0;throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`)}function E(){return d.__STORYBOOK_CUSTOM_ELEMENTS__||d.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__}var{window:h,EventSource:C}=d,_;typeof module<"u"&&((_=module==null?void 0:module.hot)!=null&&_.decline)&&(module.hot.decline(),new C("__webpack_hmr").addEventListener("message",function(e){try{let{action:r}=JSON.parse(e.data);r==="built"&&h.location.reload()}catch{}}));var A="Invariant failed";function M(e,r){if(!e)throw new Error(A)}const{logger:m}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{useEffect:R,addons:L}=__STORYBOOK_MODULE_PREVIEW_API__;function w(e,r){var a,n;let t;switch(r){case"attributes":case"properties":t={name:((a=e.type)==null?void 0:a.text)||e.type};break;case"slots":t={name:"string"};break;default:t={name:"void"};break}return{name:e.name,required:!1,description:e.description,type:t,table:{category:r,type:{summary:((n=e.type)==null?void 0:n.text)||e.type},defaultValue:{summary:e.default!==void 0?e.default:e.defaultValue}}}}function I(e){let r=e.name.replace(/(-|_|:|\.|\s)+(.)?/g,(t,a,n)=>n?n.toUpperCase():"").replace(/^([A-Z])/,t=>t.toLowerCase());return r=`on${r.charAt(0).toUpperCase()+r.substr(1)}`,[{name:r,action:{name:e.name},table:{disable:!0}},w(e,"events")]}function o(e,r){return e&&e.filter(t=>t&&t.name).reduce((t,a)=>{if(a.kind==="method")return t;switch(r){case"events":I(a).forEach(n=>{M(n.name),t[n.name]=n});break;default:t[a.name]=w(a,r);break}return t},{})}var U=(e,r)=>{if(!f(e)||!O(r))return null;let t=r.tags.find(a=>a.name.toUpperCase()===e.toUpperCase());return t||m.warn(`Component not found in custom-elements.json: ${e}`),t},Y=(e,r)=>{var a;if(!f(e)||!O(r))return null;let t;return(a=r==null?void 0:r.modules)==null||a.forEach(n=>{var s;(s=n==null?void 0:n.declarations)==null||s.forEach(i=>{i.tagName===e&&(t=i)})}),t||m.warn(`Component not found in custom-elements.json: ${e}`),t},y=(e,r)=>(r==null?void 0:r.version)==="experimental"?U(e,r):Y(e,r),k=(e,r)=>{let t=y(e,r);return t&&{...o(t.members??[],"properties"),...o(t.properties??[],"properties"),...o(t.attributes??[],"attributes"),...o(t.events??[],"events"),...o(t.slots??[],"slots"),...o(t.cssProperties??[],"css custom properties"),...o(t.cssParts??[],"css shadow parts")}},B=e=>{let r=E();return k(e,r)},N=e=>{let r=y(e,E());return r&&r.description},V=/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;function K(e){var a;let r=(a=e==null?void 0:e.parameters.docs)==null?void 0:a.source,t=e==null?void 0:e.parameters.__isArgsStory;return(r==null?void 0:r.type)===u.DYNAMIC?!1:!t||(r==null?void 0:r.code)||(r==null?void 0:r.type)===u.CODE}function $(e,r){var s,i;let t=e(),a=(i=(s=r==null?void 0:r.parameters.docs)==null?void 0:s.source)!=null&&i.excludeDecorators?r.originalStoryFn(r.args,r):t,n;if(R(()=>{let{id:p,unmappedArgs:S}=r;n&&L.getChannel().emit(D,{id:p,source:n,args:S})}),!K(r)){let p=window.document.createElement("div");a instanceof DocumentFragment?l(a.cloneNode(!0),p):l(a,p),n=p.innerHTML.replace(V,"")}return t}var G=[$],W={docs:{extractArgTypes:B,extractComponentDescription:N,story:{inline:!0},source:{type:u.DYNAMIC,language:"html"}}},q=[v];export{q as argTypesEnhancers,G as decorators,W as parameters};
