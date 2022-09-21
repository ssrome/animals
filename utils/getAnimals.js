async function getRandomAnimal() {
  try {
    const result = await fetch(
      "https://zoo-animal-api.herokuapp.com/animals/rand"
    );

    return result.json();
  } catch (error) {
    return null;
  }
}

module.exports = getRandomAnimal;
