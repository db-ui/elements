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

