import Head from "next/head";
import Heading from "../src/components/Heading";
import Animal from "../src/components/Animal";
import getRandomAnimal from "../utils/getAnimals";

export async function getServerSideProps() {
  const randomAnimal = await getRandomAnimal();
  return {
    props: {
      randomAnimal,
    },
  };
}

export default function HomePage({ randomAnimal }) {
  return (
    <>
      <Head>
        <title>Random Animals</title>
      </Head>
      <Heading />
      <Animal animal={randomAnimal} />
    </>
  );
}
