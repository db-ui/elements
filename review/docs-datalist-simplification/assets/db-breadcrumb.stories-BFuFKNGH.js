import{M as l,C as i,e as s}from"./chunk-HLWAVYOI-CDpo8iI8.js";import{m as c}from"./mockData-CeVrjjfO.js";import{j as e}from"./jsx-runtime-BBCjn_LO.js";import{u as d}from"./index-DaypwtEk.js";import"./iframe-5KJe8u1S.js";import"../sb-preview/runtime.js";import"./index-BZSUm5_z.js";import"./index-DrFu-skq.js";const o="# db-breadcrumb\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property    | Attribute   | Description                                                                                                                 | Type     | Default     |\n| ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |\n| `arialabel` | `arialabel` | an optional [`aria-label`-attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) | `string` | `undefined` |\n| `data`      | `data`      | The data attribute can be used to generate breadcrumb by data.                                                              | `string` | `undefined` |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n";function t(a){const r=Object.assign({p:"p",code:"code",pre:"pre"},d(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"02-Navigation/Breadcrumb/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-breadcrumb>"}),`
`,e.jsx(r.p,{children:"There are 3 options to use <db-breadcrumb>:"}),`
`,e.jsxs("db-headline",{children:["Breadcrumb with ",e.jsx(r.code,{children:"li"})," tag wrappers"]}),`
`,e.jsx(i,{mdxSource:'<db-breadcrumb aria-label="Breadcrumb"><li><db-link href="#">{"Startseite"}</db-link></li><li><a title="This could be a framework-specific tag like <Nav> as well" href="#"><p>{"Page XYZ"}</p></a></li><li><a title="This could be a framework-specific tag like <Nav>" aria-current="location" href="#"><p>{"Page ZYS"}</p></a></li></db-breadcrumb>',children:e.jsxs("db-breadcrumb",{"aria-label":"Breadcrumb",children:[e.jsx("li",{children:e.jsx("db-link",{href:"#",children:"Startseite"})}),e.jsx("li",{children:e.jsx("a",{title:"This could be a framework-specific tag like <Nav> as well",href:"#",children:e.jsx(r.p,{children:"Page XYZ"})})}),e.jsx("li",{children:e.jsx("a",{title:"This could be a framework-specific tag like <Nav>","aria-current":"location",href:"#",children:e.jsx(r.p,{children:"Page ZYS"})})})]})}),`
`,e.jsx("db-headline",{children:"Breadcrumb with <db-link>"}),`
`,e.jsx("i",{children:e.jsx("strong",{children:e.jsx(r.p,{children:"Use with caution, you won't have reactivity on changed HTML after the initial load."})})}),`
`,e.jsx(i,{mdxSource:'<db-breadcrumb aria-label="Breadcrumb"><db-link href="#">{"Startseite"}</db-link><db-link href="#">{"Page XYZ"}</db-link><db-link href="#" current="location"><p>{"Page ZYS"}</p></db-link></db-breadcrumb>',children:e.jsxs("db-breadcrumb",{"aria-label":"Breadcrumb",children:[e.jsx("db-link",{href:"#",children:"Startseite"}),e.jsx("db-link",{href:"#",children:"Page XYZ"}),e.jsx("db-link",{href:"#",current:"location",children:e.jsx(r.p,{children:"Page ZYS"})})]})}),`
`,e.jsx("db-headline",{children:"Breadcrumb with data"}),`
`,e.jsx(i,{mdxSource:"<db-breadcrumb data={mockData()} />",children:e.jsx("db-breadcrumb",{data:c()})}),`
`,e.jsx(r.p,{children:"The data should be an object passed in with JSON.stringify()"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`export type DbLinkType = {
  href: string;
  label: string;
};
`})}),`
`,e.jsx(s,{children:o})]})}function b(a={}){const{wrapper:r}=Object.assign({},d(),a.components);return r?e.jsx(r,{...a,children:e.jsx(t,{...a})}):t(a)}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const n={title:"02-Navigation/Breadcrumb/Intro",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:b};const w=["__page"];export{w as __namedExportsOrder,h as __page,n as default};
