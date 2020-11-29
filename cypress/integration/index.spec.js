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
});
