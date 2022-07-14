import { newSpecPage } from '@stencil/core/testing';
import { DbHeader } from '../db-header';

describe('db-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DbHeader],
      html: `<db-header></db-header>`
    });
    expect(page.root).toEqualHtml(`
    <db-header><header class="rea-header" role="banner">
    </db-header>
    `);
  });
});
