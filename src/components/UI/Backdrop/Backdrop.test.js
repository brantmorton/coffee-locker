import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Backdrop />, div);
});

it("renders correctly", () => {
  const { getByTestId } = render(<Backdrop show />);
  expect(getByTestId("backdrop"));
});

it("doesn't render without show prop", () => {
  const { queryByTestId } = render(<Backdrop />);
  expect(queryByTestId("backdrop")).toBeNull()
})
