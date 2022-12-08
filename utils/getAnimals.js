async function getRandomAnimal() {

  //reuse with new api
  // try {
  //   const result = await fetch(
  //     "https://zoo-animal-api.herokuapp.com/animals/rand"
  //   );

  //   return result.json();
  // } catch (error) {
  //   return null;
  // }
  let animals = [{
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
  }, {
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
  },
  {
    active_time:"Nocturnal",
    animal_type: "Mammal",
    diet: "Primarily bamboo shoots and leaves; some roots, fruit, grasses, acorns, lichens, small animals",
    geo_range: "South to Southeast Asia",
    habitat: "Mountain forest",
    id: 145,
    image_link:"https://upload.wikimedia.org/wikipedia/commons/5/50/RedPandaFullBody.JPG",
    latin_name: "Ailurus fulgens",
    length_max: "2",
    length_min: "1.5",
    lifespan: "10",
    name: "Red Panda",
    weight_max:"14",
    weight_min: "6.5"
    }
  ]

  return animals[Math.floor(Math.random() * animals.length)]
}

module.exports = getRandomAnimal;
