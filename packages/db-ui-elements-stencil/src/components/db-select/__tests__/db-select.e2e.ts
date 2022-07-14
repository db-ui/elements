import { newE2EPage } from '@stencil/core/testing';

describe('db-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-select></db-select>');

    const element = await page.find('db-select');
    expect(element).toHaveClass('hydrated');
  });
});
