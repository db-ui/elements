import{M as r,e as i}from"./chunk-HLWAVYOI-ChMRBB61.js";import{j as n}from"./jsx-runtime-B-la5gQc.js";import{u as a}from"./index-XoJ4iYMS.js";import"./iframe-CUsPqkBZ.js";import"../sb-preview/runtime.js";import"./doctrine-CNNg9870.js";import"./index-DrFu-skq.js";const p=`# Get started with Vue

## Purpose

You are an Application Developer and you want to use DB UI Elements in your own Vue app.

## How to install

[Read the "How to Start" documentation](https://github.com/db-ui/elements/blob/main/doc/howto-start.md).


### Integrate in your app


Import a db-ui-elements component into a vue component (*.vue) like this:

\`\`\`vue
<script setup lang="ts">
import {
  DbButton,
} from '@db-ui/v-elements-enterprise/dist/components';
...
<\/script>
\`\`\`

| WARNING: Some components require fonts and/or icons to work properly |
| --- |

You can import fonts and icons with the provided css file from DB UI Core:

\`\`import "@db-ui/core/dist/css/db-ui-core.vars.css"\`\`

Import this css before you use components. For example you could import it inside your \`\`main.ts\`\` file.

### Bundle your App

If you use vite there are some issues with building here are some issues we had to solve:

\`\`\`\`typescript
// vite.config.ts
export default defineConfig({
  ...
  resolve: {
    dedupe: ['vue'], // <-- this is required for vite build
  ...
  },
  server: {
    fs: {
      strict: false // <-- was required to start dev
    }
  }
});
\`\`\`\`


### Test if it works

In order to test the installation just add a component to your \`\`<template>\`\`:

\`\`\`html
<template>
  <DbButton>Hi from Vue!</DbButton>
</template>
\`\`\`

### Events

We add \`v-model\` support which fires on every change.
But you can use normal \`@\` events as well.

Both Inputs in this example do the same:

\`\`\`\`html
<script setup lang="ts">
  import {
    DbInput,
  } from '@db-ui/v-elements-enterprise/dist/components';
  import { ref } from 'vue';
  const input = ref('');
<\/script>
<template>
  <DbInput
    label="Inputfield"
    name="input-name"
    v-model="input"
  ></DbInput>
  <DbInput
    label="Inputfield"
    name="input-name"
    :value=input 
    @change="e => input = e.target.value"
  ></DbInput>  
</template>
\`\`\`\`


### Example

[Vue Showcase GitHub](https://github.com/db-ui/elements/tree/main/showcase/vue-showcase)

[Vue Showcase App](https://db-ui.github.io/elements/vue-showcase/)
`;function s(e){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"00-Intro/Frameworks/Vue"}),`
`,n.jsx(i,{children:p})]})}function u(e={}){const{wrapper:o}=Object.assign({},a(),e.components);return o?n.jsx(o,{...e,children:n.jsx(s,{...e})}):s()}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const t={title:"00-Intro/Frameworks/Vue",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:u};const w=["__page"];export{w as __namedExportsOrder,m as __page,t as default};
