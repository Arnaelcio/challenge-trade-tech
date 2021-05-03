/*global cy, */
/// <reference types="cypress" />

describe("Testes do componente <Interna/ >", () => {
  it(`os card da cidade que acbaou de ser cadastrda está visível `, () => {
    cy.wait(5000);
    cy.visit("http://localhost:3000/");
  cy.get('[data-testid="input-login-register"]').type(
    "arnaelcio@arnaelcio.com"
  );
  cy.wait(2000);
  cy.get('[data-testid="btn-login"]').click({ force: true });
  cy.location().should((loc) => expect(loc.pathname).to.eq("/home"));

  cy.get('[name="city"]').click();
  cy.wait(2000);
  cy.location().should((loc) => expect(loc.pathname).to.eq("/interna"));

  cy.get('[data-testid="card-posts"]').should("exist");
  cy.get('[data-testid="title-card"]').should('contain.text','Chicago').and("exist")
  



})
});
