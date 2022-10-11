import { Component, h } from '@stencil/core';

@Component({
  tag: 'db-cards',
  styleUrl: 'db-cards.scss'
})
export class DbCards {
  render() {
    return (
      <div class="cmp-cards">
        <slot />
      </div>
    );
  }
}
