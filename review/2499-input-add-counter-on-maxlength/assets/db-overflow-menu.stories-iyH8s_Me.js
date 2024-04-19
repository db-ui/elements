import{n as a,M as l,C as s,e as d}from"./chunk-HLWAVYOI-CiULJtEf.js";import{m as c}from"./mockData-CeVrjjfO.js";import{j as e}from"./jsx-runtime-Cl_ipp43.js";import{u as i}from"./index-6HjAnC55.js";import"./iframe-tpnGXzdj.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const h="# db-overflow-menu\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property   | Attribute  | Description                                                            | Type      | Default     |\n| ---------- | ---------- | ---------------------------------------------------------------------- | --------- | ----------- |\n| `data`     | `data`     | The data attribute can be used to generate overflow-menu by data.      | `string`  | `undefined` |\n| `opposite` | `opposite` | The opposite attribute, changes the behaviour: overflow-menu -> right. | `boolean` | `undefined` |\n| `summary`  | `summary`  | The summary attribute, shows a text for accessibility.                 | `string`  | `''`        |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n",p=a.div`
  .docs-story {
    & > div:first-child {
      min-height: 300px;
    }
  }
`;function o(t){const n=Object.assign({p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"07-Utility/Overflow Menu/Intro"}),`
`,e.jsxs(p,{children:[e.jsx("db-headline",{variant:"1",children:"<db-overflow-menu>"}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<db-overflow-menu></db-overflow-menu>"})," element represents a overflow menu."]}),e.jsx(n.p,{children:"There are 3 options to use <db-overflow-menu>:"}),e.jsx("db-headline",{variant:"2",children:"overflow-menu with wrappers"}),e.jsxs(n.p,{children:["Use ",e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li",target:"_blank",rel:"nofollow noopener noreferrer",children:["<li> (",e.jsx(n.strong,{children:"l"}),"ist ",e.jsx(n.strong,{children:"i"}),"tem)"]})," as a wrapper tag around each element."]}),e.jsxs(n.p,{children:["Only ",e.jsx(n.code,{children:"<button>"})," and ",e.jsx(n.code,{children:"<a>"})," HTML tags work as items content."]}),e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Maybe you need this option to use framework specific listeners."})})}),e.jsx(s,{children:e.jsxs("db-overflow-menu",{children:[e.jsx("li",{children:e.jsx("db-button",{title:"Title text",children:"Modify"})}),e.jsx("li",{children:e.jsx("db-button",{title:"Title text",children:"Delete"})})]})}),e.jsx("db-headline",{variant:"2",children:"overflow-menu with <db-link>"}),e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Use with caution, you won't have reactivity on changed HTML after the initial load."})})}),e.jsx(s,{children:e.jsxs("db-overflow-menu",{children:[e.jsx("db-link",{href:"#",children:"Einstellungen"}),e.jsx("db-link",{href:"#",children:"Nachrichten"})]})}),e.jsx("db-headline",{children:"overflow-menu with data"}),e.jsx(s,{children:e.jsx("db-overflow-menu",{data:c()})}),e.jsx(n.p,{children:"The data should be an object passed in with JSON.stringify()"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export type DbLinkType = {
  href: string;
  label: string;
};
`})})]}),`
`,e.jsx(d,{children:h})]})}function m(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}const u=()=>{throw new Error("Docs-only story")};u.parameters={docsOnly:!0};const r={title:"07-Utility/Overflow Menu/Intro",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:m};const M=["StyledCanvas","__page"];export{p as StyledCanvas,M as __namedExportsOrder,u as __page,r as default};
