import React from "react";

import Input from "../Input/Input";
import Button from "../UI/Button/Button";
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

      <Input
        name="rating"
        purpose={props.rating}
        updateInput={props.updateInput}
      >
        Rating:{" "}
      </Input>

      <Input name="notes" purpose={props.notes} updateInput={props.updateInput}>
        Notes:{" "}
      </Input>
      <Button clicked={props.addPost}>Add Post</Button>
    </div>
  );
};

export default postForm;
