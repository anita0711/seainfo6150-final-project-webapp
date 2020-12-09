import React from "react";
import PlaceImage from "../PlaceImage/PlaceImage";
import styles from "./PlaceListItem.module.css";

const PlaceListItem = (props) => {
  return (
    <div className={styles.placeListItem}>
      <PlaceImage img1={props.img1} title={props.title} />
      <p className={styles.placeName}>{props.title}</p>
    </div>
  );
};

export default PlaceListItem;
