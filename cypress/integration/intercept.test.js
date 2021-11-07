/// <reference types="cypress" />

context('Intercepting with alias', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/aliasing')
  })

  it('.as() - alias a route for later use', () => {
    const stubbedObject = { customKey: 'TEST VALUE' }
    // Alias the route to wait for its response
    cy.intercept('GET', '**/comments/*', stubbedObject).as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click()

    // https://on.cypress.io/wait
    cy.wait('@getComment')
      // .its('response.statusCode').should('eq', 200)
      .its('response.body')
      .should('deep.equal', stubbedObject)
  })
})
