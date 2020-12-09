import React from "react";
import { render } from "@testing-library/react";
import PlaceDetails from "./PlaceDetails.jsx";

it("renders the PlaceDetails component correctly", () => {
  const { container } = render(
    <PlaceDetails
      state="California"
      about="Ideal destination for adventurers, hikers and sun seekers"
      thingsToDo="Balboa Park, Coronado Beach, Mission and Pacific Beach"
      dining="Bobboi Natural Gelato, Ambrogio15, Parma Cucina Italiana"
    />
  );
  expect(container).toMatchSnapshot();
});
