import{M as d,C as o,e as s}from"./chunk-HLWAVYOI-B0VWs4H9.js";import{j as t}from"./jsx-runtime-DCkiYzCZ.js";import{u as a}from"./index-CAWuDjBQ.js";import"./iframe-BQvglmMw.js";import"../sb-preview/runtime.js";import"./doctrine-CNNg9870.js";import"./index-DrFu-skq.js";const l='# db-button\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                                                                                                                        | Type                                                                                           | Default     |\n| ---------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------- |\n| `ariaexpanded`   | `ariaexpanded`   | If the button controls a grouping of other elements, the ariaexpanded state indicates whether the controlled grouping is currently expanded or collapsed.                                          | `"false" \\| "true"`                                                                            | `null`      |\n| `ariapressed`    | `ariapressed`    | Defines the button as a toggle button. The value of aria-pressed describes the state of the button.                                                                                                | `"false" \\| "true"`                                                                            | `null`      |\n| `disabled`       | `disabled`       | The disabled attribute can be set to keep a user from clicking on the button.                                                                                                                      | `boolean`                                                                                      | `false`     |\n| `formaction`     | `formaction`     | The formaction attribute specifies where to send the form-data when a form is submitted. Only for type="submit".                                                                                   | `string`                                                                                       | `undefined` |\n| `formenctype`    | `formenctype`    | The formenctype attribute specifies how form-data should be encoded before sending it to a server. Only for type="submit".                                                                         | `string`                                                                                       | `undefined` |\n| `formmethod`     | `formmethod`     | The formmethod attribute specifies how to send the form-data (which HTTP method to use). Only for type="submit".                                                                                   | `"get" \\| "post"`                                                                              | `undefined` |\n| `formnovalidate` | `formnovalidate` | The formnovalidate attribute specifies which that the form-data should not be validated on submission. Only for type="submit".                                                                     | `boolean`                                                                                      | `false`     |\n| `formtarget`     | `formtarget`     | The formtarget attribute specifies where to display the response after submitting the form. Only for type="submit".                                                                                | `"_blank" \\| "_parent" \\| "_self" \\| "_top"`                                                   | `undefined` |\n| `icon`           | `icon`           | Define an icon by it\'s identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed in front of the elements content. | `string`                                                                                       | `undefined` |\n| `iconafter`      | `iconafter`      | Define an icon by it\'s identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed behind the elements content.      | `string`                                                                                       | `undefined` |\n| `icononly`       | `icononly`       | Define the text next to the icon specified via the icon Property to get hidden.                                                                                                                    | `boolean`                                                                                      | `undefined` |\n| `name`           | `name`           | The name attribute specifies a name for the button.                                                                                                                                                | `string`                                                                                       | `undefined` |\n| `size`           | `size`           | The size attribute specifies the button size out of three sizes.                                                                                                                                   | `"large" \\| "regular" \\| "small"`                                                              | `undefined` |\n| `tooltip`        | `tooltip`        | The tooltip attribute specifies the title of button.                                                                                                                                               | `string`                                                                                       | `undefined` |\n| `type`           | `type`           | The type attribute specifies the type of button.                                                                                                                                                   | `"button" \\| "reset" \\| "submit"`                                                              | `\'submit\'`  |\n| `value`          | `value`          | The value attribute specifies an initial value for the button.                                                                                                                                     | `string`                                                                                       | `undefined` |\n| `variant`        | `variant`        | The variant attribute specifies a visual expression of button.                                                                                                                                     | `"brand-primary" \\| "primary" \\| "secondary-outline" \\| "secondary-solid" \\| "tertiary-plain"` | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [db-icon](../db-icon)\n\n### Graph\n```mermaid\ngraph TD;\n  db-button --> db-icon\n  style db-button fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n';function r(e){const n=Object.assign({p:"p",code:"code",a:"a"},a(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"03-Action/Button/Intro"}),`
`,t.jsx("db-headline",{variant:"1",children:"<db-button>"}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"<db-button></db-button>"})," element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality. Most of attributes are used in the same way as with a native button. You can try out on ",t.jsx("a",{href:"/story/db-button--live-demo",children:"Button Live Demo"})," Page."]}),`
`,t.jsx(o,{mdxSource:'<db-button>{"Button"}</db-button>',children:t.jsx("db-button",{children:"Button"})}),`
`,t.jsx("db-headline",{variant:"2",children:"variant"}),`
`,t.jsx(n.p,{children:"The variant attribute specifies a visual expression of button."}),`
`,t.jsxs(o,{mdxSource:'<db-button variant="brand-primary">{"Brand Primary"}</db-button><db-button variant="primary">{"Primary"}</db-button><db-button variant="secondary-solid">{"Secondary solid"}</db-button><db-button variant="secondary-outline">{"Secondary Outline"}</db-button><db-button variant="tertiary-plain">{"Tertiary plain"}</db-button>',children:[t.jsx("db-button",{variant:"brand-primary",children:"Brand Primary"}),t.jsx("db-button",{variant:"primary",children:"Primary"}),t.jsx("db-button",{variant:"secondary-solid",children:"Secondary solid"}),t.jsx("db-button",{variant:"secondary-outline",children:"Secondary Outline"}),t.jsx("db-button",{variant:"tertiary-plain",children:"Tertiary plain"})]}),`
`,t.jsx("db-headline",{variant:"2",children:"sizes"}),`
`,t.jsx(n.p,{children:"There are three different sizes of buttons to choose from: small, regular (default), large"}),`
`,t.jsxs(o,{mdxSource:'<db-button variant="primary" size="small">{"Primary small"}</db-button><db-button variant="primary">{"Primary"}</db-button><db-button variant="primary" size="large">{"Primary large"}</db-button>',children:[t.jsx("db-button",{variant:"primary",size:"small",children:"Primary small"}),t.jsx("db-button",{variant:"primary",children:"Primary"}),t.jsx("db-button",{variant:"primary",size:"large",children:"Primary large"})]}),`
`,t.jsx("db-headline",{variant:"2",children:"disabled"}),`
`,t.jsxs(n.p,{children:["Make buttons look inactive by adding the disabled boolean attribute to any ",t.jsx(n.code,{children:"<db-button>"})," element."]}),`
`,t.jsxs(o,{mdxSource:'<db-button variant="primary" disabled>{"Primary"}</db-button><db-button variant="secondary-solid" disabled>{"Secondary Solid"}</db-button><db-button variant="secondary-outline" disabled>{"Secondary Outline"}</db-button>',children:[t.jsx("db-button",{variant:"primary",disabled:!0,children:"Primary"}),t.jsx("db-button",{variant:"secondary-solid",disabled:!0,children:"Secondary Solid"}),t.jsx("db-button",{variant:"secondary-outline",disabled:!0,children:"Secondary Outline"})]}),`
`,t.jsx("db-headline",{variant:"2",children:"icon Position"}),`
`,t.jsxs(n.p,{children:["You could set the icons position – either before or after the text – by using either the ",t.jsx(n.code,{children:"icon"})," or ",t.jsx(n.code,{children:"iconafter"})," attributes and defining an icon by it's identifier (like e.g. download, compare to ",t.jsx(n.a,{href:"https://db-ui.github.io/core/patterns/base-icons/index.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"DB UI Icons"}),")."]}),`
`,t.jsxs(o,{mdxSource:'<db-button variant="primary" icon="download">{"Primary"}</db-button><db-button variant="primary" iconafter="download">{"Primary"}</db-button><db-button variant="secondary-solid" icon="download">{"Secondary solid"}</db-button><db-button variant="secondary-solid" iconafter="download">{"Secondary solid"}</db-button><db-button variant="secondary-outline" icon="download">{"Secondary Outline"}</db-button><db-button variant="secondary-outline" iconafter="download">{"Secondary Outline"}</db-button>',children:[t.jsx("db-button",{variant:"primary",icon:"download",children:"Primary"}),t.jsx("db-button",{variant:"primary",iconafter:"download",children:"Primary"}),t.jsx("db-button",{variant:"secondary-solid",icon:"download",children:"Secondary solid"}),t.jsx("db-button",{variant:"secondary-solid",iconafter:"download",children:"Secondary solid"}),t.jsx("db-button",{variant:"secondary-outline",icon:"download",children:"Secondary Outline"}),t.jsx("db-button",{variant:"secondary-outline",iconafter:"download",children:"Secondary Outline"})]}),`
`,t.jsx("db-headline",{variant:"2",children:"icononly (only use with care)"}),`
`,t.jsxs(n.p,{children:["If you'd only like to display the icon without any text, you could set the attribute ",t.jsx(n.code,{children:"icononly"})," on the button component. But please keep in mind that a visual text ensures clarity on the subject of this button as well enables use cases like controlling the page by voice (accessibility)."]}),`
`,t.jsxs(o,{mdxSource:'<db-button variant="primary" icon="download" icononly>{"Button"}</db-button><db-button variant="secondary-solid" icon="download" icononly>{"Button"}</db-button><db-button variant="secondary-outline" icon="download" icononly>{"Button"}</db-button>',children:[t.jsx("db-button",{variant:"primary",icon:"download",icononly:!0,children:"Button"}),t.jsx("db-button",{variant:"secondary-solid",icon:"download",icononly:!0,children:"Button"}),t.jsx("db-button",{variant:"secondary-outline",icon:"download",icononly:!0,children:"Button"})]}),`
`,t.jsx(s,{children:l})]})}function b(e={}){const{wrapper:n}=Object.assign({},a(),e.components);return n?t.jsx(n,{...e,children:t.jsx(r,{...e})}):r(e)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const i={title:"03-Action/Button/Intro",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:b};const v=["__page"];export{v as __namedExportsOrder,c as __page,i as default};
