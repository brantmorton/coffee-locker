import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import PostContainer from "../../containers/PostContainer/PostContainer";
import LoginForm from "../LoginForm/LoginForm";
import Callback from "../Callback/Callback";
import mapAuthStateToProps from '../../helpers/mapAuthStateToProps'

class Layout extends Component {
  state = {
    isSideDrawerOpen: false
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  };

  render() {
    return (
      <div className={styles.Layout}>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        {/* this route is the authentication callback */}
        <Route path="/callback" render={() => <Callback />} />
        {/* will render login form at '/' if user is not logged in */}
        <Route
          path="/"
          exact
          render={() =>
            this.props.auth.isAuthenticated() ? (
              <Redirect to={"/feed"} />
            ) : (
              <LoginForm />
            )
          }
        />
        <SideDrawer
          isOpen={this.state.isSideDrawerOpen}
          close={this.sideDrawerToggleHandler}
        />
        <PostContainer />
      </div>
    );
  }
}


export default connect(mapAuthStateToProps)(Layout);
