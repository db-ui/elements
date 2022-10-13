import { newSpecPage } from '@stencil/core/testing';
import { DbBreadcrumb } from '../db-breadcrumb';

describe('db-breadcrumb', () => {
  it('initial', async () => {
    const page = await newSpecPage({
      components: [DbBreadcrumb],
      html: '<db-breadcrumb></db-breadcrumb>'
    });
    expect(page.root).toEqualHtml(`
      <db-breadcrumb>
          <nav class='cmp-breadcrumb'>
            <ol>
            </ol>
          </nav>
      </db-breadcrumb>
    `);
  });

  it('full filled', async () => {
    const page = await newSpecPage({
      components: [DbBreadcrumb],
      html: `
        <db-breadcrumb aria='Aria-Breadcrumb'>
          <db-link href='http://db.test/link1'>Link 1</db-link>
          <db-link href='//db.test/link2'>Link 2</db-link>
          <db-link href='#link3' aria-current='location'>Link 3</db-link>
        </db-breadcrumb>
      `
    });
    expect(page.root).toEqualHtml(`
      <db-breadcrumb aria='Aria-Breadcrumb' >
          <nav class='cmp-breadcrumb' aria-label='Aria-Breadcrumb'>
            <ol>
              <li><db-link href='http://db.test/link1'>Link 1</db-link></li>
              <li><db-link href='//db.test/link2' >Link 2</db-link></li>
              <li><db-link href='#link3' aria-current='location'>Link 3</db-link></li>
            </ol>
          </nav>
      </db-breadcrumb>
    `);
  });
});
