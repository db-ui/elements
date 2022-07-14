import { newSpecPage } from '@stencil/core/testing';
import { DbPagination } from '../db-pagination';

describe('db-pagination', () => {
  it('renders a pagination with slots', async () => {
    const page = await newSpecPage({
      components: [DbPagination],
      html: `
            <db-pagination ellipsisstart="true" ellipsisend="true" ariaid="stable">
              <a href="#" title="first page">1</a>
              <a href="#" title="third page">3</a>
              <a href="#" data-currentpage title="fourth page">4</a>
              <a href="#" title="fifth page">5</a>
              <a href="#" title="ninth page">9</a>
            </db-pagination>
      `
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders a pagination with custom events', async () => {
    const page = await newSpecPage({
      components: [DbPagination],
      html: `
            <db-pagination
                currentpage="1"
                pages="9"
                count="3"
                ariaid="stable"
              >
            </db-pagination>
      `
    });
    expect(page.root).toMatchSnapshot();
  });
});
