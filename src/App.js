import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";

const app = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
};

export default app;
