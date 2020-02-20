import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postFormShowingReducer from "./postFormShowingReducer";

export default combineReducers({
  auth: authReducer,
  postForm: postFormShowingReducer
});
