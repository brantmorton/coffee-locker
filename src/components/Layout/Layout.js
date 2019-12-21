import React from "react";
import styles from "./Layout.module.css";

const layout = props => {
  return (
    <div className={styles.Layout}>
      <p>Navbar</p>
      {props.children}
    </div>
  );
};

export default layout;
