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
         <label class="is-site-name" htmlfor="toggle_mainnavigation" title="Toggle main navigation"></label>
         <ul></ul>
       </nav>
      </db-mainnavigation>
    `);
  });
});
