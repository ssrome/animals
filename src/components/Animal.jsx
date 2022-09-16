import React from "react";
import Name from "./Name";
import styles from "./Animal.module.css";

export default function Animal() {
  return (
    <>
      <Name name="Siamang" />
      <div className={styles.imgContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/DPPP_5348.jpg"
          alt="picture of a siamang"
          height={200}
          width={300}
          className={styles.animalImg}
        />
      </div>
      <div className={styles.infoContainer}>
        <ul className={styles.info}>
          <li>Type: Mammal</li>
          <li>Lifespan: 23</li>
          <li>Habitat: Tropical rainforest</li>
          <li>Diet: Primarily fruit and leaves, some invertebrates</li>
        </ul>
      </div>
    </>
  );
}
