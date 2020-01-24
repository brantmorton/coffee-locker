import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItems.module.css";
import Auth from "../../../Auth";

// this makes active styling responsive
const mediaMatch = window.matchMedia("(min-width: 500px)").matches;
const activeStyles = mediaMatch
  ? {
      borderBottom: "4px solid #40a4c8"
    }
  : null;

const auth = new Auth();

const navigationItems = props =>
  auth.isAuthenticated() ? (
    <ul className={styles.NavigationItems}>
      <li className={styles.LogoutLI}>
        <button className={styles.LogoutBtn} onClick={props.logout}>
          Log Out
        </button>
      </li>
      <NavLink to="/locker" activeStyle={activeStyles}>
        My Locker
      </NavLink>
      <NavLink to="/feed" activeStyle={activeStyles}>
        Feed
      </NavLink>
    </ul>
  ) : (
    <ul className={styles.NavigationItems}>
      <NavLink to="/" exact activeStyle={activeStyles}>
        Login
      </NavLink>
    </ul>
  );

export default navigationItems;
