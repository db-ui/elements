import { newE2EPage } from '@stencil/core/testing';

describe('db-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-checkbox></db-checkbox>');

    const element = await page.find('db-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
