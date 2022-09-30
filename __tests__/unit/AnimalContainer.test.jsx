import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AnimalContainer from "../../src/components/AnimalContainer";
import Animal from "../../src/components/Animal";

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
    render(<AnimalContainer />);

    const randomButton = screen.getByRole("button");
    waitFor(async () => {
      fireEvent.click(randomButton);
      render(<Animal animal={animal} />);
    });

    const animalName = screen.getByRole("heading", {
      level: 2,
    });
    expect(animalName).toBeInTheDocument();
    expect(animalName).toHaveTextContent(/White-bearded Wildebeest/i);

    const animalLatinName = screen.getByRole("heading", {
      level: 3,
    });
    expect(animalLatinName).toBeInTheDocument();
    expect(animalLatinName).toHaveTextContent(/Connochaetes taurinus/i);

    const animalListItem = screen.queryAllByRole("listitem");
    expect(animalListItem[0]).toHaveTextContent(/mammal/i);
    expect(animalListItem[1]).toHaveTextContent(/10/i);
    expect(animalListItem[2]).toHaveTextContent(/Eastern and Southern Africa/i);
    expect(animalListItem[3]).toHaveTextContent(/Savannah and open woodland/i);
    expect(animalListItem[4]).toHaveTextContent(/Grass/i);
  });
});
