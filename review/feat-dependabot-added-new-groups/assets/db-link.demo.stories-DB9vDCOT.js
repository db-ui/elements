import{i as d}from"./iconset.array-BkihUYr1.js";d.unshift("");const h={title:"02-Navigation/Link",id:"db-link",component:"db-link",parameters:{viewMode:"docs"},argTypes:{text:{control:"text",defaultValue:"link",name:"example text"},href:{control:"text"},hreflang:{control:"text"},icon:{control:{options:d,type:"select"},defaultValue:""},media:{control:"text"},rel:{control:{options:["alternate","appendix","author","bookmark","chapter","contents","copyright","glossary","help","index","license","next","nofollow","noopener","noreferrer","prefetch","prev","search","section","start","search","subsection","tag"],type:"select"},defaultValue:""},target:{control:{options:["_blank","_self","_parent","_top"],type:"select"},defaultValue:""},type:{control:"text"}}},e=({text:f,href:t,hreflang:n,icon:r,media:o,rel:a,target:l,type:i})=>`<db-link
    ${t?"href="+t:""}
    ${n?"hreflang="+n:""}
    ${r?"icon="+r:""}
    ${o?"media="+o:""}
    ${a?"rel="+a:""}
    ${l?"target="+l:""}
    ${i?"type="+i:""}>${f}</db-link>`;var s,c,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  text,
  href,
  hreflang,
  icon,
  media,
  rel,
  target,
  type
}) => {
  return \`<db-link
    \${href ? 'href=' + href : ''}
    \${hreflang ? 'hreflang=' + hreflang : ''}
    \${icon ? 'icon=' + icon : ''}
    \${media ? 'media=' + media : ''}
    \${rel ? 'rel=' + rel : ''}
    \${target ? 'target=' + target : ''}
    \${type ? 'type=' + type : ''}>\${text}</db-link>\`;
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const u=["LiveDemo"];export{e as LiveDemo,u as __namedExportsOrder,h as default};
