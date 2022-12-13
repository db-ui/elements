context('db-language-switcher', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=07-utility-language-switcher-intro--page&viewMode=story'
    );
  });

  it('db-language-switcher - snapshot', () => {
    cy.snap('db-language-switcher');
  });

  it('language-switcher contains links', function () {
    cy.get('db-language-switcher')
      .eq(1)
      .find('ul')
      .find('li')
      .eq(0)
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '#');
  });
});
