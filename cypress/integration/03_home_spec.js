/*global cy, */
/// <reference types="cypress" />

describe("Testes do componente <Home/ >", () => {
  it(`o formulario de cidade e cep existem, se os inputs estão funcionando de acordo com os requisitos`, () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="input-login-register"]').type(
      "arnaelcio@arnaelcio.com"
    );
    cy.wait(2000);
    cy.get('[data-testid="btn-login"]').click({ force: true });
    cy.location().should((loc) => expect(loc.pathname).to.eq("/home"));

    cy.get('[data-testid="input-city"]').should("exist");
    cy.get('[data-testid="input-zip-code"]').should("exist");

    cy.get('[data-testid="input-city"]').type("Madison");
    cy.get('[data-testid="input-zip-code"]').type("12345");
    cy.get('[data-testid="btn-zip-code-and-city"]').click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        `1. O CEP é um número maior que 100.000 e menor que 999999. 2. O CEP não pode conter nenhum dígito repetitivo alternado em pares.`
      );
    });
    cy.get('[data-testid="input-city"]').clear();
    cy.get('[data-testid="input-zip-code"]').clear();
    cy.get('[data-testid="input-city"]').type("Madison");
    cy.get('[data-testid="input-zip-code"]').type("121456");
    cy.get('[data-testid="btn-zip-code-and-city"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        `1. O CEP é um número maior que 100.000 e menor que 999999. 2. O CEP não pode conter nenhum dígito repetitivo alternado em pares.`
      );
    });
  });

  it(`faz o cadastro de cidade e cep corretamente`, () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="input-login-register"]').type(
      "arnaelcio@arnaelcio.com"
    );
    cy.wait(2000);
    cy.get('[data-testid="btn-login"]').click({ force: true });
    cy.location().should((loc) => expect(loc.pathname).to.eq("/home"));

    cy.get('[data-testid="input-city"]').should("exist");
    cy.get('[data-testid="input-zip-code"]').should("exist");
    cy.get('[data-testid="input-city"]').type("Chicago");
    cy.get('[data-testid="input-zip-code"]').type("123456");
    cy.get('[data-testid="btn-zip-code-and-city"]').click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Cidade Registrada com sucesso`);
    });
  });
});
