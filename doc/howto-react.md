# Get started with React

## Purpose

You are an Application Developer and you want to use DB UI Elements in your own CRA.

## How to install

[Read the "How to Start" documentation](https://github.com/db-ui/elements/blob/main/doc/howto-start.md).


### Integrate in your app

You can use db-ui-element components like default React components.
Import your component like this:

```typescript
import { DbButton } from "@db-ui/react-elements-enterprise";
```

| WARNING: Some components require fonts and/or icons to work properly |
| --- |
 You can import fonts and icons with the provided css file from DB UI Core:

``import "@db-ui/core/dist/css/db-ui-core.vars.css"``

Import this css before you use components. For example you could import it inside your `App.ts` file.

### Bundle your App

1. Create 4 folders in you public directory:
````shell
mkdir public/fonts
mkdir public/icons
mkdir public/images 
mkdir public/js 
````

2. Add a new ``prebuild`` script to your `package.json` like this:

```json
 "prebuild": "npx -y shx cp node_modules/@db-ui/core/dist/fonts/* public/fonts & npx -y shx cp node_modules/@db-ui/core/dist/images/* public/images & npx -y shx cp node_modules/@db-ui/core/dist/js/* public/js & npx -y shx cp node_modules/@db-ui/core/dist/icons/* public/icons",
```

### Test if it works

In order to test the installation just add a component to your functional component, like in the example below:

```js
import "@db-ui/core/dist/css/db-ui-core.vars.css"
import { DbButton } from "@db-ui/react-elements-enterprise";

function App() {
  return (
    <DbButton>it works!</DbButton>
  )
};

export default App;
```

### Events

Attaching events to DB UI Elements Web Components in React works mostly like you would expect for regular React components. The exception here is React's `onChange` event, which does NOT reflect changes made within DB UI Elements Web Components. If you are using `input`-like Web Components (e.g. `<db-checkbox>`, `<db-radio>` or `<db-toggle>`) attach React's `onInput` event handler.

### Example

[React Showcase GitHub](https://github.com/db-ui/elements/tree/main/showcase/react-showcase)

[React Showcase App](https://db-ui.github.io/elements/react-showcase/)
