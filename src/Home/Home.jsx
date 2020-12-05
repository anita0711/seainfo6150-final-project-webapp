import React from "react";
import Form from "../Form/Form";
import treefrog from "../images/treefrog.jpg";
import styles from "./Home.module.css";

import HighlyRatedPlaces from "../HighlyRatedPlaces/HighlyRatedPlaces";
import MostVisitedPlaces from "../MostVisitedPlaces/MostVisitedPlaces";
import PocketSuitable from "../PocketSuitable/PocketSuitable";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <div className="highlyRatedPlacesSection">
          <div>
            <h3>Highly Rated Places</h3>
          </div>
          <ul className="">
            <Link className="" to="">
              <li className="">Disneyland</li>
            </Link>
            <Link className="" to="">
              <li className="">Yellowstone</li>
            </Link>
            <Link className="" to="">
              <li className="">Alaska</li>
            </Link>
            <Link className="" to="">
              <li className="">Boston</li>
            </Link>
          </ul>
        </div>
        <div className="mostVisitedPlacesSection">
          <div>
            <h3>Most Visited Places</h3>
          </div>
          <ul className="">
            <Link className="" to="">
              <li className="">Yosemite</li>
            </Link>
            <Link className="" to="">
              <li className="">Grand Teton National Park</li>
            </Link>
            <Link className="" to="">
              <li className="">Grand Canyon</li>
            </Link>
            <Link className="" to="">
              <li className="">Asheville</li>
            </Link>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;

/*data
http://demo3996095.mockable.io/
*/
