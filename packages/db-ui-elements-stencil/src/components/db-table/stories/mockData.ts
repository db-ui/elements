import { faker } from '@faker-js/faker';

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

const getAdjectives = (num) =>
  [...Array(num).keys()].map(() => faker.word.adjective());

const getAdjectiveWithIcon = (num, withIcon) =>
  [...Array(num).keys()].map(() => [
    withIcon ? 'account' : null,
    faker.word.adjective()
  ]);

export default () => {
  const headers = [...Array(6).keys()].map(() => faker.name.firstName());

  return JSON.stringify({
    caption: faker.lorem.sentence(),
    headers,
    columns: {
      [headers[0]]: getAdjectiveWithIcon(5, true),
      [headers[1]]: getAdjectiveWithIcon(5, false),
      [headers[2]]: getAdjectiveWithIcon(5, false),
      [headers[3]]: getAdjectiveWithIcon(5, true),
      [headers[4]]: getAdjectiveWithIcon(5, true),
      [headers[5]]: getAdjectiveWithIcon(5, false)
    }
  });
};

export const fullColumnMockData = () => {
  const headers = [...Array(6).keys()].map(() => faker.name.firstName());
  const rowTitle = "I'm a row title";
  const rowTitles = [...Array(6).keys()].map(() => faker.name.firstName());

  return JSON.stringify({
    caption: faker.lorem.sentence(),
    headers,
    rowTitle,
    rowTitles,
    columns: {
      [headers[0]]: getAdjectiveWithIcon(5, true),
      [headers[1]]: getAdjectiveWithIcon(3, false),
      [headers[2]]: getAdjectiveWithIcon(9, true),
      [headers[3]]: getAdjectiveWithIcon(5, true),
      [headers[4]]: getAdjectiveWithIcon(7, false),
      [headers[5]]: getAdjectiveWithIcon(11, false)
    }
  });
};

export const rowMockData = () => {
  const headers = [...Array(8).keys()].map(() => faker.name.firstName());
  const rowTitle = "I'm a row title";
  const rowTitles = [...Array(8).keys()].map(() => faker.name.firstName());
  const rows = [
    {
      [headers[0]]: [undefined, getAdjectives(1).toString()],
      [headers[1]]: ['account', getAdjectives(1).toString()],
      [headers[2]]: [undefined, getAdjectives(1).toString()],
      [headers[3]]: [undefined, getAdjectives(1).toString()],
      [headers[4]]: ['account', getAdjectives(1).toString()],
      [headers[5]]: [undefined, getAdjectives(1).toString()],
      [headers[6]]: ['close', getAdjectives(1).toString()],
      [headers[7]]: [undefined, getAdjectives(1).toString()],
      [headers[8]]: [undefined, getAdjectives(1).toString()],
      [headers[9]]: ['close', getAdjectives(1).toString()]
    },
    {
      [headers[1]]: [undefined, getAdjectives(1).toString()],
      [headers[2]]: [undefined, getAdjectives(1).toString()],
      [headers[4]]: ['account', getAdjectives(1).toString()],
      [headers[6]]: [undefined, getAdjectives(1).toString()],
      [headers[8]]: [undefined, getAdjectives(1).toString()]
    },
    {
      [headers[3]]: ['close', getAdjectives(1).toString()],
      [headers[5]]: [undefined, getAdjectives(1).toString()],
      [headers[6]]: [undefined, getAdjectives(1).toString()],
      [headers[7]]: [undefined, getAdjectives(1).toString()],
      [headers[8]]: [undefined, getAdjectives(1).toString()],
      [headers[9]]: [undefined, getAdjectives(1).toString()]
    }
  ];

  return JSON.stringify({
    caption: faker.lorem.sentence(),
    headers,
    rowTitle,
    rowTitles,
    rows
  });
};

export const brokenMockData = {
  caption: 'Broken Table',
  headers: ['I am not present in columns'],
  columns: {
    'something is rotten': ['in the state of Denmark']
  }
};
