# scripts

* *build*: see <https://stenciljs.com/docs/cli#stencil-build>
* *build.watch*: same es build, but the process stays running and executes build on every file change
* *lint*: use eslint, <https://eslint.org/docs/user-guide/command-line-interface>
* *validate*: execute all validations on the source code
* *start-stencil*: build stencil and start local web server. was changed from npm start in order to run in ci/cd pipeline
* *start*: same as *storybook*
* *clean-start*: remove everything that was previously generated with *build* and *start*, then exec *build*, then exec *start* with «--no-manager-cache» option to build fresh storybook instance
* *test*: run stencil tests. see <https://stenciljs.com/docs/cli#stencil-test>
* *test.watch*: same as *test*, but the process stays running and executes build on every file change
* *generate*: see <https://stenciljs.com/docs/cli#stencil-generate-sub-folder>

* *preinstall*: npm script hook to enforce specific dependency versions with [`npm-force-resolutions`](https://www.npmjs.com/package/npm-force-resolutions)



## dependencies

* *@db-ui/core*: style defintions from DB UI Core with pattern specific partials

## devDependencies

* *@babel/core*: introduced by storybook
* *@stencil/core*: stencil framework see ADR1
* *@stencil-community/eslint-plugin*: linting rules for stencil
* *@storybook/web-components*: introduced by storybook
* *@types/jest*: introduced by storybook
* *@typescript-eslint/eslint-plugin*: introduced by eslint
* *@typescript-eslint/parser*: introduced by eslint
* *babel-loader*: introduced by storybook
* *eslint*: linting source code
* *eslint-config-prettier*: introduced by eslint and prettier
* *eslint-plugin-react*: introduced by eslint
* *jest*: introduced by stencil
* *jest-cli*: introduced by stencil
* *typescript*: in case, if typescipt is not installed globally

