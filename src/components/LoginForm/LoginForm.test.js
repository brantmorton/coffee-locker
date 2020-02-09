import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import Auth from "../../Auth"


import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// required to prevent error
const auth = new Auth();

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoginForm auth={auth} />, div);
});