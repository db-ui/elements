context('db-logo', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=04-data-display-logo-intro--page&viewMode=story');
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
