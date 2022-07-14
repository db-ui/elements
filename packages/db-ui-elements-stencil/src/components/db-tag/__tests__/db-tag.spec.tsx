import { newSpecPage } from '@stencil/core/testing';
import { DbTag } from '../db-tag';

describe('db-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DbTag],
      html: `<db-tag></db-tag>`
    });
    expect(page.root).toEqualHtml(`
    <db-tag>
      <span class="elm-tag"></span>
    </db-tag>
    `);
  });
});
