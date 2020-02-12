import React, { Component } from "react";

import Button from "../../components/UI/Button/Button";
import styles from "./LoginForm.module.css";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <p className={styles.welcomeText}>nice to have you</p>
        <img
          className={styles.loginImage}
          src="login.svg"
          alt="person on laptop"
        />
        <p className={styles.welcomeText}>please sign in or register below</p>
        <Button clicked={this.props.auth.login}>Log In</Button>
      </div>
    );
  }
}

export default LoginForm;
