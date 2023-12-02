# Storybook composition

When using an own Storybook within your project, you can make use of the [Storybook composition feature](https://storybook.js.org/docs/react/sharing/storybook-composition), to integrate it in your own Storybook.
Therefore, you need to link the published `@db-ui/elements` Storybook in your own by adding a reference in your Storybook `main.js`/`main.ts` file.

```js
module.exports = {
  // ...
  refs: {
    "@db-ui/elements": {
      title: "@db-ui/elements",
      url: "https://db-ui.github.io/elements",
      expanded: false, // optional, true, when expanded by default
    },
  },
}
```
