import{M as l,C as i,e as r}from"./chunk-HLWAVYOI-DPXDk26f.js";import{j as e}from"./jsx-runtime-C3g2Abpk.js";import{u as s}from"./index-B-86jXk8.js";import"./iframe-D7KLBfwv.js";import"../sb-preview/runtime.js";import"./index-BZSUm5_z.js";import"./index-DrFu-skq.js";const h=`# db-headline



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                                      | Type                                     | Default |
| --------- | --------- | -------------------------------------------------------------------------------- | ---------------------------------------- | ------- |
| \`pulse\`   | \`pulse\`   | The pulse attribute determines whether to add a visual DB Pulse to the headline. | \`boolean\`                                | \`false\` |
| \`variant\` | \`variant\` | The variant attribute specifies the size of the headline.                        | \`"1" \\| "2" \\| "3" \\| "4" \\| "5" \\| "6"\` | \`'3'\`   |


## Dependencies

### Used by

 - [db-card](../db-card)

### Graph
\`\`\`mermaid
graph TD;
  db-card --> db-headline
  style db-headline fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"04-Data-Display/Headline/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-headline>"}),`
`,e.jsxs(i,{mdxSource:'<db-headline variant="1">{"Headline 1"}</db-headline><db-headline variant="2">{"Headline 2"}</db-headline><db-headline>{"Headline 3"}</db-headline><db-headline variant="4">{"Headline 4"}</db-headline><db-headline variant="5">{"Headline 5"}</db-headline><db-headline variant="6">{"Headline 6"}</db-headline>',children:[e.jsx("db-headline",{variant:"1",children:"Headline 1"}),e.jsx("db-headline",{variant:"2",children:"Headline 2"}),e.jsx("db-headline",{children:"Headline 3"}),e.jsx("db-headline",{variant:"4",children:"Headline 4"}),e.jsx("db-headline",{variant:"5",children:"Headline 5"}),e.jsx("db-headline",{variant:"6",children:"Headline 6"})]}),`
`,e.jsx("db-headline",{variant:"2",children:"With pulse"}),`
`,e.jsxs(i,{mdxSource:'<db-headline variant="1" pulse>{"Headline 1"}</db-headline><db-headline variant="2" pulse>{"Headline 2"}</db-headline><db-headline pulse>{"Headline 3"}</db-headline><db-headline variant="4" pulse>{"Headline 4"}</db-headline>',children:[e.jsx("db-headline",{variant:"1",pulse:!0,children:"Headline 1"}),e.jsx("db-headline",{variant:"2",pulse:!0,children:"Headline 2"}),e.jsx("db-headline",{pulse:!0,children:"Headline 3"}),e.jsx("db-headline",{variant:"4",pulse:!0,children:"Headline 4"})]}),`
`,e.jsx(r,{children:h})]})}function o(n={}){const{wrapper:d}=Object.assign({},s(),n.components);return d?e.jsx(d,{...n,children:e.jsx(t,{...n})}):t()}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const a={title:"04-Data-Display/Headline/Intro",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:o};const H=["__page"];export{H as __namedExportsOrder,p as __page,a as default};
