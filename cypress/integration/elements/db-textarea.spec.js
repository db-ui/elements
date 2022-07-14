context('db-textarea', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=elements-textarea-intro--page&viewMode=story');
  });

  it('textarea should be writable', function () {
    cy.get('db-textarea > textarea')
      .eq(0)
      .type('test')
      .should('have.value', 'test');
  });

  it('textarea should be disabled', function () {
    cy.get('db-textarea > textarea').eq(4).should('be.disabled');
  });
});
