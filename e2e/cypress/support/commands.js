const {
  addCompareSnapshotCommand
} = require('cypress-visual-regression/dist/command');
addCompareSnapshotCommand();

Cypress.Commands.add(
  'snap',
  (test = '', threshold = 0.15, overwrite = true) => {
    // wait till all components are loaded and styles applied
    if (test.startsWith('showcase')) {
      cy.get('db-page').should('exist');
    } else {
      cy.get(test).should('exist');
    }
    cy.wait(1000);
    if (Cypress.browser.isHeadless) {
      cy.compareSnapshot(test, {
        overwrite: overwrite,
        errorThreshold: threshold
      });
    } else {
      // headless mode are doubling components and changing layout we add an extra threshold
      cy.compareSnapshot(test, {
        overwrite: overwrite,
        errorThreshold: threshold + 0.2
      });
    }
  }
);

Cypress.Commands.add('gotoStory', (category, component, isIntro = true) => {
  cy.visit(
    `/iframe.html?viewMode=docs&id=${category}-${component}${isIntro ? '-intro' : ''}--docs`
  );
});

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
