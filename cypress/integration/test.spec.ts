describe('Automate Testing...', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Login Page Check Label', () => {
    cy.get('#userenameLabel').contains('Username:')
    cy.get('#passwordLabel').contains('Password:')
    cy.get('#userenameLabel').type('admin')
    cy.get('#passwordLabel').type('password')
    cy.get('#loginButton').click()
  })
})
