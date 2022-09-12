import { Component, h } from '@stencil/core';

@Component({
  tag: 'db-header',
  styleUrl: 'db-header.scss'
})
export class DbHeader {
  render() {
    return (
      <header class="rea-header">
        <slot />
      </header>
    );
  }
}
