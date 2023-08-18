context('db-accordion', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=04-data-display-accordion-intro--page&viewMode=story'
    );
  });
  it('db-accordion - snapshot', () => {
    cy.snap('db-accordion');
  });

  it('accordion exists', function () {
    cy.get('db-accordion')
      .eq(0)
      .invoke('attr', 'summary')
      .should('eq', "I'm the summary");
  });

  it('accordion should open', function () {
    cy.get('db-accordion')
      .eq(0)
      .click()
      .then(() => {
        cy.get('details').should('have.attr', 'open');
      });
  });
});
