context('db-language-switcher', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=components-language-switcher-intro--page&viewMode=story'
    );
  });

  it('language-switcher contains links', function () {
    cy.get('db-language-switcher')
      .eq(0)
      .find('ul')
      .find('li')
      .eq(0)
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '#');
  });
});
