import { iconset } from '../../db-icon/iconset.array';

iconset.unshift('');

export default {
  title: '03-Action/Button',
  id: 'db-button',
  component: 'db-button',
  parameters: {
    // TODO: If we want to show canvas and docs
    /* previewTabs: {
      'storybook/docs/panel': { hidden: true },
      canvas: { hidden: true }
    },*/
    viewMode: 'docs'
  },
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'Button',
      name: 'example text'
    },
    variant: {
      control: {
        options: [
          'primary',
          'secondary',
          'secondary-inverted',
          'tertiary',
          'ghost'
        ],
        type: 'select'
      },
      defaultValue: 'primary'
    },
    ariaexpanded: {
      control: {
        options: ['', 'true', 'false'],
        type: 'select'
      }
    },
    ariapressed: {
      control: {
        options: ['', 'true', 'false'],
        type: 'select'
      }
    },
    disabled: {
      control: 'boolean'
    },
    formaction: {
      control: 'text'
    },
    formenctype: {
      control: 'text',
      defaultValue: ''
    },
    formmethod: {
      control: {
        options: ['', 'get', 'post'],
        type: 'select'
      }
    },
    formnovalidate: {
      control: 'boolean'
    },
    formtarget: {
      control: {
        options: ['', '_self', '_blank', '_parent', '_top'],
        type: 'select'
      }
    },
    icon: {
      control: {
        options: iconset,
        type: 'select'
      },
      defaultValue: ''
    },
    icononly: {
      control: 'boolean'
    },
    name: {
      control: 'text',
      defaultValue: ''
    },
    tooltip: {
      control: 'text',
      defaultValue: ''
    },
    type: {
      control: {
        options: ['button', 'reset', 'submit'],
        type: 'select'
      }
    },
    value: {
      control: 'text',
      defaultValue: ''
    },
    width: {
      control: 'text',
      defaultValue: ''
    },
    state: {
      control: 'text',
      defaultValue: ''
    }
  }
};

export const LiveDemo = ({
  ariaexpanded,
  ariapressed,
  disabled,
  formaction,
  formenctype,
  formmethod,
  formnovalidate,
  formtarget,
  icon,
  icononly,
  name,
  text,
  tooltip,
  type,
  value,
  variant
}) => {
  return `<db-button
    ${ariaexpanded ? 'ariaexpanded=' + ariaexpanded : ''}
    ${ariapressed ? 'ariapressed=' + ariapressed : ''}
    ${disabled ? 'disabled=' + disabled : ''}
    ${formaction ? 'formaction=' + formaction : ''}
    ${formenctype ? 'formenctype=' + formenctype : ''}
    formmethod=${formmethod}
    ${formnovalidate ? 'formnovalidate=' + formnovalidate : ''}
    ${formtarget ? 'formtarget=' + formtarget : ''}
    ${icon ? 'icon=' + icon : ''}
    ${icononly ? 'icononly=' + icononly : ''}
    ${name ? 'name=' + name : ''}
    type=${type}
    ${tooltip ? 'tooltip=' + tooltip : ''}
    ${value ? 'value=' + value : ''}
    variant=${variant}>${text}</db-button>`;
};
