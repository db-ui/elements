import{M as l,C as i,e as a}from"./chunk-HLWAVYOI-tDSNEUhE.js";import{b as o}from"./mockData-CeVrjjfO.js";import{j as e}from"./jsx-runtime-DPBbhDtq.js";import{u as r}from"./index-C7zEtBF0.js";import"./iframe-Bv5tlhoG.js";import"../sb-preview/runtime.js";import"./index-DofHZ8ew.js";import"./index-DrFu-skq.js";const c=`# db-linklist



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                  | Type     | Default     |
| -------- | --------- | ------------------------------------------------------------ | -------- | ----------- |
| \`data\`   | \`data\`    | The data attribute can be used to generate linklist by data. | \`string\` | \`undefined\` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function d(t){const n=Object.assign({p:"p",code:"code",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"02-Navigation/Linklist/Intro"}),`
`,e.jsx(n.p,{children:"A link list component, to be setup out of link components."}),`
`,e.jsx(n.p,{children:"There are 3 options to use <db-linklist>:"}),`
`,e.jsxs("db-headline",{children:["Linklist with custom ",e.jsx(n.code,{children:"li"})," wrapper"]}),`
`,e.jsx(i,{mdxSource:'<db-linklist><li><a href="https://www.bahn.de/">{"www.bahn.de"}</a></li><li><a href="https://www.dbsystel.de/">{"www.dbsystel.de"}</a></li></db-linklist>',children:e.jsxs("db-linklist",{children:[e.jsx("li",{children:e.jsx("a",{href:"https://www.bahn.de/",children:"www.bahn.de"})}),e.jsx("li",{children:e.jsx("a",{href:"https://www.dbsystel.de/",children:"www.dbsystel.de"})})]})}),`
`,e.jsx("db-headline",{children:"Linklist with <db-link>"}),`
`,e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Use with caution, you won't have reactivity on changed HTML after the initial load."})})}),`
`,e.jsx(i,{mdxSource:'<db-linklist><db-link href="https://www.bahn.de/">{"www.bahn.de"}</db-link><db-link href="https://www.dbsystel.de/">{"www.dbsystel.de"}</db-link></db-linklist>',children:e.jsxs("db-linklist",{children:[e.jsx("db-link",{href:"https://www.bahn.de/",children:"www.bahn.de"}),e.jsx("db-link",{href:"https://www.dbsystel.de/",children:"www.dbsystel.de"})]})}),`
`,e.jsx("db-headline",{children:"Linklist with data"}),`
`,e.jsx(i,{mdxSource:"<db-linklist data={mockDataWebsites()} />",children:e.jsx("db-linklist",{data:o()})}),`
`,e.jsxs(n.p,{children:["The data should be an object passed in with ",e.jsx(n.code,{children:"JSON.stringify()"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export type DbLinkType = {
  href: string;
  label: string;
};
`})}),`
`,e.jsx(a,{children:c})]})}function h(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}const w=()=>{throw new Error("Docs-only story")};w.parameters={docsOnly:!0};const s={title:"02-Navigation/Linklist/Intro",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:h};const y=["__page"];export{y as __namedExportsOrder,w as __page,s as default};
