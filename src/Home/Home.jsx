import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import disneyLand from "../images/HighlyRatedPlaces/Disneyland.jpg";
import PlaceImage from "../PlaceImage/PlaceImage";
const Home = () => {
  return (
    <>
      <main>
        <div className="highlyRatedPlacesSection">
          <div>
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
                className={styles.image}
              />
              <p>Disneyland</p>
            </Link>
            <Link className="" to="place/summer/001-yellowstone">
              Yellowstone
            </Link>
            <Link className="" to="">
              Alaska
            </Link>
            <Link className="" to="">
              Boston
            </Link>
          </div>
        </div>

        <div className="mostVisitedPlacesSection">
          <div>
            <h3>Most Visited Places</h3>
          </div>
          <Link className="" to="">
            Yosemite
          </Link>
          <Link className="" to="place/summer/002-grandTetonNationalPark">
            Grand Teton National Park
          </Link>
          <Link className="" to="">
            Grand Canyon
          </Link>
          <Link className="" to="">
            Asheville
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;

/*data
http://demo3996095.mockable.io/
*/
