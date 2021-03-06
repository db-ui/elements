context('db-brand', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-brand-intro--page&viewMode=story');
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
