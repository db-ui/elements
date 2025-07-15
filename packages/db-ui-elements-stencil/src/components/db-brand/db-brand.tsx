import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-brand',
  styleUrl: 'db-brand.scss'
})
export class DbBrand {
  /**
   * The site-name-link attribute can be set to make the siteName clickable (set url to root) as well.
   */
  @Prop({ reflect: true, attribute: 'site-name-link' }) siteNameLink?: boolean;

  /**
   * The alt attribute can be set to define the alternative text for the DB logo.
   */
  @Prop({ reflect: true }) alt?: string = 'Deutsche Bahn Logo';

  /**
   * The href attribute can be set to reload the current application, in general you would go to the base path of your app.
   */
  @Prop({ reflect: true, attribute: 'href' }) anchorRef = '#';

  /**
   * The title attribute can be set to show a hint while hovering over the brand.
   */
  @Prop({ reflect: true, attribute: 'title' }) anchorTitle?: string;

  /**
   * The rel attribute can be set to make a relationship to the current URL(https://developer.mozilla.org/en-US/docs/web/api/htmlanchorelement/rel).
   */
  @Prop({ reflect: true, attribute: 'rel' }) anchorRelation?: string;

  /**
   * The src attribute can be set to define another path for the DB logo.
   */
  @Prop({ reflect: true }) src?: string = './images/db_logo.svg';

  render() {
    return (
      <div class="cmp-brand">
        <a
          href={this.anchorRef}
          title={this.anchorTitle}
          rel={this.anchorRelation}
        >
          <img src={this.src} alt={this.alt} class="elm-image is-logo" />
        </a>
        {this.siteNameLink && (
          <span class="is-site-name">
            <slot />
          </span>
        )}
        {!this.siteNameLink && (
          <span class="is-site-name">
            <slot />
          </span>
        )}
      </div>
    );
  }
}
