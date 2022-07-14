import { newE2EPage } from '@stencil/core/testing';

describe('db-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-radio></db-radio>');

    const element = await page.find('db-radio');
    expect(element).toHaveClass('hydrated');
  });
});
