/// <reference types="cypress" />

context("/sample - サンプルページ", () => {
  beforeEach(() => {
    cy.visit("/sample");
  });

  it("アクセスしたURLがあっている", () => {
    cy.location("pathname", { timeout: 10000 }).should("include", "/sample");
  });

  it("ページが表示されている", () => {
    cy.get("div").contains("output");
  });
});
