# db-input

<!-- ## Style Dependencies

Add the following styles to your application. If you have added the base dependencies already for another component, don't do again.

- replace {path} with your path to copied css
- replace {theme} with one of [enterprise,fernverkehr]

```css
// required base dependencies
@import url({path}/themes/{theme}/css/00-base/colors/colors.vars.css);
@import url({path}/themes/{theme}/css/00-base/type/fonts.css);

// component style
@import url({path}/themes/{theme}/css/01-elements/input/input.vars.css);
``` -->

{/* Auto Generated Below */}


## Properties

| Property             | Attribute      | Description                                                                                                                                                                                                                                                                | Type                                                   | Default                               |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------- |
| `ariainvalid`        | `ariainvalid`  | The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application.                                                                                                                       | `"false" \| "grammar" \| "spelling" \| "true"`         | `undefined`                           |
| `ariarequired`       | `ariarequired` | The ariarequired attribute can be applied to a form element, to indicate to an AT that it is required to complete the form.                                                                                                                                                | `"false" \| "true"`                                    | `undefined`                           |
| `autocomplete`       | `autocomplete` | User agents sometimes have features for helping users fill forms in, for example prefilling the user's address based on earlier user input.                                                                                                                                | `"off" \| "on"`                                        | `undefined`                           |
| `autofocus`          | `autofocus`    | The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.                                                     | `boolean`                                              | `undefined`                           |
| `description`        | `description`  | The description attribute specifies the description/hint of the input.                                                                                                                                                                                                     | `string`                                               | `undefined`                           |
| `dirname`            | `dirname`      | The dirname attribute on a form control element enables the submission of the directionality of the element, and gives the name of the control that contains this value during form submission. If such an attribute is specified, its value must not be the empty string. | `string`                                               | `undefined`                           |
| `disabled`           | `disabled`     | The disabled attribute can be set to keep a user from clicking on the input.                                                                                                                                                                                               | `boolean`                                              | `undefined`                           |
| `input_id`           | `input_id`     | The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element.              | `string`                                               | `'input-' + Math.random().toString()` |
| `label` _(required)_ | `label`        | The label attribute specifies the caption of the input.                                                                                                                                                                                                                    | `string`                                               | `undefined`                           |
| `list`               | `list`         | The list attribute is used to identify an element that lists predefined options suggested to the user.                                                                                                                                                                     | `string`                                               | `undefined`                           |
| `maxlength`          | `maxlength`    | /* The maxlength attribute, controlled by a dirty value flag, declares a limit on the number of characters a user can input.                                                                                                                                               | `number`                                               | `undefined`                           |
| `minlength`          | `minlength`    | /* The minlength attribute, when it applies, is a form control minlength attribute.                                                                                                                                                                                        | `number`                                               | `undefined`                           |
| `name` _(required)_  | `name`         | The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.                                                                | `string`                                               | `undefined`                           |
| `pattern`            | `pattern`      | The pattern attribute specifies a regular expression against which the control's value is to be checked.                                                                                                                                                                   | `string`                                               | `undefined`                           |
| `placeholder`        | `placeholder`  | The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry.                                                                                                                                                       | `string`                                               | `undefined`                           |
| `readonly`           | `readonly`     | The readonly attribute controls whether or not the user can edit the form control.                                                                                                                                                                                         | `boolean`                                              | `undefined`                           |
| `required`           | `required`     | The required attribute is a boolean attribute. When specified, the element is required.                                                                                                                                                                                    | `boolean`                                              | `undefined`                           |
| `size`               | `size`         | The size attribute gives the number of characters that, in a visual rendering, the user agent is to allow the user to see while editing the element's value.                                                                                                               | `number`                                               | `undefined`                           |
| `type`               | `type`         | The type attribute changes the input type to text, number etc.                                                                                                                                                                                                             | `string`                                               | `'text'`                              |
| `value`              | `value`        | The value content attribute gives the default value of the input element.                                                                                                                                                                                                  | `string`                                               | `undefined`                           |
| `variant`            | `variant`      | The variant attribute specifies a visual expression of a select.                                                                                                                                                                                                           | `"outline" \| "semitransparent" \| "solid" \| "white"` | `'semitransparent'`                   |


## Events

| Event      | Description                      | Type               |
| ---------- | -------------------------------- | ------------------ |
| `dbChange` | Mapping for default change Event | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
