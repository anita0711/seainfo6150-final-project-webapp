import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import { isEmpty } from "lodash";
import Home from "./Home/Home.jsx";
import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import Header from "./Header/Header";
import PlacesList from "./PlacesList/PlacesList";
import Place from "./Place/Place";
import AboutUs from "./AboutUs/AboutUs";
import Loading from "./images/loading.gif";
import Footer from "./Footer/Footer";
import ContactUs from "./ContactUs/ContactUs";
import Careers from "./Careers/Careers";
import Feedback from "./Feedback/Feedback";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

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
  let showHighlyRatedPlaces;
  let showSummerPlaces;
  let showFallPlaces;
  let showSpringPlaces;
  let showWinterPlaces;
  let showKidsPlaces;
  let showHikingPlaces;
  let showScenaryPlaces;
  let showCampingPlaces;

  if (!isEmpty(fetchedData)) {
    const highlyRatedPlaces = Object.values(fetchedData.highlyRatedPlaces);
    const summerPlaces = Object.values(fetchedData.summer);
    const fallPlaces = Object.values(fetchedData.fall);
    const springPlaces = Object.values(fetchedData.spring);
    const winterPlaces = Object.values(fetchedData.winter);
    const kidsPlaces = Object.values(fetchedData.kids);
    /* const hikingPlaces = Object.values(fetchedData.hiking);
    const sightSeeingPlaces = Object.values(fetchedData.sightSeeing);
    const campingPlaces = Object.values(fetchedData.camping);*/
    const allPlaces = summerPlaces
      .concat(fallPlaces)
      .concat(winterPlaces)
      .concat(springPlaces)
      .concat(kidsPlaces);

    showHighlyRatedPlaces = (
      <PlacesList places={highlyRatedPlaces} pageTitle="Highly Rated Places" />
    );
    showSummerPlaces = (
      <PlacesList
        places={summerPlaces}
        pageTitle="Best places for Summer season"
      />
    );
    showFallPlaces = (
      <PlacesList places={fallPlaces} pageTitle="Best places for Fall season" />
    );
    showSpringPlaces = (
      <PlacesList
        places={springPlaces}
        pageTitle="Best places for Spring season"
      />
    );
    showWinterPlaces = (
      <PlacesList
        places={winterPlaces}
        pageTitle="Best places for Winter season"
      />
    );
    showKidsPlaces = (
      <PlacesList places={kidsPlaces} pageTitle="Best places for Kids" />
    );
    showAllPlaces = <PlacesList places={allPlaces} pageTitle="All places" />;
  } else {
    showAllPlaces = (
      <div>
        <img className={styles.loading} src={Loading} alt="loading" />
      </div>
    );
    showHighlyRatedPlaces = (
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
    showScenaryPlaces = (
      <div>
        <img className={styles.loading} src={Loading} alt="loading" />
      </div>
    );
    showCampingPlaces = (
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
        <Route path="/careers" exact component={Careers} />
        <Route path="/contactUs" exact component={ContactUs} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/allPlaces" exact render={() => showAllPlaces} />
        <Route path="/summer" exact render={() => showSummerPlaces} />
        <Route path="/fall" exact render={() => showFallPlaces} />
        <Route path="/winter" exact render={() => showWinterPlaces} />
        <Route path="/spring" exact render={() => showSpringPlaces} />
        <Route path="/kids" exact render={() => showKidsPlaces} />
        <Route path="/hiking" exact render={() => showHikingPlaces} />
        <Route path="/scenary" exact render={() => showScenaryPlaces} />
        <Route path="/camping" exact render={() => showCampingPlaces} />
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
      </Switch>
      <Footer />
    </>
  );
};

/*function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            {/* these links should show you how to connect up a link to a specific route //}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/foo">Foo</Link>
            </li>
            <li>
              <Link to="/bar/hats/sombrero">Bar</Link>
            </li>
            <li>
              <Link to="/baz">Baz</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. //}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/foo" exact component={Foo} />
        {/* passing parameters via a route path //}
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Bar
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />
        <Route
          path="/baz"
          exact
          render={() => <Baz content={externalContent} />}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
} */

export default App;
