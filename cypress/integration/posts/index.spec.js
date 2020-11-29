/// <reference types="cypress" />

context("/posts - ブログ一覧", () => {
  beforeEach(() => {
    cy.visit("/posts");
  });

  it("アクセスしたURLがあっている", () => {
    cy.location("pathname", { timeout: 10000 }).should("include", "/posts");
  });

  it("ページが表示されている", () => {
    cy.get("h2").contains("Blog");
  });
});
