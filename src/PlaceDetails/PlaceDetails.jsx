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

      <h3>Details:</h3>
      <p>
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
    </>
  );
};

export default PlaceDetails;
