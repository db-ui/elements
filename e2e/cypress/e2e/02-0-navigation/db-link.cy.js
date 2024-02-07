context('db-link', () => {
  beforeEach(() => {
    cy.gotoStory('02-navigation', 'link');
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
      .should('have.attr', 'target', '_self')
      .contains('internal');

    cy.get('db-link')
      .eq(3)
      .find('a')
      .should('have.attr', 'target', '_blank')
      .contains('external');
  });
});
