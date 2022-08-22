context('db-pagination', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=02-navigation-pagination-intro--page&viewMode=story'
    );
  });

  it('db-pagination - snapshot', () => {
    cy.snap('db-pagination', 0.2);
  });

  it('Pagination with slot displays correctly on pages', function () {
    cy.get('db-pagination > nav > ol').eq(0).find('li > a').should('exist');
    cy.get('db-pagination > nav > ol')
      .eq(0)
      .invoke('attr', 'aria-disabled')
      .should('not.exist');

    cy.get('db-pagination > nav > ol')
      .eq(0)
      .find('li > a')
      .eq(3)
      .invoke('attr', 'aria-disabled')
      .should('eq', 'true');
  });

  it('Pagination with slot displays ellipses correctly', function () {
    cy.get('db-pagination > nav > ol > li').eq(2).contains('…');
    cy.get('db-pagination > nav > ol > li').eq(6).contains('…');
  });

  it('Pagination with custom events displays correctly on pages', function () {
    cy.get('db-pagination > nav > ol')
      .eq(2)
      .find('li > button')
      .eq(0)
      .invoke('attr', 'aria-disabled')
      .should('eq', 'true');

    cy.get('db-pagination > nav > ol')
      .eq(2)
      .find('li > button')
      .eq(2)
      .invoke('attr', 'aria-disabled')
      .should('not.exist');
  });

  it('Pagination with custom events displays ellipses correctly', function () {
    cy.get('db-pagination > nav > ol > li').eq(6).contains('…');
    cy.get('db-pagination > nav > ol').eq(4).find('li').eq(2).contains('…');
    cy.get('db-pagination > nav > ol').eq(0).find('li').eq(6).contains('…');
  });
});
