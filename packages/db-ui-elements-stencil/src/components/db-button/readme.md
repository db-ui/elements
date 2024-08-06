# db-button



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                                                                                                                                                        | Type                                                                                           | Default     |
| ---------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| `ariaexpanded`   | `ariaexpanded`   | If the button controls a grouping of other elements, the ariaexpanded state indicates whether the controlled grouping is currently expanded or collapsed.                                          | `"false" \| "true"`                                                                            | `null`      |
| `ariapressed`    | `ariapressed`    | Defines the button as a toggle button. The value of aria-pressed describes the state of the button.                                                                                                | `"false" \| "true"`                                                                            | `null`      |
| `disabled`       | `disabled`       | The disabled attribute can be set to keep a user from clicking on the button.                                                                                                                      | `boolean`                                                                                      | `false`     |
| `formaction`     | `formaction`     | The formaction attribute specifies where to send the form-data when a form is submitted. Only for type="submit".                                                                                   | `string`                                                                                       | `undefined` |
| `formenctype`    | `formenctype`    | The formenctype attribute specifies how form-data should be encoded before sending it to a server. Only for type="submit".                                                                         | `string`                                                                                       | `undefined` |
| `formmethod`     | `formmethod`     | The formmethod attribute specifies how to send the form-data (which HTTP method to use). Only for type="submit".                                                                                   | `"get" \| "post"`                                                                              | `undefined` |
| `formnovalidate` | `formnovalidate` | The formnovalidate attribute specifies which that the form-data should not be validated on submission. Only for type="submit".                                                                     | `boolean`                                                                                      | `false`     |
| `formtarget`     | `formtarget`     | The formtarget attribute specifies where to display the response after submitting the form. Only for type="submit".                                                                                | `"_blank" \| "_parent" \| "_self" \| "_top"`                                                   | `undefined` |
| `icon`           | `icon`           | Define an icon by it's identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed in front of the elements content. | `string`                                                                                       | `undefined` |
| `iconafter`      | `iconafter`      | Define an icon by it's identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed behind the elements content.      | `string`                                                                                       | `undefined` |
| `icononly`       | `icononly`       | Define the text next to the icon specified via the icon Property to get hidden.                                                                                                                    | `boolean`                                                                                      | `undefined` |
| `name`           | `name`           | The name attribute specifies a name for the button.                                                                                                                                                | `string`                                                                                       | `undefined` |
| `size`           | `size`           | The size attribute specifies the button size out of three sizes.                                                                                                                                   | `"large" \| "regular" \| "small"`                                                              | `undefined` |
| `tooltip`        | `tooltip`        | The tooltip attribute specifies the title of button.                                                                                                                                               | `string`                                                                                       | `undefined` |
| `type`           | `type`           | The type attribute specifies the type of button.                                                                                                                                                   | `"button" \| "reset" \| "submit"`                                                              | `'submit'`  |
| `value`          | `value`          | The value attribute specifies an initial value for the button.                                                                                                                                     | `string`                                                                                       | `undefined` |
| `variant`        | `variant`        | The variant attribute specifies a visual expression of button.                                                                                                                                     | `"brand-primary" \| "primary" \| "secondary-outline" \| "secondary-solid" \| "tertiary-plain"` | `undefined` |
| `width`          | `width`          | The width attribute let's you overwrite the standard display of the button width.                                                                                                                  | `"auto" \| "full"`                                                                             | `undefined` |


## Dependencies

### Depends on

- [db-icon](../db-icon)

### Graph
```mermaid
graph TD;
  db-button --> db-icon
  style db-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
