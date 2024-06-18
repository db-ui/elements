import{n as l,M as d,C as r,e as h}from"./chunk-HLWAVYOI-DVROiTEV.js";import{j as e}from"./jsx-runtime-D3dvZp1S.js";import{u as a}from"./index-DirjBttZ.js";import"./iframe-Dc-9Oj6R.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const c=`# db-mainnavigation



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                 | Type     | Default     |
| ---------- | ----------- | --------------------------------------------------------------------------- | -------- | ----------- |
| \`data\`     | \`data\`      | The data attribute can be used to generate main navigation by data.         | \`string\` | \`undefined\` |
| \`siteName\` | \`site-name\` | The site-name attribute can be set to have the site name for small screens. | \`string\` | \`undefined\` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,o=()=>JSON.stringify([{label:"Startseite",link:"#",current:!0},{label:"Aufträge",link:"#"}]),x=()=>JSON.stringify([{label:"Startseite",link:"#",current:!0,children:[{label:"Sub1",link:"#",children:[{label:"Sub1Sub1",link:"#"},{label:"Sub1Sub2",link:"#"}]}]},{label:"Aufträge",link:"#"}]),u=l.div`
  .docs-story {
    & > div:first-child {
      min-height: 300px;
    }
  }
`;function s(i){const n=Object.assign({p:"p",code:"code",a:"a",pre:"pre"},a(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"02-Navigation/Main Navigation/Intro"}),`
`,e.jsxs(u,{children:[e.jsx("db-headline",{variant:"1",children:"<db-mainnavigation>"}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<db-mainnavigation></db-mainnavigation>"})," element represents the main navigation of your app shown inside the header."]}),e.jsxs(n.p,{children:["There are 3 options to use <db-mainnavigation>; out of the first two, we suggest the first one as it provides you with reactivity (especially ",e.jsxs(n.a,{href:"https://github.com/db-ui/elements/issues/590",target:"_blank",rel:"nofollow noopener noreferrer",children:["data like e.g. ",e.jsx(n.code,{children:"current"}),"-attributes changes after the initial rendering"]}),"):"]}),e.jsxs("db-headline",{children:["Mainnavigation with ",e.jsx(n.code,{children:"li"})," tag wrappers"]}),e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Maybe you need this option to use framework specific listeners."})})}),e.jsx("db-headline",{variant:"4",children:"Without submenu"}),e.jsx(r,{children:e.jsxs("db-mainnavigation",{children:[e.jsx("li",{children:e.jsx("db-link",{href:"#",current:"page",children:e.jsx(n.p,{children:"Startseite"})})}),e.jsx("li",{children:e.jsx("db-link",{href:"#",children:e.jsx(n.p,{children:"Aufträge"})})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"News"})})]})}),e.jsx("db-headline",{variant:"4",children:"With submenu items"}),e.jsx(r,{children:e.jsxs("db-mainnavigation",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"#","aria-current":"page",children:e.jsx(n.p,{children:"Startseite"})}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("db-link",{href:"#",children:e.jsx(n.p,{children:"Subul 01"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("db-link",{href:"#",children:e.jsx(n.p,{children:"Sub 01 Sub 01"})})}),e.jsx("li",{children:e.jsx("db-link",{href:"#",children:e.jsx(n.p,{children:"Sub 01 Sub 02"})})}),e.jsx("li",{children:e.jsx("db-link",{href:"#",children:e.jsx(n.p,{children:"Sub 01 Sub 03"})})})]})]})})]}),e.jsxs("li",{children:[e.jsx("db-link",{href:"#",children:e.jsx(n.p,{children:"Aufträge"})}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("db-link",{href:"#",children:e.jsx(n.p,{children:"Subul 02"})})})})]}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"News"})})]})}),e.jsx("db-headline",{children:"Mainnavigation with <db-link>"}),e.jsx("i",{children:e.jsx("strong",{children:e.jsx(n.p,{children:"Use with caution, you won't have reactivity on changed HTML after the initial load."})})}),e.jsx("db-headline",{variant:"4",children:"Without submenu"}),e.jsx(r,{children:e.jsxs("db-mainnavigation",{children:[e.jsx("db-link",{href:"#",rel:"index",current:"page",children:e.jsx(n.p,{children:"Startseite"})}),e.jsx("db-link",{href:"#",rel:"offers",children:e.jsx(n.p,{children:"Aufträge"})})]})}),e.jsx("db-headline",{variant:"4",children:"With submenu items"}),e.jsx(r,{children:e.jsxs("db-mainnavigation",{children:[e.jsxs("db-link",{href:"#",current:"page",children:[e.jsx(n.p,{children:"Startseite"}),e.jsx("db-link",{href:"#",children:e.jsxs(n.p,{children:[`Sub 1
`,e.jsx("db-link",{href:"#",children:"Sub 1 Sub 1"}),`
`,e.jsx("db-link",{href:"#",children:"Sub 1 Sub 2"})]})}),e.jsx("db-link",{href:"#",children:e.jsxs(n.p,{children:[`Sub 2
`,e.jsx("db-link",{href:"#",children:"Sub 2 Sub 1"}),`
`,e.jsx("db-link",{href:"#",children:"Sub2 Sub 2"})]})})]}),e.jsx("db-link",{href:"#",rel:"offers",children:e.jsx(n.p,{children:"Aufträge"})})]})}),e.jsx("db-headline",{children:"Mainnavigation with Data"}),e.jsx("db-headline",{variant:"4",children:"Without submenu"}),e.jsx(r,{children:e.jsx("db-mainnavigation",{data:o()})}),e.jsx("db-headline",{variant:"4",children:"With submenu items"}),e.jsx(r,{children:e.jsx("db-mainnavigation",{data:x()})}),e.jsx(n.p,{children:"The data should be an object passed in with JSON.stringify()"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export type DbMainnavigationDataType = {
  link: string; // Link to navigate
  label: string; // Visible text to user
  current?: boolean; // Marked as current selected
  children?: DbMainnavigationDataType[]; // Submenu, sublinks
};

`})})]}),`
`,e.jsx(h,{children:c})]})}function b(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}const j=()=>{throw new Error("Docs-only story")};j.parameters={docsOnly:!0};const t={title:"02-Navigation/Main Navigation/Intro",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:b};const y=["StyledCanvas","__page"];export{u as StyledCanvas,y as __namedExportsOrder,j as __page,t as default};
