import { newSpecPage } from '@stencil/core/testing';
import { DbFooter } from '../db-footer';

describe('db-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DbFooter],
      html: `<db-footer></db-footer>`
    });
    expect(page.root).toEqualHtml(`
    <db-footer><footer class="rea-footer"></footer></db-footer>
    `);
  });
});
