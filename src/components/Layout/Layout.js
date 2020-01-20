import React, { Component } from "react";
import { Route } from "react-router-dom";

import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import PostContainer from "../../containers/PostContainer/PostContainer";
import LoginForm from "../LoginForm/LoginForm";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    isPostFormShowing: false
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
    return (
      <div className={styles.Layout}>
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
          isPostFormShowing={this.state.isPostFormShowing}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Route path="/login" render={() => <LoginForm />} />
        <Route
          path="/locker"
          render={() => (
            <PostContainer
              togglePostForm={this.postFormToggleHandler}
              isPostFormShowing={this.state.isPostFormShowing}
            />
          )}
        />
      </div>
    );
  }
}

export default Layout;
