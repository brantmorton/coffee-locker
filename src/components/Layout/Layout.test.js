import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../store";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const layoutWithProvider = (
  <Provider store={store}>
    <Layout />
  </Provider>
);


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      {layoutWithProvider}
    </MemoryRouter>,
    div
  );
});

it("prompts user to login at home page if user is not logged in", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      {layoutWithProvider}
    </MemoryRouter>
  );
  expect(getByText("Log In")).toBeVisible();
});

it("displays toolbar (navbar and side drawer)", () => {
  const { getAllByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      {layoutWithProvider}
    </MemoryRouter>
  );
  // "Coffee Locker" should exist in Side Drawer and NavBar
  expect(getAllByText("Coffee Locker")).toHaveLength(2);
});
