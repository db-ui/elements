# How style works

## Purpose

This is a guide to how styling works for DB UI Elements.

At the Deutsche Bahn there is a [standard for UI/UX](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system/version-2/Components).
Every tenant (like: Fernverkehr, Regio, Enterprise) can variate the style at predefined parts.

DB UI Elements is intended to provide components for all Deutsche Bahn tenants.
Currently we focus on "enterprise" and "fernverkehr" style.

## Big picture

The standardization process is ongoing and will continue.
Today we do not know which parts of the style should be customizable by tenants.
In order to keep the implementation of the components stable we [decided](./adr/adr-02-styling.md) to separate style definition from the implementation.

The style and its life-cycle is handled by DB UI Core, which provides the necessary pattern partials.

DB UI Elements uses the fix part at build time inside the web components.
This part of the style can't be changed from outside.

The customizable part is used by applications in order to overwrite the style.
Every tenant has its own predefined values for these css variables,
which are also provided by DB UI Core and DB UI Base.
The application combines the web components with tenant relevant css variables
in order to get styled components.
Mostly an app belongs to a single tenant,
but technically it is possible to exchange the style at runtime easily.

In the following is the overview on how style is implemented from definition down to consumer app:

// TODO
## Style defintion format

Web components are closed for style changes from outside.
The only way to set style externally is using css custom properties (css variables).

For every customizable style definition there is a css variable in **root**: scope.

For instance for button are following css variables relevant:

```css
    --button---backgroundColor: #646973;
    --button---color: #f0f3f5;
    --button---minHeight: 2.25rem;
    --button---padding: 0 0.375rem;
    --button--disabled-opacity: 0.65;
    --button-primary--backgroundColor: #ec0016;
    --button-primary--boxShadow: 0 0 0 1px transparent;
    --button-primary--color: #f0f3f5;
    --button-primary-focus-boxShadow: 0 0 0 1px #3c414b;
    --button-primary-hover-backgroundColor: #b20000;
    --button-secondary--backgroundColor: #3c414b;
    --button-secondary--boxShadow: 0 0 0 1px transparent;
    --button-secondary--color: #f0f3f5;
    --button-secondary-focus-boxShadow: 0 0 0 1px #3c414b;
    --button-secondary-hover-backgroundColor: #282d37;
```

DB UI Core and DB UI Base provide for every tenant the list of all css variables with
tenant specific values.

Our strategy in DB UI Elements is to keep the overhead for components as low as possible.
So, every component is a standalone module. The consumer app can pick the relevant
components with the relevant style. You can find the relevant style imports in API doc of
each component.

### CSS Variables / CSS Custom Properties

The variables naming is following this syntax, separated by dashes:

> --element-variant-state-property

e.g.

```CSS
--element---property: value;
--element--state-property: value;
--element-variant--property: value;
--element-variant-state-property: value;
```

**variant** and **state** can be empty.

### How to use and adapt

The customizable part for style is provided by DB UI Core.

```shell
/node_modules/@db-ui/core/dist/css/{theme}
```

In order to use it you have to copy the relevant files and import them to your static files.

You should not use `/node_modules/` directly, since it is not available at runtime.
You should also automate the copy, in order to get updates without manual step.

We do not automate this step in DB UI Elements, because every framework
has different path to static files, and it uses different ways to automate the copy.

In order to check if the installation was successful you can check in browser developer tools
if relevant css variables are defined for **root** scope.

### How to change

You cannot change the fix part of style inside the component.
If you need to change it, then make a change request for DB UI Elements.

The customizable part of style can be changed by overwriting the corresponding
css variable in your app css.
Please keep in mind, that then the style is probably not compliant
with tenant style guidelines.
For permanent change make a change request for DB UI Elements.

### Not resetting inheritable styles

`Inheritable styles (background, color, font, line-height, etc.) continue to inherit in shadow DOM. That is, they pierce the shadow DOM boundary by default. If you want to start with a fresh slate, use all: initial; to reset inheritable styles to their initial value when they cross the shadow boundary.`
compare to <https://developers.google.com/web/fundamentals/web-components/shadowdom#reset>, <https://stackoverflow.com/a/49709787> and <https://stackoverflow.com/a/49709787>

We've decided against resetting inheritable styles by default, as we're expecting to be in a controlled and/or DB ecosystem most of the times, and would have a bigger benefit from inheritance (like e.g. simpler/less code/declarations) than experiencing any heavier collisions/incompatibilities.

Consolidated lists of CSS properties that are inherited by default: <https://gist.github.com/dcneiner/1137601>