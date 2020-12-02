import React from "react";
import Form from "../Form/Form";
import treefrog from "../images/treefrog.jpg";
import styles from "./Home.module.css";

import HighlyRatedPlaces from "../HighlyRatedPlaces/HighlyRatedPlaces";
import MostVisitedPlaces from "../MostVisitedPlaces/MostVisitedPlaces";
import PocketSuitable from "../PocketSuitable/PocketSuitable";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <main>
        <HighlyRatedPlaces />
        <MostVisitedPlaces />
        <PocketSuitable />
        <Footer />
      </main>
    </>
  );
};

export default Home;
