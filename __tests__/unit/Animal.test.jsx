import React from "react";
import { render, screen } from "@testing-library/react";
import Animal from "../../src/components/Animal";

let animal = {
  name: "Plains Zebra",
  latin_name: "Equus quagga",
  animal_type: "Mammal",
  active_time: "Diurnal",
  length_min: "7",
  length_max: "8",
  weight_min: "385",
  weight_max: "850",
  lifespan: "15",
  habitat: "Savannah and woodland",
  diet: "Grass",
  geo_range: "Eastern and Southern Africa",
  image_link:
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg",
  id: 137,
};

beforeEach(() => {
  render(<Animal animal={animal} />);
});

describe("Animal component", () => {
  it("shows the name of the animal", async () => {
    const nameText = screen.getByText(/plains zebra/i);

    expect(nameText).toBeInTheDocument();
  });

  it("shows the alt text of a picture of the animal", async () => {
    const imageAltText = screen.getByAltText(/picture of a plains zebra/i);

    expect(imageAltText).toBeInTheDocument();
  });

  it("shows the type of animal", async () => {
    const typeText = screen.getByText(/mammal/i);

    expect(typeText).toBeInTheDocument();
  });

  it("shows the animal lifespan", async () => {
    const lifespanText = screen.getByText(/15/i);

    expect(lifespanText).toBeInTheDocument();
  });

  it("shows the habitat", async () => {
    const habitatText = screen.getByText(/savannah and woodland/i);

    expect(habitatText).toBeInTheDocument();
  });

  it("shows the diet", async () => {
    const dietText = screen.getByText(/grass/i);

    expect(dietText).toBeInTheDocument();
  });
  it("shows the locations", async () => {
    const locationText = screen.getByText(/eastern and southern africa/i);

    expect(locationText).toBeInTheDocument();
  });
});
