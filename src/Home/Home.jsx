import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import disneyLand from "../images/HighlyRatedPlaces/Disneyland.jpg";
import yellowstone from "../images/HighlyRatedPlaces/Yellowstone.jpg";
import newYork from "../images/HighlyRatedPlaces/NewYork.jpg";
import lakeTahoe from "../images/MostVisitedPlaces/Lake-Tahoe.jpg";
import yosemite from "../images/MostVisitedPlaces/Yosemite.jpg";
import washingtonDC from "../images/MostVisitedPlaces/Washington-DC.jpg";

import PlaceImage from "../PlaceImage/PlaceImage";
const Home = () => {
  return (
    <>
      <main className={styles.homeMain}>
        <div className="highlyRatedPlacesSection">
          <div className={styles.title}>
            <h3>Highly Rated Places</h3>
          </div>
          <div className={styles.container}>
            <Link
              to="place/kids/001-orlandoWaltDisneyWorld"
              className={styles.containerItem}
            >
              <PlaceImage
                img1={disneyLand}
                title="Disneyland"
                className={styles.containerItem}
              />
              <p className={styles.placeName}>Disneyland</p>
            </Link>

            <Link
              to="place/summer/001-yellowstone"
              className={styles.containerItem}
            >
              <PlaceImage
                img1={yellowstone}
                title="Yellowstone"
                className={styles.image}
              />
              <p className={styles.placeName}>Yellowstone</p>
            </Link>

            <Link
              to="/place/winter/003-newYork"
              className={styles.containerItem}
            >
              <PlaceImage
                img1={newYork}
                title="New York"
                className={styles.image}
              />
              <p className={styles.placeName}>New York</p>
            </Link>
          </div>
        </div>

        <div className="mostVisitedPlacesSection">
          <div className={styles.title}>
            <h3>Most Visited Places</h3>
          </div>
          <div className={styles.container}>
            <Link
              to="/place/winter/002-lakeTahoe"
              className={styles.containerItem}
            >
              <PlaceImage
                img1={lakeTahoe}
                title="Lake Tahoe"
                className={styles.image}
              />
              <p className={styles.placeName}>Lake Tahoe</p>
            </Link>

            <Link
              to="/place/hiking/001-yosemite"
              className={styles.containerItem}
            >
              <PlaceImage
                img1={yosemite}
                title="Yosemite"
                className={styles.image}
              />
              <p className={styles.placeName}>Yosemite</p>
            </Link>

            <Link
              to="/place/spring/003-washingtonDC"
              className={styles.containerItem}
            >
              <PlaceImage
                img1={washingtonDC}
                title="Washington DC"
                className={styles.image}
              />
              <p className={styles.placeName}>Washington DC</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
