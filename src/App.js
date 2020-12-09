import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import { isEmpty } from "lodash";
import Home from "./Home/Home";
import Header from "./Header/Header";
import PlacesList from "./PlacesList/PlacesList";
import Place from "./Place/Place";
import AboutUs from "./AboutUs/AboutUs";
import Loading from "./images/loading.gif";
import Footer from "./Footer/Footer";
import ContactUs from "./ContactUs/ContactUs";
import Feedback from "./Feedback/Feedback";
import ThankYou from "./ThankYou/ThankYou";
import PageNotFound from "./PageNotFound/PageNotFound";

const App = () => {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    // data fetching code
    const fetchData = async () => {
      const result = await fetch("https://demo3996095.mockable.io/places");
      const resultJson = await result.json();
      setFetchedData(resultJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let showAllPlaces;
  let showSummerPlaces;
  let showFallPlaces;
  let showSpringPlaces;
  let showWinterPlaces;
  let showKidsPlaces;
  let showHikingPlaces;
  let showSightseeingPlaces;

  if (!isEmpty(fetchedData)) {
    const summerPlaces = Object.values(fetchedData.summer);
    const fallPlaces = Object.values(fetchedData.fall);
    const springPlaces = Object.values(fetchedData.spring);
    const winterPlaces = Object.values(fetchedData.winter);
    const kidsPlaces = Object.values(fetchedData.kids);
    const hikingPlaces = Object.values(fetchedData.hiking);
    const sightseeingPlaces = Object.values(fetchedData.sightseeing);
    const allPlaces = summerPlaces
      .concat(fallPlaces)
      .concat(winterPlaces)
      .concat(springPlaces)
      .concat(kidsPlaces)
      .concat(hikingPlaces)
      .concat(sightseeingPlaces);

    showSummerPlaces = (
      <div className={styles.summer}>
        <PlacesList
          places={summerPlaces}
          pageTitle="Best places for Summer season"
        />
      </div>
    );
    showFallPlaces = (
      <div className={styles.fall}>
        <PlacesList
          places={fallPlaces}
          pageTitle="Best places for Fall season"
        />
      </div>
    );
    showSpringPlaces = (
      <div className={styles.spring}>
        <PlacesList
          places={springPlaces}
          pageTitle="Best places for Spring season"
        />
      </div>
    );
    showWinterPlaces = (
      <div className={styles.winter}>
        <PlacesList
          places={winterPlaces}
          pageTitle="Best places for Winter season"
        />
      </div>
    );
    showKidsPlaces = (
      <div className={styles.kids}>
        <PlacesList places={kidsPlaces} pageTitle="Best places for Kids" />
      </div>
    );
    showHikingPlaces = (
      <div className={styles.hiking}>
        <PlacesList places={hikingPlaces} pageTitle="Best places for Hiking" />
      </div>
    );
    showSightseeingPlaces = (
      <div className={styles.sightseeing}>
        <PlacesList
          places={sightseeingPlaces}
          pageTitle="Best places for Sightseeing"
        />
      </div>
    );
    showAllPlaces = (
      <div className={styles.allPlaces}>
        <PlacesList
          places={allPlaces}
          pageTitle="All Places"
          wallpaper="styles.AllPlaces"
        />
      </div>
    );
  } else {
    showAllPlaces = (
      <div>
        <img className={styles.loading} src={Loading} alt="loading" />
      </div>
    );

    showSummerPlaces = (
      <div>
        <img className={styles.loading} src={Loading} alt="loading" />
      </div>
    );
    showFallPlaces = (
      <div>
        <img className={styles.loading} src={Loading} alt="loading" />
      </div>
    );
    showWinterPlaces = (
      <div>
        <img className={styles.loading} src={Loading} alt="loading" />
      </div>
    );
    showSpringPlaces = (
      <div>
        <img className={styles.loading} src={Loading} alt="loading" />
      </div>
    );
    showKidsPlaces = (
      <div>
        <img className={styles.loading} src={Loading} alt="loading" />
      </div>
    );
    showHikingPlaces = (
      <div>
        <img className={styles.loading} src={Loading} alt="loading" />
      </div>
    );
    showSightseeingPlaces = (
      <div>
        <img className={styles.loading} src={Loading} alt="loading" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/contactUs" exact component={ContactUs} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/allPlaces" exact render={() => showAllPlaces} />
        <Route path="/summer" exact render={() => showSummerPlaces} />
        <Route path="/fall" exact render={() => showFallPlaces} />
        <Route path="/winter" exact render={() => showWinterPlaces} />
        <Route path="/spring" exact render={() => showSpringPlaces} />
        <Route path="/kids" exact render={() => showKidsPlaces} />
        <Route path="/hiking" exact render={() => showHikingPlaces} />
        <Route path="/sightseeing" exact render={() => showSightseeingPlaces} />
        <Route
          path="/place/:category/:placeId"
          exact
          render={({ match }) => (
            <Place
              placeId={match.params.placeId}
              category={match.params.category}
            />
          )}
        />
        <Route path="/thankyou" exact component={ThankYou} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
