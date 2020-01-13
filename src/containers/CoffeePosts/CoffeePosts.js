import React, { Component } from "react";

import CoffeePost from "../../components/CoffeePost/CoffeePost";
import PostForm from "../../components/PostForm/PostForm";
import Button from "../../components/UI/Button/Button"
import axios from "axios";

class CoffeePosts extends Component {
  state = {
    posts: null,
    roaster: null,
    origin: null,
    region: null,
    process: null,
    rating: null,
    notes: null,
    isPostFormShowing: false
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get("https://coffee-locker.firebaseio.com/posts.json")
      .then(response => this.setState({ posts: response.data }));
    // set up error handling
  };

  addPostHandler = () => {
    const post = {
      roaster: this.state.roaster,
      origin: this.state.origin,
      region: this.state.region,
      process: this.state.process,
      notes: [this.state.notes],
      rating: this.state.rating
    };

    axios
      .post("https://coffee-locker.firebaseio.com/posts.json", post)
      .then(response => {
        this.getPosts();
        // set up error handling
        // maybe a more efficient way to do this?
      });
  };

  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postFormToggleHandler = () => {
    this.setState(prevState => ({
      isPostFormShowing: !prevState.isPostFormShowing
    }));
  };

  render() {
    let coffeePosts = <p>Loading...</p>;
    if (this.state.posts) {
      const reversedCoffeePosts = Object.keys(this.state.posts).reverse();
      coffeePosts = reversedCoffeePosts.map(post => {
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

    let postForm = (
      <Button clicked={this.postFormToggleHandler}>Add Post</Button>
    );
    if (this.state.isPostFormShowing) {
      postForm = (
        <PostForm
          addPost={this.addPostHandler}
          roaster={this.state.roaster}
          updateInput={this.updateInput}
          close={this.postFormToggleHandler}
        >
          Add Post
        </PostForm>
      );
    }

    return (
      <div>
        {postForm}
        {coffeePosts}
      </div>
    );
  }
}

export default CoffeePosts;
