context('db-tab-bar', () => {
  beforeEach(() => {
    cy.gotoStory('02-navigation', 'tab-bar');
  });

  it('db-tab-bar - snapshot', () => {
    cy.snap('db-tab-bar');
  });

  it('tab-bar is clickable', function () {
    cy.get('section')
      .eq(0)
      .contains('Content 1')
      .then(() => {
        cy.get('label').eq(1).click();
        cy.get('section').contains('p', 'Content 2');
      });
  });
});
