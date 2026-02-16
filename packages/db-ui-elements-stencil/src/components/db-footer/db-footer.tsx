import { Component, h, Prop } from '@stencil/core';

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

  render() {
    return (
      <footer class={`rea-footer ${this.border ? 'has-border' : ''}`}>
        <span>Copyright 2023 DB Systel</span>
        <slot />
      </footer>
    );
  }
}
