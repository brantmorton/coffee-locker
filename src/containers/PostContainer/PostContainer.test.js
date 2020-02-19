import React from "react";
import ReactDOM from "react-dom";
import PostContainer from "./PostContainer";
import Auth from "../../Auth";
import AxiosMock from "axios";

import { render, cleanup, waitForElement } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRedux, ReactDOMRenderWithRedux } from "../../hoc/renderWithRedux/renderWithRedux"

// prevents console proptype error from no star-rating prop passed
console.error = jest.fn();

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOMRenderWithRedux(
    <BrowserRouter>
      <PostContainer />
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

  const { getAllByText } = renderWithRedux(
    <MemoryRouter initialEntries={["/feed"]}>
      <PostContainer />
    </MemoryRouter>
  );
  const resolvedPosts = await waitForElement(() => getAllByText("test"));

  expect(resolvedPosts).toHaveLength(3);
});

it("shows locker when navigated to '/locker'", () => {
  const { getByText } = renderWithRedux(
    <MemoryRouter initialEntries={["/locker"]}>
      <PostContainer
        testPosts={{
          1: { roaster: "test", origin: "origin" }
        }}
      />
    </MemoryRouter>
  );
  expect(getByText("test")).toBeVisible();
});

it("shows locker when navigated to '/feed'", () => {
  const { getByText } = renderWithRedux(
    <MemoryRouter initialEntries={["/feed"]}>
      <PostContainer
        testPosts={{
          1: { roaster: "TEST1", origin: "origin" }
        }}
      />
    </MemoryRouter>
  );
  expect(getByText("TEST1")).toBeVisible();
});