import { newE2EPage } from '@stencil/core/testing';

describe('db-button', () => {
  it('initial', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-button></db-button>');

    const element = await page.find('db-button');
    expect(element).toHaveClass('hydrated');
  });

  it('test output binding', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-button></db-button>');

    const component = await page.find('db-button');
    let value = component.getAttribute('variant');

    expect(value).toBe('primary');

    // perform action that should change the value and reinit
    component.setProperty('variant', 'secondary');
    await page.waitForChanges();
    value = component.getAttribute('variant');

    expect(value).toBe('secondary');
  });

  it('test input binding', async () => {
    const page = await newE2EPage();
    await page.setContent('<db-button></db-button>');

    const component = await page.find('db-button');
    let value = await component.getProperty('variant');

    expect(value).toBe('primary');

    // perform action that should change the value and reinit
    component.setAttribute('variant', 'secondary');
    await page.waitForChanges();
    value = await component.getProperty('variant');

    expect(value).toBe('secondary');
  });
});
