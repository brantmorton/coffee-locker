import React from "react";
import { MemoryRouter } from "react-router-dom";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {
  renderWithRedux,
  ReactDOMRenderWithRedux
} from "../../hoc/renderWithRedux/renderWithRedux";
import Layout from "./Layout";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOMRenderWithRedux(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>,
    div
  );
});

it("prompts user to login at home page if user is not logged in", () => {
  const { getByText } = renderWithRedux(
    <MemoryRouter initialEntries={["/"]}>
      <Layout />
    </MemoryRouter>
  );
  expect(getByText("Log In")).toBeVisible();
});

it("displays toolbar (navbar and side drawer)", () => {
  const { getAllByText } = renderWithRedux(
    <MemoryRouter initialEntries={["/"]}>
      <Layout />
    </MemoryRouter>
  );
  // "Coffee Locker" should exist in Side Drawer and NavBar
  expect(getAllByText("Coffee Locker")).toHaveLength(2);
});
