import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const mediaMatch = window.matchMedia("(min-width: 500px)").matches;
const activeStyles = mediaMatch
  ? {
      borderBottom: "4px solid #40a4c8"
    }
  : null;

const navigationItems = props => (
  <ul className={styles.NavigationItems}>
    <NavLink to="/login" activeStyle={activeStyles}>
      Login
    </NavLink>
    <NavLink to="/locker" activeStyle={activeStyles}>
      My Locker
    </NavLink>
    <NavLink to="/feed" activeStyle={activeStyles}>
      Feed
    </NavLink>
  </ul>
);

export default navigationItems;
