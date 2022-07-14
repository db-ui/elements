Cypress.Commands.add('showcaseGoto', (showcase, page) => {
  cy.visit(`/${showcase}-showcase/index.html`);
  if (page) {
    cy.get('db-mainnavigation')
      .trigger('mouseover')
      .find('a')
      .filter(`:contains(${page})`)
      .click({ force: true });
  }
});
