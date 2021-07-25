describe('My First Test', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Visits the initial project page', () => {
    // cy.get('#userenameLabel').contains('Username:')
    cy.get('#h2Resource').contains('Resources')
  })
})
