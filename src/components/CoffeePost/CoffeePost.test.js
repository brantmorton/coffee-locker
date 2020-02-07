import React from "react";
import ReactDOM from "react-dom";
import CoffeePost from "./CoffeePost";
import Auth from "../../Auth";

import {
  render,
  cleanup,
  getByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const auth = new Auth();

it("renders without crashing", () => {
  const avoidingPropTypeError = console.error;
  console.error = jest.fn();

  const div = document.createElement("div");
  ReactDOM.render(<CoffeePost auth={auth} />, div);

  console.error = avoidingPropTypeError;
});

it("displays text data", () => {
  const { getByTestId } = render(
    <CoffeePost auth={auth} author="Brant" roaster="Me" />
  );
  expect(getByTestId("author")).toHaveTextContent("Brant");
  expect(getByTestId("roaster")).toHaveTextContent("Me");
});

it("displays star ratings", () => {
  const { getAllByText } = render(<CoffeePost auth={auth} starRating={5} />);
  expect(getAllByText("★")).toBeTruthy();
});

it("displays delete button if logged in user is author", () => {
  const { getByText } = render(
    <CoffeePost auth={auth} author="Brant" testUser="Brant" />
  );
  expect(getByText("Delete")).toBeVisible();
});

it("hides delete button if user is not author", () => {
  const { queryByText } = render(
    <CoffeePost auth={auth} author="Brant" testUser="John" />
  );
  expect(queryByText("Delete")).toBeFalsy();
});