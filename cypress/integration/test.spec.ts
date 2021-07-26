describe('Automate Testing...', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Login Page Check Label', () => {
    cy.get('#userenameLabel').contains('Username:')

  })

  // it('Login Page Type Information', () => {
  //   cy.get('#userenameLabel').contains('Username:')
  // })
})
