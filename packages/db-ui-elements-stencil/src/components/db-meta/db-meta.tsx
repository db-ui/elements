import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'db-meta',
  styleUrl: 'db-meta.scss',
  shadow: true
})
export class DbMeta {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
