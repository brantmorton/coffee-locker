/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

const LOGIN_SUCCESS_PAGE = "/feed";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
  callbackUrl = location.hostname.includes("local")
    ? "http://localhost:3000/callback"
    : "http://mycoffeelocker.com/callback";

  auth0 = new auth0.WebAuth({
    domain: "coffee-locker.auth0.com",
    clientID: "F7msHctHVz5RyNH0RCN8G5e7FiKEhlHI",
    redirectUri: this.callbackUrl,
    audience: "https://coffee-locker.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile"
  });

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResults.accessToken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expires_at", expiresAt);
        location.hash = "";
        location.pathname = LOGIN_SUCCESS_PAGE;
      } else {
        location.pathname = LOGIN_FAILURE_PAGE;
        console.log(err);
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
