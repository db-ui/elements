import { Component, Host, h, Prop, Method, Event } from '@stencil/core';
import { uuid } from '../../utils/utils';

@Component({
  tag: 'db-checkbox',
  styleUrl: 'db-checkbox.scss',
  scoped: true
})
export class DbCheckbox {
  /**
   * Ref to the <input> checkbox in the render() method. Used to set indeterminate state via setIndeterminate() method from the outside.
   */
  private checkboxInput!: HTMLInputElement;
  /**
   * The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.
   */
  @Prop({ reflect: true }) autofocus: boolean;

  /**
   * The checked content attribute is a boolean attribute that gives the default checkedness of the input element.
   */
  @Prop({ reflect: true }) checked: boolean;

  /**
   * The disabled attribute can be set to keep a user from clicking on the input.
   */
  @Prop({ reflect: true }) disabled: boolean;

  /**
   * The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element.
   */
  @Prop({ reflect: true }) input_id: string = 'checkbox-' + uuid();

  /**
   * The label attribute specifies the caption of the input.
   */
  @Prop({ reflect: true }) label!: string;

  /**
   * The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.
   */
  @Prop({ reflect: true }) name!: string;

  /**
   * The required attribute is a boolean attribute. When specified, the element is required.
   */
  @Prop({ reflect: true }) required: boolean;

  /**
   * The value content attribute gives the default value of the input element.
   */
  @Prop({ reflect: true }) value: string;

  /**
   * The indeterminate attribute is a boolean attribute. When specified, the element is displayed in an indeterminate state (neither checked, nor unchecked).
   */
  @Prop({ reflect: false }) indeterminate: boolean;

  /**
   * The label-hidden attribute is a boolean attribute. When specified, the elements label gets visually hidden (it's important to still keep it displayed for accessibility reasons).
   */
  @Prop({ reflect: false }) labelHidden: boolean;

  /**
   * Method that acceps a boolean and sets the indeterminate state of the checkbox accordingly.
   */
  @Method()
  async setIndeterminate(bool: boolean) {
    this.checkboxInput.indeterminate = bool;
  }

  private handleChange(event) {
    this.dbChange.emit(event);
  }

  /**
   * Mapping for default change Event
   */
  @Event() dbChange;

  render() {
    return (
      <Host>
        <input
          type="checkbox"
          class="elm-checkbox"
          id={this.input_id}
          autofocus={this.autofocus}
          checked={this.checked}
          disabled={this.disabled}
          name={this.name}
          required={this.required}
          value={this.value}
          indeterminate={this.indeterminate}
          ref={(el) => (this.checkboxInput = el as HTMLInputElement)}
          onChange={(event) => this.handleChange(event)}
        />

        <label
          class="elm-label"
          htmlFor={this.input_id}
          data-hidden-label={this.labelHidden}
        >
          {this.label}
        </label>
      </Host>
    );
  }
}
