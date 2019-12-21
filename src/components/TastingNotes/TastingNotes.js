import React from "react";

import styles from "./TastingNotes.module.css";
import TastingNote from "./TastingNote/TastingNote";

const tastingNotes = props => {
  let transformedNotes = props.notes
    .map((tastingNote, idx) => {
      return <TastingNote key={idx} tastingNote={tastingNote} />;
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  return (
    <div className={styles.TastingNotes}>
      Tasting Notes:
      <ul>{transformedNotes}</ul>
    </div>
  );
};

export default tastingNotes;
