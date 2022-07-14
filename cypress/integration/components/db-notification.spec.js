context('db-notification', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=components-notification-intro--page&viewMode=story'
    );
  });

  it('Shows a simple notification', function () {
    cy.get('db-notifications')
      .eq(0)
      .find('section')
      .invoke('attr', 'data-variant')
      .should('eq', 'alert');
  });

  it('Shows a notification with icon to the left', function () {
    cy.get('db-icon').eq(0).invoke('attr', 'icon').should('eq', 'account');
  });

  it('Shows a notification with icon to the right', function () {
    cy.get('db-icon').eq(1).invoke('attr', 'icon').should('eq', 'close');
  });

  it('Shows a hovering notification', function () {
    cy.get('db-notifications ')
      .eq(4)
      .find('section')
      .invoke('attr', 'data-variant')
      .should('eq', 'hovering');
  });

  it('Shows an error notification', function () {
    cy.get('db-notifications')
      .eq(5)
      .find('section > db-notification > div')
      .invoke('attr', 'data-type')
      .should('eq', 'error');
  });

  it('Shows an informative notification', function () {
    cy.get('db-notifications')
      .eq(7)
      .find('section > db-notification > div')
      .invoke('attr', 'data-type')
      .should('eq', 'informative');
  });

  it('Shows a success notification', function () {
    cy.get('db-notifications')
      .eq(9)
      .find('section > db-notification > div')
      .invoke('attr', 'data-type')
      .should('eq', 'success');
  });

  it('Shows a warning notification', function () {
    cy.get('db-notifications')
      .eq(11)
      .find('section > db-notification > div')
      .invoke('attr', 'data-type')
      .should('eq', 'warning');
  });
});
