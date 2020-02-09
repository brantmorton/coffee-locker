import React from "react";
import ReactDOM from "react-dom";
import PostContainer from "./PostContainer";
import Auth from "../../Auth";
import AxiosMock from "axios";

import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// prevents console proptype error from no star-rating prop passed
console.error = jest.fn()

// required to prevent error
const auth = new Auth();

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PostContainer auth={auth} />, div);
});

it("fetches data", async () => {
  AxiosMock.get.mockResolvedValueOnce({
    data: {
      1: { roaster: "test", origin: "origin" },
      2: { roaster: "test", origin: "origin" },
      3: { roaster: "test", origin: "origin" },
    }
  });

  const { getAllByText } = render(<PostContainer auth={auth} />);
  const resolvedPosts = await waitForElement(() => getAllByText("test"));

  expect(resolvedPosts).toHaveLength(3);
});
