import React from "react";

import styles from "./Button.module.css";

const button = props => (
  <button
    className={[styles.Button, styles[props.btnType], styles[props.extraStyles]].join(" ")}
    onClick={props.clicked}
    type={props.type}
    data-testid="button"
  >
    {props.children}
  </button>
);

export default button;
