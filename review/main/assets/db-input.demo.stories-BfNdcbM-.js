const y={title:"05-Data-Input/Input",id:"db-input",component:"db-input",parameters:{viewMode:"docs"},argTypes:{ariainvalid:{control:{options:["","false","grammar","spelling","true"],type:"select"},defaultValue:""},ariarequired:{control:"boolean"},autocomplete:{control:{options:["","on","off"],type:"select"},defaultValue:""},autofocus:{control:"boolean"},dirname:{control:"text"},disabled:{control:"boolean"},label:{control:"text",defaultValue:"Input"},list:{control:"text"},maxlength:{control:"number"},minlength:{control:"number"},name:{control:"text"},pattern:{control:"text"},placeholder:{control:"text"},readonly:{control:"boolean"},required:{control:"boolean"},size:{control:"number"},value:{control:"text"},labelHidden:{control:"boolean"}}},e=({ariainvalid:n,ariarequired:a,autocomplete:t,autofocus:l,dirname:o,disabled:r,label:i,list:d,maxlength:u,minlength:c,name:s,pattern:m,placeholder:p,readonly:$,required:b,size:h,value:g,labelHidden:x})=>`<db-input
        ${n?"ariainvalid="+n:""}
        ${a?"ariarequired="+a:""}
        ${t?"autocomplete="+t:""}
        ${l?"autofocus="+l:""}
        ${o?"dirname="+o:""}
        ${r?"disabled="+r:""}
        ${i?"label="+i:""}
        ${d?"list="+d:""}
        ${u?"maxlength="+u:""}
        ${c?"minlength="+c:""}
        ${s?"name="+s:""}
        ${m?"pattern="+m:""}
        ${p?"placeholder="+p:""}
        ${$?"readonly="+$:""}
        ${b?"required="+b:""}
        ${h?"size="+h:""}
        ${g?"value="+g:""}
        ${x?"label-hidden="+x:""}></db-input>`;var v,f,q;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`({
  ariainvalid,
  ariarequired,
  autocomplete,
  autofocus,
  dirname,
  disabled,
  label,
  list,
  maxlength,
  minlength,
  name,
  pattern,
  placeholder,
  readonly,
  required,
  size,
  value,
  labelHidden
}) => {
  return \`<db-input
        \${ariainvalid ? 'ariainvalid=' + ariainvalid : ''}
        \${ariarequired ? 'ariarequired=' + ariarequired : ''}
        \${autocomplete ? 'autocomplete=' + autocomplete : ''}
        \${autofocus ? 'autofocus=' + autofocus : ''}
        \${dirname ? 'dirname=' + dirname : ''}
        \${disabled ? 'disabled=' + disabled : ''}
        \${label ? 'label=' + label : ''}
        \${list ? 'list=' + list : ''}
        \${maxlength ? 'maxlength=' + maxlength : ''}
        \${minlength ? 'minlength=' + minlength : ''}
        \${name ? 'name=' + name : ''}
        \${pattern ? 'pattern=' + pattern : ''}
        \${placeholder ? 'placeholder=' + placeholder : ''}
        \${readonly ? 'readonly=' + readonly : ''}
        \${required ? 'required=' + required : ''}
        \${size ? 'size=' + size : ''}
        \${value ? 'value=' + value : ''}
        \${labelHidden ? 'label-hidden=' + labelHidden : ''}></db-input>\`;
}`,...(q=(f=e.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};const z=["LiveDemo"];export{e as LiveDemo,z as __namedExportsOrder,y as default};
