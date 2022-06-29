import { newSpecPage } from '@stencil/core/testing';
import { DbTable } from '../db-table';

const data = {
  caption: 'Just a caption',
  rowtitles: ['norma', 'fredy', 'janie', 'lurline', 'janis', 'keaton'],
  columns: {
    abigale: [
      ['account', 'spotless'],
      ['account', 'bruised'],
      ['account', 'apprehensive'],
      ['account', 'closed'],
      ['account', 'joyous']
    ],
    laurine: [
      [null, 'overlooked'],
      [null, 'red'],
      [null, 'amusing']
    ],
    soledad: [
      ['account', 'cooperative'],
      ['account', 'realistic'],
      ['account', 'vigilant'],
      ['account', 'darling'],
      ['account', 'devoted'],
      ['account', 'nice'],
      ['account', 'cultured'],
      ['account', 'far-flung'],
      ['account', 'likely']
    ],
    paul: [
      ['account', 'motionless'],
      ['account', 'mean'],
      ['account', 'unrealistic'],
      ['account', 'trustworthy'],
      ['account', 'frightened']
    ],
    jalen: [
      [null, 'rowdy'],
      [null, 'swift'],
      [null, 'fantastic'],
      [null, 'stimulating'],
      [null, 'pristine'],
      [null, 'black'],
      [null, 'meaty']
    ],
    maribel: [
      [null, 'sturdy'],
      [null, 'revolving'],
      [null, 'excitable'],
      [null, 'tired'],
      [null, 'handmade'],
      [null, 'relieved'],
      [null, 'troubled'],
      [null, 'messy'],
      [null, 'other'],
      [null, 'personal'],
      [null, 'dry']
    ]
  }
};

describe('db-table', () => {
  it('renders with no data provided', async () => {
    const page = await newSpecPage({
      components: [DbTable],
      html: `<db-table tabledata=${JSON.stringify(data)}></db-table>`
    });
    expect(page.root).toMatchSnapshot();
  });
});
