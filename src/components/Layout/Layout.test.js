import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>,
    div
  );
});

it("shows Page Not Found when user is not authenticated", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/feed"]}>
      <Layout />
    </MemoryRouter>
  );
  expect(getByText("PAGE NOT FOUND")).toBeVisible();
});

// it("shows PostContainer when user is authenticated", () => {
//   const { getByText } = render(
//     <MemoryRouter initialEntries={["/feed"]}>
//       <Layout testAuth />
//     </MemoryRouter>
//   );
//   expect(getByText("Loading...")).toBeVisible();
// });

it("prompts user to login at home page if user is not logged in", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Layout />
    </MemoryRouter>
  );
  expect(getByText("Log In")).toBeVisible();
});

it("displays toolbar (navbar and side drawer)", () => {
  const { getAllByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Layout />
    </MemoryRouter>
  );
  // "Coffee Locker" should exist in Side Drawer and NavBar
  expect(getAllByText("Coffee Locker")).toHaveLength(2);
});

it("shows locker when navigated to '/locker'", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/locker"]}>
      <Layout testAuth />
    </MemoryRouter>
  );
  expect(getByText("Loading...")).toBeVisible();
});
