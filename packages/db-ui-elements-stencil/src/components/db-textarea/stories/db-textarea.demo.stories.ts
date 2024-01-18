export default {
  title: '05-Data-Input/Textarea',
  id: 'db-textarea',
  component: 'db-textarea',
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
    autofocus: {
      control: 'boolean'
    },
    cols: {
      control: 'number'
    },
    dirname: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    input_id: {
      control: 'text'
    },
    label: {
      control: 'text',
      defaultValue: 'Textarea'
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
    placeholder: {
      control: 'text'
    },
    readonly: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    rows: {
      control: 'number'
    },
    wrap: {
      control: {
        options: ['', 'soft', 'hard', 'off'],
        type: 'select'
      },
      defaultValue: ''
    },
    labelHidden: {
      control: 'boolean'
    }
  }
};

export const LiveDemo = ({
  ariainvalid,
  ariarequired,
  autofocus,
  cols,
  dirname,
  disabled,
  input_id,
  label,
  maxlength,
  minlength,
  name,
  placeholder,
  readonly,
  required,
  rows,
  wrap
}) => {
  return `<db-textarea
        ${ariainvalid ? 'autocomplete=' + ariainvalid : ''}
        ${ariarequired ? 'autocomplete=' + ariarequired : ''}
        ${autofocus ? 'autofocus=' + autofocus : ''}
        ${cols ? 'cols=' + cols : ''}
        ${dirname ? 'dirname=' + dirname : ''}
        ${disabled ? 'disabled=' + disabled : ''}
        ${input_id ? 'input_id=' + input_id : ''}
        ${label ? 'label=' + label : ''}
        ${maxlength ? 'maxlength=' + maxlength : ''}
        ${minlength ? 'minlength=' + minlength : ''}
        ${name ? 'name=' + name : ''}
        ${placeholder ? 'placeholder=' + placeholder : ''}
        ${readonly ? 'readonly=' + readonly : ''}
        ${required ? 'required=' + required : ''}
        ${rows ? 'rows=' + rows : ''}
        ${wrap ? 'wrap=' + wrap : ''}></db-textarea>`;
};
