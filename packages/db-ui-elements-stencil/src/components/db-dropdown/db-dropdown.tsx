import { Component, h, Prop, Element } from '@stencil/core';
import { DbLinkType } from '../db-link/db-link-type';
import { getDefaultLinkData, parseData } from '../../utils/utils';

@Component({
  tag: 'db-dropdown',
  styleUrl: 'db-dropdown.scss'
})
export class DbDropdown {
  /**
   * The data attribute can be used to generate dropdown by data.
   */
  @Prop({ reflect: true }) data?: string;

  /**
   * The opposite attribute, changes the behaviour: dropdown -> left.
   */
  @Prop({ reflect: true }) opposite: boolean;

  /**
   * The summary attribute, shows a text for accessibility.
   */
  @Prop({ reflect: true }) summary = '';

  /**
   * Define an icon by it's identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed in front of the elements content.
   */
  @Prop({ reflect: true }) icon?: string;

  private compData: DbLinkType[];

  private hasItemsWrapper: boolean;

  get children(): Element[] {
    return this._children;
  }

  set children(value: Element[]) {
    this._children = value;
  }
  private _children: Element[];

  @Element() host: HTMLDbDropdownElement;

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
      <details
        class="cmp-dropdown"
        data-horizontal-position={this.opposite && 'opposite'}
      >
        <summary>
          {this.icon ? <db-icon icon={this.icon} /> : this.summary}
        </summary>
        {this.compData && (
          <menu type="toolbar" innerHTML={getDefaultLinkData(this.compData)} />
        )}
        {!this.compData && (
          <menu type="toolbar">
            {!this.hasItemsWrapper &&
              this._children.map((child, index) => (
                <li key={`cmp-dropdown-${index}`} innerHTML={child.outerHTML} />
              ))}
            {this.hasItemsWrapper && <slot />}
          </menu>
        )}
      </details>
    );
  }
}
