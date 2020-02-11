import React from "react";
import ReactDOM from "react-dom";
import PostContainer from "./PostContainer";
import Auth from "../../Auth";
import AxiosMock from "axios";

import { render, cleanup, waitForElement } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

// prevents console proptype error from no star-rating prop passed
console.error = jest.fn();

// required to prevent error
const auth = new Auth();

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <PostContainer auth={auth} />
    </BrowserRouter>,
    div
  );
});

it("fetches data", async () => {
  AxiosMock.get.mockResolvedValueOnce({
    data: {
      1: { roaster: "test", origin: "origin" },
      2: { roaster: "test", origin: "origin" },
      3: { roaster: "test", origin: "origin" }
    }
  });

  const { getAllByText } = render(
    <MemoryRouter initialEntries={["/feed"]}>
      <PostContainer auth={auth} />
    </MemoryRouter>
  );
  const resolvedPosts = await waitForElement(() => getAllByText("test"));

  expect(resolvedPosts).toHaveLength(3);
});

it("shows locker when navigated to '/locker'", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/locker"]}>
      <PostContainer
        auth={auth}
        testPosts={{
          1: { roaster: "test", origin: "origin" }
        }}
      />
    </MemoryRouter>
  );
  expect(getByText("test")).toBeVisible();
});

it("shows locker when navigated to '/feed'", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/feed"]}>
      <PostContainer
        auth={auth}
        testPosts={{
          1: { roaster: "TEST1", origin: "origin" }
        }}
      />
    </MemoryRouter>
  );
  expect(getByText("TEST1")).toBeVisible();
});