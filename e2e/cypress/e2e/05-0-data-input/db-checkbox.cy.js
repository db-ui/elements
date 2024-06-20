context('db-checkbox', () => {
  beforeEach(() => {
    cy.gotoStory('05-data-input', 'checkbox');
  });
  it('db-checkbox - snapshot', () => {
    cy.snap('db-checkbox', 0.18);
  });
  const selector = 'db-checkbox > input';
  it('Checkbox exists and can be un-/checked', function () {
    cy.get(selector).first().check().should('be.checked');
    cy.get(selector).first().uncheck().should('not.be.checked');
  });

  it('Checkbox is disabled', function () {
    cy.get(selector).eq(1).should('be.disabled');
  });

  it('Checkbox is indeterminate', function () {
    cy.get(selector)
      .eq(2)
      .should('not.be.checked')
      .check()
      .should('be.checked')
      .invoke('prop', 'indeterminate', true)
      .should('not.be.checked')
      .uncheck()
      .should('not.be.checked');
  });
});
