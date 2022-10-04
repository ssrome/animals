import React from "react";
import Image from "next/future/image";
import Name from "./Name";
import styles from "./Animal.module.css";

export default function Animal({ animal }) {
  if (animal) {
    function animalImageLoader({ src, width, quality }) {
      return `https://res.cloudinary.com/dghscys28/image/fetch/${src}?w=${width}&q=${
        quality || 25
      }`;
    }

    const animalImage = (props) => {
      return (
        <Image
          loader={animalImageLoader}
          src={animal.image_link}
          alt={animal.name}
          fill
          className={styles.animalImg}
          priority
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
          sizes="(max-width: 425px) 100vw,
              (max-width: 375px) 50vw,
              33vw"
        />
      );
    };

    return (
      <>
        <Name name={animal.name} latinName={animal.latin_name} />

        <div className={styles.imgContainer}>{animalImage()}</div>
        <div className={styles.infoContainer}>
          <ul className={styles.info} data-cy="animal-info-list">
            <li>Type: {animal.animal_type}</li>
            <li>Lifespan: {animal.lifespan}</li>
            <li>Location: {animal.geo_range}</li>
            <li>Habitat: {animal.habitat}</li>
            <li>Diet: {animal.diet}</li>
          </ul>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
