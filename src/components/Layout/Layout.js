import React, { Component } from "react";
import { Route } from "react-router-dom";

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
    let feed = (auth.isAuthenticated() || this.props.testAuth) ? (
      <PostContainer
        togglePostForm={this.postFormToggleHandler}
        isPostFormShowing={this.state.isPostFormShowing}
        auth={auth}
      />
    ) : (
      <h1>PAGE NOT FOUND</h1>
    );

    let locker = (auth.isAuthenticated() || this.props.testAuth) ? (
      <PostContainer
        togglePostForm={this.postFormToggleHandler}
        isPostFormShowing={this.state.isPostFormShowing}
        auth={auth}
        route="/locker"
      />
    ) : (
      <h1>PAGE NOT FOUND</h1>
    );

    return (
      <div className={styles.Layout}>
        
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
          isPostFormShowing={this.state.isPostFormShowing}
          auth={auth}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          auth={auth}
        />
        {/* will render login form at '/' if user is not logged in */}
        <Route
          path="/"
          exact
          render={() => !auth.isAuthenticated() && <LoginForm auth={auth} />}
        />
        <Route path="/feed" render={() => feed} />
        <Route path="/locker" render={() => locker} />
        <Route path="/callback" render={() => <Callback />} />
      </div>
    );
  }
}

export default Layout;
