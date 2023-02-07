# Get started with Vanilla JavaScript

## Purpose

You are an Application Developer and you want to use DB UI Elements in your own application, which is plain JavaScript.

Maybe there is a good reason for you, why you don't use a framework. Maybe you are stuck in 90th (we do not provide an animated rainbow background, sorry).

## How to install

[Read the "How to Start" documentation](https://github.com/db-ui/elements/blob/main/doc/howto-start.md).


### Integrate web components in your app

After installation is done, you have to integrate DB UI Elements into your application.

Since DB UI Elements is based on Stencil framework in order to build independent web components, the integration depends on the framework you use to build up your application.

You can use one of the following links to find the description for the framework you use.

> **_NOTE:_** If you need a loader path to import 'defineCustomElements' or 'applyPolyfills', you have to use: _"@db-ui/elements/loader"_.

- [Integration JavaScript](https://stenciljs.com/docs/javascript)

For integration in other framworks visit [Stencil Doc- Overview Framework Integration](https://stenciljs.com/docs/overview) for more informations.

### Integrate styles in your app

If you would use the button in your project, fonts and icons would be missing.


#### Manual style integration

There are two steps you need to get the styles in your application. First copy all files from the folder below in the assets folder of your application and second make a css import in the root from your assets folder.

For your copy use the folder below and copy it in your assets folder:


```json
{
  src: 'node_modules/@db-ui/core/dist/fonts',
  dest: 'fonts'
}

{
  src: 'node_modules/@db-ui/core/dist/icons',
  dest: 'icons'
}

{
  src: 'node_modules/@db-ui/core/dist/images',
  dest: 'images'
}

{
  src: 'node_modules/@db-ui/core/dist/js',
  dest: 'js'
}

{
  src: `node_modules/@db-ui/core/dist/css/{yourTheme}/db-ui-core.vars.css`,
  dest: 'css/db-ui-core.vars.css'
}
```

and for your import use the vars file:

```html
<link href="css/db-ui-core.vars.css" rel="stylesheet" />
```

### How to use Events

Events and event handlers are an important link between HTML and JavaScript. A change to the custom element automatically results in a change to the associated native element. The value to be processed results from the native element.

Use **this.value** to process the expected value.

```html
<db-select label="Change Theme:" name="Theme" onchange="your_function(this.value)">
```

### Test if works

In order to test the installation just add a component to your html, like in the example below:

```html
<db-button>it works!</db-button>
```

## Frameworks

See documentation for the JavaScript frameworks that we're further supporting:

- [Angular](https://github.com/db-ui/elements/blob/main/doc/howto-angular.md)
- [React](https://github.com/db-ui/elements/blob/main/doc/howto-react.md)
- [Vue](https://github.com/db-ui/elements/blob/main/doc/howto-vue.md)
