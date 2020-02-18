import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItems.module.css";
import { connect } from "react-redux";
import mapAuthStateToProps from '../../../helpers/mapAuthStateToProps'

const navigationItems = props =>
  props.auth.isAuthenticated() ? (
    <ul className={styles.NavigationItems}>
      <li className={styles.LogoutLI}>
        <button className={styles.LogoutBtn} onClick={props.auth.logout}>
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


export default connect(mapAuthStateToProps)(navigationItems);
