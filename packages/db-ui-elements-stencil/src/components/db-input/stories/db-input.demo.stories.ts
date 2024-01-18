export default {
  title: '05-Data-Input/Input',
  id: 'db-input',
  component: 'db-input',
  parameters: {
    viewMode: 'docs'
  },
  argTypes: {
    ariainvalid: {
      control: {
        options: ['', 'false', 'grammar', 'spelling', 'true'],
        type: 'select'
      },
      defaultValue: ''
    },
    ariarequired: {
      control: 'boolean'
    },
    autocomplete: {
      control: {
        options: ['', 'on', 'off'],
        type: 'select'
      },
      defaultValue: ''
    },
    autofocus: {
      control: 'boolean'
    },
    dirname: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    label: {
      control: 'text',
      defaultValue: 'Input'
    },
    list: {
      control: 'text'
    },
    maxlength: {
      control: 'number'
    },
    minlength: {
      control: 'number'
    },
    name: {
      control: 'text'
    },
    pattern: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    readonly: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    size: {
      control: 'number'
    },
    value: {
      control: 'text'
    },
    labelHidden: {
      control: 'boolean'
    }
  }
};

export const LiveDemo = ({
  ariainvalid,
  ariarequired,
  autocomplete,
  autofocus,
  dirname,
  disabled,
  label,
  list,
  maxlength,
  minlength,
  name,
  pattern,
  placeholder,
  readonly,
  required,
  size,
  value
}) => {
  return `<db-input
        ${ariainvalid ? 'ariainvalid=' + ariainvalid : ''}
        ${ariarequired ? 'ariarequired=' + ariarequired : ''}
        ${autocomplete ? 'autocomplete=' + autocomplete : ''}
        ${autofocus ? 'autofocus=' + autofocus : ''}
        ${dirname ? 'dirname=' + dirname : ''}
        ${disabled ? 'disabled=' + disabled : ''}
        ${label ? 'label=' + label : ''}
        ${list ? 'list=' + list : ''}
        ${maxlength ? 'maxlength=' + maxlength : ''}
        ${minlength ? 'minlength=' + minlength : ''}
        ${name ? 'name=' + name : ''}
        ${pattern ? 'pattern=' + pattern : ''}
        ${placeholder ? 'placeholder=' + placeholder : ''}
        ${readonly ? 'readonly=' + readonly : ''}
        ${required ? 'required=' + required : ''}
        ${size ? 'size=' + size : ''}
        ${value ? 'value=' + value : ''}></db-input>`;
};
