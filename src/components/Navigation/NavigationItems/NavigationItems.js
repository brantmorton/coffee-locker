import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active>
      My Locker
    </NavigationItem>
    <NavigationItem link="/">Feed</NavigationItem>
  </ul>
);

export default navigationItems;
