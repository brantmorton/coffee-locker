import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { renderWithRedux } from "../../hoc/renderWithRedux/renderWithRedux";
import CoffeePosts from "./CoffeePosts";

afterEach(cleanup);

// hides propTypes error for testing
console.error = jest.fn();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CoffeePosts />, div);
});

it("renders all posts", () => {
  const posts = {
    1: { roaster: "Kuma", origin: "Ethiopian" },
    2: { roaster: "Onyx", origin: "Kenyan" }
  };

  const { getAllByTestId } = renderWithRedux(<CoffeePosts posts={posts} />);
  expect(getAllByTestId("post")).toHaveLength(2);
});

it("shows landing page if there are no available posts in locker", () => {
  const { getByText } = renderWithRedux(<CoffeePosts empty />);
  expect(getByText("please add a post!")).toBeVisible();
});
