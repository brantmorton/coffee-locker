import React, { Component } from "react";

import Rating from "../../components/Rating/Rating";
import TastingNotes from "../../components/TastingNotes/TastingNotes";

class CoffeePost extends Component {
  state = {
    roaster: "Onyx",
    origin: "Ethiopian",
    region: "Guji",
    process: "Natural",
    notes: ["strawberry", "floral", "potatoe"],
    rating: 8
  };

  render() {
    return (
      <div>
        <h1>{this.state.roaster}</h1>
        <p>{this.state.origin} {this.state.region}</p>
        <p>Process: {this.state.process}</p>
        <TastingNotes notes={this.state.notes} />
        <Rating rating={this.state.rating} />
      </div>
    );
  }
}

export default CoffeePost;
