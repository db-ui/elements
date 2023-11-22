import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-icon',
  styleUrl: 'db-icon.scss',
  shadow: true
})
export class DbIcon {
  /**
   * The icon attribute specifies the icon to use.
   */
  @Prop() icon!: string;

  /**
   * The variant attribute specifies the style and size of an icon.
   */
  @Prop() variant:
    | '16-filled'
    | '20-filled'
    | '24-filled'
    | '32-filled'
    | '48-filled'
    | '64-filled'
    | '16-outline'
    | '20-outline'
    | '24-outline'
    | '32-outline'
    | '48-outline'
    | '64-outline';

  render() {
    return (
      <span
        data-icon={this.icon}
        data-icon-variant={this.variant}
        aria-hidden="true"
      />
    );
  }
}
