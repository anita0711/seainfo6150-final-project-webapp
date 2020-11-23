import React from "react";
import niagara from "../images/fall/Niagara.jpg";
import yosemite from "../images/fall/Yosemite.jpg";
import styles from "./PocketSuitable.module.css";

function PocketSuitable() {
  return (
    <div>
      <h3>Famous for savings</h3>
      <div className={styles.container}>
        <div className={styles.place}>
          <img src={niagara} alt="Niagara" className={styles.images}></img>
          <a href="">Niagara</a>
        </div>
        <div className={styles.place}>
          <img src={yosemite} alt="Yosemite" className={styles.images}></img>
          <a href="">Yosemite</a>
        </div>
        <div className={styles.place}>
          <img src={niagara} alt="Niagara" className={styles.images}></img>
          <a href="">Niagara</a>
        </div>
        <div className={styles.place}>
          <img src={niagara} alt="Niagara" className={styles.images}></img>
          <a href="">Niagara</a>
        </div>
      </div>
    </div>
  );
}
export default PocketSuitable;
