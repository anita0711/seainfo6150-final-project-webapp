import React from "react";
import Form from "../Form/Form";
import treefrog from "../images/treefrog.jpg";
import styles from "./Home.module.css";
import Categories from "../Categories/Categories";
import HighlyRatedPlaces from "../HighlyRatedPlaces/HighlyRatedPlaces";
import MostVisitedPlaces from "../MostVisitedPlaces/MostVisitedPlaces";
import PocketSuitable from "../PocketSuitable/PocketSuitable";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Travelers</h1>
        <Categories />
      </header>
      <main>
        <HighlyRatedPlaces />
        <MostVisitedPlaces />
        <PocketSuitable />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
