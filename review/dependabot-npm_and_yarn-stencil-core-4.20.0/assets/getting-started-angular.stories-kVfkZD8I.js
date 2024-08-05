import{M as r,e as a}from"./chunk-HLWAVYOI-Dc4I-yPB.js";import{j as n}from"./jsx-runtime-BO6AFy6m.js";import{u as i}from"./index-Bf5Mn85N.js";import"./iframe-DnHCaCWp.js";import"../sb-preview/runtime.js";import"./index-BZSUm5_z.js";import"./index-DrFu-skq.js";const u=`# Get started with Angular

## Purpose

You are an Application Developer and you want to use DB UI Elements in your own Angular app.

## How to install

[Read the "How to Start" documentation](https://github.com/db-ui/elements/blob/main/doc/howto-start.md).


### Integrate in your app

1. Import the DB UI Elements Angular library into your \`app.modules.ts\` file:

\`\`\`\`typescript
...
import { DBUIElementsModule } from '@db-ui/ngx-elements-enterprise/dist/lib';

@NgModule({
  ...
  imports: [DBUIElementsModule]
})
export class AppModule {}
\`\`\`\`

2. Use a component inside an \`.html\` file:

\`\`\`\`html
<db-button (click)="doSomething()">it works!</db-button>
\`\`\`\`

| WARNING: Some components require fonts and/or icons to work properly |
| --- |

You can import fonts and icons with the provided css file from DB UI Core:

\`@import "@db-ui/core/dist/css/enterprise/db-ui-core.vars.css";\`

If you use an Angular with webpack, you'll need to start the import with a tilde:

\`@import "~@db-ui/core/dist/css/enterprise/db-ui-core.vars.css";\`

Import this css before you use components. For example you could import it inside your \`\`styles.css\`\`.

**Common issues, possible solutions:**

Maybe you need add this to your \`\`tsconfig.json\`\`

\`\`\`\`json
 "compilerOptions": {
    ...
    "paths": {
      "@angular/*": [
        "./node_modules/@angular/*"
      ]
    },
    ...
}
\`\`\`\`

Otherwise you might get the error: \`\`
Error: inject() must be called from an injection context
\`\`

---

Maybe if this doesn't solve your problem, you could try to add \`\`"preserveSymlinks": true\`\` to your \`\`angular.json\`\`:

\`\`\`\`\`json
"architect": {
        "build": {
          ...
          "options": {
            ...
            "preserveSymlinks": true,
\`\`\`\`\`


### Bundle your App

Inside your \`\`angular.json\`\` file you have a "build" step. Under "options" you need to add your style like this:

\`\`\`json
"options":{
...
 "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
"styles":  [
              "src/styles.css",
              "node_modules/@db-ui/core/dist/css/enterprise/db-ui-core.vars.css"
            ],
...
}
\`\`\`
---
### Events

There are 3 ways to use Events in Angular:

**[ngModel](https://angular.io/api/forms/NgModel)**

\`\`\`\`html
<db-input
  label="Inputfield"
  name="input-name"
  [(ngModel)]="input"
></db-input>          
\`\`\`\`

**[FormControl](https://angular.io/api/forms/FormControl)**

\`\`\`\`html
<db-input
  label="Inputfield"
  name="input-name"
  [formControl]="inputControl"
></db-input>          
\`\`\`\`

**[change](https://developer.mozilla.org/de/docs/Web/API/HTMLElement/change_event)**
\`\`\`\`html
<db-input
  label="Inputfield"
  name="input-name"
  (change)="input = $event.target.value"
></db-input>          
\`\`\`\`


### Example

[Angular v.18 Showcase GitHub](https://github.com/db-ui/elements/tree/main/showcase/angular-active-showcase)
[Angular v.18 Showcase App](https://db-ui.github.io/elements/angular-active-showcase/)

[Angular v.17 Showcase GitHub](https://github.com/db-ui/elements/tree/main/showcase/angular-lts-showcase)
[Angular v.17 Showcase App](https://db-ui.github.io/elements/angular-lts-showcase/)
`;function s(e){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"00-Intro/Frameworks/Angular"}),`
`,n.jsx(a,{children:u})]})}function l(e={}){const{wrapper:o}=Object.assign({},i(),e.components);return o?n.jsx(o,{...e,children:n.jsx(s,{...e})}):s()}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const t={title:"00-Intro/Frameworks/Angular",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:l};const w=["__page"];export{w as __namedExportsOrder,p as __page,t as default};
