import React from "react";
import Name from "./Name";

export default function Animal() {
  const animalData = {
    name: "Siamang",
    animalType: "Mammal",
    lifespan: 23,
    habitat: "Tropical rainforest",
    diet: "Primarily fruit and leaves, some invertebrates",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/DPPP_5348.jpg",
  };
  return (
    <>
      <Name name={animalData.name} />
      <img
        src={animalData.imageLink}
        alt="picture of a siamang"
        height={200}
        width={300}
      />
      <div>Type: {animalData.animalType}</div>
      <div>Lifespan: {animalData.lifespan}</div>
      <div>Habitat: {animalData.habitat}</div>
      <div>Diet: {animalData.diet}</div>
    </>
  );
}
