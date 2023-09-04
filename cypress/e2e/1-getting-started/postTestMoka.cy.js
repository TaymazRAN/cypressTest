// cypress/integration/postTest.spec.js
import moxios from "moxios";

describe("JSONPlaceholder Post Test", () => {
  beforeEach(() => {
    // Install moxios to mock Axios requests
    moxios.install();
  });

  afterEach(() => {
    // Uninstall moxios after each test
    moxios.uninstall();
  });

  it("Posts data to the JSONPlaceholder API", () => {
    // Intercept POST request to the JSONPlaceholder API
    moxios.stubRequest("https://jsonplaceholder.typicode.com/posts", {
      status: 201, // Status code for a successful POST request
      response: {
        id: 101, // Replace with the desired ID for your test
      },
    });

    // Visit your React application where you post data
    cy.visit("/");

    // Perform some action that triggers the POST request (e.g., clicking a "Submit" button)
    cy.get('[data-test="submit-button"]').click();

    // Wait for the POST request to be intercepted
    cy.wait("@postRequest").then((xhr) => {
      // Assert that the POST request was made with the correct data
      const requestData = JSON.parse(xhr.request.body);
      expect(requestData.title).to.equal("Test Post Title");
      expect(requestData.body).to.equal("Test Post Body");
      expect(requestData.userId).to.equal(1); // Replace with a valid user ID
    });

    // Assert that the response indicates a successful POST
    cy.contains("Post created successfully").should("exist");
  });
});
