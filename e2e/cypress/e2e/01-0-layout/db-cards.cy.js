context('db-cards', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=01-layout-cards-intro--page&viewMode=story');
  });

  it('db-cards - snapshot', () => {
    cy.snap('db-cards');
  });

  it('card-list contains 4 cards', function () {
    cy.get('db-cards').get('db-card').should('have.length', 4);
  });
});
