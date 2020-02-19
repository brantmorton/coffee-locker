import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {
  renderWithRedux,
  ReactDOMRenderWithRedux
} from "../../hoc/renderWithRedux/renderWithRedux";
import Locker from "./Locker";


// hides propTypes error for testing
console.error = jest.fn();

afterEach(cleanup);

// cannot renderWithRedux on ReactDOM
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOMRenderWithRedux(<Locker />, div);
});

it("filters to the authenticated user's posts", () => {
  const posts = {
    1: { roaster: "Kuma", origin: "Ethiopian", author: "Madison" },
    2: { roaster: "Kuma", origin: "Ethiopian", author: "Brant" }
  };
  const { getAllByText } = renderWithRedux(
    <Locker posts={posts} testUser="Brant" />
  );
  expect(getAllByText("Kuma")).toHaveLength(1);
});
