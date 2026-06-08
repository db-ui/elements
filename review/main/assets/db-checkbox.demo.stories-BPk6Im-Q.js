const i={title:"05-Data-Input/Checkbox",id:"db-checkbox",component:"db-checkbox",parameters:{viewMode:"docs"},argTypes:{autofocus:{control:"boolean"},checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text",defaultValue:"Checkbox"},name:{control:"text"},required:{control:"boolean"},value:{control:"text"},labelHidden:{control:"boolean"}}},e=({autofocus:o,checked:a,disabled:n,label:c,name:d,required:l,value:r,labelHidden:t})=>`<db-checkbox
    ${o?"autofocus="+o:""}
    ${a?"checked="+a:""}
    ${n?"disabled="+n:""}
    ${c?"label="+c:""}
    ${d?"name="+d:""}
    ${l?"required="+l:""}
    ${r?"value="+r:""}
    ${t?"label-hidden="+t:""}></db-checkbox>`;var b,s,u;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`({
  autofocus,
  checked,
  disabled,
  label,
  name,
  required,
  value,
  labelHidden
}) => {
  return \`<db-checkbox
    \${autofocus ? 'autofocus=' + autofocus : ''}
    \${checked ? 'checked=' + checked : ''}
    \${disabled ? 'disabled=' + disabled : ''}
    \${label ? 'label=' + label : ''}
    \${name ? 'name=' + name : ''}
    \${required ? 'required=' + required : ''}
    \${value ? 'value=' + value : ''}
    \${labelHidden ? 'label-hidden=' + labelHidden : ''}></db-checkbox>\`;
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const h=["LiveDemo"];export{e as LiveDemo,h as __namedExportsOrder,i as default};
