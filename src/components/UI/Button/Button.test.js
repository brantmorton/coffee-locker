import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders correctly with children", () => {
  const { getByTestId } = render(<Button>Click Me!</Button>);
  expect(getByTestId("button")).toHaveTextContent("Click Me!");
});

it("triggers on click", () => {
  const clickEvent = jest.fn();

  const { getByTestId } = render(<Button clicked={clickEvent} />);
  fireEvent.click(getByTestId("button"));
  expect(clickEvent).toHaveBeenCalled();
});
