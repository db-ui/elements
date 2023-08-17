import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-logo',
  styleUrl: 'db-logo.scss'
})
export class DbLogo {
  /**
   * The size attribute specifies the size of the logo.
   */
  @Prop() size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' = 'xlarge';

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 28"
        id="logo"
        aria-hidden="true"
        class="elm-logo"
        data-size={this.size}
      >
        <rect x="2" y="2" width="36" height="24" fill="transparent"></rect>
        <path
          d="M27.2 7.53h-1.43v4.54h1.83c1.53.03 2.47-1.04 2.47-2.27 0-1.63-.96-2.32-2.87-2.27zm.6 7.8h-2.04v4.84h1.84c.7.01 3.07 0 3.07-2.37 0-1.01-.62-2.5-2.87-2.47zm-17.1-7.7h-.83v12.54h1.53c2.58.06 3.77-2.05 3.77-5.97 0-3.6-.41-6.74-4.47-6.57zm18.4-2.76c5.13.02 5.23 4.03 5.23 4.43a4.33 4.33 0 01-3.15 4.13v.14c3.26.79 3.75 3.14 3.75 4.43 0 4.76-4.68 5.02-6.71 5.03h-6.68V4.87h7.56zm-16.9 0c4.7.02 7.23 3.01 7.23 9.03 0 5.29-1.68 9.1-7.23 9.13H5.54V4.87h6.66zm23.7-1.94H4c-.63 0-1.04.5-1.06 1.05l-.01.12v19.7c0 .57.35 1.22.95 1.26l.12.01h31.9c.63 0 1.13-.6 1.16-1.14l.01-.13V4.1a1.2 1.2 0 00-1.17-1.17zm0-2.86c2.1 0 3.97 1.56 4.03 3.63v20.2a4 4 0 01-3.83 4.03H4A3.91 3.91 0 01.07 24.1V3.9A3.8 3.8 0 013.8.07h32.1z"
          fill="#f01414"
        ></path>
      </svg>
    );
  }
}
