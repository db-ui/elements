import { Component, h } from '@stencil/core';

@Component({
  tag: 'db-tab-bar',
  styleUrl: 'db-tab-bar.scss'
})
export class DbTabBar {
  render() {
    return (
      <div class="cmp-tab-bar" role="tablist">
        <slot />
      </div>
    );
  }
}
