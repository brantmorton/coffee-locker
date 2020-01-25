import React, { Component } from "react";

import Button from "../../components/UI/Button/Button";
//import Aux from "../../hoc/Auxilary/Auxilary";
//import styles from "./LoginForm.module.css";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <p>Welcome to coffee locker!</p>
        <p>Please sign in or register</p>
        <Button clicked={this.props.auth.login}>Log In</Button>
      </div>
    );
  }
}

export default LoginForm;
