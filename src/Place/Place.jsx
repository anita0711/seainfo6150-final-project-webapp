import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import Loading from "../images/loading.gif";
import styles from "./Place.module.css";

const Place = (props) => {
  const [fetchedData, setFetchedData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://demo3996095.mockable.io/places");
      const resultJson = await result.json();
      setFetchedData(resultJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let showPlaceDetails;
  if (!isEmpty(fetchedData)) {
    const place = fetchedData[props.category][props.placeId];
    showPlaceDetails = (
      <div>
        <div>
          <h2>{place.title}</h2>
        </div>
        <div>
          <PlaceDetails
            img1={place.img1._url}
            img2={place.img2._url}
            img3={place.img3._url}
            img4={place.img4._url}
            state={place.state}
            about={place.shortDescription}
            description={place.description}
            bestFor={place.bestFor}
            thingsToDo={place.thingsToDo}
            timeToVisit={place.timeToVisit}
            dining={place.dining}
            hotels={place.hotels}
            map={place.map}
          />
        </div>
      </div>
    );
  } else {
    showPlaceDetails = (
      <div>
        <img className={styles.loading} src={Loading} alt="loading" />
      </div>
    );
  }
  return showPlaceDetails;
};

export default Place;
