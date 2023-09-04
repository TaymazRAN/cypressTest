// cypress/integration/postTest.spec.js
describe("JSONPlaceholder Post Test", () => {
  it("Posts data to the JSONPlaceholder API", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "Test Post Title",
        body: "Test Post Body",
        userId: 1, // Replace with a valid user ID from your JSONPlaceholder data
      },
    }).then((response) => {
      expect(response.status).to.equal(201); // Ensure the response status is 201 (created)
      expect(response.body).to.have.property("id"); // Ensure the response has an 'id' property
    });
  });
});
