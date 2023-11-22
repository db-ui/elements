context('db-headline', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=04-data-display-headline-intro--page&viewMode=story'
    );
  });
  it('db-headline - snapshot', () => {
    cy.snap('db-headline');
  });
  it('Headline contains correct size', function () {
    cy.get('db-headline').eq(1).contains('h1', 'Headline 1');
    cy.get('db-headline').eq(2).contains('h2', 'Headline 2');
    cy.get('db-headline').eq(3).contains('h3', 'Headline 3');
    cy.get('db-headline').eq(4).contains('h4', 'Headline 4');
    cy.get('db-headline').eq(5).contains('h5', 'Headline 5');
    cy.get('db-headline').eq(6).contains('h6', 'Headline 6');
  });
});
