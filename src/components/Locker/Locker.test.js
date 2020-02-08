import React from "react";
import ReactDOM from "react-dom";
import Locker from "./Locker";
import Auth from "../../Auth";

import { render, cleanup, getAllByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// required to prevent error
const auth = new Auth();
// hides propTypes error for testing
console.error = jest.fn();

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Locker />, div);
});

it("filters to the authenticated user's posts", () => {
  const posts = {
    1: { roaster: "Kuma", origin: "Ethiopian", author: "Madison" },
    2: { roaster: "Kuma", origin: "Ethiopian", author: "Brant" }
  };
  const { getAllByText } = render(
    <Locker posts={posts} testUser="Brant" auth={auth} />
  );
  expect(getAllByText("Kuma")).toHaveLength(1)
});
