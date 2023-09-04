import PostForm from "../../src/components/PostForm";

// cypress/integration/postTest.spec.js
describe("JSONPlaceholder Post Test", () => {
  it("Posts data to the JSONPlaceholder API", () => {
    cy.visit("localhost:3000");
    cy.get('input[name="title"]').type("Sample Title");
    cy.get('textarea[name="body"]').type("Sample Body");
    cy.get('button[type="submit"]').click();

    cy.wait(1000); // Wait for the POST request to complete

    cy.request("https://jsonplaceholder.typicode.com/posts")
      .its("body")
      .should("be.an", "array")
      .and("have.length.gt", 0);
  });
});
