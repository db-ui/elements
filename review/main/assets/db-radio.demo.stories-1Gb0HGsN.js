const b={title:"05-Data-Input/Radio",id:"db-radio",component:"db-radio",parameters:{viewMode:"docs"},argTypes:{autofocus:{control:"boolean"},checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text",defaultValue:"Radio"},name:{control:"text"},required:{control:"boolean"},value:{control:"text"},labelHidden:{control:"boolean"}}},e=({autofocus:o,checked:a,disabled:d,label:n,name:l,required:r,value:t,labelHidden:c})=>`<db-radio
      ${o?"autofocus="+o:""}
      ${a?"checked="+a:""}
      ${d?"disabled="+d:""}
      ${n?"label="+n:""}
      ${l?"name="+l:""}
      ${r?"required="+r:""}
      ${t?"value="+t:""}
      ${c?"label-hidden="+c:""}></db-radio>`;var i,s,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
  autofocus,
  checked,
  disabled,
  label,
  name,
  required,
  value,
  labelHidden
}) => {
  return \`<db-radio
      \${autofocus ? 'autofocus=' + autofocus : ''}
      \${checked ? 'checked=' + checked : ''}
      \${disabled ? 'disabled=' + disabled : ''}
      \${label ? 'label=' + label : ''}
      \${name ? 'name=' + name : ''}
      \${required ? 'required=' + required : ''}
      \${value ? 'value=' + value : ''}
      \${labelHidden ? 'label-hidden=' + labelHidden : ''}></db-radio>\`;
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const $=["LiveDemo"];export{e as LiveDemo,$ as __namedExportsOrder,b as default};
