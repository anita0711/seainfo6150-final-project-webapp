import React from "react";
import { render } from "@testing-library/react";
import PageNotFound from "./PageNotFound.jsx";

it("renders the PageNotFound component correctly", () => {
  const { container } = render(<PageNotFound />);
  expect(container).toMatchSnapshot();
});
