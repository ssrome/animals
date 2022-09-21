describe("Show initial random animal", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads the correct title", () => {
    cy.get('[data-cy="heading-h1"]').contains("Random Animals");
    cy.title().should("eq", "Random Animals");
  });

  it("shows an animal names", () => {
    cy.get('[data-cy="heading-h2"]').should("exist");
    cy.get('[data-cy="heading-h3"]').should("exist");
  });

  it("shows animal information", () => {
    cy.get('[data-cy="animal-info-list"] li').should("have.length", 5);
  });

  it("shows a different animal when the page is reloaded", () => {
    const animalName1 = cy.get('[data-cy="heading-h2"]');
    const animalLatinName1 = cy.get('[data-cy="heading-h3"]');
    cy.reload();
    cy.get('[data-cy="heading-h2"]').should("not.have.value", animalName1);
    cy.get('[data-cy="heading-h3"]').should("not.have.value", animalLatinName1);
  });
});
