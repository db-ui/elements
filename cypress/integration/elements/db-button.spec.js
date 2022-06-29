context('db-button', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=elements-button-intro--page&viewMode=story');
  });

  const selector = 'db-button > button';

  it('Simple Button exists', function () {
    cy.get(selector).eq(0).contains('Button').click();
  });

  it('Button variants exists', function () {
    cy.get(selector)
      .eq(1)
      .contains('Primary')
      .click()
      .invoke('attr', 'data-variant')
      .should('eq', 'primary');

    cy.get(selector)
      .eq(2)
      .contains('Secondary')
      .click()
      .invoke('attr', 'data-variant')
      .should('eq', 'secondary-solid');

    cy.get(selector)
      .eq(3)
      .contains('Secondary Outline')
      .click()
      .invoke('attr', 'data-variant')
      .should('eq', 'secondary-outline');
  });

  it('Button variants are disabeled', function () {
    cy.get(selector)
      .eq(4)
      .should('be.disabled')
      .invoke('attr', 'data-variant')
      .should('eq', 'primary');

    cy.get(selector)
      .eq(5)
      .should('be.disabled')
      .invoke('attr', 'data-variant')
      .should('eq', 'secondary-solid');

    cy.get(selector)
      .eq(6)
      .should('be.disabled')
      .invoke('attr', 'data-variant')
      .should('eq', 'secondary-outline');
  });

  it('Button variants should display icons', function () {
    const selectoricon = 'db-button > button > db-icon';
    Array.from(Array(9)).forEach((num, idx) => {
      cy.get(selectoricon).eq(idx).should('exist');
    });
  });
});
