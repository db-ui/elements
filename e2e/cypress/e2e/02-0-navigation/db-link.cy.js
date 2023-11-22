context('db-link', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=02-navigation-link-intro--page&viewMode=story');
  });

  it('db-link - snapshot', () => {
    cy.snap('db-link', 0.17);
  });
  it('Links contains anchors and correct targets', function () {
    cy.get('db-link > a').eq(0).contains('Link');
    cy.get('db-link > a').eq(1).contains('Link');

    cy.get('db-link')
      .eq(2)
      .find('a')
      .contains('internal')
      .invoke('attr', 'target')
      .should('eq', '_self');

    cy.get('db-link')
      .eq(3)
      .find('a')
      .contains('external')
      .invoke('attr', 'target')
      .should('eq', '_blank');
  });
});
