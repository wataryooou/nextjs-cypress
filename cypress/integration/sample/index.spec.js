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

  it("タイピングしたら同じものが表示される", () => {
    cy.get("[data-cy=input]").type("123456abcdef");
    cy.get("[data-cy=output]").contains("123456abcdef");
  });

  xit("このテストは実行されない", () => {
    cy.get("[data-cy=input]").type("123");
    cy.get("[data-cy=output]").contains("123");
  });
});
