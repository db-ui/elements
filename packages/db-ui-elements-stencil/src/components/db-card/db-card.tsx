/* eslint-disable @stencil-community/decorators-style */
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
  uiCoreIllustrationPath: string = './icons/illustrative';

  /**
   * The variant which is banner or title.
   */
  @Prop({ reflect: true }) variant: 'banner' | 'title' = 'banner';

  private illustrationPaths = {
    account: 'action/db_ic_il_account.svg',
    alarm_clock: 'action/db_ic_il_alarm_clock.svg',
    ar_icon: 'action/db_ic_il_ar_icon.svg',
    calendar: 'action/db_ic_il_calendar.svg',
    christmas: 'action/db_ic_il_christmas.svg',
    clock_moving: 'action/db_ic_il_clock_moving.svg',
    compass: 'action/db_ic_il_compass.svg',
    construction_sign: 'action/db_ic_il_construction_sign.svg',
    construction_worker: 'action/db_ic_il_construction_worker.svg',
    db_clock: 'action/db_ic_il_db_clock.svg',
    diamond: 'action/db_ic_il_diamond.svg',
    fokus: 'action/db_ic_il_fokus.svg',
    gift: 'action/db_ic_il_gift.svg',
    handshake: 'action/db_ic_il_handshake.svg',
    heart: 'action/db_ic_il_heart.svg',
    information: 'action/db_ic_il_information.svg',
    onlineshop_brand: 'action/db_ic_il_onlineshop_brand.svg',
    onlineshop_feature: 'action/db_ic_il_onlineshop_feature.svg',
    pdf: 'action/db_ic_il_pdf.svg',
    printer: 'action/db_ic_il_printer.svg',
    savings: 'action/db_ic_il_savings.svg',
    search: 'action/db_ic_il_search.svg',
    tips: 'action/db_ic_il_tips.svg',
    trash: 'action/db_ic_il_trash.svg',
    broken: 'communication/db_ic_il_broken.svg',
    chat: 'communication/db_ic_il_chat.svg',
    customer_feedback: 'communication/db_ic_il_customer_feedback.svg',
    envelope_closed: 'communication/db_ic_il_envelope_closed.svg',
    envelope_open: 'communication/db_ic_il_envelope_open.svg',
    error: 'communication/db_ic_il_error.svg',
    hashtag: 'communication/db_ic_il_hashtag.svg',
    wifi: 'communication/db_ic_il_wifi.svg',
    '2g_rule': 'covid_19/db_ic_il_2g_rule.svg',
    '3g_rule': 'covid_19/db_ic_il_3g_rule.svg',
    distance: 'covid_19/db_ic_il_distance.svg',
    ffp2_mask: 'covid_19/db_ic_il_ffp2_mask.svg',
    ffp2_mask_with_sign: 'covid_19/db_ic_il_ffp2_mask_with_sign.svg',
    handwashing: 'covid_19/db_ic_il_handwashing.svg',
    no_handshaking: 'covid_19/db_ic_il_no_handshaking.svg',
    recovered: 'covid_19/db_ic_il_recovered.svg',
    single_entry: 'covid_19/db_ic_il_single_entry.svg',
    test_antigen: 'covid_19/db_ic_il_test_antigen.svg',
    test_pcr: 'covid_19/db_ic_il_test_pcr.svg',
    vaccinated: 'covid_19/db_ic_il_vaccinated.svg',
    laptop: 'devices/db_ic_il_laptop.svg',
    smartphone: 'devices/db_ic_il_smartphone.svg',
    tablet: 'devices/db_ic_il_tablet.svg',
    der_kleine_ice: 'entertainment/db_ic_il_der_kleine_ice.svg',
    gaming: 'entertainment/db_ic_il_gaming.svg',
    gaming_no_wire: 'entertainment/db_ic_il_gaming_no_wire.svg',
    movie: 'entertainment/db_ic_il_movie.svg',
    podcast: 'entertainment/db_ic_il_podcast.svg',
    sport: 'entertainment/db_ic_il_sport.svg',
    green: 'feature/db_ic_il_green.svg',
    green_energy: 'feature/db_ic_il_green_energy.svg',
    mobile_payment: 'feature/db_ic_il_mobile_payment.svg',
    nfc_scan: 'feature/db_ic_il_nfc_scan.svg',
    whats_schmutzig: 'feature/db_ic_il_whats_schmutzig.svg',
    coffee_cup: 'food/db_ic_il_coffee_cup.svg',
    restaurant: 'food/db_ic_il_restaurant.svg',
    home: 'maps/db_ic_il_home.svg',
    location: 'maps/db_ic_il_location.svg',
    disruptions: 'news/db_ic_il_disruptions.svg',
    news: 'news/db_ic_il_news.svg',
    newsletter: 'news/db_ic_il_newsletter.svg',
    newspaper: 'news/db_ic_il_newspaper.svg',
    s_bahn_magazin_muenchen: 'news/db_ic_il_s_bahn_magazin_muenchen.svg',
    db_ticket_shop: 'station/db_ic_il_db_ticket_shop.svg',
    db_ticket_vending_machine: 'station/db_ic_il_db_ticket_vending_machine.svg',
    db_trainstation: 'station/db_ic_il_db_trainstation.svg',
    db_trainstation_with_train:
      'station/db_ic_il_db_trainstation_with_train.svg',
    db_travel_center: 'station/db_ic_il_db_travel_center.svg',
    db_video_travel_center: 'station/db_ic_il_db_video_travel_center.svg',
    kiosk: 'station/db_ic_il_kiosk.svg',
    mini_store: 'station/db_ic_il_mini_store.svg',
    classic_printout: 'ticket/db_ic_il_classic_printout.svg',
    mobileticket_brand: 'ticket/db_ic_il_mobileticket_brand.svg',
    mobileticket_feature: 'ticket/db_ic_il_mobileticket_feature.svg',
    onlineticket_brand: 'ticket/db_ic_il_onlineticket_brand.svg',
    onlineticket_feature: 'ticket/db_ic_il_onlineticket_feature.svg',
    scan_ticket_printout: 'ticket/db_ic_il_scan_ticket_printout.svg',
    show_ticket: 'ticket/db_ic_il_show_ticket.svg',
    tickets: 'ticket/db_ic_il_tickets.svg',
    airplane: 'transportation/db_ic_il_airplane.svg',
    airplane_2: 'transportation/db_ic_il_airplane_2.svg',
    bicycle: 'transportation/db_ic_il_bicycle.svg',
    bike_trailer: 'transportation/db_ic_il_bike_trailer.svg',
    buggy: 'transportation/db_ic_il_buggy.svg',
    bus_side_view: 'transportation/db_ic_il_bus_side_view.svg',
    call_a_bike: 'transportation/db_ic_il_call_a_bike.svg',
    car: 'transportation/db_ic_il_car.svg',
    car_side_view: 'transportation/db_ic_il_car_side_view.svg',
    commuter_train: 'transportation/db_ic_il_commuter_train.svg',
    electric_scooter: 'transportation/db_ic_il_electric_scooter.svg',
    ev_car: 'transportation/db_ic_il_ev_car.svg',
    ferry: 'transportation/db_ic_il_ferry.svg',
    handcart: 'transportation/db_ic_il_handcart.svg',
    ice: 'transportation/db_ic_il_ice.svg',
    intercity_train: 'transportation/db_ic_il_intercity_train.svg',
    local_bus: 'transportation/db_ic_il_local_bus.svg',
    local_train: 'transportation/db_ic_il_local_train.svg',
    long_distance_bus: 'transportation/db_ic_il_long_distance_bus.svg',
    scooter: 'transportation/db_ic_il_scooter.svg',
    self_driving_side_view:
      'transportation/db_ic_il_self_driving_side_view.svg',
    speedboat: 'transportation/db_ic_il_speedboat.svg',
    subway: 'transportation/db_ic_il_subway.svg',
    taxi: 'transportation/db_ic_il_taxi.svg',
    tram: 'transportation/db_ic_il_tram.svg',
    advertising_transportation:
      'travel/db_ic_il_advertising_transportation.svg',
    bear: 'travel/db_ic_il_bear.svg',
    db_comfort_checkin: 'travel/db_ic_il_db_comfort_checkin.svg',
    delayed: 'travel/db_ic_il_delayed.svg',
    dog: 'travel/db_ic_il_dog.svg',
    id_card: 'travel/db_ic_il_id_card.svg',
    itinerary: 'travel/db_ic_il_itinerary.svg',
    lost_and_found: 'travel/db_ic_il_lost_and_found.svg',
    luggage: 'travel/db_ic_il_luggage.svg',
    passenger_rights: 'travel/db_ic_il_passenger_rights.svg',
    poi_berlin: 'travel/db_ic_il_poi_berlin.svg',
    poi_berlin_alternative: 'travel/db_ic_il_poi_berlin_alternative.svg',
    suitcase: 'travel/db_ic_il_suitcase.svg',
    timetable: 'travel/db_ic_il_timetable.svg',
    zuginformation: 'travel/db_ic_il_zuginformation.svg',
    blizzard: 'weather/db_ic_il_blizzard.svg',
    thunderstorm: 'weather/db_ic_il_thunderstorm.svg'
  };

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
                href={`${this.uiCoreIllustrationPath}/${
                  this.illustrationPaths[this.illustration]
                }#icon`}
              />
            </svg>
          )}
          {!this.illustration && this.image && (
            <img src={this.image} height="64" width="64" alt={this.alt} />
          )}
          <figcaption>
            {this.header && <db-headline>{this.header}</db-headline>}
            {this.content && <p>{this.content}</p>}
            {!this.header && !this.content && <slot />}
          </figcaption>
        </figure>
      </div>
    );
  }
}
