import React from "react";
import { render } from "@testing-library/react";
import PlaceImage from "./PlaceImage.jsx";

it("renders the PlaceImage component correctly", () => {
  const { container } = render(
    <PlaceImage
      img1="https://www.planetware.com/photos-large/USCA/california-san-francisco-golden-gate-bridge.jpg"
      title="San Francisco"
    />
  );
  expect(container).toMatchSnapshot();
});
