/*global cy, */
/// <reference types="cypress" />

describe("Testes do componente <Login/ >", () => {
  it(`existe botões de login e cadastro `, () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="btn-login"]').should("exist");
    cy.get('[data-testid="btn-register"]').should("exist");
  });

  it(`o formulario de login está funcionando para usuário não cadastrado`, () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="input-login-register"]').type(
      "arnaelcio_gomes@arnaelcio.com"
    );
    cy.wait(2000);
    cy.get('[data-testid="btn-login"]').click({ force: true });
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`email não cadastrado`)
    })
    cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
  });

  it(`o formulario de login está funcionando para usuário cadastrado`, () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="input-login-register"]').type(
      "arnaelcio@arnaelcio.com"
    );
    cy.wait(2000);
    cy.get('[data-testid="btn-login"]').click({ force: true });
    cy.location().should((loc) => expect(loc.pathname).to.eq("/home"));
  });

  it(`o formulario de cadastrar email está funcionando`, () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="input-login-register"]').type(
      "arnaelcio_gomes@arnaelcio.com"
    );
    cy.wait(2000);
    cy.get('[data-testid="btn-register"]').click({ force: true });
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Email Registrado com sucesso`)
    })
    cy.wait(2000);

  });

  it(`o novo email foi cadastra com sucesso e o usuário consegue logar com o email que acabou de ser cadastrado`, () => {
    cy.visit("http://localhost:3000/");
    cy.wait(5000);
    cy.get('[data-testid="input-login-register"]').type(
      "arnaelcio_gomes@arnaelcio.com"
    );
    cy.wait(2000);
    cy.get('[data-testid="btn-login"]').click({ force: true });
    cy.location().should((loc) => expect(loc.pathname).to.eq("/home"));
  });
   

});
