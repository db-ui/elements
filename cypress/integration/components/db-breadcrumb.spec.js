context('db-breadcrumb', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=components-breadcrumb-intro--page&viewMode=story'
    );
  });

  it('breadcrumb contains links', function () {
    cy.get('db-breadcrumb')
      .eq(0)
      .find('nav')
      .find('ol')
      .find('li')
      .eq(0)
      .find('db-link')
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '#');
  });
});
