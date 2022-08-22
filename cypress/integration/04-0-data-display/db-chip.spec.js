context('db-chip', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=04-data-display-chip-intro--page&viewMode=story');
  });

  it('filter chips', function () {
    cy.get('db-chip').eq(0).click();
    cy.get('db-chip')
      .eq(0)
      .find('label')
      .should('have.css', 'background-color', 'rgb(40, 45, 55)');
    cy.get('db-chip').eq(1).click();
    cy.get('db-chip')
      .eq(1)
      .find('label')
      .should('have.css', 'background-color', 'rgb(0, 135, 185)');
    cy.get('db-chip')
      .eq(0)
      .find('label')
      .should('have.css', 'background-color', 'rgb(40, 45, 55)');
  });

  it('selection chips', function () {
    cy.get('db-chip').eq(6).click();
    cy.get('db-chip')
      .eq(6)
      .find('label')
      .should('have.css', 'background-color', 'rgb(40, 45, 55)');
    cy.get('db-chip').eq(7).click();
    cy.get('db-chip')
      .eq(7)
      .find('label')
      .should('have.css', 'background-color', 'rgb(0, 135, 185)');
    cy.get('db-chip')
      .eq(6)
      .find('label')
      .should('not.have.css', 'background-color', 'rgb(40, 45, 55)');
  });
});
