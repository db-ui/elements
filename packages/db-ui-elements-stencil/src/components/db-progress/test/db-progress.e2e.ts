import { newE2EPage } from '@stencil/core/testing';

describe('db-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-progress></db-progress>');

    const element = await page.find('db-progress');
    expect(element).toHaveClass('hydrated');
  });
});
