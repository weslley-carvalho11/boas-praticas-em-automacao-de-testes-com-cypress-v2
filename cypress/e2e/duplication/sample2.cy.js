describe('Code duplication bad practice - repetitive tests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  const terms = [
    {
      search: "reactjs"
    },
    {
      search: "vuejs"
    }
  ]

  it('searches for "reactjs"', () => {
    terms.forEach(terms =>{
      cy.search(terms.search)
    })

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })
})
