# Welcome to DB UI Elements

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

DB UI Elements is a library, that provides style conform UI components for Deutsche Bahn web
frontends. It's designed to work with any web framework — or even without one.

## How to consume

Find a here a detailed [how to consume](doc/howto-start.md) for your development context, either vanilla JavaScript or any framework – we're proving "native" framework components for Angular, React and Vue.

## Core principals

### Framework agnostic

DB UI Elements is built on native Web Standards and can be used in any web framework like (Angular, React, Vuejs) or even without one. The underlying technology is Web Components, which is a set of native Web Standards that work together, letting you create custom elements that work just like the standard HTML elements built into your browser.

### Compliant to Deutsche Bahn UI/UX guidelines

DB UI Elements follows the Deutsche Bahn UI/UX guidelines.
[See more details Styling](/doc/howto-style.md)

### Multi-tenant

Every tenant in Deutsche Bahn has a deviation from corporate style.  
We separate style from implementation. So that the consumer can decide, which tenant style to support.
It is also possible to use multiple styles in the same application, just by switching the configuration.

The style is provided by [DB UI Core](https://github.com/db-ui/core)

Currently we support following tenants:

* Regular (DB UX Design System)
* Enterprise

Other tenants can be added -> please contact us

### Accessible

Web Components are a set of technologies that work together, letting you create custom elements that work just like the standard HTML elements built into your browser.

### Light weight

DB UI Elements Web Components are implemented using StencilJS, which is designed for creating web components with a minimum amount of overhead.

### Open and free to use

DB UI Elements is free (Apache 2.0 license) to consume and is community driven.
If you miss a component than [contribute](CONTRIBUTING.md), please.

## What is next?

[Overview on documentation](doc/README.md)

## Framework showcases

* [DB UI Elements with React (CRA)](showcase/react-showcase/README.md)
* [DB UI Elements with Angular 18](showcase/angular-showcase/README.md)
* [DB UI Elements with Vue](showcase/vue-showcase/README.md)

## Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound to clear guidelines and restrictions even when being used with the code that we're providing with this product.
Deutsche Bahn fully reserves all rights and ownership regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.
Please have a look at our [brand portal](https://marketingportal.extranet.deutschebahn.com/) for any further questions and whom to contact on any brand issues.

As these assets and visual guidelines are retrieved from our Deutsche Bahn Marketingportal, you'll agree with the ["Allgemeine Nutzungsbedingungen für das DB-Marketingportal" (german)](https://marketingportal.extranet.deutschebahn.com/marketingportal/Nutzungsbedingungen-9702684) in case of using them.

For any usage outside of Deutsche Bahn websites and applications you must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn.

This especially relates to (but doesn't exclude further Deutsche Bahn brand assets) the file `db_logo.svg` that is duplicated in several different places.

## Contributions

Contributions are very welcome, please refer to the [contribution guide](CONTRIBUTING.md).

<!-- markdownlint-disable MD026 -->
## Third party acknowledgments – many kudos for that !!!
<!-- markdownlint-enable MD026 -->

- [open privacy by opr.vc](https://opr.vc)

## Code of conduct

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone – have a look at our [Contributor Covenant Code of Conduct](CODE-OF-CONDUCT.md).

## License

This project is licensed under [Apache-2.0](LICENSE), Copyright 2024 by DB Systel GmbH.
