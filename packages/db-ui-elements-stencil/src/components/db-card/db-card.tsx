/* eslint-disable @stencil/decorators-style */
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-card',
  styleUrl: 'db-card.scss'
})
export class DbCard {
  /**
   * The alt attribute for the image.
   */
  @Prop({ reflect: true }) alt: string;

  /**
   * The header represents the title of the card. It's optional and you can use slot for custom tags.
   */
  @Prop({ reflect: true }) header: string;

  /**
   * The content represents the content of the card. It's optional and you can use slot for custom tags.
   */
  @Prop({ reflect: true }) content: string;

  /**
   * The prop image can be used instead of illustration to show a custom img.
   */
  @Prop({ reflect: true }) image: string;

  /**
   * The illustration which will show a predefined svg. -Development: enum can be generated with /scripts/illustration-generator-
   */
  @Prop({ reflect: true }) illustration:
    | 'alarm-clock'
    | 'bicycle'
    | 'blizzard'
    | 'broken'
    | 'buggy'
    | 'bus'
    | 'calendar'
    | 'car'
    | 'chat'
    | 'christmas'
    | 'clock-moving'
    | 'coffee-cup'
    | 'compass'
    | 'construction-sign'
    | 'construction-worker'
    | 'customer-feedback'
    | 'db-clock'
    | 'db-comfort-checkin'
    | 'db-ticket-shop'
    | 'db-ticket-vending-machine'
    | 'db-trainstation-with-train'
    | 'db-trainstation'
    | 'db-travel-center'
    | 'db-video-travel-center'
    | 'delayed'
    | 'der-kleine-ice'
    | 'diamond'
    | 'disruptions'
    | 'distance'
    | 'error'
    | 'ffp2-mask-with-sign'
    | 'ffp2-mask'
    | 'fokus'
    | 'gaming-no-wire'
    | 'gaming'
    | 'green-energy'
    | 'green'
    | 'handshake'
    | 'handwashing'
    | 'hashtag'
    | 'heart'
    | 'home'
    | 'information'
    | 'itinerary'
    | 'kiosk'
    | 'laptop'
    | 'local-train'
    | 'location'
    | 'lost-and-found'
    | 'luggage'
    | 'mask'
    | 'mini-store'
    | 'mobileticket-brand'
    | 'mobileticket-feature'
    | 'movie'
    | 'news'
    | 'newsletter'
    | 'newspaper'
    | 'no-handshaking'
    | 'onlineshop-brand'
    | 'onlineshop-feature'
    | 'onlineticket-brand'
    | 'onlineticket-feature'
    | 'passenger-rights'
    | 'podcast'
    | 'poi-berlin-copy'
    | 'poi-berlin'
    | 'restaurant'
    | 'savings'
    | 'scan-ticket-printout'
    | 'search'
    | 'self-driving'
    | 'show-ticket'
    | 'single-entry'
    | 'smartphone'
    | 'sport'
    | 'suitcase'
    | 'tablet'
    | 'thunderstorm'
    | 'tickets'
    | 'timetable'
    | 'tips'
    | 'transportation-advertising'
    | 'whats-schmutzig'
    | 'wifi';

  /**
   * The illustration-path defines the path to DB UI Core illustrations. If you want to use other/custom images use the image prop instead.
   */
  @Prop({ reflect: true, attribute: 'illustration-path' })
  uiCoreIllustrationPath: string = './icons/illustration';

  /**
   * The variant which is banner or title.
   */
  @Prop({ reflect: true }) variant: 'banner' | 'title' = 'banner';

  render() {
    return (
      <div class="cmp-card" data-variant={this.variant}>
        <figure>
          {this.illustration && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              aria-hidden="true"
            >
              <use
                href={`${this.uiCoreIllustrationPath}/ic-db-il_puls_${this.illustration}.svg#${this.illustration}`}
              />
            </svg>
          )}
          {!this.illustration && this.image && (
            <img src={this.image} height="64" width="64" alt={this.alt} />
          )}
          <figcaption>
            {this.header && <h3>{this.header}</h3>}
            {this.content && <p>{this.content}</p>}
            {!this.header && !this.content && <slot />}
          </figcaption>
        </figure>
      </div>
    );
  }
}
