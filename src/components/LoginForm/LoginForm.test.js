import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import LoginForm from "./LoginForm";
import { ReactDOMRenderWithRedux } from "../../hoc/renderWithRedux/renderWithRedux"

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOMRenderWithRedux(<LoginForm  />, div);
});
