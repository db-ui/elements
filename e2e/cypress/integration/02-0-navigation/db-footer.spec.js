context('db-footer', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=02-navigation-footer-intro--page&viewMode=story');
  });

  it('db-footer - snapshot', () => {
    cy.snap('db-footer');
  });

  const selector = 'db-footer > footer';
  it('Standard footer exists', function () {
    cy.get(selector).eq(0).should('have.class', 'has-border');
    cy.get(selector).eq(0);
    cy.get(`${selector} > span`).contains('Copyright 2023 DB Systel');
  });

  it('Custom footer exists', function () {
    cy.get(selector).eq(1).invoke('attr', 'with-copyright').should('not.exist');
    cy.get(selector).eq(1).contains('Custom Footer');
  });
});
