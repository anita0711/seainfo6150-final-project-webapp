import React from "react";
import { Link } from "react-router-dom";
import PlaceListItem from "../PlaceListItem/PlaceListItem";
import styles from "./PlacesList.module.css";

const PlacesList = (props) => {
  return (
    <div>
      <div className={styles.title}>
        <h3>{props.pageTitle}</h3>
      </div>
      <ul className={styles.placesList}>
        {props.places.map((place, index) => (
          <li key={index} className={styles.placeLink}>
            <Link to={`/place/${place.category}/${place.placeId}`}>
              <PlaceListItem img1={place.img1._url} title={place.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlacesList;
