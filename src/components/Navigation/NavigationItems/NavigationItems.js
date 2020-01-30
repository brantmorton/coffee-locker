import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItems.module.css";
import Auth from "../../../Auth";

const auth = new Auth();
const activeStyle = {borderBottom: "4px solid #40a4c8"}

const navigationItems = props =>
  auth.isAuthenticated() ? (
    <ul className={styles.NavigationItems}>
      <li className={styles.LogoutLI}>
        <button className={styles.LogoutBtn} onClick={props.logout}>
          Log Out
        </button>
      </li>
      <NavLink to="/locker" activeStyle={activeStyle}>
        My Locker
      </NavLink>
      <NavLink to="/feed" activeStyle={activeStyle}>
        Feed
      </NavLink>
    </ul>
  ) : (
    <ul className={styles.NavigationItems}>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Login
      </NavLink>
    </ul>
  );

export default navigationItems;
