context('showcase', () => {
  const showcases = ['angular'];

  showcases.forEach((showcase) => {
    it(`${showcase}: Test Tables`, () => {
      cy.showcaseGoto(showcase, 'Tables');

      // 1. DbPagination
      cy.get('db-pagination > nav > ol > li').eq(6).contains('…');
      cy.get('db-pagination > nav > ol > li > button')
        .eq(2)
        .invoke('attr', 'aria-current')
        .should('eq', 'page');
      Array.from(Array(7)).forEach(() => {
        cy.get('db-pagination > nav > ol > li > button').last().click();
      });
      cy.get('db-pagination > nav > ol > li > button')
        .eq(7)
        .invoke('attr', 'aria-current')
        .should('eq', 'page');

      // 2. Table

      cy.get('table').eq(0).find('td').should('have.length', 6);
      cy.get('table').eq(1).find('td').should('have.length', 6);

      //
    });
  });
});
