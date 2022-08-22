context('db-table', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=04-data-display-table-intro--page&viewMode=story'
    );
  });

  it('db-table - snapshot', () => {
    cy.snap('db-table', 0.17);
  });

  it('Renders tables with column tabledata', function () {
    cy.get('db-table > div > table > caption').eq(0).should('exist');
    cy.get('db-table > div > table > thead > tr')
      .eq(0)
      .contains("I'm a row title");
  });

  it('Renders tables with row tabledata', function () {
    cy.get('db-table > div > table > caption').eq(2).should('exist');
    cy.get('db-table > div > table > thead > tr')
      .eq(2)
      .contains("I'm a row title");
    cy.get('db-table > div > table > tbody > tr > td > db-icon')
      .eq(2)
      .should('exist');
  });
});
