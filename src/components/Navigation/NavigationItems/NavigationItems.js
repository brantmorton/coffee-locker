import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItems.module.css";
import Auth from "../../../Auth";

const auth = new Auth();

const navigationItems = props =>
  auth.isAuthenticated() ? (
    <ul className={styles.NavigationItems}>
      <li className={styles.LogoutLI}>
        <button className={styles.LogoutBtn} onClick={props.logout}>
          Log Out
        </button>
      </li>
      <NavLink to="/locker" activeClassName={styles.selected} exact>
        My Locker
      </NavLink>
      <NavLink to="/feed" activeClassName={styles.selected} exact>
        Feed
      </NavLink>
    </ul>
  ) : (
    <ul className={styles.NavigationItems}>
      <NavLink to="/" exact activeClassName={styles.selected}>
        Login
      </NavLink>
    </ul>
  );

export default navigationItems;
