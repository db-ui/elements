# scripts

* *prepare*: enforcing CI/CD, linting and formatting via Git with [`husky`](https://www.npmjs.com/package/husky)
* *storybook*: starts storybook in a local web server
* *build:storybook*: build storybook, see <https://storybook.js.org/docs/react/api/cli-options>
* *release*: runs [`np`](https://www.npmjs.com/package/np) to support the release process
* *start*: starts both a `stencil` build watcher as well as the *storybook* script
* *clean*: cleaning your working copy, but leave relevant files like e.g. your `.env` file untouched

## devDependencies

* *@commitlint/cli*: lint commit messages
* *@commitlint/config-conventional*: introduced by commitlint
* *@storybook/addon-actions*: introduced by storybook
* *@storybook/addon-essentials*: introduced by storybook
* *@storybook/addon-controls*: introduced by storybook
* *@storybook/addon-links*: introduced by storybook
* *@storybook/web-components*: introduced by storybook
* *concurrently*: enables parallel or sequential processing of commands
* *husky*: hooks into commit and executes commitlint
* *np*: supports the release process e.g. with interactive options and tests
* *prettier*: formats code according eslint rules
* *lint-staged*: necessary for running prettier for staged files on commit