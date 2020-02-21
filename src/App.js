import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store'

import "./App.css";
import Layout from "./containers/Layout/Layout";

const app = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Layout />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default app;
