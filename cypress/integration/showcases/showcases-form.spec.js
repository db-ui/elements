context('showcase', () => {
  const checkFormChange = (index, content) => {
    cy.get('fieldset').eq(1).find('dl').find('dd').eq(index).contains(content);
  };

  const showcases = require('../../fixtures/showcases.json');

  showcases.forEach((showcase) => {
    it(`${showcase}: Test Form`, () => {
      cy.showcaseGoto(showcase, 'Form');
      // 1. Input
      const inputValue = 'Test';
      cy.get('db-input')
        .find('input')
        .focus()
        .type(inputValue)
        .blur()
        .should('have.value', inputValue);
      checkFormChange(0, inputValue);

      // 2. Checkbox

      cy.get('db-checkbox').click();
      checkFormChange(1, 'yes');

      // 3. Radio

      cy.get('db-radio').eq(1).click();
      checkFormChange(2, 'Radio 02');

      // 4. Select
      const option = 'Option 2';
      cy.get('db-select').find('select').select(option);
      checkFormChange(3, option);

      // 5. Textarea
      const textAreaValue = 'Test 123';
      cy.get('db-textarea')
        .find('textarea')
        .focus()
        .type(textAreaValue)
        .blur()
        .should('have.value', textAreaValue);
      checkFormChange(4, textAreaValue);

      // 6. Toggle
      cy.get('db-toggle').click();
      checkFormChange(5, 'true');

      // 7. Button
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.get('db-button')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith(
            '{"input":"Test","checkbox":true,"radio":"Radio 02","select":"Option 2","textarea":"Test 123","toggle":true}'
          );
        });
    });
  });
});
