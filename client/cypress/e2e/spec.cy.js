describe('2023 BC Wildfires', () => {
  it('successfully loads and displays wildfires', () => {
    cy.visit('https://wfs-monitor.netlify.app');
    cy.contains('2023 BC Wildfires').should('be.visible');
    cy.contains('No Wildfires Found').should('not.exist');
  });

  it('filters wildfires based on status', () => {
    cy.visit('https://wfs-monitor.netlify.app');
    cy.get('#fireStatus').select('Out');
    cy.get('form').submit();
    cy.contains('No Wildfires Found').should('not.exist');
  });
});
