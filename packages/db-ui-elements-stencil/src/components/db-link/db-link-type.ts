export type DbLinkType = {
  href: string;
  label: string;
  icon?: string;
  title?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  ariaCurrent?:
    | 'page'
    | 'step'
    | 'location'
    | 'date'
    | 'time'
    | 'true'
    | 'false';
};
