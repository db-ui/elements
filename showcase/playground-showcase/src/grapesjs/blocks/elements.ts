import { iconset } from '../icons';

const category = 'Elements';
const media = `<db-icon icon='logo' variant='24-outline'/>`;
const formOptions = [
  { id: 'semitransparent', name: 'semitransparent' },
  { id: 'white', name: 'white' },
  { id: 'solid', name: 'solid' },
  { id: 'outline', name: 'outline' }
];
const formTrait = {
  type: 'select',
  label: 'Variant',
  name: 'variant',
  options: formOptions
};

export const DB_BUTTON = {
  key: 'db-button',
  value: {
    label: 'Button',
    media: `<img src="icons-patterns/button.svg" width="70" height="55" alt="" style="margin:auto;" />`,
    category,
    content: {
      type: 'text',
      tagName: 'db-button',
      content: 'Button',
      traits: [
        {
          type: 'select', // Type of the trait
          label: 'Variant', // The label you will see in Settings
          name: 'variant', // The name of the attribute/property to use on component
          options: [
            { id: 'primary', name: 'primary' },
            { id: 'secondary-outline', name: 'secondary-outline' },
            { id: 'secondary-solid', name: 'secondary-solid' },
            { id: 'tertiary-plain', name: 'tertiary-plain' },
            { id: 'brand-primary', name: 'brand-primary' }
          ]
        },
        {
          type: 'select',
          label: 'Icon',
          name: 'icon',
          options: iconset
            .filter((icon) => !!icon)
            .map((icon) => ({ id: icon, name: icon }))
        }
      ]
    }
  }
};

export const DB_INPUT = {
  key: 'db-input',
  value: {
    label: 'Input',
    media: `<img src="icons-patterns/input.svg" width="70" height="55" alt="" style="margin:auto;" />`,
    category,
    content: {
      type: 'text',
      tagName: 'db-input',
      content: '',
      traits: [formTrait]
    }
  }
};

export const DB_CHECKBOX = {
  key: 'db-checkbox',
  value: {
    label: 'Checkbox',
    media: `<img src="icons-patterns/checkbox.svg" width="70" height="55" alt="" style="margin:auto;" />`,
    category,
    content: {
      type: 'db-checkbox',
      tagName: 'db-checkbox',
      content: '',
      traits: ['label'],
      attributes: { label: 'Checkbox' }
    }
  }
};

export const DB_LINK = {
  key: 'db-link',
  value: {
    label: 'Link',
    media: `<img src="icons-patterns/link.svg" width="70" height="55" alt="" style="margin:auto;" />`,
    category,
    content: {
      type: 'text',
      tagName: 'db-link',
      content: 'Link',
      traits: [
        'href',
        {
          type: 'select',
          label: 'Target',
          name: 'target',
          options: [
            { id: '_blank', name: '_blank' },
            { id: '_self', name: '_self' }
          ]
        }
      ]
    },
    attributes: { href: '#', target: '_blank' }
  }
};

export const DB_ICON = {
  key: 'db-icon',
  value: {
    label: 'Icon',
    media,
    category,
    content: {
      type: 'db-icon',
      tagName: 'db-icon',
      content: ``,
      traits: [
        {
          type: 'select', // Type of the trait
          label: 'Icon', // The label you will see in Settings
          name: 'icon', // The name of the attribute/property to use on component
          options: iconset
            .filter((icon) => !!icon)
            .map((icon) => ({ id: icon, name: icon }))
        },
        {
          type: 'select', // Type of the trait
          label: 'Icon size', // The label you will see in Settings
          name: 'variant', // The name of the attribute/property to use on component
          options: [
            { id: '16-outline', name: '16 / outline' },
            { id: '20-outline', name: '20 / outline' },
            { id: '24-outline', name: '24 / outline' },
            { id: '32-outline', name: '32 / outline' },
            { id: '48-outline', name: '48 / outline' },
            { id: '64-outline', name: '64 / outline' },
            { id: '16-filled', name: '16 / filled' },
            { id: '20-filled', name: '20 / filled' },
            { id: '24-filled', name: '24 / filled' },
            { id: '32-filled', name: '32 / filled' },
            { id: '48-filled', name: '48 / filled' },
            { id: '64-filled', name: '64 / filled' }
          ]
        }
      ],
      attributes: { icon: 'account' }
    }
  }
};

export const DB_PROGRESS = {
  key: 'db-progress',
  value: {
    label: 'Progress',
    media: `<img src="icons-patterns/loader.svg" width="70" height="55" alt="" style="margin:auto;" />`,
    category,
    content: {
      type: 'db-progress',
      tagName: 'db-progress',
      content: '',
      attributes: { value: '60', circle: 'true', max: '100' },
      traits: [
        {
          type: 'checkbox',
          label: 'indeterminate',
          name: 'indeterminate'
        },
        {
          type: 'checkbox',
          label: 'circle',
          name: 'circle'
        },
        {
          type: 'number',
          placeholder: '0-100',
          label: 'value',
          name: 'value',
          min: 0, // Minimum number value
          max: 100, // Maximum number value
          step: 5 // Number of steps
        },
        {
          type: 'number',
          placeholder: '0-100',
          label: 'max',
          name: 'max',
          min: 5, // Minimum number value
          max: 100, // Maximum number value
          step: 5 // Number of steps
        }
      ]
    }
  }
};

export const DB_RADIO = {
  key: 'db-radio',
  value: {
    label: 'Radio',
    media: `<img src="icons-patterns/radio.svg" width="70" height="55" alt="" style="margin:auto;" />`,
    category,
    content: {
      type: 'db-radio',
      tagName: 'db-radio',
      content: '',
      traits: ['label', 'name'],
      attributes: { label: 'Radio', name: 'radio' }
    }
  }
};

export const DB_SELECT = {
  key: 'db-select',
  value: {
    label: 'Select',
    media: `<img src="icons-patterns/select.svg" width="70" height="55" alt="" style="margin:auto;" />`,
    category,
    content: {
      type: 'db-select',
      tagName: 'db-select',
      content: `<option selected>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>`,
      traits: [formTrait]
    }
  }
};

export const DB_TAG = {
  key: 'db-tag',
  value: {
    label: 'Tag',
    media: `<img src="icons-patterns/tag.svg" width="70" height="55" alt="" style="margin:auto;" />`,
    category,
    content: {
      type: 'text',
      tagName: 'db-tag',
      content: `TAG`,
      traits: [
        {
          type: 'select',
          label: 'Color',
          name: 'color',
          options: [
            { id: 'blue', name: 'blue' },
            { id: 'red', name: 'red' },
            { id: 'green', name: 'green' },
            { id: 'grey', name: 'grey' },
            { id: 'black', name: 'black' },
            { id: 'yellow', name: 'yellow' }
          ]
        }
      ]
    }
  }
};

export const DB_TEXTAREA = {
  key: 'db-textarea',
  value: {
    label: 'Textarea',
    media: `<img src="icons-patterns/textarea.svg" width="70" height="55" alt="" style="margin:auto;" />`,
    category,
    content: {
      type: 'text',
      tagName: 'db-textarea',
      content: '',
      traits: [formTrait]
    }
  }
};

export const DB_TOGGLE = {
  key: 'db-toggle',
  value: {
    label: 'Toggle',
    media: `<img src="icons-patterns/toggle.svg" width="70" height="55" alt="" style="margin:auto;" />`,
    category,
    content: {
      type: 'text',
      tagName: 'db-toggle',
      content: 'Toggle'
    }
  }
};
