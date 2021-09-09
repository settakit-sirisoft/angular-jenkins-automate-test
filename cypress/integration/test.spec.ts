describe('Automate Testing...', () => {

  beforeEach(() => {
    // cy.visit('/')
  })

  it('Login Page Check Label', () => {
    cy.visit('/')
    cy.get('#userenameLabel').contains('Username:')
    cy.get('#passwordLabel').contains('Password:')
    // TYPE INPUT
    cy.get('#userenameLabel').type('admin')
    cy.get('#passwordLabel').type('password')
    cy.wait(500)
    cy.get('#loginBtn').click()
  })

  it('Registe Page Check Label', () => {
    // 


    cy.get('#firstnameLabel').contains('Firstname:')
    cy.get('#lastnameLabel').contains('Lastname:')
    cy.get('#ageLabel').contains('Age:')
    cy.get('#citizenLabel').contains('Citizen ID:')
    // TYPE INPUT
    // cy.get('#firstnameLabel').type('admin')
    // cy.get('#lastnameLabel').type('password')
    // cy.get('#ageLabel').type('13')
    // cy.get('#citizenLabel').type('password')
  })
})
