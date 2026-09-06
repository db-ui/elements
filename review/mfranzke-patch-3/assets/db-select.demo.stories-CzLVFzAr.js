const u={title:"05-Data-Input/Select",id:"db-select",component:"db-select",parameters:{viewMode:"docs"},argTypes:{ariainvalid:{control:{options:["true","false"],type:"select"}},disabled:{control:"boolean"},input_id:{control:"text"},label:{control:"text",defaultValue:"select"},multiple:{control:"boolean"},name:{control:"text"},required:{control:"boolean"},size:{control:"number"},labelHidden:{control:"boolean"}}},e=({ariainvalid:n,disabled:o,input_id:t,label:i,multiple:l,name:a,required:d,size:r,labelHidden:s})=>`<db-select
  ${n?"ariainvalid="+n:""}
  ${o?"disabled="+o:""}
  ${t?"input_id="+t:"select-randomId"}
  ${i?"label="+i:""}
  ${l?"multiple="+l:""}
  ${a?"name="+a:""}
  ${d?"required="+d:""}
  ${r?"size="+r:""}
  ${s?"label-hidden="+s:""}>
    <option selected>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </db-select>`;var p,c,b;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`({
  ariainvalid,
  disabled,
  input_id,
  label,
  multiple,
  name,
  required,
  size,
  labelHidden
}) => {
  return \`<db-select
  \${ariainvalid ? 'ariainvalid=' + ariainvalid : ''}
  \${disabled ? 'disabled=' + disabled : ''}
  \${input_id ? 'input_id=' + input_id : 'select-randomId'}
  \${label ? 'label=' + label : ''}
  \${multiple ? 'multiple=' + multiple : ''}
  \${name ? 'name=' + name : ''}
  \${required ? 'required=' + required : ''}
  \${size ? 'size=' + size : ''}
  \${labelHidden ? 'label-hidden=' + labelHidden : ''}>
    <option selected>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </db-select>\`;
}`,...(b=(c=e.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const m=["LiveDemo"];export{e as LiveDemo,m as __namedExportsOrder,u as default};
