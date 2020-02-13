import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import PostContainer from "../../containers/PostContainer/PostContainer";
import LoginForm from "../LoginForm/LoginForm";
import Auth from "../../Auth";
import Callback from "../Callback/Callback";

const auth = new Auth();

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
          auth={auth}
        />
        {/* this route is the authentication callback */}
        <Route path="/callback" render={() => <Callback />} />
        {/* will render login form at '/' if user is not logged in */}
        <Route
          path="/"
          exact
          render={() =>
            auth.isAuthenticated() ? (
              <Redirect to={"/feed"} />
            ) : (
              <LoginForm auth={auth} />
            )
          }
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          auth={auth}
        />
        <PostContainer
          togglePostForm={this.postFormToggleHandler}
          isPostFormShowing={this.state.isPostFormShowing}
          auth={auth}
        />
      </div>
    );
  }
}

export default Layout;
