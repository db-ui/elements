import{M as s,C as i,e as d}from"./chunk-HLWAVYOI-BaA1M1hb.js";import{j as e}from"./jsx-runtime-BdcwAWtK.js";import{u as r}from"./index-BCk5NHTx.js";import"./iframe-DufaNlGy.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const l="# db-radio\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property             | Attribute      | Description                                                                                                                                                                                                                                                   | Type      | Default             |\n| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------- |\n| `autofocus`          | `autofocus`    | The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.                                        | `boolean` | `undefined`         |\n| `checked`            | `checked`      | The checked content attribute is a boolean attribute that gives the default checkedness of the input element.                                                                                                                                                 | `boolean` | `undefined`         |\n| `disabled`           | `disabled`     | The disabled attribute can be set to keep a user from clicking on the input.                                                                                                                                                                                  | `boolean` | `undefined`         |\n| `input_id`           | `input_id`     | The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element. | `string`  | `'radio-' + uuid()` |\n| `label` _(required)_ | `label`        | The label attribute specifies the caption of the input.                                                                                                                                                                                                       | `string`  | `undefined`         |\n| `labelHidden`        | `label-hidden` | The label-hidden attribute is a boolean attribute. When specified, the elements label gets visually hidden (it's important to still keep it displayed for accessibility reasons).                                                                             | `string`  | `undefined`         |\n| `name` _(required)_  | `name`         | The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.                                                   | `string`  | `undefined`         |\n| `required`           | `required`     | The required attribute is a boolean attribute. When specified, the element is required.                                                                                                                                                                       | `boolean` | `undefined`         |\n| `value`              | `value`        | The value content attribute gives the default value of the input element.                                                                                                                                                                                     | `string`  | `undefined`         |\n\n\n## Events\n\n| Event      | Description                      | Type               |\n| ---------- | -------------------------------- | ------------------ |\n| `dbChange` | Mapping for default change Event | `CustomEvent<any>` |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n";function o(n){const t=Object.assign({p:"p",code:"code",blockquote:"blockquote"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"05-Data-Input/Radio/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-radio>"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<db-radio></db-radio>"})," represents a control that, when used in conjunction with other input elements, forms a radio button group in which only one control can have its checkedness state set to true. If the element's checkedness state is true, the control represents the selected control in the group, and if it is false, it indicates a control in the group that is not selected."]}),`
`,e.jsxs(t.p,{children:["Most attributes are used in the same way as with a native radio. You can try out on ",e.jsx("a",{href:"/story/db-radio--live-demo",children:"Radio Live Demo"})," Page."]}),`
`,e.jsxs(i,{mdxSource:'<db-radio label="Radio-01" value="radio-01" /><db-radio label="Radio-02" value="radio-02" />',children:[e.jsx("db-radio",{label:"Radio-01",value:"radio-01"}),e.jsx("db-radio",{label:"Radio-02",value:"radio-02"})]}),`
`,e.jsx("db-headline",{variant:"2",children:"disabled"}),`
`,e.jsx(t.p,{children:"Make radios look inactive by adding the disabled boolean attribute to any <db-radio> element."}),`
`,e.jsx(i,{mdxSource:'<db-radio label="Radio" disabled />',children:e.jsx("db-radio",{label:"Radio",disabled:!0})}),`
`,e.jsx("db-headline",{variant:"2",children:"visually hide the label"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`A label for a form control helps everyone better understand its purpose. In some cases, the purpose may be clear enough from the context when the content is rendered visually. The label can be hidden visually, though it still needs to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users.
`,e.jsx("a",{href:"https://www.w3.org/WAI/tutorials/forms/labels/#hiding-label-text",children:"source"})]}),`
`]}),`
`,e.jsxs(t.p,{children:["You could set the attribute ",e.jsx(t.code,{children:'label-hidden="true"'})," for the rare case that you would want to visually hide the textual label for a radio element."]}),`
`,e.jsx(i,{mdxSource:'<db-radio label="Radio-01" value="radio-01" label-hidden="true" />',children:e.jsx("db-radio",{label:"Radio-01",value:"radio-01","label-hidden":"true"})}),`
`,e.jsx(d,{children:l})]})}function u(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const a={title:"05-Data-Input/Radio/Intro",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:u};const v=["__page"];export{v as __namedExportsOrder,h as __page,a as default};
