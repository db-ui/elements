/*  eslint-disable @stencil-community/decorators-style */
import { Component, Element, Host, h, Prop } from '@stencil/core';
import { DbLinkType } from '../db-link/db-link-type';
import { parseData } from '../../utils/utils';

const getCompDataHtml = (compData: DbLinkType[], ariaSelectedIndex: number) => {
  if (!compData) return '';
  return compData
    .map(
      (data, index) =>
        `<li role="option" ${
          ariaSelectedIndex === index ? 'aria-selected' : ''
        } ><db-link title="${data.title}"  href="${data.href}">${
          data.label
        }</db-link></li>`
    )
    .join('\n');
};

@Component({
  tag: 'db-language-switcher',
  styleUrl: 'db-language-switcher.scss'
})
export class DbLanguageSwitcher {
  /**
   * The aria-selected-index shows the link as selected which has the given index.
   */
  @Prop({ reflect: true, attribute: 'aria-selected-index' })
  ariaSelectedIndex: number;
  /**
   * The data attribute can be used to generate linklist by data.
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

  @Element() host: HTMLDbLanguageSwitcherElement;

  componentWillLoad() {
    if (this.data) {
      this.compData = parseData(this.data);
    } else {
      this._children = Array.from(this.host.children);
      if (this.children.find((child) => child.tagName.toLowerCase() === 'li')) {
        this.hasItemsWrapper = true;
        this._children
          .filter((child) => child.tagName.toLowerCase() === 'li')
          .forEach((child, index) => {
            if (index === this.ariaSelectedIndex) {
              child.setAttribute('aria-selected', 'true');
            }
            child.setAttribute('role', 'option');
          });
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
            class="cmp-language-switcher"
            innerHTML={getCompDataHtml(this.compData, this.ariaSelectedIndex)}
          />
        )}
        {!this.compData && (
          <ul class="cmp-language-switcher">
            {!this.hasItemsWrapper &&
              this._children.map((child, index) => (
                <li
                  key={`cmp-language-switcher-item-${index}`}
                  aria-current={index === this.ariaSelectedIndex}
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
