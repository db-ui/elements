import { iconset } from '../../db-icon/iconset.array';

iconset.unshift('');

export default {
  title: 'Navigation/Link',
  id: 'db-link',
  component: 'db-link',
  parameters: {
    viewMode: 'docs'
  },
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'link',
      name: 'example text'
    },
    href: {
      control: 'text'
    },
    hreflang: {
      control: 'text'
    },
    icon: {
      control: {
        options: iconset,
        type: 'select'
      },
      defaultValue: ''
    },
    media: {
      control: 'text'
    },
    rel: {
      control: {
        options: [
          'alternate',
          'appendix',
          'author',
          'bookmark',
          'chapter',
          'contents',
          'copyright',
          'glossary',
          'help',
          'index',
          'license',
          'next',
          'nofollow',
          'noopener',
          'noreferrer',
          'prefetch',
          'prev',
          'search',
          'section',
          'start',
          'search',
          'subsection',
          'tag'
        ],
        type: 'select'
      },
      defaultValue: ''
    },
    target: {
      control: {
        options: ['_blank', '_self', '_parent', '_top'],
        type: 'select'
      },
      defaultValue: ''
    },
    type: {
      control: 'text'
    }
  }
};

export const LiveDemo = ({
  text,
  href,
  hreflang,
  icon,
  media,
  rel,
  target,
  type
}) => {
  return `<db-link
    ${href ? 'href=' + href : ''}
    ${hreflang ? 'hreflang=' + hreflang : ''}
    ${icon ? 'icon=' + icon : ''}
    ${media ? 'media=' + media : ''}
    ${rel ? 'rel=' + rel : ''}
    ${target ? 'target=' + target : ''}
    ${type ? 'type=' + type : ''}>${text}</db-link>`;
};
