context('db-tag', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=elements-tag-intro--page&viewMode=story');
  });

  it('tags should have the right colors', function () {
    const mostTags = [1, 2, 3, 4, 5];
    const tagsColors = [
      'informative',
      'success',
      'poi-essen-trinken',
      'poi-einkaufen',
      'track'
    ];
    mostTags.forEach((num, idx) => {
      cy.get('db-tag')
        .eq(num)
        .find('span')
        .should('have.attr', 'data-variant', tagsColors[idx]);
    });
  });
});
