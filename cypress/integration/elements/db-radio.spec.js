context('db-radio', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=elements-radio-intro--page&viewMode=story');
  });

  it('Radio buttons should be checkable', function () {
    cy.get('db-radio > input').eq(0).check().should('be.checked');
    cy.get('db-radio > input').eq(2).should('be.disabled');
  });
});
