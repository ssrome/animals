import React from "react";
import { render, screen } from "@testing-library/react";
import Animal from "../../src/components/Animal";

beforeEach(() => {
  render(<Animal />);
});

describe("Animal component", () => {
  it("shows the name of the animal", async () => {
    const nameText = screen.getByText(/siamang/i);

    expect(nameText).toBeInTheDocument();
  });

  it("shows the alt text of a picture of the animal", async () => {
    const imageAltText = screen.getByAltText(/picture of a siamang/i);

    expect(imageAltText).toBeInTheDocument();
  });

  it("shows the type of animal", async () => {
    const typeText = screen.getByText(/mammal/i);

    expect(typeText).toBeInTheDocument();
  });

  it("shows the animal lifespan", async () => {
    const lifespanText = screen.getByText(/23/i);

    expect(lifespanText).toBeInTheDocument();
  });

  it("shows the habitat", async () => {
    const habitatText = screen.getByText(/tropical rainforest/i);

    expect(habitatText).toBeInTheDocument();
  });

  it("shows the diet", async () => {
    const dietText = screen.getByText(
      /primarily fruit and leaves, some invertebrates/i
    );

    expect(dietText).toBeInTheDocument();
  });
});
