describe('Automate Testing...', () => {

  beforeEach(() => {
    // cy.visit('/')
  })

  it('Login Page Check Label', () => {
    cy.visit('/')
    cy.get('#userenameLabel').contains('Username:')
    cy.get('#passwordLabe').contains('Password:')
    // TYPE INPUT
    cy.get('#userenameLabel').type('admin')
    cy.get('#passwordLabel').type('password')
    cy.wait(500)
    cy.get('#loginBtn').click()
  })

  it('Register Page Check Label', () => {
    // 
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/form-input')
    })
    cy.get('#firstnameLabel').contains('Firstname:')
    cy.get('#lastnameLabel').contains('Lastname:')
    cy.get('#ageLabel').contains('Age:')
    cy.get('#citizenLabel').contains('Citizen ID:')
  })
})
