import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'db-tag',
  styleUrl: 'db-tag.scss'
})
export class DbTag {
  /**
   * Attribute to add icon before tag.
   */
  @Prop({ reflect: true }) icon: string;

  /**
   * Attribute to add icon after tag.
   */
  @Prop({ reflect: true }) iconafter?: string;

  /**
   * Attribute for changing the size of the tag.
   */
  @Prop({ reflect: true }) small: boolean;

  /**
   * Predefined variants to change background color and font color.
   */
  @Prop({ reflect: true }) variant:
    | 'light'
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
      <span
        class="elm-tag"
        data-variant={this.variant || false}
        data-size={this.small ? 'small' : false}
      >
        {this.icon ? <db-icon variant="20-outline" icon={this.icon} /> : null}
        <slot />
        {this.iconafter ? (
          <db-icon variant="20-outline" icon={this.iconafter} />
        ) : null}
      </span>
    );
  }
}
