context('db-header', () => {
  beforeEach(() => {
    cy.gotoStory('02-navigation', 'header');
  });

  it('db-header - snapshot', () => {
    cy.snap('db-header');
  });

  it('Standard header exists', function () {
    cy.get('db-header > header').find('db-brand');
    cy.get('db-header > header').invoke('attr', 'role').should('eq', 'banner');
  });
});
