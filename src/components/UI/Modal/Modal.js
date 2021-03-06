import React, { Component } from "react";

import styles from "./Modal.module.css";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

  render() {
    return (
      <Aux>
        <Backdrop data-testid="backdrop" show={this.props.show} clicked={this.props.modalClosed} />
        <div
          data-testid="modal"
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
