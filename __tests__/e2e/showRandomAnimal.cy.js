describe("Show a random animal", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads the correct title and button", () => {
    cy.get('[data-cy="page-heading"]').contains("Random Animals");
    cy.title().should("eq", "Random Animals");
    cy.get('[data-cy="random-button"]').should("have.text", "Random");
  });

  it("shows an animal when the button is clicked", () => {
    cy.get('[data-cy="random-button"]').click();
    cy.get('[data-cy="name-heading"]').invoke("text").as("animalName");
    cy.get('[data-cy="latin-name-heading"]').invoke("text").as("animalLatinName");
    cy.get('[data-cy="animal-info-list"] li').should("have.length", 5);
  });

  // it("shows a different animal when the button is clicked", () => {
  //   cy.get('[data-cy="random-button"]').click();
  //   cy.get('[data-cy="name-heading"]').invoke("text").as("animalName");
  //   cy.get('[data-cy="latin-name-heading"]').invoke("text").as("animalLatinName");
  //   cy.get('[data-cy="animal-info-list"] li').should("have.length", 5);
  //   cy.get('[data-cy="random-button"]').click();
  //   cy.get("@animalName").then((animalName) => {
  //     cy.get('[data-cy="name-heading"]').should("not.have.text", animalName);
  //   });
  //   cy.get("@animalLatinName").then((animalLatinName) => {
  //     cy.get('[data-cy="latin-name-heading"]').should("not.have.text", animalLatinName);
  //   });
  //   cy.get('[data-cy="animal-info-list"] li').should("have.length", 5);
  // });

  // it("shows a different animal when enter is pressed on keyboard", () => {
  //   cy.get('[data-cy="random-button"]').focus().type("{enter}");
  //   cy.get('[data-cy="name-heading"]').invoke("text").as("animalName");
  //   cy.get('[data-cy="latin-name-heading"]').invoke("text").as("animalLatinName");
  //   cy.get('[data-cy="animal-info-list"] li').should("have.length", 5);

  //   cy.get('[data-cy="random-button"]').focused().type("{enter}");

  //   cy.get("@animalName").then((animalName) => {
  //     cy.get('[data-cy="name-heading"]').should("not.have.text", animalName);
  //   });
  //   cy.get("@animalLatinName").then((animalLatinName) => {
  //     cy.get('[data-cy="latin-name-heading"]').should("not.have.text", animalLatinName);
  //   });
  //   cy.get('[data-cy="animal-info-list"] li').should("have.length", 5);
  // });
});
