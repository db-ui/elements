import { newE2EPage } from '@stencil/core/testing';

describe('db-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-footer></db-footer>');

    const element = await page.find('db-footer');
    expect(element).toHaveClass('hydrated');
  });
});
