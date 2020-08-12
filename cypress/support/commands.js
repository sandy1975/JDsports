import '../support/commands';
Cypress.Commands.add("JDsports", () => {
    cy.visit('www.jdsports.co.uk/')
   cy.get('.wChild ga-ip"').contains('kids').click()
})
