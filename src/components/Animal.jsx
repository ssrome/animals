import React from "react";
import Name from "./Name";
import styles from "./Animal.module.css";

export default function Animal({ animal }) {
  if (animal) {
    return (
      <>
        <Name name={animal.name} latinName={animal.latin_name} />
        <div className={styles.imgContainer}>
          <img
            src={animal.image_link}
            alt={animal.name}
            height={235}
            width={314}
            className={styles.animalImg}
          />
        </div>
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
