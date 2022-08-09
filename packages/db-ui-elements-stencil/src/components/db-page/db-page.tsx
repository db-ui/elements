import { Component, h } from '@stencil/core';

@Component({
  tag: 'db-page',
  styleUrl: 'db-page.scss'
})
export class DbPage {
  componentWillLoad() {
    if (window.screen.width >= 768) {
      const htmlTags = Array.from(document.getElementsByTagName('html'));
      htmlTags.forEach((tag) => {
        tag.style.height = '100%';
        tag.style.overflow = 'hidden';
      });
      const bodyTags = Array.from(document.getElementsByTagName('body'));
      bodyTags.forEach((tag) => {
        tag.style.height = '100%';
        tag.style.margin = '0px';
      });
      const rootTag = document.getElementById('root');
      if (rootTag) {
        rootTag.style.height = '100%';
      }
      const appTag = document.getElementById('app');
      if (appTag) {
        appTag.style.height = '100%';
      }
    }
  }

  render() {
    return (
      <div class="rea-page">
        <slot name="header" />
        <main class="rea-main">
          <slot />
        </main>
        <slot name="footer" />
      </div>
    );
  }
}
