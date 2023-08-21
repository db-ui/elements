context('showcase', () => {
  const showcases = require('../../fixtures/showcases.json');

  showcases.forEach((showcase) => {
    it(`${showcase}: Test Other Elements`, () => {
      cy.showcaseGoto(showcase, 'OtherElements');

      // 1. DbIcon
      cy.get('db-icon')
        .eq(0)
        .shadow()
        .find('span')
        .invoke('attr', 'data-icon')
        .should('eq', 'account');

      // 2. DbProgress
      cy.get('db-progress').eq(0).find('label').contains('60%');
      cy.get('db-progress')
        .eq(0)
        .find('progress')
        .invoke('attr', 'value')
        .should('eq', '60');

      // 3. DbTag
      cy.get('db-tag')
        .eq(1)
        .find('span')
        .should('have.attr', 'data-variant', 'informative');

      // 4. DbChip
      cy.get('db-chip').eq(0).click();
      cy.get('db-chip')
        .eq(0)
        .find('label')
        .should('have.css', 'background-color', 'rgb(40, 45, 55)');

      // 5. DbImage
      cy.get('db-image > img')
        .eq(0)
        .should('have.class', 'elm-image')
        .invoke('attr', 'alt')
        .should('eq', 'DB Image alternative text');

      // 6. DbLink
      cy.get('main')
        .find('db-link > a')
        .eq(0)
        .contains('DB UI Elements components documentation');

      // 7. DbLogo
      cy.get('main')
        .find('db-logo > svg')
        .eq(0)
        .should('have.class', 'elm-logo')
        .invoke('attr', 'aria-hidden')
        .should('eq', 'true');
      //
    });
  });
});
