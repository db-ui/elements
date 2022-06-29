import { newE2EPage } from '@stencil/core/testing';

describe('db-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-link></db-link>');

    const element = await page.find('db-link');
    expect(element).toHaveClass('hydrated');
  });
});
