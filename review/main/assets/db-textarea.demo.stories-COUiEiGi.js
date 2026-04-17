const _={title:"05-Data-Input/Textarea",id:"db-textarea",component:"db-textarea",parameters:{viewMode:"docs"},argTypes:{ariainvalid:{control:{options:["","false","grammar","spelling","true"],type:"select"},defaultValue:""},ariarequired:{control:"boolean"},autofocus:{control:"boolean"},cols:{control:"number"},dirname:{control:"text"},disabled:{control:"boolean"},input_id:{control:"text"},label:{control:"text",defaultValue:"Textarea"},maxlength:{control:"number"},minlength:{control:"number"},name:{control:"text"},placeholder:{control:"text"},readonly:{control:"boolean"},required:{control:"boolean"},rows:{control:"number"},wrap:{control:{options:["","soft","hard","off"],type:"select"},defaultValue:""},labelHidden:{control:"boolean"}}},e=({ariainvalid:a,ariarequired:n,autofocus:o,cols:r,dirname:t,disabled:l,input_id:d,label:i,maxlength:c,minlength:s,name:u,placeholder:m,readonly:p,required:$,rows:b,wrap:x,labelHidden:h})=>`<db-textarea
        ${a?"autocomplete="+a:""}
        ${n?"autocomplete="+n:""}
        ${o?"autofocus="+o:""}
        ${r?"cols="+r:""}
        ${t?"dirname="+t:""}
        ${l?"disabled="+l:""}
        ${d?"input_id="+d:""}
        ${i?"label="+i:""}
        ${c?"maxlength="+c:""}
        ${s?"minlength="+s:""}
        ${u?"name="+u:""}
        ${m?"placeholder="+m:""}
        ${p?"readonly="+p:""}
        ${$?"required="+$:""}
        ${b?"rows="+b:""}
        ${x?"wrap="+x:""}
        ${h?"label-hidden="+h:""}></db-textarea>`;var g,f,w;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`({
  ariainvalid,
  ariarequired,
  autofocus,
  cols,
  dirname,
  disabled,
  input_id,
  label,
  maxlength,
  minlength,
  name,
  placeholder,
  readonly,
  required,
  rows,
  wrap,
  labelHidden
}) => {
  return \`<db-textarea
        \${ariainvalid ? 'autocomplete=' + ariainvalid : ''}
        \${ariarequired ? 'autocomplete=' + ariarequired : ''}
        \${autofocus ? 'autofocus=' + autofocus : ''}
        \${cols ? 'cols=' + cols : ''}
        \${dirname ? 'dirname=' + dirname : ''}
        \${disabled ? 'disabled=' + disabled : ''}
        \${input_id ? 'input_id=' + input_id : ''}
        \${label ? 'label=' + label : ''}
        \${maxlength ? 'maxlength=' + maxlength : ''}
        \${minlength ? 'minlength=' + minlength : ''}
        \${name ? 'name=' + name : ''}
        \${placeholder ? 'placeholder=' + placeholder : ''}
        \${readonly ? 'readonly=' + readonly : ''}
        \${required ? 'required=' + required : ''}
        \${rows ? 'rows=' + rows : ''}
        \${wrap ? 'wrap=' + wrap : ''}
        \${labelHidden ? 'label-hidden=' + labelHidden : ''}></db-textarea>\`;
}`,...(w=(f=e.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const q=["LiveDemo"];export{e as LiveDemo,q as __namedExportsOrder,_ as default};
