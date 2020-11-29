/// <reference types="cypress" />

context("/contact - Contact", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("アクセスしたURLがあっている", () => {
    cy.location("pathname", { timeout: 10000 }).should("include", "/contact");
  });

  it("ページが表示されている", () => {
    cy.get("a").contains("Twitter");
    cy.get("a").contains("Github");
  });
});
