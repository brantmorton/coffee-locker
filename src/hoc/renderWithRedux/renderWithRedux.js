import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "../../store";


export function renderWithRedux(element) {
  return render(<Provider store={store}>{element}</Provider>);
}

export function ReactDOMRenderWithRedux(element, div) {
  return ReactDOM.render(<Provider store={store}>{element}</Provider>, div);
}
