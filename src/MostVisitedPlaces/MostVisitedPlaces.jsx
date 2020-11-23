import React from "react";
import yosemite from "../images/fall/Yosemite.jpg";
import styles from "./MostVisitedPlaces.module.css";

const MostVisitedPlaces = function () {
  return (
    <div>
      <h3>Most Visited Places</h3>
      <div className={styles.container}>
        <div className={styles.place}>
          <img src={yosemite} alt="Yosemite" className={styles.images}></img>
          <a href="">Yosemite</a>
        </div>
        <div className={styles.place}>
          <img src={yosemite} alt="Yosemite" className={styles.images}></img>
          <a href="">Yosemite</a>
        </div>
        <div className={styles.place}>
          <img src={yosemite} alt="Yosemite" className={styles.images}></img>
          <a href="">Yosemite</a>
        </div>
        <div className={styles.place}>
          <img src={yosemite} alt="Yosemite" className={styles.images}></img>
          <a href="">Yosemite</a>
        </div>
      </div>
    </div>
  );
};

export default MostVisitedPlaces;
