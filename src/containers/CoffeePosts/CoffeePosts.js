import React, { Component } from "react";

import CoffeePost from "../../components/CoffeePost/CoffeePost";


class CoffeePosts extends Component {
  state = {
    roaster: null,
    origin: null,
    region: null,
    process: null,
    notes: null,
    rating: null
  };

  render() {
    return (
      <div>
        <CoffeePost
          roaster="Onyx"
          origin="Ethiopian"
          region="Guji"
          process="Natural"
          notes={["strawberry", "floral", "stonefruit"]}
          rating="8"
        />
        <CoffeePost
          roaster="Madcap"
          origin="Kenyan"
          region="Gatchatha"
          process="Washed"
          notes={["tomato", "caramel", "chocolate"]}
          rating="5"
        />
      </div>
    );
  }
}

export default CoffeePosts;
