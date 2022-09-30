import React, { useState } from "react";
import getRandomAnimal from "../../utils/getAnimals";
import Animal from "./Animal";

export default function AnimalContainer() {
  //const [showAnimal, setShowAnimal] = useState(null);
  const [animal, setAnimal] = useState(null);

  async function handleClickAndEnter(event) {
    if (
      (event.target.id === "random-button" && event.code === "Enter") ||
      (event.target.id === "random-button" && event.type === "click")
    ) {
      const randomAnimal = await getRandomAnimal();
      setAnimal(randomAnimal);
    } else {
      setAnimal(null);
    }
  }

  return (
    <div>
      <button
        type="button"
        id="random-button"
        data-cy="random-button"
        onClick={handleClickAndEnter}
        onKeyPress={handleClickAndEnter}
      >
        Random
      </button>
      <Animal animal={animal} />
    </div>
  );
}
