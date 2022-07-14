import { newSpecPage } from '@stencil/core/testing';
import { DbToggle } from '../db-toggle';

describe('db-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DbToggle],
      html: `<db-toggle htmlid="test-id">Toggletext</db-toggle>`
    });
    expect(page.root).toEqualHtml(`
    <db-toggle htmlid="test-id">
      <input type="checkbox" role="switch" class="elm-toggle" id="test-id">
      <label class="elm-label" htmlfor="test-id">Toggletext</label>
    </db-toggle>
    `);
  });
});
