import getRandomAnimal from "../../../utils/getAnimals";

const ANIMAL = {
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

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(ANIMAL),
  })
);

let animal;

describe("Random animal", () => {
  beforeEach(async () => {
    animal = await getRandomAnimal();
  });

  it("should fetch an animal", () => {
    expect(animal).not.toBeNull();
    //expect(fetch).toHaveBeenCalledTimes(1);
  });
});
