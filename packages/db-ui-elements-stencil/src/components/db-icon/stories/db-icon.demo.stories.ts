import { iconset } from '../iconset.array';

export default {
  title: '04-Data-Display/Icon',
  id: 'db-icon',
  component: 'db-icon',
  parameters: {
    viewMode: 'docs'
  },
  argTypes: {
    icon: {
      control: {
        options: iconset,
        type: 'select'
      },
      defaultValue: 'account'
    },
    variant: {
      control: {
        options: [
          '16-filled',
          '20-filled',
          '24-filled',
          '32-filled',
          '48-filled',
          '64-filled',
          '16-outline',
          '20-outline',
          '24-outline',
          '32-outline',
          '48-outline',
          '64-outline'
        ],
        type: 'select'
      },
      defaultValue: '24-outline'
    }
  }
};

export const LiveDemo = ({ icon, variant }) => {
  return `<db-icon
    ${icon ? 'icon=' + icon : ''}
    ${variant ? 'variant=' + variant : ''}></db-icon>`;
};
