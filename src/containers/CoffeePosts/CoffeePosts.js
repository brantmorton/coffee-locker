import React, { Component } from "react";

import CoffeePost from "../../components/CoffeePost/CoffeePost";
import axios from "axios";

class CoffeePosts extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    axios
      .get("https://coffee-locker.firebaseio.com/posts.json")
      .then(response => {
        this.setState({ posts: response.data });
      });
  }

  render() {
    let coffeePosts = <p>Loading...</p>;
    if (this.state.posts) {
      console.log(this.state.posts);
      coffeePosts = Object.keys(this.state.posts).map(post => {
        return (
          <CoffeePost
            roaster={this.state.posts[post].roaster}
            origin={this.state.posts[post].origin}
            region={this.state.posts[post].region}
            process={this.state.posts[post].process}
            notes={this.state.posts[post].notes}
            rating={this.state.posts[post].rating}
            key={post}
          />
        );
      });
    }

    return <div>{coffeePosts}</div>;
  }
}

export default CoffeePosts;
