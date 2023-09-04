// cypress/integration/postList.spec.js
describe("JSONPlaceholder Post List", () => {
  it("Displays a list of posts", () => {
    cy.visit("/");
    cy.contains("Posts").should("exist");
    cy.get("li").should("have.length.gt", 0);
  });
});
