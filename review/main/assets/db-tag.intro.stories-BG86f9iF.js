import{M as s,C as i,e as d}from"./chunk-HLWAVYOI-BaA1M1hb.js";import{j as n}from"./jsx-runtime-BdcwAWtK.js";import{u as o}from"./index-BCk5NHTx.js";import"./iframe-DufaNlGy.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const c='# db-tag\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property    | Attribute   | Description                                                    | Type                                                                                                                                                                                                                                                                                                                      | Default     |\n| ----------- | ----------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `icon`      | `icon`      | Attribute to add icon before tag.                              | `string`                                                                                                                                                                                                                                                                                                                  | `undefined` |\n| `iconafter` | `iconafter` | Attribute to add icon after tag.                               | `string`                                                                                                                                                                                                                                                                                                                  | `undefined` |\n| `small`     | `small`     | Attribute for changing the size of the tag.                    | `boolean`                                                                                                                                                                                                                                                                                                                 | `undefined` |\n| `variant`   | `variant`   | Predefined variants to change background color and font color. | `"error" \\| "informative" \\| "light" \\| "poi-db-services-einrichtung" \\| "poi-dienstleistungen" \\| "poi-einkaufen" \\| "poi-essen-trinken" \\| "poi-freizeit" \\| "poi-gesundheit" \\| "poi-kunst-kultur" \\| "poi-wegeleitung" \\| "poi-wissenswertes" \\| "poi-zivile-rel-einrichtungen" \\| "success" \\| "track" \\| "warning"` | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [db-icon](../db-icon)\n\n### Graph\n```mermaid\ngraph TD;\n  db-tag --> db-icon\n  style db-tag fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n';function r(e){const t=Object.assign({p:"p",code:"code"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"04-Data-Display/Tag/Intro"}),`
`,n.jsx("db-headline",{variant:"1",children:"<db-tag>"}),`
`,n.jsx("db-headline",{children:"Tag with variants"}),`
`,n.jsxs(t.p,{children:["The default ",n.jsx(t.code,{children:"<db-tag></db-tag>"})," without any values will render a black tag you can change the color with some predefined variants."]}),`
`,n.jsxs(i,{mdxSource:'<db-tag>{"default"}</db-tag><db-tag variant="light">{"light"}</db-tag><db-tag variant="informative">{"informative"}</db-tag><db-tag variant="success">{"success"}</db-tag><db-tag variant="poi-essen-trinken">{"poi-essen-trinken"}</db-tag><db-tag variant="poi-einkaufen">{"poi-einkaufen"}</db-tag><db-tag variant="track">{"track"}</db-tag>',children:[n.jsx("db-tag",{children:"default"}),n.jsx("db-tag",{variant:"light",children:"light"}),n.jsx("db-tag",{variant:"informative",children:"informative"}),n.jsx("db-tag",{variant:"success",children:"success"}),n.jsx("db-tag",{variant:"poi-essen-trinken",children:"poi-essen-trinken"}),n.jsx("db-tag",{variant:"poi-einkaufen",children:"poi-einkaufen"}),n.jsx("db-tag",{variant:"track",children:"track"})]}),`
`,n.jsx("db-headline",{children:"Small Tags"}),`
`,n.jsxs(i,{mdxSource:'<db-tag>{"Regular sized (Default)"}</db-tag><db-tag small>{"Small"}</db-tag>',children:[n.jsx("db-tag",{children:"Regular sized (Default)"}),n.jsx("db-tag",{small:!0,children:"Small"})]}),`
`,n.jsx("db-headline",{children:"Icon Tags"}),`
`,n.jsxs(i,{mdxSource:'<db-tag icon="account">{"icon"}</db-tag><db-tag iconafter="account">{"iconafter"}</db-tag><db-tag icon="account" iconafter="account"><p>{"icon + iconafter"}</p></db-tag>',children:[n.jsx("db-tag",{icon:"account",children:"icon"}),n.jsx("db-tag",{iconafter:"account",children:"iconafter"}),n.jsx("db-tag",{icon:"account",iconafter:"account",children:n.jsx(t.p,{children:"icon + iconafter"})})]}),`
`,n.jsx(d,{children:c})]})}function l(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}const g=()=>{throw new Error("Docs-only story")};g.parameters={docsOnly:!0};const a={title:"04-Data-Display/Tag/Intro",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:l};const j=["__page"];export{j as __namedExportsOrder,g as __page,a as default};