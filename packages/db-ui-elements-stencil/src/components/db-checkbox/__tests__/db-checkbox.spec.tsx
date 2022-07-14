import { newSpecPage } from '@stencil/core/testing';
import { DbCheckbox } from '../db-checkbox';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('db-checkbox', () => {
  it('initial', async () => {
    const page = await newSpecPage({
      components: [DbCheckbox],
      html: `
      <db-checkbox></db-checkbox>`
    });
    expect(page.root).toEqualHtml(`
      <db-checkbox input_id="checkbox-0.5">
        <input class="elm-checkbox" id="checkbox-0.5" type="checkbox">
        <label class="elm-label" htmlFor="checkbox-0.5"></label>
      </db-checkbox>
    `);
  });

  it('full filled', async () => {
    const page = await newSpecPage({
      components: [DbCheckbox],
      html: `<db-checkbox autofocus checked disabled input_id="_input_id_" label="_label_" name="_name_" required value="_value_"></db-checkbox>`
    });
    expect(page.root).toEqualHtml(`
      <db-checkbox autofocus checked disabled input_id="_input_id_" label="_label_" name="_name_" required value="_value_">
        <input class="elm-checkbox" id="_input_id_" type="checkbox" autofocus checked disabled name="_name_" required value="_value_">
        <label class="elm-label" htmlFor="_input_id_">_label_</label>
      </db-checkbox>
    `);
  });
});
