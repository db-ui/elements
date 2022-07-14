context('db-header', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=areas-header-intro--page&viewMode=story');
  });

  it('Standard header exists', function () {
    cy.get('db-header > header').find('db-brand');
    cy.get('db-header > header').invoke('attr', 'role').should('eq', 'banner');
  });
});
