context('db-dropdown', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=07-utility-dropdown-intro--page&viewMode=story');
  });

  it('db-dropdown - snapshot', () => {
    cy.snap('db-dropdown');
  });

  it('dropdown contains links', function () {
    cy.get('db-dropdown')
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
