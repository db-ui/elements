import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-button',
  styleUrl: 'db-button.scss'
})
export class DbButton {
  /**
   * If the button controls a grouping of other elements, the ariaexpanded state indicates whether the controlled grouping is currently expanded or collapsed.
   */
  @Prop({ reflect: true }) ariaexpanded?: 'true' | 'false' = null;

  /**
   * Defines the button as a toggle button. The value of aria-pressed describes the state of the button.
   */
  @Prop({ reflect: true }) ariapressed?: 'true' | 'false' = null;

  /**
   * The disabled attribute can be set to keep a user from clicking on the button.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * The formaction attribute specifies where to send the form-data when a form is submitted. Only for type="submit".
   */
  @Prop({ reflect: true }) formaction?: string;

  /**
   * The formenctype attribute specifies how form-data should be encoded before sending it to a server. Only for type="submit".
   */
  @Prop({ reflect: true }) formenctype?: string;

  /**
   * The formmethod attribute specifies how to send the form-data (which HTTP method to use). Only for type="submit".
   */
  @Prop({ reflect: true }) formmethod?: 'get' | 'post';

  /**
   * The formnovalidate attribute specifies which that the form-data should not be validated on submission. Only for type="submit".
   */
  @Prop({ reflect: true }) formnovalidate?: boolean = false;

  /**
   * The formtarget attribute specifies where to display the response after submitting the form. Only for type="submit".
   */
  @Prop({ reflect: true }) formtarget?: '_self' | '_blank' | '_parent' | '_top';

  /**
   * Define an icon by it's identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed in front of the elements content.
   */
  @Prop({ reflect: true }) icon?: string;

  /**
   * Define an icon by it's identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed behind the elements content.
   */
  @Prop({ reflect: true }) iconafter?: string;

  /**
   * Define the text next to the icon specified via the icon Property to get hidden.
   */
  @Prop({ reflect: true }) icononly?: boolean;

  /**
   * The name attribute specifies a name for the button.
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * The tooltip attribute specifies the title of button.
   */
  @Prop({ reflect: true }) tooltip?: string;

  /**
   * The type attribute specifies the type of button.
   */
  @Prop({ reflect: true }) type: 'button' | 'reset' | 'submit' = 'submit';

  /**
   * The value attribute specifies an initial value for the button.
   */
  @Prop({ reflect: true }) value?: string;

  /**
   * The width attribute let's you overwrite the standard display of the button width.
   */
  @Prop({ reflect: true }) width?: 'auto' | 'full';

  /**
   * The variant attribute specifies a visual expression of button.
   */
  @Prop({ reflect: true }) variant:
    | 'primary'
    | 'secondary-outline'
    | 'secondary-solid'
    | 'tertiary-plain'
    | 'brand-primary';

  /**
   * The size attribute specifies the button size out of three sizes.
   */
  @Prop({ reflect: true }) size?: 'small' | 'regular' | 'large';

  render() {
    return (
      <button
        class={'elm-button' + (this.icononly ? ' is-icon-text-replace' : '')}
        aria-expanded={this.ariaexpanded}
        aria-pressed={this.ariapressed}
        data-variant={this.variant}
        disabled={this.disabled}
        formaction={this.formaction}
        formenctype={this.formenctype}
        formmethod={this.formmethod}
        formnovalidate={this.formnovalidate}
        formtarget={this.formtarget}
        name={this.name}
        title={this.tooltip}
        type={this.type}
        value={this.value}
        data-size={this.size}
        data-width={this.width}
      >
        {this.icon ? <db-icon icon={this.icon} /> : null}
        <slot />
        {this.iconafter ? (
          <db-icon icon={this.iconafter} class="iconafter" />
        ) : null}
      </button>
    );
  }
}
