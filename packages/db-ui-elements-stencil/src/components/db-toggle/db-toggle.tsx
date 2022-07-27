import { Component, Host, h, Prop, Event } from '@stencil/core';
import { uuid } from '../../utils/utils';

@Component({
  tag: 'db-toggle',
  styleUrl: 'db-toggle.scss'
})
export class DbToggle {
  /**
   * Optional id for the label - otherwise random id will be set
   */
  @Prop({ reflect: false }) htmlid: string = 'db-' + uuid();
  /**
   * Disabled property
   */
  @Prop({ reflect: true }) disabled: boolean;
  /**
   * Checked property
   */
  @Prop({ reflect: true }) checked: boolean;

  private handleChange(event) {
    this.dbChange.emit(event);
  }

  /**
   * Mapping for default change Event
   */
  @Event() dbChange;

  render() {
    return (
      <Host>
        <input
          type="checkbox"
          role="switch"
          class="elm-toggle"
          disabled={this.disabled}
          checked={this.checked}
          id={this.htmlid}
          onChange={(event) => this.handleChange(event)}
        />
        <label class="elm-label" htmlFor={this.htmlid}>
          <slot />
        </label>
      </Host>
    );
  }
}
