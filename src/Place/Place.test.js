import React from "react";
import { render } from "@testing-library/react";
import Place from "./Place.jsx";

it("renders the Place component correctly", () => {
  const { container } = render(
    <Place category="summer" placeId="001-yellowstone" />
  );
  expect(container).toMatchSnapshot();
});
