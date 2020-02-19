import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { renderWithRedux, ReactDOMRenderWithRedux } from "../../hoc/renderWithRedux/renderWithRedux";
import CoffeePost from "./CoffeePost";


afterEach(cleanup);

it("renders without crashing", () => {
  const avoidingPropTypeError = console.error;
  console.error = jest.fn();

  const div = document.createElement("div");
  ReactDOMRenderWithRedux(<CoffeePost />, div);

  console.error = avoidingPropTypeError;
});

it("displays text data", () => {
  const { getByTestId } = renderWithRedux(<CoffeePost author="Brant" roaster="Me" />);
  expect(getByTestId("author")).toHaveTextContent("Brant");
  expect(getByTestId("roaster")).toHaveTextContent("Me");
});

it("displays star ratings", () => {
  const { getAllByText } = renderWithRedux(<CoffeePost starRating={5} />);
  expect(getAllByText("★")).toBeTruthy();
});

it("displays delete button if logged in user is author", () => {
  const { getByText } = renderWithRedux(<CoffeePost author="Brant" testUser="Brant" />);
  expect(getByText("Delete")).toBeVisible();
});

it("hides delete button if user is not author", () => {
  const { queryByText } = renderWithRedux(<CoffeePost author="Brant" testUser="John" />);
  expect(queryByText("Delete")).toBeFalsy();
});
