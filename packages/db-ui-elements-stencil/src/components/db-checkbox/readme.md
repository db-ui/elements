# db-checkbox



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute       | Description                                                                                                                                                                                                                                                   | Type      | Default                |
| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------- |
| `autofocus`          | `autofocus`     | The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.                                        | `boolean` | `undefined`            |
| `checked`            | `checked`       | The checked content attribute is a boolean attribute that gives the default checkedness of the input element.                                                                                                                                                 | `boolean` | `undefined`            |
| `disabled`           | `disabled`      | The disabled attribute can be set to keep a user from clicking on the input.                                                                                                                                                                                  | `boolean` | `undefined`            |
| `indeterminate`      | `indeterminate` | The indeterminate attribute is a boolean attribute. When specified, the element is is displayed in an indeterminate state (neither checked, nor unchecked).                                                                                                   | `boolean` | `undefined`            |
| `input_id`           | `input_id`      | The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element. | `string`  | `'checkbox-' + uuid()` |
| `label` _(required)_ | `label`         | The label attribute specifies the caption of the input.                                                                                                                                                                                                       | `string`  | `undefined`            |
| `name` _(required)_  | `name`          | The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.                                                   | `string`  | `undefined`            |
| `required`           | `required`      | The required attribute is a boolean attribute. When specified, the element is required.                                                                                                                                                                       | `boolean` | `undefined`            |
| `value`              | `value`         | The value content attribute gives the default value of the input element.                                                                                                                                                                                     | `string`  | `undefined`            |


## Events

| Event      | Description                      | Type               |
| ---------- | -------------------------------- | ------------------ |
| `dbChange` | Mapping for default change Event | `CustomEvent<any>` |


## Methods

### `setIndeterminate(bool: boolean) => Promise<void>`

Method that acceps a boolean and sets the indeterminate state of the checkbox accordingly.

#### Parameters

| Name   | Type      | Description |
| ------ | --------- | ----------- |
| `bool` | `boolean` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
