import React, { Component } from "react";

import CoffeePost from "../../components/CoffeePost/CoffeePost";
import axios from "axios";

class CoffeePosts extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get("https://coffee-locker.firebaseio.com/posts.json")
      .then(response => this.setState({ posts: response.data }));
  };

  addPostHandler = () => {
    const post = {
      roaster: "Brant",
      origin: "Columbian",
      region: "Los Atmos",
      process: "Natural",
      notes: ["blueberry", "honey", "floral"],
      rating: 9,
      key: Date.now()
    };

    axios
      .post("https://coffee-locker.firebaseio.com/posts.json", post)
      .then(response => {
        this.getPosts();
      });
  };

  render() {
    let coffeePosts = <p>Loading...</p>;
    if (this.state.posts) {
      const reversedCoffeePosts = Object.keys(this.state.posts).reverse()
      coffeePosts = reversedCoffeePosts.map(post => {
        return (
          <CoffeePost
            roaster={this.state.posts[post].roaster}
            origin={this.state.posts[post].origin}
            region={this.state.posts[post].region}
            process={this.state.posts[post].process}
            notes={this.state.posts[post].notes}
            rating={this.state.posts[post].rating}
            key={this.state.key}
          />
        );
      });
    }

    return (
      <div>
        <button onClick={this.addPostHandler}>Add Post</button>
        <div>{coffeePosts}</div>;
      </div>
    );
  }
}

export default CoffeePosts;
