context('db-brand', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=02-navigation-brand-intro--page&viewMode=story');
  });

  it('db-brand - snapshot', () => {
    cy.snap('db-brand');
  });

  it('Brand exists', function () {
    cy.get('db-brand')
      .eq(0)
      .invoke('attr', 'alt')
      .should('eq', 'Deutsche Bahn Logo');
  });

  it('Brand has title', function () {
    cy.get('db-brand')
      .eq(1)
      .find('div')
      .find('span')
      .contains('My awesome App');
  });
});
