import { Component, Element, h, Host, Prop } from '@stencil/core';
import { DbLinkType } from '../db-link/db-link-type';
import { getDefaultLinkData, parseData } from '../../utils/utils';

@Component({
  tag: 'db-metanavigation',
  styleUrl: 'db-metanavigation.scss'
})
export class DbMetanavigation {
  /**
   * The data attribute can be used to generate metanavigation by data.
   */
  @Prop({ reflect: true }) data?: string;

  private compData: DbLinkType[];

  private hasItemsWrapper: boolean;

  get children(): Element[] {
    return this._children;
  }

  set children(value: Element[]) {
    this._children = value;
  }
  private _children: Element[];

  @Element() host: HTMLDbMetanavigationElement;

  componentWillLoad() {
    if (this.data) {
      this.compData = parseData(this.data);
    } else {
      this._children = Array.from(this.host.children);
      if (this.children.find((child) => child.tagName.toLowerCase() === 'li')) {
        this.hasItemsWrapper = true;
      } else {
        this.host.innerHTML = '';
      }
    }
  }

  render() {
    return (
      <Host>
        {this.compData && (
          <ul
            class="cmp-metanavigation"
            innerHTML={getDefaultLinkData(this.compData)}
          />
        )}
        {!this.compData && (
          <ul class="cmp-metanavigation">
            {!this.hasItemsWrapper &&
              this._children.map((child, index) => (
                <li
                  key={`cmp-metanavigation-item-${index}`}
                  innerHTML={child.outerHTML}
                />
              ))}
            {this.hasItemsWrapper && <slot />}
          </ul>
        )}
      </Host>
    );
  }
}
