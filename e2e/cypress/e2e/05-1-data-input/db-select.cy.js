context('db-select', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=05-data-input-select-intro--page&viewMode=story');
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

    cy.get('db-select > select')
      .eq(5)
      .find('optgroup')
      .eq(0)
      .find('option')
      .first()
      .should('have.text', 'Option 1.1')
      .next()
      .should('have.text', 'Option 1.2')
      .next()
      .should('have.text', 'Option 1.3');
    cy.get('db-select > select')
      .eq(5)
      .find('optgroup')
      .eq(1)
      .find('option')
      .first()
      .should('have.text', 'Option 2.1')
      .next()
      .should('have.text', 'Option 2.2')
      .next()
      .should('have.text', 'Option 2.3');
  });
});
