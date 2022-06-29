import { newSpecPage } from '@stencil/core/testing';
import { DbRadio } from '../db-radio';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('db-radio', () => {
  it('initial', async () => {
    const page = await newSpecPage({
      components: [DbRadio],
      html: `
      <db-radio></db-radio>`
    });
    expect(page.root).toEqualHtml(`
      <db-radio input_id="radio-0.5">
        <input class="elm-radio" id="radio-0.5" type="radio">
        <label class="elm-label" htmlFor="radio-0.5"></label>     
      </db-radio>
    `);
  });

  it('full filled', async () => {
    const page = await newSpecPage({
      components: [DbRadio],
      html: `<db-radio autofocus checked disabled input_id="_input_id_" label="_label_" name="_name_" required value="_value_"></db-radio>`
    });
    expect(page.root).toEqualHtml(`
      <db-radio autofocus checked disabled input_id="_input_id_" label="_label_" name="_name_" required value="_value_">
        <input class="elm-radio" id="_input_id_" type="radio" autofocus checked disabled name="_name_" required value="_value_">
        <label class="elm-label" htmlFor="_input_id_">_label_</label>   
      </db-radio>
    `);
  });
});
