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

As default (mobile) we use a flex layout and for tablet and desktop we use a grid layout.

We can do this with every shirt size `sm` `md` `lg` and for every class like `className="text-cyan-600 md:text-cyan-700 lg:text-cyan-800"`.

## Contributions

Contributions are very welcome, please refer to the [contribution guide](https://github.com/db-ui/elements/blob/main/CONTRIBUTING.md).

### Code of conduct

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone – have a look at our [Contributor Covenant Code of Conduct](https://github.com/db-ui/elements/blob/main/CODE-OF-CONDUCT.md).

### Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even if being used with the code that we're providing with this product.

Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions and whom to contact on any brand issues.

You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn.

### License

This project is licensed under [Apache-2.0](LICENSE).
