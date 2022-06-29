import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-notification',
  styleUrl: 'db-notification.scss',
  scoped: false
})
export class DbNotification {
  /**
   * Role will be added to the element containing the alert or status message
   * that will be read aloud by screen readers.
   */
  @Prop({ reflect: true }) role: 'alert' | 'status' = this.getRole();

  /**
   * The type attribute is used to set the type of the notification, will change
   * styling accordingly.
   */
  @Prop({ reflect: true }) type:
    | 'error'
    | 'informative'
    | 'success'
    | 'warning';

  private getRole() {
    return this.type === 'error' || this.type === 'warning'
      ? 'alert'
      : 'status';
  }

  render() {
    return (
      <div
        class="cmp-notification"
        role={this.role}
        data-type={this.type ? this.type : null}
      >
        <slot name="prenotification"></slot>
        <slot></slot>
        <slot name="postnotification"></slot>
      </div>
    );
  }
}
