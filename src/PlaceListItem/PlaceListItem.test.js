import React from "react";
import { render } from "@testing-library/react";
import PlaceListItem from "./PlaceListItem.jsx";

it("renders the PlaceListItem component correctly", () => {
  const { container } = render(
    <PlaceListItem
      img1="https://mowryjournal.com/wp-content/uploads/2014/10/grand-teton-np-34-sunrise.jpg"
      title="Grand Teton National Park"
    />
  );
  expect(container).toMatchSnapshot();
});
