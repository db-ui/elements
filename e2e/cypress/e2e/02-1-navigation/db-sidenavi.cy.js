context('db-sidenavi', () => {
  beforeEach(() => {
    cy.gotoStory('02-navigation', 'sidenavi');
  });

  it('db-sidenavi - snapshot', () => {
    cy.snap('db-sidenavi', 0.24);
  });

  it('sidenavi contains links', function () {
    cy.get('db-sidenavi')
      .eq(1)
      .find('ol')
      .find('li')
      .eq(0)
      .find('db-link')
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '#');
  });
});
