import { newSpecPage } from '@stencil/core/testing';
import { DbBrand } from '../db-brand';

describe('db-brand', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DbBrand],
      html: `<db-brand></db-brand>`
    });
    expect(page.root).toEqualHtml(`
      <db-brand alt="Deutsche Bahn Logo" href="#" src="./images/db_logo.svg">
       <div class="cmp-brand">
         <a class="undefined" href="#">
           <img alt="Deutsche Bahn Logo" class="elm-image is-logo" src="./images/db_logo.svg">
         </a>
         <span class="is-site-name"></span>
       </div>
      </db-brand>
    `);
  });
});
