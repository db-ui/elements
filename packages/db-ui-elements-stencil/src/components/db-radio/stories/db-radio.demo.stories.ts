export default {
  title: 'Data-Input/Radio',
  id: 'db-radio',
  component: 'db-radio',
  parameters: {
    viewMode: 'docs'
  },
  argTypes: {
    autofocus: {
      control: 'boolean'
    },
    checked: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    label: {
      control: 'text',
      defaultValue: 'Radio'
    },
    name: {
      control: 'text'
    },
    required: {
      control: 'boolean'
    },
    value: {
      control: 'text'
    }
  }
};

export const LiveDemo = ({
  autofocus,
  checked,
  disabled,
  label,
  name,
  required,
  value
}) => {
  return `<db-radio
      ${autofocus ? 'autofocus=' + autofocus : ''}
      ${checked ? 'checked=' + checked : ''}
      ${disabled ? 'disabled=' + disabled : ''}
      ${label ? 'label=' + label : ''}
      ${name ? 'name=' + name : ''}
      ${required ? 'required=' + required : ''}
      ${value ? 'value=' + value : ''}></db-radio>`;
};
