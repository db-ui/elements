import{n as d,M as a,C as o,e as l}from"./chunk-HLWAVYOI-3NzLQDU3.js";import{m as c}from"./mockData-CeVrjjfO.js";import{j as e}from"./jsx-runtime-ksGqeha-.js";import{u as i}from"./index-DTTS-Jem.js";import"./iframe-pqs2-D5R.js";import"../sb-preview/runtime.js";import"./doctrine-CNNg9870.js";import"./index-DrFu-skq.js";const h="# db-dropdown\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property   | Attribute  | Description                                                      | Type      | Default     |\n| ---------- | ---------- | ---------------------------------------------------------------- | --------- | ----------- |\n| `data`     | `data`     | The data attribute can be used to generate dropdown by data.     | `string`  | `undefined` |\n| `opposite` | `opposite` | The opposite attribute, changes the behaviour: dropdown -> left. | `boolean` | `undefined` |\n| `summary`  | `summary`  | The summary attribute, shows a text for accessibility.           | `string`  | `''`        |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n",p=d.div`
  .docs-story {
    & > div:first-child {
      min-height: 300px;
    }
  }
`;function s(t){const n=Object.assign({p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"07-Utility/Dropdown/Intro"}),`
`,e.jsxs(p,{children:[e.jsx("db-headline",{variant:"1",children:"<db-dropdown>"}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<db-dropdown></db-dropdown>"})," element represents a dropdown. This component is mainly meant to get used within the header section. If you're looking for a similar one within the content section, please refer to the ",e.jsx(n.code,{children:"overflow menu"})," component."]}),e.jsx(n.p,{children:"There are three options to use <db-dropdown>:"}),e.jsx("db-headline",{variant:"2",children:"dropdown with wrappers"}),e.jsxs(n.p,{children:["Use ",e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li",target:"_blank",rel:"nofollow noopener noreferrer",children:["<li> (",e.jsx(n.strong,{children:"l"}),"ist ",e.jsx(n.strong,{children:"i"}),"tem)"]})," as a wrapper tag around each element."]}),e.jsxs(n.p,{children:["Only ",e.jsx(n.code,{children:"<button>"})," and ",e.jsx(n.code,{children:"<a>"})," HTML tags work as items content."]}),e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Maybe you need this option to use framework specific listeners."})})}),e.jsx("db-headline",{children:"dropdown with custom db-button"}),e.jsx(o,{children:e.jsxs("db-dropdown",{opposite:!0,children:[e.jsx("li",{children:e.jsx("db-button",{title:"Title text",children:e.jsx(n.p,{children:"Modify"})})}),e.jsx("li",{children:e.jsx("db-button",{title:"Title text",children:e.jsx(n.p,{children:"Delete"})})})]})}),e.jsx("db-headline",{variant:"2",children:"dropdown with <db-link>"}),e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Use with caution, you won't have reactivity on changed HTML after the initial load."})})}),e.jsx(o,{children:e.jsxs("db-dropdown",{opposite:!0,children:[e.jsx("db-link",{href:"#",children:"Einstellungen"}),e.jsx("db-link",{href:"#",children:"Nachrichten"})]})}),e.jsx("db-headline",{variant:"2",children:"dropdown with data"}),e.jsx(o,{children:e.jsx("db-dropdown",{opposite:!0,data:c()})}),e.jsx(n.p,{children:"The data should be an object passed in with JSON.stringify()"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export type DbLinkType = {
  href: string;
  label: string;
};
`})})]}),`
`,e.jsx(l,{children:h})]})}function x(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const r={title:"07-Utility/Dropdown/Intro",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:x};const T=["StyledCanvas","__page"];export{p as StyledCanvas,T as __namedExportsOrder,m as __page,r as default};
