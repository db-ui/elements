import{M as s,C as t,e as p}from"./chunk-HLWAVYOI-B0VWs4H9.js";import{j as i}from"./jsx-runtime-DCkiYzCZ.js";import{u as a}from"./index-CAWuDjBQ.js";import"./iframe-BQvglmMw.js";import"../sb-preview/runtime.js";import"./doctrine-CNNg9870.js";import"./index-DrFu-skq.js";const o='# db-chip\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property          | Attribute         | Description                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                      | Default            |\n| ----------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |\n| `disabled`        | `disabled`        | The disabled attribute can be set to keep a user from clicking on the chip.                                                                                                                                                                           | `boolean`                                                                                                                                                                                                                                                                                                                 | `false`            |\n| `icon`            | `icon`            | Attribute to add icon before chip.                                                                                                                                                                                                                    | `string`                                                                                                                                                                                                                                                                                                                  | `undefined`        |\n| `iconafter`       | `iconafter`       | Attribute to add icon after chip.                                                                                                                                                                                                                     | `string`                                                                                                                                                                                                                                                                                                                  | `undefined`        |\n| `input_id`        | `input_id`        | The input_id of a label form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a label element. | `string`                                                                                                                                                                                                                                                                                                                  | `\'chip-\' + uuid()` |\n| `interactiontype` | `interactiontype` | Decides which interactiontype you want to use: filter (1-n); selection (1);                                                                                                                                                                           | `"filter" \\| "selection"`                                                                                                                                                                                                                                                                                                 | `\'selection\'`      |\n| `name`            | `name`            | Name to group multiple chips.                                                                                                                                                                                                                         | `string`                                                                                                                                                                                                                                                                                                                  | `\'chips\'`          |\n| `selected`        | `selected`        | Selected state                                                                                                                                                                                                                                        | `boolean`                                                                                                                                                                                                                                                                                                                 | `false`            |\n| `variant`         | `variant`         | Predefined variants to change background color and font color.                                                                                                                                                                                        | `"error" \\| "informative" \\| "light" \\| "poi-db-services-einrichtung" \\| "poi-dienstleistungen" \\| "poi-einkaufen" \\| "poi-essen-trinken" \\| "poi-freizeit" \\| "poi-gesundheit" \\| "poi-kunst-kultur" \\| "poi-wegeleitung" \\| "poi-wissenswertes" \\| "poi-zivile-rel-einrichtungen" \\| "success" \\| "track" \\| "warning"` | `undefined`        |\n\n\n## Dependencies\n\n### Depends on\n\n- [db-icon](../db-icon)\n\n### Graph\n```mermaid\ngraph TD;\n  db-chip --> db-icon\n  style db-chip fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n';function r(n){const e=Object.assign({p:"p"},a(),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"04-Data-Display/Chip/Intro"}),`
`,i.jsx("db-headline",{variant:"1",children:"<db-chip>"}),`
`,i.jsx("db-headline",{children:"Filter Chips"}),`
`,i.jsxs(t,{mdxSource:'<db-chip interactiontype="filter">{"default"}</db-chip><db-chip interactiontype="filter" variant="light">{"light"}</db-chip><db-chip interactiontype="filter" variant="informative"><p>{"informative"}</p></db-chip><db-chip interactiontype="filter" variant="success"><p>{"success"}</p></db-chip><db-chip interactiontype="filter" variant="poi-essen-trinken"><p>{"poi-essen-trinken"}</p></db-chip><db-chip interactiontype="filter" variant="poi-einkaufen" selected><p>{"poi-einkaufen"}</p></db-chip><db-chip interactiontype="filter" variant="track"><p>{"track"}</p></db-chip>',children:[i.jsx("db-chip",{interactiontype:"filter",children:"default"}),i.jsx("db-chip",{interactiontype:"filter",variant:"light",children:"light"}),i.jsx("db-chip",{interactiontype:"filter",variant:"informative",children:i.jsx(e.p,{children:"informative"})}),i.jsx("db-chip",{interactiontype:"filter",variant:"success",children:i.jsx(e.p,{children:"success"})}),i.jsx("db-chip",{interactiontype:"filter",variant:"poi-essen-trinken",children:i.jsx(e.p,{children:"poi-essen-trinken"})}),i.jsx("db-chip",{interactiontype:"filter",variant:"poi-einkaufen",selected:!0,children:i.jsx(e.p,{children:"poi-einkaufen"})}),i.jsx("db-chip",{interactiontype:"filter",variant:"track",children:i.jsx(e.p,{children:"track"})})]}),`
`,i.jsx("db-headline",{children:"Selection Chips"}),`
`,i.jsxs(t,{mdxSource:'<db-chip>{"default"}</db-chip><db-chip variant="light">{"light"}</db-chip><db-chip variant="informative">{"informative"}</db-chip><db-chip variant="success">{"success"}</db-chip><db-chip variant="poi-essen-trinken" selected>{"poi-essen-trinken"}</db-chip><db-chip variant="poi-einkaufen">{"poi-einkaufen"}</db-chip><db-chip variant="track">{"track"}</db-chip>',children:[i.jsx("db-chip",{children:"default"}),i.jsx("db-chip",{variant:"light",children:"light"}),i.jsx("db-chip",{variant:"informative",children:"informative"}),i.jsx("db-chip",{variant:"success",children:"success"}),i.jsx("db-chip",{variant:"poi-essen-trinken",selected:!0,children:"poi-essen-trinken"}),i.jsx("db-chip",{variant:"poi-einkaufen",children:"poi-einkaufen"}),i.jsx("db-chip",{variant:"track",children:"track"})]}),`
`,i.jsx("db-headline",{children:"Chips with icons"}),`
`,i.jsxs(t,{mdxSource:'<db-chip interactiontype="filter" icon="account">{"icon"}</db-chip><db-chip interactiontype="filter" iconafter="account">{"iconafter"}</db-chip><db-chip interactiontype="filter" icon="account" iconafter="account"><p>{"icon + iconafter"}</p></db-chip>',children:[i.jsx("db-chip",{interactiontype:"filter",icon:"account",children:"icon"}),i.jsx("db-chip",{interactiontype:"filter",iconafter:"account",children:"iconafter"}),i.jsx("db-chip",{interactiontype:"filter",icon:"account",iconafter:"account",children:i.jsx(e.p,{children:"icon + iconafter"})})]}),`
`,i.jsx("db-headline",{children:"Chips disabled"}),`
`,i.jsxs(t,{mdxSource:'<db-chip interactiontype="filter">{"default"}</db-chip><db-chip interactiontype="filter" variant="informative" disabled><p>{"informative"}</p></db-chip><db-chip interactiontype="filter" variant="success"><p>{"success"}</p></db-chip>',children:[i.jsx("db-chip",{interactiontype:"filter",children:"default"}),i.jsx("db-chip",{interactiontype:"filter",variant:"informative",disabled:!0,children:i.jsx(e.p,{children:"informative"})}),i.jsx("db-chip",{interactiontype:"filter",variant:"success",children:i.jsx(e.p,{children:"success"})})]}),`
`,i.jsx(p,{children:o})]})}function d(n={}){const{wrapper:e}=Object.assign({},a(),n.components);return e?i.jsx(e,{...n,children:i.jsx(r,{...n})}):r(n)}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const c={title:"04-Data-Display/Chip/Intro",tags:["stories-mdx"],includeStories:["__page"]};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:d};const j=["__page"];export{j as __namedExportsOrder,h as __page,c as default};
