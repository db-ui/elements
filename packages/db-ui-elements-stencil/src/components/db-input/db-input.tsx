import { Component, Event, h, Host, Prop, State } from '@stencil/core';
import { uuid } from '../../utils/utils';

@Component({
  tag: 'db-input',
  styleUrl: 'db-input.scss',
  scoped: true
})
export class DbInput {
  @State() valueSize = 0;

  /**
   * The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application.
   */
  @Prop({ reflect: true }) ariainvalid?:
    | 'false'
    | 'grammar'
    | 'spelling'
    | 'true' = null;

  /**
   * The ariarequired attribute can be applied to a form element, to indicate to an AT that it is required to complete the form.
   */
  @Prop({ reflect: true }) ariarequired?: 'false' | 'true' = null;

  /**
   * User agents sometimes have features for helping users fill forms in, for example prefilling the user's address based on earlier user input.
   */
  @Prop({ reflect: true }) autocomplete?: 'off' | 'on' = null;

  /**
   * The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.
   */
  @Prop({ reflect: true }) autofocus = false;

  /**
   * The description attribute specifies the description/hint of the input.
   */
  @Prop({ reflect: true }) description?: string;

  /**
   * The dirname attribute on a form control element enables the submission of the directionality of the element, and gives the name of the control that contains this value during form submission. If such an attribute is specified, its value must not be the empty string.
   */
  @Prop({ reflect: true }) dirname?: string;

  /**
   * The disabled attribute can be set to keep a user from clicking on the input.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element.
   */
  @Prop({ reflect: true }) input_id?: string = 'input-' + uuid();

  /**
   * The label attribute specifies the caption of the input.
   */
  @Prop({ reflect: true }) label!: string;

  /**
   * The list attribute is used to identify an element that lists predefined options suggested to the user.
   */
  @Prop({ reflect: true }) list?: string;

  /**
  /* The maxlength attribute, controlled by a dirty value flag, declares a limit on the number of characters a user can input.
  */
  @Prop({ reflect: true }) maxlength?: number;

  /**
  /* The minlength attribute, when it applies, is a form control minlength attribute.
  */
  @Prop({ reflect: true }) minlength?: number;

  /**
   * The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * The pattern attribute specifies a regular expression against which the control's value is to be checked.
   */
  @Prop({ reflect: true }) pattern?: string;

  /**
   * The step attribute specifies the granularity that the value must obey to on increasing or decreasing by the users selection.
   */
  @Prop({ reflect: true }) step?: number;

  /**
   * The min attribute specifies the minimum value that is sufficient for this input.
   */
  @Prop({ reflect: true }) min?: number | string;

  /**
   * The max attribute specifies the maximum value that is sufficient for this input.
   */
  @Prop({ reflect: true }) max?: number | string;

  /**
   * The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry.
   */
  @Prop({ reflect: true }) placeholder?: string;

  /**
   * The readonly attribute controls whether or not the user can edit the form control.
   */
  @Prop({ reflect: true }) readonly?: boolean;

  /**
   * The required attribute is a boolean attribute. When specified, the element is required.
   */
  @Prop({ reflect: true }) required?: boolean;

  /**
   * The size attribute gives the number of characters that, in a visual rendering, the user agent is to allow the user to see while editing the element's value.
   */
  @Prop({ reflect: true }) size?: number;

  /**
   * The type attribute changes the input type to text, number etc.
   */
  @Prop({ reflect: true }) type?: string = 'text';

  /**
   * The value content attribute gives the default value of the input element.
   */
  @Prop({ reflect: true }) value?: string;

  /**
   * The variant attribute specifies a visual expression of a select.
   */
  @Prop({ reflect: true }) variant?:
    | 'semitransparent'
    | 'white'
    | 'solid'
    | 'outline' = 'semitransparent';

  /**
   * The label-hidden attribute is a boolean attribute. When specified, the elements label gets visually hidden (it's important to still keep it displayed for accessibility reasons).
   */
  @Prop({ reflect: true }) labelHidden: string;

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
          type={this.type}
          class="elm-input"
          id={this.input_id}
          aria-invalid={this.ariainvalid}
          aria-required={this.ariarequired}
          autocomplete={this.autocomplete}
          autofocus={this.autofocus}
          data-dirname={this.dirname}
          disabled={this.disabled}
          list={this.list}
          max={this.max}
          maxlength={this.maxlength}
          min={this.min}
          minlength={this.minlength}
          name={this.name}
          pattern={this.pattern}
          placeholder={this.placeholder}
          readonly={this.readonly}
          required={this.required}
          size={this.size}
          step={this.step}
          value={this.value}
          aria-labelledby={this.input_id + '-label'}
          data-variant={this.variant}
          onChange={(event) => this.handleChange(event)}
          onInput={(event) => {
            this.valueSize = (event.target as HTMLInputElement).value.length;
          }}
        />

        <label
          class="elm-label"
          htmlFor={this.input_id}
          aria-hidden="true"
          id={this.input_id + '-label'}
          data-label-hidden={this.labelHidden}
        >
          {this.label}
        </label>
        {this.maxlength && (
          <output htmlFor={this.input_id} id={`${this.input_id}-result`}>
            {`${this.valueSize} / ${this.maxlength}`}
          </output>
        )}
        {this.description && (
          <p id={this.input_id + '-hint'} class="description">
            {this.description}
          </p>
        )}
        {this.list ? (
          <datalist id={this.list}>
            <slot />
          </datalist>
        ) : (
          ''
        )}
      </Host>
    );
  }
}
