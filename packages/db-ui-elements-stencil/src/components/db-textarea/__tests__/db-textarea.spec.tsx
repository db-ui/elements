import { newSpecPage } from '@stencil/core/testing';
import { DbTextarea } from '../db-textarea';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('db-textarea', () => {
  it('initial', async () => {
    const page = await newSpecPage({
      components: [DbTextarea],
      html: `<db-textarea></db-textarea>`
    });
    expect(page.root).toEqualHtml(`
      <db-textarea input_id="textarea-0.5" variant="semitransparent">
        <label class="elm-label" htmlFor="textarea-0.5"></label>
        <textarea class="elm-textarea" id="textarea-0.5" data-variant="semitransparent"></textarea>
      </db-textarea>
    `);
  });

  it('full filled', async () => {
    const page = await newSpecPage({
      components: [DbTextarea],
      html: `<db-textarea ariainvalid="_ariainvalid_" ariarequired="true" autofocus cols="2" dirname="_dirname_" disabled input_id="textarea-1" label="_label_" maxlength="2" minlength="2" name="_name_" placeholder="_placeholder_" readonly required rows="2" wrap="_wrap_">_value_</db-textarea>`
    });
    expect(page.root).toEqualHtml(`
      <db-textarea ariainvalid="_ariainvalid_" ariarequired="true" autofocus cols="2" dirname="_dirname_" disabled input_id="textarea-1" label="_label_" maxlength="2" minlength="2" name="_name_" placeholder="_placeholder_" readonly required rows="2" wrap="_wrap_" variant="semitransparent">
        <label class="elm-label" htmlFor="textarea-1">_label_</label>

        <textarea class="elm-textarea" id="textarea-1" aria-invalid="_ariainvalid_" aria-required="true" autofocus cols="2" data-dirname="_dirname_" disabled maxlength="2" minlength="2" name="_name_" placeholder="_placeholder_" readonly required rows="2" wrap="_wrap_" data-variant="semitransparent">_value_</textarea>
        <output htmlfor="textarea-1" id="textarea-1-result">0 / 2</output>
      </db-textarea>
    `);
  });
});
