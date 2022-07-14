import { newSpecPage } from '@stencil/core/testing';
import { DbMainnavigation } from '../db-mainnavigation';

describe('db-mainnavigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DbMainnavigation],
      html: `<db-mainnavigation></db-mainnavigation>`
    });
    expect(page.root).toEqualHtml(`
      <db-mainnavigation>
        <nav class="cmp-mainnavigation" id="mainnavigation">
         <input id="toggle_mainnavigation" type="checkbox">
         <ul></ul>
       </nav>
      </db-mainnavigation>
    `);
  });
});
