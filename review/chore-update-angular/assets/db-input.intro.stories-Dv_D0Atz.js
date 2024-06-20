import{M as s,C as n,e as o}from"./chunk-HLWAVYOI-3NzLQDU3.js";import{j as e}from"./jsx-runtime-ksGqeha-.js";import{u as r}from"./index-DTTS-Jem.js";import"./iframe-pqs2-D5R.js";import"../sb-preview/runtime.js";import"./doctrine-CNNg9870.js";import"./index-DrFu-skq.js";const d='# db-input\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property             | Attribute      | Description                                                                                                                                                                                                                                                                | Type                                                   | Default             |\n| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------- |\n| `ariainvalid`        | `ariainvalid`  | The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application.                                                                                                                       | `"false" \\| "grammar" \\| "spelling" \\| "true"`         | `null`              |\n| `ariarequired`       | `ariarequired` | The ariarequired attribute can be applied to a form element, to indicate to an AT that it is required to complete the form.                                                                                                                                                | `"false" \\| "true"`                                    | `null`              |\n| `autocomplete`       | `autocomplete` | User agents sometimes have features for helping users fill forms in, for example prefilling the user\'s address based on earlier user input.                                                                                                                                | `"off" \\| "on"`                                        | `null`              |\n| `autofocus`          | `autofocus`    | The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.                                                     | `boolean`                                              | `false`             |\n| `description`        | `description`  | The description attribute specifies the description/hint of the input.                                                                                                                                                                                                     | `string`                                               | `undefined`         |\n| `dirname`            | `dirname`      | The dirname attribute on a form control element enables the submission of the directionality of the element, and gives the name of the control that contains this value during form submission. If such an attribute is specified, its value must not be the empty string. | `string`                                               | `undefined`         |\n| `disabled`           | `disabled`     | The disabled attribute can be set to keep a user from clicking on the input.                                                                                                                                                                                               | `boolean`                                              | `false`             |\n| `input_id`           | `input_id`     | The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element.              | `string`                                               | `\'input-\' + uuid()` |\n| `label` _(required)_ | `label`        | The label attribute specifies the caption of the input.                                                                                                                                                                                                                    | `string`                                               | `undefined`         |\n| `labelHidden`        | `label-hidden` | The label-hidden attribute is a boolean attribute. When specified, the elements label gets visually hidden (it\'s important to still keep it displayed for accessibility reasons).                                                                                          | `string`                                               | `undefined`         |\n| `list`               | `list`         | The list attribute is used to identify an element that lists predefined options suggested to the user.                                                                                                                                                                     | `string`                                               | `undefined`         |\n| `max`                | `max`          | The max attribute specifies the maximum value that is sufficient for this input.                                                                                                                                                                                           | `number`                                               | `undefined`         |\n| `maxlength`          | `maxlength`    | /* The maxlength attribute, controlled by a dirty value flag, declares a limit on the number of characters a user can input.                                                                                                                                               | `number`                                               | `undefined`         |\n| `min`                | `min`          | The min attribute specifies the minimum value that is sufficient for this input.                                                                                                                                                                                           | `number`                                               | `undefined`         |\n| `minlength`          | `minlength`    | /* The minlength attribute, when it applies, is a form control minlength attribute.                                                                                                                                                                                        | `number`                                               | `undefined`         |\n| `name`               | `name`         | The name content attribute gives the name of the form control, as used in form submission and in the form element\'s elements object. If the attribute is specified, its value must not be the empty string.                                                                | `string`                                               | `undefined`         |\n| `pattern`            | `pattern`      | The pattern attribute specifies a regular expression against which the control\'s value is to be checked.                                                                                                                                                                   | `string`                                               | `undefined`         |\n| `placeholder`        | `placeholder`  | The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry.                                                                                                                                                       | `string`                                               | `undefined`         |\n| `readonly`           | `readonly`     | The readonly attribute controls whether or not the user can edit the form control.                                                                                                                                                                                         | `boolean`                                              | `undefined`         |\n| `required`           | `required`     | The required attribute is a boolean attribute. When specified, the element is required.                                                                                                                                                                                    | `boolean`                                              | `undefined`         |\n| `size`               | `size`         | The size attribute gives the number of characters that, in a visual rendering, the user agent is to allow the user to see while editing the element\'s value.                                                                                                               | `number`                                               | `undefined`         |\n| `step`               | `step`         | The step attribute specifies the granularity that the value must obey to on increasing or decreasing by the users selection.                                                                                                                                               | `number`                                               | `undefined`         |\n| `type`               | `type`         | The type attribute changes the input type to text, number etc.                                                                                                                                                                                                             | `string`                                               | `\'text\'`            |\n| `value`              | `value`        | The value content attribute gives the default value of the input element.                                                                                                                                                                                                  | `string`                                               | `undefined`         |\n| `variant`            | `variant`      | The variant attribute specifies a visual expression of a select.                                                                                                                                                                                                           | `"outline" \\| "semitransparent" \\| "solid" \\| "white"` | `\'semitransparent\'` |\n\n\n## Events\n\n| Event      | Description                      | Type               |\n| ---------- | -------------------------------- | ------------------ |\n| `dbChange` | Mapping for default change Event | `CustomEvent<any>` |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n';function l(i){const t=Object.assign({p:"p",blockquote:"blockquote",code:"code"},r(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"05-Data-Input/Input/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-input>"}),`
`,e.jsxs(t.p,{children:["The input element represents a one line plain text edit control for the element's value. Most of attributes are used in the same way as with a native input. You can try out on ",e.jsx("a",{href:"/story/db-input--live-demo",children:"Input Live Demo"})," Page."]}),`
`,e.jsxs(n,{mdxSource:'<db-input label="Semitransparent" /><db-input label="White" variant="white" /><db-input label="Solid" variant="solid" /><db-input label="Outline" variant="outline" />',children:[e.jsx("db-input",{label:"Semitransparent"}),e.jsx("db-input",{label:"White",variant:"white"}),e.jsx("db-input",{label:"Solid",variant:"solid"}),e.jsx("db-input",{label:"Outline",variant:"outline"})]}),`
`,e.jsx("db-headline",{variant:"2",children:"disabled"}),`
`,e.jsx(t.p,{children:"Make inputs look inactive by adding the disabled boolean attribute to any <db-input> element."}),`
`,e.jsx(n,{mdxSource:'<db-input label="Inputfield" disabled />',children:e.jsx("db-input",{label:"Inputfield",disabled:!0})}),`
`,e.jsx("db-headline",{variant:"2",children:"description/ hint"}),`
`,e.jsx(t.p,{children:"Add a description below the <db-input> element."}),`
`,e.jsx(n,{mdxSource:'<db-input label="Inputfield" description="A clue, a clue" />',children:e.jsx("db-input",{label:"Inputfield",description:"A clue, a clue"})}),`
`,e.jsx("db-headline",{variant:"2",children:"validation"}),`
`,e.jsx(t.p,{children:"Shows validation on the <db-input> element, needs required attribute."}),`
`,e.jsxs(n,{mdxSource:'<db-input label="Inputfield" value="Valid" required minlength={3} /><db-input label="Inputfield" required minlength={3} />',children:[e.jsx("db-input",{label:"Inputfield",value:"Valid",required:!0,minlength:3}),e.jsx("db-input",{label:"Inputfield",required:!0,minlength:3})]}),`
`,e.jsx("db-headline",{variant:"2",children:"Other types"}),`
`,e.jsxs(n,{mdxSource:'<db-input label="Color" type="color" description="Only colors are allowed" /><db-input label="Email" type="email" description="Only emails are allowed" /><db-input label="Password" type="password" description="Only passwords are allowed" /><db-input label="Number" type="number" description="Only numbers are allowed" /><db-input label="Date" type="date" description="Only dates are allowed" /><db-input label="Month" type="month" description="Only months are allowed" /><db-input label="Week" type="week" description="Only weeks are allowed" /><db-input label="Time" type="time" description="Only times are allowed" />',children:[e.jsx("db-input",{label:"Color",type:"color",description:"Only colors are allowed"}),e.jsx("db-input",{label:"Email",type:"email",description:"Only emails are allowed"}),e.jsx("db-input",{label:"Password",type:"password",description:"Only passwords are allowed"}),e.jsx("db-input",{label:"Number",type:"number",description:"Only numbers are allowed"}),e.jsx("db-input",{label:"Date",type:"date",description:"Only dates are allowed"}),e.jsx("db-input",{label:"Month",type:"month",description:"Only months are allowed"}),e.jsx("db-input",{label:"Week",type:"week",description:"Only weeks are allowed"}),e.jsx("db-input",{label:"Time",type:"time",description:"Only times are allowed"})]}),`
`,e.jsx("db-headline",{variant:"2",children:"Search"}),`
`,e.jsx(n,{mdxSource:'<db-input label="Inputfield" type="search" placeholder="Search me" />',children:e.jsx("db-input",{label:"Inputfield",type:"search",placeholder:"Search me"})}),`
`,e.jsx("db-headline",{variant:"2",children:"list"}),`
`,e.jsx(t.p,{children:"The list attribute connects the input with a set of options that represent predefined options in a datalist element used for the input field."}),`
`,e.jsx(n,{mdxSource:'<db-input label="Inputfield" list="datalist"><option value="Value 1">{"Option 1"}</option><option value="Value 2">{"Option 2"}</option><option value="Value 3">{"Option 3"}</option></db-input>',children:e.jsxs("db-input",{label:"Inputfield",list:"datalist",children:[e.jsx("option",{value:"Value 1",children:"Option 1"}),e.jsx("option",{value:"Value 2",children:"Option 2"}),e.jsx("option",{value:"Value 3",children:"Option 3"})]})}),`
`,e.jsx("db-headline",{variant:"2",children:"visually hide the label"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"A label for a form control helps everyone better understand its purpose. In some cases, the purpose may be clear enough from the context when the content is rendered visually. The label can be hidden visually, though it still needs to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users."}),`
`,e.jsx("a",{href:"https://www.w3.org/WAI/tutorials/forms/labels/#hiding-label-text",children:e.jsx(t.p,{children:"source"})}),`
`]}),`
`,e.jsxs(t.p,{children:["You could set the attribute ",e.jsx(t.code,{children:'label-hidden="true"'})," for the rare case that you would want to visually hide the textual label for a input element."]}),`
`,e.jsx(n,{mdxSource:'<db-input label="Semitransparent" label-hidden="true" />',children:e.jsx("db-input",{label:"Semitransparent","label-hidden":"true"})}),`
`,e.jsx("db-headline",{variant:"2",children:"maxlength with counter"}),`
`,e.jsx(t.p,{children:"On providing the maxlength attribute, a counter will be shown below the input field."}),`
`,e.jsx(n,{mdxSource:'<db-input label="maxlength example" maxlength="100" />',children:e.jsx("db-input",{label:"maxlength example",maxlength:"100"})}),`
`,e.jsx(o,{children:d})]})}function u(i={}){const{wrapper:t}=Object.assign({},r(),i.components);return t?e.jsx(t,{...i,children:e.jsx(l,{...i})}):l(i)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const a={title:"05-Data-Input/Input/Intro",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:u};const g=["__page"];export{g as __namedExportsOrder,p as __page,a as default};
