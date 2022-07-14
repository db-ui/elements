import { newSpecPage } from '@stencil/core/testing';
import { DbLink } from '../db-link';

describe('db-link', () => {
  it('initial', async () => {
    const page = await newSpecPage({
      components: [DbLink],
      html: `<db-link>Link</db-link>`
    });
    expect(page.root).toEqualHtml(`
      <db-link icon-variant="24-outline">
        <a class="elm-link">Link</a>
      </db-link>
    `);
  });

  it('full filled', async () => {
    const page = await newSpecPage({
      components: [DbLink],
      html: `<db-link href="_href_" hreflang="_hreflang_" icon="_icon_" media="_media_" rel="_rel_" target="_target_" type="_type_">Link</db-link>`
    });
    expect(page.root).toEqualHtml(`
      <db-link href="_href_" hreflang="_hreflang_" icon="_icon_" icon-variant="24-outline" media="_media_" rel="_rel_" target="_target_" type="_type_">
        <a class="elm-link" href="_href_" hreflang="_hreflang_" media="_media_" rel="_rel_" target="_target_" data-type="_type_">
          <db-icon icon="_icon_"  variant="24-outline"></db-icon>Link
        </a>
      </db-link>
    `);
  });
});
