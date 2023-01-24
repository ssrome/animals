async function getRandomAnimal() {

  try {
    const result = await fetch(
      "/api/animals"
    );

    return result.json();
  } catch (error) {
    return null;
  }
  
}

module.exports = getRandomAnimal;
