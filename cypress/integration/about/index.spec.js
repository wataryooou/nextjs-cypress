/// <reference types="cypress" />

context("/about - About", () => {
  beforeEach(() => {
    cy.visit("/about");
  });

  it("アクセスしたURLがあっている", () => {
    cy.location("pathname", { timeout: 10000 }).should("include", "/about");
  });

  it("ページが表示されている", () => {
    cy.get("p").contains("Next.js");
    cy.get("p").contains("Cypress");
  });
});
