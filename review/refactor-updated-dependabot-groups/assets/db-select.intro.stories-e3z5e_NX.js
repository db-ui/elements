import{M as r,C as i,e as a}from"./chunk-HLWAVYOI-ONcyzjpy.js";import{j as e}from"./jsx-runtime-869s2VzP.js";import{u as l}from"./index-v_OiBGq9.js";import"./iframe-fRFwM8q3.js";import"../sb-preview/runtime.js";import"./doctrine-5o-Yg3-5.js";import"./index-PPLHz8o0.js";const p="# db-select\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property             | Attribute      | Description                                                                                                                                                                                                                                                                                                                                            | Type                                                   | Default              |\n| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ | -------------------- |\n| `ariainvalid`        | `ariainvalid`  | The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application.                                                                                                                                                                                                   | `boolean`                                              | `false`              |\n| `disabled`           | `disabled`     | The disabled attribute can be set to keep a user from clicking on the select.                                                                                                                                                                                                                                                                          | `boolean`                                              | `false`              |\n| `input_id`           | `input_id`     | The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element.                                                                                          | `string`                                               | `'select-' + uuid()` |\n| `label` _(required)_ | `label`        | The label attribute specifies the caption of the selectbox.                                                                                                                                                                                                                                                                                            | `string`                                               | `undefined`          |\n| `labelHidden`        | `label-hidden` | The label-hidden attribute is a boolean attribute. When specified, the elements label gets visually hidden (it's important to still keep it displayed for accessibility reasons).                                                                                                                                                                      | `string`                                               | `undefined`          |\n| `multiple`           | `multiple`     | If the multiple attribute is present, then the select element represents a control for selecting zero or more options from the list of options. If the attribute is absent, then the select element represents a control for selecting a single option from the list of options.                                                                       | `boolean`                                              | `false`              |\n| `name` _(required)_  | `name`         | The name attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.                                                                                                                                                    | `string`                                               | `undefined`          |\n| `required`           | `required`     | When the required attribute specified, the user will be required to select a value before submitting the form.                                                                                                                                                                                                                                         | `boolean`                                              | `false`              |\n| `size`               | `size`         | The size attribute gives the number of options to show to the user. The size attribute, if specified, must have a value that is a valid non-negative integer greater than zero. If the multiple attribute is present, then the size attribute's default value is 4. If the multiple attribute is absent, then the size attribute's default value is 1. | `number`                                               | `undefined`          |\n| `value`              | `value`        | The value property is to receive results from the native element. Use 'this.value' to process the expected value when onchange is used.                                                                                                                                                                                                                | `string`                                               | `undefined`          |\n| `variant`            | `variant`      | The variant attribute specifies a visual expression of a select.                                                                                                                                                                                                                                                                                       | `\"outline\" \\| \"semitransparent\" \\| \"solid\" \\| \"white\"` | `'semitransparent'`  |\n\n\n## Events\n\n| Event      | Description                      | Type               |\n| ---------- | -------------------------------- | ------------------ |\n| `dbChange` | Mapping for default change Event | `CustomEvent<any>` |\n\n\n## Dependencies\n\n### Used by\n\n - [github-version-switcher](../development/github-version-switcher)\n\n### Graph\n```mermaid\ngraph TD;\n  github-version-switcher --> db-select\n  style db-select fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n";function s(n){const t=Object.assign({p:"p",code:"code",blockquote:"blockquote"},l(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"05-Data-Input/Select/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-select>"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<db-select></db-select>"})," element represents a control for selecting amongst a set of options. Most of attributes are used in the same way as with a native select. You can try out on ",e.jsx("a",{href:"/story/db-select--live-demo",children:"Select Playground"})," Page."]}),`
`,e.jsxs(i,{mdxSource:'<db-select label="Semitransparent"><option selected>{"Option 1"}</option><option>{"Option 2"}</option><option>{"Option 3"}</option></db-select><db-select label="White" variant="white"><option selected>{"Option 1"}</option><option>{"Option 2"}</option><option>{"Option 3"}</option></db-select><db-select label="Solid" variant="solid"><option selected>{"Option 1"}</option><option>{"Option 2"}</option><option>{"Option 3"}</option></db-select><db-select label="Outline" variant="outline"><option selected>{"Option 1"}</option><option>{"Option 2"}</option><option>{"Option 3"}</option></db-select>',children:[e.jsxs("db-select",{label:"Semitransparent",children:[e.jsx("option",{selected:!0,children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"})]}),e.jsxs("db-select",{label:"White",variant:"white",children:[e.jsx("option",{selected:!0,children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"})]}),e.jsxs("db-select",{label:"Solid",variant:"solid",children:[e.jsx("option",{selected:!0,children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"})]}),e.jsxs("db-select",{label:"Outline",variant:"outline",children:[e.jsx("option",{selected:!0,children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"})]})]}),`
`,e.jsx("db-headline",{variant:"2",children:"disabled"}),`
`,e.jsx(t.p,{children:"Make select look inactive by adding the disabled boolean attribute to any <select> element."}),`
`,e.jsx(i,{mdxSource:'<db-select label="Selectbox" disabled><option selected>{"Option 1"}</option><option>{"Option 2"}</option><option>{"Option 3"}</option></db-select>',children:e.jsxs("db-select",{label:"Selectbox",disabled:!0,children:[e.jsx("option",{selected:!0,children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"})]})}),`
`,e.jsx("db-headline",{variant:"2",children:"multiple"}),`
`,e.jsx(t.p,{children:"If the multiple attribute is present, then the select element represents a control for selecting zero or more options from the list of options. If the attribute is absent, then the select element represents a control for selecting a single option from the list of options."}),`
`,e.jsx(i,{mdxSource:'<db-select label="Selectbox" multiple><option selected>{"Option 1"}</option><option>{"Option 2"}</option><option>{"Option 3"}</option></db-select>',children:e.jsxs("db-select",{label:"Selectbox",multiple:!0,children:[e.jsx("option",{selected:!0,children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"})]})}),`
`,e.jsx("db-headline",{variant:"2",children:"select with <optgroup>"}),`
`,e.jsx(t.p,{children:"The HTML <optgroup> element creates a grouping of options within a select element."}),`
`,e.jsx(i,{mdxSource:'<db-select label="Selectbox"><optgroup label="Group 1"><option selected>{"Option 1.1"}</option><option>{"Option 1.2"}</option><option>{"Option 1.3"}</option></optgroup><optgroup label="Group 1"><option selected>{"Option 2.1"}</option><option>{"Option 2.2"}</option><option>{"Option 2.3"}</option></optgroup></db-select>',children:e.jsxs("db-select",{label:"Selectbox",children:[e.jsxs("optgroup",{label:"Group 1",children:[e.jsx("option",{selected:!0,children:"Option 1.1"}),e.jsx("option",{children:"Option 1.2"}),e.jsx("option",{children:"Option 1.3"})]}),e.jsxs("optgroup",{label:"Group 1",children:[e.jsx("option",{selected:!0,children:"Option 2.1"}),e.jsx("option",{children:"Option 2.2"}),e.jsx("option",{children:"Option 2.3"})]})]})}),`
`,e.jsx("db-headline",{variant:"2",children:"visually hide the label"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`A label for a form control helps everyone better understand its purpose. In some cases, the purpose may be clear enough from the context when the content is rendered visually. The label can be hidden visually, though it still needs to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users.
`,e.jsx("a",{href:"https://www.w3.org/WAI/tutorials/forms/labels/#hiding-label-text",children:"source"})]}),`
`]}),`
`,e.jsxs(t.p,{children:["You could set the attribute ",e.jsx(t.code,{children:'label-hidden="true"'})," for the rare case that you would want to visually hide the textual label for a select element."]}),`
`,e.jsx(i,{name:"XXX",mdxSource:'<db-select label="Semitransparent" label-hidden="true"><option selected>{"Option 1"}</option><option>{"Option 2"}</option><option>{"Option 3"}</option></db-select>',children:e.jsxs("db-select",{label:"Semitransparent","label-hidden":"true",children:[e.jsx("option",{selected:!0,children:"Option 1"}),e.jsx("option",{children:"Option 2"}),e.jsx("option",{children:"Option 3"})]})}),`
`,e.jsx(a,{children:p})]})}function d(n={}){const{wrapper:t}=Object.assign({},l(),n.components);return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const o={title:"05-Data-Input/Select/Intro",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:d};const O=["__page"];export{O as __namedExportsOrder,c as __page,o as default};
