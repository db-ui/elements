import { newE2EPage } from '@stencil/core/testing';

describe('db-linklist', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-linklist></db-linklist>');

    const element = await page.find('db-linklist');
    expect(element).toHaveClass('hydrated');
  });
});
