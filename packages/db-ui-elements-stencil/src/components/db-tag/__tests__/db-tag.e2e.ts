import { newE2EPage } from '@stencil/core/testing';

describe('db-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-tag></db-tag>');

    const element = await page.find('db-tag');
    expect(element).toHaveClass('hydrated');
  });
});
