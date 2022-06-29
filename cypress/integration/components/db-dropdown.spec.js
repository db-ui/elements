context('db-dropdown', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-dropdown-intro--page&viewMode=story');
  });

  it('dropdown contains links', function () {
    cy.get('db-dropdown')
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
