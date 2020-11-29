/// <reference types="cypress" />

context("/posts/[id] - ブログ記事", () => {
  context("/posts/nextjs - What's Next.js", () => {
    beforeEach(() => {
      cy.visit("/posts/nextjs");
    });

    it("アクセスしたURLがあっている", () => {
      cy.location("pathname", { timeout: 10000 }).should(
        "include",
        "/posts/nextjs"
      );
    });

    it("ページが表示されている", () => {
      cy.get("div").contains("What's Next.js");
    });
  });
});
