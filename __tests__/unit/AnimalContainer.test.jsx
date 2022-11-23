import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AnimalContainer from "../../src/components/AnimalContainer";
import getRandomAnimal from "../../utils/getAnimals";

jest.mock("../../utils/getAnimals");

describe("Container", () => {
  it("shows the random button", () => {
    render(<AnimalContainer />);
    const randomButton = screen.getByRole("button");
    expect(randomButton).toHaveTextContent("Random");
  });

  it("shows details of an animal", async () => {
    const animal = {
      name: "White-bearded Wildebeest",
      latin_name: "Connochaetes taurinus",
      animal_type: "Mammal",
      active_time: "Diurnal",
      length_min: "5",
      length_max: "8",
      weight_min: "350",
      weight_max: "500",
      lifespan: "10",
      habitat: "Savannah and open woodland",
      diet: "Grass",
      geo_range: "Eastern and Southern Africa",
      image_link:
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/Blue_Wildebeest%2C_Ngorongoro.jpg",
      id: 187,
    };

    getRandomAnimal.mockResolvedValue(animal);

    render(<AnimalContainer />);

    const randomButton = screen.getByRole("button");
    fireEvent.click(randomButton);

    await waitFor(() => {
      const animalName = screen.getByRole("heading", {
        level: 2,
      });
      expect(animalName).toBeInTheDocument();
      expect(animalName).toHaveTextContent(/White-bearded Wildebeest/i);
    });
  });
});
