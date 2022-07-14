import { DbMainnavigationDataType } from '../db-mainnavigation-type';

export const mockData = (): string => {
  const data: DbMainnavigationDataType[] = [
    { label: 'Startseite', link: '#', current: true },
    { label: 'Aufträge', link: '#' }
  ];
  return JSON.stringify(data);
};

export const mockDataSub = (): string => {
  const data: DbMainnavigationDataType[] = [
    {
      label: 'Startseite',
      link: '#',
      current: true,
      children: [
        {
          label: 'Sub1',
          link: '#',
          children: [
            { label: 'Sub1Sub1', link: '#' },
            { label: 'Sub1Sub2', link: '#' }
          ]
        }
      ]
    },
    { label: 'Aufträge', link: '#' }
  ];
  return JSON.stringify(data);
};
