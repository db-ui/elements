<!-- markdownlint-configure-file { "MD024": false, "MD013": false } -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
And the commit guidelines from [Conventional Commits](https://conventionalcommits.org) are being used.

Regarding BREAKING CHANGES in between, please have a look into [the migration guide](doc/migrationGuide.html).

## [Unreleased]

## [0.14.3] - 2022-07-06

### Fixed

- Correctly displaying the icons within buttons

## [0.14.2] - 2022-06-15

### Added

#### Package consumption

- `LICENSE` files to all packages

#### DEV

- Playground: Visual page builder

### Changed

#### Package consumption

- further aspects regarding DB trademarks

#### DEV

- DB UI Core update; a.o. icons path and filenames have changed

### Fixed

#### Package consumption

- Output target for **Vue / Vite consumption**
- Replaced remaining SCSS functions (font calculation e.g. `to-rem`) in CSS files by updating DB UI Core
- Added missing `"license"` field to `package.json` by Vue packages
- Issue with generated sourcemaps for React & Vue output-targets

## [0.13.0] - 2022-04-22

### Added

#### Package consumption

- [`reactwind`](https://db-ui.github.io/elements/?path=/story/intro-showcases--react-and-tailwind) showcase
- Providing a [`developer playground`](https://db-ui.github.io/elements/?path=/story/development-playground--editor)
- `CONTRIBUTING`, `MAINTAINERS` and `CODE-OF-CONDUCT` files

### Changed

#### Package consumption

- **BREAKING CHANGE**: *expander* component got renamed to *accordion* and has some new configurable options
- **BREAKING CHANGE**: The persistant state type of the `tags` component has been extracted into a new `chips` component

#### DEV

- Consolidated showcases
- Updated DB UI Core
- Providing framework-agnostic cypress test cases
- Consolidated `npm` scripts

### Fixed

#### Package consumption

- brand component still contained a non-configurable asset path


#### DEV

- Angular showcase warning output on startup

## [0.12.1] - 2022-04-06

### Fixed

#### Package consumption

- issue with Angular dependencies on Angular 13 [!219]

#### DEV

- Warning message on Vue showcase build regarding `db-textarea` [#92]

## [0.12.0] - 2022-04-05

### Added

#### Package consumption

- feat: added new component `db-card` / `db-cards` [!175] [!32]
- feat: added new component `db-headline` [!212] [#80]
- feat: added new component `db-language-switcher` [!180] [#35]
- feat: added new component `db-mainnavigation` [!173] [#36]
- feat: added new component `db-notification` [!141] [#38]
- feat: added new component `db-pagination` [!176] [#40]
- chore: update angular documentation to `handle inject()` error [!215]

#### DEV

- add coverage for cypress tests [!211]

### Changed

#### DEV

- dependency updates: `np`, `yargs`, `@stencil/core`, `nanoid`, `@db-ui/core`
- optimized the documentation

### Fixed

#### Package consumption

- "Husky Angular Component Check" [!217] [#94]

## [0.11.0] - 2022-03-25

### Added

- update `linklist` and `metanavigation` to work with `<li>` and data

### Fixed

- gitlab pages for master

## [0.10.2] - 2022-03-24

### Changed

- refactor: generalizing the SCSS declarations necessary for every component

## [0.10.1] - 2022-03-24

### Changed

- Optimized the image path within the `db-brand` component (nevertheless we still need to have this configurable)
- Further optimizations within the documentation and examples

### Fixed

- issues with gitlab pages and showcases on `master`
- style: issue with `db-page`

## [0.10.0] - 2022-03-23

### Added

- build: added framework showcases (react, angular, vue) to monorepo
- feat: added new component `db-brand`
- feat: added new component `db-breadcrumb`
- feat: added new component `db-dropdown`
- feat: added new component `db-expander`
- feat: added new component `db-footer`
- feat: added new component `db-header`
- feat: added new component `db-linklist`
- feat: added new component `db-metanavigation`
- feat: added new component `db-overflow-menu`
- feat: added new component `db-sidenavi`
- feat: added new component `db-tab-bar`
- feat: added new component `db-table`


## [0.8.1] - 2021-09-23

### Added

- build: added secrets as a git submodule

### Changed

- refactor: updating nginx and node
- chore(package): update @commitlint dependencies to version 13.1.0
- chore(package): update @storybook dependencies
- chore: switched the `commitlint` config file format
- build(dependencies): update prettier dependency to version 2.4.1
- build(dependencies): update prettier dependency to version 2.4.1

### Fixed

- theme: corrected css references within the themes
- corrected a lot of documentation parts
- refactor: switching the registry URL [#50]

## [0.6.2] - 2020-10-06

### Fixed

- Link: further optimized the horizontal placement of the icons

## [0.6.1] - 2020-10-05

### Fixed

- Checkbox: vertical alignment of the label

## [0.6.0] - 2020-10-05

### Added

- textarea component

### Changed

- Remove custom-elements.json from git as it's a generated file and shouldn't get version controlled

### Fixed

- The input component was missing its styling
- Docs: some corrections especially regarding feedback
- fixed two missing variable value renderings

## [0.5.1] - 2020-10-02

### Added

- Input component

### Changed

- Updated a lot of dependencies

## [0.5.0] - 2020-10-01

### Added

- Checkbox component
- Radio component
- Link component
- Select component
- NPM scripts for builds / releases

### Changed

- Changed to the newest icons version DB UX 2.4.0
- Corrected the icon display order
- Moved the theme.css file out of the css folder to the previous folder level
- Removed FVD colors
- Included SVG background images via Base64 so that we won't need to reference those

### Fixed

- Docs: some corrections especially regarding feedback