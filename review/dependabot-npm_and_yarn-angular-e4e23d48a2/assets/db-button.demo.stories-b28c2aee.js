import{i as e}from"./iconset.array-97181fd2.js";e.unshift("");const h={title:"03-Action/Button",id:"db-button",component:"db-button",parameters:{viewMode:"docs"},argTypes:{text:{control:"text",defaultValue:"Button",name:"example text"},variant:{control:{options:["brand-primary","primary","secondary-outline","secondary-solid","tertiary-plain"],type:"select"},defaultValue:"primary"},ariaexpanded:{control:{options:["","true","false"],type:"select"}},ariapressed:{control:{options:["","true","false"],type:"select"}},disabled:{control:"boolean"},formaction:{control:"text"},formenctype:{control:"text",defaultValue:""},formmethod:{control:{options:["","get","post"],type:"select"}},formnovalidate:{control:"boolean"},formtarget:{control:{options:["","_self","_blank","_parent","_top"],type:"select"}},icon:{control:{options:e,type:"select"},defaultValue:""},iconafter:{control:{options:e,type:"select"},defaultValue:""},icononly:{control:"boolean"},name:{control:"text",defaultValue:""},tooltip:{control:"text",defaultValue:""},type:{control:{options:["button","reset","submit"],type:"select"}},value:{control:"text",defaultValue:""}}},t=({ariaexpanded:o,ariapressed:n,disabled:a,formaction:r,formenctype:l,formmethod:v,formnovalidate:i,formtarget:c,icon:d,iconafter:s,icononly:p,name:m,text:x,tooltip:f,type:g,value:u,variant:V})=>`<db-button
    ${o?"ariaexpanded="+o:""}
    ${n?"ariapressed="+n:""}
    ${a?"disabled="+a:""}
    ${r?"formaction="+r:""}
    ${l?"formenctype="+l:""}
    formmethod=${v}
    ${i?"formnovalidate="+i:""}
    ${c?"formtarget="+c:""}
    ${d?"icon="+d:""}
    ${s?"iconafter="+s:""}
    ${p?"icononly="+p:""}
    ${m?"name="+m:""}
    type=${g}
    ${f?"tooltip="+f:""}
    ${u?"value="+u:""}
    variant=${V}>${x}</db-button>`;var $,y,b;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`({
  ariaexpanded,
  ariapressed,
  disabled,
  formaction,
  formenctype,
  formmethod,
  formnovalidate,
  formtarget,
  icon,
  iconafter,
  icononly,
  name,
  text,
  tooltip,
  type,
  value,
  variant
}) => {
  return \`<db-button
    \${ariaexpanded ? 'ariaexpanded=' + ariaexpanded : ''}
    \${ariapressed ? 'ariapressed=' + ariapressed : ''}
    \${disabled ? 'disabled=' + disabled : ''}
    \${formaction ? 'formaction=' + formaction : ''}
    \${formenctype ? 'formenctype=' + formenctype : ''}
    formmethod=\${formmethod}
    \${formnovalidate ? 'formnovalidate=' + formnovalidate : ''}
    \${formtarget ? 'formtarget=' + formtarget : ''}
    \${icon ? 'icon=' + icon : ''}
    \${iconafter ? 'iconafter=' + iconafter : ''}
    \${icononly ? 'icononly=' + icononly : ''}
    \${name ? 'name=' + name : ''}
    type=\${type}
    \${tooltip ? 'tooltip=' + tooltip : ''}
    \${value ? 'value=' + value : ''}
    variant=\${variant}>\${text}</db-button>\`;
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const B=["LiveDemo"];export{t as LiveDemo,B as __namedExportsOrder,h as default};
