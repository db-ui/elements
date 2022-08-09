import { Component, Element, h, Host, Prop } from '@stencil/core';
import { setMobileScroll } from '../../utils/utils';

@Component({
  tag: 'db-header',
  styleUrl: 'db-header.scss'
})
export class DbHeader {
  /**
   * The mobile attribute can be set to add a scrolling behaviour to the header.
   */
  @Prop({ reflect: false, attribute: 'mobile' }) mobile?: boolean = false;

  @Element() host: HTMLDbHeaderElement;

  componentWillLoad() {
    if (this.mobile) {
      setMobileScroll(this.host);
    }
  }

  render() {
    return (
      <Host>
        {this.mobile && <div class="rea-header mobile-container" />}
        <header class="rea-header" role="banner">
          <slot />
        </header>
      </Host>
    );
  }
}
