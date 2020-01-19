import React, { Component } from "react";
import CoffeePosts from "../../components/CoffeePosts/CoffeePosts";
import PostForm from "../../components/PostForm/PostForm";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import styles from "./PostContainer.module.css";
import Aux from "../../hoc/Auxilary/Auxilary";
import Modal from "../../components/UI/Modal/Modal"

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
      <div className={styles.AddButton}>
        <Fab color="secondary" aria-label="add" onClick={this.props.togglePostForm} >
          <AddIcon />
        </Fab>
      </div>
    );
    if (this.props.isPostFormShowing) {
      postForm = (
        <Aux>
          <Modal
            show={this.props.isPostFormShowing}
            modalClosed={this.props.togglePostForm} >
              <PostForm close={this.props.togglePostForm} getPosts={this.getPosts} />
            </Modal>
        </Aux>
      );
    }

    return (
      <Aux>
        {postForm}
        <CoffeePosts posts={this.state.posts} delete={this.onDeleteClick} />
      </Aux>
    );
  }
}

export default PostContainer;
