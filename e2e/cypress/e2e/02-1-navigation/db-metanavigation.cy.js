context('db-metanavigation', () => {
  beforeEach(() => {
    cy.gotoStory('02-navigation', 'meta-navigation');
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
