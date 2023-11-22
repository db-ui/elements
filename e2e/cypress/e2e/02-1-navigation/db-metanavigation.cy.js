context('db-metanavigation', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=02-navigation-meta-navigation-intro--page&viewMode=story'
    );
  });

  it('db-metanavigation - snapshot', () => {
    cy.snap('db-metanavigation');
  });

  it('metanavigation contains links', function () {
    cy.get('db-metanavigation')
      .eq(1)
      .find('ul')
      .find('li')
      .eq(0)
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '#');
  });
});
