import Head from "next/head";
import Heading from "../src/components/Heading";
import Animal from "../src/components/Animal";

function HomePage() {
  return (
    <>
      <Head>
        <title>Random Animals</title>
      </Head>
      <Heading />
      <Animal />
    </>
  );
}

export default HomePage;
