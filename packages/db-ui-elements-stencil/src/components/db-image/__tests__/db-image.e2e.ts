import { newE2EPage } from '@stencil/core/testing';

describe('db-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-image></db-image>');

    const element = await page.find('db-image');
    expect(element).toHaveClass('hydrated');
  });
});
