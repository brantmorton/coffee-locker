/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

const LOGIN_SUCCESS_PAGE = "/locker";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "coffee-locker.auth0.com",
    clientID: "F7msHctHVz5RyNH0RCN8G5e7FiKEhlHI",
    redirectUri: "https://gifted-bohr-05a08d.netlify.com/callback",
    audience: "https://coffee-locker.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile"
  });

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = async () => {
    console.log('testing')
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResults.accessToken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expires_at", expiresAt);
      //   location.hash = "";
      //   location.pathname = LOGIN_SUCCESS_PAGE;
      // } else {
      //   location.pathname = LOGIN_FAILURE_PAGE;
      //   console.log(err);
      }
    });
  };

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  };

  logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    location.pathname = LOGIN_FAILURE_PAGE;
  };

  getProfile = () => {
    if (localStorage.getItem("id_token")) {
      return jwtDecode(localStorage.getItem("id_token"));
    } else {
      return {};
    }
  };
}
