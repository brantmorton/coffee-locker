import React from "react";

import Button from "../UI/Button/Button";

const postButtons = props => (
  <div>
    <Button clicked={props.clickEdit}>Edit</Button>
    <Button clicked={props.clickDelete} btnType="Danger">
      Delete
    </Button>
  </div>
);

export default postButtons;
