context('db-linklist', () => {
  beforeEach(() => {
    cy.gotoStory('02-navigation', 'linklist');
  });

  it('db-linklist - snapshot', () => {
    cy.snap('db-linklist');
  });

  it('Linklist contains links', function () {
    cy.get('db-linklist > ul > li')
      .eq(0)
      .find('a')
      .invoke('attr', 'href')
      .should('eq', 'https://www.bahn.de/');
    cy.get('db-linklist > ul > li')
      .eq(1)
      .find('a')
      .invoke('attr', 'href')
      .should('eq', 'https://www.dbsystel.de/');
  });
});
