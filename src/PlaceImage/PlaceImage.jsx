import React from "react";
import styles from "./PlaceImage.module.css";

const PlaceImage = ({ img1, title }) => {
  return <img src={img1} alt={title} className={styles.image} />;
};

export default PlaceImage;
