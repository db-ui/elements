import { Component, Host, h, Prop } from '@stencil/core';
import { uuid } from '../../utils/utils';

@Component({
  tag: 'db-chip',
  styleUrl: 'db-chip.scss'
})
export class DbChip {
  /**
   *  Decides which interactiontype you want to use: filter (1-n); selection (1);
   */
  @Prop({ reflect: true }) interactiontype: 'filter' | 'selection' =
    'selection';

  /**
   * The disabled attribute can be set to keep a user from clicking on the chip.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * Attribute to add icon before chip.
   */
  @Prop({ reflect: true }) icon: string;

  /**
   * Attribute to add icon after chip.
   */
  @Prop({ reflect: true }) iconafter?: string;

  /**
   * The input_id of a label form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a label element.
   */
  @Prop({ reflect: true }) input_id: string = 'chip-' + uuid();

  /**
   *  Name to group multiple chips.
   */
  @Prop({ reflect: true }) name = 'chips';

  /**
   *  Selected state
   */
  @Prop({ reflect: true }) selected? = false;

  /**
   * Predefined variants to change background color and font color.
   */
  @Prop({ reflect: true }) variant:
    | 'informative'
    | 'success'
    | 'warning'
    | 'error'
    | 'track'
    | 'poi-essen-trinken'
    | 'poi-einkaufen'
    | 'poi-gesundheit'
    | 'poi-kunst-kultur'
    | 'poi-wissenswertes'
    | 'poi-freizeit'
    | 'poi-zivile-rel-einrichtungen'
    | 'poi-dienstleistungen'
    | 'poi-db-services-einrichtung'
    | 'poi-wegeleitung';

  render() {
    return (
      <Host>
        <input
          class="elm-chip"
          type={this.interactiontype === 'filter' ? 'checkbox' : 'radio'}
          id={this.input_id}
          data-type={this.interactiontype}
          disabled={this.disabled}
          name={this.name}
          checked={this.selected}
        />
        <label
          htmlFor={this.input_id}
          role="button"
          aria-hidden="true"
          data-variant={this.variant}
        >
          {this.icon ? <db-icon variant="20-outline" icon={this.icon} /> : null}
          <slot />
          {this.iconafter ? (
            <db-icon variant="20-outline" icon={this.iconafter} />
          ) : null}
        </label>
      </Host>
    );
  }
}
