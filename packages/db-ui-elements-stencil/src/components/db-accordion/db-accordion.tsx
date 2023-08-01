import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-accordion',
  styleUrl: 'db-accordion.scss'
})
export class DbAccordion {
  /**
   * The emphasis to highlight the summary.
   */
  @Prop() emphasis?: boolean;

  /**
   * The size increase the size of the summary.
   */
  @Prop() size?: 'small' | 'regular' | 'large' = 'regular';

  /**
   * The summary which shows the text which is visible when the accordion is collapsed.
   */
  @Prop() summary!: string;

  /**
   * The emphasis to highlight the summary.
   */
  @Prop() open?: boolean;

  render() {
    return (
      <details
        class="cmp-accordion"
        data-emphasis={this.emphasis ? 'high' : false}
        data-size={this.size}
        open={this.open}
      >
        <summary>{this.summary}</summary>
        <slot />
      </details>
    );
  }
}
