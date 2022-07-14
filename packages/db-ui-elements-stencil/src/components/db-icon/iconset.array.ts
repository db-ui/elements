export const iconsetAction: string[] = [
  'account',
  'add',
  'add-circle',
  'alarm',
  'alarm-add',
  'alert',
  'alert-on',
  'alert-off',
  'calendar',
  'check-circle',
  'credit-card',
  'delete',
  'discount',
  'document',
  'done',
  'download',
  'edit',
  'filter',
  'generic-card',
  'giftcard',
  'heart',
  'heart-on',
  'help',
  'info',
  'legal',
  'log-out',
  'minus',
  'print',
  'remove',
  'schedule',
  'search',
  'send',
  'settings',
  'share',
  'shopping-bag',
  'shopping-basket',
  'shopping-cart',
  'star',
  'star-on',
  'swap-horizontal',
  'swap-vertical',
  'upload',
  'visibility',
  'visibility-off',
  'website',
  'zoom-in',
  'zoom-out'
];

export const iconsetAv: string[] = [
  'fast-backward-10',
  'fast-backward-30',
  'fast-backward-empty',
  'fast-forward-10',
  'fast-forward-30',
  'fast-forward-empty',
  'pause',
  'play',
  'skip-backward',
  'skip-forward',
  'stop',
  'subtitles',
  'volume-down',
  'volume-mute',
  'volume-off',
  'volume-up'
];

export const iconsetCommunication: string[] = [
  'call',
  'chat',
  'conversation',
  'fax',
  'feedback',
  'mail',
  'mobile-off',
  'mobile-phone',
  'wifi',
  'wifi-off'
];

export const iconsetCovid: string[] = ['mask'];

export const iconsetFacilities: string[] = [
  'wc',
  'wc-men',
  'wc-sign',
  'wc-woman'
];

export const iconsetFeature: string[] = [
  'entry-aid',
  'luggage-rack',
  'medical',
  'power-outlet'
];

export const iconsetFood: string[] = ['coffee-cup', 'drink', 'restaurant'];

export const iconsetJournay: string[] = [
  '1st-class',
  '2nd-class',
  'alternative-connection',
  'booking',
  'capacity-indicator',
  'capacity-indicator-fully-booked',
  'capacity-indicator-high',
  'capacity-indicator-low',
  'destination',
  'intermediary-stop',
  'round-trip',
  'single-trip',
  'start'
];

export const iconsetMaps: string[] = [
  'home',
  'map',
  'map-stop',
  'place',
  'set-position',
  'trainstation'
];

export const iconsetNavigation: string[] = [
  'arrow-back',
  'arrow-down',
  'arrow-forward',
  'arrow-up',
  'cancel',
  'chevron-left',
  'chevron-right',
  'close',
  'expand-less',
  'expand-more',
  'fullscreen',
  'fullscreen-exit',
  'grid-view',
  'link',
  'link-external',
  'list',
  'menu',
  'more-horizontal',
  'more-vertical',
  'refresh'
];

export const iconsetNotification: string[] = [
  'error',
  'error-triangle',
  'notify',
  'notify-cutoff'
];

export const iconsetSeat: string[] = [
  'aisle',
  'elderly',
  'handicapped',
  'table',
  'window'
];

export const iconsetTicket: string[] = [
  'bahnbonus',
  'bahnbonus-card',
  'bahncard',
  'commuter-ticket',
  'komfort-check-in',
  'komfort-check-in-check',
  'komfort-check-in-circle',
  'my-travel',
  'outward-journey',
  'qr-code',
  'return-journey',
  'ticket',
  'ticket-discount',
  'ticket-multiple',
  'time-outward-journey',
  'time-return-journey',
  'timetable'
];

export const iconsetTransportation: string[] = [
  'bicycle',
  'car',
  'car-sequence',
  'ice-side-view',
  'sprinter',
  'walking'
];

export const iconset: string[] = iconsetAction
  .concat(
    iconsetAv,
    iconsetCommunication,
    iconsetCovid,
    iconsetFacilities,
    iconsetFeature,
    iconsetFood,
    iconsetJournay,
    iconsetMaps,
    iconsetNavigation,
    iconsetNotification,
    iconsetSeat,
    iconsetTicket,
    iconsetTransportation
  )
  .sort();
