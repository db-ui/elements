import{M as d,C as a,e as l}from"./chunk-HLWAVYOI-DybMae0A.js";import{a as c}from"./mockData-CeVrjjfO.js";import{j as e}from"./jsx-runtime-BrXcLUb_.js";import{u as s}from"./index-BnBmW72g.js";import"./iframe-CWojUjqW.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const h=`# db-language-switcher



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                   | Type     | Default     |
| ------------------- | --------------------- | ----------------------------------------------------------------------------- | -------- | ----------- |
| \`ariaSelectedIndex\` | \`aria-selected-index\` | The aria-selected-index shows the link as selected which has the given index. | \`number\` | \`undefined\` |
| \`data\`              | \`data\`                | The data attribute can be used to generate linklist by data.                  | \`string\` | \`undefined\` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function r(t){const n=Object.assign({p:"p",code:"code",pre:"pre"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"07-Utility/Language Switcher/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-language-switcher>"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<db-language-switcher></db-language-switcher>"})," element represents list with languages."]}),`
`,e.jsx(n.p,{children:"There are three options to use <db-language-switcher>:"}),`
`,e.jsxs("db-headline",{children:["Language Switcher with custom ",e.jsx(n.code,{children:"li"})," wrapper"]}),`
`,e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Maybe you need this option to use framework specific listeners."})})}),`
`,e.jsx(a,{mdxSource:'<db-language-switcher aria-selected-index="1"><li><db-link href="#">{"EN"}</db-link></li><li><a href="#">{"DE"}</a></li></db-language-switcher>',children:e.jsxs("db-language-switcher",{"aria-selected-index":"1",children:[e.jsx("li",{children:e.jsx("db-link",{href:"#",children:"EN"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"DE"})})]})}),`
`,e.jsx("db-headline",{children:"Language Switcher with <db-link>"}),`
`,e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Use with caution, you won't have reactivity on changed HTML after the initial load."})})}),`
`,e.jsx(a,{mdxSource:'<db-language-switcher aria-selected-index="1"><db-link title="English language" href="#"><p>{"EN"}</p></db-link><db-link title="Deutsche Sprache" href="#"><p>{"DE"}</p></db-link></db-language-switcher>',children:e.jsxs("db-language-switcher",{"aria-selected-index":"1",children:[e.jsx("db-link",{title:"English language",href:"#",children:e.jsx(n.p,{children:"EN"})}),e.jsx("db-link",{title:"Deutsche Sprache",href:"#",children:e.jsx(n.p,{children:"DE"})})]})}),`
`,e.jsx("db-headline",{children:"Linklist with data"}),`
`,e.jsx(a,{mdxSource:'<db-language-switcher aria-selected-index="1" data={mockDataLanguages()} />',children:e.jsx("db-language-switcher",{"aria-selected-index":"1",data:c()})}),`
`,e.jsxs(n.p,{children:["The data should be an object passed in with ",e.jsx(n.code,{children:"JSON.stringify()"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export type DbLinkType = {
  href: string;
  title: string;
  label: string;
};
`})}),`
`,e.jsx(l,{children:h})]})}function o(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}const g=()=>{throw new Error("Docs-only story")};g.parameters={docsOnly:!0};const i={title:"07-Utility/Language Switcher/Intro",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:o};const k=["__page"];export{k as __namedExportsOrder,g as __page,i as default};
