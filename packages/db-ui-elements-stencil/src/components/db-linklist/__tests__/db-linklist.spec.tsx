import { newSpecPage } from '@stencil/core/testing';
import { DbLinklist } from '../db-linklist';

describe('db-linklist', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DbLinklist],
      html: `<db-linklist>
  <li><db-link href="https://www.bahn.de/">www.bahn.de</db-link></li>
  <li><db-link href="https://www.dbsystel.de/">www.dbsystel.de</db-link></li>
  </db-linklist>`
    });
    expect(page.root).toEqualHtml(`
      <db-linklist>
        <ul class="cmp-link-list">
         <li><db-link href="https://www.bahn.de/">www.bahn.de</db-link></li>
         <li><db-link href="https://www.dbsystel.de/">www.dbsystel.de</db-link></li>
        </ul>
      </db-linklist>
    `);
  });
});
