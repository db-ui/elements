context('db-button', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=03-action-button-intro--page&viewMode=story');
  });

  const selector = 'db-button > button';

  it('db-button - snapshot', () => {
    cy.snap('db-button', 0.2);
  });

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
      .contains('Secondary inverted')
      .click()
      .invoke('attr', 'data-variant')
      .should('eq', 'secondary-inverted');

    cy.get(selector)
      .eq(3)
      .contains('Tertiary')
      .click()
      .invoke('attr', 'data-variant')
      .should('eq', 'tertiary');

    cy.get(selector)
      .eq(4)
      .contains('Secondary')
      .click()
      .invoke('attr', 'data-variant')
      .should('eq', 'secondary');

    cy.get(selector)
      .eq(5)
      .contains('Ghost')
      .click()
      .invoke('attr', 'data-variant')
      .should('eq', 'ghost');
  });

  it('Button variants should get displayed in different sizes', function () {
    cy.get(selector)
      .eq(6)
      .contains('Primary small')
      .invoke('attr', 'data-size')
      .should('eq', 'small');

    cy.get(selector).eq(7).contains('Primary');

    cy.get(selector)
      .eq(8)
      .contains('Primary large')
      .invoke('attr', 'data-size')
      .should('eq', 'large');
  });

  it('Button variants are disabled', function () {
    cy.get(selector)
      .eq(9)
      .should('be.disabled')
      .invoke('attr', 'data-variant')
      .should('eq', 'primary');

    cy.get(selector)
      .eq(10)
      .should('be.disabled')
      .invoke('attr', 'data-variant')
      .should('eq', 'tertiary');

    cy.get(selector)
      .eq(11)
      .should('be.disabled')
      .invoke('attr', 'data-variant')
      .should('eq', 'secondary');
  });

  it('Button variants should display icons', function () {
    const selectoricon = 'db-button > button > db-icon';
    Array.from(Array(9)).forEach((num, idx) => {
      cy.get(selectoricon).eq(idx).should('exist');
    });
  });
});
