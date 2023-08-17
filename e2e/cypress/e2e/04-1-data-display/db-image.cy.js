context('db-image', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=04-data-display-image-intro--page&viewMode=story'
    );
  });

  it('db-image - snapshot', () => {
    cy.snap('db-image', 0.2);
  });
  it('images should have the right class and alt text', function () {
    const imagesclassic = [0, 1, 2];
    const imagesadvanced = [0, 1, 2, 3];
    imagesclassic.forEach((num) => {
      cy.get('db-image > img')
        .eq(num)
        .should('have.class', 'elm-image')
        .invoke('attr', 'alt')
        .should('eq', 'DB Image alternative text');
    });

    cy.get('db-image > figure > img')
      .first()
      .should('have.class', 'elm-image')
      .invoke('attr', 'alt')
      .should('eq', 'DB Image alternative text');

    imagesadvanced.forEach((num) => {
      cy.get('db-image > figure > picture > img')
        .first()
        .should('have.class', 'elm-image')
        .invoke('attr', 'alt')
        .should('eq', 'DB Image alternative text');
    });
  });
});
