context('db-mainnavigation', () => {
  beforeEach(() => {
    cy.gotoStory('02-navigation', 'main-navigation');
  });

  it('db-mainnavigation - snapshot', () => {
    cy.snap('db-mainnavigation');
  });

  it('mainnavigation contains links', function () {
    cy.get('db-mainnavigation')
      .eq(0)
      .find('nav')
      .find('ul')
      .find('li')
      .eq(0)
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '#');
  });
});
