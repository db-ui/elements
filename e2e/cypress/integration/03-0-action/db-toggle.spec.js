context('db-toggle', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=03-action-toggle-intro--page&viewMode=story');
  });

  it('db-toggle - snapshot', () => {
    cy.snap('db-toggle');
  });
  it('Toggle can be toggeled', function () {
    cy.get('db-toggle> input')
      .eq(0)
      .should('not.be.checked')
      .check()
      .should('be.checked');
    cy.get('db-toggle> input')
      .eq(2)
      .should('be.checked')
      .uncheck()
      .should('not.be.checked');
  });

  it('Toggle should be disabled', function () {
    cy.get('db-toggle > input').eq(1).should('be.disabled');
    cy.get('db-toggle > input').eq(3).should('be.disabled');
  });
  // it('Datalist option should be correct', function () {
  //   cy.get('db-input > datalist > option')
  //     .first()
  //     .should('have.text', 'Option 1')
  //     .next()
  //     .should('have.text', 'Option 2')
  //     .next()
  //     .should('have.text', 'Option 3');
  // });
});
