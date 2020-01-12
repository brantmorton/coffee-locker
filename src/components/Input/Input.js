import React from "react";

import styles from './Input.module.css'

const input = props => {
  return (
    <div>
      <label htmlFor={props.name}>{props.children}</label>
      <input
        className={styles.Input}
        type="text"
        name={props.name}
        value={props.purpose}
        id={props.name}
        onChange={props.updateInput}
      />
    </div>
  );
};

export default input;
