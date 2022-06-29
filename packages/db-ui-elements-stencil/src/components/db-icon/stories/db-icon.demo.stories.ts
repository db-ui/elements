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

/*
<h2>av</h2>

<h2>communication</h2>

<h2>covid-19</h2>

<h2>facilities</h2>

<h2>feature</h2>

<h2>food</h2>

<h2>journey</h2>

<h2>maps</h2>

<h2>navigation</h2>

<h2>notification</h2>

<h2>seat</h2>

<h2>ticket</h2>

<h2>transportation</h2>
*/
