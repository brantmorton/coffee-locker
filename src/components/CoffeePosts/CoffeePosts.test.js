import React from "react";
import ReactDOM from "react-dom";
import CoffeePosts from "./CoffeePosts";
import Auth from "../../Auth";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const auth = new Auth();

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

  const { getAllByTestId } = render(<CoffeePosts auth={auth} posts={posts} />);
  expect(getAllByTestId("post")).toHaveLength(2);
});

it("shows 'Loading...' if there are no available posts", () => {
  const { getByText } = render(<CoffeePosts auth={auth} />);
  expect(getByText("Loading...")).toBeVisible();
});
