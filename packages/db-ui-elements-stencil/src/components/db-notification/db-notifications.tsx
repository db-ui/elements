import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-notifications',
  styleUrl: 'db-notifications.scss',
  scoped: false
})
export class DbNotifications {
  /**
   * The arialive attribute will interrupt the screenreader immediately and read
   * out the notification if set to "assertive", while it will wait for the
   * user's idleness when set to "polite"
   */
  @Prop({ reflect: true }) arialive: 'assertive' | 'polite' = 'polite';

  /**
   * Notifications have two variants ("hovering" and "alert") which change the styling.
   */
  @Prop({ reflect: true }) variant: 'alert' | 'hovering' = 'hovering';

  render() {
    return (
      <section aria-live={this.arialive} data-variant={this.variant}>
        <slot></slot>
      </section>
    );
  }
}
