import { Component, Host, h, Prop, State, Event } from '@stencil/core';
import { uuid } from '../../utils/utils';

@Component({
  tag: 'db-textarea',
  styleUrl: 'db-textarea.scss',
  scoped: true
})
export class DbTextarea {
  @State() valueSize = 0;

  /**
   * The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application.
   */
  @Prop({ reflect: true }) ariainvalid:
    | 'false'
    | 'grammar'
    | 'spelling'
    | 'true';

  /**
   * The ariarequired attribute can be applied to a form element, to indicate to an AT that it is required to complete the form.
   */
  @Prop({ reflect: true }) ariarequired: 'false' | 'true';

  /**
   * The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.
   */
  @Prop({ reflect: true }) autofocus: boolean;

  /**
   * The cols attribute specifies the expected maximum number of characters per line.
   */
  @Prop({ reflect: true }) cols: number;

  /**
   * The description attribute specifies the description/hint of the textarea.
   */
  @Prop({ reflect: true }) description: string;

  /**
   * The dirname attribute on a form control element enables the submission of the directionality of the element, and gives the name of the control that contains this value during form submission. If such an attribute is specified, its value must not be the empty string.
   */
  @Prop({ reflect: true }) dirname: string;

  /**
   * The disabled attribute can be set to keep a user from clicking on the input.
   */
  @Prop({ reflect: true }) disabled: boolean;

  /**
   * The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element.
   */
  @Prop({ reflect: true }) input_id: string = 'textarea-' + uuid();

  /**
   * The label attribute specifies the caption of the input.
   */
  @Prop({ reflect: true }) label!: string;

  /**
  /* The maxlength attribute, controlled by a dirty value flag, declares a limit on the number of characters a user can input.
  */
  @Prop({ reflect: true }) maxlength: number;

  /**
  /* The minlength attribute, when it applies, is a form control minlength attribute.
  */
  @Prop({ reflect: true }) minlength: number;

  /**
   * The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.
   */
  @Prop({ reflect: true }) name!: string;

  /**
   * The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry.
   */
  @Prop({ reflect: true }) placeholder: string;

  /**
   * The readonly attribute controls whether or not the user can edit the form control.
   */
  @Prop({ reflect: true }) readonly: boolean;

  /**
   * The required attribute is a boolean attribute. When specified, the element is required.
   */
  @Prop({ reflect: true }) required: boolean;

  /**
   * The rows attribute specifies the number of lines to show.
   */
  @Prop({ reflect: true }) rows: number;

  /**
   * The variant attribute specifies a visual expression of a select.
   */
  @Prop({ reflect: true }) variant:
    | 'semitransparent'
    | 'white'
    | 'solid'
    | 'outline' = 'semitransparent';

  /**
   * The wrap attribute indicates how the control wraps text.
   */
  @Prop({ reflect: true }) wrap: 'soft' | 'hard' | 'off ';

  /**
   * The value attribute reflects the changes to the textarea which are also emitted via event
   */
  @Prop({ reflect: true }) value: string;

  /**
   * The label-hidden attribute is a boolean attribute. When specified, the elements label gets visually hidden (it's important to still keep it displayed for accessibility reasons).
   */
  @Prop({ reflect: true }) labelHidden: string;

  private handleChange(event) {
    this.dbChange.emit(event);
    this.value = event.target?.value;
  }

  /**
   * Mapping for default change Event
   */
  @Event() dbChange;

  render() {
    return (
      <Host>
        <label
          class="elm-label"
          htmlFor={this.input_id}
          data-label-hidden={this.labelHidden}
        >
          {this.label}
        </label>

        <textarea
          class="elm-textarea"
          id={this.input_id}
          aria-invalid={this.ariainvalid}
          aria-required={this.ariarequired}
          autofocus={this.autofocus}
          cols={this.cols}
          data-dirname={this.dirname}
          disabled={this.disabled}
          maxlength={this.maxlength}
          minlength={this.minlength}
          name={this.name}
          placeholder={this.placeholder}
          readonly={this.readonly}
          required={this.required}
          rows={this.rows}
          wrap={this.wrap}
          data-variant={this.variant}
          onInput={(event) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.valueSize = event.target.value.length;
          }}
          onChange={(event) => this.handleChange(event)}
        >
          <slot />
        </textarea>
        {this.maxlength && (
          <output
            htmlFor={this.input_id}
            id={`${this.input_id}-result`}
            // anchor={this.input_id}
          >
            {`${this.valueSize} / ${this.maxlength}`}
          </output>
        )}
        {this.description && (
          <p id={`${this.input_id}-hint`} class="description">
            {this.description}
          </p>
        )}
      </Host>
    );
  }
}
