context('welcome-page', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=intro-welcome--page&viewMode=story');
  });

  it('Check for Card: Getting Started', function () {
    cy.get('db-card').eq(0).click();
    cy.url().should('contain', 'intro-getting-started--page');
  });
  it('Check for Card: Angular Framework', function () {
    cy.get('db-card').eq(2).click();
    cy.url().should('contain', 'intro-frameworks-angular--page');
  });
  it('Check for Card: Javascript Framework', function () {
    cy.get('db-card').eq(3).click();
    cy.url().should('contain', 'intro-frameworks-javascript--page');
  });
  it('Check for Card: React Framework', function () {
    cy.get('db-card').eq(4).click();
    cy.url().should('contain', 'intro-frameworks-react--page');
  });
  it('Check for Card: Vue Framework', function () {
    cy.get('db-card').eq(5).click();
    cy.url().should('contain', 'intro-frameworks-vue--page');
  });
  it('Check for Card: Angular Showcase', function () {
    cy.get('db-card').eq(6).click();
    cy.url().should('contain', 'intro-showcases--angular-ng-build');
  });
  it('Check for Card: React Showcase', function () {
    cy.get('db-card').eq(7).click();
    cy.url().should('contain', 'intro-showcases--react-cra-build');
  });
  it('Check for Card: Reactwind Showcase', function () {
    cy.get('db-card').eq(8).click();
    cy.url().should('contain', 'intro-showcases--react-and-tailwind');
  });
  it('Check for Card: Vue Showcase', function () {
    cy.get('db-card').eq(9).click();
    cy.url().should('contain', 'intro-showcases--vue-vite-build');
  });
});
