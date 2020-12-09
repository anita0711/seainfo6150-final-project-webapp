import React from "react";
import styles from "./PlaceDetails.module.css";

const PlaceDetails = (props) => {
  return (
    <div>
      <div className={styles.imageSection}>
        <img src={props.img1} alt={props.imageTitle} />
        <img src={props.img2} alt={props.imageTitle} />
        <img src={props.img3} alt={props.imageTitle} />
        <img src={props.img4} alt={props.imageTitle} />
        <img src={props.img5} alt={props.imageTitle} />
      </div>
      <div className={styles.detailsTag}>
        <h3>Details:</h3>
      </div>
      <div className={styles.detailsContainer}>
        <p>State:</p>
        <p>{props.state} </p>
        <p>About:</p>
        <p>{props.about}</p>
        <p>Description:</p>
        <p>{props.description}</p>
        <p>Best for:</p>
        <p>{props.bestFor} </p>
        <p>Things to do:</p>
        <p>{props.thingsToDo}</p>
        <p>Best time to visit:</p>
        <p>{props.timeToVisit}</p>
        <p>Dining:</p>
        <p>{props.dining}</p>
        <p>Hotels:</p>
        <p>
          <a href={props.hotels}>See here</a>
        </p>
        <div>Map:</div>
        <p>
          <a href={props.map}>See here</a>
        </p>
      </div>
    </div>
  );
};

export default PlaceDetails;
