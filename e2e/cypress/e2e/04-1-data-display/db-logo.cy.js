context('db-logo', () => {
  beforeEach(() => {
    cy.gotoStory('04-data-display', 'logo');
  });

  it('db-logo - snapshot', () => {
    cy.snap('db-logo', 0.2);
  });
  it('logos should have the right class and aria-hidden attribute', function () {
    cy.get('db-logo svg')
      .first()
      .should('have.class', 'elm-logo')
      .invoke('attr', 'aria-hidden')
      .should('eq', 'true');
  });
});
