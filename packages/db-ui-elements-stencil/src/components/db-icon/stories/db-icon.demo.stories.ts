import { iconset } from '../iconset.array';

export default {
  title: 'Elements/Icon',
  id: 'db-icon',
  component: 'db-icon',
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
          '20-filled',
          '24-filled',
          '32-filled',
          '48-filled',
          '64-filled',
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
