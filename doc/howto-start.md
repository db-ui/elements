# Get started as Application Developer

## Purpose

You are an Application Developer and you want to use DB UI Elements in your own application.

## How to install

### 1. Choose your Framework & Theme

There are multiple Frameworks and Themes which are supported by DB UI Elements – use the *default* theme for any (Personenverkehr) Customer applications, whereas we intend to add further enterprise (B2E) specific components with the *enterprise* theme:

| Framework        | Theme      | Name                        |
| -------------    |------------| -----                       |
| Vanilla JS       | default    | `@db-ui/elements`             |
| Vanilla JS       | enterprise | `@db-ui/elements-enterprise`  |
| Angular          | default    | `@db-ui/ngx-elements`             |
| Angular          | enterprise | `@db-ui/ngx-elements-enterprise`  |
| React            | default    | `@db-ui/react-elements`             |
| React            | enterprise | `@db-ui/react-elements-enterprise`  |
| Vue              | default    | `@db-ui/v-elements`             |
| Vue              | enterprise | `@db-ui/v-elements-enterprise`  |

### 2. Install via npm

Now you should be able to install it e.g.:

```bash
npm i -save @db-ui/react-elements
```

As a result you should have 4 new folders in your `node_modules`:

```javascript
@db-ui
  /base // colors
  /core // styles
  /elements // components
  /react-elements // framework components
```

### 3. Technology specific follow up

Afterwards follow up by your technology context:

- [JavaScript](https://github.com/db-ui/elements/-/blob/main/doc/howto-javascript.md)
- [Angular](https://github.com/db-ui/elements/-/blob/main/doc/howto-angular.md)
- [React](https://github.com/db-ui/elements/-/blob/main/doc/howto-react.md)
- [Vue](https://github.com/db-ui/elements/-/blob/main/doc/howto-vue.md)

## Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound to clear guidelines and restrictions even when being used with the code that we're providing with this product; Deutsche Bahn fully reserves all rights and ownership regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions and whom to contact on any brand issues. As these assets and visual guidelines are retrieved from our Deutsche Bahn Marketingportal, you'll agree with the ["Allgemeine Nutzungsbedingungen für das DB-Marketingportal" (german)](https://marketingportal.extranet.deutschebahn.com/de/nutzungsbedingungen) in case of using them.

For any usage outside of Deutsche Bahn websites and applications you must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn.

This especially relates to (but doesn't exclude further Deutsche Bahn brand assets) the file `db_logo.svg` that is duplicated in several different places.