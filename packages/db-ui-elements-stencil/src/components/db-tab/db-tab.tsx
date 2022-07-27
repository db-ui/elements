import { Component, Host, h, Prop } from '@stencil/core';
import { uuid } from '../../utils/utils';
@Component({
  tag: 'db-tab',
  styleUrl: 'db-tab.scss'
})
export class DbTab {
  /**
   * If the tab is checked/active.
   */
  @Prop({ reflect: true }) active: boolean;

  /**
   * The label of the tab, shown in the tab-bar.
   */
  @Prop({ reflect: true }) label: string;

  /**
   * The name of the tab bar, is required for grouping multiple tabs together. Otherwise content won't switch by clicking the tabs.
   */
  @Prop({ reflect: true }) name: string;

  private readonly id: string;

  constructor() {
    this.id = uuid();
  }

  render() {
    return (
      <Host class="cmp-db-tab">
        <input
          type="radio"
          name={this.name}
          id={this.id}
          checked={this.active}
        />
        <label htmlFor={this.id} role="tab">
          {this.label}
        </label>
        <section id={`content-${this.id}`} role="tabpanel">
          <slot />
        </section>
      </Host>
    );
  }
}
