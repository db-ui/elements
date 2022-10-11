context('db-card', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=01-layout-card-intro--page&viewMode=story');
  });

  it('db-card - snapshot', () => {
    cy.snap('db-card');
  });

  it('card contains title', function () {
    cy.get('db-card')
      .eq(0)
      .find('div')
      .find('figure')
      .find('figcaption')
      .contains('h3', 'Headline 1');
  });

  it('card contains content', function () {
    cy.get('db-card')
      .eq(0)
      .find('div')
      .find('figure')
      .find('figcaption')
      .contains('p', 'Content 1');
  });
});
