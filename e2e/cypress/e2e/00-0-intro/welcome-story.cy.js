context('welcome-page', () => {
  beforeEach(() => {
    cy.gotoStory('00-intro', 'welcome', false);
  });

  const contain = (cardsIndex, index, item) => {
    cy.get('db-cards')
      .eq(cardsIndex)
      .find('a')
      .eq(index)
      .should('have.attr', 'href')
      .and('include', `intro-${item}`);
  };

  it('Check for Card: Getting Started', function () {
    contain(0, 0, 'getting-started--page');
  });
  it('Check for Card: Angular Framework', function () {
    contain(1, 0, 'frameworks-angular--page');
  });
  it('Check for Card: Javascript Framework', function () {
    contain(1, 1, 'frameworks-javascript--page');
  });
  it('Check for Card: React Framework', function () {
    contain(1, 2, 'frameworks-react--page');
  });
  it('Check for Card: Vue Framework', function () {
    contain(1, 3, 'frameworks-vue--page');
  });
  it('Check for Card: Angular Showcase', function () {
    contain(2, 0, 'showcases--angular-ng-build');
  });
  it('Check for Card: React Showcase', function () {
    contain(2, 1, 'showcases--react-cra-build');
  });
  it('Check for Card: Reactwind Showcase', function () {
    contain(2, 2, 'showcases--react-and-tailwind');
  });
  it('Check for Card: Vue Showcase', function () {
    contain(2, 3, 'showcases--vue-vite-build');
  });
});
