context('showcases-visuals', () => {
  const showcases = require('../../fixtures/showcases.json');
  showcases.forEach((showcase) => {
    it(`${showcase}: Test Form - snapshot`, () => {
      cy.showcaseGoto(showcase, 'Form');
      cy.snap('showcase-form', 0.15, false);
    });
    it(`${showcase}: Test OtherComponents - snapshot`, () => {
      cy.showcaseGoto(showcase, 'OtherComponents');
      cy.snap('showcase-other-components', 0.15, false);
    });
    it(`${showcase}: Test OtherElements - snapshot`, () => {
      cy.showcaseGoto(showcase, 'OtherElements');
      cy.snap('showcase-other-elements', 0.27, false);
    });
    it(`${showcase}: Test Tables - snapshot`, () => {
      cy.showcaseGoto(showcase, 'Tables');
      cy.snap('showcase-tables', 0.15, false);
    });
  });
});
