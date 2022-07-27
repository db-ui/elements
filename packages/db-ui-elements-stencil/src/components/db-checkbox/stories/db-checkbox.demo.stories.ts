export default {
  title: 'Elements/Checkbox',
  id: 'db-checkbox',
  component: 'db-checkbox',
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
      defaultValue: 'Checkbox'
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
  return `<db-checkbox
    ${autofocus ? 'autofocus=' + autofocus : ''}
    ${checked ? 'checked=' + checked : ''}
    ${disabled ? 'disabled=' + disabled : ''}
    ${label ? 'label=' + label : ''}
    ${name ? 'name=' + name : ''}
    ${required ? 'required=' + required : ''}
    ${value ? 'value=' + value : ''}></db-checkbox>`;
};
