import React, { Component } from "react";

import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import CoffeePosts from "../../containers/CoffeePosts/CoffeePosts";
import PostForm from "../PostForm/PostForm";
import Button from "../../components/UI/Button/Button";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    isPostFormShowing: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  postFormToggleHandler = () => {
    this.setState(prevState => ({
      isPostFormShowing: !prevState.isPostFormShowing
    }));
  };

  render() {
    let postForm = (
      <div>
        <Button clicked={this.postFormToggleHandler}>Add Post</Button>
      </div>
    );
    if (this.state.isPostFormShowing) {
      postForm = <PostForm close={this.postFormToggleHandler} />;
    }

    return (
      <div className={styles.Layout}>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        {postForm}
        <CoffeePosts />
      </div>
    );
  }
}

export default Layout;
