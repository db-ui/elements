import { newE2EPage } from '@stencil/core/testing';

describe('db-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-header></db-header>');

    const element = await page.find('db-header');
    expect(element).toHaveClass('hydrated');
  });
});
