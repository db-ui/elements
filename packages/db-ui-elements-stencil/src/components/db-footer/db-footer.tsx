import { Component, Element, h, Host, Prop } from '@stencil/core';
import { setMobileScroll } from '../../utils/utils';

@Component({
  tag: 'db-footer',
  styleUrl: 'db-footer.scss'
})
export class DbFooter {
  /**
   * The border attribute can be set to add a border on top of the footer.
   */
  @Prop({ reflect: false }) border?: boolean = false;

  /**
   * The copyright attribute can be set to enable a copyright string with current year.
   */
  @Prop({ reflect: false }) copyright?: boolean = false;

  /**
   * The mobile attribute can be set to add a scrolling behaviour to the footer.
   */
  @Prop({ reflect: false }) mobile?: boolean = false;

  @Element() host: HTMLDbFooterElement;

  componentWillLoad() {
    if (this.mobile) {
      setMobileScroll(this.host);
    }
  }

  private getCopyRight(): string {
    return `Copyright ${new Date().getFullYear()} DB Systel`;
  }

  render() {
    return (
      <Host>
        {this.mobile && <div class="rea-footer mobile-container" />}
        <footer class={`rea-footer ${this.border ? 'has-border' : ''}`}>
          {this.copyright ? <span>{this.getCopyRight()}</span> : null}
          <slot />
        </footer>
      </Host>
    );
  }
}
