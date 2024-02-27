import{M as o,C as n,e as p}from"./chunk-HLWAVYOI-Kpe2NMHl.js";import{j as e}from"./jsx-runtime-S-L_QGKT.js";import{u as s}from"./index-C8JDYVZV.js";import"./iframe-CcEmGbpZ.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const l="# db-pagination\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property          | Attribute         | Description                                                                                                                                                                                                           | Type      | Default                  |\n| ----------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------ |\n| `ariaid`          | `ariaid`          | Optional id for the caption aria label - otherwise random id will be set                                                                                                                                              | `string`  | `'pagination-' + uuid()` |\n| `arialabel`       | `arialabel`       | The arialabel attribute is a string attribute and defines the text content of the aria-label in the pagination.                                                                                                       | `string`  | `'Pagination'`           |\n| `count`           | `count`           | The count attribute is a number attribute and defines the number of pages displayed apart from the first and last page (except if currentpage is the first or last page, then these pages are included in the count). | `number`  | `2`                      |\n| `currentpage`     | `currentpage`     | The currentpage attribute is a obligatory number attribute and indicates which page number is highlighted in the pagination.                                                                                          | `number`  | `1`                      |\n| `ellipsisend`     | `ellipsisend`     | The ellipsisend attribute only needs to be passed when working with slots. Should to be set to true if an ellipsis needs to be shown at the end of the pagination.                                                    | `boolean` | `undefined`              |\n| `ellipsisstart`   | `ellipsisstart`   | The ellipsisstart attribute only needs to be passed when working with slots. Should to be set to true if an ellipsis needs to be shown at the start of the pagination.                                                | `boolean` | `undefined`              |\n| `pages`           | `pages`           | The pages attribute is a obligatory number attribute and indicates how many pages the pagination knows about.                                                                                                         | `number`  | `2`                      |\n| `textnext`        | `textnext`        | The textnext attribute is a string attribute and defines the text content of the right arrow in the pagination.                                                                                                       | `string`  | `'Next'`                 |\n| `textprevious`    | `textprevious`    | The textprevious attribute is a string attribute and defines the text content of the left arrow in the pagination.                                                                                                    | `string`  | `'Previous'`             |\n| `titlenext`       | `titlenext`       | The titlenext attribute is a string attribute and defines the title of the right arrow in the pagination.                                                                                                             | `string`  | `'Goto next page'`       |\n| `titlepagination` | `titlepagination` | The titlepagination attribute is a string attribute and defines the title of each page number (except first and last) displayed in the pagination.                                                                    | `string`  | `'Page Number'`          |\n| `titleprevious`   | `titleprevious`   | The titleprevious attribute is a string attribute and defines the title of the left arrow in the pagination.                                                                                                          | `string`  | `'Goto previous page'`   |\n\n\n## Events\n\n| Event      | Description                      | Type               |\n| ---------- | -------------------------------- | ------------------ |\n| `dbChange` | Mapping for default change Event | `CustomEvent<any>` |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n";function r(i){const t=Object.assign({p:"p",code:"code"},s(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"02-Navigation/Pagination/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:" <db-pagination>"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<db-pagination></db-pagination>"}),` element represents a pagination navigation
element which lets the user select a certain page number.`]}),`
`,e.jsx(t.p,{children:"There are two kinds how one can consume this component."}),`
`,e.jsxs(t.p,{children:["If anchor elements are passed into the ",e.jsx(t.code,{children:"<db-pagination>"}),` they will be used as
is. The first element is assumed to be the beginning of the collection of pages
in the pagination.
The same is true for the last element but it is assumed that it is your very
last page.
If ellipses are needed one can activate them via the attributes
`,e.jsx(t.code,{children:'ellipsisstart="true"'})," and ",e.jsx(t.code,{children:'ellipsisend="true"'}),"."]}),`
`,e.jsx(t.p,{children:`Caveat: Previous and next arrows will always jump from the second/penultimate
element to the first/last element passed as children.`}),`
`,e.jsxs(t.p,{children:[`The second kind how this component can be consumed is without children but with
a custom event. When a certain page is selected, `,e.jsx(t.code,{children:"<db-pagination>"})," emits a custom ",e.jsx(t.code,{children:"dbChange"}),`
event whose `,e.jsx(t.code,{children:"event .detail.target.innerText"}),` value can be read from your
framework of choice or via plain Javascript.`]}),`
`,e.jsx("db-headline",{variant:"2",children:" Pagination"}),`
`,e.jsx("db-headline",{children:" With children provided via slot (with ellipsis) "}),`
`,e.jsx(n,{mdxSource:'<db-pagination ellipsisstart="true" ellipsisend="true"><a href="#" title="first page"><p>{"1"}</p></a><a href="#" title="third page"><p>{"3"}</p></a><a href="#" data-currentpage title="fourth page"><p>{"4"}</p></a><a href="#" title="fifth page"><p>{"5"}</p></a><a href="#" title="ninth page"><p>{"9"}</p></a></db-pagination>',children:e.jsxs("db-pagination",{ellipsisstart:"true",ellipsisend:"true",children:[e.jsx("a",{href:"#",title:"first page",children:e.jsx(t.p,{children:"1"})}),e.jsx("a",{href:"#",title:"third page",children:e.jsx(t.p,{children:"3"})}),e.jsx("a",{href:"#","data-currentpage":!0,title:"fourth page",children:e.jsx(t.p,{children:"4"})}),e.jsx("a",{href:"#",title:"fifth page",children:e.jsx(t.p,{children:"5"})}),e.jsx("a",{href:"#",title:"ninth page",children:e.jsx(t.p,{children:"9"})})]})}),`
`,e.jsx("db-headline",{children:"With children provided via slot (no ellipsis)."}),`
`,e.jsx(n,{mdxSource:'<db-pagination><a href="#" title="first page"><p>{"1"}</p></a><a href="#" title="second page"><p>{"2"}</p></a><a href="#" data-currentpage title="third page"><p>{"3"}</p></a><a href="#" title="fourth page"><p>{"4"}</p></a><a href="#" title="fifth page"><p>{"5"}</p></a></db-pagination>',children:e.jsxs("db-pagination",{children:[e.jsx("a",{href:"#",title:"first page",children:e.jsx(t.p,{children:"1"})}),e.jsx("a",{href:"#",title:"second page",children:e.jsx(t.p,{children:"2"})}),e.jsx("a",{href:"#","data-currentpage":!0,title:"third page",children:e.jsx(t.p,{children:"3"})}),e.jsx("a",{href:"#",title:"fourth page",children:e.jsx(t.p,{children:"4"})}),e.jsx("a",{href:"#",title:"fifth page",children:e.jsx(t.p,{children:"5"})})]})}),`
`,e.jsx("db-headline",{children:"No ellipsis because we are on the first page (with custom event)"}),`
`,e.jsx(n,{mdxSource:'<db-pagination currentpage="1" pages="9" count="3" />',children:e.jsx("db-pagination",{currentpage:"1",pages:"9",count:"3"})}),`
`,e.jsx("db-headline",{children:"No ellipsis because we are on the second page (with custom event)"}),`
`,e.jsx(n,{mdxSource:'<db-pagination currentpage="2" pages="9" count="3" />',children:e.jsx("db-pagination",{currentpage:"2",pages:"9",count:"3"})}),`
`,e.jsx("db-headline",{children:"Ellipsis on both ends because we are far from the beginning and the end (full configuration of component attributes and custom event)."}),`
`,e.jsx(n,{mdxSource:'<db-pagination currentpage="4" pages="9" count="3" titleprevious="Titel n\\xE4chstes" titlenext="Titel vorher" titlepagination="Seitennummer" textprevious="Vorher" textnext="N\\xE4chstes" />',children:e.jsx("db-pagination",{currentpage:"4",pages:"9",count:"3",titleprevious:"Titel nächstes",titlenext:"Titel vorher",titlepagination:"Seitennummer",textprevious:"Vorher",textnext:"Nächstes"})}),`
`,e.jsx("db-headline",{children:"No ellipsis at the end because we are on the second to last page (with custom event)."}),`
`,e.jsx(n,{mdxSource:'<db-pagination currentpage="8" pages="9" count="3" />',children:e.jsx("db-pagination",{currentpage:"8",pages:"9",count:"3"})}),`
`,e.jsx("db-headline",{children:"Last page, no ellipsis at the end but in the front (with custom event)."}),`
`,e.jsx(n,{mdxSource:'<db-pagination currentpage="9" pages="9" count="3" />',children:e.jsx("db-pagination",{currentpage:"9",pages:"9",count:"3"})}),`
`,e.jsx("db-headline",{children:"No ellipsis at both ends because we there are too few pages (with custom event)."}),`
`,e.jsx(n,{mdxSource:'<db-pagination currentpage="2" pages="3" count="3" />',children:e.jsx("db-pagination",{currentpage:"2",pages:"3",count:"3"})}),`
`,e.jsx(p,{children:l})]})}function d(i={}){const{wrapper:t}=Object.assign({},s(),i.components);return t?e.jsx(t,{...i,children:e.jsx(r,{...i})}):r(i)}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const a={title:"02-Navigation/Pagination/Intro",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:d};const j=["__page"];export{j as __namedExportsOrder,h as __page,a as default};
