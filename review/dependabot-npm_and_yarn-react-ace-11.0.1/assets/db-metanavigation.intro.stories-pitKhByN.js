import{M as o,C as a,e as l}from"./chunk-HLWAVYOI-DijVWyK6.js";import{m as d}from"./mockData-CeVrjjfO.js";import{j as e}from"./jsx-runtime-CZIweyYm.js";import{u as s}from"./index-DXLxq4bC.js";import"./iframe-DOMAwDBo.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const c=`# db-metanavigation



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                        | Type     | Default     |
| -------- | --------- | ------------------------------------------------------------------ | -------- | ----------- |
| \`data\`   | \`data\`    | The data attribute can be used to generate metanavigation by data. | \`string\` | \`undefined\` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function r(t){const n=Object.assign({p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"02-Navigation/Meta Navigation/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-metanavigation>"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<db-metanavigation></db-metanavigation>"})," element represents a meta navigation inside the header or footer component."]}),`
`,e.jsx(n.p,{children:"There are three options to use <db-metanavigation>:"}),`
`,e.jsx("db-headline",{children:"Metanavigation with other custom elements"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li",target:"_blank",rel:"nofollow noopener noreferrer",children:["<li> (",e.jsx(n.strong,{children:"l"}),"ist ",e.jsx(n.strong,{children:"i"}),"tem)"]})," as a wrapper tag around each element."]}),`
`,e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Maybe you need this option to use framework specific listeners."})})}),`
`,e.jsx(a,{mdxSource:'<db-metanavigation><li><a href="#" title="Title text" rel="configuration"><p>{"Einstellungen"}</p></a></li><li><a href="#" title="Title text" rel="messages"><p>{"Nachrichten"}</p></a></li></db-metanavigation>',children:e.jsxs("db-metanavigation",{children:[e.jsx("li",{children:e.jsx("a",{href:"#",title:"Title text",rel:"configuration",children:e.jsx(n.p,{children:"Einstellungen"})})}),e.jsx("li",{children:e.jsx("a",{href:"#",title:"Title text",rel:"messages",children:e.jsx(n.p,{children:"Nachrichten"})})})]})}),`
`,e.jsx("db-headline",{children:"Metanavigation with <db-link>"}),`
`,e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Use with caution, you won't have reactivity on changed HTML after the initial load."})})}),`
`,e.jsx(a,{mdxSource:'<db-metanavigation><db-link icon="settings" href="#"><p>{"Einstellungen"}</p></db-link><db-link icon="chat" icononly href="#"><p>{"Nachrichten"}</p></db-link></db-metanavigation>',children:e.jsxs("db-metanavigation",{children:[e.jsx("db-link",{icon:"settings",href:"#",children:e.jsx(n.p,{children:"Einstellungen"})}),e.jsx("db-link",{icon:"chat",icononly:!0,href:"#",children:e.jsx(n.p,{children:"Nachrichten"})})]})}),`
`,e.jsx("db-headline",{children:"Metanavigation with data"}),`
`,e.jsx(a,{mdxSource:"<db-metanavigation data={mockData()} />",children:e.jsx("db-metanavigation",{data:d()})}),`
`,e.jsxs(n.p,{children:["The data should be an object passed in with ",e.jsx(n.code,{children:"JSON.stringify()"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export type DbLinkType = {
  href: string;
  label: string;
};
`})}),`
`,e.jsx(l,{children:c})]})}function h(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const i={title:"02-Navigation/Meta Navigation/Intro",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:h};const y=["__page"];export{y as __namedExportsOrder,p as __page,i as default};
