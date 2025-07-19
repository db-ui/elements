import{M as i,e as a}from"./chunk-HLWAVYOI-D58ckyjK.js";import{j as e}from"./jsx-runtime-DHHbq7sJ.js";import{u as o}from"./index-j4EpWGbv.js";import"./iframe-DeyPr0BX.js";import"../sb-preview/runtime.js";import"./index-DofHZ8ew.js";import"./index-DrFu-skq.js";const d=`# Get started as Application Developer

## Purpose

You are an Application Developer and you want to use DB UI Elements in your own application.

## How to install

### 1. Choose your Framework & Theme

There are multiple Frameworks and Themes which are supported by DB UI Elements – use the *default* theme for any (Personenverkehr) Customer applications, whereas we intend to add further enterprise (B2E) specific components with the *enterprise* theme:

| Framework        | Theme      | Name                        |
| -------------    |------------| -----                       |
| Vanilla JS       | default    | \`@db-ui/elements\`             |
| Vanilla JS       | enterprise | \`@db-ui/elements-enterprise\`  |
| Angular          | default    | \`@db-ui/ngx-elements\`             |
| Angular          | enterprise | \`@db-ui/ngx-elements-enterprise\`  |
| React            | default    | \`@db-ui/react-elements\`             |
| React            | enterprise | \`@db-ui/react-elements-enterprise\`  |
| Vue              | default    | \`@db-ui/v-elements\`             |
| Vue              | enterprise | \`@db-ui/v-elements-enterprise\`  |

### 2. Install via npm

Now you should be able to install it e.g.:

\`\`\`bash
npm i -save @db-ui/react-elements
\`\`\`

As a result you should have 4 new folders in your \`node_modules\`:

\`\`\`javascript
@db-ui
  /base // colors
  /core // styles
  /elements // components
  /react-elements // framework components
\`\`\`

`,l=`# Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound to clear guidelines and restrictions even when being used with the code that we're providing with this product; Deutsche Bahn fully reserves all rights and ownership regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions and whom to contact on any brand issues. As these assets and visual guidelines are retrieved from our Deutsche Bahn Marketingportal, you'll agree with the ["Allgemeine Nutzungsbedingungen für das DB-Marketingportal" (german)](https://marketingportal.extranet.deutschebahn.com/marketingportal/Nutzungsbedingungen-9702684) in case of using them.

For any usage outside of Deutsche Bahn websites and applications you must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn.

This especially relates to (but doesn't exclude further Deutsche Bahn brand assets) the file \`db_logo.svg\` that is duplicated in several different places.`,u=`# Update as Application Developer

## Purpose

You are an Application Developer and you want to update DB UI Elements in your own application.

## Update

If you like to update DB UI Elements use:

\`\`\`bash
npm i -save @db-ui/elements@latest
\`\`\`

Please have a look at the [CHANGELOG.md](https://github.com/db-ui/elements/-/blob/main/CHANGELOG.md) file to see documentation for the current version of DB UI Elements.

DB UI Elements follows the [semantic version](https://semver.org/lang/de/) logic.
You can add a **^** before the version in package.json in order to get minor and fixes releases on **npm update**.

## Documentation

Please find our Architectural Decision Records within the [adr subfolder](https://github.com/db-ui/elements/-/tree/main/doc/adr).
`;function s(t){const n=Object.assign({h3:"h3",p:"p",a:"a"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"00-Intro/Getting Started"}),`
`,e.jsx(a,{children:d}),`
`,e.jsx(n.h3,{id:"3-integrate-in-your-app",children:"3. Integrate in your app"}),`
`,e.jsx(n.p,{children:"There are some different ways to import required files for each framework:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/story/00-intro-frameworks-angular--docs",children:e.jsx("db-button",{variant:"secondary-outline",children:"Angular"})}),`
`,e.jsx(n.a,{href:"?path=/story/00-intro-frameworks-javascript--docs",children:e.jsx("db-button",{variant:"secondary-outline",children:"JavaScript"})}),`
`,e.jsx(n.a,{href:"?path=/story/00-intro-frameworks-react--docs",children:e.jsx("db-button",{variant:"secondary-outline",children:"React"})}),`
`,e.jsx(n.a,{href:"?path=/story/00-intro-frameworks-vue--docs",children:e.jsx("db-button",{variant:"secondary-outline",children:"Vue"})})]}),`
`,e.jsx(a,{children:u}),`
`,e.jsx(a,{children:l})]})}function c(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const r={title:"00-Intro/Getting Started",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:c};const v=["__page"];export{v as __namedExportsOrder,h as __page,r as default};
