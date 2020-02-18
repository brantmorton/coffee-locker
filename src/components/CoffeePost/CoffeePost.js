import React from "react";
import { connect } from "react-redux"

import TastingNotes from "../TastingNotes/TastingNotes";
import StarRatingComponent from "react-star-rating-controlled-component";
import Button from "../UI/Button/Button";
import styles from "./CoffeePost.module.css";
import mapAuthStateToProps from "../../helpers/mapAuthStateToProps"

const coffeePost = props => {
  const user = props.auth.getProfile().nickname;

  return (
    <div className={styles.CoffeePost} data-testid="post">
      <p data-testid="author">
        Posted by <strong>{props.author}</strong>
      </p>
      <h2 data-testid="roaster">{props.roaster}</h2>
      <p>
        {props.origin} {props.region}
      </p>
      <p>{props.process} Process</p>
      <TastingNotes notes={props.notes} />
      <StarRatingComponent
        data-testid="starRating"
        className={styles.StarRatingComponent}
        name="showRating"
        value={props.starRating}
        editing={false}
      />
      <div></div>
      <p className={styles.DatePosted}>{props.datePosted}</p>

      {(props.author === user || props.author === props.testUser) && (
        <Button
          className={styles.Button}
          clicked={props.clickDelete}
          extraStyles="DeleteButton"
        >
          Delete
        </Button>
      )}
    </div>
  );
};

export default connect(mapAuthStateToProps)(coffeePost);
