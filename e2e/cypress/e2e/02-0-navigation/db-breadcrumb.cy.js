context('db-breadcrumb', () => {
  beforeEach(() => {
    cy.gotoStory('02-navigation', 'breadcrumb');
  });

  it('db-breadcrumb - snapshot', () => {
    cy.snap('db-breadcrumb');
  });

  it('breadcrumb contains links', function () {
    cy.get('db-breadcrumb')
      .eq(1)
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
