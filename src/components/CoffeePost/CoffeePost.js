import React from "react";

import TastingNotes from "../TastingNotes/TastingNotes";
import StarRatingComponent from "react-star-rating-controlled-component";
import Button from "../UI/Button/Button";
import styles from "./CoffeePost.module.css";

const coffeePost = props => {
  return (
    <div className={styles.CoffeePost}>
      <p>
        Posted by <strong>{props.author}</strong>
      </p>
      <h1>{props.roaster}</h1>
      <p>
        {props.origin} {props.region}
      </p>
      <p>Process: {props.process}</p>
      <TastingNotes notes={props.notes} />
      <StarRatingComponent
        className={styles.StarRatingComponent}
        name="showRating"
        value={props.starRating}
        editing={false}
      />
      <div></div>
      <p className={styles.DatePosted}>{props.datePosted}</p>
      <Button
        className={styles.Button}
        clicked={props.clickDelete}
        extraStyles="DeleteButton"
      >
        Delete
      </Button>
    </div>
  );
};

export default coffeePost;
