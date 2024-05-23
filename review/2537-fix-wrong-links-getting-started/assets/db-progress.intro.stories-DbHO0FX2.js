import{M as o,C as t,e as d}from"./chunk-HLWAVYOI-avGZAaUI.js";import{j as e}from"./jsx-runtime-CyuL-gil.js";import{u as i}from"./index-D0m2tH18.js";import"./iframe-DiKNx8Gp.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const c="# db-progress\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property         | Attribute        | Description                                        | Type      | Default                |\n| ---------------- | ---------------- | -------------------------------------------------- | --------- | ---------------------- |\n| `circle`         | `circle`         | As a circle                                        | `boolean` | `undefined`            |\n| `htmlid`         | `htmlid`         | Optional id - otherwise random id will be provided | `string`  | `'progress-' + uuid()` |\n| `indeterminate`  | `indeterminate`  | Indeterminate                                      | `boolean` | `false`                |\n| `max`            | `max`            | The currentValue of the progress indicator.        | `number`  | `undefined`            |\n| `percentagesign` | `percentagesign` | The percentage sign - default %.                   | `string`  | `'%'`                  |\n| `value`          | `value`          | The currentValue of the progress indicator.        | `number`  | `undefined`            |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n";function a(n){const r=Object.assign({code:"code"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"06-Feedback/Progress/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-progress>"}),`
`,e.jsxs("db-headline",{variant:"2",children:["The default ",e.jsx(r.code,{children:"<db-progress></db-progress>"})," with value and max."]}),`
`,e.jsx(t,{mdxSource:'<db-progress value="60" max="100" />',children:e.jsx("db-progress",{value:"60",max:"100"})}),`
`,e.jsx("db-headline",{children:"As circle"}),`
`,e.jsx(t,{mdxSource:'<db-progress value="60" max="100" circle="true" />',children:e.jsx("db-progress",{value:"60",max:"100",circle:"true"})}),`
`,e.jsx("db-headline",{children:"Indeterminate"}),`
`,e.jsx(t,{mdxSource:'<db-progress indeterminate="true" />',children:e.jsx("db-progress",{indeterminate:"true"})}),`
`,e.jsx("db-headline",{children:"Different percentage sign"}),`
`,e.jsx(t,{mdxSource:'<db-progress value="60" max="100" percentagesign=" \\u2764\\uFE0F" />',children:e.jsx("db-progress",{value:"60",max:"100",percentagesign:" ❤️"})}),`
`,e.jsx(d,{children:c})]})}function l(n={}){const{wrapper:r}=Object.assign({},i(),n.components);return r?e.jsx(r,{...n,children:e.jsx(a,{...n})}):a(n)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const s={title:"06-Feedback/Progress/Intro",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:l};const f=["__page"];export{f as __namedExportsOrder,m as __page,s as default};
