import React, { Component } from "react";
import CoffeePosts from "../../components/CoffeePosts/CoffeePosts";
import PostForm from "../../components/PostForm/PostForm";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import styles from "./PostContainer.module.css";
import Aux from "../../hoc/Auxilary/Auxilary";
import Modal from "../../components/UI/Modal/Modal";
import Locker from "../../components/Locker/Locker";

class PostContainer extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    this._mounted = true;
    this.getPosts();
  }

  // prevents from setting state if the component is no longer mounted
  componentWillUnmount() {
    this._mounted = false;
  }

  getPosts = () => {
    axios
      .get("https://coffee-locker.firebaseio.com/posts.json")
      .then(response => {
        if (this._mounted) {
          this.setState({ posts: response.data });
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  onDeleteClick = id => {
    axios
      .delete("https://coffee-locker.firebaseio.com/posts/" + id + ".json")
      .then(response => {
        this.getPosts();
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    let postForm = (
      <div className={styles.AddButton}>
        <Fab
          color="secondary"
          aria-label="add"
          onClick={this.props.togglePostForm}
        >
          <AddIcon />
        </Fab>
      </div>
    );
    if (this.props.isPostFormShowing) {
      postForm = (
        <Aux>
          <Modal
            show={this.props.isPostFormShowing}
            modalClosed={this.props.togglePostForm}
          >
            <PostForm
              close={this.props.togglePostForm}
              getPosts={this.getPosts}
              auth={this.props.auth}
            />
          </Modal>
        </Aux>
      );
    }

    let postsDisplayed = (
      <CoffeePosts
        posts={this.state.posts}
        delete={this.onDeleteClick}
        auth={this.props.auth}
      />
    );
    if (this.props.route === "/locker") {
      postsDisplayed = (
        <Locker
          posts={this.state.posts}
          delete={this.onDeleteClick}
          auth={this.props.auth}
        />
      );
    }

    return (
      <Aux>
        {postForm}
        {postsDisplayed}
      </Aux>
    );
  }
}

export default PostContainer;
