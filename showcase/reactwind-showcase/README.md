# DB-UI Reactwind Showcase

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

## React + Tailwind = ❤

This showcase uses [React](https://reactjs.org/) and [Tailwind](https://tailwindcss.com/) together.

We provide a custom tailwind.config.js inside [DB-UI-Base](https://github.com/db-ui/base) if you like to use it follow this [installation](https://github.com/db-ui/base#tailwind).

Moreover, you need to overwrite default tailwind-headers. Look at the [index.css](https://github.com/db-ui/elements/blob/main/showcase/reactwind-showcase/src/index.css) inside of this repo and copy:

```css
/* src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  h2 {
    font-weight: bold;
    font-size: 1.5em;
  }
  h3 {
    font-weight: bold;
    font-size: 1.17em;
  }
  h4 {
    font-weight: bold;
  }
}
```

## What is this Showcase about?

With Tailwind we can use css with the need of an additional .css file.

This showcase shows some examples:

### Change the color of a text

```typescript
<span className="text-cyan-600">
  This span will be displayed with a cyan text
</span>
```

### Use break-points

Go into "inspect" mode in your browser and pick a mobile device. You will see the changes for those cards:

```typescript
<div className="flex flex-col md:grid md:grid-cols-3 gap-0.5 p-0.5">
  {cards.map((number) => (
    <DbCard
      key={`card-${number}`}
      header={`Title ${number}`}
      content={`Content ${number}`}
      illustration="christmas"
    />
  ))}
</div>
```

As default (mobile) we use a fley layout and for tablet and desktop we use a grid layout.

We can do this with every shirt size `sm` `md` `lg` and for every class like `className="text-cyan-600 md:text-cyan-700 lg:text-cyan-800"`.


