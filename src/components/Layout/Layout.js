import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { togglePostForm } from "../../redux/actions";

import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import PostContainer from "../../containers/PostContainer/PostContainer";
import LoginForm from "../LoginForm/LoginForm";
import Callback from "../Callback/Callback";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <div className={styles.Layout}>
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
          isPostFormShowing={this.props.isPostFormShowing}
        />
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
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <PostContainer
          togglePostForm={this.props.togglePostForm}
          isPostFormShowing={this.props.isPostFormShowing}
        />
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
