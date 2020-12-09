import React from "react";
import { render } from "@testing-library/react";
import PlacesList from "./PlacesList.jsx";
import { BrowserRouter } from "react-router-dom";

it("renders the PlacesList component correctly", () => {
  const placesTestList = [
    {
      category: "summer",
      placeId: "001-yellowstone",
      state: "Wyoming",
      title: "Yellowstone",
      img1: {
        _url:
          "https://www.planetware.com/photos-large/USWY/usa-wyoming-yellowstone-grand-prismatic-spring.jpg",
      },
    },
    {
      category: "summer",
      placeId: "004-glacierNationalPark",
      state: "Montana",
      title: "Glacier National Park",
      img1: {
        _url:
          "https://www.doi.gov/sites/doi.gov/files/blog-post/thumbnail-images/glaciernpshanlin.jpg",
      },
    },
  ];
  const { container } = render(
    <BrowserRouter>
      <PlacesList
        books={Object.values(placesTestList)}
        pageTitle="Best places for Summer season"
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
