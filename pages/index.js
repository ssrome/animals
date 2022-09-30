import Head from "next/head";
import AnimalContainer from "../src/components/AnimalContainer";
import Heading from "../src/components/Heading";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Random Animals</title>
      </Head>
      <Heading />
      <AnimalContainer />
    </>
  );
}
