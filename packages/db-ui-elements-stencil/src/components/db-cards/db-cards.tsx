import { Component, h } from '@stencil/core';

@Component({
  tag: 'db-cards',
  styleUrl: 'db-cards.scss'
})
export class DbCards {
  render() {
    return (
      <ul class="cmp-cards">
        <slot />
      </ul>
    );
  }
}
