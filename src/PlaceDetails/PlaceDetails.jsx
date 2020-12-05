import React from "react";
import { Link } from "react-router-dom";
import styles from "./PlaceDetails.module.css";

const PlaceDetails = (props) => {
  return (
    <div>
      <div className={styles.imageSection}>
        <img src={props.img1} alt={props.title} />
        <img src={props.img2} alt={props.title} />
        <img src={props.img3} alt={props.title} />
        <img src={props.img4} alt={props.title} />
        <img src={props.img5} alt={props.title} />
      </div>
      <p>
        <h3>Details:</h3>
        State: {props.state} <br />
        About: {props.about} <br />
        Description: {props.description} <br />
        Best for: {props.bestFor} <br />
        Things to do: {props.thingsToDo} <br />
        Best time to visit: {props.timeToVisit} <br />
        Dining: {props.dining} <br />
        Hotels: <a href={props.hotels}>See here</a> <br />
        Map: <a href={props.map}>See here</a> <br />
      </p>
    </div>
  );
};

export default PlaceDetails;
