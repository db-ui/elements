# Welcome to DB UI Elements

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)

DB UI Elements is a library, that provides style conform UI components for Deutsche Bahn web
frontends. It's designed to work with any web framework — or even without one.

## Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound to clear guidelines and restrictions even when being used with the code that we're providing with this product; Deutsche Bahn fully reserves all rights and ownership regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions and whom to contact on any brand issues. As these assets and visual guidelines are retrieved from our Deutsche Bahn Marketingportal, you'll agree with the ["Allgemeine Nutzungsbedingungen für das DB-Marketingportal" (german)](https://marketingportal.extranet.deutschebahn.com/de/nutzungsbedingungen) in case of using them.

For any usage outside of Deutsche Bahn websites and applications you must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn.

This especially relates to (but doesn't exclude further Deutsche Bahn brand assets) the file `db_logo.svg` that is duplicated in several different places.

## License

This project is licensed under [Apache-2.0](LICENSE), Copyright 2022 by DB Systel GmbH.

## CI STEPS (DELETE ME)
### build-stencil-default
- npm ci
- cd packages/db-ui-elements-stencil
- npm run build
### build-stencil-enterprise
- npm ci
- node scripts/theme-helper.js packages/db-ui-elements-stencil enterprise
- cd packages/db-ui-elements-stencil
- npm run build enterprise
### build-stencil-storybook
- npm ci
- cd packages/db-ui-elements-stencil
- npm run build enterprise
### test-stencil
- npm ci
- npm run test
### validate-stencil
- npm ci
- cd packages/db-ui-elements-stencil
- npm run lint

### angular-showcase
- npm ci
- cd packages/db-ui-elements-stencil
- npm run build enterprise
- cd ../..
- node scripts/build angular withShowcase
### react-showcase
- npm ci
- cd packages/db-ui-elements-stencil
- npm run build enterprise
- cd ../..
- node scripts/build react withShowcase

### all-showcases
- npm ci
- npm run build
<!-- - cd packages/db-ui-elements-stencil -->
<!-- - npm run build enterprise -->
<!-- - cd ../.. -->
- node scripts/build angular,react,vue,playground,reactwind withShowcase
- npm run build:storybook
- node scripts/review-page-helper.js vue /db-ui-elements/vue-showcase
- node scripts/review-page-helper.js react /db-ui-elements/react-showcase
- node scripts/review-page-helper.js angular /db-ui-elements/angular-showcase
- node scripts/review-page-helper.js reactwind /db-ui-elements/reactwind-showcase
- node scripts/review-page-helper.js playground /db-ui-elements/playground-showcase