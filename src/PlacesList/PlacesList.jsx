import React from "react";
import { Link } from "react-router-dom";
import PlaceListItem from "../PlaceListItem/PlaceListItem";
import styles from "./PlacesList.module.css";

const PlacesList = (props) => {
  return (
    <div>
      <div className={styles.heading}>{props.pageTitle}</div>
      <ul className={styles.placesList}>
        {props.places.map((place, index) => (
          <Link to={`/place/summer/${place.placeId}`}>
            <li key={index}>
              <PlaceListItem
                img1={place.img1._url}
                img2={place.img2._url}
                img3={place.img3._url}
                img4={place.img4._url}
                title={place.title}
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PlacesList;
