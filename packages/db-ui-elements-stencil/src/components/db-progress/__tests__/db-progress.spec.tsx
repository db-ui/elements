import { newSpecPage } from '@stencil/core/testing';
import { DbProgress } from '../db-progress';

describe('db-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DbProgress],
      html: `<db-progress htmlid="progress-label-01"></db-progress>`
    });
    expect(page.root).toEqualHtml(`
      <db-progress htmlid="progress-label-01">
        <div class="elm-progress">
          <progress id="progress-label-01"></progress>
          <output htmlFor="progress-label-01">%</output>
        </div>
      </db-progress>
    `);
  });
});
