import{M as r,C as a,e as l}from"./chunk-HLWAVYOI-Cxu_XgQV.js";import{j as e}from"./jsx-runtime-CTBbUjEl.js";import{u as s}from"./index-C1y0GUNE.js";import"./iframe-DwiwNQkR.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const d="# db-checkbox\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property             | Attribute       | Description                                                                                                                                                                                                                                                   | Type      | Default                |\n| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------- |\n| `autofocus`          | `autofocus`     | The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.                                        | `boolean` | `undefined`            |\n| `checked`            | `checked`       | The checked content attribute is a boolean attribute that gives the default checkedness of the input element.                                                                                                                                                 | `boolean` | `undefined`            |\n| `disabled`           | `disabled`      | The disabled attribute can be set to keep a user from clicking on the input.                                                                                                                                                                                  | `boolean` | `undefined`            |\n| `indeterminate`      | `indeterminate` | The indeterminate attribute is a boolean attribute. When specified, the element is displayed in an indeterminate state (neither checked, nor unchecked).                                                                                                      | `boolean` | `undefined`            |\n| `input_id`           | `input_id`      | The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element. | `string`  | `'checkbox-' + uuid()` |\n| `label` _(required)_ | `label`         | The label attribute specifies the caption of the input.                                                                                                                                                                                                       | `string`  | `undefined`            |\n| `labelHidden`        | `label-hidden`  | The label-hidden attribute is a boolean attribute. When specified, the elements label gets visually hidden (it's important to still keep it displayed for accessibility reasons).                                                                             | `string`  | `undefined`            |\n| `name` _(required)_  | `name`          | The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.                                                   | `string`  | `undefined`            |\n| `required`           | `required`      | The required attribute is a boolean attribute. When specified, the element is required.                                                                                                                                                                       | `boolean` | `undefined`            |\n| `value`              | `value`         | The value content attribute gives the default value of the input element.                                                                                                                                                                                     | `string`  | `undefined`            |\n\n\n## Events\n\n| Event      | Description                      | Type               |\n| ---------- | -------------------------------- | ------------------ |\n| `dbChange` | Mapping for default change Event | `CustomEvent<any>` |\n\n\n## Methods\n\n### `setIndeterminate(bool: boolean) => Promise<void>`\n\nMethod that acceps a boolean and sets the indeterminate state of the checkbox accordingly.\n\n#### Parameters\n\n| Name   | Type      | Description |\n| ------ | --------- | ----------- |\n| `bool` | `boolean` |             |\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n";function i(n){const t=Object.assign({p:"p",code:"code",blockquote:"blockquote"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"05-Data-Input/Checkbox/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-checkbox>"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<db-checkbox></db-checkbox>"})," represents a two-state control that represents the element's checkedness state. If the element's checkedness state is true, the control represents a positive selection, and if it is false, a negative selection."]}),`
`,e.jsxs(t.p,{children:["Most attributes are used in the same way as with a native checkbox. You can try out on ",e.jsx("a",{href:"/story/db-checkbox--live-demo",children:"Checkbox Live Demo"})," Page."]}),`
`,e.jsx(a,{mdxSource:'<db-checkbox label="Checkbox" />',children:e.jsx("db-checkbox",{label:"Checkbox"})}),`
`,e.jsx("db-headline",{variant:"2",children:"disabled"}),`
`,e.jsx(t.p,{children:"Make checkbox look inactive by adding the disabled boolean attribute to any <db-checkbox> element."}),`
`,e.jsx(a,{mdxSource:'<db-checkbox label="Checkbox" disabled />',children:e.jsx("db-checkbox",{label:"Checkbox",disabled:!0})}),`
`,e.jsx("db-headline",{variant:"2",children:"indeterminate"}),`
`,e.jsx(t.p,{children:"Make checkbox look like in an indeterminate state by adding the 'indeterminate' boolean attribute to any <db-checkbox> element."}),`
`,e.jsx(a,{mdxSource:'<db-checkbox label="Checkbox" indeterminate="true" />',children:e.jsx("db-checkbox",{label:"Checkbox",indeterminate:"true"})}),`
`,e.jsxs(t.p,{children:["Alternatively, one can directly call ",e.jsx(t.code,{children:"<db-checkbox>.setIndeterminate(boolean)"})," on the web component to set the state indeterminate state of the checkbox via JavaScript."]}),`
`,e.jsx("db-headline",{variant:"2",children:"visually hide the label"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`A label for a form control helps everyone better understand its purpose. In some cases, the purpose may be clear enough from the context when the content is rendered visually. The label can be hidden visually, though it still needs to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users.
`,e.jsx("a",{href:"https://www.w3.org/WAI/tutorials/forms/labels/#hiding-label-text",children:"source"})]}),`
`]}),`
`,e.jsxs(t.p,{children:["You could set the attribute ",e.jsx(t.code,{children:'label-hidden="true"'})," for the rare case that you would want to visually hide the textual label for a checkbox element."]}),`
`,e.jsx(a,{mdxSource:'<db-checkbox label="Checkbox" label-hidden="true" />',children:e.jsx("db-checkbox",{label:"Checkbox","label-hidden":"true"})}),`
`,e.jsx(l,{children:d})]})}function c(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const o={title:"05-Data-Input/Checkbox/Intro",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:c};const j=["__page"];export{j as __namedExportsOrder,h as __page,o as default};
