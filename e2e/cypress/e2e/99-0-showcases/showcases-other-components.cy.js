context('showcase', () => {
  const showcases = require('../../fixtures/showcases.json');

  showcases.forEach((showcase) => {
    it(`${showcase}: Test Other Components`, () => {
      cy.showcaseGoto(showcase, 'OtherComponents');

      // 1. LinkList
      cy.get('db-linklist > ul > li')
        .eq(0)
        .find('db-link')
        .invoke('attr', 'href')
        .should('eq', 'https://db-ui.github.io/elements/');

      // 2. Notification
      cy.get('db-button')
        .click()
        .then(() => {
          cy.get('db-notifications')
            .eq(0)
            .find('section')
            .find('db-notification')
            .invoke('attr', 'type')
            .should('eq', 'success');
        });

      //
    });
  });
});
