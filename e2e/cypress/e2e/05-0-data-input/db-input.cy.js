context('db-input', () => {
  beforeEach(() => {
    cy.gotoStory('05-data-input', 'input');
  });

  it('db-input - snapshot', () => {
    cy.snap('db-input');
  });
  it('Input can be typed into', function () {
    cy.get('db-input')
      .eq(0)
      .click()
      .type('test')
      .get('input')
      .should('have.value', 'test');
    cy.get('db-input').eq(4).get('input').should('be.disabled');
    cy.get('db-input')
      .eq(5)
      .click()
      .type('test')
      .get('input')
      .should('have.value', 'test');
  });

  it('Datalist option should be correct', function () {
    cy.get('db-input > datalist > option')
      .first()
      .should('have.text', 'Option 1')
      .next()
      .should('have.text', 'Option 2')
      .next()
      .should('have.text', 'Option 3');
  });
});
