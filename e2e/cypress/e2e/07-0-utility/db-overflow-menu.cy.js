context('db-overflow-menu', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=07-utility-overflow-menu-intro--page&viewMode=story'
    );
  });

  it('db-overflow-menu - snapshot', () => {
    cy.snap('db-overflow-menu');
  });

  it('overflow-menu contains links', function () {
    cy.get('db-overflow-menu')
      .eq(1)
      .find('menu')
      .find('li')
      .eq(0)
      .find('db-link')
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '#');
  });
});
