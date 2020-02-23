import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CoffeePosts from "../../components/CoffeePosts/CoffeePosts";
import { togglePostForm } from "../../redux/actions";
import PostForm from "../../components/PostForm/PostForm";
import EditPostForm from "../../components/EditPostForm/EditPostForm";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import styles from "./PostContainer.module.css";
import Aux from "../../hoc/Auxilary/Auxilary";
import Modal from "../../components/UI/Modal/Modal";
import Locker from "../../components/Locker/Locker";

class PostContainer extends Component {
  state = {
    posts: this.props.testPosts,
    selectedPost: null,
    editing: false
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
    if (this.props.route !== "/locker") {
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
    }
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

  onEditClick = id => {
    axios
      .get("https://coffee-locker.firebaseio.com/posts/" + id + ".json")
      .then(response => {
        this.setState({ selectedPost: response.data, editing: true });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  handleEditToggle = () => {
    this.setState(prevState => ({ editing: !prevState.editing }));
  };

  render() {
    let editPostForm;
    let newPostForm = (
      // this is the Material-UI new post button
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
      newPostForm = (
        <Aux>
          <Modal
            show={this.props.isPostFormShowing}
            modalClosed={this.props.togglePostForm}
          >
            <PostForm
              togglePostForm={this.props.togglePostForm}
              getPosts={this.getPosts}
            />
          </Modal>
        </Aux>
      );
    }

    if (this.state.editing) {
      editPostForm = (
        <Aux>
          <Modal show={this.state.editing} modalClosed={this.handleEditToggle}>
            <EditPostForm
              toggleEditForm={this.handleEditToggle}
              getPosts={this.getPosts}
              selectedPost={this.state.selectedPost}
            />
          </Modal>
        </Aux>
      );
    }

    const feedPage = (
      <Aux>
        {this.props.auth.isAuthenticated() ? newPostForm : null}
        {editPostForm}
        <CoffeePosts
          posts={this.state.posts}
          delete={this.onDeleteClick}
          edit={this.onEditClick}
        />
      </Aux>
    );

    const lockerPage = (
      <Aux>
        {this.props.auth.isAuthenticated() ? newPostForm : null}
        {editPostForm}
        <Locker
          posts={this.state.posts}
          delete={this.onDeleteClick}
          edit={this.onEditClick}
        />
      </Aux>
    );

    return (
      <Aux>
        <Route path="/feed" render={() => feedPage} />
        <Route path="/locker" render={() => lockerPage} />
      </Aux>
    );
  }
}

// for redux
const mapStateToProps = state => {
  return {
    auth: state.auth.authObject,
    isPostFormShowing: state.postForm.isPostFormShowing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePostForm: () => dispatch(togglePostForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
