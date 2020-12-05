import React from "react";
import styles from "./PlaceImage.module.css";

const PlaceImage = ({ img1, title }) => {
  return (
    <div className={styles.image}>
      <img src={img1} alt={title} />
    </div>
  );
};

export default PlaceImage;
