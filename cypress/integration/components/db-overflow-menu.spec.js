context('db-overflow-menu', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=components-overflow-menu-intro--page&viewMode=story'
    );
  });

  it('overflow-menu contains links', function () {
    cy.get('db-overflow-menu')
      .eq(0)
      .find('menu')
      .find('li')
      .eq(0)
      .find('db-link')
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '#');
  });
});
