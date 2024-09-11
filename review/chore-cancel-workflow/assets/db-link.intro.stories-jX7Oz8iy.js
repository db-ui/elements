import{M as o,C as r,e as l}from"./chunk-HLWAVYOI-BE7kmZd4.js";import{j as e}from"./jsx-runtime-5LP6FW-m.js";import{u as s}from"./index-CtBUta_o.js";import"./iframe-DkQ0ZBo1.js";import"../sb-preview/runtime.js";import"./index-BZSUm5_z.js";import"./index-DrFu-skq.js";const d='# db-link\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property      | Attribute      | Description                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                       | Default        |\n| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |\n| `current`     | `current`      | The current attribute is the state on an element indicates that this element represents the current item within a container or set of related elements.                                                                                                                                                     | `"date" \\| "false" \\| "location" \\| "page" \\| "step" \\| "time" \\| "true"`                                                                                                                                                                                                                  | `undefined`    |\n| `href`        | `href`         | The href attribute represents a hyperlink (a hypertext anchor).                                                                                                                                                                                                                                             | `string`                                                                                                                                                                                                                                                                                   | `undefined`    |\n| `hreflang`    | `hreflang`     | The hreflang attribute gives the language of the linked resource. The value must be a valid BCP 47 language tag.                                                                                                                                                                                            | `string`                                                                                                                                                                                                                                                                                   | `undefined`    |\n| `icon`        | `icon`         | Define an icon by it\'s identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed in front of the elements content.                                                                                                          | `string`                                                                                                                                                                                                                                                                                   | `undefined`    |\n| `iconVariant` | `icon-variant` | The variant attribute specifies the style and size of an icon.                                                                                                                                                                                                                                              | `"16-filled" \\| "16-outline" \\| "20-filled" \\| "20-outline" \\| "24-filled" \\| "24-outline" \\| "32-filled" \\| "32-outline" \\| "48-filled" \\| "48-outline" \\| "64-filled" \\| "64-outline"`                                                                                                   | `\'24-outline\'` |\n| `icononly`    | `icononly`     | Define the text next to the icon specified via the icon Property to get hidden.                                                                                                                                                                                                                             | `boolean`                                                                                                                                                                                                                                                                                  | `undefined`    |\n| `media`       | `media`        | The media attribute describes for which media the target document was designed. The value must be a valid media query. The default, if the media attribute is omitted, is "all".                                                                                                                            | `string`                                                                                                                                                                                                                                                                                   | `undefined`    |\n| `rel`         | `rel`          | The rel attribute controls what kinds of links the elements create. The attribue\'s value must be a set of space-separated tokens. The allowed keywords and their meanings are defined below.                                                                                                                | `"bookmark" \\| "help" \\| "search" \\| "start" \\| "copyright" \\| "alternate" \\| "appendix" \\| "author" \\| "chapter" \\| "contents" \\| "glossary" \\| "index" \\| "license" \\| "next" \\| "nofollow" \\| "noopener" \\| "noreferrer" \\| "prefetch" \\| "prev" \\| "section" \\| "subsection" \\| "tag"` | `undefined`    |\n| `target`      | `target`       | The target attribute gives the name of the browsing context that will be used. User agents use this name when following hyperlinks.                                                                                                                                                                         | `"_blank" \\| "_parent" \\| "_self" \\| "_top"`                                                                                                                                                                                                                                               | `undefined`    |\n| `text`        | `text`         | The text attribute can be used to set the text inside the anchor tag without slot.                                                                                                                                                                                                                          | `string`                                                                                                                                                                                                                                                                                   | `undefined`    |\n| `type`        | `type`         | The type attribute, if present, gives the MIME type of the linked resource. The value must be a valid MIME type. User agents must not consider the type attribute authoritative — upon fetching the resource, user agents must not use metadata included in the link to the resource to determine its type. | `string`                                                                                                                                                                                                                                                                                   | `undefined`    |\n\n\n## Dependencies\n\n### Depends on\n\n- [db-icon](../db-icon)\n\n### Graph\n```mermaid\ngraph TD;\n  db-link --> db-icon\n  style db-link fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n';function a(t){const n=Object.assign({p:"p",code:"code",a:"a"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"02-Navigation/Link/Intro"}),`
`,e.jsx("db-headline",{variant:"1",children:"<db-link>"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<db-link></db-link>"})," element represents a control. With its href attribute, it creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address. Most of attributes are used in the same way as with a native link. You can try out on ",e.jsx(n.a,{href:"?path=/story/db-link--live-demo",children:"Link Live Demo"})," Page."]}),`
`,e.jsx(r,{mdxSource:'<db-link href="#">{"Link"}</db-link>',children:e.jsx("db-link",{href:"#",children:"Link"})}),`
`,e.jsx("db-headline",{variant:"2",children:"icon"}),`
`,e.jsxs(n.p,{children:["Icons can be used in link to help give their functionality more clarity at a glance. Define an icon by it's identifier (like e.g. download, compare to ",e.jsx(n.a,{href:"https://db-ui.github.io/core/patterns/base-icons/index.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"DB UI Icons"}),")."]}),`
`,e.jsx(r,{mdxSource:'<db-link href="#" icon="alarm"><p>{"Link"}</p></db-link>',children:e.jsx("db-link",{href:"#",icon:"alarm",children:e.jsx(n.p,{children:"Link"})})}),`
`,e.jsx("db-headline",{variant:"2",children:"target"}),`
`,e.jsx(n.p,{children:"The target attribute specifies the browsing context and gives different visual expressions to the link."}),`
`,e.jsxs("p",{children:[e.jsx("b",{children:e.jsx("i",{children:'"_self"'})}),e.jsx(n.p,{children:`is used as default and navigates to a page off your applaciation without
changing the window or tab.`}),e.jsx("br",{}),e.jsx("b",{children:e.jsx("i",{children:'"_blank"'})}),e.jsx(n.p,{children:`is used to navigate to external contents by leaving your application to a new
tab.`})]}),`
`,e.jsxs(r,{mdxSource:'<db-link href="#" target="_self"><p>{"internal"}</p></db-link><db-link href="#" target="_blank"><p>{"external"}</p></db-link>',children:[e.jsx("db-link",{href:"#",target:"_self",children:e.jsx(n.p,{children:"internal"})}),e.jsx("db-link",{href:"#",target:"_blank",children:e.jsx(n.p,{children:"external"})})]}),`
`,e.jsx(l,{children:d})]})}function h(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const i={title:"02-Navigation/Link/Intro",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:h};const k=["__page"];export{k as __namedExportsOrder,c as __page,i as default};
