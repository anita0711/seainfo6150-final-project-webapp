import React from "react";
import PlaceImage from "../PlaceImage/PlaceImage";
import styles from "./PlaceListItem.module.css";

const PlaceListItem = (props) => {
  return (
    <div className={styles.placeListItem}>
      <PlaceImage
        img1={props.img1}
        img2={props.img2}
        img3={props.img3}
        img4={props.img4}
      />
      <p>{props.title}</p>
    </div>
  );
};

export default PlaceListItem;
