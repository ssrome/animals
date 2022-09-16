describe("Index page", () => {
  it("Loads the correct title", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Random Animals");
    cy.title().should("eq", "Random Animals");
  });
});
