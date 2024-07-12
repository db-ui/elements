import { Component, h, Element, Prop } from '@stencil/core';
import {
  addIconVariantToAllDbLinksRecursive,
  parseData
} from '../../utils/utils';
import { DbLinkType } from '../db-link/db-link-type';

const getCompDataHtml = (compData: DbLinkType[]) => {
  if (!compData) return '';
  return compData
    .map(
      (data) =>
        `<li><db-link href="${data.href}" target="${
          data.target
        }" icon-variant="${data.icon ? '32-outline' : false}" icon="${
          data.icon
        }" current="${data.ariaCurrent}">${data.label}</db-link></li>`
    )
    .join('\n');
};

@Component({
  tag: 'db-sidenavi',
  styleUrl: 'db-sidenavi.scss'
})
export class DbSidenavi {
  /**
   * The data attribute can be used to generate sidenav by data.
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

  @Element() host: HTMLDbSidenaviElement;

  componentWillLoad() {
    if (this.data) {
      this.compData = parseData(this.data);
    } else {
      addIconVariantToAllDbLinksRecursive(this.host, '32-outline');
      this._children = Array.from(this.host?.children);
      if (this.children.find((child) => child.tagName.toLowerCase() === 'li')) {
        this.hasItemsWrapper = true;
      } else {
        this.host.innerHTML = '';
      }
    }
  }

  render() {
    return (
      <nav class="cmp-sidenavi">
        {this.compData && <ol innerHTML={getCompDataHtml(this.compData)} />}
        {!this.compData && (
          <ol>
            {!this.hasItemsWrapper &&
              this._children?.map((child, index) => (
                <li
                  key={`sidenavi-item-${index}`}
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
