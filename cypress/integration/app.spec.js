describe('test navigation', () => {
  it('should navigate to the best page', () => {
    cy.visit('/');
    cy.get('a[href*="best"]').first().click()
    cy.url().should('include', '/best');
  })
})