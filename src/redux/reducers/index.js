import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postFormShowingReducer from "./postFormShowingReducer";
import editFormShowingReducer from "./editFormShowingReducer";

export default combineReducers({
  auth: authReducer,
  postForm: postFormShowingReducer,
  editForm: editFormShowingReducer
});
