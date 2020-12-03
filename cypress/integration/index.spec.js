/// <reference types="cypress" />

context("/ - Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("アクセスしたURLがあっている", () => {
    cy.location("pathname", { timeout: 10000 }).should("include", "/");
  });

  it("ページが表示されている", () => {
    cy.get("p").contains("Welcome to page!");
  });

  it("全てのページに遷移できる", () => {
    cy.get("[data-cy='About']").click();
    cy.location("pathname", { timeout: 10000 }).should("include", "/about");

    cy.get("[data-cy='Posts']").click();
    cy.location("pathname", { timeout: 10000 }).should("include", "/posts");

    cy.get("[data-cy='Contact']").click();
    cy.location("pathname", { timeout: 10000 }).should("include", "/contact");

    cy.get("[data-cy='Sample']").click();
    cy.location("pathname", { timeout: 10000 }).should("include", "/sample");

    cy.get("[data-cy='Home']").click();
    cy.location("pathname", { timeout: 10000 }).should("include", "/");
  });
});
