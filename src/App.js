import React from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";
import CoffeePosts from "./containers/CoffeePosts/CoffeePosts";

const app = () => {
  return (
    <div className="App">
      <Layout>
        <CoffeePosts />
      </Layout>
    </div>
  );
};

export default app;
