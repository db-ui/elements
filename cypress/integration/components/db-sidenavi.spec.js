context('db-sidenavi', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-sidenavi-intro--page&viewMode=story');
  });

  it('sidenavi contains links', function () {
    cy.get('db-sidenavi')
      .eq(0)
      .find('ol')
      .find('li')
      .eq(0)
      .find('db-link')
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '#');
  });
});
