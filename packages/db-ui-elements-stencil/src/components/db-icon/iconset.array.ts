export const iconsetAction: string[] = [
  'account',
  'add',
  'add-circle',
  'add-link',
  'alarm',
  'alarm-add',
  'alert',
  'alert-on',
  'alert-off',
  'attachment',
  'augmented-reality',
  'block',
  'bookmark',
  'bug',
  'build',
  'calendar',
  'camera',
  'cash',
  'check-circle',
  'cloud',
  'cloud-download',
  'cloud-upload',
  'compass',
  'copy',
  'credit-card',
  'dashboard',
  'delete',
  'discount',
  'document',
  'done',
  'download',
  'drag-and-drop',
  'edit',
  'face-neutral',
  'face-sad',
  'face-smiling',
  'filter',
  'fingerprint',
  'folder',
  'folder-open',
  'generic-card',
  'giftcard',
  'hearing',
  'hearing-disabled',
  'heart',
  'help',
  'image',
  'info',
  'key',
  'legal',
  'lightbulb',
  'lock-close',
  'lock-open',
  'log-out',
  'logbook',
  'minus',
  'pin',
  'print',
  'remove',
  'resize',
  'save',
  'schedule',
  'search',
  'send',
  'sepa',
  'settings',
  'share',
  'shopping-bag',
  'shopping-basket',
  'shopping-basket-disabled',
  'shopping-cart',
  'shopping-cart-disabled',
  'sort-down',
  'sort-up',
  'star',
  'swap-horizontal',
  'swap-vertical',
  'thumb-up',
  'thumb-up-down',
  'translation',
  'undo',
  'upload',
  'visibility',
  'visibility-off',
  'voucher',
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
  'microphone',
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

export const iconsetBrand: string[] = ['logo'];

export const iconsetCommunication: string[] = [
  'call',
  'chat',
  'conversation',
  'fax',
  'feedback',
  'mail',
  'mobile-off',
  'mobile-phone',
  'question',
  'receive-item',
  'share-item',
  'wifi',
  'wifi-off'
];

export const iconsetCovid: string[] = ['mask'];

export const iconsetFacilities: string[] = [
  'playground',
  'restricted-mobility-toilet',
  'shower',
  'shower-men',
  'shower-women',
  'sink',
  'wc',
  'wc-men',
  'wc-sign',
  'wc-woman'
];

export const iconsetFeature: string[] = [
  'air-condition',
  'buggy',
  'clothing-hanger',
  'day',
  'entry-aid',
  'environmental-mobility-check',
  'hydrogen',
  'luggage-compartment',
  'luggage-rack',
  'marketplace',
  'medical',
  'night',
  'no-smoking',
  'person-with-cane',
  'person-with-rollator',
  'platform',
  'power-outlet',
  'reservation',
  'standing-room',
  'support-dog'
];

export const iconsetFood: string[] = [
  'breakfast',
  'coffee-cup',
  'drink',
  'restaurant'
];

export const iconsetIT: string[] = ['database'];

export const iconsetJourney: string[] = [
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
  'mixed-class',
  'round-trip',
  'single-trip',
  'start'
];

export const iconsetMaps: string[] = [
  'gps',
  'gps-north',
  'home',
  'map',
  'parking',
  'place',
  'set-position',
  'station',
  'stop-sign',
  'train-station'
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
  'notify',
  'notify-cutoff',
  'warning'
];

export const iconsetSeat: string[] = [
  'aisle',
  'aisle-not-available',
  'bed',
  'childrens-compartment',
  'elderly',
  'handicapped',
  'parent-child-compartment',
  'priority',
  'quiet-zone',
  'table',
  'window'
];

export const iconsetTicket: string[] = [
  'bahnbonus',
  'bahnbonus-card',
  'bahncard',
  'best-price',
  'commuter-ticket',
  'komfort-check-in',
  'komfort-check-in-check',
  'komfort-check-in-circle',
  'my-travel',
  'multiple-cards',
  'multiple-passenger',
  'outward-journey',
  'qr-code',
  'return-journey',
  'ticket',
  'ticket-discount',
  'ticket-multiple',
  'time-outward-journey',
  'time-return-journey',
  'timetable',
  'travel-insurance'
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
    iconsetBrand,
    iconsetCommunication,
    iconsetCovid,
    iconsetFacilities,
    iconsetFeature,
    iconsetFood,
    iconsetIT,
    iconsetJourney,
    iconsetMaps,
    iconsetNavigation,
    iconsetNotification,
    iconsetSeat,
    iconsetTicket,
    iconsetTransportation
  )
  .sort();
