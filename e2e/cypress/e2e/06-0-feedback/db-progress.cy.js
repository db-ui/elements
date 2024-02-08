context('db-progress', () => {
  beforeEach(() => {
    cy.gotoStory('06-feedback', 'progress');
  });

  it('db-progress - snapshot', () => {
    cy.snap('db-progress');
  });
  it('Progress should exist and be configurable', function () {
    const simpleProgress = [0, 1];
    simpleProgress.forEach((num) => {
      cy.get('db-progress').eq(num).find('label').contains('60%');
      cy.get('db-progress')
        .eq(num)
        .find('progress')
        .invoke('attr', 'value')
        .should('eq', '60');
    });

    cy.get('db-progress')
      .eq(2)
      .find('progress')
      .invoke('attr', 'indeterminate')
      .should('exist');

    cy.get('db-progress').eq(3).find('label').contains('60 ❤️');
  });
});
