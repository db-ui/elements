import { Component, Event, h, Host, Prop } from '@stencil/core';
import { uuid } from '../../utils/utils';

@Component({
  tag: 'db-select',
  styleUrl: 'db-select.scss',
  scoped: true
})
export class DbSelect {
  /**
   * The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application.
   */
  @Prop({ reflect: true }) ariainvalid = false;

  /**
   * The disabled attribute can be set to keep a user from clicking on the select.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element.
   */
  @Prop({ reflect: true }) input_id: string = 'select-' + uuid();

  /**
   * The label attribute specifies the caption of the selectbox.
   */
  @Prop({ reflect: true }) label!: string;

  /**
   * If the multiple attribute is present, then the select element represents a control for selecting zero or more options from the list of options. If the attribute is absent, then the select element represents a control for selecting a single option from the list of options.
   */
  @Prop({ reflect: true }) multiple = false;

  /**
   * The name attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.
   */
  @Prop({ reflect: true }) name!: string;

  /**
   * When the required attribute specified, the user will be required to select a value before submitting the form.
   */
  @Prop({ reflect: true }) required = false;

  /**
   * The size attribute gives the number of options to show to the user. The size attribute, if specified, must have a value that is a valid non-negative integer greater than zero. If the multiple attribute is present, then the size attribute's default value is 4. If the multiple attribute is absent, then the size attribute's default value is 1.
   */
  @Prop({ reflect: true }) size: number;

  /**
   * The value property is to receive results from the native element. Use 'this.value' to process the expected value when onchange is used.
   */
  @Prop({ reflect: false }) value: string;

  /**
   * The variant attribute specifies a visual expression of a select.
   */
  @Prop({ reflect: true }) variant:
    | 'semitransparent'
    | 'white'
    | 'solid'
    | 'outline' = 'semitransparent';

  /**
   * The label-hidden attribute is a boolean attribute. When specified, the elements label gets visually hidden (it's important to still keep it displayed for accessibility reasons).
   */
  @Prop({ reflect: true }) labelHidden: string;

  private handleChange(event) {
    this.value = event.target.value;
    this.dbChange.emit(event);
  }

  /**
   * Mapping for default change Event
   */
  @Event() dbChange;

  render() {
    return (
      <Host>
        <select
          class="elm-select"
          data-variant={
            this.variant && this.variant !== 'semitransparent'
              ? this.variant
              : ''
          }
          aria-invalid={this.ariainvalid ? 'true' : false}
          aria-required={this.required ? 'true' : false}
          disabled={this.disabled}
          id={this.input_id}
          multiple={this.multiple}
          name={this.name}
          required={this.required}
          size={this.size}
          onChange={(event) => this.handleChange(event)}
        >
          <slot />
        </select>

        <label
          class="elm-label"
          htmlFor={this.input_id}
          data-label-hidden={this.labelHidden}
        >
          {this.label}
        </label>
      </Host>
    );
  }
}
