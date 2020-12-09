import React from "react";
import styles from "./PlaceDetails.module.css";
import ImageSlides from "../ImageSlides/ImageSlides";

const PlaceDetails = (props) => {
  return (
    <>
      <div>
        <ImageSlides
          img1={props.img1}
          img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img5={props.img5}
          title={props.title}
        />
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
    </>
  );
};

export default PlaceDetails;
