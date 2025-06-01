describe('Code duplication bad practice - repetitive tests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  const terms = ['reactjs', 'vuejs', 'angularjs']

  terms.forEach(terms => {
    it(`searches for "${terms}"`, () => {
      cy.search(terms)
      cy.wait('@getStories')

      cy.get('.table-row')
        .should('have.length', 100)
    })
  })
  
})
