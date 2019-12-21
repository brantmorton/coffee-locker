import React from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";
import CoffeePost from "./containers/CoffeePost/CoffeePost";

const app = () => {
  return (
    <div className="App">
      <Layout>
        <CoffeePost />
      </Layout>
    </div>
  );
};

export default app;
