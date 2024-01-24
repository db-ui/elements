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
      .should('have.css', 'background-color', 'rgb(215 220 225)');
    cy.get('db-chip').eq(2).click();
    cy.get('db-chip')
      .eq(2)
      .find('label')
      .should('have.css', 'background-color', 'rgb(0, 135, 185)');
  });

  it('selection chips', function () {
    cy.get('db-chip').eq(7).click();
    cy.get('db-chip')
      .eq(7)
      .find('label')
      .should('have.css', 'background-color', 'rgb(40, 45, 55)');
    cy.get('db-chip').eq(8).click();
    cy.get('db-chip')
      .eq(8)
      .find('label')
      .should('have.css', 'background-color', 'rgb(215 220 225)');
    cy.get('db-chip').eq(9).click();
    cy.get('db-chip')
      .eq(9)
      .find('label')
      .should('have.css', 'background-color', 'rgb(0, 135, 185)');
  });
});
