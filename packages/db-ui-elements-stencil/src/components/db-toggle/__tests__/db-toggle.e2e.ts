import { newE2EPage } from '@stencil/core/testing';

describe('db-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-toggle></db-toggle>');

    const element = await page.find('db-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
