context('db-linklist', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-linklist-intro--page&viewMode=story');
  });

  it('Linklist contains links', function () {
    cy.get('db-linklist > ul > li')
      .eq(0)
      .find('db-link')
      .invoke('attr', 'href')
      .should('eq', 'https://www.bahn.de/');
    cy.get('db-linklist > ul > li')
      .eq(1)
      .find('db-link')
      .invoke('attr', 'href')
      .should('eq', 'https://www.dbsystel.de/');
  });
});
