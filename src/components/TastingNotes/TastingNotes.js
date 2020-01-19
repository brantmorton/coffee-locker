import React from "react";

import styles from "./TastingNotes.module.css";

const tastingNotes = props => {

  return (
    <div className={styles.TastingNotes}>
      <strong>Tasting Notes:</strong>
      <ul>{props.notes}</ul>
    </div>
  );
};

export default tastingNotes;
