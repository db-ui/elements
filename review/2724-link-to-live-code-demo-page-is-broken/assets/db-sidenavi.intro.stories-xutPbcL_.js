import{M as d,C as a,e as l}from"./chunk-HLWAVYOI-DPXDk26f.js";import{c}from"./mockData-CeVrjjfO.js";import{j as e}from"./jsx-runtime-C3g2Abpk.js";import{u as s}from"./index-B-86jXk8.js";import"./iframe-D7KLBfwv.js";import"../sb-preview/runtime.js";import"./index-BZSUm5_z.js";import"./index-DrFu-skq.js";const o=`# db-sidenavi



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                 | Type     | Default     |
| -------- | --------- | ----------------------------------------------------------- | -------- | ----------- |
| \`data\`   | \`data\`    | The data attribute can be used to generate sidenav by data. | \`string\` | \`undefined\` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function t(i){const n=Object.assign({p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},s(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"02-Navigation/Sidenavi/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-sidenavi>"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<db-sidenavi></db-sidenavi>"})," element represents a side navigation e.g. for mobile view."]}),`
`,e.jsx(n.p,{children:"There are 3 options to use <db-sidenavi>:"}),`
`,e.jsx("db-headline",{children:"Sidenavi with wrappers"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li",target:"_blank",rel:"nofollow noopener noreferrer",children:["<li> (",e.jsx(n.strong,{children:"l"}),"ist ",e.jsx(n.strong,{children:"i"}),"tem)"]})," as a wrapper tag around each element."]}),`
`,e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Maybe you need this option to use framework specific listeners."})})}),`
`,e.jsx(a,{mdxSource:'<db-sidenavi><li><a rel="index" href="#" aria-current="page"><p>{"Startseite"}</p></a></li><li><a rel="documents" href="#"><p>{"Dokumente"}</p></a></li><li><a rel="calendar" href="#"><p>{"Kalender"}</p></a></li><li><a rel="help" href="#"><p>{"Frage & Hilfe"}</p></a></li></db-sidenavi>',children:e.jsxs("db-sidenavi",{children:[e.jsx("li",{children:e.jsx("a",{rel:"index",href:"#","aria-current":"page",children:e.jsx(n.p,{children:"Startseite"})})}),e.jsx("li",{children:e.jsx("a",{rel:"documents",href:"#",children:e.jsx(n.p,{children:"Dokumente"})})}),e.jsx("li",{children:e.jsx("a",{rel:"calendar",href:"#",children:e.jsx(n.p,{children:"Kalender"})})}),e.jsx("li",{children:e.jsx("a",{rel:"help",href:"#",children:e.jsx(n.p,{children:"Frage & Hilfe"})})})]})}),`
`,e.jsx("db-headline",{children:"Sidenavi with <db-link>"}),`
`,e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Use with caution, you won't have reactivity on changed HTML after the initial load."})})}),`
`,e.jsx(a,{mdxSource:'<db-sidenavi><db-link rel="index" href="#" aria-current="page"><p>{"Startseite"}</p></db-link><db-link rel="documents" href="#"><p>{"Dokumente"}</p></db-link><db-link icon="settings" href="#"><p>{"Einstellungen"}</p></db-link><db-link icon="chat" href="#"><p>{"Nachrichten"}</p></db-link><db-link rel="calendar" href="#"><p>{"Kalender"}</p></db-link><db-link rel="help" href="#"><p>{"Frage & Hilfe"}</p></db-link></db-sidenavi>',children:e.jsxs("db-sidenavi",{children:[e.jsx("db-link",{rel:"index",href:"#","aria-current":"page",children:e.jsx(n.p,{children:"Startseite"})}),e.jsx("db-link",{rel:"documents",href:"#",children:e.jsx(n.p,{children:"Dokumente"})}),e.jsx("db-link",{icon:"settings",href:"#",children:e.jsx(n.p,{children:"Einstellungen"})}),e.jsx("db-link",{icon:"chat",href:"#",children:e.jsx(n.p,{children:"Nachrichten"})}),e.jsx("db-link",{rel:"calendar",href:"#",children:e.jsx(n.p,{children:"Kalender"})}),e.jsx("db-link",{rel:"help",href:"#",children:e.jsx(n.p,{children:"Frage & Hilfe"})})]})}),`
`,e.jsx("db-headline",{children:"sidenavi with data"}),`
`,e.jsx(a,{mdxSource:"<db-sidenavi data={mockDataIcon()} />",children:e.jsx("db-sidenavi",{data:c()})}),`
`,e.jsx(n.p,{children:"The data should be an object passed in with JSON.stringify()"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export type DbLinkType = {
  href: string;
  label: string;
  icon?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  ariaCurrent?:
    | 'page'
    | 'step'
    | 'location'
    | 'date'
    | 'time'
    | 'true'
    | 'false';
};
`})}),`
`,e.jsx(l,{children:o})]})}function h(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const r={title:"02-Navigation/Sidenavi/Intro",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:h};const v=["__page"];export{v as __namedExportsOrder,p as __page,r as default};
