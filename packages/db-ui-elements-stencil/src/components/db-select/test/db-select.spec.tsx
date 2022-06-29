import { newSpecPage } from '@stencil/core/testing';
import { DbSelect } from '../db-select';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('db-select', () => {
  it('initial', async () => {
    const page = await newSpecPage({
      components: [DbSelect],
      html: `
      <db-select>
        <option selected>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </db-select>`
    });
    expect(page.root).toEqualHtml(`
      <db-select input_id="select-0.5" variant='semitransparent'>
        <select class="elm-select" data-variant id="select-0.5">
            <option selected>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        <select>

        <label class="elm-label" htmlFor="select-0.5"></label>
      </db-select>
    `);
  });

  it('full filled', async () => {
    const page = await newSpecPage({
      components: [DbSelect],
      html: `
      <db-select ariainvalid="true" disabled input_id="_input_id_" label="_label_" multiple name="_name_" required size="2">
        <option selected>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </db-select>`
    });
    expect(page.root).toEqualHtml(`
      <db-select ariainvalid disabled input_id="_input_id_" label="_label_" multiple name="_name_" required size="2" variant='semitransparent'>
        <select class="elm-select" aria-invalid="true" aria-required="true" data-variant disabled multiple id="_input_id_" name="_name_" required size="2">
            <option selected>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        <select>

        <label class="elm-label" htmlFor="_input_id_">_label_</label>
      </db-select>
    `);
  });
});
