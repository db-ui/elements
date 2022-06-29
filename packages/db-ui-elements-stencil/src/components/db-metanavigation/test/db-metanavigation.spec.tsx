import { newSpecPage } from '@stencil/core/testing';
import { DbMetanavigation } from '../db-metanavigation';

describe('db-metanavigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DbMetanavigation],
      html: `<db-metanavigation></db-metanavigation>`
    });
    expect(page.root).toEqualHtml(`
      <db-metanavigation>
        <ul class="cmp-metanavigation"></ul>
      </db-metanavigation>
    `);
  });
});
