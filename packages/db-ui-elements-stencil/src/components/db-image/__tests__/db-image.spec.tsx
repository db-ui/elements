import { newSpecPage } from '@stencil/core/testing';
import { DbImage } from '../db-image';

describe('db-image', () => {
  it('initial', async () => {
    const page = await newSpecPage({
      components: [DbImage],
      html: `
      <db-image alt="test" src="/test/test.jpg" width="369" height="185"></db-image>`
    });
    expect(page.root).toEqualHtml(`
      <db-image alt="test" height="185" src="/test/test.jpg" width="369">
      <img class="elm-image" alt="test" src="/test/test.jpg" width="369" height="185">
      </db-image>
    `);
  });
});
