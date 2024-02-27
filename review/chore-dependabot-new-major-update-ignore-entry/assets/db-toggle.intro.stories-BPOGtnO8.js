import{M as l,C as d,e as s}from"./chunk-HLWAVYOI-Kpe2NMHl.js";import{j as e}from"./jsx-runtime-S-L_QGKT.js";import{u as r}from"./index-C8JDYVZV.js";import"./iframe-CcEmGbpZ.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const c="# db-toggle\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property   | Attribute  | Description                                                         | Type      | Default              |\n| ---------- | ---------- | ------------------------------------------------------------------- | --------- | -------------------- |\n| `checked`  | `checked`  | Checked property                                                    | `boolean` | `undefined`          |\n| `disabled` | `disabled` | Disabled property                                                   | `boolean` | `undefined`          |\n| `htmlid`   | `htmlid`   | Optional id for the label - otherwise random id will be set         | `string`  | `'toggle-' + uuid()` |\n| `name`     | `name`     | The name attribute specifies a name for the included input element. | `string`  | `undefined`          |\n\n\n## Events\n\n| Event      | Description                      | Type               |\n| ---------- | -------------------------------- | ------------------ |\n| `dbChange` | Mapping for default change Event | `CustomEvent<any>` |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n";function i(t){const n=Object.assign({code:"code",p:"p"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"03-Action/Toggle/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-toggle>"}),`
`,e.jsx("db-headline",{children:"The toggle component without a text. "}),`
`,e.jsx(d,{mdxSource:"<db-toggle />",children:e.jsx("db-toggle",{})}),`
`,e.jsx(d,{mdxSource:'<db-toggle Name="unique-name">{"Toggle with a unique "}<code>{"name"}</code>{"-attribute"}</db-toggle>',children:e.jsxs("db-toggle",{Name:"unique-name",children:["Toggle with a unique ",e.jsx(n.code,{children:"name"}),"-attribute"]})}),`
`,e.jsx("db-headline",{children:"The toggle component with text. "}),`
`,e.jsx(d,{mdxSource:'<db-toggle htmlid="meineId1" disabled><p>{"Disabled toggle"}</p></db-toggle>',children:e.jsx("db-toggle",{htmlid:"meineId1",disabled:!0,children:e.jsx(n.p,{children:"Disabled toggle"})})}),`
`,e.jsx(d,{mdxSource:'<db-toggle htmlid="meineId2" checked><p>{"Pre checked toggle"}</p></db-toggle>',children:e.jsx("db-toggle",{htmlid:"meineId2",checked:!0,children:e.jsx(n.p,{children:"Pre checked toggle"})})}),`
`,e.jsx(d,{mdxSource:'<db-toggle htmlid="meineId3" checked disabled><p>{"Pre checked disabled toggle"}</p></db-toggle>',children:e.jsx("db-toggle",{htmlid:"meineId3",checked:!0,disabled:!0,children:e.jsx(n.p,{children:"Pre checked disabled toggle"})})}),`
`,e.jsx(s,{children:c})]})}function a(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}const g=()=>{throw new Error("Docs-only story")};g.parameters={docsOnly:!0};const o={title:"03-Action/Toggle/Intro",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:a};const f=["__page"];export{f as __namedExportsOrder,g as __page,o as default};
