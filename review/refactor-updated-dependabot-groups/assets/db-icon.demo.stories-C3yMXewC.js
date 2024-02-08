import{i as r}from"./iconset.array-bqwg5LSY.js";const l={title:"04-Data-Display/Icon",id:"db-icon",component:"db-icon",parameters:{viewMode:"docs"},argTypes:{icon:{control:{options:r,type:"select"},defaultValue:"account"},variant:{control:{options:["16-filled","20-filled","24-filled","32-filled","48-filled","64-filled","16-outline","20-outline","24-outline","32-outline","48-outline","64-outline"],type:"select"},defaultValue:"24-outline"}}},e=({icon:o,variant:n})=>`<db-icon
    ${o?"icon="+o:""}
    ${n?"variant="+n:""}></db-icon>`;var i,t,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
  icon,
  variant
}) => {
  return \`<db-icon
    \${icon ? 'icon=' + icon : ''}
    \${variant ? 'variant=' + variant : ''}></db-icon>\`;
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const s=["LiveDemo"];export{e as LiveDemo,s as __namedExportsOrder,l as default};
