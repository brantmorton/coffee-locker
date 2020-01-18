import React, { Component } from "react";
import CoffeePosts from "../../components/CoffeePosts/CoffeePosts";
import PostForm from "../../components/PostForm/PostForm";
import Button from "../../components/UI/Button/Button";
import axios from "axios";

class PostContainer extends Component {
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

    // set up error handling
  };

  onDeleteClick = id => {
    axios
      .delete("https://coffee-locker.firebaseio.com/posts/" + id + ".json")
      .then(response => {
        this.getPosts();
      });
    // set up error handling
  };

  render() {
    let postForm = (
      <div>
        <Button clicked={this.props.togglePostForm}>Add Post</Button>
      </div>
    );
    if (this.props.isPostFormShowing) {
      postForm = (
        <PostForm close={this.props.togglePostForm} getPosts={this.getPosts} />
      );
    }

    return (
      <div>
        {postForm}
        <CoffeePosts posts={this.state.posts} delete={this.onDeleteClick} />
      </div>
    );
  }
}

export default PostContainer;
