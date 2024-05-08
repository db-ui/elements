import{M as s,C as t,e as r}from"./chunk-HLWAVYOI-uBFMaKF5.js";import{j as n}from"./jsx-runtime-CGMWWs6g.js";import{u as a}from"./index-CH-8LGKR.js";import"./iframe-BAJC805g.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const d=`# db-icon



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description                                                    | Type                                                                                                                                                                                     | Default     |
| ------------------- | --------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| \`icon\` _(required)_ | \`icon\`    | The icon attribute specifies the icon to use.                  | \`string\`                                                                                                                                                                                 | \`undefined\` |
| \`variant\`           | \`variant\` | The variant attribute specifies the style and size of an icon. | \`"16-filled" \\| "16-outline" \\| "20-filled" \\| "20-outline" \\| "24-filled" \\| "24-outline" \\| "32-filled" \\| "32-outline" \\| "48-filled" \\| "48-outline" \\| "64-filled" \\| "64-outline"\` | \`undefined\` |


## Dependencies

### Used by

 - [db-button](../db-button)
 - [db-chip](../db-chip)
 - [db-link](../db-link)
 - [db-table](../db-table)
 - [db-tag](../db-tag)

### Graph
\`\`\`mermaid
graph TD;
  db-button --> db-icon
  db-chip --> db-icon
  db-link --> db-icon
  db-table --> db-icon
  db-tag --> db-icon
  style db-icon fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function c(i){const e=Object.assign({p:"p",code:"code"},a(),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"04-Data-Display/Icon/Intro"}),`
`,n.jsx("db-headline",{variant:"1",children:"<db-icon>"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"<db-icon></db-icon>"})," is based on the design language of Deutsche Bahn. You can try out on ",n.jsx("a",{href:"/story/db-icon--live-demo",children:"Icon Live Demo"})," Page."]}),`
`,n.jsx(t,{mdxSource:'<db-icon icon="account" />',children:n.jsx("db-icon",{icon:"account"})}),`
`,n.jsx("db-headline",{variant:"2",children:"icon"}),`
`,n.jsxs(e.p,{children:["The icon attribute is to select the icon. To see all Icons visit ",n.jsx("a",{href:"https://db-ui.github.io/core/?p=viewall-base-icons",target:"_blank",children:"DB UI Core icons overview"})," page."]}),`
`,n.jsxs(t,{mdxSource:'<db-icon icon="account" /><db-icon icon="edit" /><db-icon icon="zoom-out" />',children:[n.jsx("db-icon",{icon:"account"}),n.jsx("db-icon",{icon:"edit"}),n.jsx("db-icon",{icon:"zoom-out"})]}),`
`,n.jsx("db-headline",{variant:"2",children:"variant"}),`
`,n.jsx(e.p,{children:"The variant attribute specifies the size and style of an icon."}),`
`,n.jsxs(e.p,{children:["Please be aware that our icons aren't available in all variants (size and type) that we provide for configuration. In case you're missing an icon especially within any size bigger than ",n.jsx(e.code,{children:"20"}),", please configure a lower size and set the icon-font-size via CSS Custom Property ",n.jsx(e.code,{children:"--icon-font-size-before"})," on the ",n.jsx(e.code,{children:"db-icon"})," element."]}),`
`,n.jsxs(t,{mdxSource:'<db-icon icon="account" variant="20-outline" /><db-icon icon="account" variant="24-outline" /><db-icon icon="account" variant="32-outline" /><db-icon icon="account" variant="48-outline" /><db-icon icon="account" variant="64-outline" />',children:[n.jsx("db-icon",{icon:"account",variant:"20-outline"}),n.jsx("db-icon",{icon:"account",variant:"24-outline"}),n.jsx("db-icon",{icon:"account",variant:"32-outline"}),n.jsx("db-icon",{icon:"account",variant:"48-outline"}),n.jsx("db-icon",{icon:"account",variant:"64-outline"})]}),`
`,n.jsx(r,{children:d})]})}function l(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?n.jsx(e,{...i,children:n.jsx(c,{...i})}):c(i)}const u=()=>{throw new Error("Docs-only story")};u.parameters={docsOnly:!0};const o={title:"04-Data-Display/Icon/Intro",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:l};const v=["__page"];export{v as __namedExportsOrder,u as __page,o as default};
