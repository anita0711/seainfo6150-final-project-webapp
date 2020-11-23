import React from "react";
import yellowstone from "../images/summer/Yellowstone.jpg";
import yosemite from "../images/fall/Yosemite.jpg";
import styles from "./HighlyRatedPlaces.module.css";

const HighlyRatedPlaces = function () {
  return (
    <div>
      <h3>Highly Rated Places</h3>
      <div className={styles.container}>
        <div className={styles.place}>
          <img
            src={yellowstone}
            alt="Yellowstone"
            className={styles.images}
          ></img>
          <a href="">Yellowstone</a>
        </div>
        <div className={styles.place}>
          <img src={yosemite} alt="Yosemite" className={styles.images}></img>
          <a href="">Yosemite</a>
        </div>
        <div className={styles.place}>
          <img
            src={yellowstone}
            alt="Yellowstone"
            className={styles.images}
          ></img>
          <a href="">Yellowstone</a>
        </div>
        <div className={styles.place}>
          <img
            src={yellowstone}
            alt="Yellowstone"
            className={styles.images}
          ></img>
          <a href="">Yellowstone</a>
        </div>
      </div>
    </div>
  );
};

export default HighlyRatedPlaces;
