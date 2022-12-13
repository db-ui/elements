import { Component, Element, h, Prop } from '@stencil/core';
import { DbLinkType } from '../db-link/db-link-type';
import { parseData } from '../../utils/utils';

const getCompDataHtml = (compData: DbLinkType[]) => {
  if (!compData) return '';
  return compData
    .map(
      (data) =>
        `<li><db-link href="${data.href}" target="${data.target}">${data.label}</db-link></li>`
    )
    .join('\n');
};
@Component({
  tag: 'db-breadcrumb',
  styleUrl: 'db-breadcrumb.scss'
})
export class DbBreadcrumb {
  /**
   * The data attribute can be used to generate breadcrumb by data.
   */
  @Prop({ reflect: true }) data?: string;

  /**
   * an optional [`aria-label`-attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
   */
  @Prop({ reflect: true }) arialabel: string;
  private compData: DbLinkType[];

  private hasItemsWrapper: boolean;

  get children(): Element[] {
    return this._children;
  }

  set children(value: Element[]) {
    this._children = value;
  }
  private _children: Element[];

  @Element() host: HTMLDbBreadcrumbElement;

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
      <nav class="cmp-breadcrumb" aria-label={this.arialabel}>
        {this.compData && <ol innerHTML={getCompDataHtml(this.compData)} />}
        {!this.compData && (
          <ol>
            {!this.hasItemsWrapper &&
              this._children.map((child, index) => (
                <li
                  key={`cmp-breadcrumb-item-${index}`}
                  innerHTML={child.outerHTML}
                />
              ))}
            {this.hasItemsWrapper && <slot />}
          </ol>
        )}
      </nav>
    );
  }
}
