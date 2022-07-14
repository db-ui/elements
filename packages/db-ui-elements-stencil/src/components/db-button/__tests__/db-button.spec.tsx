import { newSpecPage } from '@stencil/core/testing';
import { DbButton } from '../db-button';

describe('db-button', () => {
  it('initial', async () => {
    const page = await newSpecPage({
      components: [DbButton],
      html: `<db-button></db-button>`
    });
    expect(page.root).toEqualHtml(`
      <db-button type="submit">
        <button class="elm-button" type="submit"></button>
      </db-button>
    `);
  });

  it('full filled', async () => {
    const page = await newSpecPage({
      components: [DbButton],
      html: `<db-button ariaexpanded="true" ariapressed="true" disabled formaction="_formaction_" formenctype="_formenctype_" formmethod="_formmethod_" formnovalidate formtarget="_formtarget_" icon="_icon_" iconafter="_iconAfter_" icononly name="_name_" tooltip="_tooltip_" type="_type_" value="_value_" variant="_variant_">Button</db-button>`
    });
    expect(page.root).toEqualHtml(`
      <db-button ariaexpanded="true" ariapressed="true" disabled formaction="_formaction_" formenctype="_formenctype_" formmethod="_formmethod_" formnovalidate formtarget="_formtarget_" icon="_icon_" iconafter="_iconAfter_" icononly name="_name_" tooltip="_tooltip_" type="_type_" value="_value_" variant="_variant_">
        <button class="elm-button is-icon-text-replace" aria-expanded="true" aria-pressed="true" data-variant="_variant_" disabled formaction="_formaction_" formenctype="_formenctype_" formmethod="_formmethod_" formnovalidate formtarget="_formtarget_" name="_name_" title="_tooltip_" type="_type_" value="_value_">
          <db-icon icon="_icon_"></db-icon>Button<db-icon class="iconafter" icon="_iconAfter_"></db-icon>
        </button>
      </db-button>
    `);
  });
});
