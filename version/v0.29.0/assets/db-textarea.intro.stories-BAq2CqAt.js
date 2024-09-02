import{M as s,C as n,e as o}from"./chunk-HLWAVYOI-uBFMaKF5.js";import{j as e}from"./jsx-runtime-CGMWWs6g.js";import{u as l}from"./index-CH-8LGKR.js";import"./iframe-BAJC805g.js";import"../sb-preview/runtime.js";import"./index-C-frfP5L.js";import"./index-DrFu-skq.js";const d='# db-textarea\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property             | Attribute      | Description                                                                                                                                                                                                                                                                | Type                                                   | Default                |\n| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ---------------------- |\n| `ariainvalid`        | `ariainvalid`  | The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application.                                                                                                                       | `"false" \\| "grammar" \\| "spelling" \\| "true"`         | `undefined`            |\n| `ariarequired`       | `ariarequired` | The ariarequired attribute can be applied to a form element, to indicate to an AT that it is required to complete the form.                                                                                                                                                | `"false" \\| "true"`                                    | `undefined`            |\n| `autofocus`          | `autofocus`    | The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.                                                     | `boolean`                                              | `undefined`            |\n| `cols`               | `cols`         | The cols attribute specifies the expected maximum number of characters per line.                                                                                                                                                                                           | `number`                                               | `undefined`            |\n| `description`        | `description`  | The description attribute specifies the description/hint of the textarea.                                                                                                                                                                                                  | `string`                                               | `undefined`            |\n| `dirname`            | `dirname`      | The dirname attribute on a form control element enables the submission of the directionality of the element, and gives the name of the control that contains this value during form submission. If such an attribute is specified, its value must not be the empty string. | `string`                                               | `undefined`            |\n| `disabled`           | `disabled`     | The disabled attribute can be set to keep a user from clicking on the input.                                                                                                                                                                                               | `boolean`                                              | `undefined`            |\n| `input_id`           | `input_id`     | The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element.              | `string`                                               | `\'textarea-\' + uuid()` |\n| `label` _(required)_ | `label`        | The label attribute specifies the caption of the input.                                                                                                                                                                                                                    | `string`                                               | `undefined`            |\n| `labelHidden`        | `label-hidden` | The label-hidden attribute is a boolean attribute. When specified, the elements label gets visually hidden (it\'s important to still keep it displayed for accessibility reasons).                                                                                          | `string`                                               | `undefined`            |\n| `maxlength`          | `maxlength`    | /* The maxlength attribute, controlled by a dirty value flag, declares a limit on the number of characters a user can input.                                                                                                                                               | `number`                                               | `undefined`            |\n| `minlength`          | `minlength`    | /* The minlength attribute, when it applies, is a form control minlength attribute.                                                                                                                                                                                        | `number`                                               | `undefined`            |\n| `name` _(required)_  | `name`         | The name content attribute gives the name of the form control, as used in form submission and in the form element\'s elements object. If the attribute is specified, its value must not be the empty string.                                                                | `string`                                               | `undefined`            |\n| `placeholder`        | `placeholder`  | The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry.                                                                                                                                                       | `string`                                               | `undefined`            |\n| `readonly`           | `readonly`     | The readonly attribute controls whether or not the user can edit the form control.                                                                                                                                                                                         | `boolean`                                              | `undefined`            |\n| `required`           | `required`     | The required attribute is a boolean attribute. When specified, the element is required.                                                                                                                                                                                    | `boolean`                                              | `undefined`            |\n| `rows`               | `rows`         | The rows attribute specifies the number of lines to show.                                                                                                                                                                                                                  | `number`                                               | `undefined`            |\n| `value`              | `value`        | The value attribute reflects the changes to the textarea which are also emitted via event                                                                                                                                                                                  | `string`                                               | `undefined`            |\n| `variant`            | `variant`      | The variant attribute specifies a visual expression of a select.                                                                                                                                                                                                           | `"outline" \\| "semitransparent" \\| "solid" \\| "white"` | `\'semitransparent\'`    |\n| `wrap`               | `wrap`         | The wrap attribute indicates how the control wraps text.                                                                                                                                                                                                                   | `"hard" \\| "off " \\| "soft"`                           | `undefined`            |\n\n\n## Events\n\n| Event      | Description                      | Type               |\n| ---------- | -------------------------------- | ------------------ |\n| `dbChange` | Mapping for default change Event | `CustomEvent<any>` |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n';function r(a){const t=Object.assign({p:"p",blockquote:"blockquote",code:"code"},l(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"05-Data-Input/Textarea/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-textarea>"}),`
`,e.jsxs(t.p,{children:["The textarea element represents a multiline plain text edit control. Most of attributes are used in the same way as with a native textarea. You can try out on ",e.jsx("a",{href:"/story/db-textarea--live-demo",children:"Textarea Live Demo"})," Page."]}),`
`,e.jsxs(n,{mdxSource:'<db-textarea label="Semitransparent" /><db-textarea label="White" variant="white" /><db-textarea label="Outline" variant="outline" /><db-textarea label="Solid" variant="solid" />',children:[e.jsx("db-textarea",{label:"Semitransparent"}),e.jsx("db-textarea",{label:"White",variant:"white"}),e.jsx("db-textarea",{label:"Outline",variant:"outline"}),e.jsx("db-textarea",{label:"Solid",variant:"solid"})]}),`
`,e.jsx("db-headline",{children:"disabled"}),`
`,e.jsx(t.p,{children:"Make textareas look inactive by adding the disabled boolean attribute to any <db-textarea> element."}),`
`,e.jsx(n,{mdxSource:'<db-textarea label="Textarea" disabled />',children:e.jsx("db-textarea",{label:"Textarea",disabled:!0})}),`
`,e.jsx("db-headline",{children:"maxLength"}),`
`,e.jsx(n,{mdxSource:'<db-textarea label="Textarea" maxlength="200" />',children:e.jsx("db-textarea",{label:"Textarea",maxlength:"200"})}),`
`,e.jsx("db-headline",{children:"description/hint"}),`
`,e.jsx(n,{mdxSource:`<db-textarea label="Textarea" maxlength="200" description="I am a hint"><p>{"I'm a filler"}</p></db-textarea>`,children:e.jsx("db-textarea",{label:"Textarea",maxlength:"200",description:"I am a hint",children:e.jsx(t.p,{children:"I'm a filler"})})}),`
`,e.jsx("db-headline",{children:"Validation, needs required as attribute"}),`
`,e.jsxs(n,{mdxSource:`<db-textarea label="Textarea" minlength="5" required><p>{"I'm a filler"}</p></db-textarea><db-textarea label="Textarea" minlength="20" required />`,children:[e.jsx("db-textarea",{label:"Textarea",minlength:"5",required:!0,children:e.jsx(t.p,{children:"I'm a filler"})}),e.jsx("db-textarea",{label:"Textarea",minlength:"20",required:!0})]}),`
`,e.jsx("db-headline",{variant:"2",children:"visually hide the label"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`A label for a form control helps everyone better understand its purpose. In some cases, the purpose may be clear enough from the context when the content is rendered visually. The label can be hidden visually, though it still needs to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users.
`,e.jsx("a",{href:"https://www.w3.org/WAI/tutorials/forms/labels/#hiding-label-text",children:"source"})]}),`
`]}),`
`,e.jsxs(t.p,{children:["You could set the attribute ",e.jsx(t.code,{children:'label-hidden="true"'})," for the rare case that you would want to visually hide the textual label for a textarea element."]}),`
`,e.jsx(n,{mdxSource:'<db-textarea label="Semitransparent" label-hidden="true" />',children:e.jsx("db-textarea",{label:"Semitransparent","label-hidden":"true"})}),`
`,e.jsx(o,{children:d})]})}function h(a={}){const{wrapper:t}=Object.assign({},l(),a.components);return t?e.jsx(t,{...a,children:e.jsx(r,{...a})}):r(a)}const u=()=>{throw new Error("Docs-only story")};u.parameters={docsOnly:!0};const i={title:"05-Data-Input/Textarea/Intro",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:h};const v=["__page"];export{v as __namedExportsOrder,u as __page,i as default};