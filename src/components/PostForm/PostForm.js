import React from "react";

import Input from "../Input/Input";
import Button from "../UI/Button/Button";
import StarRatingComponent from "react-star-rating-controlled-component";
import styles from "./PostForm.module.css";

const postForm = props => {
  return (
    <div className={styles.PostForm}>
      <Input
        name="roaster"
        purpose={props.roaster}
        updateInput={props.updateInput}
      >
        Roaster:{" "}
      </Input>

      <Input
        name="origin"
        purpose={props.origin}
        updateInput={props.updateInput}
      >
        Origin:{" "}
      </Input>

      <Input
        name="region"
        purpose={props.region}
        updateInput={props.updateInput}
      >
        Region:{" "}
      </Input>

      <Input
        name="process"
        purpose={props.process}
        updateInput={props.updateInput}
      >
        Process:{" "}
      </Input>

      <Input name="notes" purpose={props.notes} updateInput={props.updateInput}>
        Notes:{" "}
      </Input>

      <div>
        <label htmlFor="setRating">Rating: </label>
        <StarRatingComponent
          className={styles.StarRatingComponent}
          name="setRating"
          starCount={5}
          value={props.starRating}
          onStarClick={props.starClick}
        />
      </div>
    <div>
        <Button clicked={props.addPost}>Submit</Button>
        <Button btnType="Danger" clicked={props.close}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default postForm;
