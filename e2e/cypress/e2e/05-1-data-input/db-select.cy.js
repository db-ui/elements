context('db-select', () => {
  beforeEach(() => {
    cy.gotoStory('05-data-input', 'select');
  });

  it('db-select - snapshot', () => {
    cy.snap('db-select');
  });
  it('selects should have be selectable', function () {
    cy.get('db-select > select > option')
      .eq(0)
      .should('have.text', 'Option 1')
      .next()
      .should('have.text', 'Option 2')
      .next()
      .should('have.text', 'Option 3');

    cy.get('db-select > select').eq(4).should('be.disabled');

    // cy.get('db-select > select')
    //   .eq(5)
    //   .invoke('attr', 'multiple')
    //   .should('exist');
  });
});
