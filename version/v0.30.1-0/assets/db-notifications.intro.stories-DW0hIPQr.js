import{M as a,C as e,e as c}from"./chunk-HLWAVYOI-zrBjNT3i.js";import{j as i}from"./jsx-runtime-DTJylJEH.js";import{u as r}from"./index-BlF09UKa.js";import"./iframe-dSOcri_E.js";import"../sb-preview/runtime.js";import"./doctrine-CNNg9870.js";import"./index-DrFu-skq.js";const d=`# db-notifications



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                             | Type                      | Default      |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------ |
| \`arialive\` | \`arialive\` | The arialive attribute will interrupt the screenreader immediately and read out the notification if set to "assertive", while it will wait for the user's idleness when set to "polite" | \`"assertive" \\| "polite"\` | \`'polite'\`   |
| \`variant\`  | \`variant\`  | Notifications have two variants ("hovering" and "alert") which change the styling.                                                                                                      | \`"alert" \\| "hovering"\`   | \`'hovering'\` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function s(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",h4:"h4",hr:"hr",code:"code"},r(),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(a,{title:"06-Feedback/Notification/Intro"}),`
`,i.jsx(t.h1,{id:"db-notificationsgt",children:"<db-notifications&gt"}),`
`,i.jsx(t.p,{children:"The Notification component"}),`
`,i.jsx(t.h2,{id:"best-practices",children:"Best practices"}),`
`,i.jsx(t.p,{children:"Best practice, research insights and examples: https://gerireid.com/forms.html#notifications"}),`
`,i.jsx(t.h3,{id:"accessibility",children:"Accessibility"}),`
`,i.jsx(t.p,{children:"Notifications are intended to be small interruptions to your visitors or users, so to help those with screen readers and similar assistive technologies, you should wrap your notifications in an aria-live region. Changes to live regions (such as injecting/updating a notification component) are automatically announced by screen readers without needing to move the user’s focus or otherwise interrupt the user."}),`
`,i.jsx(t.p,{children:`Additionally, if you'd like to update existing notifications incrementally, include aria-atomic="true" to ensure that the entire notification is always announced as a single (atomic) unit, rather than announcing what was changed (which could lead to problems if you only update part of the notification’s content, or if displaying the same notification content at a later point in time). It's still recommended to remove and add cmp-notification components as a whole within the section.`}),`
`,i.jsx(t.p,{children:"Note that the live region needs to be present in the markup before the notification is generated or updated. If you dynamically generate both at the same time and inject them into the page, they will generally not be announced by assistive technologies."}),`
`,i.jsx(t.p,{children:'You also need to adapt the role and aria-live level depending on the content. If it’s an important message like an error, use role="alert" and aria-live="assertive", otherwise use role="status" and aria-live="polite" attributes.'}),`
`,i.jsx(t.p,{children:"Adapted from https://getbootstrap.com/docs/4.3/components/toasts/"}),`
`,i.jsx(t.h4,{id:"live-regions",children:"Live regions"}),`
`,i.jsx(t.p,{children:"Live regions are perceivable regions of a web page that are typically updated as a result of an external event when user focus may be elsewhere. These regions are not always updated as a result of a user interaction. This practice has become commonplace with the growing use of Ajax. Examples of live regions include a chat log, stock ticker, or a sport scoring section that updates periodically to reflect game statistics. Since these asynchronous areas are expected to update outside the user's area of focus, assistive technologies such as screen readers have either been unaware of their existence or unable to process them for the user. WAI-ARIA has provided a collection of properties that allow the author to identify these live regions and process them: aria-live, aria-relevant, aria-atomic, and aria-busy."}),`
`,i.jsx(t.p,{children:"Source: https://www.w3.org/TR/wai-aria/#terms"}),`
`,i.jsx(t.h4,{id:"conveying-meaning-to-assistive-technologies",children:"Conveying meaning to assistive technologies"}),`
`,i.jsx(t.p,{children:"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional visibly hidden text."}),`
`,i.jsx(t.p,{children:"Source: https://getbootstrap.com/docs/4.3/components/alerts/"}),`
`,i.jsx(t.hr,{}),`
`,i.jsx(t.h2,{id:"regular-notification",children:"Regular notification:"}),`
`,i.jsxs(e,{mdxSource:'<db-notifications variant="alert"><db-notification><p>{"regular: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification><db-notification type="informative"><p>{"informative: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification><db-notification type="success"><p>{"success: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications><db-notifications variant="alert" arialive="assertive"><db-notification type="error"><p>{"error: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification><db-notification type="warning"><p>{"warning: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications>',children:[i.jsxs("db-notifications",{variant:"alert",children:[i.jsx("db-notification",{children:i.jsx(t.p,{children:"regular: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})}),i.jsx("db-notification",{type:"informative",children:i.jsx(t.p,{children:"informative: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})}),i.jsx("db-notification",{type:"success",children:i.jsx(t.p,{children:"success: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})})]}),i.jsxs("db-notifications",{variant:"alert",arialive:"assertive",children:[i.jsx("db-notification",{type:"error",children:i.jsx(t.p,{children:"error: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})}),i.jsx("db-notification",{type:"warning",children:i.jsx(t.p,{children:"warning: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})})]})]}),`
`,i.jsx(t.h2,{id:"regular-with-leading-icon",children:"Regular with leading icon:"}),`
`,i.jsxs(t.p,{children:["For prefixing an element before the main child element one can use ",i.jsx(t.code,{children:'slot="prenotification"'}),"."]}),`
`,i.jsx(e,{mdxSource:'<db-notifications variant="alert"><db-notification><db-icon slot="prenotification" icon="account" variant="20-outline" /><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications>',children:i.jsx("db-notifications",{variant:"alert",children:i.jsxs("db-notification",{children:[i.jsx("db-icon",{slot:"prenotification",icon:"account",variant:"20-outline"}),i.jsx(t.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"})]})})}),`
`,i.jsx(t.h2,{id:"regular-with-trailing-icon",children:"Regular with trailing icon:"}),`
`,i.jsxs(t.p,{children:["For postfixing an elements after the main child element one can use ",i.jsx(t.code,{children:'slot="postnotification"'}),"."]}),`
`,i.jsx(e,{mdxSource:'<db-notifications variant="alert"><db-notification><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p><db-icon slot="postnotification" icon="close" variant="20-outline" /></db-notification></db-notifications>',children:i.jsx("db-notifications",{variant:"alert",children:i.jsxs("db-notification",{children:[i.jsx(t.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}),i.jsx("db-icon",{slot:"postnotification",icon:"close",variant:"20-outline"})]})})}),`
`,i.jsx(t.h2,{id:"hovering",children:"Hovering"}),`
`,i.jsx(e,{mdxSource:'<db-notifications variant="hovering"><db-notification type="success"><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications>',children:i.jsx("db-notifications",{variant:"hovering",children:i.jsx("db-notification",{type:"success",children:i.jsx(t.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"})})})}),`
`,i.jsx(t.h2,{id:"error-notification",children:"Error notification:"}),`
`,i.jsx(t.p,{children:"Regular"}),`
`,i.jsx(e,{mdxSource:'<db-notifications variant="alert"><db-notification type="error"><p>{"error: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications>',children:i.jsx("db-notifications",{variant:"alert",children:i.jsx("db-notification",{type:"error",children:i.jsx(t.p,{children:"error: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})})})}),`
`,i.jsx(t.p,{children:"Hovering"}),`
`,i.jsx(e,{mdxSource:'<db-notifications arialive="assertive" variant="hovering"><db-notification type="error"><p>{"error: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications>',children:i.jsx("db-notifications",{arialive:"assertive",variant:"hovering",children:i.jsx("db-notification",{type:"error",children:i.jsx(t.p,{children:"error: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})})})}),`
`,i.jsx(t.h2,{id:"informative-notification",children:"Informative notification:"}),`
`,i.jsx(e,{mdxSource:'<db-notifications variant="alert"><db-notification type="informative"><p>{"informative: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications>',children:i.jsx("db-notifications",{variant:"alert",children:i.jsx("db-notification",{type:"informative",children:i.jsx(t.p,{children:"informative: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})})})}),`
`,i.jsx(t.p,{children:"Hovering"}),`
`,i.jsx(e,{mdxSource:'<db-notifications variant="hovering"><db-notification type="informative"><p>{"informative: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications>',children:i.jsx("db-notifications",{variant:"hovering",children:i.jsx("db-notification",{type:"informative",children:i.jsx(t.p,{children:"informative: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})})})}),`
`,i.jsx(t.h2,{id:"success-notification",children:"Success notification:"}),`
`,i.jsx(e,{mdxSource:'<db-notifications variant="alert"><db-notification type="success"><p>{"success: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications>',children:i.jsx("db-notifications",{variant:"alert",children:i.jsx("db-notification",{type:"success",children:i.jsx(t.p,{children:"success: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})})})}),`
`,i.jsx(t.p,{children:"Hovering"}),`
`,i.jsx(e,{mdxSource:'<db-notifications variant="hovering"><db-notification type="success"><p>{"success: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications>',children:i.jsx("db-notifications",{variant:"hovering",children:i.jsx("db-notification",{type:"success",children:i.jsx(t.p,{children:"success: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})})})}),`
`,i.jsx(t.h2,{id:"warning-notification",children:"Warning notification:"}),`
`,i.jsx(e,{mdxSource:'<db-notifications variant="alert"><db-notification type="warning"><p>{"warning: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications>',children:i.jsx("db-notifications",{variant:"alert",children:i.jsx("db-notification",{type:"warning",children:i.jsx(t.p,{children:"warning: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})})})}),`
`,i.jsx(t.p,{children:"Hovering"}),`
`,i.jsx(e,{mdxSource:'<db-notifications variant="hovering"><db-notification type="warning"><p>{"warning: Lorem ipsum dolor sit amet, consectetur adipisicing elit"}</p></db-notification></db-notifications>',children:i.jsx("db-notifications",{variant:"hovering",children:i.jsx("db-notification",{type:"warning",children:i.jsx(t.p,{children:"warning: Lorem ipsum dolor sit amet, consectetur adipisicing elit"})})})}),`
`,i.jsx(c,{children:d})]})}function l(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?i.jsx(t,{...n,children:i.jsx(s,{...n})}):s(n)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const o={title:"06-Feedback/Notification/Intro",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:l};const v=["__page"];export{v as __namedExportsOrder,p as __page,o as default};