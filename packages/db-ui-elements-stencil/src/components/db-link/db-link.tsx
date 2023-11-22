import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-link',
  styleUrl: 'db-link.scss'
})
export class DbLink {
  /**
   * The current attribute is the state on an element indicates that this element represents the current item within a container or set of related elements.
   */
  @Prop({ reflect: true }) current:
    | 'page'
    | 'step'
    | 'location'
    | 'date'
    | 'time'
    | 'true'
    | 'false';

  /**
   * The href attribute represents a hyperlink (a hypertext anchor).
   */
  @Prop({ reflect: true }) href: string;

  /**
   * The hreflang attribute gives the language of the linked resource. The value must be a valid BCP 47 language tag.
   */
  @Prop({ reflect: true }) hreflang: string;

  /**
   * Define an icon by it's identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed in front of the elements content.
   */
  @Prop({ reflect: true }) icon?: string;

  /**
   * The variant attribute specifies the style and size of an icon.
   */
  @Prop({ reflect: true, attribute: 'icon-variant' }) iconVariant?:
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
    | '64-outline' = '24-outline';

  /**
   * Define the text next to the icon specified via the icon Property to get hidden.
   */
  @Prop({ reflect: true }) icononly?: boolean;

  /**
   * The media attribute describes for which media the target document was designed. The value must be a valid media query. The default, if the media attribute is omitted, is "all".
   */
  @Prop({ reflect: true }) media: string;

  /**
   * The rel attribute controls what kinds of links the elements create. The attribue's value must be a set of space-separated tokens. The allowed keywords and their meanings are defined below.
   */
  @Prop({ reflect: true }) rel:
    | 'alternate'
    | 'appendix'
    | 'author'
    | 'bookmark'
    | 'chapter'
    | 'contents'
    | 'copyright'
    | 'glossary'
    | 'help'
    | 'index'
    | 'license'
    | 'next'
    | 'nofollow'
    | 'noopener'
    | 'noreferrer'
    | 'prefetch'
    | 'prev'
    | 'search'
    | 'section'
    | 'start'
    | 'subsection'
    | 'tag';

  /**
   * The target attribute gives the name of the browsing context that will be used. User agents use this name when following hyperlinks.
   */
  @Prop({ reflect: true }) target: '_blank' | '_self' | '_parent' | '_top';

  /**
   * The type attribute, if present, gives the MIME type of the linked resource. The value must be a valid MIME type. User agents must not consider the type attribute authoritative — upon fetching the resource, user agents must not use metadata included in the link to the resource to determine its type.
   */
  @Prop({ reflect: true }) type: string;

  /**
   * The text attribute can be used to set the text inside the anchor tag without slot.
   */
  @Prop({ reflect: true }) text: string;

  @Element() host: HTMLDbLinkElement;

  componentWillLoad() {
    const children = Array.from(this.host.children);
    // This is a workaround for frameworks like angular.
    // They use custom attributes like "routerLink" on an <a>.
    // We copy those attributes to the <a> inside <db-link>.
    if (children.length === 1 && children[0].tagName.toLowerCase() === 'a') {
      children[0].getAttributeNames().forEach((attribute) => {
        this[attribute] = children[0].getAttribute(attribute);
      });
      this.text = children[0].textContent;
      this.host.innerHTML = '';
    }
  }

  render() {
    return (
      <a
        class={'elm-link' + (this.icononly ? ' is-icon-text-replace' : '')}
        href={this.href}
        hreflang={this.hreflang}
        data-type={this.type}
        media={this.media}
        rel={this.rel}
        target={this.target}
        aria-current={this.current}
      >
        {this.icon ? (
          <db-icon icon={this.icon} variant={this.iconVariant} />
        ) : null}
        {this.text && this.text}
        {!this.text && <slot />}
      </a>
    );
  }
}
