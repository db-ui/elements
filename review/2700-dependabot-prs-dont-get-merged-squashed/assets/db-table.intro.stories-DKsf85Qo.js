import{M as o,C as a,e as b}from"./chunk-HLWAVYOI-CXESfmt4.js";import{f as r,m as l,r as c,b as h}from"./mockData-CtPG7FSM.js";import{j as e}from"./jsx-runtime-CB-KYffG.js";import{u as i}from"./index-mDKew3Jn.js";import"./iframe-BYcQhOMg.js";import"../sb-preview/runtime.js";import"./doctrine-CNNg9870.js";import"./index-DrFu-skq.js";const p='# db-table\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property            | Attribute           | Description                                                                                                                                                                            | Type               | Default     |\n| ------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------- |\n| `align`             | `align`             | The align prop sets the data-align attribute on the thead element of the rendered table. Valid values are "left" (default), "center", "bottom"                                         | `string`           | `\'\'`        |\n| `bodyalign`         | `bodyalign`         | The bodyalign prop sets the data-align attribute on the tbody element of the rendered table. Valid values are "left" (default), "center", "bottom"                                     | `string`           | `\'\'`        |\n| `bodyverticalalign` | `bodyverticalalign` | The bodyverticalalign prop sets the data-vertical-align attribute on the tbody element of the rendered table. Valid values are "top" (default), "middle", "bottom"                     | `string`           | `\'\'`        |\n| `border`            | `border`            | The border prop sets the data-border attribute on the table element of the rendered table. Valid values are "around", "horizontal"                                                     | `string`           | `\'\'`        |\n| `density`           | `density`           | The density prop sets the data-density attribute on the table element of the rendered table. Valid values are "small", "regular", "large"                                              | `string`           | `\'\'`        |\n| `fontsize`          | `fontsize`          | The fontsize prop sets the the font size of the style attribute on the table element of the rendered table.                                                                            | `string`           | `\'1rem\'`    |\n| `sticky`            | `sticky`            | The sticky prop sets the table header stickyness of the rendered table.                                                                                                                | `string`           | `\'\'`        |\n| `stripes`           | `stripes`           | The stripes prop sets the the zebra stripes coloring of the rendered table.                                                                                                            | `string`           | `\'\'`        |\n| `tabledata`         | `tabledata`         | The tabledata prop receives a stringified object of the type "TableDataType" and sets the initial value of the table. It can also be set as a property from the outside via JavaScript | `object \\| string` | `undefined` |\n| `verticalalign`     | `verticalalign`     | The verticalalign prop sets the data-vertical-align attribute on the thead element of the rendered table. Valid values are "top" (default), "middle", "bottom"                         | `string`           | `\'\'`        |\n\n\n## Dependencies\n\n### Depends on\n\n- [db-icon](../db-icon)\n\n### Graph\n```mermaid\ngraph TD;\n  db-table --> db-icon\n  style db-table fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n';function s(n){const t=Object.assign({p:"p",code:"code",a:"a",pre:"pre"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"04-Data-Display/Table/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-table>"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<db-table></db-table>"}),` element enables the presentation of tabular data in a preformatted table.
The data fed into the table via the `,e.jsx(t.code,{children:"tabledata"}),` attribute needs to adhere to
a the schema below (either rows or columns data needs to be present, never both).`]}),`
`,e.jsxs(t.p,{children:[`The content of a single cell in the table, is represented via a tuple. The first
value represents an icon (see `,e.jsx(t.a,{href:"https://db-ui.github.io/core/?p=viewall-base-icons",target:"_blank",rel:"nofollow noopener noreferrer",children:"DB UI Core icon overview"}),`
for all valid values) and can also be `,e.jsx(t.code,{children:"null"}),` if no icon should be displayed. The
second value is the actual content of the cell.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type cell = [string | null, string]
`})}),`
`,e.jsxs(t.p,{children:["This is the shape of the data that is passed as ",e.jsx(t.code,{children:"tabledata"}),` attribute.
Mind that the object needs to be passed stringified if set as an attribute.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type tabledata = {
  caption: string;
  headers: string[];
  rowTitles?: string[];
  rowTitle?: string;
  columns?: {
    [id: string]: cell[];
  };
  rows?: object[];
};

`})}),`
`,e.jsxs(t.p,{children:["To keep the structure of ",e.jsx(t.code,{children:"tabledata"})," simple the strings in the ",e.jsx(t.code,{children:"headers"})," array need to be identical to the ",e.jsx(t.code,{children:"keys"}),` in the columns object.
The structure of `,e.jsx(t.code,{children:"tabledata"})," will be validated, passing too many or too few data will cause an error to be logged on the console and the table will be filled with an error message."]}),`
`,e.jsxs(t.p,{children:["When setting ",e.jsx(t.code,{children:"tabledata"})," as attribute or property it must be stringified first."]}),`
`,e.jsx("db-headline",{children:" Simple table:"}),`
`,e.jsx(a,{mdxSource:"<db-table tabledata={fullColumnMockData()} />{}",children:e.jsx("db-table",{tabledata:r()})}),`
`,e.jsx("db-headline",{children:"Columnar data (with table alignment)"}),`
`,e.jsx(a,{mdxSource:'<db-table align="center" verticalalign="middle" bodyalign="right" bodyverticalalign="bottom" tabledata={mockData()} />{}',children:e.jsx("db-table",{align:"center",verticalalign:"middle",bodyalign:"right",bodyverticalalign:"bottom",tabledata:l()})}),`
`,e.jsx("db-headline",{children:"Row data"}),`
`,e.jsx(a,{mdxSource:"<db-table tabledata={rowMockData()} />{}",children:e.jsx("db-table",{tabledata:c()})}),`
`,e.jsx("db-headline",{children:'Table with "around" border:'}),`
`,e.jsx(a,{mdxSource:'<db-table border="around" tabledata={fullColumnMockData()} />{}',children:e.jsx("db-table",{border:"around",tabledata:r()})}),`
`,e.jsx("db-headline",{children:'Table with "horizontal" border:'}),`
`,e.jsx(a,{mdxSource:'<db-table border="horizontal" tabledata={mockData()} />{}',children:e.jsx("db-table",{border:"horizontal",tabledata:l()})}),`
`,e.jsx("db-headline",{children:'Table with "small" density:'}),`
`,e.jsx(a,{mdxSource:'<db-table density="small" tabledata={fullColumnMockData()} />{}',children:e.jsx("db-table",{density:"small",tabledata:r()})}),`
`,e.jsx("db-headline",{children:'Table with "large" density:'}),`
`,e.jsx(a,{mdxSource:'<db-table density="large" tabledata={mockData()} />{}',children:e.jsx("db-table",{density:"large",tabledata:l()})}),`
`,e.jsxs("db-headline",{children:["Table with ",e.jsx(t.code,{children:"fontsize"}),' set to "0.5rem":']}),`
`,e.jsx(a,{mdxSource:'<db-table fontsize="0.5rem" tabledata={mockData()} />{}',children:e.jsx("db-table",{fontsize:"0.5rem",tabledata:l()})}),`
`,e.jsxs("db-headline",{children:[" Table with ",e.jsx(t.code,{children:"stripes"}),' set to "zebra":']}),`
`,e.jsx(a,{mdxSource:'<db-table stripes="zebra" tabledata={fullColumnMockData()} />{}',children:e.jsx("db-table",{stripes:"zebra",tabledata:r()})}),`
`,e.jsxs("db-headline",{children:[" Table with ",e.jsx(t.code,{children:"sticky"}),' set to "header":']}),`
`,e.jsx(a,{mdxSource:'<db-table sticky="header" tabledata={mockData()} />{}',children:e.jsx("db-table",{sticky:"header",tabledata:l()})}),`
`,e.jsxs(t.p,{children:[e.jsx("db-headline",{children:"Invalid Data"}),`
Table which was passed invalid `,e.jsx(t.code,{children:"tabledata"})," (the data of ",e.jsx(t.code,{children:"brokenMockData"})," below is a broken data structure - string in headers array does not match key name in columns object):"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`const brokenMockData = JSON.stringify({
  caption: 'Broken Table',
  headers: ['I am not present in columns'],
  columns: {
    'something is rotten': ['in the state of Denmark']
  }
});
`})}),`
`,e.jsx(a,{mdxSource:'<db-table density="large" tabledata={brokenMockData} />',children:e.jsx("db-table",{density:"large",tabledata:h})}),`
`,e.jsx(b,{children:p})]})}function m(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}const u=()=>{throw new Error("Docs-only story")};u.parameters={docsOnly:!0};const d={title:"04-Data-Display/Table/Intro",tags:["stories-mdx"],includeStories:["__page"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:m};const w=["__page"];export{w as __namedExportsOrder,u as __page,d as default};
