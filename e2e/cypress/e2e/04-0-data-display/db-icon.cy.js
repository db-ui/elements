context('db-icon', () => {
  beforeEach(() => {
    cy.gotoStory('04-data-display', 'icon');
  });

  it('db-icon - snapshot', () => {
    cy.snap('db-icon');
  });
  it('Icons exists in the shadow 👻', function () {
    Array.from(Array(8)).forEach((num, idx) => {
      cy.get('db-icon')
        .eq(idx)
        .shadow()
        .find('span')
        .invoke('attr', 'data-icon')
        .should('exist');
    });
  });
  it('Icons have variations', function () {
    const shadowicons = [4, 5, 6, 7, 8];
    const varianticons = [
      '20-outline',
      '24-outline',
      '32-outline',
      '48-outline',
      '64-outline'
    ];
    shadowicons.map((num, idx) => {
      cy.get('db-icon')
        .eq(num)
        .shadow()
        .find('span')
        .invoke('attr', 'data-icon-variant')
        .should('eq', varianticons[idx]);
    });
  });
});
