import React from "react";

import Rating from "../Rating/Rating";
import TastingNotes from "../TastingNotes/TastingNotes";
import styles from "./CoffeePost.module.css";

const coffeePost = props => {
  return (
    <div className={styles.CoffeePost}>
      <h1>{props.roaster}</h1>
      <p>
        {props.origin} {props.region}
      </p>
      <p>Process: {props.process}</p>
      <TastingNotes notes={props.notes} />
      <Rating rating={props.rating} />
    </div>
  );
};

export default coffeePost;
