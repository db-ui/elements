export default {
  title: '05-Data-Input/Select',
  id: 'db-select',
  component: 'db-select',
  parameters: {
    viewMode: 'docs'
  },
  argTypes: {
    ariainvalid: {
      control: {
        options: ['true', 'false'],
        type: 'select'
      }
    },
    disabled: {
      control: 'boolean'
    },
    input_id: {
      control: 'text'
    },
    label: {
      control: 'text',
      defaultValue: 'select'
    },

    multiple: {
      control: 'boolean'
    },
    name: {
      control: 'text'
    },
    required: {
      control: 'boolean'
    },
    size: {
      control: 'number'
    },
    labelHidden: {
      control: 'boolean'
    }
  }
};

export const LiveDemo = ({
  ariainvalid,
  disabled,
  input_id,
  label,
  multiple,
  name,
  required,
  size,
  labelHidden
}) => {
  return `<db-select
  ${ariainvalid ? 'ariainvalid=' + ariainvalid : ''}
  ${disabled ? 'disabled=' + disabled : ''}
  ${input_id ? 'input_id=' + input_id : 'select-randomId'}
  ${label ? 'label=' + label : ''}
  ${multiple ? 'multiple=' + multiple : ''}
  ${name ? 'name=' + name : ''}
  ${required ? 'required=' + required : ''}
  ${size ? 'size=' + size : ''}
  ${labelHidden ? 'label-hidden=' + labelHidden : ''}>
    <option selected>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </db-select>`;
};
