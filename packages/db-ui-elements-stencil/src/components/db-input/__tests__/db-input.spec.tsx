import { newSpecPage } from '@stencil/core/testing';
import { DbInput } from '../db-input';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('db-input', () => {
  it('initial', async () => {
    const page = await newSpecPage({
      components: [DbInput],
      html: `
      <db-input></db-input>`
    });
    expect(page.root).toEqualHtml(`
      <db-input input_id="input-0.5" type='text' variant='semitransparent'>
        <input class="elm-input" id="input-0.5" type="text" aria-labelledby="input-0.5-label" data-variant='semitransparent' />
        <label class="elm-label" htmlFor="input-0.5" aria-hidden="true" id="input-0.5-label"></label>
      </db-input>
    `);
  });

  it('full filled', async () => {
    const page = await newSpecPage({
      components: [DbInput],
      html: `
      <db-input ariainvalid="_ariainvalid_" ariarequired="true" autocomplete="on" autofocus dirname="_dirname_" disabled input_id="_input_id_" label="_label_" list="_list_" maxlength="10" minlength="5" name="_name_" pattern="_pattern_" placeholder="_placeholder_" readonly required size="2" value="_value_">
        <option>_option1_</option>
        <option>_option2_</option>
      </db-input>
    `
    });
    expect(page.root).toEqualHtml(`
      <db-input ariainvalid="_ariainvalid_" ariarequired="true" autocomplete="on" autofocus dirname="_dirname_" disabled input_id="_input_id_" label="_label_" list="_list_" maxlength="10" minlength="5" name="_name_" pattern="_pattern_" placeholder="_placeholder_" readonly required size="2" type='text' value="_value_" variant='semitransparent'>
        <input aria-invalid="_ariainvalid_" aria-required="true" type="text" class="elm-input" id="_input_id_" autocomplete="on" autofocus data-dirname="_dirname_" disabled list="_list_" maxlength="10" minlength="5" name="_name_" pattern="_pattern_" placeholder="_placeholder_" readonly required size="2" value="_value_" aria-labelledby="_input_id_-label" data-variant='semitransparent' />
        <label class="elm-label" htmlFor="_input_id_" aria-hidden="true" id="_input_id_-label">_label_</label><output htmlfor="_input_id_" id="_input_id_-result">7 / 10</output>
        <datalist id="_list_">
          <option>_option1_</option>
          <option>_option2_</option>
        </datalist>
      </db-input>
    `);
  });
});
