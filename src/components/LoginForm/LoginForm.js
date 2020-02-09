import React, { Component } from "react";

import Button from "../../components/UI/Button/Button";

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
