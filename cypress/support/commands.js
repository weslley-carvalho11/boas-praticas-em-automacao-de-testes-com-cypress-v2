Cypress.Commands.add('search', term => {
  cy.get('input[type="text"]')
    .should('be.visible')
    .clear()
    .type(`${term}{enter}`)
})

Cypress.Commands.add('assertResults', () => {
  cy.get('.table-row').then(rows => {
    expect(rows.length).to.be.at.least(1)
  })
})

Cypress.Commands.add('randomlyTogglePurchaseAgreement', () => {
  if (Math.random() > 0.5) {
    cy.get('#agree')
      .click()
  }
})

Cypress.Commands.add('updateDestination', (info) => {
      cy.get('#destination_name')
      .clear()
      .type(info.name)
    cy.get('#destination_description')
      .clear()
      .type(info.description)
    cy.get('input[type="submit"]')
      .click()
})