import React from "react";

import styles from "./Rating.module.css";

const rating = props => {
  return <p className={styles.Rating}>Rating: {props.rating}</p>;
};

export default rating;
