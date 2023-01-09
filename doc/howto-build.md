# Typical developer flow

```bash
npm ci

# start background process, which builds lib on any file change
npm run build.watch

# start storybook locally
npm start

```

## How to build

DB-UI Elements provides two artifacts: lib and living styleguide.

Styleguide requires lib to be built.

## How to add a new component
```bash
npm run generate new-component
```
To see your new component in storybook create a "stories" folder in the new component folder and create a db-test.intro.stories.mdx file with the following content.
Adapt the file name to your component name and in the file adapt `<db-test>` as well as in the `<Meta>` tag the /Test/ part - "Test" is the second part of your new component.

```typescript
import { Meta, Canvas } from '@storybook/addon-docs';
import Readme from './../readme.md';

<Meta title="Components/Test/Intro" />

<Canvas>
<db-test>test</db-test>
</Canvas>


<Readme />

```


## How to build lib (Stencil)

```bash
npm install
npm run build
```

result:
* folder *www* - static files to be used in storybook
* folder *dist* - files to be packaged by *npm publish*

## How to build living styleguide (Storybook)

prerequisite: lib was built

```bash
npm run build:storybook
```

result:
* folder *public* - living styleguide ready to be deployed to web server



To commit changes plese use one of the [commitlint](./linting-git.adoc) messages.

## Big picture

In order to understand the flow of steps and artifacts please have a look on this overview

```mermaid
graph TD
  package-json[package.json]
  stencil-config[stencil.config.ts]
  src[src]
  static[src/static]
  dist[dist]
  www[www]
  preview["\.storybook\preview-head.html"]
  public[public]
  db-ui-core["node_modules/@db-ui/core/dist"]
  build{{build}}
  build:storybook{{build:storybook}}
  github-ci[github-ci.yaml]
  pages{{step: pages}}
  github-pages[https://db-ui.github.io/elements]
  npm-publish{{step: npm_publish}}
  npm["npm <br/> @db-ui/elements"]

  stencil-config-.configures.->build
  src-->build
  db-ui-core-->build
  static-->build
  build-->www
  build-->dist
  www-->build:storybook
  build:storybook-->public
  preview-->build:storybook
  gitlab-ci-.defines.->pages
  public-->pages
  pages-->github-pages
  dist-->npm-publish
  npm-publish-->npm
  github-ci-.defines.->npm-publish
  package-json-.defines.->build
  package-json-.defines.->build:storybook
  ```

## How to upgrade storybook

[Automigrate / `npx sb@next automigrate`](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#automigrate) has been introduced with storybook 6.4, which sounds promising for doing further updates of storybook from now on.
