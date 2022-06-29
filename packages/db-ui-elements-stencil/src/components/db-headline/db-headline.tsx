import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-headline',
  styleUrl: 'db-headline.scss'
})
export class DbHeadline {
  /**
   * The variant attribute specifies the size of the headline.
   */
  @Prop() variant: '1' | '2' | '3' | '4' | '5' | '6' = '3';

  render() {
    switch (this.variant) {
      case '1': {
        return (
          <h1 class="elm-headline">
            <slot />
          </h1>
        );
      }
      case '2': {
        return (
          <h2 class="elm-headline">
            <slot />
          </h2>
        );
      }
      case '4': {
        return (
          <h4 class="elm-headline">
            <slot />
          </h4>
        );
      }
      case '5': {
        return (
          <h5 class="elm-headline">
            <slot />
          </h5>
        );
      }
      case '6': {
        return (
          <h6 class="elm-headline">
            <slot />
          </h6>
        );
      }
      case '3':
      default: {
        return (
          <h3 class="elm-headline">
            <slot />
          </h3>
        );
      }
    }
  }
}
