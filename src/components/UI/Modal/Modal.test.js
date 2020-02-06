import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

import {
  render,
  cleanup,
  getByTestId,
  fireEvent,
  container
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Modal />, div);
});

it("renders correctly", () => {
  const { getByTestId } = render(<Modal>Test</Modal>);
  expect(getByTestId("modal")).toHaveTextContent("Test");
});

it("is visible when props.show exists", () => {
  const { getByTestId } = render(<Modal show>Test</Modal>);
  expect(getByTestId("modal")).toBeVisible();
});

it("displays children inside inside the modal", () => {
  const { getByTestId } = render(<Modal show>Hello World</Modal>);
  expect(getByTestId("modal")).toHaveTextContent("Hello World");
});
